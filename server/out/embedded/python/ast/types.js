/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class VisitableItem {
}
exports.VisitableItem = VisitableItem;
class Block extends VisitableItem {
    constructor(childs) {
        super();
        this.childs = [];
        if (childs) {
            this.childs = childs;
        }
    }
}
exports.Block = Block;
class CodeBlock extends Block {
    accept(visitor) {
        if (visitor.visitCodeBlock) {
            return visitor.visitCodeBlock(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `CodeBlock(${this.childs.join(', ')})`;
    }
}
exports.CodeBlock = CodeBlock;
class Statement extends Block {
    constructor(expression) {
        super();
        this.expression = expression;
        if (expression) {
            this.start = expression.start;
            this.end = expression.end;
        }
    }
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `Statement(${this.expression})`;
    }
}
exports.Statement = Statement;
class Assignment extends VisitableItem {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
        this.start = left.start;
        if (right) {
            this.end = right.end;
        }
        else {
            this.end = left.end;
        }
    }
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `=(${this.left}, ${this.right})`;
    }
}
exports.Assignment = Assignment;
class Expression extends VisitableItem {
    constructor(terms) {
        super();
        this.terms = [];
        this.terms = terms;
        let term = terms.filter(term => term !== null).find(term => term.start !== null && term.end !== null);
        if (term) {
            this.start = term.start;
            this.end = term.end;
        }
    }
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `Expression(${this.terms.join(', ')})`;
    }
}
exports.Expression = Expression;
class VariableReference extends VisitableItem {
    constructor(value, start, end) {
        super();
        this.value = value;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitVariableReference) {
            return visitor.visitVariableReference(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `Variable(${this.value})`;
    }
}
exports.VariableReference = VariableReference;
class MethodReference extends VisitableItem {
    constructor(name, args, start, end) {
        super();
        this.args = [];
        this.name = name;
        this.args = args;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitMethodReference) {
            return visitor.visitMethodReference(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `Method(${this.name}(${this.args.join(', ')}))`;
    }
}
exports.MethodReference = MethodReference;
class ArrayReference extends VisitableItem {
    constructor(variable, index, start, end) {
        super();
        this.variable = variable;
        this.index = index;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitArrayReference) {
            return visitor.visitArrayReference(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `${this.variable}[${this.index}]`;
    }
}
exports.ArrayReference = ArrayReference;
class Integer extends VisitableItem {
    constructor(value, start, end) {
        super();
        this.value = value;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `${this.value}i`;
    }
}
exports.Integer = Integer;
class Float extends VisitableItem {
    constructor(value, start, end) {
        super();
        this.value = value;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitFloat) {
            return visitor.visitFloat(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `${this.value}f`;
    }
}
exports.Float = Float;
class Text extends VisitableItem {
    constructor(value, start, end) {
        super();
        this.value = value;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitText) {
            return visitor.visitText(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `${this.value}`;
    }
}
exports.Text = Text;
class PyQpandaBoolean extends VisitableItem {
    constructor(value, start, end) {
        super();
        this.value = value;
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitText) {
            return visitor.visitBoolean(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `${this.value}`;
    }
}
exports.PyQpandaBoolean = PyQpandaBoolean;
class Dictionary extends VisitableItem {
    constructor(start, end) {
        super();
        this.value = '';
        this.start = start;
        this.end = end;
    }
    accept(visitor) {
        if (visitor.visitText) {
            return visitor.visitDictionary(this);
        }
        return visitor.defaultValue();
    }
    toString() {
        return `Dictionary()`;
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=types.js.map