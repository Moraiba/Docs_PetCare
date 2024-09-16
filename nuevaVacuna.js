//Modelo
class Vacuna {
    constructor(nombre, fecha, dosis, descripcion, veterinaria, notas) {
        this.nombre = nombre;
        this.fecha = new Date(fecha);
        this.dosis = dosis;
        this.descripcion = descripcion;
        this.veterinaria = veterinaria;
        this.notas = notas;
        this.archivo = archivo;
    }
}

// Vista
class vistaVacuna{
    constructor() {
        this.form = document.getElementById("vacunaform");
        this.inputnombre = document.getElementById("nombre");
        this.inputfecha = document.getElementById("fecha");
        this.inputdosis = document.getElementById("dosis");
        this.inputdescripcion = document.getElementById("descripcion");
        this.inputveterinaria = document.getElementById("veterinaria");
        this.inputnotas = document.getElementById("notas");
        this.inputarchivo = document.getElementById("archivo");
    }

    renderListaVacuna(Vacuna){
        alert(`Tipo de Vacuna: ${Vacuna.descripcion}`);
    }
}

//controlador
class controladorVacuna {
    constructor() {
        this.Vacunas = [];
        this.vista = new vistaVacuna();
        this.vista.form.addEventListener("submit", this.HandleFormSubmit.bind(this));
    }

    HandleFormSubmit(event){
        event.preventDefault();
        const nombre = this.vista.inputnombre.value;
        const fecha = this.vista.inputfecha.value;
        const dosis = this.vista.inputdosis.value;
        const descripcion = this.vista.inputdescripcion.value;
        const veterinaria = this.vista.inputveterinaria.value;
        const notas = this.vista.inputnotas.value;
        const archivo = this.vista.inputarchivo.files[0]; // Aquí se guarda el archivo en el objeto vacuna.archivo

        const nuevaVacuna = new Vacuna(nombre, fecha, dosis, descripcion, veterinaria, notas, archivo);
        this.Vacunas.push(nuevaVacuna);

        this.vista.renderListaVacuna(nuevaVacuna);
        this.vista.form.reset();
        
    }
}

const ControladorVacuna = new controladorVacuna();