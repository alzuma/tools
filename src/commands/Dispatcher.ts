import { CommandHandlerMap } from './CommandHandlerMap';
import Optional from 'typescript-optional';

export class Dispatcher {
    private readonly map: CommandHandlerMap;

    constructor(map: CommandHandlerMap) {
        this.map = map;
    }

    public dispatch = async <T extends object, R>(command: T): Promise<R> => {
        const handler = Optional.ofNullable(this.map.get<T, R>(command)).orElse(() =>
            Promise.reject(`${command.constructor.name} no handler defined`),
        );
        return await handler(command);
    };
}
