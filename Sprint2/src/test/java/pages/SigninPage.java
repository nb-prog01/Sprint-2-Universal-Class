package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SigninPage {
    WebDriver driver;

    private By useremail=By.xpath("//input[@name='username']");
    private By password=By.xpath("//input[@name='password']");
    private By signin=By.xpath("//input[@name='SubmitButton']");
    private By errmsg=By.xpath("//*[@id='mainbody']/div[1]/div[1]/div/div");
    
	public SigninPage(WebDriver driver) {
		this.driver = driver;
	}
	public void typeemail(String email){
        driver.findElement(useremail).sendKeys(email);
    }
    public void typepass(String pass){
        driver.findElement(password).sendKeys(pass);
    }
    public void clicksignin(){
        driver.findElement(signin).click();
    }
    public void printerror(){
        String msg=driver.findElement(errmsg).getText();
        System.out.println(msg);
    }
}
