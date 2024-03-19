
const navbar = {
    logo: "Personally",
    catigory:[ "Daily Trends", "Development Tools", "Tutorials", "Subscribe"]

}
document.getElementById('container-navbar').innerHTML+=`
 <div class ="logo"><a href="../../pages/home/index.html?category=home page">${navbar.logo}<sup style="font-size:15px;">TM</sup></a></div>
 <div class ="navbar-iterm">
 <a href="../../pages/category/Daily Digest.html?category=daily trends">${navbar.catigory[0]}</a>
 <a href="../../pages/category/Design Tools.html?category=Development tool">${navbar.catigory[1]}</a>
 <a href="../../pages/category/Tutorials.html?category=tutorials">${navbar.catigory[2]}</a>
 </div>
 <div class ="subscribebtn" style="color:white;><a href="">${navbar.catigory[3]}</a></div>
`;

export default navbar;