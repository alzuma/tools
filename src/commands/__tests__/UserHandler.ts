import { CommandHandler } from '../CommandHandler';
import { Dictionary } from '../..';
import { RegisterUser } from './RegisterUser';

export class UserHandler extends CommandHandler {
    private fakeRepo: Dictionary<string, number> = new Dictionary();

    constructor() {
        super();

        this.register(RegisterUser, async t => {
            const asyncTask = new Promise(resolve => {
                this.fakeRepo.add(t.name, t.age);
                resolve();
            });

            await asyncTask;
        });
    }
}
