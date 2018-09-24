const BaseCommand = require('./base');

describe('base test', () => {
    test('should have 0 arguments', () => {
        expect((new BaseCommand()).arguments.length).toBe(0)
    });
});