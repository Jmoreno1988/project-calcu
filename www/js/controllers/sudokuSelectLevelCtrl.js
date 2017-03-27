appControllers.controller('sudokuSelectLevelCtrl', ['$scope', 'sessionService', '$state', 'bridgeService', '$ionicSideMenuDelegate',
    function ($scope, sessionService, $state, bridgeService, $ionicSideMenuDelegate) {

        $scope.selectLevel = function (level) {
            bridgeService.data.sudokuSelectLevel = level;
            $state.go("sudokuBoard");
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }


        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [

            ]);
        }

        translate();
        // Fin Traduccion
    }])