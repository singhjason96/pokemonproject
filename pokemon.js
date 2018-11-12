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

  xhttp.send();
}

for (let i=0; i < pokemon.length; i++) {
  getPokemon(pokemon[i]);
}

function getStats(number_of_pokemon_in_array) {
  let node = Pokemon[0]['name'] + Pokemon[0]['hp'] + Pokemon[0]['attack'];
  let stats = document.createElement('p');
  let miniscreen = document.getElementById('miniscreen');
  console.log(node);
  stats.innerHTML = node;
  document.getElementById('miniscreen').appendChild(stats);

}
