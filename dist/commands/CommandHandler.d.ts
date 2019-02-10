import { Dictionary, Func } from '..';
export declare class CommandHandler {
    readonly handlers: Dictionary<string, Func<object, Promise<void>>>;
    protected register: <T extends object>(c: new () => T, handler: Func<T, Promise<void>>) => void;
}
