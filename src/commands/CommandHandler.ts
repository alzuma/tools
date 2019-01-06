import { Dictionary, TFunction } from '..';

export class CommandHandler {
    public readonly handlers: Dictionary<string, TFunction<object, Promise<void>>> = new Dictionary();

    protected register = <T extends object>(c: new () => T, handler: TFunction<T, Promise<void>>) => {
        this.handlers.add(c.name, h => handler(h as T));
    };
}
