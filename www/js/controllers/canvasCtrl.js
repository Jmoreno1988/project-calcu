appControllers.controller('canvasCtrl', ['$scope', '$stateParams', 'bridgeService', '$timeout', '$state',
    function ($scope, $stateParams, bridgeService, $timeout, $state) {
        var level = bridgeService.data.selectLevel;

        this.game = new Game(level);
        this.game.generateMove();

        pullInfo(this.game);

        $scope.checkResult = function (option) {
            if (this.game.getOptions()[option - 1] === this.game.getResult()) {
                countdown.add(5000);
                this.game.setScore(this.game.getScore() + 1);
                this.game.newRound();
                this.game.generateMove();

                pullInfo(this.game);
            } else {
                countdown.add(-3000);
                this.game.setScore(this.game.getScore() + 1);
                this.game.newRound();
                this.game.generateMove();

                pullInfo(this.game);
            }

        }.bind(this)

        var isActiveController = true;
        var countdown = new Countdown(60000);
        countdown.init();
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

        $scope.reset = function (option) {
            this.game.setScore(0);
            this.game.newRound();
            this.game.generateMove();
            countdown.reset();


            pullInfo(this.game);
            //var promise = $timeout(timerUp, 100);
        }.bind(this);

        function pullInfo(game) {
            $scope.score = game.getScore();
            $scope.num1 = game.getNum1();
            $scope.num2 = game.getNum2();
            $scope.operation = game.getOperation();
            $scope.option1 = game.getOptions()[0];
            $scope.option2 = game.getOptions()[1];
            $scope.option3 = game.getOptions()[2];
            $scope.option4 = game.getOptions()[3];
        }
    }])