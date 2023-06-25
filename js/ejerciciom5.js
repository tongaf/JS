/*function obtenerDatos(){
    var CostosFijos = document.getElementById("cf").value;
    var PrecioDeVenta = document.getElementById("pv").value;
    var CostosVariables = document.getElementById("cv").value;
    
    var resultado = CostosFijos/(PrecioDeVenta-CostosVariables);
    return resultado;
    alert (resultado) 

}

alert (resultado)*/

function recibir() {
    var CostosFijos = document.getElementById("cf").value;
    var PrecioDeVenta = document.getElementsById("pv").value;
    var CostosVariables = document.getElementsById("cv").value;
    document.getElementById("escribir").innerHTML=" \ Tu nombre es: "+CostosVariables+" \
     <br>Tu apellido es: "+CostosFijos+PrecioDeVenta;
    }
  function borrar() {
     document.getElementById("escribir").innerHTML=" " ;
    }