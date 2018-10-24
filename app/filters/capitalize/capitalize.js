(function(ng) {
    'use strict';

    // Define the component and filter we loaded in our test
    ng.module('filters.capitalize', [])
    .filter('capitalize', [function() {
        return function(word) {
            let final = null;
            if (word) {
                final = word.charAt(0).toUpperCase() + word.substring(1);
            } else {
                final = '';
            }
            return final;
        };
    }]);
})(angular);
