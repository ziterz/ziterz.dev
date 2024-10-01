import type { Metadata, Viewport } from 'next'
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: 'black',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Ziady Mubaraq',
  description: 'Full-Stack Engineer, Coding Mentor',
  applicationName: 'ziterz',
  authors: [{
    name: 'Ziady Mubaraq',
    url: 'https://ziterz.dev/',
  }],
  keywords: ['Full-Stack Engineer', 'Coding Mentor', 'HTML', 'CSS', 'Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'React', 'React Native', 'Next.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub', 'Jira', 'Hacktiv8', 'Lunash', 'Apple Developer Academy', 'Jakarta', 'Indonesia'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://ziterz.dev/',
    title: 'Ziady Mubaraq',
    description: 'Full-Stack Engineer, Coding Mentor',
    images: [{
      url: 'https://ik.imagekit.io/ziterz/ziady.jpg',
      width: 0,
      height: 0,
      alt: 'Ziady Mubaraq',
    }],
  },
  icons: {
    icon: '/favicon.ico',
  }
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
