let level = 0;

module.exports = {
    out: process.stdout.write.bind(process.stdout),
    line: writeOutputLine,
    error: writeOutputError,
    indent: indentOutput,
    outdent: outdentOutput
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