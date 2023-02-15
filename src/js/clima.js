const search = document.querySelector('button')
const select = document.querySelector('select')
const key = 'dad8aab1f1c6b2ca90ecc0e073de7613';

search.addEventListener('click', ()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=${key}&lang=pt_br&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherSection = document.querySelector("#weather-section");
            const weatherInfo = `
                <p><b>Câmpus:</b> ${data.name}</p>
                <p><b>Temperatura:</b> ${data.main.temp} °C</p>
                <p><b>Descrição:</b> ${data.weather[0].description}</p>
    `;
    weatherSection.innerHTML = weatherInfo;
  });

  document.querySelector('#weather-section').style.display = 'flex'

})