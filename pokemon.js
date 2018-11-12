var Pokemon = [];

let trainer = 'Bason';

class Info{
  constructor(name, hp, attack, defense, abilities){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

PokemonStats = [];


let pokemon = ['charizard', 'ditto', 'eevee'];


// for(i=0; i < links.length; i++) {
function getPokemon(name){
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      console.log(data);
       let info = new Info(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities);

       Pokemon.push(info);
      }
  };
  xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/name/' + name + '.json');
  //xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon[i]}/`, true);
  xhttp.send();
}

for (let i=0; i < pokemon.length; i++) {
  getPokemon(pokemon[i]);
}





function getStats() {
  for(var i = 0; i < Pokemon.length; i++) {
    let stats = document.createElement('p');
    stats.innerHTML = Pokemon[i].info;
    document.getElementById('miniscreen').appendChild(stats);
  }
}
