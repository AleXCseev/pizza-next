import React from 'react';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Header } from '@/components/shared'; 

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={nunito.variable} lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body>
        <main className='min-h-screen'>
          <Header/>
          {children}
        </main>
      </body>
    </html>
  );
}
