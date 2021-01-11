Feature: Universal Class site.
 
	Background:
		Given user clicks on site url
		And is on homepage


	Scenario Outline: Successful Sign up using valid credentials
		And clicks on any featured courses for sign up
		And clicks on Join this course
		When user enters valid <fname> firstname
		And user enters valid <lname> lastname
		And user enters valid <email> email id
		And user enters valid <pwd> password
		And user agrees to terms and services chechbox
		And user clicks on Sign Up button
		Then user Sign Up is Successful
			
			Examples: 
      | fname | lname | email | pwd |
      |       |       |       |     |


	Scenario Outline: Unsuccessful Sign up using Invalid credentials
		And clicks on any featured courses for sign up
		And clicks on Join this course
		When user enters invalid <firstname> or <lastname> or <email> or <password>
		And user agrees to terms and services chechbox
		And user clicks on Sign Up button
		Then an error message is displayed
			
			Examples: 
      | firstname | lastname | email | password |
      |           |          |       |          |
	

	Scenario Outline: Successful Sign In using Registered credentials
		And user clicks on hamburger button beside My Classes
		And user clicks on Sign In
		When user enters registered <email> email id
		And user enters corresponding <pass> password
		And clicks on Sign In button
		Then user is Signed In successfully

			Examples: 
      | email | pass|
      |       |     |


	Scenario Outline: Unsuccessful Sign In using Invalid credentials
		And user clicks on hamburger button beside My Classes
		And user clicks on Sign In
		When user enters invalid <email> or <password>
		And clicks on Sign In button
		Then an error message is displayed
		
			Examples: 
      | email | password |
      |       |          |
		
		
	Scenario: Successful Forgot Password using registered email id
	  And user clicks on hamburger button beside My Classes
		And user clicks on Sign In
		And user clicks on Forgot Password
		When user enters registered email id
		And clicks on Reset Password
		Then Password reset information is sent to mail
	
		
	Scenario: Unsuccessful Forgot Password using invalid email id
		And user clicks on hamburger button beside My Classes
		And user clicks on Sign In
		And user clicks on Forgot Password
		When user enters invalid email id
		And clicks on Reset Password button
		Then Error message is displayed
	
		
	Scenario: Searching courses in search button
		When user enters the course in search textbox
		And clicks on search button
		Then courses related to entered course is displayed
		



		
	