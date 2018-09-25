const NewCommand = require('./new');

describe('new command arguments test', () => {

    test('should have arguments', () => {
        expect(getInstance().arguments.length).toBeGreaterThan(0)
    });

    test('argument should have correct config', () => {
        const command = getInstance();
        const nameArg = command.arguments.find(arg => arg.name == "name");
        expect(nameArg).toEqual(            {
            name: "name",
            settableByIndex: true,
            required: true,
            description: 'Name of the project which will be created'
        });
    });

    test('should only have one argument.', () => {
        const command = getInstance();
        const nameArg = command.arguments.find(arg => arg.name == "name");
        expect(nameArg).not.toBe(undefined);
        expect(command.arguments.length).toBe(1);
    });

    test('run should throw error if name is not passed.', () => {
        expect(() => {
            const command = getInstance();
            command.run({});
        }).toThrowError('Required attribute(s) (name) are not set.');
    });

    function getInstance() {
        return new NewCommand();
    }
});