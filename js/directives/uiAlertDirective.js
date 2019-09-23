angular.module("listaTelefonica").directive("uiAlert",function(){


return {
    templateUrl: "./view/alert.html",
    replace: true,  /// apenas substitui no html colocando apenas o template e nao mostra a tag da diretiva
    restrict: "AE",  /// restrita atributo e elementos
    scope: {
        // quando criado um escopo na diretiva, deixa de ter acesso ao escopo da página
        // faz isolamento do escopo da diretiva
        topic: "@title",  // @ recebe o valor do atibuto por parametro
        error: "=message" // = Igual faz a comunicacao com escopo de um controller externo

    },
    transclude:true
};

});