import { TSupplier } from './Types';

export class Lazy<T> {
    public static of = <T>(supplier: TSupplier<T>): Lazy<T> => {
        return new Lazy<T>(supplier);
    };

    private value: T = null;
    private readonly supplier: TSupplier<T>;

    private constructor(supplier: TSupplier<T>) {
        this.supplier = supplier;
    }

    public get = (): T => {
        if (this.value === null) {
            this.value = this.supplier();
        }
        return this.value;
    };

    public isEvaluated = (): boolean => this.value !== null;
}
