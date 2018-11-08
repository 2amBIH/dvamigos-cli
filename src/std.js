let level = 0;

module.exports = {
    out: writeOutput,
    line: writeOutputLine,
    error: writeOutputError,
    indent: indentOutput,
    outdent: outdentOutput,
    parseArguments: parseArguments
};

function writeOutput(message) {
    process.stdout.write("\t".repeat(level) + message);
}

function writeOutputLine() {
    console.log.apply(console, getIndentedArgs.apply(null, arguments));
}

function writeOutputError() {
    console.error.apply(console, getIndentedArgs.apply(null, arguments));
}

function getIndentedArgs() {
    return (level > 0 ? ["\t".repeat(level)] : []).concat(Array.from(arguments));
}

function indentOutput() {
    level++;
}

function outdentOutput() {
    level = Math.max(level - 1, 0);
}

function parseArguments(args) {
    args = args
        .filter(i => i.length > 0 && !i.match(/^(--.(=.*)?|-[^-=]{2,}(=.*)?)$/))
        .map(i => i.replace('--', '').replace('-', '').split('='));
        
    return {
        order: args.reduce((a, [key]) => a.push(key) && a, []),
        items: args.reduce((acc, [key, value]) => {
            acc[key] = value !== undefined ? value : true;
            return acc;
        }, {})
    }
}