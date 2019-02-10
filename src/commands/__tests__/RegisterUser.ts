export class RegisterUser {
    public name: string;
    public age: number;

    constructor(data?: Partial<RegisterUser>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
