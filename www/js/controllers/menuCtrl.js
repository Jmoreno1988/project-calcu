appControllers.controller('menuCtrl', ['$rootScope', '$scope', '$stateParams', 'sessionService',
    function ($rootScope, $scope, $stateParams, sessionService, $cordovaSocialSharing) {

        $scope.goTo = function (page) {
            switch (page) {
                case "removeAds":
                    // TODO: cambiar ruta cuando tenga la app sin publi subida a la playStore
                    window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
                    break;
                case "evaluateApp":
                    // TODO: cambiar ruta cuando tenga la app subida a la playStore
                    window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
                    break;
                case "otherApps":
                    window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
                    break;
                case "shareApp":
                    window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function (errormsg) { alert("Error: Cannot Share") });
                    break;
            }
        }

        // Configuracion de la vibracion
        var config = sessionService.get("config");
        $scope.isVibration = config.isVibration;
        
        $scope.updateIsVibration = function () {
            var config = sessionService.get("config");
            
            config.isVibration = $scope.isVibration;
            sessionService.set("config", config);
        }
        // Fin Configuracion de la vibracion


        // Configuracion del lenguaje
        $scope.languagesList = [
            {title: "Español", code: "es"},
            {title: "English", code: "en"},
            {title: "Esperanto", code: "eo"}
        ]

        $scope.updateLanguage = function () {

            var config = sessionService.get("config");
            
            config.lenguage = getCodeLanguage($scope.selectLanguage);
            sessionService.set("config", config);
            $rootScope.$broadcast("changeLanguage", {})
        }

        function getCodeLanguage(title) {
            for(var i = 0; i < $scope.languagesList.length; i++)
                if($scope.languagesList[i].title == title)
                    return $scope.languagesList[i].code;
        }
        // Fin configuracion del lenguaje

        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [
                "menuCtrl_language",
                "menuCtrl_vibration",
                "menuCtrl_removeADS",
                "menuCtrl_moreGames"
            ]);
        }

        translate();
        // Fin Traduccion
    }])