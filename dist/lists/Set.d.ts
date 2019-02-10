import { IIterable, Consumer } from '../Types';
export declare class Set<T> implements IIterable<T> {
    private dictionary;
    size: () => number;
    toArray: () => T[];
    fromArray: (items: T[]) => void;
    isEmpty: () => boolean;
    clear: () => {};
    add: (item: T) => boolean;
    remove: (item: T) => boolean;
    contains: (item: T) => boolean;
    iterate: (accept: Consumer<T>) => void;
    /***
     * Removes item from this set if set B doesn't contain item
     * @param setB set B
     */
    intersection: (setB: Set<T>) => void;
    /***
     * Add items to this set from set B
     * @param setB
     */
    union: (setB: Set<T>) => void;
    /***
     * Remove items from this set that are present in set B
     * @param setB
     */
    difference: (setB: Set<T>) => void;
    /***
     * Is this set sub set of set B
     * @param setB
     */
    isSubsetOf: (setB: Set<T>) => boolean;
}
