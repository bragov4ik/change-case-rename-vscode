# Change case of symbol VSCode extension

This extension allows changing case of symbols by utilizing renaming feature.

Case changing is performed via *change-case* ([npm](https://www.npmjs.com/package/change-case), [github](https://github.com/blakeembrey/change-case)) package. Renaming is provided by *Visual Studio Code* API.

## Features

Rename the symbol (word) under the cursor by executing `Change case of symbol: ... case` command. All occurences of the symbol will be changed to the selected writing style.

For example, to convert `variableA` to snake case (`variable_a`), put the cursor on the
variable of interest and run command `Change case of symbol: snake case`

![change-case-rename-demo](https://user-images.githubusercontent.com/8144358/128410415-d580e2bd-c43e-4580-8afb-16116d856653.gif)

For detailed description of transformations see [*change-case* github](https://github.com/blakeembrey/change-case)

## Release Notes

### 1.0.0

Initial release
