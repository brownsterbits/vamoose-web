import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './join.module.css';

export const metadata: Metadata = {
    title: 'Join a Pack on Vamoose',
    description: "You've been invited to join a pack on Vamoose — disaster prep for families.",
    openGraph: {
        title: 'Join a Pack on Vamoose',
        description: "You've been invited to join a pack on Vamoose. Download the app to get started.",
        type: 'website',
        url: 'https://vamoose.io/join/',
    },
};

export default async function JoinPage(props: { params: Promise<{ code: string }> }) {
    const params = await props.params;
    // Format code: WOLF7K3M -> WOLF-7K3M
    let code = params.code.toUpperCase().replace(/-/g, '');
    if (code.length === 8) {
        code = code.slice(0, 4) + '-' + code.slice(4);
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    VAMOOSE<span className={styles.dot}>.</span>
                </div>

                <div className={styles.iconCircle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                    </svg>
                </div>

                <h1 className={styles.h1}>You&apos;ve been invited to join a pack</h1>
                <p className={styles.subtitle}>
                    Someone wants you in their emergency prep group on Vamoose.
                </p>

                <div className={styles.codeContainer}>
                    <div className={styles.codeLabel}>Your Invite Code</div>
                    <div className={styles.codeValue} id="invite-code">
                        {code}
                    </div>
                </div>

                <Link
                    href="https://apps.apple.com/app/vamoose-disaster-prep/id0000000000"
                    className={styles.appStoreBtn}
                    id="app-store-link"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download on the App Store
                </Link>

                <div className={styles.divider}>already have the app?</div>

                <div className={styles.instructions}>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>1</span>
                            <span className={styles.stepText}>
                                Open <strong>Vamoose</strong> on your iPhone
                            </span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>2</span>
                            <span className={styles.stepText}>
                                Go to <strong>Pack → Menu → Join a Pack</strong>
                            </span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>3</span>
                            <span className={styles.stepText}>Enter the invite code above</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <Link href="https://vamoose.io">vamoose.io</Link> · Calm in Chaos
            </div>
        </div>
    );
}
