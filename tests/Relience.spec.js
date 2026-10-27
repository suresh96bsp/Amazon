
import { test } from '@playwright/test';
test ('Window Handling',async({page})=>{
await page.goto('https://www.reliancedigital.in/');


const [newtab] = await promise.all([
context.waitForEvent('page'),
page.getbytext('Tablets').click()

]);
})