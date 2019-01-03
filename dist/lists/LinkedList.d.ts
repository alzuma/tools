import { TConsumer, TFunction } from '../Types';
export interface INode<T> {
    value: T;
    next?: INode<T>;
}
export declare class LinkedList<T> {
    private readonly EMPTY_NODE;
    private head;
    private tail;
    insert: (value: T) => LinkedList<T>;
    append: (value: T) => LinkedList<T>;
    delete: (value: T) => boolean;
    find: (compare: TFunction<T, boolean>) => INode<T>;
    fromArray: (values: T[]) => LinkedList<T>;
    toArray: () => T[];
    size: () => number;
    isEmpty: () => boolean;
    items(): IterableIterator<INode<T>>;
    iterate: (accept: TConsumer<T>) => void;
    private deleteFromHead;
    private forgeNode;
    private appendToTheEndOfTheList;
}
