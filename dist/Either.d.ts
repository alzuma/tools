import Optional from 'typescript-optional';
import { Pair } from './Pair';
import { TFunction } from './Types';
export declare class Either<L, R> {
    static liftWithValue: <T, R_1>(f: TFunction<T, R_1>) => TFunction<T, Either<Pair<Error, T>, R_1>>;
    static Left: <L_1, R_1>(value: L_1) => Either<L_1, R_1>;
    static Right: <L_1, R_1>(value: R_1) => Either<L_1, R_1>;
    private readonly left;
    private readonly right;
    private constructor();
    getLeft: () => Optional<L>;
    getRight: () => Optional<R>;
    isLeft: () => boolean;
    isRight: () => boolean;
    mapLeft: <T>(mapper: TFunction<L, T>) => Optional<T>;
    mapRight: <T>(mapper: TFunction<R, T>) => Optional<T>;
}
