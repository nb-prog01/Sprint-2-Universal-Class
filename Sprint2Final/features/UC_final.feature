Feature: For testing functionalties of website

  Scenario Outline: Successful Sign-in
    Given user is Registered
    And user clicks on the hamburger dropdown
    And user navtigates to and clicks the Sign-in option
    Then member Sign in page should load
    When user enters registered <username> and <password>
    Then clients Homepage loads

    Examples: 
      | username |                | password |
      |akshitaa.sharma7@gmail.com||tomandjerry123|
      
  Scenario Outline: Unsuccessful Signin
    Given user is NOT Registered
    And user clicks on the hamburger btn
    And user navtigates to and clicks the Sign in option
    Then member Sign in page should load
    When user enters unregistered <useremail> or <password>
    Then error messgae should be displayed

    Examples: 
      |        useremail 			| password |
      |  unregemail@gmail.com	| pass123  |
      |  olo@polo.com       	| garb123  |
      |  polo.olo@com        	| dust123  |



   Scenario Outline: Successful Sign-up

    Given user is NOT registered
    And user clicks on the hamburger button
    And user navtigates to and clicks the Subscribe option
    Then Pricing page page should load
    When user selects the suitable option
    Then Sign-up page should load
    And user enters <Firstname>, <Lastname>, <email>, <password>
    And agrees to the terms and services checkbox
    And user clicks on Sign-up button
    
    Examples: 
      | Firstname | Lastname |            email           |       password     |
      |  Hardik	  |  Thakur  | hardikthakur1111@gmail.com |      1234567890    |
     
	Scenario Outline: Unsuccessful Sign up using Invalid credentials
		Given user clicks on site url
		And is on homepage
		And user clicks on the hamburger icon
    And user navtigates to click the Subscribe option
    And selects suitable plan
		When user enters invalid <firstname> or <lastname> or <email> or <password>
		And user agrees to terms and services chechbox
		And user clicks on Sign Up button
		Then an error message is displayed
			
			Examples: 
      | firstname | lastname |    email    | password |
      |   A       |     4    |  Amjuh@.com |   Ansb4  |


  	Scenario: Successful loading of Forgotton Password page
    Given user is on Member Sign in page
    And user clicks on the Forgot password link
    Then forgotton password page is loaded successfully
  
  Scenario: Successful recovery of Forgot password
    Given user is on Member Sign in page
    And user clicks on the Forgot password link
    Then recovery page should load
    When user enters registered email
    And clicks on Reset password button
    Then successful message should be displayed 

  Scenario: Unsuccessful recovery of Forgot password
    Given user is on Member Sign in page
    And user clicks on the Forgot password link
    Then recovery page should load
    When user enters unregistered email
    And clicks on Reset password button
    Then error message should be displayed 
    

 
  Scenario Outline: searching in search box
    Given user is on Homepage
    And user enters <searchtext> in the search box
    And clicks the search button
    Then Course catalouge should load
    Examples:
    |searchtext|
    |English|
