export default handleSearch;
document.getElementById("pharagrap") .innerHTML = `
<h1 id="title">Personally Newsletter</h1>


<p id=p-title>A bi-weekly newsletter of design inspiration, resources <br> and anything related to career development.</p>`

  function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    alert("Performing search for: " + searchTerm);
  }

  document.getElementById("searchButton").addEventListener("click", handleSearch);




