import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziady Mubaraq",
  description: "Full-Stack Engineer, Educator"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="title" content="Ziady Mubaraq" />
        <meta
          name="description"
          content="Full-Stack Engineer, Educator"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziterz.dev/" />
        <meta property="og:title" content="Ziady Mubaraq" />
        <meta
          property="og:description"
          content="Full-Stack Engineer, Educator"
        />
        <meta
          property="og:image"
          content="https://ziterz.dev/static/ziady.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziterz.dev/" />
        <meta property="twitter:title" content="Ziady Mubaraq" />
        <meta
          property="twitter:description"
          content="Full-Stack Engineer, Educator"
        />
        <meta
          property="twitter:image"
          content="https://ziterz.dev/static/ziady.jpg"
        ></meta>

        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#07070f" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
