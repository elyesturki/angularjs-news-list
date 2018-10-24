(function() {
    'use strict';

    angular.module('angularApp', [
            'ui.router',
            'api.users',
            'components.users',
            'filters.capitalize',
        ])
        .config(['$urlRouterProvider', '$qProvider',
            function($urlRouterProvider) {
                $urlRouterProvider.otherwise('/users');
            }
        ]);
})();