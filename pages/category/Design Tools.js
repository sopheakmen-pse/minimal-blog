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
font-size:65px;
margin-top:100px;
">Design Tools</h1>


<p style="text-align:  center; line-height: 40px; font-family:sans-serif; font-size:25px;">
A description of the respective category goes right <br> here.  Be as expressive as possible, but in brief.</p>`

