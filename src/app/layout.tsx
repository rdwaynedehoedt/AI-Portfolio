import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dwayne Dehoedt — AI Portfolio",
  description: "Interactive portfolio by Dwayne (Rosch) Dehoedt — Founder @ Reachly. SaaS, Web, AI.",
  keywords: [
    "Dwayne Dehoedt", 
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Dwayne (Rosch) Dehoedt",
      url: "https://www.linkedin.com/in/dwaynedehoedt",
    },
  ],
  creator: "Dwayne (Rosch) Dehoedt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Dwayne Dehoedt — AI Portfolio",
    description: "Interactive portfolio by Dwayne (Rosch) Dehoedt — Founder @ Reachly. SaaS, Web, AI.",
    siteName: "Dwayne Dehoedt — AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwayne Dehoedt — AI Portfolio",
    description: "Interactive portfolio by Dwayne (Rosch) Dehoedt — Founder @ Reachly. SaaS, Web, AI.",
    creator: "@",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        {/* Analytics removed */}
      </body>
    </html>
  );
}