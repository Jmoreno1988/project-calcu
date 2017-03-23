appControllers.controller('mainMenuCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', 'sessionService', '$http', '$ionicPopup', '$state', '$cordovaSocialSharing', '$ionicModal',
    function ($scope, $stateParams, $ionicSideMenuDelegate, sessionService, $http, $ionicPopup, $state, $cordovaSocialSharing, $ionicModal) {
        // $ionicSideMenuDelegate.canDragContent(false);
        
        if (cfg.resetLocalStorage)
            sessionService.clear();

        if (!sessionService.exist("isLocalStorage")) {
            console.log("Reinicio localStorage");
            sessionService.set("isLocalStorage", true);
            sessionService.set("progressMathCalcu", cfg.modelObjectLocalStorage.progress.mathCalcu);
            sessionService.set("config", cfg.modelObjectLocalStorage.config);
            sessionService.set("infoUser", cfg.modelObjectLocalStorage.infoUser);
        }

        $scope.openListGames = function() {
            document.getElementById("buttonShare").classList.toggle("buttonShareSecondPosition");
            document.getElementById("buttonEvaluate").classList.toggle("buttonEvaluateSecondPosition");
            document.getElementById("buttonSudoku").classList.toggle("buttonSudokuSecondPosition");
            document.getElementById("buttonCalculator").classList.toggle("buttonCalculatorSecondPosition");
            document.getElementById("buttonChess").classList.toggle("buttonChessSecondPosition");
            document.getElementById("buttonPlay").classList.toggle("buttonPlaySecondPosition");
            document.getElementById("buttonClose").classList.toggle("buttonCloseSecondPosition");
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

        $scope.goTo = function (page) {
            switch (page) {
                case 'menuRecordsCal':
                    $state.go(page);
                    break;
                case 'sudokuBoard': 
                    $state.go(page);
                    break;
            }
        }

        $scope.showValorateModal = function () {
            var l = sessionService.get("config").lenguage;
            var d = dictionary; 
            var confirmPopup = $ionicPopup.confirm({
                title: Translator.get("mainMenuCtrl_titleOpinion", l, d),
                template: Translator.get("mainMenuCtrl_msgOpinion", l, d),
                cancelText: Translator.get("mainMenuCtrl_cancel", l, d),
                okText: Translator.get("mainMenuCtrl_accept", l, d)
            });

            confirmPopup.then(function (res) {
                if (res) {
                    window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
                } else { }
            });
        };

        $scope.shareViaTwitter = function (message, image, link) {
            //$cordovaSocialSharing.shareViaTwitter("Check out this cool app I'm using called IonicProject for ");
            $cordovaSocialSharing.shareViaEmail(
                'Message', // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
                'Subject',
                ['to@person1.com', 'to@person2.com'], // TO: must be null or an array
                ['cc@person1.com'], // CC: must be null or an array
                null, // BCC: must be null or an array
                ['https://www.google.nl/images/srpr/logo4w.png', 'www/localimage.png'], // FILES: can be null, a string, or an array
                function () { console.log('si') }, // called when sharing worked, but also when the user cancelled sharing via email. On iOS, the callbacks' boolean result parameter is true when sharing worked, false if cancelled. On Android, this parameter is always true so it can't be used). See section "Notes about the successCallback" below.
                function () { console.log('nop') } // called when sh*t hits the fan
            );
            //$cordovaSocialSharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function(errormsg){alert("Error: Cannot Share")});
        }
/*
        $scope.showPopup = function () {
            var confirmPopup = $ionicPopup.alert({
                title: 'Work in progress',
                template: 'Estara listo en la versión final del juego ;)'
            });
        }
*/

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

        $scope.showConfirmResetProfile = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Borrar perfil',
                template: '¿Esta seguro de querer borrar su perfil y toda la información asociada a el?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('Borrar perfil...');
                } else {
                    console.log('Todavia no, dame un turno mas...');
                }
            });
        };

        // Comprobar si existe usuario
        var infoUser = sessionService.get("infoUser");

        if(!infoUser.id){
            console.log("WARNING :: No existe usuario registrado en la app.");
            var node = document.getElementById("imgAccount");
            node.src = "img/account-alert.svg";
        }

        $scope.validateInfo = function() {
            var email = document.getElementById("inputEmailUser").value;
            var nick = document.getElementById("inputNickUser").value;
/*
            if(!Util.validateNick(nick)) {
                console.log("Nick invalido, por favor ingrese un nick con un formato valido.")
                return;
            }

            if(!Util.validateEmail(email)) {
                console.log("Email invalido, por favor ingrese un email con un formato valido.")
                return;
            }
*/
            // Mandar info al server
            var url = cfg.urlServer + 'insertnewuser?nick=' + nick;
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                var infoUser = sessionService.get("infoUser");
                infoUser.id = response.data.id;
                infoUser.nick = response.data.nick;

                sessionService.set("infoUser", infoUser);

                console.log(sessionService.get("infoUser"));

            }.bind(this), function errorCallback(response) {
                console.log("Error:")
                console.log(response)
            });
        }


        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [
                "mainMenuCtrl_play",
                "mainMenuCtrl_userProfile",
                "mainMenuCtrl_editAccount",
                "mainMenuCtrl_nickName",
                "mainMenuCtrl_email",
                "mainMenuCtrl_save",
                "mainMenuCtrl_reset"
            ]);
        }

        translate();
        // Fin Traduccion
    }])