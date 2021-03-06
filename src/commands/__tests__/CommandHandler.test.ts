import { CommandHandlerMap } from '../CommandHandlerMap';
import { UserHandler } from './UserHandler';
import { Dispatcher } from '../Dispatcher';
import { RegisterUser } from './RegisterUser';

describe('CommandHandler', () => {
    it('Register and execute a command', async () => {
        const commandHandlerMap = new CommandHandlerMap(new UserHandler());

        const dispatcher = new Dispatcher(commandHandlerMap);

        const registerUser = new RegisterUser({ age: 10, name: 'son' });

        const result = await dispatcher.dispatch(registerUser);

        expect(result).toBe(true);
    });
});
