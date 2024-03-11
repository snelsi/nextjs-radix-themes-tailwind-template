"use client";

import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class">
    <Theme id="root">{children}</Theme>
  </ThemeProvider>
);
