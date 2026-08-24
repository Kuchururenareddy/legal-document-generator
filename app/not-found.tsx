export default function NotFound() {
  return (
    <div className="ld-page flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="ld-title">Page not found</h1>
      <p className="ld-subtitle">The requested page is not part of this service.</p>
      <a className="ld-btn-primary" href="/welcome">Return to dashboard</a>
    </div>
  );
}
