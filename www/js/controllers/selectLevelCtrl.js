appControllers.controller('selectLevelCtrl', ['$scope', '$stateParams', 'sessionService',
    function ($scope, $stateParams, sessionService) {
        console.log(sessionService.get("test"));
    }])