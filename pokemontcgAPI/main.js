function getPokemon() {
    fetch(`https://api.pokemontcg.io/v2/cards?q=${name}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        // document.querySelector('h1').innerText = data.slip.advice
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

getPokemon()

const pokedex = document.getElementById("pokedex");
// console.log(pokedex)
console.log(data.abilities)

const fetchPokemon = () => {

    const promises = [];
    for ( let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

        Promise.all(promises).then((results) => {
            const pokemon = results.map((result) => ({
                name: result.name,
                id: result.id, 
                image: result.sprites['front_default'],
                type: result.types.map((type) => type.type.name).join(', '),
                ability: result.abilities.map((ability) => ability.abilities.name).join(', '),
            }));
            displayPokemon(pokemon)
        });
};

const displayPokemon = (pokemon) => {
    // console.log(pokemon)
    const pokemonHTMLString = pokemon
        .map( 
            (pokeman) => 
                `
    <li class="card">
        <img class="card-image" src="${pokeman.image}" />
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p class="card-subtitle">Type: ${pokeman.type}</p>
        <p class="card-subtitle">Abilities: ${pokeman.abilities}</p>
    </li>
    `
    )
    .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();