# Interview coding exercise

A coding test for one of my interview processes.

The take-home test involved a smaller exercise to implement some functions, and a bigger exercise to develop a small app, and took ~1 hour to complete.

During the interview, some additional features were added to the bigger coding exercise.

## Getting started

Requires [Node.js](https://nodejs.org/) to run this solution.

- Install dependencies
  ```
  npm install
  ```
- Start the local server
  ```
  npm start
  ```

## Small coding exercise

![screenshot of the small coding exercise page](https://github.com/punit-shah/turnitin-coding-test/assets/6018387/2c693479-77e4-4076-b325-6760dba9def0)

Each of the functions implemented for this exercise (`delay`, `animateRight`, and `removeDuplicates`) can be found in [small-coding-exercise/functions.js](https://github.com/punit-shah/turnitin-coding-test/blob/main/src/small-coding-exercise/functions.js).

Additionally, a page was created to demonstrate each of the functions, which can be found at http://localhost:3000/small-coding-exercise once the server is running.

## Bigger coding exercise

![screenshot of the random dog app](https://github.com/punit-shah/turnitin-coding-test/assets/6018387/61fcca5d-08bf-4501-8c13-47d047862b07)

This part of the exercise can be found at http://localhost:3000/bigger-coding-exercise once the server is running.

The app displays a random dog image, and links to 10 random dog pictures on the bottom, labeled by their breed.

The app was built with vanilla JavaScript in the interest of time and simplicity.

### Updates

During the interview, a couple of updates were made to the app:

- The main image is now updated when one of the image links is clicked
- The app now has a search input that gets 10 images of the breed entered
