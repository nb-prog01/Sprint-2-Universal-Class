package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ForgottonPassword {

	WebDriver driver;
	private By emailInput=By.name("Email");
	private By reset=By.xpath("//input[@type='SUBMIT']");
	private By errorResetMsg=By.xpath("//div[@class='zoomIn errorscreen']");
	private By successResetMsg=By.xpath("//div[@style='margin:7px;padding:7px;']");
	
	public ForgottonPassword(WebDriver driver)
	{
		this.driver=driver;
	}
	public void typeEmailAdd(String email) throws InterruptedException 
	{
		Thread.sleep(2000);
		driver.findElement(emailInput).sendKeys(email);
	}
	public void typeInvalidEmailAdd(String email) throws InterruptedException
	{
		Thread.sleep(2000);
		driver.findElement(emailInput).sendKeys(email);
	}
	public void clickReset()
	{
		driver.findElement(reset).click();
	}
	public String displaySuccessResetMsg()
	{
		return driver.findElement(successResetMsg).getText();
	}
	public String displayErrorResetMsg()
	{
		return driver.findElement(errorResetMsg).getText();
	}
}
