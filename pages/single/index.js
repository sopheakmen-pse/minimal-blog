import articles from "../../src/js/global.js";

const body = document.body;
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Remove the 'active' class from all menu items
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });

      // Add the 'active' class to the clicked menu item
      this.classList.add('active');
    });
  });

  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
});

document.getElementById("paragraph") .innerHTML = `
<h1 id="title" style=" font-weight: bold; background-image: linear-gradient(60deg,#C41740,#EA9C28);  -webkit-background-clip :text;
color: transparent; text-align: center; font-family:sans-serif; font-size: 70px; margin-top:50px;"> 10 hilarious NFT sales that <br> broke the internet </h1>

<p style="text-align: center; font-family: sans-serif; font-size:15px; line-height: 1.5 ; color: #476457; margin-top:10px">  AUGUST 13, 2021 • <b style="color:black;"> DAILY DIGEST <b> </p>
`;

const parameterString = window.location.search;
const urlParams = new URLSearchParams(parameterString);
const articleId = urlParams.get("id");

import articleles from "../../src/js/global.js";
console.log(articleles.length)

for (let i=0 ; i<articleles.length; i++) {
  if(articleles[i].id=== articleId){
      document.getElementById("single").innerHTML += `
      <div class="image">
      <img src="${articleles[i].primaryImageUrl}" alt="">
  </div>
  <div class="box1">
      <div class="single-text">
          <p> ${articleles[i].paragraphs[0]} </p>
          <p>${articleles[i].paragraphs[1]}</p>
          <p>${articleles[i].paragraphs[2]} </p>
      </div>
      <div class="image-caption">
           <img src="${articleles[i].secondaryImageUrl}" alt="">
           <p>Image caption or credit</p>
      </div>
      <div class="single-text">
          <p> ${articleles[i].paragraphs[3]}</p>
          <p>${articleles[i].paragraphs[4]}</p>

      </div>
      <div class="container">
              <div class="text">
                  <h1>${articleles[i].paragraphs[5]}</h1>
              </div>
          </div> 
          <div class="single-text">
              <p>${articleles[i].paragraphs[6]} <br><br>
              ${articleles[i].paragraphs[7]} <br><br>
              ${articleles[i].paragraphs[8]}<br><br>
              ${articleles[i].paragraphs[9]}<br><br>
              </p>
          </div>
     
  </div>`
  };

}; 
for (let i = 0; i < 4; i++) {
  if (articles[i].category === "daily trends"){
      document.getElementById('Daily Trends').innerHTML += `
      <div class="contain-box">
      <div class="each-box">
      <div class="txt">
      <p>${articles[i].publishDate}</p>
      <a href="">${articles[i].title}</a>
      <p>${articles[i].paragraphs[0]}</p>
      </div>
      <div class="images"><img src="${articles[i].primaryImageUrl}"></img></div>
      </div>
      </div>`
  };
};


document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var email = document.getElementById("emailInput").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }
  console.log("Subscribed with email: " + email);

  document.getElementById("emailInput").value = "";
  alert("Thank you for subscribing!");
});

 




