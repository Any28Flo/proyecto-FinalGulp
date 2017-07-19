var funcionCarousel = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});    
}

var contador = 0 ;
var validaTelefono = function(){
   var numeroTelefonico= document.getElementById("numeroTelefonico");
   var bandera= numeroTelefonico.addEventListener("keydown",valida);
    
}
var validaCheckBox = function(){
    
    var btnCheck= document.getElementById("checkBox");
    btnCheck.addEventListener("click",cambia);
}
var cambia = function(){
    var btnCheck= document.getElementById("checkBox");
     btnCheck.setAttribute("checked","checked");
    var btnContinuar = document.getElementById("btnFormulario")
    
    $(btnContinuar).removeClass("disabled");
    btnContinuar.addEventListener("click",metodoGet)
}
var metodoGet = function(){
    var phoneNumeber =parseInt(document.getElementById("numeroTelefonico").value;)
    
    console.log(typeof(phoneNumeber));
    console.log("Funcion en servicio")
}
var valida = function (){
    contador++;
    console.log(contador);
    

}

$(document).ready(function(){
    funcionCarousel();
    validaTelefono();
    validaCheckBox ();
});
        
