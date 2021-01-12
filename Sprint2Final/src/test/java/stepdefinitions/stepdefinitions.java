package stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.java.After;
import cucumber.api.java.Before;



import pages.FailedSignUpPage;
import pages.ForgottonPasswordPage;
import pages.SearchBox;
import pages.SigninPage;
import pages.SuccessSignUpPage;
import pages.unsuccessSigninPage;

public class stepdefinitions {
	
	WebDriver driver;
	
	ForgottonPasswordPage fp;
	SuccessSignUpPage sp;
	FailedSignUpPage fsp;
	SearchBox sb;
	SigninPage si;
	unsuccessSigninPage usi;
	
	@Before
	public void setup()
	{
    	System.out.println("INVOKED");
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.universalclass.com/");
		
	}
	@Given("^user is Registered$")
    public void user_is_registered() throws Throwable {
		System.out.println("User is registered");
	       Thread.sleep(2000);
    }

    @Given("^user is NOT Registered$")
    public void user_is_not_registered() throws Throwable {
        System.out.println("user is not registered");
    }

    @Given("^user clicks on site url$")
    public void user_clicks_on_site_url() throws Throwable {
        System.out.println("user clicked on site url");
    }

    @Given("^user is on Member Sign in page$")
    public void user_is_on_member_sign_in_page() throws Throwable {
		driver.findElement(By.id("clssicon")).click();
		Thread.sleep(1500);
		driver.findElement(By.xpath("//a[@href='https://members.universalclass.com/login.htm']")).click();
    }

    @Given("^user is on Homepage$")
    public void user_is_on_homepage() throws Throwable {
    	 System.out.println("User is at homepage");
         Thread.sleep(2000);
    }

    @When("^user enters registered (.+) and (.+)$")
    public void user_enters_registered_and(String username, String password) throws Throwable {
    	si = new SigninPage(driver);
        driver.navigate().to("https://members.universalclass.com/login.htm");
        //Thread.sleep(5000);
       // driver.findElement(By.name("username")).sendKeys(username); 
        	si.enterEmail(username);
        Thread.sleep(1500);
        //driver.findElement(By.name("password")).sendKeys(password);
        si.enterPassword(password);
        Thread.sleep(1500);
        //driver.findElement(By.name("SubmitButton")).click();
        si.submit();
        Thread.sleep(1500);
    }

    @When("^user enters unregistered (.+) or (.+)$")
    public void user_enters_unregistered_or(String useremail, String password) throws Throwable {
    	usi=new unsuccessSigninPage(driver);
    	usi.typeemail(useremail);
    	usi.typepass(password);
    	usi.clicksignin();
    }

    @When("^user selects the suitable option$")
    public void user_selects_the_suitable_option() throws Throwable {
    	 sp.option();
         Thread.sleep(2000);
    }

    @When("^user enters invalid (.+) or (.+) or (.+) or (.+)$")
    public void user_enters_invalid_or_or_or(String firstname, String lastname, String email, String password) throws Throwable {
    	fsp = new FailedSignUpPage(driver);
        fsp.fname(firstname);
        fsp.lname(lastname);
        fsp.emailId(email);
        fsp.paswd(password);
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

 

    @Then("^clients Homepage loads$")
    public void clients_homepage_loads() throws Throwable {
    	System.out.println("clients Homepage loaded");
    }

    @Then("^member Sign in page should load$")
    public void member_sign_in_page_should_load() throws Throwable {
    	System.out.println(driver.getTitle());
        String title=driver.getTitle();
        String actualtitle="Member Sign In | UniversalClass.com";
		assertEquals(actualtitle,title);
    }

    @Then("^error messgae should be displayed$")
    public void error_messgae_should_be_displayed() throws Throwable {
    	String e="You've entered an invalid Username/Email or Password.\n"+"Tip: Passwords are case sensitive.";
		assertEquals(e,usi.printerror());
    }

    @Then("^Pricing page page should load$")
    public void pricing_page_page_should_load() throws Throwable {
    	sp=new SuccessSignUpPage(driver);
    	sp.validation();
    }

    @Then("^Sign-up page should load$")
    public void signup_page_should_load() throws Throwable {
        System.out.println("Sign-up page loaded");
    }

    @Then("^an error message is displayed$")
    public void an_error_message_is_displayed() throws Throwable {
    	fsp = new FailedSignUpPage(driver);
        fsp.display();
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
    	fp=new ForgottonPasswordPage(driver);
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

    @Then("^Course catalouge should load$")
    public void course_catalouge_should_load() throws Throwable {
    	System.out.println(driver.getTitle());
        Thread.sleep(2000);
    }

    @And("^user clicks on the hamburger dropdown$")
    public void user_clicks_on_the_hamburger_dropdown() throws Throwable {
    	si=new SigninPage(driver);
        si.cl();
    	//driver.findElement(By.id("clssicon")).click();
    }

    @And("^user navtigates to and clicks the Sign-in option$")
    public void user_navtigates_to_and_clicks_the_signin_option() throws Throwable {
    	//driver.findElement(By.xpath("//*[@id=\"clssmnucontent\"]/div/a[1]"));
    	si=new SigninPage(driver);
    	si.sign1();
    	Thread.sleep(5000);
    }

    @And("^user clicks on the hamburger btn$")
    public void user_clicks_on_the_hamburger_btn() throws Throwable {
    	driver.findElement(By.id("clssicon")).click();
    }

    @And("^user navtigates to and clicks the Sign in option$")
    public void user_navtigates_to_and_clicks_the_sign_in_option() throws Throwable {
    	driver.findElement(By.xpath("//*[@id='clssmnucontent']/div/a[1]")).click();
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

    @And("^is on homepage$")
    public void is_on_homepage() throws Throwable {
    	fsp = new FailedSignUpPage(driver);
    	fsp.validation();
        System.out.println("User is on homepage");
    }

    @And("^user clicks on the hamburger icon$")
    public void user_clicks_on_the_hamburger_icon() throws Throwable {
    	fsp.hmbutton();
    }

    @And("^user navtigates to click the Subscribe option$")
    public void user_navtigates_to_click_the_subscribe_option() throws Throwable {
    	fsp.sub();
    }

    @And("^selects suitable plan$")
    public void selects_suitable_plan() throws Throwable {
    	fsp.plan();
        Thread.sleep(1500);
    }

    @And("^user agrees to terms and services chechbox$")
    public void user_agrees_to_terms_and_services_chechbox() throws Throwable {
    	fsp.policy();
    }

    @And("^user clicks on Sign Up button$")
    public void user_clicks_on_sign_up_button() throws Throwable {
    	fsp.signUp();
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

    @And("^user enters (.+) in the search box$")
    public void user_enters_in_the_search_box(String searchtext) throws Throwable {
    	//driver.findElement(By.id("SearchString")).sendKeys(searchtext);
    	SearchBox sb= new SearchBox(driver);
    	sb.find(searchtext);
    }

    @And("^clicks the search button$")
    public void clicks_the_search_button() throws Throwable {
    	//driver.findElement(By.id("searchicon"));
    	SearchBox sb= new SearchBox(driver);
    	sb.enter();
    }

    @After
	public void teardown() throws InterruptedException
	{
    	Thread.sleep(2000);
		//driver.close();
    	driver.quit();
	}
}
