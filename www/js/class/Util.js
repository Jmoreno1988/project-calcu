Util.prototype.construnctor = Util;
function Util() {}

Util.validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

Util.validateNick = function(nick) {
    var re = /^[a-z0-9_-]{4,15}$/;
    return re.test(nick);
}