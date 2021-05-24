import { expect } from 'chai';
import 'mocha';
import { Koala } from './app';

describe('test for app.ts' , () => {
    const koala = new Koala('Eucalyptus forests of Southeastern and Eastern Australia', 'Herbovore', 35, 32);
    it('Should display the habitat for a koala', () => {
        expect(koala.getHabitat()).to.equal('Koalas can be found in the Eucalyptus forests of Southeastern and Eastern Australia.');
    });

    it('Should indicate if a koala is an omnivore', () => {
        expect(koala.isOmnivorous(koala.dietType)).to.equal(false);
    });

    it('Should display a koala\'s average weight', () => {
        expect(koala.avgWeight).to.equal(35);
    });
});
