// // import {test} from '@playwright/test';

// // test ('lunch flipkart',async ({page}) => {
// //   await page.goto('https://www.flipkart.com/');
// //   await page.screenshot({path:'./flipkart.png'});
// //   const title =await page.title();
// //   console.log(title); 
// //   console.log(await page.url());

// //   await page.goto('https://www.amazon.in/');
// //   console.log(await page.url());
// //   console.log(await page.title());
// //   await page.goBack();


// // })



// // import {test,chromium} from '@playwright/test';
// // test ('Launch browser',async()=>{
// // const browser = await chromium.launch();
// // const context = await browser.newContext({
// //   recordVideo:{dir:'./videos'}
// // });
// // const page1 = await context .newPage();
// // const page2 = await context.newPage();

// // await page1.goto('https://www.flipkart.com/')
// // await page2.goto('https://www.amazon.in/')

// // })



// import {test} from '@playwright/test';

// test ('lunch demoqa',async ({page}) => {
//  await page.goto('https://demoqa.com/text-box');
// await page.locator('//input[contains(@placeholder,"Full Name")]').fill("suresh");})
// // ))
// //  await page.click('//input[contains (@type,"email")]');
// //   await page.Fill('Sureshbsp1996@gmail.com');
// //    await page.click('//textarea[contains (@placeholder,"Current Address")]');
// //      await page.Fill(`Balakrishna street
// //       guindy
// //       chennai
// //       600010`);
// //       await page.Click('//textarea[contains (@id,"perm")]')
// //      await page.Fill(`Balakrishna street
// //       guindy
// //       chennai city
// //       600010`);
// //       await page .click('//button[contains (@id,"submit")]')

// // })













import {test} from '@playwright/test';

 test ('lunch flipkart',async ({page}) => {
   await page.goto('https://demoqa.com/automation-practice-form');
await page.getByPlaceholder('First Name').fill(Suresh);
await page.getByPlaceholder('Last Name').fill(Subramaniyan);
await page.getByPlaceholder('name@example.com').fill(sureshbsp1996gmail.com);
await page.





})











