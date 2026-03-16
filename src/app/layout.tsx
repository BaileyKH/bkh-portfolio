import type { Metadata } from "next";
import { Cinzel_Decorative, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bailey Henderson — Software Engineer",
  description:
    "Phoenix-based software engineer. I build things that work in the dark.",
  openGraph: {
    title: "Bailey Henderson — Software Engineer",
    description:
      "Phoenix-based software engineer. I build things that work in the dark.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${dmSans.variable} ${jetbrains.variable} antialiased bg-void text-bone`}
      >
        {children}
      </body>
    </html>
  );
}
