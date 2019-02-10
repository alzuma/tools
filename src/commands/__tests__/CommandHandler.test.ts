import { ShareName } from './ShareName';
import { CommandHandlerMap } from '../CommandHandlerMap';
import { Handlers } from './Handlers';
import { Dispatcher } from '../Dispatcher';

describe('CommandHandler', () => {
    it('Register and execute a command', async () => {
        const messageComposer = jest.fn<string>((name: string, age: number) => {
            return `${name}:${age}`;
        });

        const commandHandlerMap = new CommandHandlerMap(new Handlers());
        const testCommandDispatcher = new Dispatcher(commandHandlerMap);

        await testCommandDispatcher.dispatch(new ShareName({ age: 10, name: 'son', messageComposer }));
        expect(messageComposer).toBeCalledTimes(1);
    });
});
