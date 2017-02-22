appControllers.controller('resultCtrl', ['$scope', '$stateParams', 'bridgeService',
        function ($scope, $stateParams, bridgeService) {
                var listScores = bridgeService.data.listScore;
                var totalScore = listScores.reduce(function(a, b) { return a + b; }, 0);
                var timeTotal = bridgeService.data.timeCal;
                var level = bridgeService.data.levelCal;
                var selectLevel = bridgeService.data.selectLevel;
                var levelWin = bridgeService.data.levelCalWin;                
                var isWin = level >= levelWin ? true : false;
                var msgResult = isWin ? "You win!!" : "You lose";

                $scope.isWin = msgResult;
                $scope.level = level;
                $scope.levelWin = levelWin;
                $scope.timeTotal = timeTotal;
                $scope.totalScore = totalScore;
                $scope.selectLevel = selectLevel;

                // Graficos
                var points = [];
                for(var i = 0; i < listScores.length; i++)
                        points.push([i, listScores[i]]);

                points.unshift(["", 'Puntuación de la partida']);

                google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                        var data = google.visualization.arrayToDataTable(points);

                        var options = {
                                title: 'Rendimiento',
                                curveType: 'function',
                                legend: { position: 'bottom' }
                        };

                        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                        chart.draw(data, options);
                }
        }])