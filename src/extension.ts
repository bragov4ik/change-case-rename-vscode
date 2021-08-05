
import * as vscode from 'vscode';
import { Cases, renameToCase } from "./variable-change";

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Extension "change-case-of-symbol" is loaded');

	let commandNameCase: { [id: string]: Cases; } = {
		"changeCaseOfSymbol.camelCase" : Cases.camelCase,
		"changeCaseOfSymbol.capitalCase" : Cases.capitalCase,
		"changeCaseOfSymbol.constantCase" : Cases.constantCase,
		"changeCaseOfSymbol.dotCase" : Cases.dotCase,
		"changeCaseOfSymbol.headerCase" : Cases.headerCase,
		"changeCaseOfSymbol.noCase" : Cases.noCase,
		"changeCaseOfSymbol.paramCase" : Cases.paramCase,
		"changeCaseOfSymbol.pascalCase" : Cases.pascalCase,
		"changeCaseOfSymbol.pathCase" : Cases.pathCase,
		"changeCaseOfSymbol.sentenceCase" : Cases.sentenceCase,
		"changeCaseOfSymbol.snakeCase" : Cases.snakeCase
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
