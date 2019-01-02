export interface IItem<T> {
    key: string;
    value: T;
}
export declare class HashTable<T> {
    private readonly buckets;
    constructor();
    set: (key: string, value: T) => void;
    get: (key: string) => T;
    hashCode: (key: string) => number;
    private findBucket;
}
