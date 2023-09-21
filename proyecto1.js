const datoUsuario = document.getElementById("userName")
const datoPass = document.getElementById("Password")
const boton = document.getElementById("botonEnviar")

boton.addEventListener("click",(a) =>{
    a.preventDefault()
    const datos = {
        nombreUsuario : datoUsuario.value,
        passUsuario : datoPass.value
    }
    console.log(datos)
})








