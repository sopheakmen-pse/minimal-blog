// Import Data
import articles from "../../data/articles.js";
import categories from "../../data/categories.js";

// Import UI components
import createNavbar from "../../components/navbar/index.js";
import createFooter from "../../components/footer/index.js";
import createArticleCard from "../../components/articleCard/index.js";
import createHeroSection from "../../components/heroSection/index.js";

const navbar = createNavbar();
const footer = createFooter();
const hero = createHeroSection("title", "subtitle");
