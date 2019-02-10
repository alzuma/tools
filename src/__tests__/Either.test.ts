import { Either } from '../Either';
import { Func } from '../Types';

describe('Either tests', () => {
    test('Is left', () => {
        const test: Either<string, number> = Either.Left('<mock>');

        expect(test.isRight()).toBe(false);
        expect(test.isLeft()).toBe(true);
    });

    test('Is right', () => {
        const test: Either<string, number> = Either.Right(42);

        expect(test.isRight()).toBe(true);
        expect(test.isLeft()).toBe(false);
    });

    test('Map left', () => {
        const test: Either<string, number> = Either.Left('<mock>');

        const mapper = (value: string): number => value.length;

        const length = test.mapLeft(mapper);
        expect(length.get()).toBe(6);
    });

    test('Map left - empty', () => {
        const test: Either<string, number> = Either.Left(null);
        const mapper = (value: string): number => value.length;
        const length = test.mapLeft(mapper);
        expect(length.isEmpty).toBe(true);
    });

    test('Map right', () => {
        const test: Either<string, number> = Either.Right(5);
        const mapper = (value: number): number => value + 5;
        const length = test.mapRight(mapper);
        expect(length.get()).toBe(10);
    });

    test('Map right - empty', () => {
        const test: Either<string, number> = Either.Right(null);
        const mapper = (value: number): number => value + 5;
        const length = test.mapRight(mapper);
        expect(length.isEmpty).toBe(true);
    });

    test('test value lift all values good', () => {
        const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const doMath: Func<number, number> = (n: number) => n * 10;

        const result = data
            .map(Either.liftWithValue(doMath))
            .filter(v => v.isRight() && v.getRight().get() === 100);

        expect(result.length).toBe(1);
    });

    test('test value lift throw error in 5', () => {
        const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const doMath: Func<number, number> = (n: number) => {
            if (n === 5) {
                throw Error('Me no like 5');
            }
            return n * 10;
        };

        const result = data.map(Either.liftWithValue(doMath));

        const errors = result.filter(v => v.isLeft());

        expect(result.length).toBe(10);
        expect(errors.length).toBe(1);
        expect(errors[0].getLeft().get().first.message).toBe('Me no like 5');
        expect(errors[0].getLeft().get().second).toBe(5);
    });
});
