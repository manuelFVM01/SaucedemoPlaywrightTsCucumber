import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let page: Page;
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

Given('I navigate to the Website Login Page', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('User enters username {string} and password {string}', async (username, password) => {
  await page.fill('#user-name', username);
  await page.fill('#password', password);
});

When('User clicks the login button', async () => {
  await page.click('[name="login-button"]');
});

Then('I should be redirected to the inventory page', async () => {
  await page.waitForURL('https://www.saucedemo.com/inventory.html', { timeout: 5000 });
  await page.close();
});

Then('I should see a login error message {string}', async (message) => {
  const errorMessage = await page.locator('[data-test="error"]').textContent();
  console.log('error message validator');
  console.log(message == errorMessage);
  await page.close();
});