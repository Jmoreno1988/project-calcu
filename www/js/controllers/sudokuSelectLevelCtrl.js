appControllers.controller('sudokuSelectLevelCtrl', ['$scope', 'sessionService', '$state', 'bridgeService',
    function ($scope, sessionService, $state, bridgeService) {

        $scope.selectLevel = function (level) {
            bridgeService.data.sudokuSelectLevel = level;
            $state.go("sudokuBoard");
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