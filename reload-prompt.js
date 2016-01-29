Tracker.autorun(function(){
  if (Reload.isWaitingForResume()){
    const message = 'An update is available';

    if (Meteor.isCordova) {
      // for cordova

      const title = 'Update';
      const confirmCallback = function() {
        window.location.reload();
      };
      const buttonLabels = ['Later', 'Update'];

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
