const {test, expect} = require('@playwright/test');

test.only('Create Account And Login it then Print the amount', async ({browser})=>
{    
      //const USERName   = 'Malati@gmail.com';
      //const Password = 'Password@2026'; 

    //1) Go to Para Bank Home Page
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(" https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");

    // Create account 
    await page.getByRole('link', {name: 'Register'}).click();

    await page.locator('xpath=//input[@id="customer.firstName"]').fill('Malati');

    await page.locator('xpath=//input[@id="customer.lastName"]').fill('Chougale');

   /* await page.locator('xpath=//input{@id="customer.address.street"]').fill('Deppnagar');
    await page.locator('xpath=//input{@id="customer.address.city"]').fill('Bhusawal');
    await page.locator('xpath=//input{@id="customer.address.zipCode"]').fill('425307');
    await page.locator('xpath=//input{@id="customer.phoneNumber"]').fill('9158523071');
    await page.locator('xpath=//input{@id="customer.ssn"]').fill('200626002');*/

    await page.pause();
});
