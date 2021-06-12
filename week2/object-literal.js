/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

let monkey = {
  species: "Lion Tamarin",
  lifeSpan: 20,
  diet: ["Insects", "Fruits"],
  isCute: true,

  getDescription() {
    console.log(
      `The ${this.species} can live up to ${this.lifeSpan} years and ${
        this.isCute ? "is" : "is not"
      } very cute.`
    );
  },

  eat(food) {
    // let newDiet = this.diet;
    console.log(`${this.diet.includes(food) ? "Yum!" : "No thanks."}`);
  },

  sleep() {
    console.log("Goodnight...zzzzzzz");
  },

  play() {
    this.isCute ? console.log("Awww, that's adorable!") : console.log("Meh.");
  },
};

console.log("------TEST MONKEY OBJECT LITERAL------");
monkey.getDescription();
monkey.eat("Insects");
monkey.eat("Hamburgers");
monkey.play();
monkey.sleep();

class Monkey {
  constructor(species, lifeSpan, diet, isCute) {
    this.species = species;
    this.lifeSpan = lifeSpan;
    this.diet = diet;
    this.isCute = isCute;
  }

  getDescription() {
    console.log(
      `The ${this.species} can live up to ${this.lifeSpan} years and ${
        this.isCute ? "is" : "is not"
      } very cute.`
    );
  }

  eat(food) {
    console.log(`${this.diet.includes(food) ? "Yum!" : "No thanks."}`);
  }

  sleep() {
    console.log("Goodnight...zzzzzzz");
  }

  play() {
    this.isCute ? console.log("Awww, that's adorable!") : console.log("Meh.");
  }
}

let macaque = new Monkey(
  "Lion-Tailed Macaque",
  20,
  ["Fruits", "Vegetables", "Insects"],
  false
);

console.log("------TEST MONKEY OBJECT------");
macaque.getDescription();
macaque.eat("Vegetables");
macaque.eat("Hot Dogs");
macaque.play();
macaque.sleep();
