# Reload-Prompt

Reload-Prompt uses mdg's reload-on-resume package and adds a confirm dialog to provide a smooth user hot code reload experience.

## Installation

```
meteor add poetic:reload-prompt
```

## Setup

The default confirm dialog message is 'A new version of this app is available.'

If you wish to replace 'this app' with your app's name, add APP_NAME to your
Meteor.settings.public and set it to your app's name.

```
// settings.json:
{
  "public": {
    "APP_NAME": "YOUR_APP_NAME",
  }
}

// shell
meteor --settings settings.json
```

### Development

If you would like to disable the reload promtp (probably for development), you
can do that via.

```
// settings.json:
{
  "public": {
    "NO_RELOAD_PROMPT": "true",
  }
}
```

## Dependencies

- [mdg:reload-on-resume](https://github.com/meteor/mobile-packages/blob/master/packages/mdg:reload-on-resume/README.md)
- [cordova-plugin-dialogs](https://github.com/apache/cordova-plugin-dialogs)
