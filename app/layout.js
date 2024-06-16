export const metadata = {
  title: "Next One",
  description: "The next one is the best one.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
