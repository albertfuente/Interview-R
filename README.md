# AXA API

![](axa-doc/images/axxalogo.JPG)

A project by: 
*Albet Fuente*


## INTRODUCTION
This is a REST API that manages information regarding insurance policies and company clients.
There is a lits of company clients and a list of company policies.

This API can:
* register clients an authenticate them.
* register policies.

With the database of clients and policies the API can:
* retrieve user data filtered by user id
* retrieve user data filtered by user name
* retrieve list of policies linked to a user name(only users with role admin)
* retrieve the user linked to a policy number (only users with role admin)

In order to run the API use the command node . inside the axa-api folder.


## Functional description

**USE CASES**

Admin case

![](skyshop-doc/images/admin-usecases.PNG)

User case

![](skyshop-doc/images/user-usecases.PNG)

**FLOW CHART**

Admin

![](skyshop-doc/images/flow-chart-admin.PNG)

User

![](skyshop-doc/images/flow-chart-user.PNG)

## Technical description

**BLOCK DIAGRAM**

![](skyshop-doc/images/BlockDiagram.PNG)

**COMPONENTS**

![](skyshop-doc/images/components-final.PNG)

**DATA MODEL**

![](skyshop-doc/images/dataModelUpdate.PNG)

**CODE COVERAGE**

![Coverage](https://img.shields.io/badge/Coverage-96%25-green.svg)


![](skyshop-doc/images/test-coverage-api.PNG)

**TECHNOLOGIES**

Node.js, Express,Mocha Chai, MongoDB & Mongoose.
