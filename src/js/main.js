const newsSection = document.querySelector("#news-section");
const articles = newsSection.querySelectorAll("article");

for (let i = 0; i < articles.length; i++) {
  articles[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightgrey";
  });

  articles[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
}
