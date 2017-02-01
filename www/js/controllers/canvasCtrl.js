appControllers.controller('canvasCtrl', ['$scope', '$stateParams', 'bridgeService', '$interval', '$state',
    function ($scope, $stateParams, bridgeService, $interval, $state) {
        
        var level = bridgeService.data.selectLevel;
        var game = new GameCal(level, $scope, $interval, $state);

        game.init(); // lets rock!

        // Binding events
        $scope.checkResult = function(option) { game.checkResult(option) };
        $scope.reset = function() { game.reset() };

    /*
        var isActiveController = true;

/*
        var timerUp = function () {
            if (isActiveController && countdown.isActive) {
                countdown.update();
                $scope.time = countdown.getRest();
                $timeout(timerUp, 100);
            } else {
                // Lanzamos otra pagina de results
                $state.go("result", {});
            }
        }

        var promise = $timeout(timerUp, 100);

        $scope.$on('$destroy', function () {
            isActiveController = false;
            $timeout.cancel(promise);
        });

        
*/
    }])