'use strict';

console.log("punto 1")

/* Controllers */
var tareasListApp = angular.module('tareasListApp', ['ui.router']);

console.log("punto 2")

tareasListApp.controller('AgregarTareaController', function (TareasService) {

  this.descripcionTarea = '';
  this.tareas = TareasService.tareas;

  this.agregarTarea = function () {
    var tarea = TareasService.crearTarea(this.descripcionTarea);
    TareasService.agregarTarea(tarea);
    this.descripcionTarea = '';
  };

});

console.log("punto 3")

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

  
  console.log("punto 4")

  
