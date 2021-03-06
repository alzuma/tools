import { LinkedList } from '../LinkedList';

describe('LinkedList tests', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
        const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        list.fromArray(data);
    });

    test('List from array', () => {
        expect(list.size()).toBe(10);
    });

    test('List to array', () => {
        const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        expect(expected).toEqual(list.toArray());
    });

    test('Test previous value', () => {
        const five = list.find(_ => _ === 5);
        expect(five.previous.value).toBe(4);
    });

    test('Test previous value at beginning', () => {
        const head = list.getHead();
        expect(head.previous).toBeFalsy();
    });

    test('Test previous value at end', () => {
        const tail = list.getTail();
        expect(tail.previous.value).toBe(9);
    });

    test('Test previous value after removing', () => {
        list.delete(5);
        const six = list.find(_ => _ === 6);
        expect(six.previous.value).toBe(4);
    });

    test('Test previous of tail value after removing', () => {
        list.delete(0);
        const tail = list.getTail();
        expect(tail.previous.value).toBe(8);
    });

    test('Test previous of head value after removing', () => {
        list.delete(1);
        const head = list.getHead();
        expect(head.previous).toBeFalsy();
    });

    test('Test previous of second node after head removed', () => {
        list.delete(1);
        const second = list.find(_ => _ === 3);
        expect(second.previous.value).toBe(2);
        expect(second.previous).toEqual(list.getHead());
    });

    test('Append in the front of a list', () => {
        const expected: string[] = ['hi', 'mom!'];
        const stringList = new LinkedList<string>();
        stringList.insert('mom!');
        stringList.insert('hi');
        expect(stringList.toArray()).toEqual(expected);
    });

    test('Append to list', () => {
        const expected: string[] = ['hi', 'mom!'];
        const stringList = new LinkedList<string>();
        stringList.append('hi').append('mom!');
        expect(stringList.toArray()).toEqual(expected);
    });

    test('Search for mom', () => {
        const stringList = new LinkedList<string>();
        stringList
            .append('<mock>')
            .append('hi')
            .append('mom!')
            .append('<mock>');

        const result = stringList.find(_ => _ === 'mom!');
        expect(result).toBeTruthy();
        expect(result.value).toBe('mom!');
    });

    test('Search in a empty list', () => {
        const stringList = new LinkedList<string>();
        const result = stringList.find(_ => _ === 'mom where are you?');
        expect(result).toBeFalsy();
    });

    test('Search for an item not in a list', () => {
        const stringList = new LinkedList<string>();
        stringList
            .append('Hi son!')
            .append("I'm here")
            .append('where are you?');
        const result = stringList.find(_ => _ === 'mom where are you?');
        expect(result).toBeFalsy();
    });

    test('Delete an item', () => {
        const expected: number[] = [2, 3, 4, 6, 7, 8, 9];

        list.delete(5);
        list.delete(1);
        list.delete(0);

        expect(expected).toEqual(list.toArray());
    });

    test('Delete an item not in list', () => {
        const result = list.delete(50);
        expect(result).toBeFalsy();
    });

    test('Delete from empty list', () => {
        const stringList = new LinkedList<string>();
        const result = stringList.delete('where are you mom?!');
        expect(result).toBeFalsy();
    });

    test('Delete object from list', () => {
        const object = { message: 'hi mom!' };
        const objectList = new LinkedList<any>();
        objectList.append(object);
        const result = objectList.delete(object);
        expect(result).toBeTruthy();
    });

    test('Delete last item from item', () => {
        const stringList = new LinkedList<string>();
        stringList.append('where are you mom?!');
        const result = stringList.delete('where are you mom?!');
        expect(result).toBeTruthy();
    });

    test('Test iterate items', () => {
        const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const items = list.items();
        let next = items.next();

        const result: number[] = [];
        while (!next.done) {
            result.push(next.value.value);
            next = items.next();
        }
        expect(result).toEqual(expected);
    });
});
