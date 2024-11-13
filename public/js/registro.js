
const iniciar_registro = () =>{
    let data = new FormData();
    data.append("nombre",$("#nombre").val());
    data.append("apellido",$("#apellido").val());
    data.append("usuario",$("#usuario").val());
    data.append("password",$("#password").val());
    data.append("metodo","iniciar_registro");
    fetch("./app/controller/Registro.php",{
        method:"POST",
        body:data
    }).then(respuesta => respuesta.json())
    .then(respuesta => {
        if(respuesta[0] == 1){
            alert(respuesta[1]);
            window.location="login";
        }else{
            alert(respuesta[1]);
        }
    });
}

$("#btn_registro").on('click',()=>{
    iniciar_registro();
});