import { Dictionary } from './Dictionary';
import { IIterable, TConsumer } from '../Types';

export class Set<T> implements IIterable<T> {
    private dictionary: Dictionary<T, {}> = new Dictionary();

    public size = () => this.dictionary.size();

    public toArray = (): T[] => this.dictionary.keys();

    public fromArray = (items: T[]) => items.forEach(i => this.add(i));

    public isEmpty = () => this.dictionary.isEmpty();

    public clear = () => this.dictionary.clear();

    public add = (item: T): boolean => {
        if (this.contains(item)) {
            return false;
        }
        this.dictionary.set(item, {});
    };

    public remove = (item: T): boolean => this.dictionary.remove(item);

    public contains = (item: T) => this.dictionary.containsKey(item);

    public iterate = (accept: TConsumer<T>) => {
        this.dictionary.iterate(a => {
            accept(a.key);
        });
    };

    /***
     * Removes item from this set if set B doesn't contain item
     * @param setB set B
     */
    public intersection = (setB: Set<T>) => {
        this.iterate(item => {
            if (!setB.contains(item)) {
                this.remove(item);
            }
        });
    };

    /***
     * Add items to this set from set B
     * @param setB
     */
    public union = (setB: Set<T>) => {
        setB.iterate(item => {
            this.add(item);
        });
    };

    /***
     * Remove items from this set that are present in set B
     * @param setB
     */
    public difference = (setB: Set<T>) => {
        setB.iterate(item => {
            this.remove(item);
        });
    };

    /***
     * Is this set sub set of set B
     * @param setB
     */
    public isSubsetOf = (setB: Set<T>): boolean => {
        if (this.size() > setB.size()) {
            return false;
        }

        this.iterate(item => {
            if (!setB.contains(item)) {
                return false;
            }
        });

        return true;
    };
}
