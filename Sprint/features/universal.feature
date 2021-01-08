Feature: Sign In and search
  Scenario Outline: Successful Sign-in
    Given user is Registered
    And user clicks on the hamburger button
    And user navtigates to and clicks the Sign-in option
    Then Member Sign-in page should load
    When user enters registered <username> and <password>
    Then clients Homepage loads

    Examples: 
      | username |                | password |
      |akshitaa.sharma7@gmail.com||tomandjerry123|
     

  Scenario Outline: searching in search box
    Given user is on Homepage
    And user enters <searchtext> in the search box
    And clicks the search button
    Then Course catalouge should load
    Examples:
    |searchtext|
    |English|