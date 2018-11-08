const Pokemon = [];

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

function getCharizard(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  data = JSON.parse(this.responseText)
  console.log(data.abilities.length);
     for(prop in data) {
        let info = new Info(data[prop]['name'],data.stats[5][prop],data.stats[4][prop],data.stats[3][prop],data.abilities.length);
        Pokemon.push(info);
    }

   }
  };
xhttp.open('GET','http://fizal.me/pokeapi/api/v2/name/charizard.json', true);
xhttp.send()
}
