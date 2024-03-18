


import articleles from "../../src/js/global.js";
console.log(articleles.length)

for (let i=0 ; i<3; i++) {
    if(articleles[i].category === "daily trends") {
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


for (let i=0 ; i<articleles.length; i+=2) {
    if(articleles[i].category === "development tools") {
        document.getElementById("developmentools").innerHTML += `
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

for (let i=0 ; i<articleles.length; i+=2) {
    if(articleles[i].category === "Tutorials") {
        document.getElementById("Tutorials").innerHTML += `
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
