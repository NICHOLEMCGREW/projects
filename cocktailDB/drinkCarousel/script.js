const buttons = document.querySelectorAll("[data-carousel-button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button 
        .closest("[data-carousel")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    // let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks[0].strDrinkThumb)
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        const images = document.querySelector("img").src = data.drinks[0].strDrinkThumb

        function makeCarousel(imgID) {
            const slides = document.g
        }
        
        setInterval(function(){
            console.log("I run every 2 seconds indefinitely");
            }, 20000)
        
        
            let i = 0;
        
            setInterval(function(){ 
                console.log("I run every 20 seconds indefinitely");
                if(i == 0) {
                  images[i].style.display = 'block';
                } else if(i == images.length ) {
                  images[i - 1].style.display = 'none';
                  images[0].style.display = 'block';
                  i = 0;
                } else {
                  images[i - 1].style.display = 'none';
                  images[i].style.display = 'block';
                }
                
               i++;
               
              }, 200000);
        })
        
        .catch(err => {
            console.log(`error ${err}`)
        });     
}

getDrink()
