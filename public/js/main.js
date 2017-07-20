var ruta="http://localhost:3000/api/registerNumber"
var tiempoRestante = 21;
var textAreaTelefono = document.getElementById("code");
var tiempo = document.getElementById("tiempo")

var funcionCarousel = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});    
}

var validaTelefono = function(){
   var numeroTelefonico= document.getElementById("numeroTelefonico");
   var bandera= numeroTelefonico.addEventListener("keydown",valida);
    
}


var cambia = function(){
    var btnCheck= document.getElementById("checkBox");
     btnCheck.setAttribute("checked","checked");
    var btnContinuar = document.getElementById("btnFormulario")
    $(btnContinuar).removeClass("disabled");
    btnContinuar.setAttribute("href","ingresaCodigo.html")
        
}
var deshabilitaTelefono = function (){
    
    textAreaTelefono.setAttribute("disabled","disabled");
}    
var habilitaTelefono = function(){
    $(textAreaTelefono).removeAttr("disabled");
    
}

var metodoPost = function(){
    var phoneNumeber =document.getElementById("numeroTelefonico").value
    $.post(ruta,{
        "phone":phoneNumeber,
        "terms":true
    }).then(function (response){
        alert("Codigo: "+response.data.code);
       localStorage.setItem("codigo",response.data.code);
    }).catch(function(error){
        console.log(error);
    })
    
    
}



    
var valida = function (){
    contador++;
    console.log(contador);
}

var validaCodigo = function (){
  var codigoUsuario = document.getElementById("code").value;
  if (codigoUsuario === localStorage.getItem("codigo")){
      alert("codigo valido")
      
      window.location.href = "../usuario.html";
    }else{
        
        alert("codigo invalido ")
        deshabilitaTelefono();
        validaTiempo();
    }
  
}
var insertaTiempo = function (){
    tiempo.innerHTML=tiempoRestante;    
}
var validaTiempo = function(){
    
    tiempo.innerHTML=tiempoRestante;
    if(tiempoRestante>0){
        tiempoRestante--;
        setTimeout("validaTiempo()",1000);
    }else if(tiempoRestante === 0){
        habilitaTelefono();
    }
}
var cargaPagina = function(){
    funcionCarousel();
    $("#checkBox").click(cambia);
    $("#btnFormulario").click(metodoPost);
    $('#codigoConfirmacion').submit(function (evt) {
        evt.preventDefault();
        validaCodigo();
    }); 
    insertaTiempo();
    
}

$(document).ready(function(){
    cargaPagina();    
})
  
