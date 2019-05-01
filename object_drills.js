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

// Insert your code here

// 7. Factory Functions with LOTR

function createCharacter(character){
  return {
    name: character.name,
    nickName: character.nickName,
    race: character.race,
    origin: character.origin,
    attack: character.attack,
    defense: character.defense,
    describe: function(){
      // console.log(`${character.name} is a ${character.race} from ${character.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  };
}
let characters = [
  {
    name: 'Gandalf the White',
    nickName: 'gandalf',
    race: 'Wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Bilbo Baggins',
    nickName: 'bilbo',
    race: 'hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1,
    describe: function(){
      // console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Frodo Baggins',
    nickName: 'frodo',
    race: 'hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Aragorn son of Arathorn',
    nickName: 'aragorn',
    race: 'man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Legolas',
    nickName: 'legolas',
    race: 'elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5,
    describe: function(){
      // console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Arwen Undomiel',
    nickName: 'arwen',
    race: 'Half-Self',
    origin: 'Rivendell',
    attack: 6,
    defense: 2,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      // console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  }
];
characters.forEach(function(character){
  createCharacter(character);
});

// Find aragorn
function findAragorn(character) {
  if (character.nickName === 'aragorn') {
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
