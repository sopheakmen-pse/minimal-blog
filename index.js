function createFooter(index) {
    const footer = document.createElement("div");
    footer.innerText = "Copyright 2024" + "- " + index;
    return footer;
}

const body = document.body;
body.insertBefore(createFooter(1), document.getElementById("global-script"));
body.insertBefore(createFooter(2), document.getElementById("global-script"));
body.insertBefore(createFooter(3), document.getElementById("global-script"));
