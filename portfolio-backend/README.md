# portfolio-backend-deployed with front-end build

## https://khem-portfolio.herokuapp.com/

# This project is entirely done for displaying my own personal portfolio by using the following technologies:

- NodeJS, Express, ES6, JSX Syntaxing (Backend)
- MogoDB
- ReactJS, Material UI, Boot Strap, Google Map

# Important features:

- Signup with new username and password & automatically go to the login page if the signing up is successful, else you are guided to sign up properly.
- Json Web Token authorizes the user
- Only the user with access token is authorized to log in
- Logged in user can only do:
  - Add/Delete his/her profile information, experiences and can send messages
- User cannot delete other users' items but can only view: list view or comprehensive view
- Test Automation with Robot Framework with Selenium is carried out for this project
- [UI Testing File](https://github.com/khemrajneupane/Test-Automation-Robot-Selenium-Khem-Portfolio)

# To run this project

- npm install
- nodemon index.js or
  - node_modules/.bin/nodemon index.js or
  - node index.js or
  - npm start

[Run Locally](http://localhost:3000/)

# Rooms for improvement:

- Project still needs better usability, looks
- More rooms for improvement as my further self-assignment :)
