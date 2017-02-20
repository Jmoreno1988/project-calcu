appControllers.controller('canvasCtrl', ['$scope', '$stateParams', 'bridgeService', '$interval', '$state', 'sessionService',
    function ($scope, $stateParams, bridgeService, $interval, $state, sessionService) {
        
        var level = bridgeService.data.selectLevel;
        var game = new GameCal(level, $scope, $state, $interval, sessionService);

        game.init(); // lets rock!

        // Binding events
        $scope.checkResult = function(option) { game.checkResult(option) };
        $scope.reset = function() { game.reset() };
    }])