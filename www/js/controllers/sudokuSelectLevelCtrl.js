appControllers.controller('sudokuSelectLevelCtrl', ['$scope', 'sessionService',
    function ($scope, sessionService) {
        
        
        
        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [
                
            ]);
        }

        translate();
        // Fin Traduccion
    }])