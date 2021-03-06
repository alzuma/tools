import { IIterable, Consumer } from '../Types';

export interface IPair<K, V> {
    key: K;
    value: V;
}

export class Dictionary<K, V> implements IIterable<IPair<K, V>> {
    private bucket: { [key: string]: IPair<K, V> } = {};

    public get = (key: K): V | null => {
        if (key == null) {
            return null;
        }
        const pair: IPair<K, V> = this.bucket[this.generateKey(key)];
        if (pair == null) {
            return null;
        }
        return pair.value;
    };

    public add = (key: K, value: V) => {
        this.bucket[this.generateKey(key)] = {
            key,
            value,
        };
    };

    public remove = (key: K): boolean => {
        const stringKey = this.generateKey(key);
        if (this.bucket.hasOwnProperty(stringKey)) {
            delete this.bucket[stringKey];
            return true;
        }
        return false;
    };

    public values = (): V[] => {
        const result: V[] = [];
        this.iterate(_ => result.push(_.value));
        return result;
    };

    public keys = (): K[] => {
        const result: K[] = [];
        this.iterate(_ => result.push(_.key));
        return result;
    };

    public containsKey = (key: K): boolean => this.bucket.hasOwnProperty(this.generateKey(key));

    public clear = () => (this.bucket = {});

    public size = (): number => Object.keys(this.bucket).length;

    public isEmpty = (): boolean => this.size() === 0;

    public iterate = (accept: Consumer<IPair<K, V>>) => {
        for (const propertyName in this.bucket) {
            if (this.bucket.hasOwnProperty(propertyName)) {
                const pair = this.bucket[propertyName];
                accept(pair);
            }
        }
    };

    private generateKey = (key: K): string => {
        return 'x' + key.toString();
    };
}
