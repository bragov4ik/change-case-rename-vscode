// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {
	camelCase,
	capitalCase,
	constantCase,
	dotCase,
	headerCase,
	noCase,
	paramCase,
	pascalCase,
	pathCase,
	sentenceCase,
	snakeCase,
  } from "change-case";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "change-case-of-variable" is now active!');

	let genericError = 'Unable to change case: ';

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('change-case-of-variable.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Change case of variable!');
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage(genericError + 'no active editor!');
			return undefined;
		}

		let position = editor.selection.active;

		console.log(
			`Position is \nL:${position.line}\nC:${position.character}`
		);

		let document = editor.document;
		let curRange = document.getWordRangeAtPosition(position);

		if (!curRange) {
			vscode.window.showInformationMessage(genericError + "can't find word under the cursor!");
			return undefined;
		}

		let word = document.getText(curRange);
		let updatedWord = snakeCase(word);
		console.log(`Would change word '${word}' to '${updatedWord}'`);

		// let promise = vscode.commands.executeCommand<vscode.DocumentSymbol[]>("vscode.executeDocumentSymbolProvider", editor?.document.uri);
		
		// promise.then(
		// 	(a) => {
		// 		var result = a;
		// 		if (result) {
		// 			console.log(result);
		// 			console.log(result[0]);
		// 		}
		// 	},
		// 	(err) => {
		// 		console.log(`Error getting symbols '${err}'`);
		// 	});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
