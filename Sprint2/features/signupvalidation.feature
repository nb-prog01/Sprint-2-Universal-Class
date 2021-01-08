
Feature: Universal Class Sign Up

	Background: 
		Given user is on universal class homepage
		
  Scenario: Successful Sign Up validation
    And user clicks on More options button
    And clicks on Subscribe button
    And clicks on Start now button of any course
    When user enters valid firstname and lastname
    And user enters valid email and password
    And clicks on I agree
    Then sign up is successful

	Scenario Outline: Unsuccessful Sign Up validation
    And user clicks on More options button
    And clicks on Subscribe button
    And clicks on Start now button of any course
    When user enters invalid <firstname> and <lastname>
    And user enters invalid <email> and <password>
    And clicks on I agree
    Then sign up is Unsuccessful
    
    Examples: 
      | firstname | lastname | email | password |
      | Joseph | Phils | josephphils@gmail.com | 123456789 |
      | J | Phils | josephphils@gmail.com | 123456789 |
      | null | Phils | josephphils@gmail.com | 123456789 |
      | 123 | Phils | josephphils@gmail.com | 123456789 |
			| $!12 | Phils | josephphils@gmail.com | 123456789 |
			| Joseph | P | josephphils@gmail.com | 123456789 |
			| Joseph | null | josephphils@gmail.com | 123456789 |
			| Joseph | 123 | josephphils@gmail.com | 123456789 |
			| Joseph | !$12 | josephphils@gmail.com | 123456789 |
			| Joseph | Phils | josephphils,gmail@com | 123456789 |
			| Joseph | Phils | null | 123456789 |
			| Joseph | Phils | josephphils@gmail.com | 1234 |
			| Joseph | Phils | josephphils@gmail.com | null |
    
	Scenario: Succussful Sign In
    And clicks on More options button
		And clicks on Sign In button
    When user enters registered email and password
    And clicks Sign in button
    Then user signs in successfully
    
	Scenario Outline: Unsuccessful Sign In
    And clicks on More options button
		And clicks on Sign In button
    When user enters invalid <email> and <password>
    And clicks on Sign in button
    Then sign in is unsuccessful

    Examples: 
      | email | password |
      | hardikthakur200@gmail.com | 123456789 |
      | null | 123456789 |
      | harrythakur58@gmail.com | 1234567 |
      | harrythakur58@gmail.com | null |
			| null | null |
			
	Scenario: Forgot password link navigates to next page
		And clicks on More options button
		And clicks on Sign In button
		And clicks on Forgot password link
		When user clicks on Forgot password link
		Then user navigates to forgotton password page successfully

	Scenario: Reset password sends email successfully 
		And clicks on More options button
		And clicks on Sign In button
		And clicks on Forgot password link
		And enters valid email
		When user clicks Reset password button
		Then email is sent to the given email
		
	Scenario: Reset password button does not send email 
		And clicks on More options button
		And clicks on Sign In button
		And clicks on Forgot password link
		And enters invalid email
		When user clicks Reset password button
		Then error message is displayed
			
	Scenario: Search button searches for relevant courses
		And clicks on search bar
		And enters subject in the searchbar
		When user clicks search button
		Then relevant result is displayed
		