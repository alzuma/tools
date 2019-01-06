import { Dictionary } from '../Dictionary';

describe('Dictionary tests', () => {
    let dictionary: Dictionary<string, number>;

    beforeEach(() => {
        dictionary = new Dictionary();
        dictionary.add('hi', 10);
        dictionary.add('mom!', 5);
    });

    test('Size of dictionary', () => {
        expect(dictionary.size()).toBe(2);
    });

    test('Get from dictionary', () => {
        expect(dictionary.get('mom!')).toBe(5);
    });

    test('Get from dictionary with null key', () => {
        expect(dictionary.get(null)).toBeFalsy();
    });

    test('Get from dictionary with non existing key', () => {
        expect(dictionary.get('<mock>')).toBeFalsy();
    });

    test('Set twice dictionary', () => {
        dictionary.add('mom', 18);
        dictionary.add('mom', 5);
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
        expect(dictionary.remove('hi')).toBeTruthy();
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

    test('Clears dictionary', () => {
        dictionary.clear();
        expect(dictionary.size()).toBe(0);
    });
});
