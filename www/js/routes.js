angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      .state('tabsController', {
        url: '/page9999',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('selectLevel', {
        url: '/pageSelectLevel',
        templateUrl: 'templates/selectLevel.html',
        controller: 'selectLevelCtrl'
      })

      .state('canvas', {
        url: '/page2',
        templateUrl: 'templates/canvas.html',
        controller: 'canvasCtrl'
      })

      .state('countdown', {
        url: '/page3',
        templateUrl: 'templates/countdown.html',
        controller: 'countdownCtrl'
      })

      .state('result', {
        url: '/page4',
        templateUrl: 'templates/result.html',
        controller: 'resultCtrl'
      })

      .state('settings', {
        url: '/page13',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      })

      .state('mainMenu', {
        url: '/page1',
        templateUrl: 'templates/mainMenu.html',
        controller: 'mainMenuCtrl'
      })

      .state('menuRecordsCal', {
        url: '/pageRecords',
        templateUrl: 'templates/menuRecordsCal.html',
        controller: 'menuRecordsCalCtrl'
      })

    $urlRouterProvider.otherwise('/page1')



  });