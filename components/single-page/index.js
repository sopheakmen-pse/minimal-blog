import articleles from "../../src/js/global.js";
console.log(articleles.length)

for (let i=0 ; i<1; i++) {
    if(articleles[i].category === "daily trends"){
        document.getElementById("single").innerHTML += `
        <div class="image">
        <img src="${articleles[i].primaryImageUrl}" alt="">
    </div>
    <div class="box1">
        <div class="single-text">
            <p> ${articleles[i].paragraphs[0]} </p>
            <p>${articleles[i].paragraphs[1]}</p>
            <p>${articleles[i].paragraphs[2]} </p>
        </div>
        <div class="image-caption">
             <img src="${articleles[i].secondaryImageUrl}" alt="">
             <p>Image caption or credit</p>
        </div>
        <div class="single-text">
            <p> ${articleles[i].paragraphs[3]}</p>
            <p>${articleles[i].paragraphs[4]}</p>

        </div>
        <div class="container">
                <div class="text">
                    <h1>${articleles[i].paragraphs[5]}</h1>
                </div>
            </div> 
            <div class="single-text">
                <p>${articleles[i].paragraphs[6]} </p>
            </div>
       
    </div>`
    };

};
