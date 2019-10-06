# AXA API

![](axa-doc/images/policies.PNG)

A project by: 
*Albet Fuente*


## INTRODUCTION
This is a REST APP that manages information regarding insurance policies and company clients.
There is a lits of company clients and a list of company policies.

The API can:
* register clients an authenticate them.
* register policies.

With the database of clients and policies the API can:
* retrieve user data filtered by user id
* retrieve user data filtered by user name
* retrieve list of policies linked to a user name(only users with role admin)
* retrieve the user linked to a policy number (only users with role admin)

In order to run the API use the command node . inside the axa-api folder.
In order to run the APP use the command yarn start inside the axa-app folder.


## Functional description

**USE CASES**

Admin case

![](axa-doc/images/usecasesAdmin.PNG)

User case

![](axa-doc/images/usecasesClient.PNG)

**FLOW CHART**

Admin

![](axa-doc/images/flowChartAdmin.PNG)

User

![](axa-doc/images/flowChartUser.PNG)

## Technical description

**BLOCK DIAGRAM**

![](axa-doc/images/block.PNG)

**COMPONENTS**

![](axa-doc/images/components-final.PNG)

**DATA MODEL**

![](axa-doc/images/dataModel.PNG)

**CODE COVERAGE**

![Coverage](https://img.shields.io/badge/Coverage-97%25-green.svg)


![](axa-doc/images/coverage.PNG)

**TECHNOLOGIES**

Back end: Node.js, Express,Mocha Chai, MongoDB & Mongoose.

Front end: Node.js, React, Sass
