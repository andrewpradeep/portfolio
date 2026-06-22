import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "../test-results/logo-debug");

test.describe("Personal logo layout", () => {
    test("logo containers are square at all breakpoints", async ({ page }) => {
        await page.goto("/");
        await page.waitForLoadState("networkidle");

        const logos = page.locator(".personal-logo-shell");
        await expect(logos).toHaveCount(3);

        const labels = ["header", "hero", "footer"] as const;

        for (let i = 0; i < 3; i++) {
            const wrapper = logos.nth(i);
            const svg = wrapper.locator(".personal-logo-svg");

            const wrapperBox = await wrapper.boundingBox();
            const svgBox = await svg.boundingBox();

            console.log(`[${labels[i]}] wrapper:`, wrapperBox);
            console.log(`[${labels[i]}] svg:`, svgBox);

            expect(wrapperBox, `${labels[i]} wrapper missing`).not.toBeNull();
            expect(svgBox, `${labels[i]} svg missing`).not.toBeNull();

            if (wrapperBox && svgBox) {
                expect(
                    Math.abs(wrapperBox.width - svgBox.width),
                    `${labels[i]} wrapper wider than svg`
                ).toBeLessThan(2);
                expect(
                    Math.abs(wrapperBox.height - svgBox.height),
                    `${labels[i]} wrapper taller than svg`
                ).toBeLessThan(2);

                const aspectRatio = wrapperBox.width / wrapperBox.height;
                expect(
                    aspectRatio,
                    `${labels[i]} should be square, got ${wrapperBox.width}x${wrapperBox.height}`
                ).toBeGreaterThan(0.95);
                expect(aspectRatio).toBeLessThan(1.05);
            }

            await wrapper.screenshot({
                path: path.join(screenshotDir, `${labels[i]}-logo.png`),
            });
        }

        await page.screenshot({
            path: path.join(screenshotDir, "full-page.png"),
            fullPage: true,
        });
    });

    test("hero logo uses shape-aware shadow without box artifacts", async ({
        page,
    }) => {
        await page.goto("/");
        await page.waitForLoadState("networkidle");

        const heroShell = page.locator(".personal-logo-shell--hero");
        const heroLogo = page.locator(".personal-logo--hero");
        await heroShell.waitFor({ state: "visible" });

        const styles = await heroShell.evaluate((shell) => {
            const logo = shell.querySelector(".personal-logo");
            const shellStyles = window.getComputedStyle(shell);
            const logoStyles = logo
                ? window.getComputedStyle(logo)
                : null;

            return {
                shellFilter: shellStyles.filter,
                shellBoxShadow: shellStyles.boxShadow,
                logoOverflow: logoStyles?.overflow,
                logoBorderRadius: logoStyles?.borderRadius,
            };
        });

        expect(styles.shellFilter).toContain("drop-shadow");
        expect(styles.shellBoxShadow).toBe("none");
        expect(styles.logoOverflow).toBe("hidden");
        expect(styles.logoBorderRadius).not.toBe("0px");

        await heroShell.screenshot({
            path: path.join(screenshotDir, "hero-corners.png"),
        });
        await heroLogo.screenshot({
            path: path.join(screenshotDir, "hero-clipped.png"),
        });
    });
});
