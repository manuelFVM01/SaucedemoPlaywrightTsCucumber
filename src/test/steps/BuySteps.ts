import { Then } from '@cucumber/cucumber';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Paso para comprar el producto
Then('buy product', async function () {
  // Ir al carrito
  await this.page.click('.shopping_cart_link');
  await sleep(1000);

  // Click en Checkout
  await this.page.click('#checkout');
  await sleep(1000);

  // Llenar datos de comprador
  await this.page.fill('#first-name', 'Manuel');
  await this.page.fill('#last-name', 'Fajardo');
  await this.page.fill('#postal-code', '01');
  await sleep(1000);

  // Continuar con la compra
  await this.page.click('#continue');
  

  // Finalizar compra
  await this.page.click('#finish');
  await sleep(1000);
});

// Paso para confirmar que la compra fue exitosa
Then('confirm buy', async function () {
  // Volver a la página principal
  await this.page.click('text=Back Home');
  
});

