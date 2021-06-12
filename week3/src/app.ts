export interface Marsupial {
  habitat: String;
  dietType: String;
  avgWeight: number;
  avgLength: number;

  getHabitat: () => String;
  isOmnivorous: (dietType: String) => boolean;
}

export class Koala implements Marsupial {
  species: String;

  constructor(
    public habitat: String,
    public dietType: String,
    public avgWeight: number,
    public avgLength: number
  ) {
    this.species = "Koala";
    this.habitat = habitat;
    this.dietType = dietType;
    this.avgWeight = avgWeight;
    this.avgLength = avgLength;
  }

  getHabitat(): String {
    return `${this.species}s can be found in the ${this.habitat}.`;
  }

  isOmnivorous(dietType: String): boolean {
    if (dietType === "Omnivore") {
      return true;
    } else {
      return false;
    }
  }
}

const koala = new Koala(
  "Eucalyptus forests of Southeastern and Eastern Australia",
  "Herbivore",
  35,
  32
);

console.log(koala.getHabitat());
console.log(koala.isOmnivorous(koala.dietType));
