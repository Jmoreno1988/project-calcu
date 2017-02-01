appControllers.controller('mainMenuCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', 'sessionService',
    function ($scope, $stateParams, $ionicSideMenuDelegate, sessionService) {
        $ionicSideMenuDelegate.canDragContent(false);


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

        $scope.goTo = function (dir) {
            console.log(321212)
            switch (dir) {
                case "otherApps":
                    window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
                    break;
            }
        }
    }])