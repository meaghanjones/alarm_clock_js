var Clock = require('./../js/time.js').timeModule;

var updateClock = function() {
  $('#time').text(moment());
};

var secondTimer = setInterval(updateClock, 1000);

$(document).ready(function(){
  var timerClock = new Clock();
  $("#alarm-input").submit(function() {
    event.preventDefault();
    $("#alarm-pic").hide();
    var alarmTime = $("#h-m-time").val();
    alarmTime = moment.duration(alarmTime)
    timerClock.setAlarm(alarmTime);
  });

  $("#snooze").submit(function() {
    event.preventDefault();
    var moreTime = $("#snooze-time").val();
    var snoozeTime = moreTime * 1000;
    $("#alarm-pic").hide();
    timerClock.setSnooze(snoozeTime);
  });
});
