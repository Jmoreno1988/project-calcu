appControllers.controller('sudokuResultCtrl', ['$scope', 'bridgeService', '$ionicSideMenuDelegate', 'sessionService', '$interval', '$rootScope',
    function ($scope, bridgeService, $ionicSideMenuDelegate, sessionService, $interval, $rootScope) {
        var level = bridgeService.data.sudokuSelectLevel;
        var aux = sessionService.get("progressSudoku");
       
        aux[level].board = null;
        aux[level].wins = aux[level].wins + 1;
        sessionService.set("progressSudoku", aux);

        $scope.level = dictionary[sessionService.get("config").lenguage][level];
        $scope.time = millisToMinutesAndSeconds(aux[level].time);
        $scope.totalSuccess = aux[level].wins;

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

        function millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
    }])