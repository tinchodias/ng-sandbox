tareasListApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('agregarTarea', {
      url: "/",
      templateUrl: "partials/agregar_tarea.html",
      controller: "AgregarTareaController as tareasCtrl"
    })

    .state('editarTarea', {
      url: "/tarea/:id",
      templateUrl: "partials/editar_tarea.html",
      controller: "EditarTareaController as editarCtrl"
    });

  $locationProvider.html5Mode(true)//.hashPrefix('!')
});