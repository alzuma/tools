import { Supplier } from './Types';

export class Lazy<T> {
    public static of = <T>(supplier: Supplier<T>): Lazy<T> => {
        return new Lazy<T>(supplier);
    };

    private value: T = null;
    private readonly supplier: Supplier<T>;

    private constructor(supplier: Supplier<T>) {
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
