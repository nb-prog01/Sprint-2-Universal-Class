package pages;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FailedSignUpPage 
{
	WebDriver driver;
	public FailedSignUpPage(WebDriver drv)
	{
		this.driver=drv;
	}
	public void hmbutton()
	{
		driver.findElement(By.id("clssicon")).click();
	}
	public void sub()
	{
		driver.findElement(By.xpath("(//a[@href='https://secure.universalclass.com/payment_uc/2020/platinum.htm'])[1]")).click();
	}
	public void plan() throws InterruptedException
	{
		driver.findElement(By.xpath("(//a[@class='planbutton'])[1]")).click();
		Thread.sleep(1500);
	}
	public void fname(String firstname) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(By.id("givenname")).sendKeys(firstname);		
	}
	public void lname(String lastname) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(By.id("sn")).sendKeys(lastname);
	}
	public void emailId(String email) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(By.id("mail")).sendKeys(email);
		
	}
	public void paswd(String password) throws InterruptedException
	{
		Thread.sleep(1500);
		driver.findElement(By.id("userpassword")).sendKeys(password);
		
	}
	public void policy()
	{
		driver.findElement(By.xpath("//input[@value='ToS']")).click();
	}
	public void signUp()
	{
		driver.findElement(By.xpath("//input[@value='Sign Up']")).click();
	}
	public void display()
	{
		WebElement d=driver.findElement(By.xpath("//div[@role='alert']"));
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
