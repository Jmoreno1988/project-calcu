appControllers.controller('mainMenuCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', 'sessionService', '$http', '$ionicPopup', '$state',
    function ($scope, $stateParams, $ionicSideMenuDelegate, sessionService, $http, $ionicPopup, $state) {
       // $ionicSideMenuDelegate.canDragContent(false);

       if(cfg.resetLocalStorage) 
            sessionService.clear();
       

        if(!sessionService.exist("isLocalStorage")) {
            console.log("Reinicio localStorage")
            sessionService.set("isLocalStorage", true);
            sessionService.set("progressMathCalcu", cfg.modelObjectLocalStorage.progress.mathCalcu);
            sessionService.set("config", cfg.config);
        }

        //console.log("Existe localStorage = " + sessionService.exist("isLocalStorage"))
        //console.log(sessionService.get("progressMathCalcu"))

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

        $scope.goTo = function(page) {
            switch(page) {
                case 'menuRecordsCal':
                    $state.go(page);
                    break;
            }
        }

        /*
        $scope.getScores = function () {
            console.log("Pidiendo las clasificaciones...")
            $http({
                method: 'GET',
                //url: 'http://46.101.187.32:3000/getscore'
                url: cfg.urlServer + 'getscore'
            }).then(function successCallback(response) {
                console.log("Respuesta recibida:")
                console.log(response.data)
            }, function errorCallback(response) {
                console.log("Error:")
                console.log(response)
            });
        }
        */
        $scope.showPopup = function () {
            var confirmPopup = $ionicPopup.alert({
                title: 'Work in progress',
                template: 'Estara listo en la versión final del juego ;)'
            });
        }
    }])