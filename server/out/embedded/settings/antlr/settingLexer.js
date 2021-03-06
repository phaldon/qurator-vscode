"use strict";
// Generated from setting.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Decorators_1 = require("antlr4ts/Decorators");
const Decorators_2 = require("antlr4ts/Decorators");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class settingLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(settingLexer._ATN, this);
    }
    get vocabulary() {
        return settingLexer.VOCABULARY;
    }
    get grammarFileName() { return "setting.g4"; }
    get ruleNames() { return settingLexer.ruleNames; }
    get serializedATN() { return settingLexer._serializedATN; }
    get modeNames() { return settingLexer.modeNames; }
    static get _ATN() {
        if (!settingLexer.__ATN) {
            settingLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(settingLexer._serializedATN));
        }
        return settingLexer.__ATN;
    }
}
settingLexer.LANGUAGE = 1;
settingLexer.AUTOIMPORT = 2;
settingLexer.COMPILE_ONLY = 3;
settingLexer.EQUAL = 4;
settingLexer.SEMI = 5;
settingLexer.Identifier = 6;
settingLexer.WhiteSpace = 7;
settingLexer.SingleLineComment = 8;
settingLexer.MultiLinesComment = 9;
settingLexer.modeNames = [
    "DEFAULT_MODE"
];
settingLexer.ruleNames = [
    "LANGUAGE", "AUTOIMPORT", "COMPILE_ONLY", "EQUAL", "SEMI", "Identifier",
    "IdentifierNotDigit", "Digit", "Operator", "WhiteSpace", "SingleLineComment",
    "MultiLinesComment"
];
settingLexer._LITERAL_NAMES = [
    undefined, "'language'", "'autoimport'", "'compile_only'", "'='", "';'"
];
settingLexer._SYMBOLIC_NAMES = [
    undefined, "LANGUAGE", "AUTOIMPORT", "COMPILE_ONLY", "EQUAL", "SEMI",
    "Identifier", "WhiteSpace", "SingleLineComment", "MultiLinesComment"
];
settingLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(settingLexer._LITERAL_NAMES, settingLexer._SYMBOLIC_NAMES, []);
settingLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\vq\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
    "\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07E\n\x07\f\x07\x0E\x07" +
    "H\v\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
    "\f\x03\f\x03\f\x03\f\x07\fX\n\f\f\f\x0E\f[\v\f\x03\f\x05\f^\n\f\x03\f" +
    "\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\rh\n\r\f\r\x0E\rk\v\r\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03i\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07" +
    "\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\x02\x11\x02\x02\x13\x02\x02" +
    "\x15\x02\t\x17\x02\n\x19\x02\v\x03\x02\x06\x05\x02C\\aac|\x03\x022;\x05" +
    "\x02\v\f\x0F\x0F\"\"\x04\x02\f\f\x0F\x0Fs\x02\x03\x03\x02\x02\x02\x02" +
    "\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
    "\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
    "\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05$" +
    "\x03\x02\x02\x02\x07/\x03\x02\x02\x02\t<\x03\x02\x02\x02\v>\x03\x02\x02" +
    "\x02\r@\x03\x02\x02\x02\x0FI\x03\x02\x02\x02\x11K\x03\x02\x02\x02\x13" +
    "M\x03\x02\x02\x02\x15O\x03\x02\x02\x02\x17S\x03\x02\x02\x02\x19c\x03\x02" +
    "\x02\x02\x1B\x1C\x07n\x02\x02\x1C\x1D\x07c\x02\x02\x1D\x1E\x07p\x02\x02" +
    "\x1E\x1F\x07i\x02\x02\x1F \x07w\x02\x02 !\x07c\x02\x02!\"\x07i\x02\x02" +
    "\"#\x07g\x02\x02#\x04\x03\x02\x02\x02$%\x07c\x02\x02%&\x07w\x02\x02&\'" +
    "\x07v\x02\x02\'(\x07q\x02\x02()\x07k\x02\x02)*\x07o\x02\x02*+\x07r\x02" +
    "\x02+,\x07q\x02\x02,-\x07t\x02\x02-.\x07v\x02\x02.\x06\x03\x02\x02\x02" +
    "/0\x07e\x02\x0201\x07q\x02\x0212\x07o\x02\x0223\x07r\x02\x0234\x07k\x02" +
    "\x0245\x07n\x02\x0256\x07g\x02\x0267\x07a\x02\x0278\x07q\x02\x0289\x07" +
    "p\x02\x029:\x07n\x02\x02:;\x07{\x02\x02;\b\x03\x02\x02\x02<=\x07?\x02" +
    "\x02=\n\x03\x02\x02\x02>?\x07=\x02\x02?\f\x03\x02\x02\x02@F\x05\x0F\b" +
    "\x02AE\x05\x0F\b\x02BE\x05\x13\n\x02CE\x05\x11\t\x02DA\x03\x02\x02\x02" +
    "DB\x03\x02\x02\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02" +
    "FG\x03\x02\x02\x02G\x0E\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\t\x02\x02" +
    "\x02J\x10\x03\x02\x02\x02KL\t\x03\x02\x02L\x12\x03\x02\x02\x02MN\x07-" +
    "\x02\x02N\x14\x03\x02\x02\x02OP\t\x04\x02\x02PQ\x03\x02\x02\x02QR\b\v" +
    "\x02\x02R\x16\x03\x02\x02\x02ST\x071\x02\x02TU\x071\x02\x02UY\x03\x02" +
    "\x02\x02VX\n\x05\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02" +
    "\x02\x02YZ\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02\\^\x07" +
    "\x0F\x02\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02\x02\x02_`" +
    "\x07\f\x02\x02`a\x03\x02\x02\x02ab\b\f\x02\x02b\x18\x03\x02\x02\x02cd" +
    "\x071\x02\x02de\x07,\x02\x02ei\x03\x02\x02\x02fh\v\x02\x02\x02gf\x03\x02" +
    "\x02\x02hk\x03\x02\x02\x02ij\x03\x02\x02\x02ig\x03\x02\x02\x02jl\x03\x02" +
    "\x02\x02ki\x03\x02\x02\x02lm\x07,\x02\x02mn\x071\x02\x02no\x03\x02\x02" +
    "\x02op\b\r\x02\x02p\x1A\x03\x02\x02\x02\b\x02DFY]i\x03\b\x02\x02";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], settingLexer.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], settingLexer.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], settingLexer.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], settingLexer.prototype, "serializedATN", null);
__decorate([
    Decorators_2.Override
], settingLexer.prototype, "modeNames", null);
exports.settingLexer = settingLexer;
//# sourceMappingURL=settingLexer.js.map