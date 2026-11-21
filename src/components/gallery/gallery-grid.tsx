"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <ul className="mt-12 columns-1 gap-6 space-y-6 p-0 sm:columns-2 lg:columns-3">
      {images.map((image) => (
        <li key={image.src} className="break-inside-avoid list-none">
          <figure className="m-0">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group block w-full cursor-zoom-in text-left focus-visible:outline-offset-4"
                  aria-label={`View image: ${image.caption}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- images are delivered by the future gallery module. */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogTitle>{image.caption}</DialogTitle>
                <DialogDescription>{image.alt}</DialogDescription>
                {/* eslint-disable-next-line @next/next/no-img-element -- same approved gallery asset as the thumbnail. */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="mt-5 max-h-[70vh] w-full object-contain"
                />
              </DialogContent>
            </Dialog>
            <figcaption className="mt-2 text-sm text-charcoal-soft">{image.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
