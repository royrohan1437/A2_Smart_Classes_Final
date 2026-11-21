import { expect, test } from "@playwright/test";

test("public content routes show approved-content empty states and legal drafts", async ({
  page,
}) => {
  await page.goto("/study-materials", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Study Materials" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Notes" })).toHaveAttribute("href", "#notes");
  await expect(page.getByRole("link", { name: "Sample Papers & PYQs" })).toBeVisible();
  await expect(page.getByText("No notes have been published yet.")).toBeVisible();

  await page.goto("/videos", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Video Lectures" })).toBeVisible();
  await expect(page.getByText("Video playlists have not been published yet.")).toBeVisible();

  await page.goto("/gallery", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Gallery" })).toBeVisible();
  await expect(
    page.getByText("Gallery photographs will appear here once approved for publication."),
  ).toBeVisible();

  await page.goto("/contact", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Contact A2Smart Classes" })).toBeVisible();
  await expect(page.getByText("verified details", { exact: false })).toBeVisible();

  await page.goto("/enquiry", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Admissions Enquiry" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Submit Enquiry" })).toBeVisible();

  await page.goto("/privacy-policy", { waitUntil: "domcontentloaded" });
  await expect(page.getByText("Draft for owner and legal review").first()).toBeVisible();
  await page.goto("/disclaimer", { waitUntil: "domcontentloaded" });
  await expect(page.getByText("Draft for owner and legal review").first()).toBeVisible();

  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByRole("link", { name: "Admin Access" }).click();
  await expect(page).toHaveURL(/\/admin\/login$/);
  await expect(
    page.getByRole("heading", { name: "Secure sign-in is not available yet" }),
  ).toBeVisible();

  const health = await page.request.get("/api/health");
  expect(health.status()).toBe(503);
  const healthBody = await health.json();
  expect(healthBody.status).toBe("unavailable");
});
