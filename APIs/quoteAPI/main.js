// const key = 'e26726f7919ac5946074f91f62b7d900'
document.querySelector('button').addEventListener('click', getQuote)

// fetch('https://favqs.com/api/qotd')    
//     .then((res) => res.json())    
//     .then((data) => {    
//       console.log(data);    
//     })    
//     .catch((error) => {    
//       console.error(error);    
//     });    
//   }

  // document.querySelector('button').addEventListener('click', getFetch)

function getQuote(){
  // const choice = document.querySelector('input').value
  const url = 'https://zenquotes.io/api/today'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
