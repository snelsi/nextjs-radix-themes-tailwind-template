import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import { Providers } from "./providers";

import "@radix-ui/themes/styles.css";

import "@/styles/reset.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js + Radix Themes",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
