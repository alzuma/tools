import { ShareName } from '../test/TestCommand';
import { CommandHandlerMap } from '../CommandHandlerMap';
import { TestCommandHandler } from '../test/TestCommandHandler';
import { Dispatcher } from '../Dispatcher';

describe('CommandHandler', () => {
    it('Register and execute a command', async () => {
        const messageComposer = jest.fn<string>((name: string, age: number) => {
            return `${name}:${age}`;
        });

        const chm = new CommandHandlerMap(new TestCommandHandler());
        const testCommandDispatcher = new Dispatcher(chm);

        await testCommandDispatcher.dispatch(new ShareName({ age: 10, name: 'son', messageComposer }));
        expect(messageComposer).toBeCalledTimes(1);
    });
});
