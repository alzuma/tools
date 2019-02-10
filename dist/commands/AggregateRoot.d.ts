import { Consumer } from '../Types';
import { Dictionary } from '..';
export declare class AggregateRoot {
    readonly handlers: Dictionary<string, Consumer<object>>;
    protected register: <T extends object>(c: new () => T, when: Consumer<T>) => void;
    protected raise: (item: object) => void;
}
