const {test, expect} = require('@playwright/test');

test.only('Create Account And Login it then Print the amount', async ({browser})=>
{
    //1) Go to Para Bank Home Page
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(" https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");

    // Create account 
    await page.getByRole('link', {name: 'Register'}).click();
    await page.pause();

});
