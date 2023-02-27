const newsSection = document.querySelector("#news-section");
const articles = newsSection.querySelectorAll("article");
const titles = newsSection.querySelectorAll('h3')
const images = newsSection.querySelectorAll('img')

articles.forEach(article=>{
  article.addEventListener('mouseover', ()=>{
    article.style.backgroundColor = "lightgray"
  })
  
  article.addEventListener('mouseout', ()=>{
    article.style.backgroundColor = ""
  })
})

titles.forEach(title=>{
  title.addEventListener("mouseover", ()=>{
    title.style.color = "#8b0000"
  })

  title.addEventListener("mouseout", ()=>{
    title.style.color = ""
  })
})

images.forEach(img=>{
  img.addEventListener('mouseover', ()=>{
    img.style.transform = 'scale(1.1)'
  })
  
  img.addEventListener('mouseout', ()=>{
    img.style.transform = ''
  })
})