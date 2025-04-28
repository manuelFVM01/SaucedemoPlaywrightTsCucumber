Feature: I want open the Site for add one product to cart and then buy product from cart

Background:
  Given I navigate to the Website Home Page before login with user "standard_user" and password "secret_sauce"

Scenario: Add products to cart
  When I click "add-to-cart-sauce-labs-backpack" to add new product
  When I click "add-to-cart-sauce-labs-bike-light" to add new product
  Then The cart should be say "2" items

Scenario: Buy product from cart
  When buy product put first name "Manuel", last name "Fajardo" and postal code "01"
  Then confirm buy