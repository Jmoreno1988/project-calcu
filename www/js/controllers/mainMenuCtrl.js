appControllers.controller('mainMenuCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', 'sessionService', '$http',
    function ($scope, $stateParams, $ionicSideMenuDelegate, sessionService, $http) {
       // $ionicSideMenuDelegate.canDragContent(false);


        var isLocalStorage = sessionService.get("isLocalStorage");

        if (!isLocalStorage) {
            var isLocalStorage = true;

            var progress = {
                mathCalcu: {
                    easy: {
                        score: 0,
                        maxScore: 0,
                        blocked: false
                    },
                    normal: {
                        score: 0,
                        maxScore: 0,
                        blocked: false
                    },
                    hard: {
                        score: 0,
                        maxScore: 0,
                        blocked: false
                    },
                    master: {
                        score: 0,
                        maxScore: 0,
                        blocked: false
                    },
                    kids: {
                        score: 0,
                        maxScore: 0,
                        blocked: false
                    },
                    survival: {
                        score: 0,
                        maxScore: 0,
                        blocked: false
                    }
                }
            }

            var config = {
                isSound: false,
                isEvaluate: false,
                lenguage: "en"
            }

            sessionService.set("isLocalStorage", isLocalStorage);
            sessionService.set("progress", progress);
            sessionService.set("config", config);
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

        $scope.getScores = function () {
            console.log("Pidiendo las clasificaciones...")
            $http({
                method: 'GET',
                url: 'http://46.101.187.32:3000/getscore'
            }).then(function successCallback(response) {
                console.log("Respuesta recibida:")
                console.log(response.data)
            }, function errorCallback(response) {
                console.log("Error:")
                console.log(response)
            });
        }
        /*
                $scope.test = function (dir) {
                    console.log(123123123)
                    // More games
                    //window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
        
                    // Remove ADS
        
                    // Evaluate app 
                }
                */
    }])