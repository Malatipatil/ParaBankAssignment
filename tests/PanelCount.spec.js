const { test, expect } = require('@playwright/test'); 

 test ('Create event, book seat, and verify seat count drops by one', 
    async ({ page }) => { const EVENT_NAME = 'Tech Mela 2026'; 
        const INITIAL_Seat = 50; // 1. Log in to Admin Panel and Create Event 
        await page.goto('https://eventhub.rahulshettyacademy.com/login');  
        await page.getByPlaceholder('you@email.com').fill("Playwright2026@gmail.com"); 
        await page.getByLabel("Password").fill("Password@2026"); 
        await page.click("#login-btn"); 
        await page.getByText("Browse Events →").isVisible();
        
        await page.click('text=Admin'); 
        await page.click('text=Manage Events'); 
        await page.fill('#event-title-input', EVENT_NAME);
        await page.fill('#admin-event-form textarea', EVENT_NAME);
        await page.locator('#category').selectOption({ label: 'Concert' });
        await page.getByLabel("city").fill("Kolhapur");
        await page.getByLabel("venue").fill("Chh Shivaji Chowk");
        await page.getByPlaceholder('0.00').fill("15");//input[id="price-($)"])
        await page.getByRole ('textbox',{name:/date/i}).fill('2026-07-26T12:00');//('Event Date & Time').fill("26072026 T17:05"); 
    
        await page.fill('#total-seats', INITIAL_Seat.toString()); 
        
        await page.click('button[type="submit"]');
        await page.pause();

         
        await expect(page.locator(`text=${EVENT_NAME}`)).first().toBeVisible(); // 2. Log Out of Admin and Log in as Customer 

    /*    await page.click('text=Admin Menu'); 
        await page.click('text=Log Out'); 
        await page.goto('https://example.com'); 
        await page.fill('#user-email', 'customer@example.com'); 
        await page.fill('#user-password', 'password123'); 
        await page.click('button[type="submit"]'); // 3. Complete Booking on Customer Panel 
        
        await page.goto('https://example.com'); 
        await page.click(`text=${EVENT_NAME}`); 
        await page.click('text=Book Now'); // Fill booking details and confirm payment 
        
        await page.fill('#booking-name', 'John Doe'); 
        await page.fill('#booking-email', 'john.doe@example.com'); 
        await page.click('button[id="confirm-booking"]'); // Verify booking success 
        
        await expect(page.locator('text=Booking Successful')).toBeVisible(); // 4. Verify the Seat Count Drops by Exactly One 
        await page.goto('https://example.com'); 
        await page.fill('#admin-username', 'admin@example.com'); 
        await page.fill('#admin-password', 'secure_password'); 
        await page.click('button[type="submit"]'); 
        await page.click('text=Events'); 
        await page.click(`text=${EVENT_NAME}`); // Calculate remaining seats: 50 - 1 = 49 
        
        const expectedRemaining = INITIAL_CAPACITY - 1;
        const currentCapacityText = await page.locator('#event-seats-remaining').textContent(); expect(parseInt(currentCapacityText)).toBe(expectedRemaining); */
        
        


    });