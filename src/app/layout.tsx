import { MainNav } from "@/containers/Menubar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/containers/Footer";

const satoshi = localFont({
  src: [
    {
      path: "fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | NEX Magazine",
    default: "NEX Magazine",
  },
  description: "News website to read various newses and articles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "mx-auto flex max-w-[78rem] flex-col justify-center border-primary bg-brand md:border-x",
          satoshi.className,
        )}
      >
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
