import globals from "globals"
import eslint from "@eslint/js"
import mocha from 'eslint-plugin-mocha'
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

export default [
    eslint.configs.recommended,
    mocha.configs.flat.recommended,
    eslintConfigPrettier,
    {
        "languageOptions": {
            "sourceType": "commonjs",
            "ecmaVersion": 11,
            "globals": {
                ...globals.node,
                "Atomics": "readonly",
                "SharedArrayBuffer": "readonly"
            }
        },
        "rules": {
            "no-unused-vars": "off"
        },
        plugins: {
            "eslint-plugin-prettier": eslintPluginPrettier
        },
        "ignores": ["eslint.config.mjs", "dist", "node_modules"]
    }
]