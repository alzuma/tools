export declare type TFunction<T, R> = (t: T) => R;
export declare type TBiFunction<T, U, R> = (t: T, u: U) => R;
export declare type TSupplier<T> = () => T;
export declare type TConsumer<T> = (accept: T) => void;
export interface IIterable<T> {
    iterate: (accept: TConsumer<T>) => void;
}
