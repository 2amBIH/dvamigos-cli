const std = require('./std');

describe('arguments parser test', () => {
    test('passing 0 arguments should have object with 0 keys', () => {
        const result = std.parseArguments([]);
        expect(Object.keys(result.items).length).toBe(0);
    });

    test('passing empty string should have object with 0 keys', () => {
        const result = std.parseArguments(['']);
        expect(Object.keys(result.items).length).toBe(0);
    });

    test('do not allow short args with double slash', () => {
        const result = std.parseArguments(['--n']);
        expect(result.items).toEqual({});
    });

    test('do not allow long args with one slash', () => {
        const result = std.parseArguments(['-argument']);
        expect(result.items).toEqual({});
    });

    test('order of passed arguments must be preserved', () => {
        const result = std.parseArguments(['--argument', '-n', '-a=3', 'test']);
        expect(result.order).toEqual(['argument', 'n', 'a', 'test']);
    });

    test('all empty strings should be filtered out', () => {
        const result = std.parseArguments(['', '-n', '-a=2']);
        expect(result.items).toEqual({n: true, a: '2'});
    });

    test('passing 1 short argument should have object with that argument', () => {
        const result = std.parseArguments(['-n=1']);
        expect(result.items).toEqual({n: '1'});
    });

    test('passing 1 short argument without value should have object with that argument as true value', () => {
        const result = std.parseArguments(['-n']);
        expect(result.items).toEqual({n: true});
    });

    test('passing 1 long argument should have object with that argument', () => {
        const result = std.parseArguments(['--argument=1']);
        expect(result.items).toEqual({argument: '1'});
    });

    test('passing 1 long argument without value should have object with that argument as true value', () => {
        const result = std.parseArguments(['--argument']);
        expect(result.items).toEqual({argument: true});
    });
});