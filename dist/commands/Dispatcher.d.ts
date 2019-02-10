import { CommandHandlerMap } from './CommandHandlerMap';
export declare class Dispatcher {
    private readonly map;
    constructor(map: CommandHandlerMap);
    dispatch: <T extends object, R>(command: T) => Promise<R>;
}
