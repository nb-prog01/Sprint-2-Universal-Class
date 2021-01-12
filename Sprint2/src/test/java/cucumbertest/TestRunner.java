package cucumbertest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions
(features = "features/failedSignUp.feature", 
glue = {"stepDefinitions"},
format= {"html:FailedLogin"},
monochrome=true
)

public class TestRunner extends AbstractTestNGCucumberTests
{
	
}
