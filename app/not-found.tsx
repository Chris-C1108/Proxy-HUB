import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100 p-4">
      <h2 className="text-xl font-bold mb-2">404 - Page Not Found</h2>
      <p className="text-sm text-slate-400 mb-4">The requested page could not be found.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg text-xs hover:bg-emerald-400 transition-colors"
      >
        Return to Workbench
      </Link>
    </div>
  );
}

