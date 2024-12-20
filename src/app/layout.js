
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import LenisScroll from "@/components/lenis-scroll/LenisScroll";
import DropNav from "@/components/header/DropNav";
import NextTopLoader from 'nextjs-toploader';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="white"
          crawlSpeed={200}
          height={1}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={500}
          template='
          <div class="bar  bar-progress-top" role="bar">
            
        </div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <LenisScroll>
          <DropNav />
          <Header />
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
