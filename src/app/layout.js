import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Upflair",
  description: "Empowering your Potential, Energising your Growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  
      >
        {children}
      </body>
    </html>
  );
}
