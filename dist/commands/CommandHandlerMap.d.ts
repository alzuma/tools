import { TFunction } from '..';
import { CommandHandler } from './CommandHandler';
export declare class CommandHandlerMap {
    private handlers;
    constructor(...params: CommandHandler[]);
    get: <T extends object>(command: T) => TFunction<T, Promise<void>>;
}
