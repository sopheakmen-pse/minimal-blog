export default handleSearch;
document.getElementById("pharagrap") .innerHTML = `
<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: center;
font-family:sans-serif;
font-size:30px;
">Personally Newsletter</h1>


<p style="line-height:2;font-family:sans-serif; font-size:30px;">A bi-weekly newsletter of design inspiration, resources <br> and anything related to career development.</p>`

  function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    alert("Performing search for: " + searchTerm);
  }

  document.getElementById("searchButton").addEventListener("click", handleSearch);



