// Import Data
import articles from "../../data/articles.js";
import categories from "../../data/categories.js";

// Import UI components
import createNavbar from "../../components/navbar/index.js";
import createFooter from "../../components/footer/index.js";
import createArticleCard from "../../components/articleCard/index.js";
import createHeroSection from "../../components/heroSection/index.js";


function loadArticlesByCategory(category, numberOfArticles) {
    let cards = [];
    let count = 1;
    for(let i=0; i<articles.length; i++) {
        if(articles[i].category === category) {
            if(count <= numberOfArticles){
                cards.push(createArticleCard(articles[i]));
                
                // if count is reached, stop loop
                if(count === numberOfArticles) break;

                count++;
            }
        }
    }
    return cards;
}

function loadAllArticleCategories() {
    let categoryBlocks = [];

    for(let i=0; i<categories.length; i++) {
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
    
        const articleLayout = loadArticlesByCategory(categories[i], 3);
        block.append(...articleLayout);
    
        categoryBlocks.push(block);
    }
    return categoryBlocks;
}




// Build UI
const body = document.body;
const navbar = createNavbar();
const hero = createHeroSection("Minimal Blog Template for creative expressions", "100% customisable and SEO-friendly blog template for personal and commercial purposes.");
const allCategories = loadAllArticleCategories();
const footer = createFooter();

body.prepend(navbar, hero, ...allCategories, footer);

