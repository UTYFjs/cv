module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
    'stylelint-config-sass-guidelines',
    // 'stylelint-config-prettier',
    //require.resolve('arui-presets-lint/stylelint'),
  ],
  rules: {
    'import-notation': 'string',
    'media-query-no-invalid': null,
    'declaration-no-important': true,
    'no-duplicate-selectors': true,
    'font-weight-notation': 'numeric',
    'comment-empty-line-before': 'always',
    'rule-empty-line-before': 'always-multi-line',
    'color-no-invalid-hex': [true, { reportDisables: true }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
