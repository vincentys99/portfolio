import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { CartProvider } from "@/components/cart-context";
import { QuickViewProvider } from "@/components/quick-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name} | ${site.role}`,
  },
  description: `${site.role}. Browse my skills like a store, add the ones you need to your cart, and check out to get in touch.`,
};

// "cover" lets the sticky bottom bar pad itself clear of the phone's home indicator.
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <CartProvider>
          <QuickViewProvider>
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </QuickViewProvider>
        </CartProvider>
      </body>
    </html>
  );
}
