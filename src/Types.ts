export type Func<T, R> = (t: T) => R;
export type BiFunc<T, U, R> = (t: T, u: U) => R;
export type Supplier<T> = () => T;
export type Consumer<T> = (accept: T) => void;

export interface IIterable<T> {
    iterate: (accept: Consumer<T>) => void;
}
