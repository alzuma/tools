import { IIterable, Consumer, Func } from '../Types';
export interface INode<T> {
    value: T;
    next?: INode<T>;
    previous?: INode<T>;
}
export declare class LinkedList<T> implements IIterable<T> {
    private readonly EMPTY_NODE;
    private head;
    private tail;
    getHead: () => INode<T>;
    getTail: () => INode<T>;
    insert: (value: T) => LinkedList<T>;
    append: (value: T) => LinkedList<T>;
    delete: (value: T) => boolean;
    find: (compare: Func<T, boolean>) => INode<T>;
    fromArray: (values: T[]) => LinkedList<T>;
    toArray: () => T[];
    size: () => number;
    isEmpty: () => boolean;
    items(): IterableIterator<INode<T>>;
    iterate: (accept: Consumer<T>) => void;
    private deleteFromHead;
    private forgeNode;
    private appendToTheEndOfTheList;
}
