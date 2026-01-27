export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Just pass through - the real layout is in [locale]/layout.tsx
  return children;
}
