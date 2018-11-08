const TemplateSearch = require('./template-search');
const fs = require('fs');

class FileTemplateSearch extends TemplateSearch {
    find(name) {
        if (!name) {
            return false;
        }

        return this.searchTemplates(name);
    }

    searchTemplates(name) {
        return fs.readdirSync(name).map(fileName => ({
            directory,
            fileName,
          }));
    }
}

module.exports = FileTemplateSearch;