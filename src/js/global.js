function loadScripts() {
    const script1 = document.createElement("script");
    script1.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");

    script1.onload = loadGoogleFont;

    const body = document.body;
    body.appendChild(script1);
}

function loadGoogleFont() {
    WebFont.load({
        google: {
            families: ["Poppins", "sans-serif"]
        }
    });
}

loadScripts();
