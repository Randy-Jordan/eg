import globals from "globals";
export default [
    {
        ignores: ["node_modules/"]
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser, // Adds browser-specific globals like `window` and `document`
            }
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'warn', // Keep as a warning since `console` might be useful for debugging in dev
        }
    }
];

