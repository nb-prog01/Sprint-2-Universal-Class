package cucumberTest;
import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "features/universal.feature"
,glue={"stepDefinition"},
monochrome=true
)

public class TestRunner {

}
