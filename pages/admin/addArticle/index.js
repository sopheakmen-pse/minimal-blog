document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu a');
  
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Remove the 'active' class from all menu items
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked menu item
        this.classList.add('active');
      });
    });
  
    const navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });
  