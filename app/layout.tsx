export const metadata = {
  title: "Amazigh Heritage - Bijoux Berbères",
  description: "Bijoux berbères authentiques avec conseiller IA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
