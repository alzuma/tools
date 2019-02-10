import { Consumer } from '../Types';
import { Dictionary } from '..';

export class AggregateRoot {
    public readonly handlers: Dictionary<string, Consumer<object>> = new Dictionary();

    protected register = <T extends object>(c: new () => T, when: Consumer<T>) => {
        this.handlers.add(c.name, w => when(w as T));
    };

    protected raise = (item: object) => {
        const consumer = this.handlers.get(item.constructor.name);
        if (consumer) {
            consumer(item);
        }
    };
}
