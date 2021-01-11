package stepDefinitions;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.ForgottonPassword;

public class stepDefinition {

	ForgottonPassword fp;
	WebDriver driver;
	@Before
	public void setup()
	{
    	System.out.println("Welcome to selenium");
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.universalclass.com/");
		driver.manage().window().maximize();
	}
	@Given("^user is on Member Sign-in page$")
    public void user_is_member_signin_page() throws Throwable {
        
		driver.findElement(By.id("clssicon")).click();
		Thread.sleep(1500);
		driver.findElement(By.xpath("//a[@href='https://members.universalclass.com/login.htm']")).click();
	}

    @When("^user enters registered email$")
    public void user_enters_registered_email() throws Throwable {
        String mail="josephphils@gmail.com";
    	fp.typeEmailAdd(mail);
        Thread.sleep(2000);
    }

    @When("^user enters unregistered email$")
    public void user_enters_unregistered_email() throws Throwable {
    	String mail="billmurray@gmail.com";
    	fp.typeInvalidEmailAdd(mail);
        Thread.sleep(2000);
    }

    @Then("^forgotton password page is loaded successfully$")
    public void forgotton_password_page_is_loaded_successfully() throws Throwable {
        String expTitle="UniversalClass™ Member Services";
    	String actualTitle=driver.getTitle();
    	assertEquals(expTitle,actualTitle);
        System.out.println("Page Title "+actualTitle);
        System.out.println(driver.findElement(By.tagName("h1")).getText());
    	System.out.println("Forgotton password page loaded successfully");
    }
    
    @Then("^recovery page should load$")
    public void recovery_page_should_load() throws Throwable {        
    
    	fp=new ForgottonPassword(driver);
    	System.out.println("Forgotton password page loaded successfully");
    }

    @Then("^successful message should be displayed$")
    public void successful_message_should_be_displayed() throws Throwable {
    	
    	String expectedMsg="Successfully sent password reset information to josephphils@gmail.com!";
    	String resetMsg=fp.displaySuccessResetMsg();
    	assertEquals(expectedMsg, resetMsg);
    	System.out.println("Success Msg: "+resetMsg);
    }

    @Then("^error message should be displayed$")
    public void error_message_should_be_displayed() throws Throwable {
    	
    	String expectedMsg="There is no match for an account with that email address.";
    	String resetMsg=fp.displayErrorResetMsg();
    	assertEquals(expectedMsg, resetMsg);
        System.out.println("Failure Msg: "+resetMsg);
    }

    @And("^user clicks on the Forgot password link$")
    public void user_clicks_on_the_forgot_password_link() throws Throwable {
    	Thread.sleep(1500);
    	driver.findElement(By.linkText("Forgot your password?")).click();
    }
    @And("^clicks on Reset password button$")
    public void clicks_on_reset_password_button() throws Throwable {
    	fp.clickReset();
    }
    
    @After
	public void teardown() throws InterruptedException
	{
    	Thread.sleep(2000);
		driver.close();
	}
}
