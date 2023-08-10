//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
  const result = document.querySelector('p');
  const sound = document.getElementById('sound');
  const btn = document.querySelector('button');

  btn.addEventListener('click', () => {
    let inpWord = document.querySelector('p').value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        details.innerHTML = ``;
    });
  });



//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.phonetics[])
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }



//   const word = document.querySelector('h1').value.toLowerCase()
  // console.log(choice)

//   `https://api.nasa.gov/planetary/apod?api_key=lloONK5T5V8bwDwtr8UqGmu2fPtLcgoxdxVQy1MI&date=${choice}`