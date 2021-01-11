Feature: Sign Up Functionality

	Scenario Outline: Unsuccessful Sign up using Invalid credentials
		Given user clicks on site url
		And is on homepage
		And user clicks on the hamburger button
    And user navtigates to click the Subscribe option
    And selects suitable plan
		When user enters invalid <firstname> or <lastname> or <email> or <password>
		And user agrees to terms and services chechbox
		And user clicks on Sign Up button
		Then an error message is displayed
			
			Examples: 
      | firstname | lastname |    email    | password |
      |   A       |     4    |  Amjuh@.com |   Ansb4  |