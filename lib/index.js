'use strict';

var rules = {};

/**
* RULE: array-bracket-spacing
*	Specifies the use of spacing within `[]`. See [array-bracket-spacing]{@link http://eslint.org/docs/rules/array-bracket-spacing}.
*/
rules[ 'array-bracket-spacing' ] = [ 2, 'always', {
	'singleValue': true,
	'objectsInArrays': false,
	'arraysInArrays': false
}];

/**
* RULE: block-spacing
*	Specifies the use of spacing within single-line blocks. See [block-spacing]{@link http://eslint.org/docs/rules/block-spacing}.
*/
rules[ 'block-spacing' ] = [ 2, 'always' ];

/**
* RULE: brace-style
*	Specifies a curly brace style. See [brace-style]{@link http://eslint.org/docs/rules/brace-style}.
*/
rules[ 'brace-style' ] = [ 1, '1tbs', {
	'allowSingleLine': false
}];

/**
* RULE: camelcase
*	Require camelcased variable names, but relax the restriction for property names. See [camelcase]{@link http://eslint.org/docs/rules/camelcase}.
*/
rules[ 'camelcase' ] = [ 2, {
	'properties': 'never'
}];

/**
* RULE: comma-spacing
*	Specify the use of spacing around commas. See [comma-spacing]{@link http://eslint.org/docs/rules/comma-spacing}.
*/
rules[ 'comma-spacing' ] = [ 2, {
	'before': false,
	'after': true
}];

/**
* RULE: comma-style
*	Specify a comma style. See [comma-style]{@link http://eslint.org/docs/rules/comma-style}.
*/
rules[ 'comma-style' ] = [ 2, 'last' ];

/**
* RULE: computed-property-spacing
*	Specify the use of whitespace within computed properties. See [computed-property-spacing]{@link http://eslint.org/docs/rules/computed-property-spacing}.
*/
rules[ 'computed-property-spacing' ] = [ 2, 'always' ];

/**
* RULE: consistent-this
*	Require a `this` variable to only be aliased as `self`. See [consistent-this]{@link http://eslint.org/docs/rules/consistent-this}.
*/
rules[ 'consistent-this' ] = [ 2, 'self' ];

/**
* RULE: eol-last
*	Always require an end-of-line character at the end of non-empty files, thus allowing for appending to and concatenating files. See [eol-last]{@link http://eslint.org/docs/rules/eol-last}.
*/
rules[ 'eol-last' ] = 2;

/**
* RULE: func-names
*	Always require that functions have a name to aid debugging. See [func-names]{@link http://eslint.org/docs/rules/func-names}.
*/
rules[ 'func-names' ] = 2;

/**
* RULE: func-style
*	Always require function declarations and never allow function expressions. See [func-style]{@link http://eslint.org/docs/rules/func-style}.
*/
rules[ 'func-style' ] = [ 2, 'declaration' ];

/**
* RULE: id-length
*	Limit the maximum length an identifier name may be. See [id-length]{@link http://eslint.org/docs/rules/id-length}.
*/
rules[ 'id-length' ] = [ 1, {
	'max': 15
}];

/**
* RULE: id-match
*	Do not impose draconian name restrictions. See [id-match]{@link http://eslint.org/docs/rules/id-match}.
*/
rules[ 'id-match' ] = 0;

/**
* RULE: indent
*	Require tabs, except for `case` statements. See [indent]{@link http://eslint.org/docs/rules/indent}.
*/
rules[ 'indent' ] = [ 2, 'tab', {
	'SwitchCase': 0
}];

/**
* RULE: key-spacing
*	Specify the use of whitespace around the ':' in object literal properties. See [key-spacing]{@link http://eslint.org/docs/rules/key-spacing}.
*/
rules[ 'key-spacing' ] = [ 2, {
	'beforeColon': false,
	'afterColon': true
}];

/**
* RULE: lines-around-comment
*	Specify empty lines around comments. See [lines-around-comment]{@link http://eslint.org/docs/rules/lines-around-comment}.
*/
rules[ 'lines-around-comment' ] = [ 2, {
	'beforeLineComment': true,
	'allowBlockStart': true
}];

/**
* RULE: linebreak-style
*	Enforce Unix-style line breaks. See [linebreak-style]{@link http://eslint.org/docs/rules/linebreak-style}.
*/
rules[ 'linebreak-style' ] = [ 2, 'unix' ];

/**
* RULE: max-nested-callbacks
*	Limit the number of nested callbacks. See [max-nested-callbacks]{@link http://eslint.org/docs/rules/max-nested-callbacks}.
*/
rules[ 'max-nested-callbacks' ] = [ 2, 3 ];

/**
* RULE: new-cap
*	Require all uppercase-started functions be called with the `new` operator. See [new-cap]{@link http://eslint.org/docs/rules/new-cap}.
*/
rules[ 'new-cap' ] = [ 2, {
	'newIsCap': false,
	'capIsNew': true
}];

/**
* RULE: new-parens
*	Require parentheses when invoking a function using the `new` operator. See [new-parens]{@link http://eslint.org/docs/rules/new-parens}.
*/
rules[ 'new-parens' ] = 2;

/**
* RULE: newline-after-var
*	Allow a newline after variable declarations. See [newline-after-var]{@link http://eslint.org/docs/rules/newline-after-var}.
*/
rules[ 'newline-after-var' ] = 0;

/**
* RULE: no-array-constructor
*	Never allow the use of the `Array` constructor when an array literal can be used. See [no-array-constructor]{@link http://eslint.org/docs/rules/no-array-constructor}.
*/
rules[ 'no-array-constructor' ] = 2;

/**
* RULE: no-continue
*	Allow the use of the `continue` statement. See [no-continue]{@link http://eslint.org/docs/rules/no-continue}.
*/
rules[ 'no-continue' ] = 0;

/**
* RULE: no-inline-comments
*	Warn when inline comments are found. See [no-inline-comments]{@link http://eslint.org/docs/rules/no-inline-comments}.
*/
rules[ 'no-inline-comments' ] = 1;

/**
* RULE: no-lonely-if
*	Never allow an `if` statement to be the only statement in an `else` block. See [no-lonely-if]{@link http://eslint.org/docs/rules/no-lonely-if}.
*/
rules[ 'no-lonely-if' ] = 2;

/**
* RULE: no-mixed-spaces-and-tabs
*	Never allow mixed spaces and tabs. See [no-mixed-spaces-and-tabs]{@link http://eslint.org/docs/rules/no-mixed-spaces-and-tabs}.
*/
rules[ 'no-mixed-spaces-and-tabs' ] = 2;

/**
* RULE: no-multiple-empty-lines
*	Allow a maximum of two empty lines. See [no-multiple-empty-lines]{@link http://eslint.org/docs/rules/no-multiple-empty-lines}.
*/
rules[ 'no-multiple-empty-lines' ] = [ 2, {
	'max': 2
}];

/**
* RULE: no-nested-ternary
*	Never allowed nested ternary expressions. See [no-nested-ternary]{@link http://eslint.org/docs/rules/no-nested-ternary}.
*/
rules[ 'no-nested-ternary' ] = 2;

/**
* RULE: no-new-object
*	Never use the `new` operator to create a new Object, when the more concise `{}` syntax suffices. See [no-new-object]{@link http://eslint.org/docs/rules/no-new-object}.
*/
rules[ 'no-new-object' ] = 2;

/**
* RULE: no-spaced-func
*	Never allow whitespace between a function identifier and its application. See [no-spaced-func]{@link http://eslint.org/docs/rules/no-spaced-func}.
*/
rules[ 'no-spaced-func' ] = 2;

/**
* RULE: no-ternary
*	Allow the use of ternary operators. See [no-ternary]{@link http://eslint.org/docs/rules/no-ternary}.
*/
rules[ 'no-ternary' ] = 0;

/**
* RULE: no-trailing-spaces
*	Never allow trailing spaces. See [no-trailing-spaces]{@link http://eslint.org/docs/rules/no-trailing-spaces}.
*/
rules[ 'no-trailing-spaces' ] = 2;

/**
* RULE: no-underscore-dangle
*	Allow dangling underscores to indicate private members. See [no-underscore-dangle]{@link http://eslint.org/docs/rules/no-underscore-dangle}.
*/
rules[ 'no-underscore-dangle' ] = 0;

/**
* RULE: no-unneeded-ternary
*	Never allow unneeded ternary condition expressions. See [no-unneeded-ternary]{@link http://eslint.org/docs/rules/no-unneeded-ternary}.
*/
rules[ 'no-unneeded-ternary' ] = 2;

/**
* RULE: object-curly-spacing
*	Specify the use of whitespace in objects. See [object-curly-spacing]{@link http://eslint.org/docs/rules/object-curly-spacing}.
*/
rules[ 'object-curly-spacing' ] = [ 2, 'always', {
	'objectsInObjects': false,
	'arraysInObjects': false
}];

/**
* RULE: one-var
*	Prefer one variable declaration per function. See [one-var]{@link http://eslint.org/docs/rules/one-var}.
*/
rules[ 'one-var' ] = [ 1, {
	'var': 'always',
	'let': 'always',
	'const': 'never'
}];

/**
* RULE: operator-assignment
*	Prefer operator shorthand. See [operator-assignment]{@link http://eslint.org/docs/rules/operator-assignment}.
*/
rules[ 'operator-assignment' ] = [ 1, 'always' ];

/**
* RULE: operator-linebreak
*	Require that operators be placed on the end of the line. See [operator-linebreak]{@link http://eslint.org/docs/rules/operator-linebreak}.
*/
rules[ 'operator-linebreak' ] = [ 2, 'after' ];

/**
* RULE: padded-blocks
*	Never allow padded blocks. See [padded-blocks]{@link http://eslint.org/docs/rules/padded-blocks}.
*/
rules[ 'padded-blocks' ] = [ 2, 'never' ];

/**
* RULE: quote-props
*	Always quote object literal property names. See [quote-props]{@link http://eslint.org/docs/rules/quote-props}.
*/
rules[ 'quote-props' ] = [ 2, 'always' ];

/**
* RULE: quotes
*	Always use single quotes. See [quotes]{@link http://eslint.org/docs/rules/quotes}.
*/
rules[ 'quotes' ] = [ 2, 'single', 'avoid-escape' ];

/**
* RULE: semi-spacing
*	Specify the use of whitespace around semicolons. See [sem-spacing]{@link http://eslint.org/docs/rules/semi-spacing}.
*/
rules[ 'semi-spacing' ] = [ 2, {
	'before': false,
	'after': true
}];

/**
* RULE: semi
*	Always use semicolons. See [semi]{@link http://eslint.org/docs/rules/semi}.
*/
rules[ 'semi' ] = [ 2, 'always' ];

/**
* RULE: sort-vars
*	Do not enforce alphabetical order when declaring variables. See [sort-vars]{@link http://eslint.org/docs/rules/sort-vars}.
*/
rules[ 'sort-vars' ] = 0;

/**
* RULE: space-after-keywords
*	Always include a space after keywords. See [space-after-keywords]{@link http://eslint.org/docs/rules/space-after-keywords}.
*/
rules[ 'space-after-keywords' ] = [ 2, 'always' ];

/**
* RULE: space-before-blocks
*	Always include a space before blocks. See [space-before-blocks]{@link http://eslint.org/docs/rules/space-before-blocks}.
*/
rules[ 'space-before-blocks' ] = [ 2, 'always' ];

/**
* RULE: space-before-function-paren
*	Never include a space before a function parenthesis. See [space-before-function-paren]{@link http://eslint.org/docs/rules/space-before-function-paren}.
*/
rules[ 'space-before-function-paren' ] = [ 2, 'never' ];

/**
* RULE: space-in-parens
*	Require the use of whitespace within parenthesis. See [space-in-parens]{@link http://eslint.org/docs/rules/space-in-parens}.
*/
rules[ 'space-in-parens' ] = [ 2, 'always', {
	'exceptions': [
		'{}',
		'[]',
		'empty'
	]
}];

/**
* RULE: space-infix-ops
*	Always include a space around operators, except for `x|0`. See [space-infix-ops]{@link http://eslint.org/docs/rules/space-infix-ops}.
*/
rules[ 'space-infix-ops' ] = [ 2, {
	'int32Hint': true
}];

/**
* RULE: space-return-throw-case
*	Always require spaces following `return`, `throw`, `case`. See [space-return-throw-case]{@link http://eslint.org/docs/rules/space-return-throw-case}.
*/
rules[ 'space-return-throw-case' ] = 2;

/**
* RULE: space-unary-ops
*	Always include a space after unary word operators and never include a space after unary operators. See [space-unary-ops]{@link http://eslint.org/docs/rules/space-unary-ops}.
*/
rules[ 'space-unary-ops' ] = [ 2, {
	'words': true,
	'nonwords': false
}];

/**
* RULE: spaced-comment
*	Always include a space after starting a comment. See [spaced-comment]{@link http://eslint.org/docs/rules/spaced-comment}.
*/
rules[ 'spaced-comment' ] = [ 2, 'always' ];

/**
* RULE: wrap-regex
*	Don't require a regex literal to be wrapped in parentheses. See [wrap-regex]{@link http://eslint.org/docs/rules/wrap-regex}.
*/
rules[ 'wrap-regex' ] = 0;


// EXPORTS //

module.exports = rules;
