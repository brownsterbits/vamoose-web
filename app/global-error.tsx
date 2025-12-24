'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-off-white text-secondary">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
                    <button
                        className="bg-primary text-white px-6 py-2 rounded-full hover:brightness-110"
                        onClick={() => reset()}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
