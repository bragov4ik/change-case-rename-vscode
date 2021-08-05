// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Cases, renameToCase } from "./variable-change";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "change-case-of-variable" is now active!');

	let commandNameCase: { [id: string]: Cases; } = {
		"changeCaseOfVariable.camelCase" : Cases.camelCase,
		"changeCaseOfVariable.capitalCase" : Cases.capitalCase,
		"changeCaseOfVariable.constantCase" : Cases.constantCase,
		"changeCaseOfVariable.dotCase" : Cases.dotCase,
		"changeCaseOfVariable.headerCase" : Cases.headerCase,
		"changeCaseOfVariable.noCase" : Cases.noCase,
		"changeCaseOfVariable.paramCase" : Cases.paramCase,
		"changeCaseOfVariable.pascalCase" : Cases.pascalCase,
		"changeCaseOfVariable.pathCase" : Cases.pathCase,
		"changeCaseOfVariable.sentenceCase" : Cases.sentenceCase,
		"changeCaseOfVariable.snakeCase" : Cases.snakeCase
	};

	// Register all commands
	let disposables: vscode.Disposable[] = new Array<vscode.Disposable>();
	for (let key in commandNameCase) {
		disposables.push(
			vscode.commands.registerCommand(
				key,
				() => { renameToCase(commandNameCase[key]); }
			)
		);
	}
	
	// Was in example code so let's do the same?
	context.subscriptions.push(...disposables);
}

// this method is called when your extension is deactivated
export function deactivate() {}
