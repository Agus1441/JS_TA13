const cambiar = document.getElementById("boton");

cambiar.addEventListener("click",()=>{
    const nuevoTexto = "Texto Cambiado";
    document.getElementById("texto").innerHTML=nuevoTexto;
});