import articles from "../../data/articleData.js";
import navbar  from "../../components/navbar/index.js";
for (let i = 0; i <3; i++){
    if (articles[i].category === "daily trends"){
       document.getElementById('articleContainer').innerHTML +=`
       
       
       <div class="article">
          <div class="content">
          ${articles[i].paragraphs[0]}
       <img class="pic" src="${articles[i].primaryImageUrl}">
       </div>
       </div>
       </section>
       `
     };
     };

     for (let i = 14; i <17; i++){
        if (articles[i].category === "tutorials"){
           document.getElementById('articleContainer1').innerHTML +=`
           <div class="article">
              <div class="content">
              <div class="paragraph">
              <h3>${articles[i].title}</h3>
              ${articles[i].description}
              </div>
           <img class="pic" src="${articles[i].primaryImageUrl}">
           </div>
           </div>
            
           `
         };
         };

         for (let i = 7; i <10; i++){
            if (articles[i].category === "Development tool"){
               document.getElementById('articleContainer2').innerHTML +=`
               <div class="article">
                  <div class="content">
                  ${articles[i].paragraphs[0]}
               <img class="pic" src="${articles[i].primaryImageUrl}">
               </div>
               </div>
                
               `
             };
             };
    

 

