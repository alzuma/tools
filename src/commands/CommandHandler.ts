import { Dictionary, Func } from '..';

export class CommandHandler {
    public readonly handlers: Dictionary<string, Func<object, Promise<any>>> = new Dictionary();

    protected register = <T extends object, R>(c: new () => T, handler: Func<T, Promise<R>>) => {
        this.handlers.add(c.name, h => handler(h as T));
    };
}
