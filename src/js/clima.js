const search = document.querySelector('button')
const select = document.querySelector('select')
const key = 'dad8aab1f1c6b2ca90ecc0e073de7613';

search.addEventListener('click', ()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            const weatherSection = document.querySelector("#weather-section");
            const weatherInfo = `
                <p>Cidade: ${data.name}</p>
                <p>Temperatura: ${data.temp} °C</p>
                <p>Descrição: ${data.description}</p>
    `;
    weatherSection.innerHTML = weatherInfo;
  });


})
