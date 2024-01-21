import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziady Mubaraq",
  description: "Software Engineer, Passionate Educator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="title" content="Ziady Mubaraq" />
        <meta name="description" content="Software Engineer, Passionate Educator" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://braydentw.io/" />
        <meta property="og:title" content="Ziady Mubaraq" />
        <meta property="og:description" content="Software Engineer, Passionate Educator" />
        <meta
          property="og:image"
          content="https://ziterz.dev/static/misc/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziterz.dev/" />
        <meta property="twitter:title" content="Ziady Mubaraq" />
        <meta property="twitter:description" content="Software Engineer, Passionate Educator" />
        <meta
          property="twitter:image"
          content="https://ziterz.dev/static/misc/og.png"
        ></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
