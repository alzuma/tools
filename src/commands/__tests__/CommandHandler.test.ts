import { CommandHandlerMap } from '../CommandHandlerMap';
import { Handlers } from './Handlers';
import { Dispatcher } from '../Dispatcher';
import { RegisterUser } from './RegisterUser';

describe('CommandHandler', () => {
    it('Register and execute a command', async () => {
        const commandHandlerMap = new CommandHandlerMap(new Handlers());

        const dispatcher = new Dispatcher(commandHandlerMap);

        const registerUser = new RegisterUser({ age: 10, name: 'son' });

        const result = await dispatcher.dispatch(registerUser);

        expect(result).toBeTruthy();
    });
});
