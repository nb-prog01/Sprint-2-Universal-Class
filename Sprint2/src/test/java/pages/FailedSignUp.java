package pages;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FailedSignUp 
{
	WebDriver driver;
	private By hamburger = By.id("clssicon");
	private By subscribe = By.xpath("//a[@href='https://secure.universalclass.com/payment_uc/2020/platinum.htm']");
	private By option = By.xpath("(//a[@class='planbutton'])[1]");
	private By fname = By.id("givenname");
	private By lname = By.id("sn");
	private By uname = By.id("mail");
	private By pass = By.id("userpassword");
	private By check = By.xpath("//input[@value='ToS']");
	private By submit = By.xpath("//input[@value='Sign Up']");
	private By show = By.xpath("//div[@role='alert']");
	
	public FailedSignUp(WebDriver drv)
	{
		this.driver=drv;
	}
	public void hmbutton()
	{
		driver.findElement(hamburger).click();
	}
	public void sub()
	{
		driver.findElement(subscribe).click();
	}
	public void plan() throws InterruptedException
	{
		driver.findElement(option).click();
		Thread.sleep(1500);
	}
	public void fname(String firstname) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(fname).sendKeys(firstname);		
	}
	public void lname(String lastname) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(lname).sendKeys(lastname);
	}
	public void emailId(String email) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(uname).sendKeys(email);
		
	}
	public void paswd(String password) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(pass).sendKeys(password);
		
	}
	public void policy()
	{
		driver.findElement(check).click();
	}
	public void signUp()
	{
		driver.findElement(submit).click();
	}
	public void display()
	{
		WebElement d=driver.findElement(show);
		String msg=d.getText();
		System.out.println(msg);
	}
	public void validation()
	{
		String actual=driver.getTitle();
		String expected="Universal Class: Online Courses and Continuing Education";
		assertEquals(actual,expected);
	}
}
