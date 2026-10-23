
import { test } from '@playwright/test';
test ('Frames handling',async({context})=>{
const page = await context.newPage();
   await page.goto('https://www.myntra.com/');
})