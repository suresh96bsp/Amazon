
import {test} from '@playwright/test';

 test ('lunch flipkart',async ({page}) => {
   await page.goto('https://demoqa.com/automation-practice-form');
await page.getByPlaceholder('First Name').fill("Suresh");
await page.getByPlaceholder('Last Name').fill("Subramaniyan");
await page.getByPlaceholder('name@example.com').fill("sureshbsp1996gmail.com");
await page.locator('[value ="Male"]').check();
await page.getByPlaceholder('Mobile Number').fill("9944072597");
await page.locator('//input[@id="dateOfBirthInput"]').fill("15 OCT 2026");
await page.getByRole('checkbox',{name:"sp"}).check();
await page.getByPlaceholder('Current Address').fill("Chennai");
await page.getByRole('button',{name:"Submit"}).click();
await page.waitForTimeout(5000);


 }
)

