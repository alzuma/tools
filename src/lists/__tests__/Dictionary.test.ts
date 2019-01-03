import { Dictionary } from '../Dictionary';

describe('Dictionary tests', () => {
    let dictionary: Dictionary<string, number>;

    beforeEach(() => {
        dictionary = new Dictionary();
        dictionary.set('hi', 10);
        dictionary.set('mom!', 5);
    });

    test('Size of dictionary', () => {
        expect(dictionary.size()).toBe(2);
    });

    test('Get from dictionary', () => {
        expect(dictionary.get('mom!')).toBe(5);
    });

    test('Set twice dictionary', () => {
        dictionary.set('mom', 18);
        dictionary.set('mom', 5);
        expect(dictionary.get('mom!')).toBe(5);
    });

    test('Iterate dictionary', () => {
        let sum = 0;

        dictionary.iterate(_ => {
            sum += _.value;
        });

        expect(sum).toBe(15);
    });

    test('Remove from dictionary', () => {
        expect(dictionary.remove('hi')).toBe(10);
    });

    test('Remove from dictionary non existing key', () => {
        expect(dictionary.remove('<mock>')).toBeFalsy();
    });

    test('Get values', () => {
        const result = dictionary.values();
        expect(result).toEqual([10, 5]);
    });

    test('Get keys', () => {
        const result = dictionary.keys();
        expect(result).toEqual(['hi', 'mom!']);
    });
});
