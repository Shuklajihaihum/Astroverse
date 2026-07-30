import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "AstroVerse AI | Explore the Universe", description: "AI-powered astronomy ecosystem for research, learning and discovery." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
