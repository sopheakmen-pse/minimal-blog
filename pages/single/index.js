


// const navbar = {
//     logo: "Personaly",
//     catigory:[ "Daily Digest", "Design Tools", "Tutorials", "Subscribe"]

// }
// document.getElementById('container-navbar').innerHTML+=`
//  <div class ="logo"><a href="">${navbar.logo}</a></div>
//  <div class ="navbar-iterm">
//  <a href="">${navbar.catigory[0]}</a>
//  <a href="">${navbar.catigory[1]}</a>
//  <a href="">${navbar.catigory[2]}</a>
//  </div>
//  <div class ="subscribebtn" style="color:white;><a href="">${navbar.catigory[3]}</a></div>
// `;

import navbar from "../../components/navbar/index.js";




document.getElementById("pharagrap") .innerHTML = `

<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: center;
font-family:sans-serif;
font-size:60px;
margin-top:100px;
">10 hilarious NFT sales that <br> broke the internet</h1>


<p style="text-align:  center; line-height: 40px; font-family:sans-serif; font-size:15px;">
AUGUST 13, 2021 • <b> Daily digest </b> </p>`

const imgUrls1 = [

    "https://media.istockphoto.com/id/1205285884/photo/computer-hacker-coding-on-keyboard-on-a-background-of-monitors.webp?s=2048x2048&w=is&k=20&c=iNIa8lpBTdbtm9M0eQwe6kuRvk8oKhE8LFzCRIBywAg=",
  ];
 for (let i = 0; i <1 ;i++){
    document.getElementById("img-1").innerHTML+= `

 <img src="${imgUrls1[0]}"/>

 `;
 document.getElementById("pharagrap-1").innerHTML=`
 <p>
Design comps, layouts, wireframes—will your clients accept that you go about <br> 
things the facile way? Authorities in our business will tell in no uncertain terms <br> 
that Lorem Ipsum is that huge, huge no no to forswear forever. <br> <br> 

Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br>
its use is merely the symptom of a worse problem to take into consideration. <br> <br>

The toppings you may chose for that TV dinner pizza slice when you forgot to <br>
shop for foods, the paint you may slap on your face to impress the new boss is <br>
your business. But what about your daily bread? 
 </p>
 `
 }
 function createImageWithTitle(imageSrc, titleText) {
   let container = document.getElementById("imageContainer");


   let img = document.createElement("img");
    img.src = imageSrc;

   let title = document.createElement("div");
    title.classList.add("image-title");
    title.textContent = titleText;


    container.appendChild(img);
    container.appendChild(title);
  }


  createImageWithTitle("in.avif", "UI/UX DESIGNER");

  document.getElementById("pharagrap-2").innerHTML=`
  <p>The toppings you may chose for that TV dinner pizza slice when you forgot to <br>
   shop for foods, the paint you may slap on your face to impress the new boss is <br>
    your business. But what about your daily bread? Not so fast, I'd say, there are <br>
     some redeeming factors in favor of greeking text, as its use is merely the <br>
      symptom of a worse problem to take into consideration. <br> <br>

  Design comps, layouts, wireframes—will your clients accept that you go about <br> 
  things the facile way? Authorities in our business will tell in no uncertain terms <br> 
  that Lorem Ipsum is that huge, huge no no to forswear forever. </p>
`

  document.getElementById("quote").innerHTML=`
  <p>Design comps, layouts, wireframes—we believe <br>
  that clients will surely accept that you go about <br>
  things the facile way. It’s a matter of time.</p>
  
  `
  document.getElementById("pharagrap-3").innerHTML=`
  <p>Design comps, layouts, wireframes—will your clients accept that you go about <br>
   things the facile way? Authorities in our business will tell in no uncertain terms <br> 
   that Lorem Ipsum is that huge, huge no no to forswear forever. <br> <br>

  The toppings you may chose for that TV dinner pizza slice when you forgot to <br>
   shop for foods, the paint you may slap on your face to impress the new boss is <br>
    your business. But what about your daily bread? Not so fast, I'd say, there are <br>
    some redeeming factors in favor of greeking text, as its use is merely the <br>
    symptom of a worse problem to take into consideration. <br> <br>
  
  Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br>
   its use is merely the symptom of a worse problem to take into consideration. <br> <br>
  
  Design comps, layouts, wireframes—will your clients accept that you go about <br>
   things the facile way? Authorities in our business will tell in no uncertain terms <br>
    that Lorem Ipsum is that huge, huge no no to forswear forever. </p>
  `

  import articles from "../../data/articleData.js";
  // import articleContainer from "../../components/acticle card/acticlecard.js";
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

  
     document.getElementById("footer").innerHTML=`
     <p>Copyright 2021 - Elikem Daniels</p>
     
     `

import herotext from "../../components/hero/hero.js";
import handleSearch from "../../components/button/subscribeform.js";