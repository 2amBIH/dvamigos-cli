jest.mock('fs');

describe('FileTemplateSearch specification', () => {

    beforeEach(() =>  require('fs').__setMockFiles({'file/item' : 'testdata'}));

    test('Calling find with empty will return false', () => {
        const instance = getInstance();
        expect(instance.find('')).toBe(false);
        expect(instance.find()).toBe(false);
    });

    test('Calling find with non-existing template will return false', () => {
        const instance = getInstance();
        expect(instance.find('user/non-existing-template')).toBe(false);
    });


    test('Calling find with existing template will return that template', () => {
       
        const existing = getInstance().find('file/item');
        // TODO: implement.
        expect(existing).toEqual({
            name: 'user/non-existing-template'
        });
    });


    function getInstance() {
        const FileTemplateSearch = require('./file-template-search');
        const instance = new FileTemplateSearch();

        return instance;
    }
});