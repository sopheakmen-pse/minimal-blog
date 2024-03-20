import articles from "../../components/category/data.js";

console.log(articles.length);

for (let i = 0; i < 3; i++) {
    if (articles[i].category === "dailytrends"){
        document.getElementById('DailyTrends').innerHTML += `
        <div class="contain-box">
        <div class="each-box">
        <div class="txt">
        <p>${articles[i].publishDate}</p>
        <a href="/components/single/single.html?id=${articles[i].id}">${articles[i].title}</a>
        <p>${articles[i].paragraphs[0]}</p>
        </div>
        <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
        </div>
        </div>`
    };
  };

  for (let i = 0; i < articles.length; i+=2) {
    if (articles[i].category === "developmenttools"){
        document.getElementById('DevelopmentTools').innerHTML += `
        <div class="each-box">
        <div class="txt">
        <p>${articles[i].publishDate}</p>
        <a href="/components/single/single.html?id=${articles[i].id}">${articles[i].title}</a>
        <p>${articles[i].paragraphs[0]}</p>
        </div>
        <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
        </div>`
    };
  };

  for (let i = 0; i < articles.length; i+=2) {
    if (articles[i].category === "tutorails"){
        document.getElementById('Tutorails').innerHTML += `
        <div class="each-box">
        <div class="txt">
        <p>${articles[i].publishDate}</p>
        <a href="/components/single/single.html?id=${articles[i].id}">${articles[i].title}</a>
        <p>${articles[i].paragraphs[0]}</p>
        </div>
        <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
        </div>`
    };
  };