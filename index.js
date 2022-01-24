let search = "https://pokeapi.co/api/v2/pokemon/"
let name;
randButtom = document.getElementById('subrandom')
searchButton = document.getElementById('subsearch')
sideList = document.querySelector('ul')
pokepic = document.getElementById('pokemon')



addEventListener('DOMContentLoaded', ()=> {
    pokeSearch('pikachu')
})


//parses data from pokemon search fetch request
function pokeSearch(pokename){
    fetch(`${search}${name}`)
    .then(promise => promise.json())
    .then(pokemon => {
    for(let stat of pokemon){
        //updates page to display pokemons name
        if (stat = "name"){
            let newElement = document.createElement('li')
            newElement.innerText = stat
            sideList.appendChild(newElement)
        }

        //updates page to display pokemons height
        else if(stat = "height"){
            let newElement = document.createElement('li')
            newElement.innerText = stat
            sideList.appendChild(newElement)    
        }

        //updates page to display pokemons weight
        else if(stat = "weight"){
            let newElement = document.createElement('li')
            newElement.innerText = stat
            sideList.appendChild(newElement)
        }

        //updates page to display pokemons type(s)
        else if(stat = "types"){
            for(let item of stat){
                if(item = "type"){
                    let newElement = document.createElement('li')
                    newElement.innerText = item
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
randButtom.addEventListener('click', rnde())

//displays stats of random pokemon when button is clicked
function rnde(){
    let num = getRandomIntInclusive(1,890)
    pokeSearch(num)
}
