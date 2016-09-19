//This is a project for generating never expiring custom firebase tokens.

var firebase = require("firebase");

//Download from Permissions -> Service Accounts -> Create Key
var serviceJSONFile = "<file>.json"

//Your database url
var databaseUrl = "https://<server-name>.firebaseio.com/"

//Reference service admin UUID. Authenticate as admin user.
// **Needs Firebase admin rules change for use.
var serviceUUID = "my-private-custom-service-uud"

firebase.initializeApp({
  serviceAccount: serviceJSONFile,
  databaseURL: databaseUrl
});

var customToken = firebase.auth().createCustomToken(serviceUUID);

console.log (customToken);