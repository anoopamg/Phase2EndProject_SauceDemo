$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "I want to use this feature to verify Add to cart feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.AddToCart.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add selected product to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddToCart"
    }
  ]
});
formatter.step({
  "name": "I click on the Product name as \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.AddToCart.i_click_on_the_Product_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Add to cart Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.AddToCart.i_click_on_the_Add_to_cart_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.AddToCart.i_click_on_Shopping_cart_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the item on cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.AddToCart.i_verify_the_item_on_cart_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SauceDemoLogin.feature");
formatter.feature({
  "name": "I want to use this file to verify login SauceDemo Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_want_to_launch_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Launch saucedemo application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "validate that login page is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.validate_that_login_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_want_to_launch_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login success scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login failure scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    },
    {
      "cells": [
        "standard_user",
        "Abcd@12a",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_want_to_launch_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_want_to_launch_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Abcd@12a\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.LoginStepDefs.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});