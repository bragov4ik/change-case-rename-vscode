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

export enum Cases {
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
}

let genericError = 'Unable to change case: ';

function updateCase(newCase: Cases, word: string) {
	let updatedWord: string | undefined;
	if (newCase === Cases.camelCase) {
		updatedWord = camelCase(word);
	}
	else if (newCase === Cases.capitalCase) {
		updatedWord = capitalCase(word);
	}
	else if (newCase === Cases.constantCase) {
		updatedWord = constantCase(word);
	}
	else if (newCase === Cases.dotCase) {
		updatedWord = dotCase(word);
	}
	else if (newCase === Cases.headerCase) {
		updatedWord = headerCase(word);
	}
	else if (newCase === Cases.noCase) {
		updatedWord = noCase(word);
	}
	else if (newCase === Cases.paramCase) {
		updatedWord = paramCase(word);
	}
	else if (newCase === Cases.pascalCase) {
		updatedWord = pascalCase(word);
	}
	else if (newCase === Cases.pathCase) {
		updatedWord = pathCase(word);
	}
	else if (newCase === Cases.sentenceCase) {
		updatedWord = sentenceCase(word);
	}
	else if (newCase === Cases.snakeCase) {
		updatedWord = snakeCase(word);
	}
	else {
		updatedWord = undefined;
	}
	return updatedWord;
}

export async function renameToCase(newCase: Cases) {
	// The code you place here will be executed every time your command is executed
	// Display a message box to the user
	vscode.window.showInformationMessage('Hello World from Change case of variable!');

	// Extract the word to rename
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

	// Change the word's case accordingly
	let updatedWord = updateCase(newCase, word);
	if (!updatedWord) {
		// If happens, it means that not all possible cases were handled 
		// (shouldn't be the case)
		vscode.window.showInformationMessage(genericError + "Error matching new case!");
	}
	console.log(`Changing word '${word}' to '${updatedWord}'`);

	// Rename to the obtained text

	// Honestly I don't know how but await works c:
	let edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
		"vscode.executeDocumentRenameProvider", document.uri, position, updatedWord
	);
	if (!edit) {
		console.log(genericError + `No rename edits to apply.`);
		return undefined;
	}
	vscode.workspace.applyEdit(edit);
	console.log("Edit successfully applied!");
}