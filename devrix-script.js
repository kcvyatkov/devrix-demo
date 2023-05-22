fetch('https://api.openweathermap.org/data/2.5/weather?q=Sofia,bg&appid=b756f2f26b03879b87e8a2edfa36af69')
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(data.main.temp - 273.15); // convert temperature from Kelvin to Celsius
        document.getElementById('weather').innerHTML = ` ${temperature}&deg;, Sofia`;
    })
    .catch(error => console.error(error));




        document.addEventListener('DOMContentLoaded', function() {
            // Get the hamburger and header-nav elements
            const hamburger = document.querySelector('.hamburger');
            const headerNav = document.querySelector('.header-nav');
        
            // Add an event listener to the hamburger element
            hamburger.addEventListener('click', function() {
            // Toggle the class to show/hide the header-nav
            headerNav.classList.toggle('show');
            hamburger.classList.toggle('close');
            });
        });
        
        
                var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-145px";
  }
  prevScrollpos = currentScrollPos;
}