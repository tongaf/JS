var usuario = prompt("ingrese su usuario por favor")
var contraseña = prompt("ingrese su contraseña por favor")
var ValidacionUsuario = "admin"
var ValidacionContraseña = 1234

if ( usuario == ValidacionUsuario && contraseña ==  ValidacionContraseña) {
    alert("bienvenido")
} else {
    alert("error, usted no es el usuario")
}