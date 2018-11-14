var Pokemon = [];


class Info{
  constructor(name, hp, attack, defense, abilities1, abilities2){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities1 = abilities1;
    this.abilities2 = abilities2;
  }
}

class Trainer{
  constructor(){
    this.pokemon = [];

  }
}

var Bason = new Trainer();

let pokemon = ['charizard', 'ditto', 'eevee'];


// for(i=0; i < links.length; i++) {
function getPokemon(name){
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      console.log(data);
       let info = new Info(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities[0].ability.name, data.abilities[1].ability.name);


       Bason.pokemon.push(info);

      }

  };
  xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/name/' + name + '.json');

  xhttp.send();
}

for (let i=0; i < pokemon.length; i++) {
  getPokemon(pokemon[i]);
}

function getStats(number_of_pokemon_in_array) {
  let name = Bason.pokemon[1]['name'];
  let hp = Bason.pokemon[1]['hp'];
  let attack = Bason.pokemon[1]['attack'];
  let defense = Bason.pokemon[1]['defense'];
  let abilities1 = Bason.pokemon[1]['abilities1'];
  let abilities2 = Bason.pokemon[1]['abilities2'];
  let attackstats = document.createElement('h2');
  let title = document.getElementById('title');
  let hpstats = document.createElement('h2');
  let hpnum = document.getElementById('hpnum');
  let defensenum = document.getElementById('defensenum');
  let defensestats = document.createElement('h2');
  let ability1 = document.getElementById('ability1')
  let abilities1stat = document.createElement('h2');
  let ability2 = document.getElementById('ability2');
  let abilities2stat = document.createElement('h2');

  // console.log(node);
  attackstats.innerHTML = " Attack: " + attack;
  // stats.innerHTML = hp;
  hpstats.innerHTML = " HP: " + hp;
  abilities1stat.innerHTML = ' Ability 1: ' + abilities1;
  abilities2stat.innerHTML = ' Ability 2: ' + abilities2;

  defensestats.innerHTML = ' Defense: ' + defense;

  document.getElementById('title').appendChild(attackstats);
  document.getElementById('hpnum').appendChild(hpstats);
  document.getElementById('defensenum').appendChild(defensestats);
  document.getElementById('ability1').appendChild(abilities1stat);
  document.getElementById('ability2').appendChild(abilities2stat);
  // document.getElementById('hp').appendChild(stats);

}

function getEeveepage(){
  window.open('eevee.html');
}

function getStatsCharizard(number_of_pokemon_in_array) {
  let name = Bason.pokemon[2]['name'];
  let hp = Bason.pokemon[2]['hp'];
  let attack = Bason.pokemon[2]['attack'];
  let defense = Bason.pokemon[2]['defense'];
  let abilities1 = Bason.pokemon[2]['abilities1'];
  let abilities2 = Bason.pokemon[2]['abilities2'];
  let attackstats = document.createElement('h2');
  let title = document.getElementById('title');
  let hpstats = document.createElement('h2');
  let hpnum = document.getElementById('hpnum');
  let defensenum = document.getElementById('defensenum');
  let defensestats = document.createElement('h2');
  let ability1 = document.getElementById('ability1')
  let abilities1stat = document.createElement('h2');
  let ability2 = document.getElementById('ability2');
  let abilities2stat = document.createElement('h2');

  // console.log(node);
  attackstats.innerHTML = " Attack: " + attack;
  // stats.innerHTML = hp;
  hpstats.innerHTML = " HP: " + hp;
  abilities1stat.innerHTML = ' Ability 1: ' + abilities1;
  abilities2stat.innerHTML = ' Ability 2: ' + abilities2;

  defensestats.innerHTML = ' Defense: ' + defense;

  document.getElementById('title').appendChild(attackstats);
  document.getElementById('hpnum').appendChild(hpstats);
  document.getElementById('defensenum').appendChild(defensestats);
  document.getElementById('ability1').appendChild(abilities1stat);
  document.getElementById('ability2').appendChild(abilities2stat);
  // document.getElementById('hp').appendChild(stats);

}

function getCharizardPage(){
  window.open('charzard.html');
}

function getStatsDitto(number_of_pokemon_in_array) {
  let name = Bason.pokemon[0]['name'];
  let hp = Bason.pokemon[0]['hp'];
  let attack = Bason.pokemon[0]['attack'];
  let defense = Bason.pokemon[0]['defense'];
  let abilities1 = Bason.pokemon[0]['abilities1'];
  let abilities2 = Bason.pokemon[0]['abilities2'];
  let attackstats = document.createElement('h2');
  let title = document.getElementById('title');
  let hpstats = document.createElement('h2');
  let hpnum = document.getElementById('hpnum');
  let defensenum = document.getElementById('defensenum');
  let defensestats = document.createElement('h2');
  let ability1 = document.getElementById('ability1')
  let abilities1stat = document.createElement('h2');
  let ability2 = document.getElementById('ability2');
  let abilities2stat = document.createElement('h2');

  // console.log(node);
  attackstats.innerHTML = " Attack: " + attack;
  // stats.innerHTML = hp;
  hpstats.innerHTML = " HP: " + hp;
  abilities1stat.innerHTML = ' Ability 1: ' + abilities1;
  abilities2stat.innerHTML = ' Ability 2: ' + abilities2;

  defensestats.innerHTML = ' Defense: ' + defense;

  document.getElementById('title').appendChild(attackstats);
  document.getElementById('hpnum').appendChild(hpstats);
  document.getElementById('defensenum').appendChild(defensestats);
  document.getElementById('ability1').appendChild(abilities1stat);
  document.getElementById('ability2').appendChild(abilities2stat);
  // document.getElementById('hp').appendChild(stats);

}




function getDittoPage(){
  window.open('ditto.html');
}
