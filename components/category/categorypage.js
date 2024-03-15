import articles from "../../components/category/data.js";

console.log(articles.length);

const params = window.location.search;
const urlParam = new URLSearchParams(params);

const articleId = urlParam.get("category");

for (var i=0;i<articles.length;i++){
  if (articles[i].category === articleId){
    const div = document.createElement("div");
    // div.classList("each-box");
    div.innerHTML += `
    <div class="each-box">
        <div class="txt">
        <p>${articles[i].publishDate}</p>
        <a href="">${articles[i].title}</a>
        <p>${articles[i].paragraphs[0]}</p>
        </div>
        <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
        </div>
    `
    document.body.append(div);
  }
}