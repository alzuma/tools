import { Func } from '..';
import { CommandHandler } from './CommandHandler';
export declare class CommandHandlerMap {
    private handlers;
    constructor(...params: CommandHandler[]);
    get: <T extends object, R>(command: T) => Func<T, Promise<R>>;
}
