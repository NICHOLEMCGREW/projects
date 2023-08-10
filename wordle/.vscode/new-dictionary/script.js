let wrapper = document.querySelectorAll('wrapper');
let searchInput = document.querySelector('input');
let synonyms = document.querySelector('.synonyms .list')
let infoText = document.querySelector('.info-text');
let volumeIcon = document.querySelector('.word i');
let removeIcon = document.querySelector('.search span')
let audio;

// data funciton
function data(result, word) {
    
    if (result.title) { // if api returns the message of can't find word
         infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please search a different word.`;
    } else {
        // console.log(result)
        wrapper.classList.add('active');
        let definitions = result[0].meanings[0].definitions[0],
        phonetics = `${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}/`

        // pass response data to particular html element
        document.querySelector('.word p').innerText = result[0].word;
        document.querySelector('.word span').innerText = phonetics;
        document.querySelector('.meaning span').innerText = definitions.definition;
        document.querySelector('.example span').innerText = definitions.example;
        audio = new Audio('https:' + result[0].phonetics[0].audio) // create new audio obj and passing audio scr

        if (definitions.synonym[0] == undefined) { // if there are no synonyms, then hide the div
            synonyms.parentElement.style.display = 'none';
        } else {
            synonyms.parentElement.style.display = 'block';
            synonyms.innerHTML = '';
            for (let i = 0; i < 5; i++) { // getting 5 synonyms
                let tag = `<span onclick=search('${definitions.synonym[i]}')>${definitions.synonym[i]},</span>`;
                synonyms.insertAdjacentHTML('beforeend', tag) // passing all 5 inside synonym div
            }
        }
    }
}

function search(word) {
    searchInput.value = word;
    fetchApi(word);
    wrapper.classList.remove('active');
}

//fetch api function
function fetchApi(word) {
    wrapper.classList.remove('active');
    infoText.style.color = '#000'; 
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // fetching api response and returning it with parsing into js obj and in another then 
    // method calling data function with passing api response and searched word as an argument
    fetch(url).then(res => res.json()).then(result => data(result, word));
}

searchInput.addEventListener('keyup', e => {
    if(e.key === "Enter" && e.target.value) {
        fetchApi(e.target.value);
    }
});

volumeIcon.addEventListener('click', () => {
    audio.play()
})

removeIcon.addEventListener('click', () => {
    searchInput.value = "";
    searchInput.focus();
    wrapper.classList.remove('active');
    infoText.style.color = '#9a9a9a'; 
    infoText.innerHTML = 'Type a word and press enter to get meaning, example, pronunciation, and synonums of the word.';
})