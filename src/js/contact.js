const bttn = document.querySelector('button')
const email = document.getElementById('email')
const wpp = document.getElementById('wpp')
const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const text = document.querySelector('textarea')

inputs.forEach(input=>{
    input.addEventListener('focus', ()=>{
        input.style.borderColor = 'black'
    })

    input.addEventListener('focusout', ()=>{
        if(!input.value){
            input.style.borderColor = ''
        }
    })

    input.addEventListener('blur', ()=>{
        if(!input.checkValidity()){
            input.style.borderColor = 'red'
        }else{
            input.style.borderColor = 'darkgreen'
        }
    })

})


text.addEventListener('input', ()=>{
    text.style.height = '8em'
    if(!text.value){
        text.style.height = '4em'
    }
})

email.addEventListener('mouseover', ()=>{
    email.style.color = 'blue'
})

email.addEventListener('mouseout', ()=>{
    email.style.color = ''
})


wpp.addEventListener('mouseover', ()=>{
    wpp.style.color = 'green'
})

wpp.addEventListener('mouseout', ()=>{
    wpp.style.color = ''
})

bttn.addEventListener('click', ()=>{
    if(form.checkValidity(true)){
        alert('Obrigado pelo feedback!')
    }
})

