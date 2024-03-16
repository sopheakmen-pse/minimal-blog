const navbar = {
    logo: "Personaly",
    catigory:[ "Daily Digest", "Design Tools", "Tutorials", "Subscribe"]

}
document.getElementById('container-navbar').innerHTML+=`
 <div class ="logo"><a href="">${navbar.logo}</a></div>
 <div class ="navbar-iterm">
 <a href="">${navbar.catigory[0]}</a>
 <a href="">${navbar.catigory[1]}</a>
 <a href="">${navbar.catigory[2]}</a>
 </div>
 <div class ="subscribebtn" style="color:white;><a href="">${navbar.catigory[3]}</a></div>
`;




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


// document.getElementById("img-1") .innerHTML = `

// `
const imageUrls = [
    "https://media.istockphoto.com/id/1304476690/photo/close-up-ux-developer-and-ui-designer-use-augmented-reality-app-brainstorming-about-mobile.webp?s=2048x2048&w=is&k=20&c=EAJpXnbHcKzP1AefO1xlzspgQgLAlN3oYEQJIAV8A4Y=",
    "https://media.istockphoto.com/id/1205285884/photo/computer-hacker-coding-on-keyboard-on-a-background-of-monitors.webp?s=2048x2048&w=is&k=20&c=iNIa8lpBTdbtm9M0eQwe6kuRvk8oKhE8LFzCRIBywAg=",
  ];
 document.getElementById("img-1").innerHTML += `
 <img src="${imageUrls[0]}"/>
 `;
 for (let i = 0; i < imageUrls.length;i++){
    document.getElementById("img-1").innerHTML+= `
 <img style="boder: 1px solid #ddd; padding:16px;" src="${imageUrls[i]}"/>
 <p id="h">${imageUrls[1]}</p>
 `;
 
 }

