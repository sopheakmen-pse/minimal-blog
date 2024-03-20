document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
  
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


  document.getElementById("paragraph") .innerHTML = `
<h1 id="title" style=" font-weight: bold; background-image: linear-gradient(60deg,#C41740,#EA9C28);  -webkit-background-clip :text;
color: transparent; text-align: center; font-family:sans-serif; font-size: 70px;"> Daily Digest </h1>

<p style="text-align: center; font-family: sans-serif; font-size:25px; line-height: 1.5 ; color: #476457; margin-top:-20px"> A description of the respective category goes right <br> here. Be as expressive as possible, but in brief.</p>
`




