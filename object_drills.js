'use strict';

// 1. Object initializers and methods

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/this.flour)*100;
  }
};
// console.log(loaf.hydration());

// 2. Iterating over an object's properties

const object = {
  foo: 'foo',
  bar: 'bar',
  fum: 12,
  quux: 15,
  spam: 'spam'
};
for (var property in object) {
  // console.log(`Property: ${property}. Value is ${object[property]}`);
}

// 3. Arrays in objects

const mealsObject = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'suppert']
};
// console.log(mealsObject.meals[3]);

// 4. Arrays of objects
class Person {
  constructor(name, jobTitle, boss) {
    if (!name || !jobTitle) throw new TypeError('Missing required attributes');

    this.name = name,
    this.jobTitle = jobTitle;

  }
}
const lucas = new Person('Lucas','Unemployed developer'),
  maggie = new Person('Maggie', 'Creative Director'),
  dustin = new Person('Dustin', 'Unemployed developer'),
  steve = new Person('Steve Jobs', 'Deceased CEO' );

  lucas.boss = 'Steve Jobs',
  maggie.boss = 'Lionel Messi',
  dustin.boss = 'Random Boss';

const people = [lucas, maggie, dustin, steve];

people.forEach(function(person) {
  if (person.hasOwnProperty('boss')) {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anyone`);
  }
});


// 5. Properties that aren't there

// 6. Cracking the code
function decode(string) {
  let arr = [];
  let wordArray = string.split(' ');
  let cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }

  for(let i = 0; i < wordArray.length; i++){
    if(cipher.hasOwnProperty(wordArray[i][0])){
      arr.push(wordArray[i][cipher[wordArray[i][0]]])
    }
    else {
      arr.push(' ');
    }
  }
  return arr.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));


// Insert your code here

// 7. Factory Functions with LOTR

// class Character {
//   constructor (name, nickName, race, origin, attack, defense) {
//     this.name = name,
//     this.nickName = nickName,
//     this.race = race,
//     this.origin = origin,
//     this.attack = attack,
//     this.defense = defense;
//   }

// }

//We were going to do the above but need to do a factory function.



function createCharacter(name, nickName, race, origin, attack, defense, weapon){
  return {
    name: name,
    nickName: nickName,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      }
      if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  };
}
const gandalph = createCharacter('Gandalph the White', 'gandalph', 'Wizard', 'Middle Earth', 10,6,'Wizard staff'),
bilbo = createCharacter('Bilbo Baggins', 'bilbo','hobbit','The Shire',2,1,'The Ring'),
frodo = createCharacter('Frodo Baggins','frodo','hobbit','The Shire', 3,2,'String and Barrow Blade'),
aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn','man','Dunnedain',6,8,'Anduril'),
legolas = createCharacter('Legolas','legolas','elf','Woodland Realm',8,5,'Bow and arrow'),
arwen = createCharacter('Arwen Undomiel','arwen','elf','Rivendell',6,2,'Hadhafang');
let characters = [gandalph, bilbo, frodo, aragorn, legolas,arwen];

characters.push(createCharacter('Balrog','balrog','demon','mines of moria',500,50,'fire'));
console.log(characters);
// Find aragorn
function findAragorn(character) {
  if (character.nickName === 'frodo') {
    character.describe();
  }

}
characters.find(findAragorn);

// filter hobbits

function findHobbits(character) {
  return character.race === 'hobbit';
}
function strongGuys(character) {
  return character.attack > 5;
}
const hobbits = characters.filter(findHobbits);
const strongCharacters = characters.filter(strongGuys);
// console.log(strongCharacters);
// console.log(hobbits);

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {

  function findMatch(query) {
    for(let j in query) {
      for(let i = 0; i < arr.length; i++){
        return (arr[i][j] === query[j]);
        // if (arr[i].hasOwnProperty(j) && arr[i][j] === query[j]) {
        //   return true;
        // }
      }
    }
  }
  console.log(arr.find(findMatch));
}
findOne(HEROES, { id: 5, squad: 'Justice League' });
