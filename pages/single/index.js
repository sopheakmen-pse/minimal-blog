let menu = {
    logo: 'Personally',
    item: ["Daily Digest", "Design Tools", "Tutorials", "Subscribe"]
}

document.getElementById("container").innerHTML += `

<div class="logo"  style="font-weight:bold;" ><a href="">${menu.logo}</a></div>
<div class="menu-item">
    <a href="">${menu.item[0]}</a>
    <a href="">${menu.item[1]}</a>
    <a href="">${menu.item[2]}</a>
</div>
<div class="subscribe-button"><a href="">${menu.item[3]}</a></div>

`;
document.querySelector(".container").innerHTML += `
<button class="btn">👋 Meet Personally</button>
<div class="title">
<h1>Minimal blog template for creative expressions</h1>
<p>100% customisable and SEO-friendly blog template for personal and commercial purposes.</p>
</div>
`;
const imageUrls = [
    "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.discordapp.com/attachments/1217354476936101902/1217365075602440283/Blog-image-7-12-2020-Scalable-Secure-Backend-Development.png?ex=6603c293&is=65f14d93&hm=e4a8947456b835e581dcccc2c4d3d236e259b218a2916a4bb9ddaec37ba90af1&",
];
document.getElementById("image").innerHTML +=`
// <img src= "${imageUrls[0]}" style="width: 1500px ; height: 1000px; margin-left: 15%; border-radius: 10px; margin-top: 50px;"/>

<p style="font-size: 23px; width:70%; margin-left: 31%;  line-height: 1.5; gap:30px;">
Design comps, layouts, wireframes—will your clients accept that you go about <br>
things  the facile way? Authorities in our business will tell in no uncertain terms <br>
that Lorem Ipsum is that huge, huge no no to forswear forever. <br> <br>

Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br> 
its use is merely the symptom of a worse problem to take into consideration.<br> <br>

The toppings you may chose for that TV dinner pizza slice when you forgot to <br> 
shop for foods, the paint you may slap on your face to impress the new boss is <br>
your business. But what about your daily bread? </p>

`;

document.getElementById("image").innerHTML +=`
<img src= "${imageUrls[1]}" style="width: 780px ; height: 490px; margin-left: 30%; border-radius: 10px; margin-top: 50px; gap:30px;"/>

<p style="font-size:23px; width:70%; margin-left: 31%; line-height: 1.5;">

The toppings you may chose for that TV dinner pizza slice when you forgot to <br>
shop for foods, the paint you may slap on your face to impress the new boss is <br> 
your business. But what about your daily bread? Not so fast, I'd say, there are <br>
some redeeming factors in favor of greeking text, as its use is merely the <br>
symptom of a worse problem to take into consideration. <br> <br>

Design comps, layouts, wireframes—will your clients accept that you go about<br>
things the facile way? Authorities in our business will tell in no uncertain terms<br>
that Lorem Ipsum is that huge, huge no no to forswear forever. </p>

`;

document.getElementById("text").innerHTML =`
<h1 style="margin-left:29%; gap: 60%; border-left: 10px solid #C41740; font-size: 37px; padding-left: 20px;">
Design comps, layouts, wireframes-we belive <br>that clients will surely accept that you go about <br> things the facile way. It's a matter of time.
</h1>

<p style="font-size:23px; width: 70%; margin-left: 31%; margin-top: 50px; line-height: 1.5; ">

Design comps, layouts, wireframes—will your clients accept that you go about <br>
things the facile way? Authorities in our business will tell in no uncertain terms <br>
that Lorem Ipsum is that huge, huge no no to forswear forever.<br> <br> 

The toppings you may chose for that TV dinner pizza slice when you forgot to <br>
shop for foods, the paint you may slap on your face to impress the new boss is<br>
your business. But what about your daily bread? Not so fast, I'd say, there are <br>
some redeeming factors in favor of greeking text, as its use is merely the<br>
symptom of a worse problem to take into consideration. <br>  <br>

Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br>
its use is merely the symptom of a worse problem to take into consideration. <br> <br>

Design comps, layouts, wireframes—will your clients accept that you go about <br>
things the facile way? Authorities in o </p>`;
