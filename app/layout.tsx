import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sravya Vemuri | AI & ML Engineer | Full Stack Developer',
  description: 'Production-ready developer portfolio of Sravya Vemuri. Specializing in Artificial Intelligence, Machine Learning, Computer Vision, and modern web application development.',
  keywords: [
    'Sravya Vemuri',
    'AI Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Python Developer',
    'React Developer',
    'Next.js',
    'Computer Vision',
    'Deep Learning',
    'Portfolio'
  ],
  authors: [{ name: 'Sravya Vemuri' }],
  openGraph: {
    title: 'Sravya Vemuri | AI & ML Engineer | Full Stack Developer',
    description: 'Specializing in Artificial Intelligence, Machine Learning, Computer Vision, and modern web applications.',
    type: 'website',
    url: 'https://sravyavemuri.dev',
    siteName: 'Sravya Vemuri Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sravya Vemuri | AI & ML Engineer',
    description: 'AI & ML Engineer & Full Stack Developer portfolio.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#090d16] text-slate-100 min-h-screen antialiased bg-grid-pattern relative selection:bg-cyan-500 selection:text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
