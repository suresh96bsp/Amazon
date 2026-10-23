import { test } from '@playwright/test';
test ('File Uploading',async({page})=>{
    //single file
//     await page.goto('https://www.file.io/');
//     await page.locator('//label[@for="select-files-input"]').setInputFiles('C:/Uploadfile/happykids.png');
//     await page.waitForLoadState();

// })

//Multiple file upload

await page.goto('https://www.file.io/');
    await page.locator('//label[@for="select-files-input"]').setInputFiles(["C:/Uploadfile/happykids.png","C:/Users/HP/Pictures/image/water mark.png"]);
    await page.waitForLoadState();

})


