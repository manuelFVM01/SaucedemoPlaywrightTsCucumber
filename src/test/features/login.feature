Feature: Login exitoso en la página

Scenario: login with valid user name and password
  Given I open the login page
  When I enter a valid username and password
  Then I should be redirected to the inventory page








