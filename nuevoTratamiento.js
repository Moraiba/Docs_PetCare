//Modelo
class tratamiento{
    constructor(tipoTratamiento, nombre, fecha, duracion, veterinaria, dosis){
        this.tipoTratamiento = tipoTratamiento;
        this.nombre = nombre;
        this.fecha = new Date (fecha);
        this.duracion = duracion;
        this.veterinaria = veterinaria;
        this.dosis = dosis;
    }
}

//Vista
class vistaTratamiento {
    constructor(){
        this.form = document.getElementById("form");
        this.inputTipoTratamiento = document.getElementById("tipoTratamiento");
        this.inputNombre = document.getElementById("nombre");
        this.inputFecha = document.getElementById("fecha");
        this.inputDuracion = document.getElementById("duracion");
        this.inputVeterinaria = document.getElementById("veterinaria");
        this.inputDosis = document.getElementById("dosis");
        this.inputDescripcion = document.getElementById("descripcion");
    }

    renderMostrarLista(tratamiento){ 
        alert(`Tipo: ${tratamiento.tipoTratamiento}`); 
        console.log(this);
    }
}

//Controlador
class controladorTratamiento {
    constructor (){
        this.tratamiento = [];
        this.vista = new vistaTratamiento();
        this.vista.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const tipoTratamiento = this.vista.inputTipoTratamiento.value;
        const nombre = this.vista.inputNombre.value;
        const fecha = this.vista.inputFecha.value;
        const duracion = this.vista.inputDuracion.value;
        const veterinaria = this.vista.inputVeterinaria.value;
        const dosis = this.vista.inputDosis.value;
        const descripcion = this.vista.inputDescripcion.value;

        const nuevoTratamiento = new tratamiento(tipoTratamiento, nombre, fecha, duracion, veterinaria, dosis);
        this.tratamiento.push(nuevoTratamiento);

        this.vista.renderMostrarLista(nuevoTratamiento)

    }
}
//inicializacion
const ControladorTratamiento = new controladorTratamiento();