let users ={};// Objeto para almacenar usuarios y contraseñas

document.getElementById('loginForm'). addEventListener('submit', function(event){
    event.preventDefault();//Prevenir el envio del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    //Verificacion simple de usuario y contraseña
    if (username === "admin" && password === "password") {
        message.textContent = "Inicio de sesion exitoso!";
        message.style.color = "green";
    }
    else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
});
//Mostrar formulario de registro

document.getElementById('showRegister').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});
//Mostrar formulario de inicio de sesion

document.getElementById('showLogin').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});
//Manejar el registro de usuarios

document.getElementById('registerButton').addEventListener('click', function(){
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const registerMessage = document.getElementById('registerMessage');
    //Comprobar si el usuario ya existe
    if (users[newUsername]) {
        registerMessage.textContent = "El usuario ya existe.";
        registerMessage.style.color = "red";
    }
    else {
        //Registrar nuevo usuario
        users[newUsername] = newPassword;
        registerMessage.textContent = "Cuenta creada exitosamente!";
        registerMessage.style.color = "green";
        document.getElementById('registerForm').reset(); //Limpiar el formulario
    }
});