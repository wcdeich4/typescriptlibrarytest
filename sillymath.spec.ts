import { SillyMath } from './SillyMath';

describe('Multiply Test', () => {

    it('4 x 5', () => {
        const a = 4;
        const b = 5;
        const expected = a * b;
        const sm = new SillyMath();
        const actual = sm.multiply(a, b);
        expect(actual).toEqual(expected);
    });



});
