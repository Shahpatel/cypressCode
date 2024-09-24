Feature: simple form
Scenario: to verify the form working 
Given open browser and enter form url
When user enter firstname,lastname,email,cotact
And user click on submit
Then Successful alert should be displayed with a message.
