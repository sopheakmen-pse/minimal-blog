import articleles from "../../src/js/global.js";
import titles from "../../src/js/component.js";

const Params = window.location.search;

const UrlParam = new URLSearchParams(Params);

const articleId =UrlParam.get("category");











for (let i=0 ; i<articleles.length; i++) {
    if(articleles[i].category === articleId) {
        document.getElementById("article-card").innerHTML += `
        <a href="/components/single(page)/index.html?id=${articleles[i].id}&&category=daily trends">
        <div class="card">
        <div class="article-info">
        <h5>${articleles[i].publishDate}</h5>
        <h3>${articleles[i].title}</h3>
        <p>${articleles[i].paragraphs[0]}</p>
    </div>
    <div class="article-image">
        <img src="${articleles[i].primaryImageUrl}" alt="">
    </div>
    </div>
    </a>
        `
    };
};

for (let i=0 ; i<titles.length; i++) {
    if(titles[i].name === articleId) {
        document.querySelector(".sction").innerHTML += `
<div class="title">
<h1>${titles[i].name}</h1>
<p>100% customisable and SEO-friendly blog template for personal and commercial purposes.</p>
</div>
        `
    };
};

console.log(articleId);