$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/failedSignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up Functionality",
  "description": "",
  "id": "sign-up-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Unsuccessful Sign up using Invalid credentials",
  "description": "",
  "id": "sign-up-functionality;unsuccessful-sign-up-using-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user clicks on site url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user navtigates to click the Subscribe option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects suitable plan",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters invalid \u003cfirstname\u003e or \u003clastname\u003e or \u003cemail\u003e or \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user agrees to terms and services chechbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "sign-up-functionality;unsuccessful-sign-up-using-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password"
      ],
      "line": 15,
      "id": "sign-up-functionality;unsuccessful-sign-up-using-invalid-credentials;;1"
    },
    {
      "cells": [
        "A",
        "4",
        "Amjuh@.com",
        "Ansb4"
      ],
      "line": 16,
      "id": "sign-up-functionality;unsuccessful-sign-up-using-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Unsuccessful Sign up using Invalid credentials",
  "description": "",
  "id": "sign-up-functionality;unsuccessful-sign-up-using-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user clicks on site url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user navtigates to click the Subscribe option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects suitable plan",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters invalid A or 4 or Amjuh@.com or Ansb4",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user agrees to terms and services chechbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_site_url()"
});
formatter.result({
  "duration": 9702925700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.is_on_homepage()"
});
formatter.result({
  "duration": 8151800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_the_hamburger_button()"
});
formatter.result({
  "duration": 80191800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navtigates_to_click_the_subscribe_option()"
});
formatter.result({
  "duration": 1410356800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.selects_suitable_plan()"
});
formatter.result({
  "duration": 3096322100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 20
    },
    {
      "val": "4",
      "offset": 25
    },
    {
      "val": "Amjuh@.com",
      "offset": 30
    },
    {
      "val": "Ansb4",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.user_enters_invalid_or_or_or(String,String,String,String)"
});
formatter.result({
  "duration": 6305279400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_agrees_to_terms_and_services_chechbox()"
});
formatter.result({
  "duration": 50572000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_sign_up_button()"
});
formatter.result({
  "duration": 65934800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_is_displayed()"
});
formatter.result({
  "duration": 347300200,
  "status": "passed"
});
formatter.after({
  "duration": 136978600,
  "status": "passed"
});
});