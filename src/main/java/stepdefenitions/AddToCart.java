package stepdefenitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCart {
	
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() throws InterruptedException {
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(3000);
	}

	@When("I click on the Product name as {string}")
	public void i_click_on_the_Product_name_as(String productName) {
		String prodXpath = "//div[@class='inventory_item_name'][contains(text(),'"+productName+"')]";
		WebElement product = driver.findElement(By.xpath(prodXpath));
		product.click();
	}

	@When("I click on the Add to cart Button")
	public void i_click_on_the_Add_to_cart_Button() throws InterruptedException {
		WebElement addProdToCart = driver.findElement(By.id("add-to-cart-sauce-labs-backpack"));
		addProdToCart.click();
		Thread.sleep(2000);
	}

	@When("I click on Shopping cart link")
	public void i_click_on_Shopping_cart_link() throws InterruptedException {
		WebElement shoppingCartLink  = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		shoppingCartLink.click();
		Thread.sleep(2000);
	}

	@Then("I verify the item on cart page")
	public void i_verify_the_item_on_cart_page() throws InterruptedException {
		WebElement prodInCart = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
		String actualName = prodInCart.getText();
		Thread.sleep(2000);
		String expectedName = "Sauce Labs Backpack";
		Assert.assertEquals(actualName, expectedName);
	}


}
