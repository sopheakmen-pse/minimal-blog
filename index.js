// function createFooter(index) {
//     const footer = document.createElement("div");
//     footer.innerText = "Copyright 2024" + "- " + index;
//     return footer;
// }

// const body = document.body;
// body.insertBefore(createFooter(1), document.getElementById("global-script"));
// body.insertBefore(createFooter(2), document.getElementById("global-script"));
// body.insertBefore(createFooter(3), document.getElementById("global-script"));


import articleles from "./src/js/global";


const Params = window.location.search;

const UrlParam = new URLSearchParams(Params);

const articleId =UrlParam.get("category");











for (let i=0 ; i<articleles.length; i++) {
    if(articleles[i].category === articleId) {
        document.getElementById("article-card").innerHTML += `
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
        `
    };
};

console.log(articleId);