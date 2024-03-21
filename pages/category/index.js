import articles from "../../src/js/global.js";

const body = document.body;


const params = window.location.search;
const urlParam = new URLSearchParams(params);
const category = urlParam.get("category");

document.getElementById("paragraph") .innerHTML =`

<h1 id="title" >${category}</h1>

<p>A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>
`;
const articleList = document.getElementById("Daily Digest");



for (let i = 0; i < articles.length; i++) {

    if(articles[i].category === category) {
        const card = document.createElement("a");
        card.classList.add("card");
        card.setAttribute("href","/pages/single/index.html?id="+articles[i].id);
        card.innerHTML +=`
            <div class="card-info">

                <h4>${articles[i].publishDate}</h4>
                <h2>${articles[i].title}</h2>
                <p>${articles[i].paragraphs[0]}</p>
            </div>
            <div class="img"><img src="${articles[i].primaryImageUrl}"></div>
         `;

         articleList.prepend(card);
    };
};




