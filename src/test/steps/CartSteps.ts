import { When, Then } from '@cucumber/cucumber';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

When('I click in button add to cart', async function () {
  await sleep(1000);
  await this.page.click('#add-to-cart-sauce-labs-backpack');
});

Then('View cart', async function () {
  await sleep(1000);
  await this.page.click('.shopping_cart_link');
  await this.page.click('#checkout');
  await sleep(1000);
  await this.page.fill('#first-name', 'Manuel');
  await this.page.fill('#last-name', 'Fajardo');
  await this.page.fill('[name="postalCode"]', '01');
});

