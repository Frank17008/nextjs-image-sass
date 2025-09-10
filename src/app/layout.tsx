import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { App } from "../utils/trpcClient";
import {
  SessionProvider as NextSessionProvider,
  SessionProviderProps,
} from "next-auth/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Sass",
  description: "Provide some services and components for image processing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <App>{children}</App>
        </SessionProvider>
      </body>
    </html>
  );
}

export function SessionProvider(props: SessionProviderProps) {
  return <NextSessionProvider {...props} />;
}
