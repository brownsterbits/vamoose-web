import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendKey = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Store in Supabase
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase.from("waitlist").insert([
        {
          email: email.toLowerCase().trim(),
          created_at: new Date().toISOString(),
        },
      ]);

      if (dbError) {
        // Handle duplicate email
        if (dbError.code === "23505") {
          return NextResponse.json(
            { error: "This email is already on the waitlist" },
            { status: 409 }
          );
        }
        console.error("Supabase error:", dbError);
        return NextResponse.json(
          { error: "Failed to save email" },
          { status: 500 }
        );
      }
    } else {
      console.warn("Supabase not configured - email not stored");
    }

    // Send confirmation email via Resend
    if (resendKey) {
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Vamoose <noreply@vamoose.io>",
        to: email,
        subject: "You're on the Vamoose waitlist!",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #263238;">Welcome to Vamoose!</h1>
            <p style="color: #666; font-size: 16px; line-height: 1.6;">
              Thanks for joining our waitlist. You're now one step closer to protecting your pack before disaster strikes.
            </p>
            <p style="color: #666; font-size: 16px; line-height: 1.6;">
              We'll let you know as soon as Vamoose is ready for you.
            </p>
            <p style="color: #FF5722; font-weight: bold; font-size: 16px;">
              Stay prepared,<br>
              The Vamoose Team
            </p>
          </div>
        `,
      });
    } else {
      console.warn("Resend not configured - confirmation email not sent");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
