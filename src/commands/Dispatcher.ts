import { CommandHandlerMap } from './CommandHandlerMap';

export class Dispatcher {
    private readonly map: CommandHandlerMap;

    constructor(map: CommandHandlerMap) {
        this.map = map;
    }

    public dispatch = async <T extends object>(command: T): Promise<boolean> => {
        const commandBody = this.map.get(command);
        if (commandBody) {
            await commandBody(command);
            return true;
        }
        return false;
    };
}
