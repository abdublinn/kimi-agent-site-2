import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  className = '',
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-4 lg:py-6 ${className}`}
    >
      <div
        className={`container-main max-w-3xl transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full text-left rounded-xl border border-gray-200 bg-white px-5 py-4 hover:bg-gray-50 transition-colors"
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">{title}</h2>
              {subtitle && <p className="text-lg text-[#6B6B6B] mt-2">{subtitle}</p>}
              <p className="text-sm text-[#6B6B6B] mt-2">
                {isOpen ? 'Свернуть раздел' : 'Развернуть раздел'}
              </p>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-[#6B6B6B] mt-1 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        <div
          id={`${id}-content`}
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[20000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          {imageSrc && (
            <div className="mb-6">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full rounded-xl border border-gray-200"
                loading="lazy"
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none">{children}</div>
        </div>
      </div>
    </section>
  );
}
