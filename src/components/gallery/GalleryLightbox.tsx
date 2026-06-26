import { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures';
import type { GallerySlide } from '../../types/gallery';

interface GalleryLightboxProps {
  slides: GallerySlide[];
  initialIndex: number;
  onClose: () => void;
}

function LikeIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7.119c0-.9416.1493-1.7755.4331-2.5135.298-.7626.7011-1.4022 1.204-1.9318.5048-.5317 1.093-.9398 1.7718-1.2288l.0073-.0031C5.0877 1.1497 5.816 1 6.6121 1c.9384 0 1.7267.1993 2.3933.57l.0062.0033c.7.3828 1.2437.8793 1.65 1.4904l.8203 1.2335.8373-1.222c.4247-.6198.9773-1.12 1.6726-1.5037l.0027-.0015c.6667-.3707 1.455-.57 2.3934-.57.805 0 1.5318.1502 2.1927.4404h-.0001l.0106.0045c.6789.289 1.267.697 1.7718 1.2288.5017.5284.9004 1.1662 1.1907 1.927l.0038.0097c.29.7366.4426 1.5687.4426 2.5086 0 1.4362-.3784 2.8836-1.1671 4.353-.7996 1.4896-1.9408 2.96-3.4431 4.4076l-.0018.0017c-1.5011 1.4534-3.2875 2.8511-5.3656 4.1903l-.0055.0036a3.3878 3.3878 0 0 1-.4304.2375l-.0068.0032-.0069.0032a.7421.7421 0 0 1-.0709.0302 1.0338 1.0338 0 0 1-.0884-.0366 2.7716 2.7716 0 0 1-.4019-.2261l-.0112-.0076-.0114-.0074c-2.0785-1.3395-3.8736-2.7379-5.391-4.1928-1.5014-1.4468-2.642-2.9164-3.4414-4.4052C1.3752 10.0044 1 8.5564 1 7.1191Z" stroke={filled ? '#ef4242' : '#fff'} fill={filled ? '#ef4242' : 'none'} stroke-width="2"/>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6283 24h12.7434c1.1947 0 2.0981-.2902 2.7102-.8706.6121-.5735.9181-1.4196.9181-2.5385V10.2692c0-1.1189-.306-1.965-.9181-2.5384-.6121-.5804-1.5155-.8707-2.7102-.8707h-3.0089v2.0665h2.8651c.5088 0 .8997.1293 1.1725.388.2803.2518.4204.633.4204 1.1434v9.9546c0 .5105-.1401.8916-.4204 1.1433-.2728.2588-.6637.3882-1.1725.3882H3.7611c-.5163 0-.9108-.1294-1.1837-.3882-.2654-.2517-.3982-.6328-.3982-1.1433V10.458c0-.5105.1328-.8916.3982-1.1433.2729-.2588.6674-.3881 1.1837-.3881h2.8871V6.86H3.6283c-1.1947 0-2.098.2903-2.7102.8707C.3061 8.3042 0 9.1503 0 10.2692v10.3217c0 1.1259.306 1.9755.9181 2.549.6121.5734 1.5155.8601 2.7102.8601ZM10 15.6399c.2802 0 .5199-.0944.719-.2833.2065-.1888.3098-.4125.3098-.6713V4.1223l-.0885-1.5629.6858.7658 1.5487 1.5734c.1843.1888.413.2832.6858.2832.2508 0 .4646-.077.6416-.2307.1844-.1609.2766-.3637.2766-.6084 0-.2238-.0959-.4301-.2876-.619L10.7743.3358c-.1327-.126-.2618-.2133-.3871-.2623a1.0561 1.0561 0 0 0-.7744 0c-.1253.049-.258.1364-.3982.2623l-3.7168 3.388c-.1844.1889-.2766.3952-.2766.619 0 .2447.0849.4475.2545.6084.177.1538.3945.2307.6526.2307.2802 0 .5089-.0944.6859-.2832l1.5486-1.5734.697-.7658-.0886 1.563v10.5629c0 .2588.0996.4825.2987.6713.2065.1889.4499.2833.7301.2833Z" fill="#fff"/>
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

const LIKE_STORAGE_KEY = 'ugda-gallery-likes';

function getLikedSet(): Set<string> {
  try {
    const raw = localStorage.getItem(LIKE_STORAGE_KEY);
    return new Set<string>(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set<string>();
  }
}

function toggleLiked(id: string): Set<string> {
  const set = getLikedSet();
  if (set.has(id)) {
    set.delete(id);
  } else {
    set.add(id);
  }
  localStorage.setItem(LIKE_STORAGE_KEY, JSON.stringify([...set]));
  return set;
}

export default function GalleryLightbox({ slides, initialIndex, onClose }: GalleryLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { axis: 'y', loop: false, align: 'start', startIndex: initialIndex },
    [WheelGesturesPlugin()]
  );

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [muted, setMuted] = useState(true);
  const [likedSet, setLikedSet] = useState<Set<string>>(getLikedSet);
  const [likes, setLikes] = useState<number[]>(() => slides.map(s => s.likes ?? 0));
  const [shares, setShares] = useState<number[]>(() => slides.map(s => s.shares ?? 0));
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const previousScrollY = useRef(0);

  const activeSlide = slides[activeIndex];

  const scrollLock = useCallback(() => {
    previousScrollY.current = window.scrollY;
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.overflow = 'hidden';
  }, []);

  const scrollUnlock = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.top = '';
    window.scrollTo(0, previousScrollY.current);
  }, []);

  useEffect(() => {
    scrollLock();
    return () => scrollUnlock();
  }, [scrollLock, scrollUnlock]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setActiveIndex(index);
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    slides.forEach((slide, i) => {
      const video = videoRefs.current[i];
      if (!video) return;
      if (i === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex, slides]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      emblaApi?.scrollPrev();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      emblaApi?.scrollNext();
    }
  }, [onClose, emblaApi]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleLike = useCallback((index: number, slideId: string) => {
    const newSet = toggleLiked(slideId);
    setLikedSet(new Set(newSet));
    setLikes(prev => {
      const next = [...prev];
      if (newSet.has(slideId)) {
        next[index] = (next[index] ?? 0) + 1;
      } else {
        next[index] = Math.max(0, (next[index] ?? 0) - 1);
      }
      return next;
    });
  }, []);

  const handleShare = useCallback(async (index: number) => {
    const url = window.location.href;
    const title = slides[index]?.title ?? 'Un Grano de Arena';
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        setShares(prev => {
          const next = [...prev];
          next[index] = (next[index] ?? 0) + 1;
          return next;
        });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
        setShares(prev => {
          const next = [...prev];
          next[index] = (next[index] ?? 0) + 1;
          return next;
        });
      } catch {}
    }
  }, [slides]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black animate-[fadeIn_0.2s_ease-out]"
      onClick={handleOverlayClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${activeSlide?.src})`,
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          opacity: 0.5,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center" ref={emblaRef}>
        <div className="flex flex-col h-full" style={{ touchAction: 'pan-y pinch-zoom' }}>
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] h-dvh relative flex items-center justify-center"
            >
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="max-h-full max-w-full w-auto h-auto object-contain z-10 select-none"
                  draggable={false}
                />
              ) : (
                <video
                  ref={el => { videoRefs.current[i] = el; }}
                  src={slide.src}
                  poster={slide.poster}
                  muted={muted}
                  playsInline
                  loop
                  preload="metadata"
                  className="max-h-full max-w-full w-auto h-auto object-contain z-10"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />

              <button
                onClick={onClose}
                className="absolute top-4 left-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 active:scale-90"
                aria-label="Close player"
              >
                <CloseIcon />
              </button>

              {slide.type === 'video' && (
                <button
                  onClick={() => setMuted(v => !v)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 active:scale-90"
                  aria-label={muted ? 'Unmute' : 'Mute'}
                >
                  {muted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
                </button>
              )}

              <div className="absolute bottom-8 left-6 z-30 text-white max-w-[60%]">
                <p className="font-heading font-bold text-lg md:text-xl leading-tight">
                  {slide.title}
                </p>
                {slide.description && (
                  <p className="text-sm md:text-base text-white/70 mt-1 leading-snug max-w-md">
                    {slide.description}
                  </p>
                )}
              </div>

              <div className="absolute bottom-8 right-6 z-30 flex flex-col items-center gap-5">
                <button
                  onClick={() => handleLike(i, slide.id)}
                  className="flex flex-col items-center gap-1 text-white transition-all duration-200 active:scale-90"
                  aria-label={likedSet.has(slide.id) ? 'Unlike this' : 'Like this'}
                >
                  <LikeIcon filled={likedSet.has(slide.id)} />
                  <span className="text-xs font-medium tabular-nums">{likes[i]}</span>
                </button>

                <button
                  onClick={() => handleShare(i)}
                  className="flex flex-col items-center gap-1 text-white transition-all duration-200 active:scale-90 relative"
                  aria-label="Share this"
                >
                  <ShareIcon />
                  <span className="text-xs font-medium tabular-nums">{shares[i]}</span>
                  {copiedIndex === i && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded">
                      Link copied
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
