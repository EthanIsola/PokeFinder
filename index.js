let search = "https://pokeapi.co/api/v2/pokemon/"
let name;
randButtom = document.getElementById('subrandom')
searchButton = document.getElementById('subsearch')
sideList = document.querySelector('ul')
pokepic = document.getElementById('pokemon')



addEventListener('DOMContentLoaded', ()=> {
    fetch(`${search}pikachu`)
    .then(promise => promise.json())
    .then(pokemon => {
    pokeSearch(pokemon)

    })
})


//parses data from pokemon search fetch request
function pokeSearch(pokeList){

    for(let poke of pokeList){
        if (poke = "name"){}
        else if(poke = "height"){}
        else if(poke = "weight"){}
        else if(poke = "types"){
            for(let item of poke){
                if(item = "type"){}
            }
        }
    }
}

//Pokemon by region by max ID
//kanto-151
//Johto - 251
//Hoenn - 386
//Sinnoh - 493
//Unova - 649
//Kalos - 721
//Alola - 809
//Galar - 890 
function mapListener(){
    .addEventListener('click', ()=>{
        
    })
}

//rng for encounters
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//generates random encounter
.addEventListener('click', rnde())
function rnde(){
    let num = getRandomIntInclusive(1,890)
    fetch(`${search}${num}`)
    .then(promise => promise.json())
    .then(pokemon =>{
    pokeSearch(pokemon)
    })
}
