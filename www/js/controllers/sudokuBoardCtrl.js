appControllers.controller('sudokuBoardCtrl', ['$scope',
    function ($scope) {
        
        var mySudokuJS = $("#sudoku").sudokuJS({
            difficulty: "normal"
        });

        //mySudokuJS.solveAll();
        //console.log(mySudokuJS.getBoard())

        var listInputs = document.querySelectorAll("input")

        for(var i = 0; i < listInputs.length; i++){
            listInputs[i].setAttribute("readonly", "true");
            listInputs[i].addEventListener("click", listener.bind( null, i))
        }

        function listener(i) {
            listInputs[i].style.background = "red";
        } 
    }])