Feature: Universal class
Background:
Given User should launch the application browser
And open the Universal class website in browser

  
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
    Then Client homepage should load

    Examples: 
      | Firstname | Lastname |            email           |       password     |
      |  Hardik	  |  Thakur  | hardikthakur1111@gmail.com |      1234567890    |
     