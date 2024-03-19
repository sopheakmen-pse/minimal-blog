function getValueUrlParamByKey(key) {
    return new URLSearchParams(window.location.search).get(key);
}