angular.module('listaTelefonica').controller("listaTelefonicaCtlr",function($scope, contatos, operadoras){

    $scope.message = "Lista Telefonica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;
    

    // var carregarContatos = function(){
    //     contatosAPI.getContatos().then(function(response){
    //     $scope.contatos = response.data;
    // }).catch(function(response){
    //     $scope.error = "Erro ao carregar contatos: " + response.data;
    // });
    // };
    
    // var carregarOperadoras = function(){
    //     operadorasAPI.getOperadoras().then(function(response){
    //     $scope.operadoras = response.data;
    // }).catch(function(response){
    //     $scope.error = "Erro ao carregar operadoras: " + response.data;
    // });
    // };


//     $scope.adicionarContato = function(contato){
//         //$scope.contatos.push(contato); 
//         contatosAPI.saveContato(contato).then(function(response){   
//             delete $scope.contato;
//             $scope.contatoForm.$setPristine();
//             carregarContatos();                
//         }).catch(function(response){
//         $scope.error = "Erro ao adicionar contato: " + response.data;
//    });
        
//     };

    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
        console.log(isContatoSelecionado);
    };

    $scope.isOrdenacao = function(campo){
        $scope.criterioOrdenacao = campo;   
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };    

    
});