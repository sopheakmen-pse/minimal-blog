function createHeroSection(title, subtitle) {
    const hero = document.createElement("div");
    hero.classList.add("hero");
    hero.innerHTML = `
    <div class="sub-container">
        <h1 class="hero-title">
            ${title}
        </h1>
        <p class="hero-subtitle">
            ${subtitle}
        </p>
    </div>
    `;
    return hero;
}

// Test hero section component
// document.body.prepend(createHeroSection("CSS Gradient Text", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat delectus similique neque iure unde sunt totam consequatur voluptatem? Est explicabo numquam dicta ducimus dolorem. Quibusdam atque corporis voluptatem."));

export default createHeroSection;