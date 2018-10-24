(function(ng) {
    'use strict';
    /**
     * Creating the module and factory we referenced in the 
     * beforeEach blocks in our test file
     * @param {Object} $http
     * @return {Object}
     */
    ng.module('api.users', [])
        .factory('Users', ['$http', function($http) {
            let API = 'https://newsapi.org/v2/everything?q=apple&apiKey=a8f3327219544586b380884a76992991';
            let Users = {};

            /**
             * Returning the array of users.
             * Eventually this will be an API call.
             * @return {array}
             */
            Users.all = function() {
                return $http.get(API)
                    .then(function(res) {
                        return res.data;
                    })
                    .catch(function(res) {
                        return res.data;
                    });
            };

            /**
             * Returning a single user object as our test expects it to
             * @param {number} id 
             * @return {object}
             */
            Users.findById = function(id) {
                return $http.get(API + '/' + id)
                    .then(function(res) {
                        return res.data;
                    })
                    .catch(function(res) {
                        return res.data;
                    });
            };

            return Users;
        }]);
})(angular);