document.getElementById('pharagrap').innerHTML=`
<h1 id="title" style="  
font-weight: bold; 
background:linear-gradient(60deg,red , yellow);
-webkit-background-clip: text;
color: transparent;
text-align: center;
font-family:sans-serif;
font-size:30px;
">Personally Newsletter</h1>


<p style="line-height: 30px; text-align: center;  font-family:sans-serif; font-size:20px;">A bi-weekly newsletter of design inspiration, resources <br> and anything related to career development.</p>`
 
 
const form = document.getElementById('subscription-form');
const message = document.getElementById('message');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 


 
    const email = document.getElementById('email').value;


    const subscriber = {
      
        email: email
    };

    if (typeof(Storage) !== 'undefined') {
      
        let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

        subscribers.push(subscriber);

        localStorage.setItem('subscribers', JSON.stringify(subscribers));

     
        message.textContent = 'Thank you for subscribing!';
        message.style.color = 'green';

  
        form.reset();
    } else {

        message.textContent = 'Local storage is not supported in this browser.';
        message.style.color = 'red';
    }
});