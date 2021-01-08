Feature: For testing functionalties of website
  
  Scenario Outline: Unsuccessful Signin
    Given user is NOT Registered
    And user clicks on the hamburger button
    And user navtigates to and clicks the Signin option
    Then member Signin page should load
    When user enters unregistered <useremail> or <password>
    Then error messgae should be displayed

    Examples: 
      |        useremail 			| password |
      |  unregemail@gmail.com	| pass123  |
      |  olo@polo.com       	| garb123  |
      |  polo.olo@com        	| dust123  |

  