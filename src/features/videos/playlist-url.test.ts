import { describe, expect, it } from "vitest";
import { getYouTubeEmbedUrl } from "./playlist-url";

describe("getYouTubeEmbedUrl", () => {
  it("converts a YouTube playlist URL to the privacy-enhanced embed host", () => {
    expect(getYouTubeEmbedUrl("https://www.youtube.com/playlist?list=PL_123-abc")).toBe(
      "https://www.youtube-nocookie.com/embed/videoseries?list=PL_123-abc",
    );
  });

  it.each([
    "javascript:alert(1)",
    "https://attacker.example/?list=PL123",
    "https://youtube.com/watch?v=video-only",
    "https://youtube.com/playlist?list=bad%20id",
  ])("rejects an unsafe or unsupported URL: %s", (value) => {
    expect(getYouTubeEmbedUrl(value)).toBeUndefined();
  });
});
