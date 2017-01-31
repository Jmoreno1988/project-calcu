var appControllers = angular.module('app.controllers', [])

    .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
/*
    .controller('canvasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {
            this.game = new Game();
            this.game.generateMove();

            $scope.score = this.game.getScore();
            $scope.num1 = this.game.getNum1();
            $scope.num2 = this.game.getNum2();
            $scope.operation = this.game.getOperation();
            $scope.option1 = this.game.getOptions()[0];
            $scope.option2 = this.game.getOptions()[1];
            $scope.option3 = this.game.getOptions()[2];
            $scope.option4 = this.game.getOptions()[3];

            $scope.checkResult = function (option) {
                if (this.game.getOptions()[option - 1] === this.game.getResult()) {
                    this.game.setScore(this.game.getScore() + 1);
                    this.game.newRound();
                    this.game.generateMove();

                    $scope.score = this.game.getScore();
                    $scope.num1 = this.game.getNum1();
                    $scope.num2 = this.game.getNum2();
                    $scope.operation = this.game.getOperation();
                    $scope.option1 = this.game.getOptions()[0];
                    $scope.option2 = this.game.getOptions()[1];
                    $scope.option3 = this.game.getOptions()[2];
                    $scope.option4 = this.game.getOptions()[3];
                }

            }.bind(this)

            $scope.reset = function (option) {
                this.game.setScore(0);
                this.game.newRound();
                this.game.generateMove();

                $scope.score = this.game.getScore();
                $scope.num1 = this.game.getNum1();
                $scope.num2 = this.game.getNum2();
                $scope.operation = this.game.getOperation();
                $scope.option1 = this.game.getOptions()[0];
                $scope.option2 = this.game.getOptions()[1];
                $scope.option3 = this.game.getOptions()[2];
                $scope.option4 = this.game.getOptions()[3];
            }.bind(this)

        }])
        */
/*
    .controller('selectLevelCtrl', ['$scope', '$stateParams', 'sessionService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, sessionService) {
            console.log(sessionService.get("test"));
        }])
*/
    .controller('countdownCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('resultCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])