import Optional from 'typescript-optional';
import { Pair } from './Pair';
import { Func } from './Types';

export class Either<L, R> {
    public static liftWithValue = <T, R>(f: Func<T, R>): Func<T, Either<Pair<Error, T>, R>> => {
        return (t: T) => {
            try {
                return Either.Right(f(t));
            } catch (e) {
                return Either.Left(Pair.of(e, t));
            }
        };
    };

    public static Left = <L, R>(value: L): Either<L, R> => {
        return new Either(value, null);
    };

    public static Right = <L, R>(value: R): Either<L, R> => {
        return new Either(null, value);
    };

    private readonly left: L;
    private readonly right: R;

    private constructor(left: L, right: R) {
        this.left = left;
        this.right = right;
    }

    public getLeft = (): Optional<L> => Optional.ofNullable(this.left);
    public getRight = (): Optional<R> => Optional.ofNullable(this.right);
    public isLeft = (): boolean => this.left !== null;
    public isRight = (): boolean => this.right !== null;

    public mapLeft = <T>(mapper: Func<L, T>): Optional<T> => {
        if (this.isLeft()) {
            return Optional.of(mapper(this.left));
        }
        return Optional.empty();
    };

    public mapRight = <T>(mapper: Func<R, T>): Optional<T> => {
        if (this.isRight()) {
            return Optional.of(mapper(this.right));
        }
        return Optional.empty();
    };
}
