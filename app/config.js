angular.module('Social')
.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'app/templates/login.html'
        })
        .when('/register',{
            templateUrl: 'app/templates/register.html'
        })
        .when('/userPage',{
            templateUrl: 'app/templates/usersPage.html'
        })
        .otherwise({
            template: '<h1 style="text-align: center">404</h1>'
        });
});