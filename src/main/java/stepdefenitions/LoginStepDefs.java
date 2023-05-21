package stepdefenitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {

	WebDriver driver = Hooks.driver;

	@Given("I want to launch application")
	public void i_want_to_launch_application() throws InterruptedException {
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(3000);
	}

	@Then("validate that login page is loaded")
	public void validate_that_login_page_is_loaded() {
		String pageTitle = driver.getTitle();
		if (pageTitle.contains("Swag Labs")) {
			System.out.println("Successfully navigated to saucedemo page ");
		} else {
			System.out.println("saucedemo page launch failed ");
		}
	}

	@When("I enter username as {string}")
	public void i_enter_username_as(String usernameVal) throws InterruptedException {
		Thread.sleep(3000);
		WebElement userName = driver.findElement(By.id("user-name"));
		userName.sendKeys(usernameVal);
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String passwordVal) throws InterruptedException {
		Thread.sleep(3000);
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(passwordVal);
	}

	@When("I click on Login button")
	public void i_click_on_Login_button() throws InterruptedException {
		WebElement loginBtn = driver.findElement(By.id("login-button"));
		loginBtn.click();
		Thread.sleep(3000);
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {
		String homePageUrl = driver.getCurrentUrl();
		if (homePageUrl.contains("https://www.saucedemo.com/inventory.html")) {
			System.out.println("Successfully navigated to home page ");
		} else {
			System.out.println("Login failed ");
		}
	}

	@Then("I should get error message as {string}")
	public void i_should_get_error_message_as(String errorVal) {
		WebElement errorMsg = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActError = errorMsg.getText();
		String ExpError = errorVal;
		Assert.assertEquals(ActError, ExpError);
	}
}
