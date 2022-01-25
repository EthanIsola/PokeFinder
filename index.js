let search = "https://pokeapi.co/api/v2/pokemon/"
let name = document.getElementById('search-bar')
randButtom = document.getElementById('encounter')
sideList = document.getElementById('pokemon-list')
pokepic = document.getElementById('pokemon')



addEventListener('DOMContentLoaded', ()=> {
    pokeSearch('pikachu')
})


//parses data from pokemon search fetch request
function pokeSearch(pokename){
    fetch(`${search}${pokename}`)
    .then(promise => promise.json())
    .then(pokemon => {
        console.log(pokemon)
    for(let stat in pokemon){
        console.log(stat)
        //updates page to display pokemon image
        if (stat == "sprites"){
            for(let sprite in stat){
                if(sprite = "front_default"){
                    
                    let newElement = document.createElement('img')
                    pokepic.src = pokemon[stat][sprite]
                }
            }
        }

        //updates page to display pokemons name
        if (stat == "name"){
            let newElement = document.createElement('li')
            newElement.innerText = pokemon[stat]
            sideList.appendChild(newElement)
        }

        //updates page to display pokemons height
        else if(stat == "height"){
            let newElement = document.createElement('li')
            newElement.textContent = pokemon[stat]
            console.log(newElement)
            sideList.appendChild(newElement)    
        }

        //updates page to display pokemons weight
        else if(stat == "weight"){
            let newElement = document.createElement('li')
            newElement.innerText = `${pokemon[stat]}`
            sideList.appendChild(newElement)
        }

        //updates page to display pokemons type(s)
        else if(stat = "types"){
            for(let item of stat){
                if(item == "type"){
                    let newElement = document.createElement('li')
                    newElement.innerText = pokemon[stat][item]
                    sideList.appendChild(newElement)
                }
            }
        }
    }})
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
// function mapListener(){
//     .addEventListener('click', ()=>{
        
//     })
// }

//rng for encounters
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//generates random encounter
randButtom.addEventListener('click', rnde())

//displays stats of random pokemon when button is clicked
function rnde(){
    let num = getRandomIntInclusive(1,890)
    pokeSearch(num)
}
