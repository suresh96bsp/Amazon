
import { test } from '@playwright/test';
import { machine } from 'os';

test('launch Myntra', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');


//product totalcount
    const count = await page.locator('//li[@class="product-base"]').count();
    console.log('Total elements count:', count);

//product lowest price in 50 count
    const prices = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span/child::span[@class="product-discountedPrice"]|//div[@class="product-price"]/child::span[not(@class) and text()]').allTextContents();
    const amounts = await prices.map(price => Number(price.replace(/[^\d]/g, '')));
    const lowestPrice =  Math.min(...amounts) 
    console.log('Lowest price:', lowestPrice);  

// product lowest price product name in 50
    const productname = await page.locator(
    `//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" and normalize-space(.)='Rs. ${lowestPrice}' or not(@class) and normalize-space()="Rs. ${lowestPrice}"]/ancestor::div[@class="product-productMetaInfo"]/h4[@class="product-product"]`
).innerText();

console.log(productname);
});
//uihiehgh
//Lowest price in 50 product counts





