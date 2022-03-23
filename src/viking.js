// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {

    this.health = this.health - damage;    

    if (this.health >= 1) {      
      return `${this.name} has received ${damage} points of damage`
    }    
    return `${this.name} has died in act of combat`

  }

  battleCry() {
    return `Odin Owns You All!`;
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {    
    this.health = this.health - damage;    
    if (this.health >= 1) {      
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;

  }

}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {    
    this.vikingArmy.push(viking);    
  }

  addSaxon(saxon) {    
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    // Elegimos un vikingo al azar para que luche contra un sajon.
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length, 0)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length, 0)]

    let result = randomSaxon.receiveDamage(randomViking.strength);

    this.showStatus();

    // Tenemos que eliminar a los sajones muertos del array.
    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(death => death != randomSaxon);
    }        

    return result
  }

  saxonAttack() {
    // Elegimos un sajon al azar para que luche contra un viukingo.
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length, 0)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length, 0)];

    let result = randomViking.receiveDamage(randomSaxon.strength)

    this.showStatus();

    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(death => death != randomViking);
    }

    return result

  }

  showStatus() {
    console.log(`War State > Vikings: ${this.vikingArmy.length} Saxons: ${this.saxonArmy.length}`);

    if (this.saxonArmy.length == 0) {
      return `Vikings have won the war of the century!`
    }

    if (this.vikingArmy.length == 0) {
      return `Saxons have fought for their lives and survived another day...`
    }

    return `Vikings and Saxons are still in the thick of battle.`

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
