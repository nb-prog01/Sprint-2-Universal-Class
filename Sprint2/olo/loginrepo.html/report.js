$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/UniClass.feature");
formatter.feature({
  "line": 1,
  "name": "For testing functionalties of website",
  "description": "",
  "id": "for-testing-functionalties-of-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user navtigates to and clicks the Signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "member Signin page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters unregistered \u003cuseremail\u003e or \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;",
  "rows": [
    {
      "cells": [
        "useremail",
        "password"
      ],
      "line": 12,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;1"
    },
    {
      "cells": [
        "unregemail@gmail.com",
        "pass123"
      ],
      "line": 13,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;2"
    },
    {
      "cells": [
        "olo@polo.com",
        "garb123"
      ],
      "line": 14,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;3"
    },
    {
      "cells": [
        "polo.olo@com",
        "dust123"
      ],
      "line": 15,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user navtigates to and clicks the Signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "member Signin page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters unregistered unregemail@gmail.com or pass123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_is_not_registered()"
});
formatter.result({
  "duration": 8721809493,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_the_hamburger_button()"
});
formatter.result({
  "duration": 122786560,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_navtigates_to_and_clicks_the_signin_option()"
});
formatter.result({
  "duration": 1452350720,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.member_signin_page_should_load()"
});
formatter.result({
  "duration": 26418773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unregemail@gmail.com",
      "offset": 25
    },
    {
      "val": "pass123",
      "offset": 49
    }
  ],
  "location": "stepdefinition.user_enters_unregistered_or(String,String)"
});
formatter.result({
  "duration": 1229766400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.error_messgae_should_be_displayed()"
});
formatter.result({
  "duration": 88146774,
  "status": "passed"
});
formatter.after({
  "duration": 138160214,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user navtigates to and clicks the Signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "member Signin page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters unregistered olo@polo.com or garb123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_is_not_registered()"
});
formatter.result({
  "duration": 7796501760,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_the_hamburger_button()"
});
formatter.result({
  "duration": 123647147,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_navtigates_to_and_clicks_the_signin_option()"
});
formatter.result({
  "duration": 2228048640,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.member_signin_page_should_load()"
});
formatter.result({
  "duration": 43662080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "olo@polo.com",
      "offset": 25
    },
    {
      "val": "garb123",
      "offset": 41
    }
  ],
  "location": "stepdefinition.user_enters_unregistered_or(String,String)"
});
formatter.result({
  "duration": 1759175680,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.error_messgae_should_be_displayed()"
});
formatter.result({
  "duration": 102952960,
  "status": "passed"
});
formatter.after({
  "duration": 73634560,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user navtigates to and clicks the Signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "member Signin page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters unregistered polo.olo@com or dust123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_is_not_registered()"
});
formatter.result({
  "duration": 7025599574,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_the_hamburger_button()"
});
formatter.result({
  "duration": 182823680,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_navtigates_to_and_clicks_the_signin_option()"
});
formatter.result({
  "duration": 1408691200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.member_signin_page_should_load()"
});
formatter.result({
  "duration": 26896640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "polo.olo@com",
      "offset": 25
    },
    {
      "val": "dust123",
      "offset": 41
    }
  ],
  "location": "stepdefinition.user_enters_unregistered_or(String,String)"
});
formatter.result({
  "duration": 1461427627,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.error_messgae_should_be_displayed()"
});
formatter.result({
  "duration": 110277547,
  "status": "passed"
});
formatter.after({
  "duration": 78121386,
  "status": "passed"
});
});