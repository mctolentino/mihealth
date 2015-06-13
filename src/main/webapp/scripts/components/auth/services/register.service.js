'use strict';

angular.module('mihealthApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


