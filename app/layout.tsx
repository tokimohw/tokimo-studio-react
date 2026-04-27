import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/Providers"; // componnts 아님!
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TOKIMO ARCHIVE",
  description: "Digital Craftsmanship | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}