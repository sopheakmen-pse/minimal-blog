import articles from "../../components/category/data.js";
import { getParamFromUrl } from "../../src/js/global.js";

console.log(articles.length);

const category = getParamFromUrl("category");

// for (var i=0;i<articles.length;i++){
//   if (articles[i].category === articleId){
//     const div = document.createElement("div");
//     div.classList.add("each-box-bar");
//     div.innerHTML += `
//     <div class="each-article">
//     <div class="each-box">
//         <div class="txt">
//         <p>${articles[i].publishDate}</p>
//         <a href="">${articles[i].title}</a>
//         <p>${articles[i].paragraphs[0]}</p>
//         </div>
//         <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
//         </div>
//         </div>
//     `
//     document.body.append(div);
//   }
// }
// console.log(articleId);


for (var i=0;i<articles.length;i++){
  if (articles[i].category === category){
    document.getElementById('each-article-bar').innerHTML +=`
    <div class="each-box">
        <div class="txt">
        <p>${articles[i].publishDate}</p>
        <a href="/components/single/single.html?id=${articles[i].id}">${articles[i].title}</a>
        <p>${articles[i].paragraphs[0]}</p>
        </div>
        <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
        </div>
    `
  }
}
console.log(category);



// Function to create a dynamic navbar
function createNavbar(links) {
  const navbarElement = document.getElementById("navbar");
  const nav = document.createElement("nav");



  // Create links and append them to the navbar
  links.forEach(link => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.text;
      nav.appendChild(anchor);
  });

  // Append the navbar to the navbar element in the HTML
  navbarElement.appendChild(nav);
}

// Array of links for the navbar
const links = [
  { text: "Daily Trends", url: "/components/category/categorypage.html?category=dailytrends" },
  { text: "Development Tools", url: "/components/category/categorypage.html?category=developmenttools" },
  { text: "Tutorials", url: "/components/category/categorypage.html?category=tutorails" }
];

// Call the function with the array of links
createNavbar(links);

// hero
if (category === "dailytrends"){
document.getElementById("hero") .innerHTML =`
<h1>Daily Digest</h1>
<p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

`
}else if(category === "developmenttools"){
  document.getElementById("hero") .innerHTML =`
<h1>Design Tools</h1>
<p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

`
}else if(category === "tutorails"){
  document.getElementById("hero") .innerHTML =`
  <h1>Tutorials</h1>
  <p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>
  
  `
};