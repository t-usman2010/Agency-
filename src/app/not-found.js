import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-950 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-dark-200 dark:text-dark-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">Page not found</h2>
        <p className="text-dark-500 dark:text-dark-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
