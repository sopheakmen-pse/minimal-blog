import createNavbar from "../../components/navbar/index.js";
import createFooter from "../../components/footer/index.js";

const body = document.body;
const navbar = createNavbar();
const footer = createFooter();

body.prepend(navbar,footer);

