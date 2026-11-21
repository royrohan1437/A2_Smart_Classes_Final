export function getYouTubeEmbedUrl(value: string): string | undefined {
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
