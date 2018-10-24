(function(ng) {
    'use strict';

    // Define the component and controller we loaded in our test
    ng.module('api.posts', [])
    .factory('Posts', ['$http', function($http) {
        let API = 'https://jsonplaceholder.typicode.com/posts';
        let Posts = {};
        // Spy on this method chained with callThrough() allows 
        // it to continue to continue to $http.get()
        Posts.findByName = function(id) {
            return $http.get(API + '/' + id)
                .then(function(res) {
                    return res.data;
                })
                .catch(function(res) {
                    return res.data;
                });
        };
        return Posts;
    }]);
})(angular);
