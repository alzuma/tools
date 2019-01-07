import { Dictionary, TFunction } from '..';
export declare class CommandHandler {
    readonly handlers: Dictionary<string, TFunction<object, Promise<void>>>;
    protected register: <T extends object>(c: new () => T, handler: TFunction<T, Promise<void>>) => void;
}
