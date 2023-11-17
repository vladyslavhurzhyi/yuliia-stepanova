import { Manrope } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Yuliia Stepanova Portfolio",
  description: "Seasoned graphic designer and photo retoucher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
