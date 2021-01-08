package signUp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Inputs {
	WebDriver driver;
	
	private By hamburger = By.id("clssicon");
	private By subscribe = By.xpath("//a[@href='https://secure.universalclass.com/payment_uc/2020/platinum.htm']");
	private By option = By.xpath("(//a[@class='planbutton'])[1]");
	private By fname = By.id("givenname");
	private By lname = By.id("sn");
	private By uname = By.id("mail");
	private By pass = By.id("userpassword");
	private By check = By.xpath("//input[@type='checkbox']");
	private By submit = By.xpath("//input[@type='button']");
	
	public Inputs(WebDriver drv) {
		this.driver=drv;
	}
	
	public void hamburger() {
		driver.findElement(hamburger).click();
	}
	public void subscribe() {
		driver.findElement(subscribe).click();
	}
	public void option() {
		driver.findElement(option).click();
	}
	public void fn(String  Firstname ) {
		driver.findElement(fname).sendKeys(Firstname);
	}
	public void ln(String  Lastname ) {
		driver.findElement(lname).sendKeys(Lastname);
	}
	public void email(String  email ) {
		driver.findElement(uname).sendKeys(email);
	}
	public void pass(String  password ) {
		driver.findElement(pass).sendKeys(password);
	}
	public void check() {
		driver.findElement(check).click();
	}
	public void submit() {
		driver.findElement(submit).click();
	}
}
