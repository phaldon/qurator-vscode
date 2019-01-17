/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("antlr4ts/tree");
const Python3Lexer_1 = require("../antlr/Python3Lexer");
const types_1 = require("./types");
class TreeFolder extends tree_1.AbstractParseTreeVisitor {
    defaultResult() {
        return new types_1.CodeBlock();
    }
    visitProgram(ctx) {
        let toStatement = (statement) => statement.accept(new StatementFolder());
        let notUndefinedStatements = (block) => block !== undefined;
        let innerBlocks = ctx
            .stmt()
            .map(toStatement)
            .filter(notUndefinedStatements);
        return new types_1.CodeBlock(innerBlocks);
    }
}
exports.TreeFolder = TreeFolder;
class StatementFolder extends tree_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitSimple_stmt(ctx) {
        return ctx.accept(new ExpressionStatementFolder());
    }
    visitCompound_stmt(ctx) {
        let innerBlocks = ctx.accept(new CompoundStatementFolder());
        let result = new types_1.CodeBlock(innerBlocks);
        result.start = {
            line: ctx.start.line,
            column: ctx.start.charPositionInLine
        };
        result.end = {
            line: ctx.stop.line,
            column: ctx.stop.charPositionInLine
        };
        return result;
    }
}
exports.StatementFolder = StatementFolder;
class CompoundStatementFolder extends tree_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitSuite(ctx) {
        let toStatement = (statement) => statement.accept(new StatementFolder());
        let notUndefinedStatements = (block) => block !== undefined;
        return ctx
            .stmt()
            .map(toStatement)
            .filter(notUndefinedStatements);
    }
}
exports.CompoundStatementFolder = CompoundStatementFolder;
class ExpressionStatementFolder extends tree_1.AbstractParseTreeVisitor {
    defaultResult() {
        return this.foldedStatement;
    }
    visitExpr_stmt(ctx) {
        let toExpression = (expression) => {
            let expressionFolder = new ExpressionFolder();
            return expression.accept(expressionFolder);
        };
        let creatingAssignments = (a, b) => (b !== null ? new types_1.Assignment(b, a) : b);
        let expression = ctx
            .testlist_star_expr()
            .map(toExpression)
            .reduceRight(creatingAssignments);
        this.foldedStatement = new types_1.Statement(expression);
        return this.foldedStatement;
    }
}
exports.ExpressionStatementFolder = ExpressionStatementFolder;
class ExpressionFolder extends tree_1.AbstractParseTreeVisitor {
    defaultResult() {
        return null;
    }
    visitPower(ctx) {
        let terminalFolder = new TerminalFolder();
        let trailerFolder = new TrailerFolder();
        let terms = [];
        terms.push(ctx.atom().accept(terminalFolder));
        terms.push(...ctx.trailer().map(trailer => trailer.accept(trailerFolder)));
        return this.asExpressionWithFoldedTerms(terms);
    }
    asExpressionWithFoldedTerms(terms) {
        let translatingFromDisposableItem = (a, b) => {
            if (b instanceof Arguments) {
                let variable = a.pop();
                a.push(this.asMethodReference(variable, b));
            }
            else if (b instanceof ArrayIndex) {
                let variable = a.pop();
                a.push(this.asArrayReference(variable, b));
            }
            else {
                a.push(b);
            }
            return a;
        };
        return new types_1.Expression(terms.reduce(translatingFromDisposableItem, []));
    }
    asMethodReference(variable, argsItem) {
        return new types_1.MethodReference(variable.value, argsItem.args, variable.start, variable.end);
    }
    asArrayReference(variable, arrayIndex) {
        let index = arrayIndex.indexes.reduce((a, b) => this.numberValue(b) || a, 0);
        return new types_1.ArrayReference(variable.value, index, variable.start, variable.end);
    }
    numberValue(item) {
        if (item instanceof types_1.Expression) {
            return item.terms.reduce((a, b) => (b instanceof types_1.Integer ? b.value : a), 0);
        }
        return 0;
    }
}
exports.ExpressionFolder = ExpressionFolder;
class TrailerFolder extends tree_1.AbstractParseTreeVisitor {
    defaultResult() {
        return null;
    }
    visitTrailer(ctx) {
        let start = PositionCalc.startContext(ctx);
        let end = PositionCalc.endContext(ctx);
        if (ctx.text.startsWith('(')) {
            if (ctx.arglist() === undefined) {
                return new Arguments([], start, end);
            }
            let expressionFolder = new ExpressionFolder();
            let args = ctx
                .arglist()
                .argument()
                .map(argument => argument.accept(expressionFolder));
            return new Arguments(args, start, end);
        }
        else if (ctx.text.startsWith('[')) {
            if (ctx.subscriptlist() === undefined) {
                return new ArrayIndex([], start, end);
            }
            let expressionFolder = new ExpressionFolder();
            let expressions = ctx
                .subscriptlist()
                .subscript()
                .map(subscript => subscript.accept(expressionFolder));
            return new ArrayIndex(expressions, start, end);
        }
        let terminalFolder = new TerminalFolder();
        return ctx.NAME().accept(terminalFolder);
    }
}
class TerminalFolder extends tree_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.result = null;
    }
    defaultResult() {
        return this.result;
    }
    visitTerminal(node) {
        let start = PositionCalc.startToken(node.symbol);
        let end = PositionCalc.endToken(node.symbol);
        switch (node.symbol.type) {
            case Python3Lexer_1.Python3Lexer.NAME:
                return new types_1.VariableReference(node.text, start, end);
            case Python3Lexer_1.Python3Lexer.TRUE:
                return new types_1.PyQpandaBoolean(true, start, end);
            case Python3Lexer_1.Python3Lexer.FALSE:
                return new types_1.PyQpandaBoolean(false, start, end);
            default:
                return this.result;
        }
    }
    visitDictorsetmaker(ctx) {
        let start = PositionCalc.startContext(ctx);
        let end = PositionCalc.endContext(ctx);
        this.result = new types_1.Dictionary(start, end);
        return this.result;
    }
    visitNumber(ctx) {
        let start = PositionCalc.startContext(ctx);
        let end = PositionCalc.endContext(ctx);
        if (ctx.text.includes('.')) {
            return new types_1.Float(+ctx.text, start, end);
        }
        else {
            return new types_1.Integer(+ctx.text, start, end);
        }
    }
    visitStr(ctx) {
        let start = PositionCalc.startContext(ctx);
        let end = PositionCalc.endContext(ctx);
        return new types_1.Text(ctx.text, start, end);
    }
}
class Arguments extends types_1.VisitableItem {
    constructor(args, start, end) {
        super();
        this.args = [];
        this.args = args;
        this.start = start;
        this.end = end;
    }
    accept(_visitor) {
        return null;
    }
    toString() {
        return `Arguments(${this.args.join(',')})`;
    }
}
class ArrayIndex extends types_1.VisitableItem {
    constructor(indexes, start, end) {
        super();
        this.indexes = [];
        this.indexes = indexes;
        this.start = start;
        this.end = end;
    }
    accept(_visitor) {
        return null;
    }
    toString() {
        return `ArrayIndex(${this.indexes.join(',')})`;
    }
}
var PositionCalc;
(function (PositionCalc) {
    function startContext(ctx) {
        return {
            line: ctx.start.line - 1,
            column: ctx.start.charPositionInLine
        };
    }
    PositionCalc.startContext = startContext;
    function endContext(ctx) {
        return {
            line: ctx.stop.line - 1,
            column: ctx.stop.charPositionInLine
        };
    }
    PositionCalc.endContext = endContext;
    function startToken(token) {
        return {
            line: token.line - 1,
            column: token.charPositionInLine
        };
    }
    PositionCalc.startToken = startToken;
    function endToken(token) {
        return {
            line: token.line - 1,
            column: token.charPositionInLine + token.text.length + 1
        };
    }
    PositionCalc.endToken = endToken;
})(PositionCalc || (PositionCalc = {}));
//# sourceMappingURL=treeFolder.js.map