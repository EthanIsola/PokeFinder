let nameSearch = "https://pokeapi.co/api/v2/pokemon/"
let name;

addEventListener('DOMContentLoaded', ()=> {
    fetch(`${nameSearch}${name}`)
    .then(promise => promise.json)
    .then(pokemon => {

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

