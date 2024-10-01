import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'Ziady Mubaraq',
  description: 'Full-Stack Engineer, Coding Mentor',
  applicationName: 'ziterz',
  authors: [{
    name: 'Ziady Mubaraq',
    url: 'https://ziterz.dev/',
  }],
  keywords: ['Full-Stack Engineer', 'Coding Mentor', 'HTML', 'CSS', 'Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'React', 'React Native', 'Next.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub', 'Jira', 'Hacktiv8', 'Lunash', 'Apple Developer Academy', 'Jakarta', 'Indonesia'],
  themeColor: 'dark',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  manifest: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [{
      url: "https://example.com/og.png",
    }],
  },
  openGraph: {
    type: 'website',
    url: 'https://ziterz.dev/',
    title: 'Ziady Mubaraq',
    description: 'Full-Stack Engineer, Coding Mentor',
    images: [{
      url: 'https://ziterz.dev/static/ziady.jpg',
      width: 0,
      height: 0,
      alt: 'Ziady Mubaraq',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
