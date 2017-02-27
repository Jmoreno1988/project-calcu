appControllers.controller('menuRecordsCalCtrl', ['$scope', '$stateParams', '$http',
    function ($scope, $stateParams, $http, $cordovaSocialSharing) {
        $scope.options = {
            loop: false,
            effect: 'fade',
            speed: 500,
        }

        $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            // data.slider is the instance of Swiper
            $scope.slider = data.slider;
        });

        $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
            console.log('Slide change is beginning');
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
            // note: the indexes are 0-based
            $scope.activeIndex = data.slider.activeIndex;
            $scope.previousIndex = data.slider.previousIndex;
        });

        var trophyRoom = new TrophyRoom();

        var id = 0;
        var scores = getScores(id)
        //$scope.listRecords = [{nick: "pepe"}, {nick: "sergio"}];
        function getScores(id) {
            $http({
                method: 'GET',
                url: cfg.urlServer + 'getscore'
            }).then(function successCallback(response) {
                //trophyRoom.setRecords(response.data);
                $scope.listRecords = response.data;
            }, function errorCallback(response) {
                console.log("Error:")
                console.log(response)
            });
        }
        
    }])