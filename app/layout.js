import './globals.css'
import './retro-overrides.css'
import './minecraft-theme.css'
import { AuthProvider } from '@/lib/authContext'

export const metadata = {
  title: 'CareerVibe — AI Resume Parser & Career Path Analyzer',
  description: 'Upload your resume and get AI-powered skill extraction, career path analysis, and personalized gap analysis for your target role. Free during beta.',
  keywords: 'resume parser, AI career path, skill gap analysis, career exploration, resume analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload the poster the hero actually uses (poster.webp was preloaded
            but never referenced, wasting bandwidth and delaying real assets). */}
        <link rel="preload" as="image" href="/media/poster-cinematic.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load webfonts asynchronously: a render-blocking stylesheet to
            fonts.googleapis.com delayed first paint by seconds. media="print"
            fetches without blocking render; the inline script below flips it
            to "all" once loaded so text swaps in. (Server Components can't
            take an onLoad prop, hence the script.) */}
        <link
          id="cv-fonts"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Archivo+Black&family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
          media="print"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Archivo+Black&family=Press+Start+2P&family=VT323&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('IntersectionObserver' in window) document.documentElement.classList.add('rv-js');
            (function () {
              var f = document.getElementById('cv-fonts');
              if (f) f.addEventListener('load', function () { f.media = 'all'; });
            })();
            window.addEventListener('error', function(e) {
              if (e.error instanceof DOMException && e.error.name === 'DataCloneError' &&
                  e.message && e.message.includes('PerformanceServerTiming')) {
                e.stopImmediatePropagation(); e.preventDefault();
              }
            }, true);
          `
        }} />
      </head>
      <body style={{ fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

