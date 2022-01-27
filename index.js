const search = "https://pokeapi.co/api/v2/pokemon/"
const searchName = document.getElementById('search-bar')
const randButtom = document.getElementById('encounter')
const pokepic = document.getElementById('pokemon')
const pokeName = document.getElementById('nameHolder')
const pokeHeight= document.getElementById('heightHolder')
const pokeWeight = document.getElementById('weightHolder')
const pokeTypes = document.getElementById('typesHolder')
const searchButton = document.getElementById('search')
const johto = document.getElementById('Johto')
const hoenn = document.getElementById('Hoenn')
const sinnoh = document.getElementById('Sinnoh')
const unova = document.getElementById('Unova')
const kalos = document.getElementById('Kalos')
const alola = document.getElementById('Alola')
const galar = document.getElementById('Galar')
const mapList = document.getElementById('region-pokemon-container')

addEventListener('DOMContentLoaded', ()=> {
    pokeSearch('pikachu')
    //generates random encounter
    randButtom.addEventListener("click", ()=> rnde())

    //searches for the pokemon by name when the search button is clicked
    searchButton.addEventListener('click', ()=> pokeSearch(searchName.value.toLowerCase()))
})


//parses data from pokemon search fetch request
function pokeSearch(pokename){
    fetch(`${search}${pokename}`)
    .then(promise => promise.json())
    .then(pokemon => {

    //finds pokemon name and returns it in uppercase
    let newFirst = pokemon.name[0].toUpperCase()
    let newName = pokemon.name.split('')
    newName.shift()
    newName.unshift(newFirst)
    let finalName = newName.join('')
    pokeName.textContent = `Name: ${finalName}`

    //returns pokemon height
    let newHeight = (pokemon.height * 0.328084).toFixed(2)
    pokeHeight.textContent = `Height: ${newHeight} ft`

    //returns pokemon weight
    let newWeight = (pokemon.weight * 0.220462).toFixed(2)
    pokeWeight.textContent = `Weight: ${newWeight} lbs`

    //returns pokemon type
    pokeTypes.textContent = `Type: ${pokemon["types"]["0"]["type"]["name"]}`

    //returns pokemon image with a 1/10 chance of being shiny
    if(getRandomIntInclusive(1, 10) != 10){
        pokepic.src = pokemon.sprites["front_default"]
    }
    else{
        pokepic.src = pokemon.sprites["front_shiny"]
    }
    })}

//Pokemon by region by max ID
//kanto-151
//Johto - 251
//Hoenn - 386
//Sinnoh - 493
//Unova - 649
//Kalos - 721
//Alola - 809
//Galar - 890 

kanto.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=151')
    .then(prom=>prom.json())
    .then(pokemons=>{
    nameGetter(pokemons, 1, 151)
    })    
})

johto.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=251')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 151, 251)
    })    
})

hoenn.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=386')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 251, 386)
    })    
})

sinnoh.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=493')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 386, 493)
    })    
})

unova.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=649')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 493, 649)
    })    
})

kalos.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=721')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 649, 721)
    })    
})

alola.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=809')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 721, 809)
    })    
})

galar.addEventListener('click', ()=> {
    removeAllChildNodes(mapList)
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=890')
    .then(prom=>prom.json())
    .then(pokemons=>{
    console.log(pokemons.results[0].name)
    nameGetter(pokemons, 809, 890)
    })    
})

function nameGetter(pokemons, first, last){
    for(i = first; i < last; i++){
        let newFirst = pokemons.results[i].name[0].toUpperCase()
        let newName = pokemons.results[i].name.split('')
        newName.shift()
        newName.unshift(newFirst)
        let finalName = newName.join('')
        let newestName = document.createElement('li')
        newestName.innerText = finalName
        mapNameListener(newestName)
        mapList.appendChild(newestName)
    }
}

function mapNameListener(item){
    item.addEventListener('click', ()=>{
        pokeSearch(item.innerText.toLowerCase())
    })
}

//rng for encounters
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//displays stats of random pokemon when button is clicked
function rnde(){
    let num = getRandomIntInclusive(1,890)
    pokeSearch(num)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

