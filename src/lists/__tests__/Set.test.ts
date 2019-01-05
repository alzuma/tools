import { Set } from '../Set';

describe('Dictionary tests', () => {
    let set: Set<string>;

    beforeEach(() => {
        set = new Set();
        set.fromArray(['hi', 'mom!']);
    });

    test('Add to the set', () => {
        set.add('again');
        expect(set.size()).toBe(3);
        expect(set.contains('again'));
    });

    test('Add to set same item twice', () => {
        set.add('hi');
        expect(set.size()).toBe(2);
    });

    test('Union sets', () => {
        const setB = new Set<string>();
        setB.add('hi');
        setB.add('mom!');
        setB.add('again');
        set.union(setB);
        expect(set.toArray()).toEqual(['hi', 'mom!', 'again']);
    });

    test('Find the differences between sets', () => {
        const setB = new Set<string>();
        setB.add('hi');
        setB.add('dad!');
        set.difference(setB);
        expect(set.toArray()).toEqual(['mom!']);
    });

    test('Is subset of set smaller set, should be false', () => {
        const setB = new Set<string>();
        setB.add('hi');
        expect(set.isSubsetOf(setB)).toBeFalsy();
    });

    test('Is subset of equal set, should be true', () => {
        const setB = new Set<string>();
        setB.add('hi');
        setB.add('mom!');
        expect(set.isSubsetOf(setB)).toBeTruthy();
    });

    test('Is subset of bigger set, should be true', () => {
        const setB = new Set<string>();
        setB.add('hi');
        setB.add('mom!');
        setB.add('again!');
        expect(set.isSubsetOf(setB)).toBeTruthy();
    });

    test("Remove items from set which aren't in set B", () => {
        const setB = new Set<string>();
        setB.add('mom!');
        set.intersection(setB);
        expect(set.toArray()).toEqual(['mom!']);
    });

    test('Empty the set', () => {
        set.clear();
        expect(set.isEmpty()).toBeTruthy();
    });
});
