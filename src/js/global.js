function getParamFromUrl(paramKey) {
    const params = window.location.search;
    const urlParam = new URLSearchParams(params);
    return urlParam.get(paramKey);
}

export {getParamFromUrl};