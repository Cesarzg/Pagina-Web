function Ingresar(){
var nombre=document.getElementById("nombre").value;
var direccion=document.getElementById("direccion").value;
var correo=document.getElementById("correo").value;
var mensaje=document.getElementById("mensaje").value;
if(nombre==""){
    alert('Favor de ingresar su usuario');
    return false;
}   
if(direccion==""){
   alert('Favor de ingresar su clave');
    return false;
}if (correo==""){
    alert("Favor de ingresar su Correo");
    return false
}
if(nombre) if (direccion) if(correo) if (mensaje){
    window.open('Blog.html','menu administrador','height=500px, width=800px')
}
}