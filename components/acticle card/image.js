function createImageWithTitle(imageSrc, titleText) {
    var container = document.getElementById("imageContainer");


    var img = document.createElement("img");
    img.src = imageSrc;

    var title = document.createElement("div");
    title.classList.add("image-title");
    title.textContent = titleText;


    container.appendChild(img);
    container.appendChild(title);
   }


  createImageWithTitle("o.jpg", "Water melon");
 
