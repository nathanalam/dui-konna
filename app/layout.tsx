import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dui Konna - Exquisite Muslin Sarees",
  description:
    "Discover unique handcrafted Muslin sarees from Dui Konna. Traditional craftsmanship meets modern design.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
          strategy="lazyOnload"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
