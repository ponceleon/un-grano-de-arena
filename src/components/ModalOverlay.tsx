import { useState, useEffect, useCallback, useRef } from 'react';

interface ModalState {
  isOpen: boolean;
  url: string | null;
  content: string | null;
  isLoading: boolean;
  error: string | null;
}

function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
}

function isHomeHref(href: string): boolean {
  const clean = href.split('#')[0].replace(/\/+$/, '');
  return clean === '' || clean === '/en';
}

export default function ModalOverlay() {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    url: null,
    content: null,
    isLoading: false,
    error: null,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const previousScrollY = useRef(0);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, url: null, content: null, isLoading: false, error: null });
    document.body.style.overflow = '';
    document.body.style.top = '';
    window.scrollTo(0, previousScrollY.current);
  }, []);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const loadContent = useCallback(async (url: string) => {
    const baseUrl = url.split('#')[0];
    const hash = url.split('#')[1] || null;

    setModal(prev => ({ ...prev, isLoading: true, error: null, url, content: null }));

    try {
      const response = await fetch(baseUrl);
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const mainContent = doc.getElementById('main-content');

      if (!mainContent) throw new Error('Contenido no encontrado');

      setModal(prev => ({
        ...prev,
        isLoading: false,
        content: mainContent.innerHTML,
        isOpen: true,
      }));

      setTimeout(() => {
        if (hash && contentRef.current) {
          const target = contentRef.current.querySelector(`#${hash}`);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    } catch (err) {
      setModal(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Error al cargar el contenido',
      }));
    }
  }, []);

  const handleLinkClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest<HTMLAnchorElement>('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    if (link.hasAttribute('target') || link.hasAttribute('download')) return;
    if (isExternalHref(href)) return;
    if (href.startsWith('#')) return;
    if (isHomeHref(href)) return;

    e.preventDefault();
    e.stopPropagation();

    previousScrollY.current = window.scrollY;
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.overflow = 'hidden';

    loadContent(href);
  }, [loadContent]);

  useEffect(() => {
    document.addEventListener('click', handleLinkClick, true);
    return () => document.removeEventListener('click', handleLinkClick, true);
  }, [handleLinkClick]);

  useEffect(() => {
    if (modal.isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [modal.isOpen, handleKeyDown]);

  return (
    <>
      {modal.isOpen && (
        <div
          class="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={handleOverlayClick}
        >
          <div class="relative w-full max-w-4xl mx-4 my-8 md:my-12 bg-white rounded-2xl shadow-2xl max-h-[90vh] flex flex-col animate-[scaleIn_0.2s_ease-out]">
            <div class="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white rounded-t-2xl">
              <h2 class="text-lg font-heading font-bold text-brown-500">
                {modal.url?.includes('/en/') ? 'Un Grano de Arena' : 'Un Grano de Arena'}
              </h2>
              <button
                onClick={closeModal}
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 active:scale-90"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <div class="overflow-y-auto p-6 md:p-8" ref={contentRef}>
              {modal.isLoading && (
                <div class="flex flex-col items-center justify-center py-20">
                  <div class="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mb-4" />
                  <p class="text-gray-500 text-sm">Cargando...</p>
                </div>
              )}

              {modal.error && (
                <div class="flex flex-col items-center justify-center py-20">
                  <div class="text-4xl mb-4">⚠️</div>
                  <p class="text-gray-600 font-medium mb-2">Error al cargar el contenido</p>
                  <p class="text-gray-400 text-sm mb-6">{modal.error}</p>
                  <div class="flex gap-3">
                    <button
                      onClick={() => modal.url && loadContent(modal.url)}
                      class="px-6 py-2 bg-primary-500 text-brown-800 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Reintentar
                    </button>
                    <button
                      onClick={closeModal}
                      class="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}

              {modal.content && !modal.isLoading && !modal.error && (
                <div
                  class="prose prose-brown max-w-none"
                  dangerouslySetInnerHTML={{ __html: modal.content }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
