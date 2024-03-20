


document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("emailInput").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    console.log("Subscribed with email: " + email);

    document.getElementById("emailInput").value = "";
    alert("Thank you for subscribing!");
});