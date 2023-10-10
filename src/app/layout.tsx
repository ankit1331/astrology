import Header from '@/components/Header/Header';
import '../theme/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jageshwar Astro Consultants',
  description:
    'We provide Online astrology services as well as Face to Face Astrology consultation for all types of problems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/images/cropped-logo.webp' sizes='32x32'></link>
      <link rel='icon' href='/images/cropped-logo.webp' sizes='192x192'></link>
      <link rel='apple-touch-icon' href='/images/cropped-logo.webp'></link>
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
