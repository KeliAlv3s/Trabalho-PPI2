const bttn = document.querySelector('button')
const form = document.querySelector('form')

let formIsValid = form.checkValidity();

bttn.addEventListener('click', ()=>{
    if(formIsValid){
        alert("Obrigado por compartilhar sua mensagem com a equipe IFNews!")
    }
})