import { CommandHandler } from '../CommandHandler';
import { ShareName } from './TestCommand';

export class TestCommandHandler extends CommandHandler {
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
