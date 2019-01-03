import { TConsumer } from '../Types';

export interface IIterable<T> {
    iterate: (accept: TConsumer<T>) => void;
}
