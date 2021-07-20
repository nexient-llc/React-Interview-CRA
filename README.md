# Welcome to the Nexient Technical Interview!

#### Notes

- This repo was created using Create-React-App with the Typescript variant.
- If you're unfamiliar with TypeScript that's totally okay!

  - JavaScript has been enabled so that you can use the familiar `.jsx` and `.js` file extensions as you would an any other React application.

#### Rules for project

- Use the boilerplate from the repo provided
- 1 hour to complete
- Share your screen (we want to see your searches, so please only use one screen) and leave camera on the entire time
- Push solution to GitHub
- Solution must build successfully

#### You're being graded on the follwing

Base:
  - Completion (application should run and be bug free)
  - Code cleanliness
  - Readability and formatting
  - Naming conventions
  - Framework best practices
  - File structure
  - Abstraction when necessary
  - Usage of design patterns and SOLID principles used where applicable
  - Matches design

Optional:
  - Unit testing
  - TypeScript

#### User Story

As a user I want to be able to see a list of Star Wars movies and details about them.

Design - https://www.figma.com/file/OVyIYSBkQXApAlKo0lSONN/Nexient-Interview-Code-Challenge?node-id=19%3A0
API Documentation - https://swapi.dev/documentation

#### Acceptance Criteria

 - A card should be displayed for each movie returned from the api
 - Details for each movie should be displayed on the card per the design
 - The search box should narrow down the cards displayed by movie title (need a design update for this part)

#### Submission

- Go ahead and make commits as usual - note that you _will not_ have pushing permissions

1. when you're ready to submit, you should run `git format-patch origin` which will output a series of git patches.
2. Zip up the files and send them to us at **\_\_\_** (need to setup an email)

- (For the Interviewer) to apply the patches, check out a temp branch, move the patches from the submission to the root directory, and run `git apply *.patch`

---

#### Below we've kept most of the original readme from CRA

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Remove before pushing.

AC
As a user I want to be able to see a list of Star Wars movies and details about them.

- A card should be displayed for each movie returned from the api
- Details for each move should be displayed on the card per the design
- The search box should narrow down the cards displayed by movie title

## Notes

- Container to fetch data and pass that to the card components.
- Want to have a search feature.
  - How to filter movies?
    - by title probably
- Card component to display the data.