import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxContextType {
  open: (src: string, allImages?: string[]) => void;
}

const LightboxContext = createContext<LightboxContextType>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const open = useCallback((src: string, allImages?: string[]) => {
    setCurrentSrc(src);
    if (allImages && allImages.length > 1) {
      setGallery(allImages);
      setCurrentIndex(allImages.indexOf(src));
    } else {
      setGallery([]);
      setCurrentIndex(0);
    }
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const prev = useCallback(() => {
    if (gallery.length === 0) return;
    const newIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(newIndex);
    setCurrentSrc(gallery[newIndex]);
  }, [gallery, currentIndex]);

  const next = useCallback(() => {
    if (gallery.length === 0) return;
    const newIndex = (currentIndex + 1) % gallery.length;
    setCurrentIndex(newIndex);
    setCurrentSrc(gallery[newIndex]);
  }, [gallery, currentIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, close, prev, next]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
          >
            <X size={32} />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {currentIndex + 1} / {gallery.length}
              </span>
            </>
          )}

          <img
            src={currentSrc}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}
