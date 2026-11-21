export interface VideoPlaylist {
  title: string;
  description: string;
  youtubePlaylistUrl: string;
  thumbnailUrl: string;
}

// The approved YouTube playlist URLs will be managed in T31.
const playlists: VideoPlaylist[] = [];

function getYouTubeEmbedUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return undefined;
    if (url.hostname !== "www.youtube.com" && url.hostname !== "youtube.com") return undefined;
    const listId = url.searchParams.get("list");
    if (!listId || !/^[\w-]+$/.test(listId)) return undefined;
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(listId)}`;
  } catch {
    return undefined;
  }
}

export default function VideosPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl border-b border-navy-950/10 pb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            Learn at your pace
          </p>
          <h1 className="text-4xl text-navy-950 sm:text-5xl">Video Lectures</h1>
          <p className="mt-5 text-base leading-7 text-charcoal-soft sm:text-lg">
            Explore recorded lessons and subject playlists.
          </p>
        </header>
        {playlists.length === 0 ? (
          <p className="mt-12 border border-dashed border-navy-950/20 bg-white px-6 py-10 text-center text-charcoal-soft">
            Video playlists have not been published yet.
          </p>
        ) : (
          <ul className="mt-12 grid list-none gap-8 p-0 md:grid-cols-2">
            {playlists.map((playlist, index) => {
              const embedUrl = getYouTubeEmbedUrl(playlist.youtubePlaylistUrl);
              return (
                <li key={playlist.youtubePlaylistUrl}>
                  {index === 0 ? (
                    <p className="mb-3 text-sm font-semibold text-gold-700">Featured playlist</p>
                  ) : null}
                  <h2 className="font-serif text-2xl text-navy-950">{playlist.title}</h2>
                  <p className="my-3 text-sm text-charcoal-soft">{playlist.description}</p>
                  {embedUrl ? (
                    <iframe
                      title={`${playlist.title} YouTube playlist`}
                      src={embedUrl}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="aspect-video w-full border-0"
                    />
                  ) : (
                    <p role="status" className="bg-white p-4 text-sm text-charcoal-soft">
                      This playlist link is unavailable.
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
