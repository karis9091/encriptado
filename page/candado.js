function contraseña_Segura(elemento){
    if(contraseña=>8 && contraseña){
    }
}

function encriptar(elemento){
    var contraseña = document.getElementsByTagName("input")[0].value;
    var contraseña_codificada = btoa(contraseña);
    document.getElementById("resultado").innerHTML = contraseña_codificada;
    //al ponerle a la funcion el . value estoy indicando que quiero que 
    //la variable contrasena se le asigne lo que este en el input inicial
}

function desencriptar(elemento){
    var contraseña = document.getElementsByTagName("input")[0].value;
    var contraseña_descodificada = atob(contraseña);
    document.getElementById("resultado").innerHTML = contraseña_descodificada;
}