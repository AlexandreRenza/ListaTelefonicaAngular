angular.module('listaTelefonica').factory("errorInterceptor", function($q, $location){

    return{

        responseError: function(rejection){
            console.log(rejection.status);
            if (rejection.status === 404){
                location.path('/error');
            }
            return $q.reject(rejection);
        }

    };

});