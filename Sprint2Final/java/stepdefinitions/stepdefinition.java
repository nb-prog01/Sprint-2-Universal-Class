package stepdefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition {
    @Given("^user is NOT Registered$")
    public void user_is_not_registered() throws Throwable {
        
    }

    @When("^user enters unregistered (.+) or (.+)$")
    public void user_enters_unregistered_or(String useremail, String password) throws Throwable {
        
    }

    @Then("^member Signin page should load$")
    public void member_signin_page_should_load() throws Throwable {
        
    }

    @Then("^error messgae should be displayed$")
    public void error_messgae_should_be_displayed() throws Throwable {
        
    }

    @And("^user clicks on the hamburger button$")
    public void user_clicks_on_the_hamburger_button() throws Throwable {
        
    }

    @And("^user navtigates to and clicks the Signin option$")
    public void user_navtigates_to_and_clicks_the_signin_option() throws Throwable {
        
    }
}
