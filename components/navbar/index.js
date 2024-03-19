function createNavbar(activeMenu) {
    let classDailyTrends = "link";
    let classDevelopmentTools = "link";
    let classTutorials = "link";

    if(activeMenu === "daily-trends") classDailyTrends += " active";
    else if(activeMenu === "development-tools") classDevelopmentTools += " active";
    else if(activeMenu === "tutorials") classTutorials += " active";

    const nav = document.createElement("nav");
    nav.classList.add("bottom-shadow");
    nav.innerHTML = `
        <div class="container">
            <div class="navbar">
                <div class="logo">Personally<span>TM</span></div>
                <div class="menu">
                    <ul>
                        <li><a class="${classDailyTrends}" href="../../pages/category/?name=daily-trends">Daily Trends</a></li>
                        <li><a class="${classDevelopmentTools}" href="../../pages/category/?name=development-tools">Development Tools</a></li>
                        <li><a class="${classTutorials}" href="../../pages/category/?name=tutorials">Tutorials</a></li>
                    </ul>
                    <a class="button button-dark" href="#subscribe-form">Subscribe</a>
                </div>
            </div>
        </div>
    `;
    return nav;
}

// Test components
// document.body.prepend(createNavbar());
// document.body.prepend(createNavbar("daily-trends"));
// document.body.prepend(createNavbar("development-tools"));
// document.body.prepend(createNavbar("tutorials"));

export default createNavbar;