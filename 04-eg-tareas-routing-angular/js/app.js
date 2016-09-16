'use strict';

/* Controllers */
var tareasListApp = angular.module('tareasListApp', ['ui.router']);

tareasListApp.controller('AgregarTareaController', function (TareasService) {

  this.descripcionTarea = '';
  this.tareas = TareasService.tareas;

  this.agregarTarea = function () {
    var tarea = TareasService.crearTarea(this.descripcionTarea);
    TareasService.agregarTarea(tarea);
    this.descripcionTarea = '';
  };

});


tareasListApp.controller('EditarTareaController', function ($stateParams, $state, TareasService) {

  this.tarea = TareasService.getTareaById($stateParams.id);

  if (!this.tarea) {
    $state.go("agregarTarea");
    return;
  }

  this.descripcionTarea = this.tarea.descripcion;

  this.aceptar = function () {
    this.tarea.descripcion = this.descripcionTarea;
    $state.go("agregarTarea");
  };

});

  
  
