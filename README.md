# Change case rename VSCode extension

This extension allows changing case of symbols by utilizing renaming feature.

Case changing is performed via *change-case* ([npm](https://www.npmjs.com/package/change-case), [github](https://github.com/blakeembrey/change-case)) package. Renaming is provided by *Visual Studio Code* API.

## Features

Rename the symbol (word) under the cursor by executing `Rename to ... case` command. All occurences
of the symbol will be changed to the selected writing style.

For example, to convert `variableA` to snake case (`variable_a`), put the cursor on the
variable of interest and run command `Rename to snake case`

![change-case-rename-demo](https://user-images.githubusercontent.com/8144358/128406502-3223ba4c-8559-4a39-8d6f-0d72373786a3.gif)

For detailed description for transformations see [*change-case* github](https://github.com/blakeembrey/change-case)

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release
