import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Script from "next/script";  // <-- import Script
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "auto",
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex h-full flex-1 flex-col">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        {/* ---- Zoho SalesIQ ---- */}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
          `}
        </Script>

        <Script
          id="zoho-salesiq"
          src="https://salesiq.zohopublic.com/widget?wc=siqe89d66d6b441cad58491f9ae1c5d3610757ebd9354914caf5b54534a4e7e6e47"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
