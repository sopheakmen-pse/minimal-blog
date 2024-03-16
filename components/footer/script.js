document.getElementById("button").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var emailInput = document.getElementById("email").value;
    localStorage.setItem("userEmail", emailInput);
    document.getElementById("subscribeMessage").textContent = "Thank you for subscribing!" ;
  });
  var urlParams = new URLSearchParams(window.location.search);
  var category = urlParams.get('category');
  
  if (category) {
    console.log('Category:', category);
  }
