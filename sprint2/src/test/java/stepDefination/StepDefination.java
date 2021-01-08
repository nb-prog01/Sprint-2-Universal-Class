package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import signUp.Inputs;

public class StepDefination {
	WebDriver driver;
	Inputs sp=new Inputs(driver);
	

    @Given("^User should launch the application browser$")
    public void user_should_launch_the_application_browser() throws Throwable {
    	System.setProperty("webdriver.chrome.driver","./Driver/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
    }

    @Given("^user is NOT registered$")
    public void user_is_not_registered() throws Throwable {
       
    }

    @When("^user selects the suitable option$")
    public void user_selects_the_suitable_option() throws Throwable {
        sp.option();
        Thread.sleep(2000);
    }

    @Then("^Pricing page page should load$")
    public void pricing_page_page_should_load() throws Throwable {
       
    }

    @Then("^Sign-up page should load$")
    public void signup_page_should_load() throws Throwable {
        
    }

    @Then("^Client homepage should load$")
    public void client_homepage_should_load() throws Throwable {
        
    }

    @And("^open the Universal class website in browser$")
    public void open_the_universal_class_website_in_browser() throws Throwable {
    	sp=new Inputs(driver);
    	driver.get("https://www.universalclass.com/");
    	 Thread.sleep(2000);
    }
    
    @And("^user clicks on the hamburger button$")
    public void user_clicks_on_the_hamburger_button() throws Throwable {
        sp.hamburger();
        Thread.sleep(2000);
    }

    @And("^user navtigates to and clicks the Subscribe option$")
    public void user_navtigates_to_and_clicks_the_subscribe_option() throws Throwable {
        sp.subscribe();
        Thread.sleep(2000);
    }

    @And("^user enters (.+), (.+), (.+), (.+)$")
    public void user_enters_(String firstname, String lastname, String email, String password) throws Throwable {
        sp.fn(firstname);
        Thread.sleep(2000);
        sp.ln(lastname);
        Thread.sleep(2000);
        sp.email(email);
        Thread.sleep(2000);
        sp.pass(password);
        Thread.sleep(2000);
    }

    @And("^agrees to the terms and services checkbox$")
    public void agrees_to_the_terms_and_services_checkbox() throws Throwable {
        sp.check();
        Thread.sleep(2000);
    }

    @And("^user clicks on Sign-up button$")
    public void user_clicks_on_signup_button() throws Throwable {
        sp.submit();
        Thread.sleep(2000);
    }


}
