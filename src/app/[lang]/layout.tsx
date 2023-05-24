import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import { Inter, Newsreader } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Davi Alcântara",
  description: "Davi Alcântara's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${newsreader.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
