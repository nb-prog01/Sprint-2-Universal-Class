package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class SigninPage {
WebDriver driver;

private By email=By.name("username");
private By password=By.name("password");
private By submit=By.name("SubmitButton");
private By hbrgr=By.id("clssicon");
private By sign=By.linkText("Sign In");
public SigninPage(WebDriver driver)
{
	this.driver=driver;
}
public  void enterEmail(String mail)
{
	driver.findElement(email).sendKeys(mail);
}
public void enterPassword(String pass)
{
	driver.findElement(password).sendKeys(pass);
}
public void submit()
{
	driver.findElement(submit).click();
}
public void cl()
{
	driver.findElement(hbrgr).click();
}
public void sign1()
{
	driver.findElement(sign).click();
	
}

}
