const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your form!";
        console.log(body);
        form.reset()
      }).catch(error => {
        status.classList.add('success');
        status.innerHTML = "Thanks for your submission!";
      });
    }
    form.addEventListener("submit", handleSubmit)