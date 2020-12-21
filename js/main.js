function validateForm() {
    /* Escribe tú código aquí */

    $('span.msg').remove();

    // nombre
    var name = $('#name').val().trim();
    if (name == '') {
        $('#name').parent().append('<span class="msg">debe ingresar un nombre. primera letra mayuscula. sin carácteres especiales</span>')
    } else if (name[0].toUpperCase() != name[0]) {
        $('#name').parent().append('<span class="msg">primera letra en mayuscula<///span>')
    } else if (soloLetras(name) == false) {
        $('#name').parent().append('<span class="msg">solo letras permitidas</span>')
    }

    // apellido
    var lastname = $('#lastname').val().trim();
    if (lastname == '') {
        $('#lastname').parent().append('<span class="msg">debe ingresar un apellido. primera letra mayuscula. sin carácteres especiales</span>')
    } else if (lastname[0].toUpperCase() != lastname[0]) {
        $('#lastname').parent().append('<span class="msg">primera letra en mayuscula</span>')
    } else if (soloLetras(lastname) == false) {
        $('#lastname').parent().append('<span class="msg">solo letras permitidas</span>')
    }

    // email
    var email = $('#input-email').val().trim();
    if (email == '') {
        $('#input-email').parent().append('<span class="msg">debe ingresar un correo válido</span>')
    } else if (validarEmail(email) == false) {
        $('#input-email').parent().append('<span class="msg">mail no valido</span>')
    }


    // contraseña
    var pass = $('#input-password').val().trim();
    if (pass == '') {
        $('#input-password').parent().append('<span class="msg">debe ingresar contraseña válida. minimo 6 caracteres</span>')
    } else if (pass == 'password' || pass == '123456' || pass == '098765') {
        $('#input-password').parent().append('<span class="msg">contraseña poco segura</span>')
    } else if (pass.length < 6) {
        $('#input-password').parent().append('<span class="msg">debe tener al menos 6 caracteres</span>')
    }

    // input box
    var bike = $('select').val();
    console.log(bike);
    if (bike == '0') {
        $('select').parent().append('<span class="msg">debe seleccionar un campo</span>')
    }

}

function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function soloLetras(valor) {
    if (/^[a-zA-Z ]+$/.test(valor)) {
        return true;
    } else {
        return false;
    }
}