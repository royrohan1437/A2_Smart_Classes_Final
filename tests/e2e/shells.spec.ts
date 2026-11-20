import { test, expect } from "@playwright/test";

const routes = [
  ["/", "Academic excellence begins with a shared foundation."],
  ["/profile", "Profile"],
  ["/admin/dashboard", "Admin Dashboard"],
] as const;

for (const [route, heading] of routes) {
  test(`${route} shell renders`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBe(true);
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  });
}

test("unknown route uses custom 404", async ({ page }) => {
  await page.goto("/a-route-that-does-not-exist");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
