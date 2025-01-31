angular.module("listaTelefonica").factory("loadingInterceptor", function($q, $rootScope, $timeout){

    return{
        request: function(config){
            $rootScope.loading = true;
            return config;
        },
        requestError: function(rejection){
            $rootScope.loading = false;
            return $q.reject(rejection);
        },
        response: function(response){
            $timeout(function(){
                $rootScope.loading = false;
            },2000);
            
            return response;
        },
        resonseError: function(rejection){
            $rootScope.loading = false;
            return $q.reject(rejection);
        }




    };




});