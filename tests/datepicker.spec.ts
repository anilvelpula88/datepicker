import { test, expect } from '@playwright/test';
test('radiobutton', async ({ page }) => {

    page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
    await page.waitForTimeout(4000);
    await page.locator('#txtDate').click();
    await page.locator('.ui-datepicker-year').selectOption('2023');
    await page.locator('.ui-datepicker-month').selectOption('Jan');
    await page.locator('a[data-date="8"]').click();


    // <a class="ui-state-default ui-state-active" href="#" aria-current="true" data-date="8">8</a>
    // await page.locator('a[data-date="8"]').click();
    await page.waitForTimeout(4000);
    await page.screenshot({
        path: 'dateimg.png',
        fullPage: false,
        timeout: 6000
    });



});
