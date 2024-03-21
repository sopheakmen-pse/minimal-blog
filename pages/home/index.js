import articles from "../../src/js/global.js";

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });

      
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

for (let i = 0; i < 3; i++) {
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


for (let i = 0; i <articles.length; i+=2) {
  if (articles[i].category === "development tools"){
      document.getElementById('Development Tools').innerHTML += `
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


for (let i = 0; i <articles.length; i+=2) {
  if (articles[i].category === "tutorials"){
      document.getElementById('Tutorials').innerHTML += `
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
// subcriber

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










