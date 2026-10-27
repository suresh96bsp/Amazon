
import { test } from '@playwright/test';
test ('Frames handling',async({page})=>{
   await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
   const frame1 = await page.frameLocator('//H2[text()="Iframe 2"]/preceding-sibling::iframe');
   await frame1.locator('//a[@href="https://www.tutorialspoint.com"]').click();
   await page.waitForTimeout(2000);
   const frame2 = await page.frameLocator('//H2[text()="Iframe 2"]/following-sibling::iframe');
   await frame2.locator('//a[@href="https://www.tutorialspoint.com"]').click();
   await page.waitForTimeout(2000);

})

//Nested Frames
// import { test } from '@playwright/test';
// test ('Nested Frames handling',async({page})=>{
//    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
   



