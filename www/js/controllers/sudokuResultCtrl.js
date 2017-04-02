appControllers.controller('sudokuResultCtrl', ['$scope', 'bridgeService', '$ionicSideMenuDelegate', 'sessionService', '$interval', '$rootScope',
    function ($scope, bridgeService, $ionicSideMenuDelegate, sessionService, $interval, $rootScope) {

        var level =  bridgeService.data.sudokuSelectLevel;
        

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }])