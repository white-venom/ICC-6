import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ink & Cotton Club | Bespoke Luxury Formalwear & Master Tailoring",
  description: "Experience digital haute couture. Tailored for those who lead. Handcrafted Egyptian cotton formal shirts engineered to perfection.",
  keywords: ["Ink & Cotton Club", "Luxury Formal Shirt", "Bespoke Tailoring", "Haute Couture", "Egyptian Cotton"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serifFont.variable} ${sansFont.variable} dark h-full antialiased custom-cursor-active`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#060608] text-[#F4F4F0] font-sans overflow-x-hidden selection:bg-[#C5A880] selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}

