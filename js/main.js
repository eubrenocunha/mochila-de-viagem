const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    criaElemento(evento.target.elemens ['nome'].value, evento.target.elements ['quantidade'].value)
    
})