export class Pair<F, S> {
    public static of = <F, S>(first: F, second: S): Pair<F, S> => {
        return new Pair<F, S>(first, second);
    };

    public readonly first: F;
    public readonly second: S;

    constructor(first: F, second: S) {
        this.first = first;
        this.second = second;
    }
}
