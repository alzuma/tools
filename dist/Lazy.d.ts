import { Supplier } from './Types';
export declare class Lazy<T> {
    static of: <T_1>(supplier: Supplier<T_1>) => Lazy<T_1>;
    private value;
    private readonly supplier;
    private constructor();
    get: () => T;
    isEvaluated: () => boolean;
}
