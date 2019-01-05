import { IIterable, TConsumer } from '../Types';
export interface IPair<K, V> {
    key: K;
    value: V;
}
export declare class Dictionary<K, V> implements IIterable<IPair<K, V>> {
    private bucket;
    get: (key: K) => V;
    set: (key: K, value: V) => void;
    remove: (key: K) => boolean;
    values: () => V[];
    keys: () => K[];
    containsKey: (key: K) => boolean;
    clear: () => {};
    size: () => number;
    isEmpty: () => boolean;
    iterate: (accept: TConsumer<IPair<K, V>>) => void;
    private generateKey;
}
