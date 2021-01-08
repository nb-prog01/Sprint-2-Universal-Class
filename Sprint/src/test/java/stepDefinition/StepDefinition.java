package stepDefinition;

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
import pages.SearchBox;
import pages.SignIn;

public class StepDefinition {
	WebDriver driver;
	SearchBox sb;
	SignIn si;
	@Before
	public void setup()
	{
		      System.setProperty("webdriver.chrome.driver","C:\\Users\\hp\\Desktop\\Selenium\\Drivers\\chromedriver.exe");
			  driver = new ChromeDriver();
			   driver.manage().window().maximize();
			   driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
			   driver.get("https://www.universalclass.com/index.htm");
		   
	}
	@Given("^user is Registered$")
    public void user_is_registered() throws Throwable {
       System.out.println("User is registered");
       Thread.sleep(2000);
    }

    @Given("^user is on Homepage$")
    public void user_is_on_homepage() throws Throwable {
     System.out.println("User is at homepage");
     Thread.sleep(2000);
    }

    @When("^user enters registered (.+) and (.+)$")
    public void user_enters_registered_and(String username, String password) throws Throwable {
    driver.navigate().to("https://members.universalclass.com/login.htm");
    //Thread.sleep(5000);
    driver.findElement(By.name("username")).sendKeys(username); 
    Thread.sleep(1500);
    driver.findElement(By.name("password")).sendKeys(password);
    Thread.sleep(1500);
    driver.findElement(By.name("SubmitButton")).click();
    Thread.sleep(500);
    }

    @Then("^Member Sign-in page should load$")
    public void member_signin_page_should_load() throws Throwable {
      String title = driver.getTitle();
      System.out.println(title);
    }

    @Then("^clients Homepage loads$")
    public void clients_homepage_loads() throws Throwable {
       driver.getTitle();
       Thread.sleep(2000);
    }

    @Then("^Course catalouge should load$")
    public void course_catalouge_should_load() throws Throwable {
       System.out.println(driver.getTitle());
       Thread.sleep(2000);
    }

    @And("^user clicks on the hamburger button$")
    public void user_clicks_on_the_hamburger_button() throws Throwable {
        driver.findElement(By.id("clssicon")).click();
    }

    @And("^user navtigates to and clicks the Sign-in option$")
    public void user_navtigates_to_and_clicks_the_signin_option() throws Throwable {
    	driver.findElement(By.xpath("//*[@id=\"clssmnucontent\"]/div/a[1]"));
    	Thread.sleep(5000);
    }

    @And("^user enters (.+) in the search box$")
    public void user_enters_in_the_search_box(String searchtext) throws Throwable {
       driver.findElement(By.id("SearchString")).sendKeys(searchtext);
    }

    @And("^clicks the search button$")
    public void clicks_the_search_button() throws Throwable {
       driver.findElement(By.id("searchicon"));
    }
    @After
    public void teardown() throws InterruptedException
    {
    	Thread.sleep(3500);
    	//driver.close();
    }
}
