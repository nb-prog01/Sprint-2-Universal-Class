package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.FailedSignUp;

public class StepDefinitions 
{
	WebDriver driver;
	FailedSignUp fsp;
	@Given("^user clicks on site url$")
    public void user_clicks_on_site_url() throws Throwable 
	{
		fsp = new FailedSignUp(driver);
        System.setProperty("webdriver.chrome.driver","./drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
        driver.get("https://www.universalclass.com/");     
    }

    @When("^user enters invalid (.+) or (.+) or (.+) or (.+)$")
    public void user_enters_invalid_or_or_or(String firstname, String lastname, String email, String password) throws Throwable 
    {
    	fsp = new FailedSignUp(driver);
        fsp.fname(firstname);
        fsp.lname(lastname);
        fsp.emailId(email);
        fsp.paswd(password);
    }

    @Then("^an error message is displayed$")
    public void an_error_message_is_displayed() throws Throwable 
    {
    	fsp = new FailedSignUp(driver);
        fsp.display();
    }

    @And("^is on homepage$")
    public void is_on_homepage() throws Throwable 
    {
    	fsp = new FailedSignUp(driver);
    	fsp.validation();
        System.out.println("User is on homepage");
    }

    @And("^user clicks on the hamburger button$")
    public void user_clicks_on_the_hamburger_button() throws Throwable 
    {
    	fsp.hmbutton();
    }

    @And("^user navtigates to click the Subscribe option$")
    public void user_navtigates_to_click_the_subscribe_option() throws Throwable 
    {
        fsp.sub();
    }

    @And("^selects suitable plan$")
    public void selects_suitable_plan() throws Throwable 
    {
        fsp.plan();
        Thread.sleep(1500);
    }

    @And("^user agrees to terms and services chechbox$")
    public void user_agrees_to_terms_and_services_chechbox() throws Throwable
    {
        fsp.policy();
    }

    @And("^user clicks on Sign Up button$")
    public void user_clicks_on_sign_up_button() throws Throwable 
    {
        fsp.signUp();
    }
    @After
    public void teardown()
    {
    	driver.close();
    }
}
