const toggleMenu = document.getElementById("toggle-menu")
const closeMenu = document.getElementById("toggle-close")
const menu = document.getElementById("menu")
const links = document.querySelectorAll(".nav__links-link")

toggleMenu.addEventListener("click", () => {
    menu.classList.add("active-menu")
    closeMenu.classList.add("active")
    toggleMenu.classList.remove("active")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active-menu")
    closeMenu.classList.remove("active")
    toggleMenu.classList.add("active")
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active-menu")
        closeMenu.classList.remove("active")
        toggleMenu.classList.add("active")
    })
})

//Validacion de formulario
const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const button = document.getElementById('button')

form.addEventListener("submit", e => {
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const nombreValue = nombre.value.trim()
    const emailValue = email.value.trim()
    const asuntoValue = asunto.value.trim()
    const mensajeValue = mensaje.value.trim()

    if(nombreValue === ""){
        setErrorFor(nombre, "Ingresa tu Nombre")
    } else {
        setOkFor(nombre)
    }

    if(emailValue === ""){
        setErrorFor(email, "Ingresa tu E-mail")
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Ingresa un E-mail valido")
    } else{
        setOkFor(email)
    }

    if(asuntoValue === ""){
        setErrorFor(asunto, "Ingresa el asunto del mensaje")
    } else {
        setOkFor(asunto)
    }

    if(mensajeValue === ""){
        setErrorFor(mensaje, "Ingresa el mensaje")
    } else {
        setOkFor(mensaje)
    }
}

function setErrorFor(input, mensaje){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    formControl.className = "input error"
    small.innerText = mensaje
}

function setOkFor(input){
    const formControl = input.parentElement
    formControl.className = "input"
    button.innerText = "Enviando...";
    setTimeout(() => {
      button.innerText = "Enviado!";
    }, 2000);
    setTimeout(() => {
        button.innerText = "Enviar mensaje";
        form.reset()
      }, 3000);
    
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}