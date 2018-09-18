module.exports = {
    description: "Adds API folder to project.",
    depends: [], // Feature dependends on other feature names.
    arguments: {
        "add-db": {
            name: "Adds DB",
            short: "d",
            required: true
        }
    },
    run: runFeature
};

function runFeature() {

}