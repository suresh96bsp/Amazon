import {test} from'@playwright/test';
test('Dropdown',async({page})=>{

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button',{name:"Simple Dropdown"}).click()
    })



