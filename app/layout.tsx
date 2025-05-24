import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display, Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from '@/components/loading-screen'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata = {
  title: "Technology Innovation Company",
  description: "Experience cutting-edge technology solutions designed to transform your digital experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${roboto.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}