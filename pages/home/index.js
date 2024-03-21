// Import Data
import articles from "../../data/articles.js";
import categories from "../../data/categories.js";

// Import UI components
import createNavbar from "../../components/navbar/index.js";
import createFooter from "../../components/footer/index.js";
import createArticleCard from "../../components/articleCard/index.js";
import createHeroSection from "../../components/heroSection/index.js";
import { loadArticlesByCategory } from "../../src/js/helper.js";

function loadHomeArticles() {
  let categoryBlocks = [];

  for (let i = 0; i < categories.length; i++) {
    const block = document.createElement("section");
    block.classList.add("sub-container", "category-section");

    const viewAllButton = document.createElement("a");
    viewAllButton.classList.add("button");
    viewAllButton.textContent = "View All";

    const blockTitle = document.createElement("h2");
    blockTitle.classList.add("title");
    blockTitle.textContent = categories[i].toUpperCase();

    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("category-header");
    categoryHeader.append(blockTitle, viewAllButton);
    block.append(categoryHeader);

    const articleList = loadArticlesByCategory(categories[i], articles, 3);
    const articleLayout = articleList.map((article) => {
      return createArticleCard(article);
    });
    block.append(...articleLayout);

    categoryBlocks.push(block);
  }
  return categoryBlocks;
}

// Build UI
const body = document.body;
const navbar = createNavbar();
const hero = createHeroSection(
  "Minimal Blog Template for creative expressions",
  "100% customisable and SEO-friendly blog template for personal and commercial purposes."
);
const allCategories = loadHomeArticles();
const footer = createFooter();

body.prepend(navbar, hero, ...allCategories, footer);
