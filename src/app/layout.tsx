import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Fume.Fit - Ultimate Metabolic Reset Formula",
  description:
    "Fix the root cause of diabetes, thyroid & belly fat with the FUME science-backed Metabolic Reset Framework.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
