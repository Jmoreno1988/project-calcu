appControllers.controller('resultCtrl', ['$scope', '$stateParams', 'sessionService',
        function ($scope, $stateParams, sessionService) {
                var listScores = sessionService.get("listScore");
                
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