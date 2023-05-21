@Browser
Feature: I want to use this file to verify login SauceDemo Application

  Background: 
    Given I want to launch application

  Scenario: Launch saucedemo application
    Then validate that login page is loaded

  Scenario: Validate the login success scenario
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on Login button
    Then I should land on the home page

  Scenario Outline: Validate the login failure scenario
    When I enter username as "<Username>"
    And I enter password as "<Password>"
    And I click on Login button
    Then I should get error message as "<Error>"

    Examples: 
      | Username        | Password     | Error                                                                     |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user   | Abcd@12a     | Epic sadface: Username and password do not match any user in this service |
