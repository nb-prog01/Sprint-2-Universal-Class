package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.SigninPage;

public class stepdefinition {
	WebDriver driver;
	SigninPage sp;
	
    @Given("^user is NOT Registered$")
    public void user_is_not_registered() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.universalclass.com/");
    }

    @When("^user enters unregistered (.+) or (.+)$")
    public void user_enters_unregistered_or(String useremail, String password) throws Throwable {
        sp=new SigninPage(driver);
        sp.typeemail(useremail);
        sp.typepass(password);
        sp.clicksignin();
    }

    @Then("^member Signin page should load$")
    public void member_signin_page_should_load() throws Throwable {
        System.out.println(driver.getTitle());
    }

    @Then("^error messgae should be displayed$")
    public void error_messgae_should_be_displayed() throws Throwable {
        sp.printerror();
    }

    @And("^user clicks on the hamburger button$")
    public void user_clicks_on_the_hamburger_button() throws Throwable {
        driver.findElement(By.id("clssicon")).click();
    }

    @And("^user navtigates to and clicks the Signin option$")
    public void user_navtigates_to_and_clicks_the_signin_option() throws Throwable {
    	driver.findElement(By.xpath("//*[@id='clssmnucontent']/div/a[1]")).click();
    }
    @After
    public void destruct() {
    	driver.close();
    }
}
