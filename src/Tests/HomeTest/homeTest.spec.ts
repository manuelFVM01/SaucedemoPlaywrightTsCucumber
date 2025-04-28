import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';


let page: Page;
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

Given('I navigate to the Website Home Page before login with user {string} and password {string}', async function (username, password) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('[name="login-button"]');
});

When('I click {string} to add new product', async (product) => {
  await page.click('#' + product);
});

Then('The cart should be say {string} items', async (howmuch) => {
  const howmuchpage = await page.locator('[data-test="shopping-cart-badge"]').textContent();
  console.log('cart number validator');
  console.log(howmuch == howmuchpage);
  await page.close();
});

When('buy product put first name {string}, last name {string} and postal code {string}', async (firstname, lastname, postalcode) => {
  await page.click('.shopping_cart_link');
  await sleep(1000);
  await page.click('#checkout');
  await sleep(1000);
  await page.fill('#first-name', firstname);
  await page.fill('#last-name', lastname);
  await page.fill('#postal-code', postalcode);
  await sleep(1000);
});

Then('confirm buy', async function () {
  await page.click('#continue');
  await page.click('#finish');
  await sleep(1000);
  await page.click('text=Back Home');
  await page.close();
});