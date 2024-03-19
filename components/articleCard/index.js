function createArticleCard(article) {
    const card = document.createElement("a");
    card.setAttribute("href", `/pages/single/single.html?id=${article.id}`);
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-info">
            <span class="sub-title">${article.publishDate}</span>
            <h2 class="title">${article.title}</h2>
            <p class="sub-title">${article.paragraphs[0]}</p>
        </div>
        <div class="card-image">
            <img src="${article.primaryImageUrl}" alt="article-image">
        </div>
    `;
    return card;
}


// Test article card component
// const article = {
// id: "17",
// title: "Responsive Design Beyond Mobile: Optimizing for Wearables",
// category: "tutorials",
// primaryImageUrl:
//     "https://www.mindstask.com/en/wp-content/uploads/2020/08/frontendSmallBanner.jpg",
// secondaryImageUrl:
//     "https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg",
// publishDate: "2024-03-02",
// paragraphs: [
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
//     "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
//     "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
//     "Nullam quis risus eget urna mollis ornare vel eu leo.",
//     "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//     "Donec ullamcorper nulla non metus auctor fringilla.",
// ],
// };

// document.body.prepend(createArticleCard(article))

export default createArticleCard;