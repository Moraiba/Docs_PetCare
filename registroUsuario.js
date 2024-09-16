// Modelo
class Usuario {
    constructor(Nombre, Telefono, Correo, Contraseña) {
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Contraseña = Contraseña;
    }
}

// Vista
class VistaUsuario {
    constructor() {
        this.form = document.getElementById('UsuarioForm');
        this.InputNombre = document.getElementById('Nombre');
        this.InputTelefono = document.getElementById('Telefono');
        this.InputCorreo = document.getElementById('Correo');
        this.InputContraseña = document.getElementById('Contraseña');
    }

    RenderListaUsuario(Usuario) {
        alert(`nombre: ${Usuario.Nombre}, telefono: ${Usuario.Telefono} correo:${Usuario.Correo}`);
    }
}

// Controlador
class controladorUsuario {
    constructor() {
        this.Usuarios = [];
        this.vista= new VistaUsuario();
        this.vista.form.addEventListener("submit", this.HandleFormSubmit.bind(this));
    }

    HandleFormSubmit(event) {
        event.preventDefault();
        const Nombre = this.vista.InputNombre.value;
        const Telefono = this.vista.InputTelefono.value;
        const Correo = this.vista.InputCorreo.value;
        const Contraseña = this.vista.InputContraseña.value;

        const nuevoUsuario = new Usuario(Nombre, Telefono, Correo, Contraseña);
        this.Usuarios.push(nuevoUsuario);

        this.vista.RenderListaUsuario(nuevoUsuario);

        this.vista.form.reset();
        document.getElementById("Mensaje").innerText = "Usted se ha registrado";
    }
}

// Inicializar la aplicación
const ControladorUsuario = new controladorUsuario();