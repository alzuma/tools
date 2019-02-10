import { Dictionary, Func } from '..';
export declare class CommandHandler {
    readonly handlers: Dictionary<string, Func<object, Promise<any>>>;
    protected register: <T extends object, R>(c: new () => T, handler: Func<T, Promise<R>>) => void;
}
