// Modelo
class inicioSesion {
    constructor(correo, contraseña) {
        this.correo = correo;
        this.contraseña = contraseña;
    }
}

//Vista
class vistainicioSesion {
    constructor() {
        this.form = document.getElementById('form');
        this.inputcorreo = document.getElementById('correo');
        this.inputcontraseña = document.getElementById('contraseña');
    }

    renderMostrarLista(inicioSesion) {
        alert(`Correo: ${inicioSesion.correo},`);
    }
}

//Controlador
class controladorinicioSesion {
    constructor() {
        this.inicioSesiones = [];
        this.vista = new vistainicioSesion();
        this.vista.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const correo = this.vista.inputcorreo.value;
        const contraseña = this.vista.inputcontraseña.value;

        const nuevoinicioSesion = new inicioSesion(correo, contraseña);
        this.inicioSesiones.push(nuevoinicioSesion);

        this.vista.renderMostrarLista(nuevoinicioSesion);
        this.vista.form.reset();
    }   

}

// Inicialización
const ControladorinicioSesion = new controladorinicioSesion();