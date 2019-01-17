/**
 * 
 */

'use strict';

import { QRunesDocument } from '../parser/qrunesParser';
import { createScanner } from '../parser/qrunesScanner';
import { TextDocument, Range, Position, DocumentHighlightKind, DocumentHighlight } from 'vscode-languageserver-types';
import { TokenType } from '../qrunesLanguageTypes';

export function findDocumentHighlights(document: TextDocument, position: Position, qrunesDocument: QRunesDocument): DocumentHighlight[] {
	let offset = document.offsetAt(position);
	let node = qrunesDocument.findNodeAt(offset);
	if (!node.tag) {
		return [];
	}
	let result = [];
	let startTagRange = getTagNameRange(TokenType.StartTag, document, node.start);
	if (startTagRange && covers(startTagRange, position)) {
		if (startTagRange) {
			result.push({ kind: DocumentHighlightKind.Read, range: startTagRange });
		}
	}
	return result;
}

function isBeforeOrEqual(pos1: Position, pos2: Position) {
	return pos1.line < pos2.line || (pos1.line === pos2.line && pos1.character <= pos2.character);
}

function covers(range: Range, position: Position) {
	return isBeforeOrEqual(range.start, position) && isBeforeOrEqual(position, range.end);
}

function getTagNameRange(tokenType: TokenType, document: TextDocument, startOffset: number): Range | null {
	let scanner = createScanner(document.getText(), startOffset);
	let token = scanner.scan();
	while (token !== TokenType.EOS && token !== tokenType) {
		token = scanner.scan();
	}
	if (token !== TokenType.EOS) {
		return { start: document.positionAt(scanner.getTokenOffset()), end: document.positionAt(scanner.getTokenEnd()) };
	}
	return null;
}
