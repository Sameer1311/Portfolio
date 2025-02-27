import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/Navbar/page";
import "./globals.css";
import { ThemeProvider } from "./Components/theme-provider";
import Mode from "./Components/mode";
import Footer from "./Components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sameer-Portfolio",
  description: "Showcasing my skills and projects.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" href="/Title.webp" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* ✅ ThemeProvider wraps everything */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          {/* ✅ Theme Toggle Button */}
          <div className="fixed z-50 top-4 right-4">
            <Mode />
          </div>

          {/* ✅ Navbar at the top */}
          <Navbar />

          {/* ✅ Main Content - Flex grow ensures the footer stays at the bottom */}
          <main className="flex-grow">{children}</main>

          {/* ✅ Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}