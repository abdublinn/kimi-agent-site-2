import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Передел', href: 'https://dbpjwctanie3w.ok.kimi.link/', external: true },
  { label: 'Предисловие', href: '#preface' },
  { label: 'I. Три уровня', href: '#part1' },
  { label: 'II. Контекст', href: '#part2' },
  { label: 'III. Методология', href: '#part3' },
  { label: 'IV. Где ищут', href: '#part4' },
  { label: 'V. Где листают', href: '#part5' },
  { label: 'VI. Где деньги', href: '#part6' },
  { label: 'VII. Бренды', href: '#part7' },
  { label: 'VIII. Матрица', href: '#part8' },
  { label: 'IX. Ограничения', href: '#part9' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.filter(l => !l.external).map(l => l.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="https://dbpjwctanie3w.ok.kimi.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#1A1A1A] hover:text-[#E53935] transition-colors flex items-center gap-1"
            >
              Передел
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1 overflow-x-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleLinkClick(e, link.href, link.external)}
                  className={`px-2 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    link.external
                      ? 'text-[#6B6B6B] hover:text-[#E53935]'
                      : activeSection === link.href.slice(1)
                      ? 'text-[#E53935] bg-red-50'
                      : 'text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#1A1A1A] hover:text-[#E53935] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 pb-6 px-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleLinkClick(e, link.href, link.external)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    link.external
                      ? 'text-[#6B6B6B] hover:text-[#E53935] hover:bg-gray-50'
                      : activeSection === link.href.slice(1)
                      ? 'text-[#E53935] bg-red-50'
                      : 'text-[#1A1A1A] hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
