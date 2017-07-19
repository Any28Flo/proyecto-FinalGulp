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
    var ruta="http://localhost:3000/api/registerNumber"
    var phoneNumeber =document.getElementById("numeroTelefonico").value
    $.post(ruta,{
        "phone":phoneNumeber,
        "terms":true
    },function (response){
        console.log(response);
    })
    
}
var getSuccess = function(res){
    console.log(res);
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
        
