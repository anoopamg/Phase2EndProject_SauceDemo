@AddToCart
Feature: I want to use this feature to verify Add to cart feature

  Background: 
    Given I have launched the application
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on Login button
    Then I should land on the home page

  Scenario: Add selected product to cart
    When I click on the Product name as "Sauce Labs Backpack"
    And I click on the Add to cart Button
    And I click on Shopping cart link
    Then I verify the item on cart page
