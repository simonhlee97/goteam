// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAPFEed9U3upGQlXEPhN5lHpfRqkCto8cY",
    authDomain: "angularsimon.firebaseapp.com",
    databaseURL: "https://angularsimon.firebaseio.com",
    projectId: "angularsimon",
    storageBucket: "angularsimon.appspot.com",
    messagingSenderId: "860025299957"
  }
};
