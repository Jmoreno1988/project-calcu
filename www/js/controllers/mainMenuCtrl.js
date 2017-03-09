appControllers.controller('mainMenuCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', 'sessionService', '$http', '$ionicPopup', '$state', '$cordovaSocialSharing', '$ionicModal',
    function ($scope, $stateParams, $ionicSideMenuDelegate, sessionService, $http, $ionicPopup, $state, $cordovaSocialSharing, $ionicModal) {
        // $ionicSideMenuDelegate.canDragContent(false);

        if (cfg.resetLocalStorage)
            sessionService.clear();


        if (!sessionService.exist("isLocalStorage")) {
            console.log("Reinicio localStorage")
            sessionService.set("isLocalStorage", true);
            sessionService.set("progressMathCalcu", cfg.modelObjectLocalStorage.progress.mathCalcu);
            sessionService.set("config", cfg.modelObjectLocalStorage.config);
        }

        //console.log("Existe localStorage = " + sessionService.exist("isLocalStorage"))
        //console.log(sessionService.get("progressMathCalcu"))

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

        $scope.goTo = function (page) {
            switch (page) {
                case 'menuRecordsCal':
                    $state.go(page);
                    break;
            }
        }

        $scope.showValorateModal = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Queremos tu opinion',
                template: 'Hemos desarrollado este juego con todo nuestro cariño para ti, por eso nos gustaria saber tu opinion.',
                cancelText: 'Quizas mas tarde',
                okText: 'Dar opinion'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    window.open('https://play.google.com/store/apps/developer?id=JMoreno', '_system');
                } else {
                }
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

        $scope.showPopup = function () {
            var confirmPopup = $ionicPopup.alert({
                title: 'Work in progress',
                template: 'Estara listo en la versión final del juego ;)'
            });
        }


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