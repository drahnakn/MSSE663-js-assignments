import { Observable } from "rxjs/internal/Observable";
import { Observer } from "rxjs/internal/types"; // eslint-disable-line no-unused-vars

const marsupialSpecies = 
    [{name: "Bandicoot", status: "least concern"},
     {name: "Koala", status: "threatened"},
     {name: "Numbat", status: "vulnereable"},
     {name: "Quokka", status: "vulnerable"},
     {name: "Quoll", status: "endangered"},
     {name: "Red Kangaroo", status: "least concern"},
     {name: "Wombat", status: "endangered"}];

export class Marsupials {

    // constructor() {}

    getMarsupialSpecies(observer: Observer<Object>) {

        for (let species of marsupialSpecies) {
            observer.next(species); 
        }

    }

    getEndangeredMarsupials(marsupials: Array<any>) {
        
        return marsupials.filter(species => species.status === "endangered").map(species => species.name);
    }

    isEndangered(marsupials: Array<any>, name: string) {
        
        if (marsupials.find(species => species.name === name).status === "endangered") {
            return true;
        } else return false;
    }

}

const marsupials = new Marsupials();
let marsupialNames: Array<any> = [];

const marsupialSpeciesList = new Observable(marsupials.getMarsupialSpecies);

marsupialSpeciesList.subscribe((data) =>
    {marsupialNames.push(data);}).unsubscribe();

console.log(marsupialNames);
const endangeredMarsupials = marsupials.getEndangeredMarsupials(marsupialNames);
console.log(endangeredMarsupials);
console.log(marsupials.isEndangered(marsupialNames, "Koala"));