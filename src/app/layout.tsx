import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { exo2, firaSans, geistSans, notoSans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "[SKRP] Sarasota County Sheriff's Office",
  description: "Siesta Key Roleplay - Sarasota County Sheriff's Office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-w-full min-h-full" suppressHydrationWarning>
      <body
        className={`${exo2.className} antialiased text-foreground bg-background min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <ModeToggle />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
