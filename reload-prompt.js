Tracker.autorun(function(){
  if (Reload.isWaitingForResume()){
    const message = 'A new version of your app is avaliable';

    if (Meteor.isCordova) {
      // for cordova

      const title = 'Update available';
      const confirmCallback = function() {
        window.location.reload();
      };
      const buttonLabels = ['Update', 'Later'];

      navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
    } else {
      // browser

      const update = window.confirm(message);

      if (update) {
        window.location.reload();
      }
    }
  }
});
