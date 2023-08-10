const text = document.querySelector('.quote')
const author = document.querySelector('.author')
const nextBtn = document.querySelector('.next')
const tweetBtn = document.querySelector('.twitter-share-button')

  function getQuote() {
    const url = 'https://type.fit/api/quotes' 

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(quotes => {
      console.log(quotes)
      const num = Math.floor(Math.random()*quotes.length)
      const item = quotes[num]
      const quote = item.text
      const authorName = item.author
      text.innerText = quote
      author.innerText = authorName
      tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`
      console.log(quote)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

nextBtn.addEventListener('click', getQuote)

getQuote()