const mensaje_error = (msj)=> {
    swal({
        title: "Error!",
        text: msj,
        icon: "warning",
        button: "Aceptar",
      });
}
const mensaje_exito = (msj)=> {
    swal({
        title: "Correcto!",
        text: msj,
        icon: "success",
        button: "Aceptar",
      });
}

const iniciar_sesion = () =>{
    let data = new FormData();
    data.append("usuario",$("#usuario").val());
    data.append("password",$("#password").val());
    data.append("metodo","iniciar_sesion");
    fetch("./app/controller/Login.php",{
        method:"POST",
        body:data
    }).then(respuesta => respuesta.json())
    .then(respuesta => {
        if(respuesta[0] == 1){
            alert(respuesta[1]);
            window.location="inicio";
        }else{
            alert(respuesta[1]);
        }
    });
}

$("#btn_iniciar").on('click',()=>{
    iniciar_sesion();
});