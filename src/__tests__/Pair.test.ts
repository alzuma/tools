import { Pair } from '../Pair';

describe('Pair tests', () => {
    test('Init', () => {
        const pair = Pair.of('Hi mom!', 42);

        expect(pair.first).toBe('Hi mom!');
        expect(pair.second).toBe(42);
    });
});
