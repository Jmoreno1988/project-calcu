appControllers.controller('mainMenuCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', 'sessionService',
    function ($scope, $stateParams, $ionicSideMenuDelegate, sessionService) {
        $ionicSideMenuDelegate.canDragContent(false)


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
                        blocked: true
                    },
                    hard: {
                        score: 0,
                        maxScore: 0,
                        blocked: true
                    },
                    master: {
                        score: 0,
                        maxScore: 0,
                        blocked: true
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
    }])