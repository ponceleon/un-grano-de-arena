export interface GallerySlide {
  id: string
  type: 'image' | 'video'
  src: string
  poster?: string
  title: string
  description?: string
  alt: string
  likes?: number
  shares?: number
}
