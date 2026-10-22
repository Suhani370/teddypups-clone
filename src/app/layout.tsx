import type { Metadata } from "next";
import { Bubblegum_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bubblegum = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-plush",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-scrawl",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    template: "%s | TeddyPups U.A.E.",
  },
  description:
    "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
  metadataBase: new URL("https://puppy.instabizweb.com"),
  icons: {
    icon: "/icon.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description:
      "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
    images: ["/brand/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bubblegum.variable} ${caveat.variable}`}>
      <head>
        <meta name="theme-color" content="#fffdf8" />
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="flex min-h-screen flex-col bg-milk text-cocoa antialiased selection:bg-toffee selection:text-cocoa">
        <a href="#main" className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-full bg-cocoa px-5 py-3 font-semibold text-milk">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
