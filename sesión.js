function validarFormulario(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Obtener los valores de los campos de entrada
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;

  // Validar que los campos no estén vacíos
  if (correo.trim() === "" || contrasena.trim() === "") {
    alert("Por favor, ingrese su correo electrónico y contraseña");
    return;
  }

  // Validar el formato del correo electrónico
  var expresionCorreo = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!expresionCorreo.test(correo)) {
    alert("Por favor, ingrese un correo electrónico válido");
    return;
  }

  // Validar la longitud de la contraseña
  if (contrasena.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  // Si todas las validaciones pasan, enviar el formulario
  alert("Formulario enviado con éxito");
  document.getElementById("formulario").submit();
}
