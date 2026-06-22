import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "../test-results/page-audit");

const viewports = [
    { name: "desktop", width: 1280, height: 900 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 390, height: 844 },
] as const;

for (const viewport of viewports) {
    test(`page audit ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({
            width: viewport.width,
            height: viewport.height,
        });
        await page.goto("/");
        await page.waitForLoadState("networkidle");

        const sections = [
            "header.nav-header",
            "section.intro-section",
            "section.exp-section",
            "section.prj-section",
            "footer.conclusion-section",
        ];

        for (const selector of sections) {
            const section = page.locator(selector);
            await expect(section).toBeVisible();
            const slug = selector.replace(/[^a-z]+/g, "-");
            await section.screenshot({
                path: path.join(screenshotDir, `${viewport.name}-${slug}.png`),
            });
        }

        await page.screenshot({
            path: path.join(screenshotDir, `${viewport.name}-full.png`),
            fullPage: true,
        });

        const issues = await page.evaluate(() => {
            const problems: string[] = [];

            const buttonInLink = document.querySelector("a button");
            if (buttonInLink) {
                problems.push("Invalid HTML: button nested inside anchor");
            }

            const remoteImages = Array.from(document.images).filter((img) =>
                img.src.startsWith("http")
            );
            if (remoteImages.length > 0) {
                problems.push(
                    `Remote images: ${remoteImages.map((img) => img.src).join(", ")}`
                );
            }

            const headings = Array.from(
                document.querySelectorAll("h1, h2, h3")
            ).map((h) => h.textContent?.trim());
            const h1Count = document.querySelectorAll("h1").length;
            if (h1Count !== 1) {
                problems.push(`Expected 1 h1, found ${h1Count}`);
            }

            return { problems, headings };
        });

        console.log(`[${viewport.name}] issues:`, issues.problems);
        console.log(`[${viewport.name}] headings:`, issues.headings);

        expect(issues.problems, issues.problems.join("\n")).toEqual([]);
    });
}
