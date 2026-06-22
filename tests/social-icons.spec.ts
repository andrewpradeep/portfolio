import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "../test-results/social-icons");

const socialIcons = [
    { label: "linkedin", ariaLabel: "LinkedIn profile" },
    { label: "github", ariaLabel: "GitHub profile" },
    { label: "mail", ariaLabel: "Send email to andrewpradeep13@gmail.com" },
    { label: "phone", ariaLabel: "Call +91 77089 93399" },
] as const;

test.describe("Footer social icons", () => {
    test("all social icons load and render visible content", async ({ page }) => {
        await page.goto("/");
        await page.waitForLoadState("networkidle");

        await page.locator(".conclusion-section").scrollIntoViewIfNeeded();
        await page.waitForLoadState("networkidle");

        const icons = page.locator(".link-list .logo-img");
        await expect(icons).toHaveCount(4);

        for (const { label, ariaLabel } of socialIcons) {
            const link = page.getByRole("link", { name: ariaLabel });
            const img = link.locator(".logo-img");

            await expect(img).toBeVisible();
            await expect(img).toHaveJSProperty("complete", true);
            await expect
                .poll(async () => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
                .toBeGreaterThan(0);

            const metrics = await img.evaluate((el) => {
                const image = el as HTMLImageElement;
                const rect = el.getBoundingClientRect();
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                if (!ctx || rect.width === 0 || rect.height === 0) {
                    return null;
                }

                canvas.width = rect.width;
                canvas.height = rect.height;
                ctx.drawImage(image, 0, 0, rect.width, rect.height);

                const imageData = ctx.getImageData(0, 0, rect.width, rect.height).data;
                let darkPixelCount = 0;

                for (let i = 0; i < imageData.length; i += 4) {
                    const [r, g, b, a] = imageData.slice(i, i + 4);
                    if (a > 0 && r < 120 && g < 120 && b < 120) {
                        darkPixelCount += 1;
                    }
                }

                return {
                    complete: image.complete,
                    naturalWidth: image.naturalWidth,
                    naturalHeight: image.naturalHeight,
                    darkPixelCount,
                };
            });

            expect(metrics, `${label} metrics missing`).not.toBeNull();

            if (metrics) {
                expect(metrics.complete, `${label} not loaded`).toBe(true);
                expect(metrics.naturalWidth, `${label} natural width`).toBeGreaterThan(0);
                expect(metrics.naturalHeight, `${label} natural height`).toBeGreaterThan(0);
                expect(
                    metrics.darkPixelCount,
                    `${label} appears empty or cropped`
                ).toBeGreaterThan(20);
            }

            await img.screenshot({
                path: path.join(screenshotDir, `${label}.png`),
            });
        }

        await page.locator(".link-list").screenshot({
            path: path.join(screenshotDir, "footer-social-row.png"),
        });
    });
});
