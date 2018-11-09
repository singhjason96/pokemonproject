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
    console.log(data);
     // for(prop in data) {
      let info = new Info(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities);
      Pokemon.push(info);
    }
  }

   // }


xhttp.open('GET','http://fizal.me/pokeapi/api/v2/name/charizard.json', true);
xhttp.send()
}


// function getDitto() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//   data = JSON.parse(this.responseText)
//   console.log(data.stats[4].base_stat);
//   for(prop in data) {
//     let info = new Info(data.name[prop],data.stats[5].base_stat[prop],data.stats[4].base_stat[prop],data.stats[3].base_stat[prop],data.abilities[prop]);
//     Pokemon.push(info);
//   }
// }
// };
//
// xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/', true);
// xhttp.send()
// }
