(function() {
    'use strict';

    angular.module('components.users', [])
        .controller('UsersController', ['Users', '$scope', function(Users, $scope) {

            var vm = this;
            Users.all().then(function(result) {

                if (result.articles) {
                    console.log("res OK");
                    //Stockage
                    var monobjet_json = JSON.stringify(result.articles);
                    sessionStorage.setItem("articles", monobjet_json);
                    vm.articles = result.articles;
                } else {
                    console.log("res NOTOK");
                    //lecture
                    var monobjet_json = sessionStorage.getItem("articles");
                    var monobjet = JSON.parse(monobjet_json);
                    // Affichage dans la console
                    vm.articles = monobjet;
                }

                // vm.articles = result.articles;
                console.log("vm.articles: ", vm.articles)
                for (var i = 0; i < vm.articles.length; i++) {
                    vm.articles[i].date = vm.articles[i].publishedAt.split('T')[0];
                    vm.articles[i].heure = vm.articles[i].publishedAt.split('T')[1].slice(0, -4);
                }
                vm.filter = {};
                vm.articles = vm.articles;
                vm.filterByCategory = filterByCategory;
                vm.getCategories = getCategories;

                function filterByCategory(article) {
                    return vm.filter[article.source.name] || noFilter(vm.filter);
                }

                function getCategories() {
                    return (vm.articles || []).
                    map(function(article) { return article.source.name; }).
                    filter(function(cat, idx, arr) { return arr.indexOf(cat) === idx; });
                }

                function noFilter(filterObj) {
                    return Object.
                    keys(filterObj).
                    every(function(key) { return !filterObj[key]; });
                }

                console.log("getCategories: ", getCategories())
            });
        }])
        .config(function($stateProvider) {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'components/users/users.html',
                    controller: 'UsersController as uc'
                });
        });
})()