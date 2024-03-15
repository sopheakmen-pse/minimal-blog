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
<p id="button" style="text-align: center; display: flex; height:40px; width:200px; margin-top:100px; 
font-family:sans-serif; background-color:rgb(236, 235, 235); justify-content: center; margin-left:45%; 
border-radius: 20px; align-items: center;">👋  Meet Personally </p>



<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: center;
font-family:sans-serif;
font-size:65px;
">Minimal blog template for <br> creative expressions</h1>


<p style="text-align:  center; line-height: 40px; font-family:sans-serif; font-size:25px;">
100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>`

