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
        // var config = sessionService.get("config").lenguage;
        //$scope.lenguage = config.lenguage;

        $scope.languagesList = [
            {title: "es", code: "es"},
            {title: "en", code: "en"},
            {title: "eo", code: "eo"},
        ]

        $scope.updateLanguage = function () {
            console.log($scope.selectLanguage)

            var config = sessionService.get("config");
            
            config.lenguage = $scope.selectLanguage;
            sessionService.set("config", config);
            $rootScope.$broadcast("changeLanguage", {})
        }
        // Fin configuracion del lenguaje
    }])