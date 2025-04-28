Feature: I want to login into the site with valid and invalid data

Background:
  Given I navigate to the Website Login Page

Scenario: Login with valid user name and password
  When User enters username "standard_user" and password "secret_sauce"
  When User clicks the login button
  Then I should be redirected to the inventory page

Scenario: Login with invalid user name and password
  When User enters username "locked_out_user" and password "secret_sauce"
  When User clicks the login button
  Then I should see a login error message "Epic sadface: Sorry, this user has been locked out."