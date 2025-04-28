
import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  this.page = page;

  // Limpiar cookies y almacenamiento local
  await context.clearCookies();
  await page.goto('https://www.saucedemo.com/');

  // Realizar login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('[name="login-button"]');

  // Confirmar que estamos en la página de inventario
  
});

After(async function () {
  await browser.close();
});

