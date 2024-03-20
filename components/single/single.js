import articles from "../../components/category/data.js";
import { getParamFromUrl } from "../../src/js/global.js";

console.log(articles.length);

const id = getParamFromUrl("id");


// const params = window.location.search;
// const urlParam = new URLSearchParams(params);

// const articleId = urlParam.get("article");

for (var i=0;i<articles.length;i++){
    if (articles[i].id === id){
      document.getElementById('single-ariticle').innerHTML +=`
      <div class="each-article">
          <div class="date-category">
          <p>${articles[i].publishDate}</p>-<b>${articles[i].category}</b>
          </div>
          <div class="imagess"><img src="${articles[i].primaryImageUrl}"></img></div>
          <div class="txt1">
          <p>${articles[i].paragraphs[0]}</p>
          <p>${articles[i].paragraphs[1]}</p>
          <p>${articles[i].paragraphs[2]}</p>
          </div>
          <div class="imagess"><img src="${articles[i].primaryImageUrl}"></img></div>
          <p>IMAGE CAPTION OR CREDIT</p>
          <div class="txt2">
          <p>${articles[i].paragraphs[3]}</p>
          <p>${articles[i].paragraphs[4]}</p>
          <p class="qoaut">${articles[i].paragraphs[5]}</p>
          <p>${articles[i].paragraphs[6]}</p>
          <p>${articles[i].paragraphs[7]}</p>
          <p>${articles[i].paragraphs[8]}</p>
          <p>${articles[i].paragraphs[9]}</p>
          </div>
    </div>
      `
    }
  }

  for (let i = 0; i < 3; i++) {
    if (articles[i].category === "dailytrends"){
        document.getElementById('article-bottom').innerHTML += `
        <div class="contain-box">
        <div class="each-box">
        <div class="txt">
        <p>${articles[i].publishDate}</p>
        <a href="/components/single/single.html?id=${articles[i].id}">${articles[i].title}</a>
        <p>${articles[i].paragraphs[0]}</p>
        </div>
        <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
        </div>
        </div>`
    };
  };


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

document.getElementById("hero") .innerHTML =`
<h1>10 hilarious NFT sales that<br> broke the internet </h1>

`;


