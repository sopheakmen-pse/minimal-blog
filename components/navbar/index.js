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