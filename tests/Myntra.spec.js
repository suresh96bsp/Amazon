
// import {test} from '@playwright/test';
// {

//  test ('lunch flipkart',async ({page}) => {
//    await page.goto('https://www.myntra.com/boy-tshirts');
//    const count= await page.locator('//li[@ id="47069496"]/::u1 class ="results-base"').count();
//    console.log('Total elements count'),count);
//  }

 


import { test } from '@playwright/test';
import { machine } from 'os';

test('launch Myntra', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');


//product totalcount
    const count = await page.locator('//li[@class="product-base"]').count();
    console.log('Total elements count:', count);

//product lowest price
    const prices = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span/child::span[@class="product-discountedPrice"]').allTextContents();
    const amounts = await prices.map(price => Number(price.replace(/[^\d]/g, '')));
    const lowestPrice =  Math.min(...amounts) 
    console.log('Lowest price:', lowestPrice);  

// product lowest price product name
    const productname = await page.locator(
    `//li[@class="product-base"]/descendant::div[@class="product-price"]/span/child::span[@class="product-discountedPrice" and normalize-space(.)='Rs. ${lowestPrice}']/ancestor::div[@class="product-productMetaInfo"]/h4[@class="product-product"]`
).innerText();

console.log(productname);
});

//Lowest price in 50 product counts





