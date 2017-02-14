appControllers.controller('menuCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams, $cordovaSocialSharing) {
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
                    window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function(errormsg){alert("Error: Cannot Share")});
                    break;
            }
        }
    }])