//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// homework -- add names with spaces and cylce through drinks with a carolsel and add another thing to show up. also do the Nasa picture of the day API
//loop through and use a set interval

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

        // function makeCarousel(imgID) {
        //     const slides = document.g
        // }
        
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

