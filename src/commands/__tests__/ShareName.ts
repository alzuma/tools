export class ShareName {
    public name: string;
    public age: number;
    public messageComposer: (name: string, age: number) => string;

    constructor(data?: Partial<ShareName>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
