

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
<button>👋 Meet Personally</button>
<h1>Minimal blog template for <br> creative expressions</h1>
<p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

`;

// if (links[0,1,2].url === "/components/category/categorypage.html?category=dailytrends"){
//     document.getElementById("hero") .innerHTML =`
// <button>👋 Hello my friends</button>
// <h1>Minimal blog template for <br> creative expressions</h1>
// <p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

// `
// }else if (links[0,1,2].url === "/components/category/categorypage.html?category=developmenttools"){
//     document.getElementById("hero") .innerHTML =`
// <button>👋 Nigga</button>
// <h1>Minimal blog template for <br> creative expressions</h1>
// <p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

// `
// }else if (links[0,1,2].url === "/components/category/categorypage.html?category=tutorails"){
//     document.getElementById("hero") .innerHTML =`
// <button>👋 ni hoa ma</button>
// <h1>Minimal blog template for <br> creative expressions</h1>
// <p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

// `
// };
