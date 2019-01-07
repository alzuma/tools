import { TConsumer } from '../Types';
import { Dictionary } from '..';
export declare class AggregateRoot {
    readonly handlers: Dictionary<string, TConsumer<object>>;
    protected register: <T extends object>(c: new () => T, when: TConsumer<T>) => void;
    protected raise: (item: object) => void;
}
