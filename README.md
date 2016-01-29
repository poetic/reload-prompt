#Reload-Prompt

Reload-Prompt uses mdg's reload-on-resume package and adds a confirm dialog to provide a smooth user hot code reload experience.

##Installation

meteor add poetic:reload-prompt

##Setup

The default confirm dialog message is 'A new version of this app is available.'

If you wish to replace 'this app' with your app's name, add APP_NAME to your
Meteor.settings.public and set it to your app's name.

###example

inside settings.json:

{
  "public": {
    "APP_NAME": "Hello World App", // <- add your app name here
    "TWILIO": {
    "FROM": "############",
    "SID": "############,
    "TOKEN": "############
    },
    "CLOUDINARY": {
      "CLOUD": "############
    }
  }
}

Be sure to run Meteor using your settings.json

meteor --settings settings.json
