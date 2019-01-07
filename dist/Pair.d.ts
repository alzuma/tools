export declare class Pair<F, S> {
    static of: <F_1, S_1>(first: F_1, second: S_1) => Pair<F_1, S_1>;
    readonly first: F;
    readonly second: S;
    constructor(first: F, second: S);
}
