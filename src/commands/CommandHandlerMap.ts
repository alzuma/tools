import { Dictionary, TFunction } from '..';
import { CommandHandler } from './CommandHandler';

export class CommandHandlerMap {
    private handlers: Dictionary<string, TFunction<object, Promise<void>>> = new Dictionary();

    constructor(...params: CommandHandler[]) {
        params.forEach(h => h.handlers.iterate(i => this.handlers.add(i.key, i.value)));
    }

    public get = <T extends object>(command: T): TFunction<T, Promise<void>> =>
        this.handlers.get(command.constructor.name);
}
