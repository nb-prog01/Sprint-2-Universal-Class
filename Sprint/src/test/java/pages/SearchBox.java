package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SearchBox {
WebDriver driver;

private By search=By.id("SearchString");
private By click=By.xpath("//*[@id=\"searchicon\"]/img");

public SearchBox(WebDriver driver)
{
	this.driver=driver;
}
public void find(String data)
{
	driver.findElement(search).sendKeys(data);
	
}
public void enter()
{
	driver.findElement(click).click();
}
}
