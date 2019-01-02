import { Lazy } from '../Lazy';

describe('Lazy tests', () => {
    test('Get lazy', () => {
        const lazy: Lazy<number> = Lazy.of(Math.random);
        const randomResultOne = lazy.get();
        const randomResultTwo = lazy.get();

        expect(lazy.isEvaluated()).toBe(true);
        expect(randomResultOne).toBe(randomResultTwo);
    });
});
