
function ingresar(){
    var nombre=document.getElementById("nombre").value;
    var clave=document.getElementById("clave").value;
    if (nombre==""){
        alert("Favor de Ingresar el Usuario");
        return false;
    }if (clave==""){
        alert("avor de Ingresar la Clave");
        return false;
    }
}