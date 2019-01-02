module.exports = {
    moduleFileExtensions: ["ts", "js", "node"],
    "transform": {
        "\\.(ts|tsx)$": "ts-jest"
    },
    "globals": {
        "ts-jest": {
            "diagnostics": {
                "ignoreCodes": [
                    151001
                ]
            }
        }
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    collectCoverage: true,
};