import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

Given('I open the login page', async function () {
  await this.page.goto('https://www.saucedemo.com/');
  await sleep(1000);
});

When('I enter a valid username and password', async function () {
  await this.page.fill('#user-name', 'standard_user');
  await this.page.fill('#password', 'secret_sauce');
  
  await this.page.click('[name="login-button"]');
});

When('I enter an invalid username and valid password', async function () {
  await this.page.fill('#user-name', 'locked_out_user');
  await this.page.fill('#password', 'secret_sauce');
  
  await this.page.click('[name="login-button"]');
});

Then('I should be redirected to the inventory page', async function () {
  await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
  await sleep(1000);
});

Then('I should see a login error message', async function () {
  const errorMessage = await this.page.locator('[data-test="error"]').textContent();
  console.log('Error Message:', errorMessage);
  await sleep(1000);
});

