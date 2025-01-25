import "./globals.css";

export const metadata = {
  title: "Social Me",
  description: "Social Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
