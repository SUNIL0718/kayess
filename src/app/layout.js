import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Image from "next/image";
import whatsapp from "@/public/images/whatsapp.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kayess Internationals",
  description: "Generated by create next app",
  font: "Inter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                <a
                  href="https://wa.me/8437020131"
                  class="whatsapp-float"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={whatsapp} alt="WhatsApp" />
                </a>
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
