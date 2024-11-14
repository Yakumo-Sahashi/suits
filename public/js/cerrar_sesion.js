
const cerrar_sesion = () =>{
    let data = new FormData();
    data.append("metodo","cerrar_sesion");
    fetch("./app/controller/Login.php",{
        method:"POST",
        body:data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
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
    });
}

$("#btn_cerrar").on('click',()=>{
    cerrar_sesion();
});