export declare class Set<T> {
    private bucket;
    add: (item: T) => boolean;
    remove: (item: T) => boolean;
    contains: (item: T) => boolean;
}
