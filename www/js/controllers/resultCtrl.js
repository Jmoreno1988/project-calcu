appControllers.controller('resultCtrl', ['$scope', '$stateParams', 'sessionService',
        function ($scope, $stateParams, sessionService) {
                var listScores = sessionService.get("listScore");
                var totalScore = listScores.reduce(function(a, b) { return a + b; }, 0);
                var timeTotal = sessionService.get("timeCal");
                var level = sessionService.get("levelCal");
                var levelWin = sessionService.get("levelCalWin");                
                var isWin = level >= levelWin ? true : false;
                var msgResult = isWin ? "You win!!" : "You lose...";

                $scope.isWin = msgResult;
                $scope.level = level;
                $scope.levelWin = levelWin;
                $scope.timeTotal = timeTotal;
                $scope.totalScore = totalScore;

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