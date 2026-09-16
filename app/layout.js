import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'Portfolio :: Ahmed Farghally',
  description: 'Show yourself - unique and creative portfolio and resume!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon & Icons */}
        <link rel="icon" href="/mycv/img/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/mycv/img/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/mycv/img/favicon/apple-touch-icon.jpg" />
        <link rel="manifest" href="/mycv/img/favicon/manifest.webmanifest" />

        {/* Facebook Metadata */}
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:title" content="Portfolio & Ahmed Farghally & web designer  & ui ux desginer" />
        <meta property="og:description" content="Show yourself - unique and creative portfolio and resume!" />
        <meta property="og:image" content="/mycv/img/favicon/og-image.html" />

        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#dcdce7" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111" />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#111111] dark:text-zinc-50 font-sans antialiased min-h-screen selection:bg-purple-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
