function createImageWithTitle(imageSrc, titleText) {
   let container = document.getElementById("imageContainer");


   let img = document.createElement("img");
    img.src = imageSrc;

   let title = document.createElement("div");
    title.classList.add("image-title");
    title.textContent = titleText;


    container.appendChild(img);
    container.appendChild(title);
   }


  createImageWithTitle("o.jpg", "Water melon");

