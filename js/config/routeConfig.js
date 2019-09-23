angular.module("listaTelefonica").config(function($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtlr"
        ,
		resolve: {
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			},
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
        controller: "novoContatoCtlr",
		resolve: {
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				console.log($route.current.params.id);
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/error", {
		templateUrl: "view/error.html",
	});

	$routeProvider.otherwise({redirectTo: "/contatos"});
});