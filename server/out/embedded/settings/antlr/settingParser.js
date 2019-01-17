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
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class settingParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(settingParser._ATN, this);
    }
    get vocabulary() {
        return settingParser.VOCABULARY;
    }
    get grammarFileName() { return "setting.g4"; }
    get ruleNames() { return settingParser.ruleNames; }
    get serializedATN() { return settingParser._serializedATN; }
    qsetting() {
        let _localctx = new QsettingContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, settingParser.RULE_qsetting);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << settingParser.LANGUAGE) | (1 << settingParser.AUTOIMPORT) | (1 << settingParser.COMPILE_ONLY))) !== 0)) {
                    {
                        {
                            this.state = 14;
                            this.qConfig();
                        }
                    }
                    this.state = 19;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    qConfig() {
        let _localctx = new QConfigContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, settingParser.RULE_qConfig);
        try {
            this.state = 23;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case settingParser.LANGUAGE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 20;
                        this.lan_set();
                    }
                    break;
                case settingParser.AUTOIMPORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 21;
                        this.auto_import();
                    }
                    break;
                case settingParser.COMPILE_ONLY:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 22;
                        this.compile_only();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    auto_import() {
        let _localctx = new Auto_importContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, settingParser.RULE_auto_import);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this.match(settingParser.AUTOIMPORT);
                this.state = 26;
                this.match(settingParser.EQUAL);
                this.state = 27;
                this.ischoosed();
                this.state = 28;
                this.match(settingParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    lan_set() {
        let _localctx = new Lan_setContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, settingParser.RULE_lan_set);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 30;
                this.match(settingParser.LANGUAGE);
                this.state = 31;
                this.match(settingParser.EQUAL);
                this.state = 32;
                this.lan_type();
                this.state = 33;
                this.match(settingParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    compile_only() {
        let _localctx = new Compile_onlyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, settingParser.RULE_compile_only);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.match(settingParser.COMPILE_ONLY);
                this.state = 36;
                this.match(settingParser.EQUAL);
                this.state = 37;
                this.ischoosed();
                this.state = 38;
                this.match(settingParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    ischoosed() {
        let _localctx = new IschoosedContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, settingParser.RULE_ischoosed);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.match(settingParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    lan_type() {
        let _localctx = new Lan_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, settingParser.RULE_lan_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this.match(settingParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!settingParser.__ATN) {
            settingParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(settingParser._serializedATN));
        }
        return settingParser.__ATN;
    }
}
settingParser.LANGUAGE = 1;
settingParser.AUTOIMPORT = 2;
settingParser.COMPILE_ONLY = 3;
settingParser.EQUAL = 4;
settingParser.SEMI = 5;
settingParser.Identifier = 6;
settingParser.WhiteSpace = 7;
settingParser.SingleLineComment = 8;
settingParser.MultiLinesComment = 9;
settingParser.RULE_qsetting = 0;
settingParser.RULE_qConfig = 1;
settingParser.RULE_auto_import = 2;
settingParser.RULE_lan_set = 3;
settingParser.RULE_compile_only = 4;
settingParser.RULE_ischoosed = 5;
settingParser.RULE_lan_type = 6;
settingParser.ruleNames = [
    "qsetting", "qConfig", "auto_import", "lan_set", "compile_only", "ischoosed",
    "lan_type"
];
settingParser._LITERAL_NAMES = [
    undefined, "'language'", "'autoimport'", "'compile_only'", "'='", "';'"
];
settingParser._SYMBOLIC_NAMES = [
    undefined, "LANGUAGE", "AUTOIMPORT", "COMPILE_ONLY", "EQUAL", "SEMI",
    "Identifier", "WhiteSpace", "SingleLineComment", "MultiLinesComment"
];
settingParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(settingParser._LITERAL_NAMES, settingParser._SYMBOLIC_NAMES, []);
settingParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\v/\x04\x02\t" +
    "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
    "\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03\x03" +
    "\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04" +
    "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02*\x02\x13\x03\x02\x02\x02" +
    "\x04\x19\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b \x03\x02\x02\x02\n" +
    "%\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E,\x03\x02\x02\x02\x10\x12\x05" +
    "\x04\x03\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03" +
    "\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15\x13\x03" +
    "\x02\x02\x02\x16\x1A\x05\b\x05\x02\x17\x1A\x05\x06\x04\x02\x18\x1A\x05" +
    "\n\x06\x02\x19\x16\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x18\x03" +
    "\x02\x02\x02\x1A\x05\x03\x02\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x07" +
    "\x06\x02\x02\x1D\x1E\x05\f\x07\x02\x1E\x1F\x07\x07\x02\x02\x1F\x07\x03" +
    "\x02\x02\x02 !\x07\x03\x02\x02!\"\x07\x06\x02\x02\"#\x05\x0E\b\x02#$\x07" +
    "\x07\x02\x02$\t\x03\x02\x02\x02%&\x07\x05\x02\x02&\'\x07\x06\x02\x02\'" +
    "(\x05\f\x07\x02()\x07\x07\x02\x02)\v\x03\x02\x02\x02*+\x07\b\x02\x02+" +
    "\r\x03\x02\x02\x02,-\x07\b\x02\x02-\x0F\x03\x02\x02\x02\x04\x13\x19";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], settingParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], settingParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], settingParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], settingParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "qsetting", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "qConfig", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "auto_import", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "lan_set", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "compile_only", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "ischoosed", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], settingParser.prototype, "lan_type", null);
exports.settingParser = settingParser;
class QsettingContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qConfig(i) {
        if (i === undefined) {
            return this.getRuleContexts(QConfigContext);
        }
        else {
            return this.getRuleContext(i, QConfigContext);
        }
    }
    get ruleIndex() { return settingParser.RULE_qsetting; }
    enterRule(listener) {
        if (listener.enterQsetting)
            listener.enterQsetting(this);
    }
    exitRule(listener) {
        if (listener.exitQsetting)
            listener.exitQsetting(this);
    }
    accept(visitor) {
        if (visitor.visitQsetting)
            return visitor.visitQsetting(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QsettingContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QsettingContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QsettingContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QsettingContext.prototype, "accept", null);
exports.QsettingContext = QsettingContext;
class QConfigContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    lan_set() {
        return this.tryGetRuleContext(0, Lan_setContext);
    }
    auto_import() {
        return this.tryGetRuleContext(0, Auto_importContext);
    }
    compile_only() {
        return this.tryGetRuleContext(0, Compile_onlyContext);
    }
    get ruleIndex() { return settingParser.RULE_qConfig; }
    enterRule(listener) {
        if (listener.enterQConfig)
            listener.enterQConfig(this);
    }
    exitRule(listener) {
        if (listener.exitQConfig)
            listener.exitQConfig(this);
    }
    accept(visitor) {
        if (visitor.visitQConfig)
            return visitor.visitQConfig(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QConfigContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QConfigContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QConfigContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QConfigContext.prototype, "accept", null);
exports.QConfigContext = QConfigContext;
class Auto_importContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AUTOIMPORT() { return this.getToken(settingParser.AUTOIMPORT, 0); }
    EQUAL() { return this.getToken(settingParser.EQUAL, 0); }
    ischoosed() {
        return this.getRuleContext(0, IschoosedContext);
    }
    SEMI() { return this.getToken(settingParser.SEMI, 0); }
    get ruleIndex() { return settingParser.RULE_auto_import; }
    enterRule(listener) {
        if (listener.enterAuto_import)
            listener.enterAuto_import(this);
    }
    exitRule(listener) {
        if (listener.exitAuto_import)
            listener.exitAuto_import(this);
    }
    accept(visitor) {
        if (visitor.visitAuto_import)
            return visitor.visitAuto_import(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Auto_importContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Auto_importContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Auto_importContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Auto_importContext.prototype, "accept", null);
exports.Auto_importContext = Auto_importContext;
class Lan_setContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LANGUAGE() { return this.getToken(settingParser.LANGUAGE, 0); }
    EQUAL() { return this.getToken(settingParser.EQUAL, 0); }
    lan_type() {
        return this.getRuleContext(0, Lan_typeContext);
    }
    SEMI() { return this.getToken(settingParser.SEMI, 0); }
    get ruleIndex() { return settingParser.RULE_lan_set; }
    enterRule(listener) {
        if (listener.enterLan_set)
            listener.enterLan_set(this);
    }
    exitRule(listener) {
        if (listener.exitLan_set)
            listener.exitLan_set(this);
    }
    accept(visitor) {
        if (visitor.visitLan_set)
            return visitor.visitLan_set(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Lan_setContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Lan_setContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Lan_setContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Lan_setContext.prototype, "accept", null);
exports.Lan_setContext = Lan_setContext;
class Compile_onlyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMPILE_ONLY() { return this.getToken(settingParser.COMPILE_ONLY, 0); }
    EQUAL() { return this.getToken(settingParser.EQUAL, 0); }
    ischoosed() {
        return this.getRuleContext(0, IschoosedContext);
    }
    SEMI() { return this.getToken(settingParser.SEMI, 0); }
    get ruleIndex() { return settingParser.RULE_compile_only; }
    enterRule(listener) {
        if (listener.enterCompile_only)
            listener.enterCompile_only(this);
    }
    exitRule(listener) {
        if (listener.exitCompile_only)
            listener.exitCompile_only(this);
    }
    accept(visitor) {
        if (visitor.visitCompile_only)
            return visitor.visitCompile_only(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Compile_onlyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Compile_onlyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Compile_onlyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Compile_onlyContext.prototype, "accept", null);
exports.Compile_onlyContext = Compile_onlyContext;
class IschoosedContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(settingParser.Identifier, 0); }
    get ruleIndex() { return settingParser.RULE_ischoosed; }
    enterRule(listener) {
        if (listener.enterIschoosed)
            listener.enterIschoosed(this);
    }
    exitRule(listener) {
        if (listener.exitIschoosed)
            listener.exitIschoosed(this);
    }
    accept(visitor) {
        if (visitor.visitIschoosed)
            return visitor.visitIschoosed(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IschoosedContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IschoosedContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IschoosedContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IschoosedContext.prototype, "accept", null);
exports.IschoosedContext = IschoosedContext;
class Lan_typeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(settingParser.Identifier, 0); }
    get ruleIndex() { return settingParser.RULE_lan_type; }
    enterRule(listener) {
        if (listener.enterLan_type)
            listener.enterLan_type(this);
    }
    exitRule(listener) {
        if (listener.exitLan_type)
            listener.exitLan_type(this);
    }
    accept(visitor) {
        if (visitor.visitLan_type)
            return visitor.visitLan_type(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Lan_typeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Lan_typeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Lan_typeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Lan_typeContext.prototype, "accept", null);
exports.Lan_typeContext = Lan_typeContext;
//# sourceMappingURL=settingParser.js.map