import articleles from "../../src/js/global.js";


const Params = window.location.search;

const UrlParam = new URLSearchParams(Params);

const articleId =UrlParam.get("id");

let article;

console.log(articleles.length)

for (let i=0 ; i<articleles.length; i++) {
    if(articleles[i].id === articleId) {
      article=articleles[i];
        document.getElementById("single").innerHTML += `
        <div class="image">
        <img src="${articleles[i].primaryImageUrl}" alt="">
    </div>
    <div class="box1">
        <div class="single-text">
            <p> ${articleles[i].paragraphs[0]} </p>
            <p>${articleles[i].paragraphs[1]}</p>
            <p>${articleles[i].paragraphs[2]} </p>
        </div>
        <div class="image-caption">
             <img src="${articleles[i].secondaryImageUrl}" alt="">
             <p>Image caption or credit</p>
        </div>
        <div class="single-text">
            <p> ${articleles[i].paragraphs[3]}</p>
            <p>${articleles[i].paragraphs[4]}</p>

        </div>
        <div class="container">
                <div class="text">
                    <h1>${articleles[i].paragraphs[5]}</h1>
                </div>
            </div> 
            <div class="single-text">
                <p>${articleles[i].paragraphs[6]} </p>
            </div>
       
    </div>`
    };
};
let count = 1;
for (let i=0 ; i<articleles.length; i++) {
    if(articleles[i].category === article.category) {
        if(count<=3){
            document.getElementById("article-card").innerHTML += `
            <a href="/components/single(page)/index.html?id=${articleles[i].id}">
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
            `;
        }
        count++;
    };
};  