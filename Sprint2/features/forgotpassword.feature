Feature: For Forgot password 

	Scenario: Successful loading of Forgotton Password page
    Given user is on Member Sign-in page
    And user clicks on the Forgot password link
    Then forgotton password page is loaded successfully
    
  Scenario: Successful recovery of Forgot password
    Given user is on Member Sign-in page
    And user clicks on the Forgot password link
    Then recovery page should load
    When user enters registered email
    And clicks on Reset password button
    Then successful message should be displayed 
  
  Scenario: Unsuccessful recovery of Forgot password
    Given user is on Member Sign-in page
    And user clicks on the Forgot password link
    Then recovery page should load
    When user enters unregistered email
    And clicks on Reset password button
    Then error message should be displayed 