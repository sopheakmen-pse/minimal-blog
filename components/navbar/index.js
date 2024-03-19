let menu = {
    logo:'Personally',
    item:["Daily Digest","Design Tools","Tutorials","Subscribe"]
}

document.getElementById("navbar").innerHTML += `

<div class="logo"  style="font-weight:bold;" ><a href="/pages/home/index.html">${menu.logo}<sup style="font-size: 10px;">TM</sup></a></div>
<div class="menu-item">
    <a href="/components/category/category.html?category=daily trends">${menu.item[0]}</a>
    <a href="/components/category/category.html?category=development tools">${menu.item[1]}</a>
    <a href="/components/category/category.html?category=Tutorials">${menu.item[2]}</a>
</div>
<div class="subscribe-button"><a href="">${menu.item[3]}</a></div>

`;

// import articleles from "../../src/js/global";

// const Params = window.location.search;

// const UrlParam = new URLSearchParams(Params);

// const articleId =UrlParam.get("category");











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

