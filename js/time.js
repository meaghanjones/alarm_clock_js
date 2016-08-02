var alarm;
function Clock (){
  this.currentTime = moment();
}


Clock.prototype.getNowTime = function() {
  this.currentTime = moment();
  return this.currentTime;
};

Clock.prototype.setAlarm = function(alarmTime) {
  var nowTime = moment();
  var nowMilliseconds = nowTime.seconds()*1000 + nowTime.minutes()*60000 + nowTime.hours()*3600000;
  console.log("current time" + nowMilliseconds);
  var alarmInterval = alarmTime - nowMilliseconds;
  console.log("alarm time" + alarmTime);
  console.log("alarmInterval" + alarmInterval);
  alarm = setInterval(alarmExecute, alarmInterval);
};

alarmExecute = function() {
  console.log("Alarm!");
  clearInterval(alarm);
};

exports.timeModule = Clock;
