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
  let name = Pokemon[1]['name'];
  let hp = Pokemon[1]['hp'];
  let attack = Pokemon[1]['attack'];
  let defense = Pokemon[1]['defense'];
  let abilities = Pokemon[1]['abilities'];
  let stats = document.createElement('h2');
  let title = document.getElementById('title');

  // console.log(node);
  stats.innerHTML = " hp " + hp + " attack " + attack + ' defense ' + defense + ' abilities ' + abilities;
  // stats.innerHTML = hp;
  document.getElementById('title').appendChild(stats);
  // document.getElementById('hp').appendChild(stats);

}

function getEeveepage(){
  window.open('eevee.html');
}

function getStatsCharizard(number_of_pokemon_in_array) {
  let name = Pokemon[2]['name'];
  let hp = Pokemon[2]['hp'];
  let attack = Pokemon[2]['attack'];
  let defense = Pokemon[2]['defense'];
  let abilities = Pokemon[2]['abilities'];
  let stats = document.createElement('h2');
  let title = document.getElementById('title');

  // console.log(node);
  stats.innerHTML = " hp " + hp + " attack " + attack + ' defense ' + defense + ' abilities ' + abilities;
  // stats.innerHTML = hp;
  document.getElementById('title').appendChild(stats);
  // document.getElementById('hp').appendChild(stats);

}

function getCharizardPage(){
  window.open('charzard.html');
}

function getStatsDitto(number_of_pokemon_in_array) {
  let name = Pokemon[0]['name'];
  let hp = Pokemon[0]['hp'];
  let attack = Pokemon[0]['attack'];
  let defense = Pokemon[0]['defense'];
  let abilities = Pokemon[0]['abilities'];
  let stats = document.createElement('h2');
  let title = document.getElementById('title');

  // console.log(node);
  stats.innerHTML = " hp " + hp + " attack " + attack + ' defense ' + defense + ' abilities ' + abilities;
  // stats.innerHTML = hp;
  document.getElementById('title').appendChild(stats);
  // document.getElementById('hp').appendChild(stats);

}

function getDittoPage(){
  window.open('ditto.html');
}
