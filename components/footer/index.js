function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Copyright 2024 - WMAD Class - School Of Business (PSE)";

    return footer;
}

// Test footer component
// document.body.append(createFooter());

export default createFooter;