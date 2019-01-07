import { TFunction } from '../Types';
import { Dictionary } from '..';

export class AggregateRoot {
    private handlers: Dictionary<string, TFunction<object, Promise<void>>> = new Dictionary();
}
