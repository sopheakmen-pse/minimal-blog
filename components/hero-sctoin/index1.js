import titles from "../../src/js/component";

const Params = window.location.search;

const UrlParam = new URLSearchParams(Params);

const articleId =UrlParam.get("category");











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
