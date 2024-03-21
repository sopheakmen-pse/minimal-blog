function getValueUrlParamByKey(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function loadArticlesById(id, articles) {
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === id) {
      return articles[i];
    }
  }
}

function loadArticlesByCategory(category, articles, nbArticles) {
  let items = [];
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].category === category) {
      if (items.length === nbArticles) {
        break;
      }
      items.push(articles[i]);
    }
  }
  return items;
}

export { getValueUrlParamByKey, loadArticlesById, loadArticlesByCategory };
