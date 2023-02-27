const bttn = document.querySelector('button')
const email = document.getElementById('email')
const wpp = document.getElementById('wpp')
const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const text = document.querySelector('textarea')

inputs.forEach(input=>{//seleciona os inputs
    input.addEventListener('focus', ()=>{//altera borderColor quando focado
        input.style.borderColor = 'black'
    })

    input.addEventListener('focusout', ()=>{//se vazio, retorna a borderColor original
        if(!input.value){
            input.style.borderColor = ''
        }
    })

    input.addEventListener('blur', ()=>{
        if(!input.checkValidity()){
            input.style.borderColor = 'red'//se invalido, altera borderColor para vermelho
        }else{
            input.style.borderColor = 'darkgreen'//se válido, altera borderColor para verde escuro
        }
    })

})

//altera altura da textarea se tiver conteúdo
text.addEventListener('input', ()=>{
    text.style.height = '8em'
    if(!text.value){
        text.style.height = '4em'
    }
})

//altera color do span 
email.addEventListener('mouseover', ()=>{
    email.style.color = 'blue'
})

email.addEventListener('mouseout', ()=>{
    email.style.color = ''
})

//altera color do span 
wpp.addEventListener('mouseover', ()=>{
    wpp.style.color = 'green'
})

wpp.addEventListener('mouseout', ()=>{
    wpp.style.color = ''
})

//valida o formulário e emite um alert
bttn.addEventListener('click', ()=>{
    if(form.checkValidity(true)){
        alert('Obrigado pelo feedback!')
    }
})

