import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/about",
  "/academics",
  "/faculty",
  "/study-materials",
  "/videos",
  "/gallery",
  "/contact",
  "/enquiry",
  "/privacy-policy",
  "/disclaimer",
];

test("public routes load, image alt attributes exist, and local links resolve", async ({
  page,
}) => {
  const internalLinks = new Set<string>();

  for (const route of publicRoutes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), `${route} should load`).toBeLessThan(400);

    const imageAltAttributes = await page
      .locator("img")
      .evaluateAll((images) => images.map((image) => image.hasAttribute("alt")));
    expect(imageAltAttributes, `${route} images should declare alt text`).not.toContain(false);

    const hrefs = await page
      .locator("a[href^='/']")
      .evaluateAll((links) =>
        links.map((link) => (link as HTMLAnchorElement).getAttribute("href")),
      );
    hrefs.forEach((href) => {
      if (href) internalLinks.add(href.split("#")[0]);
    });
  }

  for (const href of internalLinks) {
    const response = await page.request.get(href);
    expect(response.status(), `${href} should resolve`).toBeLessThan(400);
  }
});
