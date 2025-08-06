import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "AssexMarket - Trading Competitions Platform",
  description:
    "Join exciting trading competitions and win substantial cash prizes. Compete with traders worldwide in forex, crypto, and stock market challenges.",
  keywords: [
    "trading",
    "competitions",
    "forex",
    "crypto",
    "stock market",
    "prizes",
    "AssexMarket",
  ],
  authors: [{ name: "AssexMarket Trading Company" }],
  creator: "AssexMarket Trading Company",
  publisher: "AssexMarket Trading Company",
  robots: "index, follow",
  openGraph: {
    title: "AssexMarket - Trading Competitions Platform",
    description:
      "Join exciting trading competitions and win substantial cash prizes. Compete with traders worldwide in forex, crypto, and stock market challenges.",
    url: "https://Assexmarket.com",
    siteName: "AssexMarket",
    type: "website",
    images: [
      {
        url: "/assets/assexxlogo.png",
        width: 1200,
        height: 630,
        alt: "AssetMarket Trading Competitions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssexMarket - Trading Competitions Platform",
    description:
      "Join exciting trading competitions and win substantial cash prizes. Compete with traders worldwide in forex, crypto, and stock market challenges.",
    images: ["/assets/assexxlogo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0dae94",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={`${workSans.className}  antialiased`}>
        {children}
        <Toaster
          position="top-right"
          expand={true}
          richColors={true}
          closeButton={true}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0dae94",
              color: "white",
              border: "none",
              fontFamily: "var(--font-work-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
