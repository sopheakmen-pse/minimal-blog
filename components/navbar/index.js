let menu = {
    logo:'Personally',
    item:["Daily Digest","Design Tools","Tutorials","Subscribe"]
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