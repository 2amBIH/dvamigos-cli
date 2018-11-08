const TemplateSearch = require('./template-search');

describe('TemplateSearch specification', () => {

    test('Any call to find will return false', () => {
        const instance = getInstance();
        expect(instance.find('template1')).toBe(false);
        expect(instance.find('template2')).toBe(false);
        expect(instance.find('user/template1')).toBe(false);
        expect(instance.find('')).toBe(false);
    });

    function getInstance() {
        return new TemplateSearch();
    }
});