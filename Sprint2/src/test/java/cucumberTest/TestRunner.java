package cucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


// Run with junit
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "features/forgotpassword.feature"   //package then file name
		,glue={"stepDefinitions"}         //package name
		//,plugin = {"html:sample_feature_report","json:json_report/cucumber.json"}
		//,dryRun=true
		//,monochrome=true
		//,tags = {"@SmokeTest", "@RegressionTest"}   // AND'd
		//,tags = {"@SmokeTest, @RegressionTest"}   // OR'd
)

 public class TestRunner{
 }

/*
// using tentNG
@CucumberOptions(
	features = "features/forgotpassword.feature"
	,glue={"stepDefinitions"}
)

public class TestRunner extends AbstractTestNGCucumberTests{

}
*/
