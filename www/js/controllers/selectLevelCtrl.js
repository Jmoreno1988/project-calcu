appControllers.controller('selectLevelCtrl', ['$scope', '$stateParams', '$state', 'sessionService', '$ionicPopup', 'bridgeService', '$ionicSideMenuDelegate',
    function ($scope, $stateParams, $state, sessionService, $ionicPopup, bridgeService, $ionicSideMenuDelegate) {
        var mathCalcu = sessionService.get("progressMathCalcu");

        $scope.recordEasy = mathCalcu.easy.maxScore;
        $scope.lastScoreEasy = mathCalcu.easy.lastScore;

        $scope.selectLevel = function (level) {
            if (!mathCalcu[level].blocked) {
                bridgeService.data.selectLevel = level;
                $state.go("canvas", { level: level });
            } else {
                var confirmPopup = $ionicPopup.alert({
                    title: 'Level is blocked',
                    template: 'If you want to unlock the level...'
                });
            }
        }

        $scope.showPopup = function () {
            var confirmPopup = $ionicPopup.alert({
                title: 'Work in progress',
                template: 'Estara listo en la versión final del juego ;)'
            });
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }])