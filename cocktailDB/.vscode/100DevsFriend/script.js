const drinkName = document.querySelector('input')
const nameOfDrink = document.querySelector('#name')
const image = document.getElementById('drink-image')
const intructions = document.querySelector('#instructions')
const next = document.getElementById('next')
const back = document.getElementById('back')

const go = document.querySelector('.search-btn').addEventListener('click', getDrink)


function getDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName.value}`)
        .then(res => res.json())
        .then(data => {
            nameOfDrink.innerText = data.drinks[0].strDrink
            intructions.innerText = data.drinks[0].strInstructions
            image.src = data.drinks[0].strDrinkThumb

        })
}
let count = 0

next.addEventListener('click', () =>
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName.value}`)
        .then(res => res.json())
        .then(data => {
            nameOfDrink.innerText = data.drinks[count].strDrink
            intructions.innerText = data.drinks[count].strInstructions
            image.src = data.drinks[count].strDrinkThumb

            count++
        }))

back.addEventListener('click', () =>
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName.value}`)
        .then(res => res.json())
        .then(data => {

            nameOfDrink.innerText = data.drinks[count].strDrink
            intructions.innerText = data.drinks[count].strInstructions
            image.src = data.drinks[count].strDrinkThumb

            count--
        }))

