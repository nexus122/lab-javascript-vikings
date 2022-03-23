// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  reciveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health,strength){
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  reciveDamage(damage){    
    this.health = this.health - damage;
    if(this.health > 0){
      console.log(`${this.name} has received ${damage} points of damage`);
      return `${this.name} has received ${damage} points of damage`
    }else{
      console.log(`${this.name} has died in act of combat`);
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    console.log(`Odin Owns You All!`);
    return `Odin Owns You All!`;
  }

}

// Saxon
class Saxon extends Soldier{
  reciveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      console.log(`A Saxon has received DAMAGE points of damage`);      
    }else{
      console.log(`A Saxon has died in combat`);      
    }
  }

}

// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    // Elegimos un sajon y un vikingo al azar para que luchen.
    let randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
    let randomViking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)]
    
    randomSaxon.reciveDamage(randomViking.strength);    

    // Tenemos que eliminar a los sajones muertos del array.
    this.vikingArmy = this.vikingArmy.filter(death => death.health > 0);
    this.showStatus();

  }

  saxonAttack(){
    let randomViking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)];
    let randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];

    randomViking.reciveDamage(randomSaxon.strength);

    // Hay que eliminar a los vikingos muertos del array.    
    this.saxonArmy = this.saxonArmy.filter(death => death.health > 0);
    this.showStatus();
  }

  showStatus(){
    console.log(`War State Vikings: ${this.vikingArmy.length} Saxons: ${this.saxonArmy.length}`);
    if(this.saxonArmy.length == 0){
      console.log(`Vikings have won the war of the century!`)
      return `Vikings have won the war of the century!`
    }
    else if(this.vikingArmy.length == 0){
      console.log(`Saxons have fought for their lives and survived another day...`)
      return `Saxons have fought for their lives and survived another day...`
    }else if(this.vikingArmy.length >=1 && this.vikingArmy.length >= 1){
      console.log(`Vikings and Saxons are still in the thick of battle.`)
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
