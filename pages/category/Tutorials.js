import articles from "../../data/articleData.js";
import navbar  from "../../components/navbar/index.js";
document.getElementById("pharagrap") .innerHTML = `
<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: center;
font-family:sans-serif;
font-size:65px;
margin-top:10%;
">Tutorials</h1>

<p style="text-align: center;line-height: 40px; font-family:sans-serif; font-size:25px;">
A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>`
for (let i = 0; i <articles.length; i++){
    if (articles[i].category === "tutorials"){
       document.getElementById('articleContainer1').innerHTML +=`
      <div class="article">
         <div class="article-info"><a href="../../pages/single/index.html?cateory=single page">
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




