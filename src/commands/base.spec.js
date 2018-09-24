const BaseCommand = require('./base');

describe('base test', () => {
    test('should have 0 arguments', () => {
        expect((new BaseCommand()).arguments.length).toBe(0)
    });

    test('calling run should call executeCommand', () => {
        const command = getInstance();
        command.executeCommand = jest.fn();
        command.run({name: 'test'});
        expect(command.executeCommand).toBeCalled();
    });

    test('calling run should send args to executeCommand', () => {
        const command = getInstance();
        command.executeCommand = jest.fn();
        const ob = {name: 'testRandom' + Math.random};
        command.run(ob);
        expect(command.executeCommand.mock.calls[0][0]).toEqual(ob);
    });

    function getInstance() {
        return new BaseCommand();
    }
});