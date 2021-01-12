$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/UC_final.feature");
formatter.feature({
  "line": 1,
  "name": "For testing functionalties of website",
  "description": "",
  "id": "for-testing-functionalties-of-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Sign-in",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-sign-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the hamburger dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user navtigates to and clicks the Sign-in option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "member Sign in page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters registered \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clients Homepage loads",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-sign-in;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 12,
      "id": "for-testing-functionalties-of-website;successful-sign-in;;1"
    },
    {
      "cells": [
        "akshitaa.sharma7@gmail.com",
        "",
        "tomandjerry123"
      ],
      "line": 13,
      "id": "for-testing-functionalties-of-website;successful-sign-in;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9546464853,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Sign-in",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-sign-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the hamburger dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user navtigates to and clicks the Sign-in option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "member Sign in page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters registered akshitaa.sharma7@gmail.com and tomandjerry123",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clients Homepage loads",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_registered()"
});
formatter.result({
  "duration": 2537730133,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_hamburger_dropdown()"
});
formatter.result({
  "duration": 125500160,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_navtigates_to_and_clicks_the_signin_option()"
});
formatter.result({
  "duration": 6907685547,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.member_sign_in_page_should_load()"
});
formatter.result({
  "duration": 46933760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akshitaa.sharma7@gmail.com",
      "offset": 23
    },
    {
      "val": "tomandjerry123",
      "offset": 54
    }
  ],
  "location": "stepdefinitions.user_enters_registered_and(String,String)"
});
formatter.result({
  "duration": 7084673706,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.clients_homepage_loads()"
});
formatter.result({
  "duration": 111787,
  "status": "passed"
});
formatter.after({
  "duration": 2935295573,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the hamburger btn",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user navtigates to and clicks the Sign in option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "member Sign in page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters unregistered \u003cuseremail\u003e or \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;",
  "rows": [
    {
      "cells": [
        "useremail",
        "password"
      ],
      "line": 24,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;1"
    },
    {
      "cells": [
        "unregemail@gmail.com",
        "pass123"
      ],
      "line": 25,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;2"
    },
    {
      "cells": [
        "olo@polo.com",
        "garb123"
      ],
      "line": 26,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;3"
    },
    {
      "cells": [
        "polo.olo@com",
        "dust123"
      ],
      "line": 27,
      "id": "for-testing-functionalties-of-website;unsuccessful-signin;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6974403414,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the hamburger btn",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user navtigates to and clicks the Sign in option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "member Sign in page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters unregistered unregemail@gmail.com or pass123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_not_registered()"
});
formatter.result({
  "duration": 131414,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_hamburger_btn()"
});
formatter.result({
  "duration": 172229546,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_navtigates_to_and_clicks_the_sign_in_option()"
});
formatter.result({
  "duration": 1783564800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.member_sign_in_page_should_load()"
});
formatter.result({
  "duration": 190732800,
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
  "location": "stepdefinitions.user_enters_unregistered_or(String,String)"
});
formatter.result({
  "duration": 1502930773,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.error_messgae_should_be_displayed()"
});
formatter.result({
  "duration": 116421120,
  "status": "passed"
});
formatter.after({
  "duration": 3338110720,
  "status": "passed"
});
formatter.before({
  "duration": 7549524907,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the hamburger btn",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user navtigates to and clicks the Sign in option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "member Sign in page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters unregistered olo@polo.com or garb123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_not_registered()"
});
formatter.result({
  "duration": 90453,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_hamburger_btn()"
});
formatter.result({
  "duration": 361399467,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_navtigates_to_and_clicks_the_sign_in_option()"
});
formatter.result({
  "duration": 2044774827,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.member_sign_in_page_should_load()"
});
formatter.result({
  "duration": 24247040,
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
  "location": "stepdefinitions.user_enters_unregistered_or(String,String)"
});
formatter.result({
  "duration": 1902928213,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.error_messgae_should_be_displayed()"
});
formatter.result({
  "duration": 87671040,
  "status": "passed"
});
formatter.after({
  "duration": 3064362240,
  "status": "passed"
});
formatter.before({
  "duration": 7444296107,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Unsuccessful Signin",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-signin;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is NOT Registered",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the hamburger btn",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user navtigates to and clicks the Sign in option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "member Sign in page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters unregistered polo.olo@com or dust123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "error messgae should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_not_registered()"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_hamburger_btn()"
});
formatter.result({
  "duration": 125936214,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_navtigates_to_and_clicks_the_sign_in_option()"
});
formatter.result({
  "duration": 1374664107,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.member_sign_in_page_should_load()"
});
formatter.result({
  "duration": 24026453,
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
  "location": "stepdefinitions.user_enters_unregistered_or(String,String)"
});
formatter.result({
  "duration": 1214837333,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.error_messgae_should_be_displayed()"
});
formatter.result({
  "duration": 84489386,
  "status": "passed"
});
formatter.after({
  "duration": 2895148374,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Successful Sign-up",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-sign-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "user is NOT registered",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user navtigates to and clicks the Subscribe option",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Pricing page page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user selects the suitable option",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Sign-up page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user enters \u003cFirstname\u003e, \u003cLastname\u003e, \u003cemail\u003e, \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "agrees to the terms and services checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user clicks on Sign-up button",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-sign-up;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "email",
        "password"
      ],
      "line": 44,
      "id": "for-testing-functionalties-of-website;successful-sign-up;;1"
    },
    {
      "cells": [
        "Hardik",
        "Thakur",
        "hardikthakur1111@gmail.com",
        "1234567890"
      ],
      "line": 45,
      "id": "for-testing-functionalties-of-website;successful-sign-up;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6942923946,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Successful Sign-up",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "user is NOT registered",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user clicks on the hamburger button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user navtigates to and clicks the Subscribe option",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Pricing page page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user selects the suitable option",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Sign-up page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user enters Hardik, Thakur, hardikthakur1111@gmail.com, 1234567890",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "agrees to the terms and services checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user clicks on Sign-up button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_hamburger_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinitions.user_navtigates_to_and_clicks_the_subscribe_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinitions.pricing_page_page_should_load()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinitions.user_selects_the_suitable_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinitions.signup_page_should_load()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardik",
      "offset": 12
    },
    {
      "val": "Thakur",
      "offset": 20
    },
    {
      "val": "hardikthakur1111@gmail.com",
      "offset": 28
    },
    {
      "val": "1234567890",
      "offset": 56
    }
  ],
  "location": "stepdefinitions.user_enters_(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinitions.agrees_to_the_terms_and_services_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_signup_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2849395626,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Unsuccessful Sign up using Invalid credentials",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-sign-up-using-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "user clicks on site url",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user clicks on the hamburger icon",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user navtigates to click the Subscribe option",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "selects suitable plan",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user enters invalid \u003cfirstname\u003e or \u003clastname\u003e or \u003cemail\u003e or \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user agrees to terms and services chechbox",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user clicks on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-sign-up-using-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password"
      ],
      "line": 59,
      "id": "for-testing-functionalties-of-website;unsuccessful-sign-up-using-invalid-credentials;;1"
    },
    {
      "cells": [
        "A",
        "4",
        "Amjuh@.com",
        "Ansb4"
      ],
      "line": 60,
      "id": "for-testing-functionalties-of-website;unsuccessful-sign-up-using-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6115377920,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Unsuccessful Sign up using Invalid credentials",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-sign-up-using-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "user clicks on site url",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user clicks on the hamburger icon",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user navtigates to click the Subscribe option",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "selects suitable plan",
  "keyword": "And "
});
formatter.step({
  "line": 53,
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
  "line": 54,
  "name": "user agrees to terms and services chechbox",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user clicks on Sign Up button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_site_url()"
});
formatter.result({
  "duration": 91734,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.is_on_homepage()"
});
formatter.result({
  "duration": 9941334,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_hamburger_icon()"
});
formatter.result({
  "duration": 118521600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_navtigates_to_click_the_subscribe_option()"
});
formatter.result({
  "duration": 1348592213,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.selects_suitable_plan()"
});
formatter.result({
  "duration": 3109672960,
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
  "location": "stepdefinitions.user_enters_invalid_or_or_or(String,String,String,String)"
});
formatter.result({
  "duration": 6508535894,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_agrees_to_terms_and_services_chechbox()"
});
formatter.result({
  "duration": 124470614,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_sign_up_button()"
});
formatter.result({
  "duration": 141176747,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.an_error_message_is_displayed()"
});
formatter.result({
  "duration": 383144106,
  "status": "passed"
});
formatter.after({
  "duration": 3050274560,
  "status": "passed"
});
formatter.before({
  "duration": 7370932906,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Successful loading of Forgotton Password page",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-loading-of-forgotton-password-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "user is on Member Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user clicks on the Forgot password link",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "forgotton password page is loaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_on_member_sign_in_page()"
});
formatter.result({
  "duration": 3075136426,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_forgot_password_link()"
});
formatter.result({
  "duration": 2319535786,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.forgotton_password_page_is_loaded_successfully()"
});
formatter.result({
  "duration": 92383573,
  "status": "passed"
});
formatter.after({
  "duration": 3381540266,
  "status": "passed"
});
formatter.before({
  "duration": 8033867094,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Successful recovery of Forgot password",
  "description": "",
  "id": "for-testing-functionalties-of-website;successful-recovery-of-forgot-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "user is on Member Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "user clicks on the Forgot password link",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "recovery page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "user enters registered email",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "clicks on Reset password button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "successful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_on_member_sign_in_page()"
});
formatter.result({
  "duration": 3151385173,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_forgot_password_link()"
});
formatter.result({
  "duration": 2331679573,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.recovery_page_should_load()"
});
formatter.result({
  "duration": 1664854,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_enters_registered_email()"
});
formatter.result({
  "duration": 4227880106,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.clicks_on_reset_password_button()"
});
formatter.result({
  "duration": 858100053,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.successful_message_should_be_displayed()"
});
formatter.result({
  "duration": 68358400,
  "status": "passed"
});
formatter.after({
  "duration": 3053495893,
  "status": "passed"
});
formatter.before({
  "duration": 7017181867,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Unsuccessful recovery of Forgot password",
  "description": "",
  "id": "for-testing-functionalties-of-website;unsuccessful-recovery-of-forgot-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "user is on Member Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "user clicks on the Forgot password link",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "recovery page should load",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user enters unregistered email",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "clicks on Reset password button",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_on_member_sign_in_page()"
});
formatter.result({
  "duration": 3105698560,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_clicks_on_the_forgot_password_link()"
});
formatter.result({
  "duration": 2509967787,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.recovery_page_should_load()"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.user_enters_unregistered_email()"
});
formatter.result({
  "duration": 4211514880,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.clicks_on_reset_password_button()"
});
formatter.result({
  "duration": 508389973,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.error_message_should_be_displayed()"
});
formatter.result({
  "duration": 103258453,
  "status": "passed"
});
formatter.after({
  "duration": 3271549013,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 86,
  "name": "searching in search box",
  "description": "",
  "id": "for-testing-functionalties-of-website;searching-in-search-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 87,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "user enters \u003csearchtext\u003e in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Course catalouge should load",
  "keyword": "Then "
});
formatter.examples({
  "line": 91,
  "name": "",
  "description": "",
  "id": "for-testing-functionalties-of-website;searching-in-search-box;",
  "rows": [
    {
      "cells": [
        "searchtext"
      ],
      "line": 92,
      "id": "for-testing-functionalties-of-website;searching-in-search-box;;1"
    },
    {
      "cells": [
        "English"
      ],
      "line": 93,
      "id": "for-testing-functionalties-of-website;searching-in-search-box;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7392160000,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "searching in search box",
  "description": "",
  "id": "for-testing-functionalties-of-website;searching-in-search-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 87,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "user enters English in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Course catalouge should load",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.user_is_on_homepage()"
});
formatter.result({
  "duration": 2000654933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 12
    }
  ],
  "location": "stepdefinitions.user_enters_in_the_search_box(String)"
});
formatter.result({
  "duration": 160820907,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.clicks_the_search_button()"
});
formatter.result({
  "duration": 1380050347,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitions.course_catalouge_should_load()"
});
formatter.result({
  "duration": 2026136747,
  "status": "passed"
});
formatter.after({
  "duration": 3069268054,
  "status": "passed"
});
});