# _DanceNetwork_

#### _A directory of Seattle dance companies: Epicodus solo exercise, 11.3.2017_

#### By _**Elrey Belmonti**_

## Description

_The concept for the app is a central location to Seattle dance companies basic information._

## Setup/Installation Requirements

* Clone this repository
* In terminal, navigate to this projects root directory (club-directory)
* Ensure you have [Node.js](https://nodejs.org/en/), [Gulp](https://gulpjs.com), and [TypeScript](https://www.typescriptlang.org) installed
* In terminal (while still in root directory), enter the following commands:
  * ``` $ npm install ```
  * ``` $ bower install ```
* Visit [Firebase](https://firebase.google.com)
* Log in with Google credentials.
* Click get started button.
* Click Add Project button.
* In project name field enter ```dance-network```
* Click create project button.
* In terminal, in root directory, enter ```touch src/app/api-keys.ts```
* Open project with text editor of choice
* Back to the firebase page, click "Add firebase to your web app". A pop-up modal should appear on your screen.
* In your newly created api-keys.ts file add the following from the modal:
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

* On the left hand side of the Firebase page, click on database.
* Click Get Started underneath the Realtime Database on the center of the screen.
* Click Rules on the blue navbar located on the top of the screen.
* Change both ```auth != null``` inside the quotes to ```true```.
* Click the white Publish button that appeared in the navbar.
* Click Data button in navbar.
* Click on triple ... button on right side of gray box in the middle of the screen.
* Select import JSON.
* Select browse and navigate to project folder. Select the sample-companies.json file and click blue import button.
* Back in the terminal (you should still be in the root directory of the project folder) run the following:  ``` $ ng serve ```
* Navigate to ```localhost:4200``` in web browser of choice


## Known Bugs 🐛🐛🐛

No known bugs

## Support and contact details

_Feel free to contact me at elbelmonti@gmail.com_

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Future functionality
* Add functionality to show reviews on companies
* Deploy your application. Include a link to the live site in your project's README.
* AngularFire/Firebase user authentication
* Filter companies by type

## Technologies Used

* _Angular 2_
* _HTML_
* _CSS_
* _Node_
* _JavaScript_

## Contributors

<!-- Contributors START
Elrey_Belmonti ElreyB https://github.com/ElreyB code doc bug design tests
Contributors END -->
<!-- Contributors table START -->
| <img src="https://avatars.githubusercontent.com/ElreyB?s=100" width="100" alt="Elrey Belmonti" /><br />[<sub>Elrey Belmonti</sub>](https://github.com/ElreyB)<br />[💻](https://github.com/ElreyB/word-definer/commits?author=ElreyB) [📖](https://github.com/ElreyB/word-definer/commits?author=ElreyB) [🐛](https://github.com/ElreyB/word-definer/issues?q=author%3AElreyB) 🎨 [⚠️](https://github.com/ElreyB/word-definer/commits?author=ElreyB) |
| :---: |
<!-- Contributors table END -->
This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
