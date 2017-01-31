appControllers.controller('selectLevelCtrl', ['$scope', '$stateParams', '$state', 'sessionService', '$ionicPopup', 'bridgeService',
    function ($scope, $stateParams, $state, sessionService, $ionicPopup, bridgeService) {
        var mathCalcu = sessionService.get("progress").mathCalcu;

        //TODO: Poner los candados en funcion de si esta bloqueado

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
    }])