Countdown.prototype.construcotr = Countdown;

function Countdown(limitTime) {
    this.initMilliseconds = null;
    this.limitTime = limitTime;
    this.isActive = false;
}

Countdown.prototype.init = function () {
    this.isActive = true;
    var auxTime = new Date();
    this.initMilliseconds = auxTime.getTime();
}

Countdown.prototype.update = function () {
    var auxTime = new Date();
    if (auxTime.getTime() >= this.initMilliseconds + this.limitTime)
        this.isActive = false;
}

Countdown.prototype.isActive = function () {
    return this.isActive;
}

Countdown.prototype.getRest = function () {
    var auxTime = new Date();
    var millis = (this.initMilliseconds + this.limitTime) - auxTime.getTime();
    if(millis >= 0)
        return this.millisToMinutesAndSeconds(millis);
    else
        return "0:00";
}

Countdown.prototype.reset = function () {
    this.isActive = true;
    var auxTime = new Date();
    this.initMilliseconds = auxTime.getTime();
}

Countdown.prototype.add = function (millis) {
    this.limitTime += millis;
}

Countdown.prototype.millisToMinutesAndSeconds = function (millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}