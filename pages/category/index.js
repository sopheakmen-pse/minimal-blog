import articles from "../../src/js/global.js";

const body = document.body;

document.getElementById("paragraph") .innerHTML =`

<h1 id="title" > Daily Digest</h1>

<p>A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>
`;

for (let i = 0; i < articles.length; i++) {

    if(articles[i].category === "daily trends") {
        document.getElementById("Daily Digest").innerHTML +=`
        <div class="card">
            <div class="card-info">

                <h4>${articles[i].publishDate}</h4>
                <h2>${articles[i].title}</h2>
                <p>${articles[i].paragraphs[0]}</p>
            </div>
            <div class="img"><img src="${articles[i].primaryImageUrl}"></div>
        </div>
                 `;
    };
};