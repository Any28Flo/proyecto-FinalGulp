var ruta="http://localhost:3000/api/registerNumber"
var tiempoRestante = 21;
var textAreaTelefono = document.getElementById("code");
var tiempo = document.getElementById("tiempo")
var telefono = 0;
var funcionCarousel = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});    
}

var validaTelefono = function(){
   var numero= $("#numeroTelefonico").val();
   if (numero.length > 0 && numero.length == 10 )
       {
           var btnContinuar = document.getElementById("btnFormulario")
            $(btnContinuar).removeClass("disabled");
            btnContinuar.setAttribute("href","ingresaCodigo.html")

       }else{
           alert("inserte numero valido");
           $("#numeroTelefonico").val('');
           $("#checkBox").removeAttr("checked");
       }
}


var cambia = function(){
    var btnCheck= document.getElementById("checkBox");
    $("#checkBox").click(validaTelefono);
     btnCheck.setAttribute("checked","checked");
    validaTelefono();
    
        
}
var deshabilitaTelefono = function (){
    
    textAreaTelefono.setAttribute("disabled","disabled");
}    
var habilitaTelefono = function(){
    $(textAreaTelefono).removeAttr("disabled");
    
}

var metodoPost = function(){
    var phoneNumeber =document.getElementById("numeroTelefonico").value
    console.log(phoneNumeber)
    $.post(ruta,{
        "phone":phoneNumeber,
        "terms":true
    }).then(function (response){
        alert("Codigo: "+response.data.code);
        console.log(response.data.phone)
        $("#telefono").innerHTML=response.data.phone;
        localStorage.setItem("telefono",response.data.phone);  
        localStorage.setItem("codigo",response.data.code);
      
        
    }).catch(function(error){
        console.log(error);
    })
    
    
}



    
var valida = function (){
    contador++;
    console.log(contador);
    return true;
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
    $("#tiempo").innerHTML=tiempoRestante;    
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
var validaNombre = function (){
    var nombre = $("#nombre").val();
    localStorage.setItem("nombre",nombre);  
    if(nombre.length >0 && nombre.length<20){
        return true
    }else{
        return false 
    }
}
var validaContrasena = function(){
    var contrasena = $("#clave").val();
    localStorage.setItem("clave",contrasena);  

    if(contrasena.length >0 && contrasena.length===5){
        return true
    }else{
        return false;
    }
}
var validaFormulario = function(){
    
    var nombreUsuario = validaNombre();
    var correoUsuraio = validaEmail();
    var contrasena = validaContrasena();
    if(nombreUsuario===true && correoUsuraio===true && contrasena ===true ){
        
            $("#creaCuenta").removeClass("disabled");

    }
    
    
    
}
function validaEmail(){
       var correo = $("#correo").val();
       localStorage.setItem("email",correo);  

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(correo) == false) 
        {
             
            return false;
        }

        return true;

}


var obtieneNumero = function(){
    var telefono = localStorage.getItem("telefono");
    $("#numIngresado").text(telefono)
}
var insertaUsuario = function (){
    var phone = localStorage.getItem("telefono");
    var name = localStorage.getItem("nombre");
    var mail = localStorage.getItem("email");
    var passWord= localStorage.getItem("clave");
     $.post("http://localhost:3000/api/createUser",{
        "phone":phone,
        "name":name,
        "email":mail,
        "password":passWord
    }).then(function (response){
         console.log(response);
         
         sigPantalla();

        alert("datos dados dados de alta")
        
    })
   
    
}
var sigPantalla = function(){
      window.location.href = "../bienvenida.html";

}
var cargaPagina = function(){
    funcionCarousel();
    $("#checkBox").click(cambia);
    obtieneNumero();
    $("#creaCuenta").click(insertaUsuario);
    insertaTiempo();
    $("#btnFormulario").click(metodoPost);
    $('#codigoConfirmacion').submit(function (evt) {
        evt.preventDefault();
        validaCodigo();
    }); 
    $("#registroUsuario").submit(function(e){
        e.preventDefault();
    })
    $("#registroUsuario").keypress(validaFormulario)
       
       
    
    
    
     
    
}

$(document).ready(function(){
    cargaPagina();    
})
  
