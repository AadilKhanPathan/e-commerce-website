import { Quantico } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Titan Watch Store",
  description: "Timeless Elegance on Your wrist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quantico.className}`}>
        {/* <TooltipProvider>{children}</TooltipProvider> */}
        <SessionProvider>
          <SidebarProvider>
            <SidebarInset>
              <header className="flex h-16 items-center bg-transparent px-4">
                <Navbar />
                <SidebarTrigger className="ml-auto rotate-180" />
              </header>

              <main className="flex-1">{children}</main>
            </SidebarInset>

            <AppSidebar side="right" />
          </SidebarProvider>
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
