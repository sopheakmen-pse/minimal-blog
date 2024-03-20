import articles from "../../data/articleData.js";
import navbar  from "../../components/navbar/index.js";
document.getElementById("pharagrap") .innerHTML = `
<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: right;
margin-right:-14%;
font-family:sans-serif;
font-size:65px;
margin-top:25%;
">Tutorials</h1>

<p style="text-align: right;
margin-right:-30%; line-height: 40px; font-family:sans-serif; font-size:25px;">
A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>`
for (let i = 0; i <articles.length; i++){
    if (articles[i].category === "tutorials"){
       document.getElementById('articleContainer1').innerHTML +=`
      <div class="article">
         <div class="article-info"><a href="../../pages/single/index.html?category=sigle page">
            <div class="para">
              ${articles[i].publishDate}
              <h3>${articles[i].title}</h3>
              <p>${articles[i].description}</p>
            </div>
            </a>
            <div class="image-info">
             <img src="${articles[i].primaryImageUrl}">
            </div>
         </div>
      </div>
       `
     };
     };
     import herotext from "../../components/hero/hero.js";
     import footer from "../../components/footer/script.js";




