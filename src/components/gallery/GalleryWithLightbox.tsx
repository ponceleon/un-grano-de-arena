import { useState } from 'react';
import GalleryLightbox from './GalleryLightbox';
import type { GallerySlide } from '../../types/gallery';

interface GalleryWithLightboxProps {
  slides: GallerySlide[];
}

export default function GalleryWithLightbox({ slides }: GalleryWithLightboxProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setLightboxIndex(i)}
            className="relative group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="aspect-[4/3] rounded-xl object-cover w-full cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              loading="lazy"
              style={{ backgroundColor: '#e5e7eb' }}
            />
            {slide.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          slides={slides}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
