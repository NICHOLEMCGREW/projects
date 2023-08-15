document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.meals[0])

        document.querySelector('.title').innerText = data.meals[0].strMeal
        document.querySelector('.category').innerText = data.meals[0].strCategory
        
        document.querySelector('.ingredients1').innerText = data.meals[0].strIngredient1
        document.querySelector('.ingredients2').innerText = data.meals[0].strIngredient2
        document.querySelector('.ingredients3').innerText = data.meals[0].strIngredient3
        document.querySelector('.ingredients4').innerText = data.meals[0].strIngredient4
        document.querySelector('.ingredients5').innerText = data.meals[0].strIngredient5
        document.querySelector('.ingredients6').innerText = data.meals[0].strIngredient6
        document.querySelector('.ingredients7').innerText = data.meals[0].strIngredient7
        document.querySelector('.ingredients8').innerText = data.meals[0].strIngredient8
        document.querySelector('.ingredients9').innerText = data.meals[0].strIngredient9
        document.querySelector('.ingredients10').innerText = data.meals[0].strIngredient10
        document.querySelector('.ingredients11').innerText = data.meals[0].strIngredient11
        document.querySelector('.ingredients12').innerText = data.meals[0].strIngredient12
        document.querySelector('.ingredients13').innerText = data.meals[0].strIngredient13

        document.querySelector('.recipe').innerText = data.meals[0].strInstructions

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

