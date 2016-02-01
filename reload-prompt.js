Tracker.autorun(function(){
  if (Reload.isWaitingForResume()){
    const appNameInSetting = Meteor.settings &&
      Meteor.settings.public &&
      Meteor.settings.public.APP_NAME;

    const appName = appNameInSetting || 'this app';

    const message = `A new version of ${appName} is avaliable.`;
    if (Meteor.isCordova) {
      // for cordova

      const title = 'Update Available';
      const confirmCallback = function() {
        window.location.reload();
      };
      const buttonLabels = ['Update', 'Later'];

      if (process.env.NODE_ENV === "production") {
        navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
      }else{
        console.log( "Reload Prompt - Accepting update since not production" );
        window.location.reload();
      }
    } else {
      // browser

      const update = window.confirm(message);

      if (update) {
        window.location.reload();
      }
    }
  }
});
