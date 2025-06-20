import type { Metadata } from "next";
import { IBM_Plex_Sans} from "next/font/google";
import '@/app/globals.css'
import {cn} from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  variable: '--font-ibm-plex',
  subsets: ["latin"],
  weight: ['400','500','600','700']
});

export const metadata: Metadata = {
  title: "PixelRevive",
  description: "To unleash the old to new",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables : {colorPrimary : '#624cf5'}}}>
    <html lang="en">
      <body
        className={cn(IBMPlex.variable, "antialiased")}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
