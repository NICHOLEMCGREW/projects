// const key = 'e26726f7919ac5946074f91f62b7d900'
// document.querySelector('button').addEventListener('click', getQuote)

fetch('https://favqs.com/api/qotd', {    
    method: 'GET',    
    withCredentials: true,    
    crossorigin: true,    
    mode: 'no-cors',       
  })    
    .then((res) => res.json())    
    .then((data) => {    
      console.log(data);    
    })    
    .catch((error) => {    
      console.error(error);    
    });    
};  