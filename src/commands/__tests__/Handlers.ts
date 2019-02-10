import { CommandHandler } from '../CommandHandler';
import { ShareName } from './ShareName';

export class Handlers extends CommandHandler {
    constructor() {
        super();

        this.register(ShareName, async t => {
            const asyncTask = new Promise(resolve => {
                const message: string = t.messageComposer(t.name, t.age);
                resolve(message);
            });

            await asyncTask;
        });
    }
}
