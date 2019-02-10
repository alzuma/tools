import { CommandHandler } from '../CommandHandler';
import { Dictionary } from '../..';
import { RegisterUser } from './RegisterUser';

export class UserHandler extends CommandHandler {
    private fakeRepo: Dictionary<string, number> = new Dictionary();

    constructor() {
        super();

        this.register(RegisterUser, this.registerUser);
    }

    private registerUser = async (user: RegisterUser): Promise<boolean> => {
        return new Promise(resolve => {
            this.fakeRepo.add(user.name, user.age);
            resolve(true);
        });
    };
}
