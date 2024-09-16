// Modelo
class Mascota {
    constructor(Nombre, especie, raza, Fecha, Genero, Peso, alergias, alergiascual, descripcion) {
        this.nombre = Nombre;
        this.especie = especie;
        this.raza = raza;
        this.Fecha = new Date(Fecha);
        this.genero = Genero;
        this.peso = Peso;
        this.alergias = alergias;
        this.alergiascual = alergiascual;
        this.descripcion = descripcion;
    }
}

// Vista
class vistaMascota {
    constructor() {
        this.form = document.getElementById("form");
        this.inputnombre = document.getElementById("Nombre");
        this.inputespecie = document.getElementById("especie");
        this.inputraza = document.getElementById("raza");
        this.inputfecha = document.getElementById("Fecha");
        this.inputgenero = document.getElementById("Genero");
        this.inputpeso = document.getElementById("Peso");
        this.inputalergias = document.getElementById("alergias");
        this.inputalergiascual = document.getElementById("alergiascual");
        this.inputdescripcion = document.getElementById("descripcion");

    }

    renderMostrarLista(mascota) {
        alert(`Nombre: ${mascota.nombre}`);
        console.log(this);
    }

}

// Controlador
class controladorMascota {
    constructor() {
        this.Mascotas = [];
        this.vista = new vistaMascota();
        this.vista.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const Nombre = this.vista.inputnombre.value;
        const especie = this.vista.inputespecie.value;
        const raza = this.vista.inputraza.value;
        const Fecha = this.vista.inputfecha.value;
        const Genero = this.vista.inputgenero.value;
        const Peso = this.vista.inputpeso.value;
        const alergias = this.vista.inputalergias.value;
        const alergiascual = this.vista.inputalergiascual.value;
        const descripcion = this.vista.inputdescripcion.value;

        const nuevaMascota = new Mascota(Nombre, especie, raza, Fecha, Genero, Peso, alergias, alergiascual, descripcion);
        this.Mascotas.push(nuevaMascota);

        this.vista.renderMostrarLista(nuevaMascota);
        
    }
}

// Inicialización
const ControladorMascota = new controladorMascota();


