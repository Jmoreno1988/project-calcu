appControllers.controller('canvasCtrl', ['$scope', '$stateParams', 'bridgeService', '$interval', '$state',
    function ($scope, $stateParams, bridgeService, $interval, $state) {
        
        var level = bridgeService.data.selectLevel;
        var game = new GameCal(level, $scope, $state, $interval);

        game.init(); // lets rock!

        // Binding events
        $scope.checkResult = function(option) { game.checkResult(option) };
        $scope.reset = function() { game.reset() };
    }])