## Introduction
Use Cypress Framework to validate UI functions of React Shopping Cart

### Test Scope

1) UI Automation Tests for Main Page, Check on Sizes and Add to Cart.
      mainPage.spec.js
      verifyCart.spec.js
      checkSize.spec.js
    
2) End To End Test to check navigation from home till checkout process.
      endToEnd.spec.js

### How to Test

#### Step-1 : Clone React Shopping Cart App into local
/* Clone the repositor for React Shopping Cart */

git clone https://github.com/sreevalliboppana/ShoppingCart.git

cd ShoppingCart

#### Step-2 : Install NPM Dependencies
/* NPM Install - all dependencies for this repository */

npm install

#### Step-3 : Initiate React Shopping Cart app locally to run tests against the local instance
/* Start React Shopping Cart Application on local host at port 3000 */

npm start

#### Step-4 : Run Cypress Tests to perform validations on the app
/* In second terminal, run Cypress tests using below script which is now added to package.json */

npm run cypress-testing
