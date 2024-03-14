function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    alert("Performing search for: " + searchTerm);
  }
  function handleSubmit() {
    alert("Form submitted!");
  }
  document.getElementById("searchButton").addEventListener("click", handleSearch);
  document.getElementById("submitButton").addEventListener("click", handleSubmit);