Feature: login


Scenario Outline: validating login for multiple users
Given open the browser and enter url

When enter username as <username>

And enter password as <password>
And click on submit 
Then Login should be Successful


Examples:
 | username | password  |
 | ADmin    | Admin123  |
 |admin     | pass      |
 |Admin     |admin123   |
 |admin     | Admin123  |