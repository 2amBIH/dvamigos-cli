const BaseCommand = require('./base');

class NewCommand extends BaseCommand {
    get arguments() {
        return [
            {
                name: "name",
                settableByIndex: true,
                required: true,
                description: 'Name of the project which will be created'
            }
        ];
    }

    executeCommand(args) {
        
    }
}

module.exports = NewCommand;