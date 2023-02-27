const bttn = document.querySelector('button')
const email = document.getElementById('email')
const wpp = document.getElementById('wpp')
const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')

form.addEventListener('invalid', ()=>{
    
})

inputs.forEach(input=>{
    input.addEventListener('focus', ()=>{
        input.style.borderColor = 'darkgreen'
    })
    
    input.addEventListener('focusout', ()=>{
        input.style.borderColor = ''
    })
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