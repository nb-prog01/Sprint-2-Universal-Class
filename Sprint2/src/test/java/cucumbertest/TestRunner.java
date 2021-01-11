package cucumbertest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(features = "features/failedSignUp.feature", 
glue = {"stepDefinitions"},
monochrome=true
)

public class TestRunner 
{
	
}
