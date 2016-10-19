tareasListApp.service("TareasService", function () {

  this.tareasIds = 0;
  this.tareas = [];

  this.crearTarea = function (description) {
    var tarea = new Tarea(description);
    tarea.id = this.tareasIds++;
    return tarea;
  };

  this.agregarTarea = function (tarea) {
    this.tareas.push(tarea);
  };

  this.getTareaById = function (id) {
    return this.tareas.find(function (tarea) {
      return tarea.id == id;
    })
  };

});