// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.device', {
        url: "/device",
        views: {
            'menuContent': {
                templateUrl: "templates/device.html",
                controller: 'DeviceCtrl'
            }
        }
    })
    .state('app.battery', {
        url: "/battery",
        views: {
            'menuContent': {
                templateUrl: "templates/battery.html",
                controller: 'BatteryCtrl'
            }
        }
    })
    .state('app.camera', {
        url: "/camera",
        views: {
            'menuContent': {
                templateUrl: "templates/camera.html",
                controller: 'CameraCtrl'
            }
        }
    })
    .state('app.motion', {
        url: "/motion",
        views: {
            'menuContent': {
                templateUrl: "templates/motion.html",
                controller: 'MotionCtrl'
            }
        }
    })
    .state('app.notifications', {
        url: "/notifications",
        views: {
            'menuContent': {
                templateUrl: "templates/notification.html",
                controller: 'NotificationsCtrl'
            }
        }
    })
    .state('app.network', {
        url: "/network",
        views: {
            'menuContent': {
                templateUrl: "templates/network.html",
                controller: 'NetworkCtrl'
            }
        }
    })
    .state('app.pin', {
        url: "/pin",
        views: {
            'menuContent': {
                templateUrl: "templates/pin.html",
                controller: 'PinCtrl'
            }
        }
    })
    .state('app.share', {
        url: "/share",
        views: {
            'menuContent': {
                templateUrl: "templates/share.html",
                controller: 'ShareCtrl'
            }
        }
    })
    .state('app.sqlite', {
        url: "/sqlite",
        views: {
            'menuContent': {
                templateUrl: "templates/sqlite.html",
                controller: 'SqliteCtrl'
            }
        }
    })
    .state('app.toast', {
        url: "/toast",
        views: {
            'menuContent': {
                templateUrl: "templates/toast.html",
                controller: 'ToastCtrl'
            }
        }
    })
    .state('app.vibrate', {
        url: "/vibrate",
        views: {
            'menuContent': {
                templateUrl: "templates/vibrate.html",
                controller: 'VibrateCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/device');
});
