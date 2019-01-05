export type TFunction<T, R> = (t: T) => R;
export type TBiFunction<T, U, R> = (t: T, u: U) => R;
export type TSupplier<T> = () => T;
export type TConsumer<T> = (accept: T) => void;

export interface IIterable<T> {
    iterate: (accept: TConsumer<T>) => void;
}
