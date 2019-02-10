import { Dictionary, Func } from '..';

export class CommandHandler {
    public readonly handlers: Dictionary<string, Func<object, Promise<void>>> = new Dictionary();

    protected register = <T extends object>(c: new () => T, handler: Func<T, Promise<void>>) => {
        this.handlers.add(c.name, h => handler(h as T));
    };
}
