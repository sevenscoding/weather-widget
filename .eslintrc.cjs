module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },

    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/eslint-config-prettier'
    ],

    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        '@typescript-eslint/no-explicit-any': 'off'
    }
}