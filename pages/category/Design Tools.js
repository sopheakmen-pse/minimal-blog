import navbar  from "../../components/navbar/index.js";
document.getElementById("pharagrap") .innerHTML = `
<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: right;
margin-right:-20%;
font-family:sans-serif;
font-size:65px;
margin-top:25%;
">Design Tools</h1>

<p style="text-align: right;
margin-right:-30%; line-height: 40px; font-family:sans-serif; font-size:25px;">
A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>`
import articles from "../../data/articleData.js";
for (let i = 0; i < articles.length; i++){
    if (articles[i].category === "Development tool"){
       document.getElementById('articleContainer2').innerHTML +=`
      <div class="article">
         <div class="article-info">
            <div class="para">
              ${articles[i].publishDate}
              <h3>${articles[i].title}</h3>
              <p>${articles[i].description}</p>
            </div>
            <div class="image-info">
             <img src="${articles[i].primaryImageUrl}">
            </div>
         </div>
      </div>
       `
     };
     };


