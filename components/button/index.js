

  function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    alert("Performing search for: " + searchTerm);
  }
  document
    .getElementById("searchButton")
    .addEventListener("click", handleSearch);
