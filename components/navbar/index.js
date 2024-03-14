

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
    { text: "Daily Trends", url: "#" },
    { text: "Development Tools", url: "#" },
    { text: "Tutorials", url: "#" }
];

// Call the function with the array of links
createNavbar(links);

// hero
document.getElementById("hero") .innerHTML =`
<button>👋 Meet Personally</button>
<h1>Minimal blog template for <br> creative expressions</h1>
<p>100% customisable and SEO-friendly blog template <br> for personal and commercial purposes.</p>

`;

