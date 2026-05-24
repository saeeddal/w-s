const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  // TypeScript files configuration
  {
    files: ['**/*.ts'],
    ignores: ['dist/**/*', 'node_modules/**/*', '.angular/**/*'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: [
          'tsconfig.json',
          'projects/nn_app/tsconfig.app.json',
          'projects/pars-lib/tsconfig.lib.json',
        ],
        sourceType: 'module',
        ecmaVersion: 'latest',
        warnOnUnsupportedTypeScriptVersion: false, // Add this line to suppress warning
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@angular-eslint': angular,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...angular.configs.recommended.rules,

      'no-console': 'error',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app', 'pt'],
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'public-instance-field',
            'public-constructor',
            'public-method',
            'protected-static-field',
            'protected-instance-field',
            'protected-constructor',
            'protected-method',
            'private-static-field',
            'private-instance-field',
            'private-constructor',
            'private-method',
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
    },
  },

  // HTML files configuration
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false, // Add this line here too
      },
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
    },
  },
];
