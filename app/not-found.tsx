import Link from "next/link";

export default function RootNotFound() {
  // This should rarely be reached due to middleware handling routing
  // Root layout already provides html/body, so we just return content
  return (
    <div style={{ padding: "2rem", textAlign: "center", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: "2rem", fontSize: "1.125rem" }}>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/en" style={{ display: "inline-block", padding: "0.75rem 2rem", backgroundColor: "#eab308", color: "#000", fontWeight: "600", borderRadius: "0.375rem", textDecoration: "none" }}>
          Go to Home
        </Link>
      </div>
    </div>
  );
}
