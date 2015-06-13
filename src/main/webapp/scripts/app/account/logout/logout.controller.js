'use strict';

angular.module('mihealthApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
