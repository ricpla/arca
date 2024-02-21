import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Arca",
  description: "Arca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
