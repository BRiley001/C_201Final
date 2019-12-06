/*

Author:Brenden Riley
Date:12.5.19

*/
let pokenum = 1;
window.onload = function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenum}/`)
        .then(res => res.json())
        .then(data=>{
            const{
                ...img
            } = data.sprites;
            document.getElementById("pokemon").innerHTML=data.name;
            document.getElementById("pokeimg").src=img.front_default;
        })
}


function changePokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenum}/`)
        .then(res => res.json())
        .then(data=>{
            const{
                ...img
            } = data.sprites;
            document.getElementById("pokemon").innerHTML=data.name;
            document.getElementById("pokeimg").src=img.front_default;
        })
}

document.querySelector("#leftButton").onclick = function () {
    pokenum > 1 ? pokenum -= 1 : pokenum -= 0;
    changePokemon();
    console.log(pokenum);
};
document.querySelector("#rightButton").onclick = function () {
    pokenum < 500 ? pokenum += 1 : pokenum += 0;
    changePokemon();
    console.log(pokenum);
};