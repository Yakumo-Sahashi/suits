const validar_campos = (arreglo) =>{
    for(let i = 0; i < arreglo.length; i++){
        if($(`#${arreglo[i]}`).val() == ""){
            swal({
                title:"Error!",
                text: `El campo ${$(`[for=${arreglo[i]}]`).text()} no puede estar vacio!`,
                icon: "warning",
                buttons: "Aceptar"
            });
            return false;
        }
    }
    return true;
}

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
            swal({
                title: "Correcto!",
                text: respuesta[1],
                icon: "success",
                buttons: "Aceptar",
                closeOnClickOutside: false,
                closeOnEsc: false,
                value: true,
                buttons: false,
                timer: 1500
            }).then(() => {
                window.location="login";
            });
        }else{
            swal({
                title:"Error!",
                text: respuesta[1],
                icon: "warning",
                buttons: "Aceptar"
            });
        }
    });
}

$("#btn_registro").on('click',()=>{
    if(validar_campos(["nombre","apellido","usuario","password"])){
        iniciar_registro();
    }
});