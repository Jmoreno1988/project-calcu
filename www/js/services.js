angular.module('app.services', [])



    .factory('sessionService', ['$http', function ($http) {
        return {
            set: function (key, value) {
                return localStorage.setItem(key, JSON.stringify(value));
            },
            get: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },
            destroy: function (key) {
                return localStorage.removeItem(key);
            },

            clear: function() {
                return localStorage.clear();
            },

            greeter: function () {
                alert("hello world!!!")
            }
        };
    }])

    .service('bridgeService', [function () {
        return {
            data: {
            }
        };
    }]);