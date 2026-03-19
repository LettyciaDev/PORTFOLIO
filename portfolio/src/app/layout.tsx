import "./globals.css";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400" , "700"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[var(--bg-color)] text-[var(--text-color)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
