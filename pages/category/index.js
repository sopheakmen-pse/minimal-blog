// <<<<<<< HEAD
// document.addEventListener("DOMContentLoaded", function() {
//     const menuItems = document.querySelectorAll('.menu-item');
  
//     menuItems.forEach(function(item) {
//       item.addEventListener('click', function() {
//         // Remove the 'active' class from all menu items
//         menuItems.forEach(function(item) {
//           item.classList.remove('active');
//         });
  
//         // Add the 'active' class to the clicked menu item
//         this.classList.add('active');
//       });
//     });
  
//     const navbar = document.getElementById('navbar');
  
//     window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//         navbar.classList.add('sticky');
//       } else {
//         navbar.classList.remove('sticky');
//       }
//     });
//   });


//   document.getElementById("paragraph") .innerHTML = `
// <h1 id="title" style=" font-weight: bold; background-image: linear-gradient(60deg,#C41740,#EA9C28);  -webkit-background-clip :text;
// color: transparent; text-align: center; font-family:sans-serif; font-size: 70px;"> Daily Digest </h1>

// <p style="text-align: center; font-family: sans-serif; font-size:25px; line-height: 1.5 ; color: #476457; margin-top:-20px"> A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>
// `
// =======
import articles from "../../src/js/global.js";

const body = document.body;


const params = window.location.search;
const urlParam = new URLSearchParams(params);
const category = urlParam.get("category");

document.getElementById("paragraph") .innerHTML =`

<h1 id="title" >${category}</h1>

<p>A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>
`;
const articleList = document.getElementById("Daily Digest");



for (let i = 0; i < articles.length; i++) {

    if(articles[i].category === category) {
        const card = document.createElement("a");
        card.classList.add("card");
        card.setAttribute("href","/pages/single/index.html?id="+articles[i].id);
        card.innerHTML +=`
            <div class="card-info">

                <h4>${articles[i].publishDate}</h4>
                <h2>${articles[i].title}</h2>
                <p>${articles[i].paragraphs[0]}</p>
            </div>
            <div class="img"><img src="${articles[i].primaryImageUrl}"></div>
         `;

         articleList.prepend(card);
    };
};

// >>>>>>> main




