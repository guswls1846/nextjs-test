import GlobalStyles from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/lib/providers";
import { inter, roboto_mono } from "@/styles/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
        <body>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </Providers>
  );
}
