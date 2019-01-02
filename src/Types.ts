export type TFunction<T, R> = (t: T) => R;
export type TBiFunction<T, U, R> = (t: T, u: U) => R;
export type TSupplier<T> = () => T;
