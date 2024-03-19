import articles from "../../data/articleData.js";
import navbar  from "../../components/navbar/index.js";

const Params = window.location.search;
const urlParams = new URLSearchParams(Params);
const category = urlParams.get('category');


for (let i = 0; i <3; i++){
    if (articles[i].category === "daily trends"){
       document.getElementById('articleContainer').innerHTML +=`
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


for (let i = 14; i <17; i++){
      if (articles[i].category === "tutorials"){
         document.getElementById('articleContainer1').innerHTML +=`
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

       for (let i = 7; i <10; i++){
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
          import herotext from "../../components/hero/hero.js";
          import footer from "../../components/footer/script.js";



         

 

