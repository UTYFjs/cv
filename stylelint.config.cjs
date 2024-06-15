module.exports = {
  extends: [
    //'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    //'stylelint-config-prettier',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'selector-max-id': 2,
    'import-notation': 'string',
    'media-query-no-invalid': null,
    'declaration-no-important': true,
    'selector-class-pattern': null,
    'no-duplicate-selectors': true,
    'font-weight-notation': 'numeric',
    'comment-empty-line-before': 'always',
    //'rule-empty-line-before': 'always-multi-line',
    'color-no-invalid-hex': [true, { reportDisables: true }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
