const hamburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.getElementById("hero") .innerHTML =`
<button>👋 Meet Personally</button>
<h1>Minimal blog template for <br> creative expressions</h1>
<p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

`;

