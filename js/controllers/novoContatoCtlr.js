angular.module('listaTelefonica').controller("novoContatoCtlr",function($scope, contatosAPI, $location, operadoras){

    $scope.message = "Lista Telefonica";

    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function(contato){
        //$scope.contatos.push(contato); 
        contatosAPI.saveContato(contato).then(function(response){   
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");              
        }).catch(function(response){
        $scope.error = "Erro ao adicionar contato: " + response.data;
       });
        
    };    

});