tareasListApp.config(function ($stateProvider, $urlRouterProvider) {

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
    })

});