// Import Data
import articles from "../../data/articles.js";

// Import UI components
import createNavbar from "../../components/navbar/index.js";
import createFooter from "../../components/footer/index.js";
import createArticleCard from "../../components/articleCard/index.js";
import createHeroSection from "../../components/heroSection/index.js";
import {
  getValueUrlParamByKey,
  loadArticlesById,
  loadArticlesByCategory,
} from "../../src/js/helper.js";

const id = getValueUrlParamByKey("id");
const article = loadArticlesById(id, articles);

const articleList = loadArticlesByCategory(article.category, articles, 3);
const articleLayout = articleList.map((article) => {
  return createArticleCard(article);
});

const navbar = createNavbar();
const footer = createFooter();
const hero = createHeroSection(article.title, article.paragraphs[0]);

document.body.prepend(navbar, hero, ...articleLayout, footer);
