import "./globals.css";
import { Inter } from "next/font/google";
import GlobalStyles from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </Providers>
  );
}
