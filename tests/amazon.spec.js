
import { test } from '@playwright/test';


test('launch amazon', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill("iphone 17 pro");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.waitForLoadState();
    const review = await page.locator('//span[contains(text(), "iPhone 17 Pro") and not(contains(text(), "Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"size-small")]').allTextContents();
    const high = await review.map(total => Number(total).toFixed(1));
    const highreview = Math.max(...high);
     console.log('highreview:',highreview );  
     await page.locator(`//span[contains(text(), "iPhone 17 Pro") and not(contains(text(), "Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"size-small") and text()="${highreview}"]/ancestor::div[@role="listitem"]//input[@aria-label="Add to cart"]`).first().click()

})