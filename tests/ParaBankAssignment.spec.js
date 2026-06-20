const {test, expect} = require('@playwright/test');

test.only('Create Account And Login it then Print the amount', async ({browser})=>
{    
      const UserName = 'atulCh@gmail.com'; 
      const Password = 'Atulch@2026';

    //1) Go to Para Bank Home Page
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(" https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");

    // Create account 
    await page.getByRole('link',{name:'Register' , exact: true}).click();

    await page.locator('xpath=//input[@id="customer.firstName"]').fill('Atul');
    await page.locator('xpath=//input[@id="customer.lastName"]').fill('Chougale');
    await page.locator('xpath=//input[@id="customer.address.street"]').fill('Deppnagar3');
    await page.locator('xpath=//input[@id="customer.address.city"]').fill('Kolhapur');
    await page.locator('xpath=//input[@id="customer.address.state"]').fill('Maharashtra');
    await page.locator('xpath=//input[@id="customer.address.zipCode"]').fill('425305');
    await page.locator('xpath=//input[@id="customer.phoneNumber"]').fill('9158523052');
    await page.locator('xpath=//input[@id="customer.ssn"]').fill('200626008');

   
    await page.fill('xpath=//input[@id="customer.username"]',UserName);
    await page.fill('xpath=//input[@id="customer.password"]',Password);
    await page.fill('xpath=//input[@id="repeatedPassword"]',Password);
    await page.click('input[value="Register"]');

     //Log Out 
    await page.getByRole('link',{name:'Log Out', exact: true}).click();

    await page.pause();
});
