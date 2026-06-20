const {test, expect} = require('@playwright/test');

test.only('Create Account And Login it then Print the amount', async ({browser})=>
{    
      const UserName = 'malatiatul@gmail.com'; 
      const Password = 'MalatiAtul@2029';

    //1) Go to Para Bank Home Page
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(" https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");

    // Create account 
    await page.getByRole('link',{name:'Register' , exact: true}).click();

    await page.locator('xpath=//input[@id="customer.firstName"]').fill('MAtul');
    await page.locator('xpath=//input[@id="customer.lastName"]').fill('Chougale');
    await page.locator('xpath=//input[@id="customer.address.street"]').fill('Deppnagar4');
    await page.locator('xpath=//input[@id="customer.address.city"]').fill('Kolhapur');
    await page.locator('xpath=//input[@id="customer.address.state"]').fill('Maharashtra');
    await page.locator('xpath=//input[@id="customer.address.zipCode"]').fill('485397');
    await page.locator('xpath=//input[@id="customer.phoneNumber"]').fill('9158598050');
    await page.locator('xpath=//input[@id="customer.ssn"]').fill('200629907');

   
    await page.fill('xpath=//input[@id="customer.username"]',UserName);
    await page.fill('xpath=//input[@id="customer.password"]',Password);
    await page.fill('xpath=//input[@id="repeatedPassword"]',Password);
    await page.click('input[value="Register"]');

     //Log Out 
    await page.getByRole('link',{name:'Log Out', exact: true}).click();

    // Log in Newly
    await page.fill('input[name="username"]',UserName);
    await page.fill('input[name="password"]',Password);
    await page.click('input[value="Log In"]');

    //Print the Amount
    const amount = await page.locator('#accountTable tbody td',{hasText:'$515.50'}).first();
    console.log(amount);
});
