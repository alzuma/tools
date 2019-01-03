import { Dictionary } from './Dictionary';

export class Set<T> {
    private bucket: Dictionary<T, {}> = new Dictionary();

    public add = (item: T): boolean => {
        if (this.contains(item)) {
            return false;
        }
        this.bucket.set(item, {});
    };

    public remove = (item: T): boolean => {
        return this.bucket.remove(item);
    };

    public contains = (item: T) => {
        return this.bucket.containsKey(item);
    };
}
