import Footer from '@/components/ui/layout/footer';
import Header from '@/components/ui/layout/header';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DiscountPopupSection from '@/views/home-section/components/DiscountPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Card Solutions',
  description:
    'Effortlessly Create and Send Gift Cards with Top Card Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DiscountPopupSection />
        {/* <Header />
        <main className='min-h-[calc(100vh-64px-100px)] md:min-h-[calc(100vh-64px-68px)]'> */}
          {children}
        {/* </main> */}
        {/* <Footer /> */}
        <Toaster theme='dark'  position='top-center' />
      </body>
    </html>
  );
}
