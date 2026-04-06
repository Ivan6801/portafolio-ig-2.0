import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Ivan Gonzalez | Full Stack Senior Developer | Tijuana, Mexico',
  description: 'Desarrollador Full Stack Senior con 7+ años de experiencia en React, Next.js, Node.js, Django y Python. Especializado en crear experiencias digitales accesibles y de alto rendimiento.',
  icons: {
    icon: '/ig.png',
    shortcut: '/ig.png',
    apple: '/ig.png',
  },
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Django', 'Python', 'TypeScript', 'Senior Developer'],
  authors: [{ name: 'Ivan Alexander Gonzalez Gonzalez' }],
  openGraph: {
    title: 'Ivan Gonzalez | Full Stack Senior Developer',
    description: 'Desarrollador Full Stack Senior con 7+ años de experiencia creando experiencias digitales accesibles.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
