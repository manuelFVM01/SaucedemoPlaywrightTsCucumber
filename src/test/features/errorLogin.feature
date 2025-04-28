Feature: Error al hacer login

Scenario: login with invalid user name and password
  Given I open the login page
  When I enter an invalid username and valid password
  Then I should see a login error message
