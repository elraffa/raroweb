import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Script from "next/script";

const inter = Inter({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Raro",
  description: "Un dúo singular.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="beforeInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16582830774"
      ></Script>
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16582830774');
        `}
      </Script>
      <body className={inter.className}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
