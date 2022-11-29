# Fetch_FE_Test


### Overview
This is a take home test application for Fetch Rewards.

The goal of this application is to create a form that asks the following 

| Form |   |   |   |   |
|---|---|---|---|---|
| Full Name  |  User-generated 
|  Email |  User-generated 
| Password  | User-generated  
|  Occupation | API-Generated    
| State  |  API-Generated    


- The form will require all options be filled in before submission is possible.
- The form body will be sent back to given API. 
- JSON Data is named:
{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}

## Vite.js + React
-  Using vite.js for scaffolding
- Vite is much more lightweight than CRA 
- initiated w/ ``` npm create vite@latest react-form-app --template react ```

## MUI
- Using Material UI for styling
- An easy to use framework that is great for prototyping ideas or styling entire sites with!


### Loading
- Struggled a bit with loading, had a loading tag. However, loading specific data from API was returning undefined.  Fixed by testing values of specific data points before loading form. 

### Styling
- Relyed on MUI for styling, although still barebones.  Styling is where I need to learn and grow a lot more!

### Modal
- Added modal to submit button for user acknowledgement that the sign up was complete. 
