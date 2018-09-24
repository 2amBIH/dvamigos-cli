class BaseCommand {
    get arguments() {
        return [];
    }

    run(args) {
        this._validateMissingArgs(args);
        this.executeCommand(args);
    }

    _validateMissingArgs(args) {
        const requiredArgs = this.arguments.filter(({required}) => required);
        let missingArgs = [];
        for(let i = 0; i < requiredArgs.length; i++) {
            if (!args.hasOwnProperty(requiredArgs[i].name)) {
                missingArgs.push(requiredArgs[i].name);
            }
        }

        if (missingArgs.length) {
            throw new Error(`Required attribute(s) (${missingArgs.join(", ")}) are not set.`);
        }
    }

    executeCommand(args) {}
}

module.exports = BaseCommand;