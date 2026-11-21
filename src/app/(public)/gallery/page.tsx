interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

// Approved institute images and captions will be supplied by the T32 gallery module.
const galleryImages: GalleryImage[] = [];

export default function GalleryPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl border-b border-navy-950/10 pb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            Moments from our community
          </p>
          <h1 className="text-4xl text-navy-950 sm:text-5xl">Gallery</h1>
        </header>
        {galleryImages.length === 0 ? (
          <p className="mt-12 border border-dashed border-navy-950/20 bg-white px-6 py-10 text-center text-charcoal-soft">
            Gallery photographs will appear here once approved for publication.
          </p>
        ) : (
          <ul className="mt-12 columns-1 gap-6 space-y-6 p-0 sm:columns-2 lg:columns-3">
            {galleryImages.map((image) => (
              <li key={image.src} className="break-inside-avoid list-none">
                <figure className="m-0">
                  {/* eslint-disable-next-line @next/next/no-img-element -- approved gallery assets will be served by T32. */}
                  <img src={image.src} alt={image.alt} loading="lazy" className="w-full" />
                  <figcaption className="mt-2 text-sm text-charcoal-soft">
                    {image.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
