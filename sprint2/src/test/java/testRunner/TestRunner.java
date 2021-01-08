package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions
(features = "feature/sprint2.feature",
glue = {"stepDefination"},
monochrome=true
)
public class TestRunner {
	
}
