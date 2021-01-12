package testrunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(features = "features/UC_final.feature", glue = {"stepdefinitions"}, format = { "pretty","html:olo","junit:junit_xml/olo.xml"} )
public class TestRunner extends AbstractTestNGCucumberTests {


	

}
