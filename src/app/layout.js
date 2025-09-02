import TopBar from "@/components/Global/TopBar";
import "./globals.css";
import AnimatedChatbot from "@/components/Global/AnimatedChatbot";
import Headers from "@/components/Global/Headers";
import Footer from "@/components/Global/Footer";


export const metadata = {
  title: "Upflair",
  description: "Empowering your Potential, Energising your Growth",


};

export const favicon = { favicon  : "./favicon.png",};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <TopBar/>
              <Headers />
        {children}
        <AnimatedChatbot />
              <Footer />
      </body>
    </html>
  );
}
