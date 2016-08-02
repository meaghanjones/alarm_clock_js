(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  alarm = setTimeout(alarmExecute, alarmInterval);
};

Clock.prototype.setSnooze = function(snoozeTime) {
  alarm = setTimeout(alarmExecute, snoozeTime);
}

alarmExecute = function() {
  $("#alarm-pic").show();
};

exports.timeModule = Clock;

},{}],2:[function(require,module,exports){
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

},{"./../js/time.js":1}]},{},[2]);
