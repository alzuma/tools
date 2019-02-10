import { Dictionary, Func } from '..';
import { CommandHandler } from './CommandHandler';

export class CommandHandlerMap {
    private handlers: Dictionary<string, Func<object, Promise<any>>> = new Dictionary();

    constructor(...params: CommandHandler[]) {
        params.forEach(h => h.handlers.iterate(i => this.handlers.add(i.key, i.value)));
    }

    public get = <T extends object, R>(command: T): Func<T, Promise<R>> =>
        this.handlers.get(command.constructor.name);
}
