import { Header } from '@/components/header';
import { LinkCard } from '@/components/link-card';
import { getActiveLinks, headerConfig } from '@/lib/links-data';

export default function Home() {
  const links = getActiveLinks();

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-purple focus:text-white focus:rounded-md"
      >
        Zum Hauptinhalt springen
      </a>

      <Header config={headerConfig} />

      <main id="main-content" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto space-y-4">
          {links.map(link => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 px-4 text-sm text-brand-text border-t border-gray-200">
        <p className="font-body">
          &copy; {new Date().getFullYear()} Online Heldinnen. Alle Rechte
          vorbehalten.
        </p>
      </footer>
    </div>
  );
}
