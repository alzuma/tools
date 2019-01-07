import { CommandHandlerMap } from './CommandHandlerMap';
export declare class Dispatcher {
    private readonly map;
    constructor(map: CommandHandlerMap);
    dispatch: <T extends object>(command: T) => Promise<boolean>;
}
