"use strict";
// Generated from qcode.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class qcodeParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(qcodeParser._ATN, this);
    }
    get vocabulary() {
        return qcodeParser.VOCABULARY;
    }
    get grammarFileName() { return "qcode.g4"; }
    get ruleNames() { return qcodeParser.ruleNames; }
    get serializedATN() { return qcodeParser._serializedATN; }
    qrunes() {
        let _localctx = new QrunesContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, qcodeParser.RULE_qrunes);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.LET) | (1 << qcodeParser.INCLUDE) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT))) !== 0) || _la === qcodeParser.Identifier) {
                    {
                        {
                            this.state = 162;
                            this.lang_unit();
                        }
                    }
                    this.state = 167;
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
    lang_unit() {
        let _localctx = new Lang_unitContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, qcodeParser.RULE_lang_unit);
        try {
            this.state = 173;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 168;
                        this.include_declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 169;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 170;
                        this.literal_declaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 171;
                        this.func_declaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 172;
                        this.func_definition();
                    }
                    break;
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
    include_declaration() {
        let _localctx = new Include_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, qcodeParser.RULE_include_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                this.match(qcodeParser.INCLUDE);
                this.state = 176;
                this.include_sign();
                this.state = 177;
                this.match(qcodeParser.Identifier);
                this.state = 178;
                this.postfix();
                this.state = 179;
                this.include_sign();
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
    include_sign() {
        let _localctx = new Include_signContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, qcodeParser.RULE_include_sign);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                _la = this._input.LA(1);
                if (!(_la === qcodeParser.T__0 || _la === qcodeParser.T__1)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    postfix() {
        let _localctx = new PostfixContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, qcodeParser.RULE_postfix);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.LIB_POSTFIX) | (1 << qcodeParser.INC_POSTFIX) | (1 << qcodeParser.QRUNES_POSTFIX))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, qcodeParser.RULE_declaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT))) !== 0)) {
                    {
                        this.state = 185;
                        this.declaration_Specifier();
                    }
                }
                this.state = 188;
                this.init_DeclaratorList(0);
                this.state = 189;
                this.match(qcodeParser.SEMI);
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
    literal_declaration() {
        let _localctx = new Literal_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, qcodeParser.RULE_literal_declaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === qcodeParser.LET) {
                    {
                        this.state = 191;
                        this.literal_type();
                    }
                }
                this.state = 194;
                this.init_Literal_DeclaratorList(0);
                this.state = 195;
                this.match(qcodeParser.SEMI);
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
    declaration_Specifier() {
        let _localctx = new Declaration_SpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, qcodeParser.RULE_declaration_Specifier);
        try {
            this.state = 200;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.QVEC:
                case qcodeParser.QUBIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 197;
                        this.quantum_type();
                    }
                    break;
                case qcodeParser.INT:
                case qcodeParser.FLOAT:
                case qcodeParser.DOUBLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 198;
                        this.primary_type();
                    }
                    break;
                case qcodeParser.CVEC:
                case qcodeParser.CBIT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 199;
                        this.assist_classical_type();
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
    literal_type() {
        let _localctx = new Literal_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, qcodeParser.RULE_literal_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(qcodeParser.LET);
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
    primary_type() {
        let _localctx = new Primary_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, qcodeParser.RULE_primary_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    quantum_type() {
        let _localctx = new Quantum_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, qcodeParser.RULE_quantum_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                _la = this._input.LA(1);
                if (!(_la === qcodeParser.QVEC || _la === qcodeParser.QUBIT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    assist_classical_type() {
        let _localctx = new Assist_classical_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, qcodeParser.RULE_assist_classical_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                _la = this._input.LA(1);
                if (!(_la === qcodeParser.CVEC || _la === qcodeParser.CBIT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    init_DeclaratorList(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Init_DeclaratorListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 24;
        this.enterRecursionRule(_localctx, 24, qcodeParser.RULE_init_DeclaratorList, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 211;
                    this.init_Declarator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 218;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Init_DeclaratorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_init_DeclaratorList);
                                this.state = 213;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 214;
                                this.match(qcodeParser.COMMA);
                                this.state = 215;
                                this.init_Declarator();
                            }
                        }
                    }
                    this.state = 220;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    init_Literal_DeclaratorList(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Init_Literal_DeclaratorListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 26;
        this.enterRecursionRule(_localctx, 26, qcodeParser.RULE_init_Literal_DeclaratorList, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 222;
                    this.init_Literal_Declarator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 229;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Init_Literal_DeclaratorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_init_Literal_DeclaratorList);
                                this.state = 224;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 225;
                                this.match(qcodeParser.COMMA);
                                this.state = 226;
                                this.init_Literal_Declarator();
                            }
                        }
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    init_Declarator() {
        let _localctx = new Init_DeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, qcodeParser.RULE_init_Declarator);
        try {
            this.state = 237;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 232;
                        this.declarator(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 233;
                        this.declarator(0);
                        this.state = 234;
                        this.match(qcodeParser.ASSIGN);
                        this.state = 235;
                        this.initializer();
                    }
                    break;
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
    init_Literal_Declarator() {
        let _localctx = new Init_Literal_DeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, qcodeParser.RULE_init_Literal_Declarator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 239;
                this.declarator(0);
                this.state = 240;
                this.match(qcodeParser.ASSIGN);
                this.state = 241;
                this.initializer();
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
    declarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new DeclaratorContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 32;
        this.enterRecursionRule(_localctx, 32, qcodeParser.RULE_declarator, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 244;
                    this.match(qcodeParser.Identifier);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 253;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new DeclaratorContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_declarator);
                                this.state = 246;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 247;
                                this.match(qcodeParser.LBRACK);
                                this.state = 248;
                                this.assignment_exp();
                                this.state = 249;
                                this.match(qcodeParser.RBRACK);
                            }
                        }
                    }
                    this.state = 255;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    assignment_exp() {
        let _localctx = new Assignment_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, qcodeParser.RULE_assignment_exp);
        try {
            this.state = 263;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 256;
                        this.condition_exp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 257;
                        this.unary_exp();
                        this.state = 258;
                        this.assignment_operator();
                        this.state = 259;
                        this.assignment_exp();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 261;
                        this.match(qcodeParser.Digit_Sequence);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 262;
                        this.match(qcodeParser.Constant);
                    }
                    break;
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
    assignment_operator() {
        let _localctx = new Assignment_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, qcodeParser.RULE_assignment_operator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (qcodeParser.ASSIGN - 47)) | (1 << (qcodeParser.ADD_ASSIGN - 47)) | (1 << (qcodeParser.SUB_ASSIGN - 47)) | (1 << (qcodeParser.MUL_ASSIGN - 47)) | (1 << (qcodeParser.DIV_ASSIGN - 47)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    condition_exp() {
        let _localctx = new Condition_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, qcodeParser.RULE_condition_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
                this.logicOr_exp(0);
                this.state = 273;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 268;
                            this.match(qcodeParser.QUE_MARK);
                            this.state = 269;
                            this.expression(0);
                            this.state = 270;
                            this.match(qcodeParser.COLON);
                            this.state = 271;
                            this.condition_exp();
                        }
                        break;
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
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 40;
        this.enterRecursionRule(_localctx, 40, qcodeParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 276;
                    this.assignment_exp();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 283;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_expression);
                                this.state = 278;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 279;
                                this.match(qcodeParser.COMMA);
                                this.state = 280;
                                this.assignment_exp();
                            }
                        }
                    }
                    this.state = 285;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    logicOr_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new LogicOr_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 42;
        this.enterRecursionRule(_localctx, 42, qcodeParser.RULE_logicOr_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 287;
                    this.logicAnd_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 294;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicOr_expContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_logicOr_exp);
                                this.state = 289;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 290;
                                this.match(qcodeParser.LOGIC_OR);
                                this.state = 291;
                                this.logicAnd_exp(0);
                            }
                        }
                    }
                    this.state = 296;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    logicAnd_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new LogicAnd_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 44;
        this.enterRecursionRule(_localctx, 44, qcodeParser.RULE_logicAnd_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 298;
                    this.inclu_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 305;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicAnd_expContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_logicAnd_exp);
                                this.state = 300;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 301;
                                this.match(qcodeParser.LOGIC_AND);
                                this.state = 302;
                                this.inclu_exp(0);
                            }
                        }
                    }
                    this.state = 307;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    inclu_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Inclu_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 46;
        this.enterRecursionRule(_localctx, 46, qcodeParser.RULE_inclu_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 309;
                    this.exclu_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 316;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Inclu_expContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_inclu_exp);
                                this.state = 311;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 312;
                                this.match(qcodeParser.INCLU);
                                this.state = 313;
                                this.exclu_exp(0);
                            }
                        }
                    }
                    this.state = 318;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    exclu_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Exclu_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 48;
        this.enterRecursionRule(_localctx, 48, qcodeParser.RULE_exclu_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 320;
                    this.and_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 327;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Exclu_expContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_exclu_exp);
                                this.state = 322;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 323;
                                this.match(qcodeParser.EXCLU);
                                this.state = 324;
                                this.and_exp(0);
                            }
                        }
                    }
                    this.state = 329;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    and_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new And_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 50;
        this.enterRecursionRule(_localctx, 50, qcodeParser.RULE_and_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 331;
                    this.equal_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 338;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new And_expContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_and_exp);
                                this.state = 333;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 334;
                                this.match(qcodeParser.AND);
                                this.state = 335;
                                this.equal_exp(0);
                            }
                        }
                    }
                    this.state = 340;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    equal_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Equal_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 52;
        this.enterRecursionRule(_localctx, 52, qcodeParser.RULE_equal_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 342;
                    this.relation_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 352;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 350;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Equal_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_equal_exp);
                                        this.state = 344;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 345;
                                        this.match(qcodeParser.EQUAL);
                                        this.state = 346;
                                        this.relation_exp(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Equal_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_equal_exp);
                                        this.state = 347;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 348;
                                        this.match(qcodeParser.NOTEQUAL);
                                        this.state = 349;
                                        this.relation_exp(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 354;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    relation_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Relation_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 54;
        this.enterRecursionRule(_localctx, 54, qcodeParser.RULE_relation_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 356;
                    this.shift_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 372;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 370;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Relation_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
                                        this.state = 358;
                                        if (!(this.precpred(this._ctx, 4)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        this.state = 359;
                                        this.match(qcodeParser.GT);
                                        this.state = 360;
                                        this.shift_exp(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Relation_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
                                        this.state = 361;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 362;
                                        this.match(qcodeParser.LT);
                                        this.state = 363;
                                        this.shift_exp(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Relation_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
                                        this.state = 364;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 365;
                                        this.match(qcodeParser.GE);
                                        this.state = 366;
                                        this.shift_exp(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Relation_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
                                        this.state = 367;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 368;
                                        this.match(qcodeParser.LE);
                                        this.state = 369;
                                        this.shift_exp(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 374;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    shift_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Shift_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 56;
        this.enterRecursionRule(_localctx, 56, qcodeParser.RULE_shift_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 376;
                    this.additive_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 386;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 384;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Shift_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_shift_exp);
                                        this.state = 378;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 379;
                                        this.match(qcodeParser.LSHIFT);
                                        this.state = 380;
                                        this.additive_exp(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Shift_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_shift_exp);
                                        this.state = 381;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 382;
                                        this.match(qcodeParser.RSHIFT);
                                        this.state = 383;
                                        this.additive_exp(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 388;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    additive_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Additive_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 58;
        this.enterRecursionRule(_localctx, 58, qcodeParser.RULE_additive_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 390;
                    this.multi_exp(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 400;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 398;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Additive_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_additive_exp);
                                        this.state = 392;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 393;
                                        this.match(qcodeParser.ADD);
                                        this.state = 394;
                                        this.multi_exp(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Additive_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_additive_exp);
                                        this.state = 395;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 396;
                                        this.match(qcodeParser.SUB);
                                        this.state = 397;
                                        this.multi_exp(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 402;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    multi_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Multi_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 60;
        this.enterRecursionRule(_localctx, 60, qcodeParser.RULE_multi_exp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 404;
                    this.cast_exp();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 420;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 418;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Multi_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
                                        this.state = 406;
                                        if (!(this.precpred(this._ctx, 4)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        this.state = 407;
                                        this.match(qcodeParser.MUL);
                                        this.state = 408;
                                        this.cast_exp();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Multi_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
                                        this.state = 409;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 410;
                                        this.match(qcodeParser.DIV);
                                        this.state = 411;
                                        this.cast_exp();
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Multi_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
                                        this.state = 412;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 413;
                                        this.match(qcodeParser.MOD);
                                        this.state = 414;
                                        this.cast_exp();
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Multi_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
                                        this.state = 415;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 416;
                                        this.match(qcodeParser.POW);
                                        this.state = 417;
                                        this.cast_exp();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 422;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    cast_exp() {
        let _localctx = new Cast_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, qcodeParser.RULE_cast_exp);
        try {
            this.state = 425;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.PI:
                case qcodeParser.LEN:
                case qcodeParser.BANG:
                case qcodeParser.TILDE:
                case qcodeParser.LOGIC_AND:
                case qcodeParser.AND:
                case qcodeParser.INC:
                case qcodeParser.DEC:
                case qcodeParser.ADD:
                case qcodeParser.SUB:
                case qcodeParser.MUL:
                case qcodeParser.POW:
                case qcodeParser.LPAREN:
                case qcodeParser.Identifier:
                case qcodeParser.Constant:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 423;
                        this.unary_exp();
                    }
                    break;
                case qcodeParser.Digit_Sequence:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 424;
                        this.match(qcodeParser.Digit_Sequence);
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
    unary_exp() {
        let _localctx = new Unary_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, qcodeParser.RULE_unary_exp);
        try {
            this.state = 437;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.PI:
                case qcodeParser.LEN:
                case qcodeParser.LPAREN:
                case qcodeParser.Identifier:
                case qcodeParser.Constant:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this.postfix_exp(0);
                    }
                    break;
                case qcodeParser.INC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 428;
                        this.match(qcodeParser.INC);
                        this.state = 429;
                        this.unary_exp();
                    }
                    break;
                case qcodeParser.DEC:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 430;
                        this.match(qcodeParser.DEC);
                        this.state = 431;
                        this.unary_exp();
                    }
                    break;
                case qcodeParser.BANG:
                case qcodeParser.TILDE:
                case qcodeParser.AND:
                case qcodeParser.ADD:
                case qcodeParser.SUB:
                case qcodeParser.MUL:
                case qcodeParser.POW:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 432;
                        this.unary_operator();
                        this.state = 433;
                        this.cast_exp();
                    }
                    break;
                case qcodeParser.LOGIC_AND:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 435;
                        this.match(qcodeParser.LOGIC_AND);
                        this.state = 436;
                        this.match(qcodeParser.Identifier);
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
    unary_operator() {
        let _localctx = new Unary_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, qcodeParser.RULE_unary_operator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 439;
                _la = this._input.LA(1);
                if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    postfix_exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Postfix_expContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 68;
        this.enterRecursionRule(_localctx, 68, qcodeParser.RULE_postfix_exp, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 442;
                    this.primary_exp();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 465;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 463;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Postfix_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
                                        this.state = 444;
                                        if (!(this.precpred(this._ctx, 4)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        this.state = 445;
                                        this.match(qcodeParser.LBRACK);
                                        this.state = 446;
                                        this.expression(0);
                                        this.state = 449;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === qcodeParser.COLON) {
                                            {
                                                this.state = 447;
                                                this.match(qcodeParser.COLON);
                                                this.state = 448;
                                                this.expression(0);
                                            }
                                        }
                                        this.state = 451;
                                        this.match(qcodeParser.RBRACK);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Postfix_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
                                        this.state = 453;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 454;
                                        this.match(qcodeParser.LPAREN);
                                        this.state = 456;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === qcodeParser.PI || _la === qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
                                            {
                                                this.state = 455;
                                                this.argument_exp_List(0);
                                            }
                                        }
                                        this.state = 458;
                                        this.match(qcodeParser.RPAREN);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Postfix_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
                                        this.state = 459;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 460;
                                        this.match(qcodeParser.INC);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Postfix_expContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
                                        this.state = 461;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 462;
                                        this.match(qcodeParser.DEC);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 467;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    argument_exp_List(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Argument_exp_ListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 70;
        this.enterRecursionRule(_localctx, 70, qcodeParser.RULE_argument_exp_List, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 469;
                    this.assignment_exp();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 476;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Argument_exp_ListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_argument_exp_List);
                                this.state = 471;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 472;
                                this.match(qcodeParser.COMMA);
                                this.state = 473;
                                this.assignment_exp();
                            }
                        }
                    }
                    this.state = 478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    primary_exp() {
        let _localctx = new Primary_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, qcodeParser.RULE_primary_exp);
        try {
            this.state = 487;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 479;
                        this.match(qcodeParser.Identifier);
                    }
                    break;
                case qcodeParser.Constant:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 480;
                        this.match(qcodeParser.Constant);
                    }
                    break;
                case qcodeParser.LPAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 481;
                        this.match(qcodeParser.LPAREN);
                        this.state = 482;
                        this.expression(0);
                        this.state = 483;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.LEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 485;
                        this.match(qcodeParser.LEN);
                    }
                    break;
                case qcodeParser.PI:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 486;
                        this.match(qcodeParser.PI);
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
    args_type_List(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Args_type_ListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 74;
        this.enterRecursionRule(_localctx, 74, qcodeParser.RULE_args_type_List, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 490;
                    this.args_declaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 497;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Args_type_ListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_args_type_List);
                                this.state = 492;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 493;
                                this.match(qcodeParser.COMMA);
                                this.state = 494;
                                this.args_declaration();
                            }
                        }
                    }
                    this.state = 499;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    args_declaration() {
        let _localctx = new Args_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, qcodeParser.RULE_args_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                this.declaration_Specifier();
                this.state = 501;
                this.declarator(0);
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
    initializer() {
        let _localctx = new InitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, qcodeParser.RULE_initializer);
        try {
            this.state = 511;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.PI:
                case qcodeParser.LEN:
                case qcodeParser.BANG:
                case qcodeParser.TILDE:
                case qcodeParser.LOGIC_AND:
                case qcodeParser.AND:
                case qcodeParser.INC:
                case qcodeParser.DEC:
                case qcodeParser.ADD:
                case qcodeParser.SUB:
                case qcodeParser.MUL:
                case qcodeParser.POW:
                case qcodeParser.LPAREN:
                case qcodeParser.Identifier:
                case qcodeParser.Constant:
                case qcodeParser.Digit_Sequence:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 503;
                        this.assignment_exp();
                    }
                    break;
                case qcodeParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 504;
                        this.match(qcodeParser.LBRACE);
                        this.state = 505;
                        this.initializerList(0);
                        {
                            this.state = 506;
                            this.match(qcodeParser.COMMA);
                            this.state = 507;
                            this.initializerList(0);
                        }
                        this.state = 509;
                        this.match(qcodeParser.RBRACE);
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
    initializerList(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new InitializerListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 80;
        this.enterRecursionRule(_localctx, 80, qcodeParser.RULE_initializerList, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === qcodeParser.LBRACK) {
                        {
                            this.state = 514;
                            this.designation();
                        }
                    }
                    this.state = 517;
                    this.initializer();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 527;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InitializerListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_initializerList);
                                this.state = 519;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 520;
                                this.match(qcodeParser.COMMA);
                                this.state = 522;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === qcodeParser.LBRACK) {
                                    {
                                        this.state = 521;
                                        this.designation();
                                    }
                                }
                                this.state = 524;
                                this.initializer();
                            }
                        }
                    }
                    this.state = 529;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    designation() {
        let _localctx = new DesignationContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, qcodeParser.RULE_designation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.designatorList(0);
                this.state = 531;
                this.match(qcodeParser.ASSIGN);
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
    designatorList(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new DesignatorListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 84;
        this.enterRecursionRule(_localctx, 84, qcodeParser.RULE_designatorList, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 534;
                    this.designator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 540;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new DesignatorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_designatorList);
                                this.state = 536;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 537;
                                this.designator();
                            }
                        }
                    }
                    this.state = 542;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    designator() {
        let _localctx = new DesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, qcodeParser.RULE_designator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 543;
                this.match(qcodeParser.LBRACK);
                this.state = 544;
                this.constant_exp();
                this.state = 545;
                this.match(qcodeParser.RBRACK);
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
    constant_exp() {
        let _localctx = new Constant_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, qcodeParser.RULE_constant_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 547;
                this.condition_exp();
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
    func_declaration() {
        let _localctx = new Func_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, qcodeParser.RULE_func_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                this.func_declarator();
                this.state = 550;
                this.match(qcodeParser.SEMI);
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
    func_declarator() {
        let _localctx = new Func_declaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, qcodeParser.RULE_func_declarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 552;
                this.match(qcodeParser.Identifier);
                this.state = 553;
                this.match(qcodeParser.LPAREN);
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT))) !== 0)) {
                    {
                        this.state = 554;
                        this.args_type_List(0);
                    }
                }
                this.state = 557;
                this.match(qcodeParser.RPAREN);
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
    func_definition() {
        let _localctx = new Func_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, qcodeParser.RULE_func_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 559;
                this.func_declarator();
                this.state = 560;
                this.comp_stmt();
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
    declarationList() {
        let _localctx = new DeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, qcodeParser.RULE_declarationList);
        try {
            this.state = 566;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 562;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 563;
                        this.declaration();
                        this.state = 564;
                        this.declarationList();
                    }
                    break;
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
    comp_stmt() {
        let _localctx = new Comp_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, qcodeParser.RULE_comp_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 568;
                this.match(qcodeParser.LBRACE);
                this.state = 570;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.PI) | (1 << qcodeParser.LET) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.IF) | (1 << qcodeParser.FOR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.LEN) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.H_GATE) | (1 << qcodeParser.X_GATE) | (1 << qcodeParser.NOT_GATE) | (1 << qcodeParser.T_GATE) | (1 << qcodeParser.S_GATE) | (1 << qcodeParser.Y_GATE) | (1 << qcodeParser.Z_GATE) | (1 << qcodeParser.X1_GATE) | (1 << qcodeParser.Y1_GATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.BANG - 32)) | (1 << (qcodeParser.TILDE - 32)) | (1 << (qcodeParser.LOGIC_AND - 32)) | (1 << (qcodeParser.AND - 32)) | (1 << (qcodeParser.INC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (qcodeParser.DEC - 64)) | (1 << (qcodeParser.ADD - 64)) | (1 << (qcodeParser.SUB - 64)) | (1 << (qcodeParser.MUL - 64)) | (1 << (qcodeParser.POW - 64)) | (1 << (qcodeParser.LBRACE - 64)) | (1 << (qcodeParser.SEMI - 64)) | (1 << (qcodeParser.LPAREN - 64)) | (1 << (qcodeParser.Identifier - 64)) | (1 << (qcodeParser.Constant - 64)) | (1 << (qcodeParser.Digit_Sequence - 64)))) !== 0)) {
                    {
                        this.state = 569;
                        this.block_List(0);
                    }
                }
                this.state = 572;
                this.match(qcodeParser.RBRACE);
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
    block_List(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Block_ListContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 100;
        this.enterRecursionRule(_localctx, 100, qcodeParser.RULE_block_List, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 575;
                    this.block_Item();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 581;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Block_ListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_block_List);
                                this.state = 577;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 578;
                                this.block_Item();
                            }
                        }
                    }
                    this.state = 583;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    block_Item() {
        let _localctx = new Block_ItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, qcodeParser.RULE_block_Item);
        try {
            this.state = 587;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 584;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 585;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 586;
                        this.literal_declaration();
                    }
                    break;
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
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, qcodeParser.RULE_statement);
        try {
            this.state = 597;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.PI:
                case qcodeParser.LEN:
                case qcodeParser.BANG:
                case qcodeParser.TILDE:
                case qcodeParser.LOGIC_AND:
                case qcodeParser.AND:
                case qcodeParser.INC:
                case qcodeParser.DEC:
                case qcodeParser.ADD:
                case qcodeParser.SUB:
                case qcodeParser.MUL:
                case qcodeParser.POW:
                case qcodeParser.SEMI:
                case qcodeParser.LPAREN:
                case qcodeParser.Identifier:
                case qcodeParser.Constant:
                case qcodeParser.Digit_Sequence:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 589;
                        this.exp_stmt();
                    }
                    break;
                case qcodeParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 590;
                        this.comp_stmt();
                    }
                    break;
                case qcodeParser.IF:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 591;
                        this.select_stmt();
                    }
                    break;
                case qcodeParser.FOR:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 592;
                        this.iterate_stmt();
                    }
                    break;
                case qcodeParser.H_GATE:
                case qcodeParser.X_GATE:
                case qcodeParser.NOT_GATE:
                case qcodeParser.T_GATE:
                case qcodeParser.S_GATE:
                case qcodeParser.Y_GATE:
                case qcodeParser.Z_GATE:
                case qcodeParser.X1_GATE:
                case qcodeParser.Y1_GATE:
                case qcodeParser.Z1_GATE:
                case qcodeParser.U4_GATE:
                case qcodeParser.RX_GATE:
                case qcodeParser.RY_GATE:
                case qcodeParser.RZ_GATE:
                case qcodeParser.CNOT_GATE:
                case qcodeParser.CZ_GATE:
                case qcodeParser.CR_GATE:
                case qcodeParser.CU_GATE:
                case qcodeParser.ISWAP:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 593;
                        this.quantum_gate_stmt();
                    }
                    break;
                case qcodeParser.MEASURE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 594;
                        this.measurement_stmt();
                    }
                    break;
                case qcodeParser.QIF:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 595;
                        this.q_if_operation();
                    }
                    break;
                case qcodeParser.QWHILE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 596;
                        this.q_while_operation();
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
    exp_stmt() {
        let _localctx = new Exp_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, qcodeParser.RULE_exp_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === qcodeParser.PI || _la === qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
                    {
                        this.state = 599;
                        this.expression(0);
                    }
                }
                this.state = 602;
                this.match(qcodeParser.SEMI);
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
    select_stmt() {
        let _localctx = new Select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, qcodeParser.RULE_select_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 604;
                this.match(qcodeParser.IF);
                this.state = 605;
                this.match(qcodeParser.LPAREN);
                this.state = 606;
                this.expression(0);
                this.state = 607;
                this.match(qcodeParser.RPAREN);
                this.state = 608;
                this.statement();
                this.state = 611;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 609;
                            this.match(qcodeParser.ELSE);
                            this.state = 610;
                            this.statement();
                        }
                        break;
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
    iterate_stmt() {
        let _localctx = new Iterate_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, qcodeParser.RULE_iterate_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 613;
                this.match(qcodeParser.FOR);
                this.state = 614;
                this.match(qcodeParser.LPAREN);
                this.state = 615;
                this.for_stmt();
                this.state = 616;
                this.match(qcodeParser.RPAREN);
                this.state = 617;
                this.statement();
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
    for_stmt() {
        let _localctx = new For_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, qcodeParser.RULE_for_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                    case 1:
                        {
                            this.state = 619;
                            this.for_start();
                        }
                        break;
                }
                this.state = 623;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            this.state = 622;
                            this.match(qcodeParser.COLON);
                        }
                        break;
                }
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === qcodeParser.PI || _la === qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
                    {
                        this.state = 625;
                        this.for_step();
                    }
                }
                this.state = 628;
                this.match(qcodeParser.COLON);
                this.state = 630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === qcodeParser.PI || _la === qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
                    {
                        this.state = 629;
                        this.for_end();
                    }
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
    for_start() {
        let _localctx = new For_startContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, qcodeParser.RULE_for_start);
        try {
            this.state = 636;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 632;
                        this.primary_exp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 633;
                        this.match(qcodeParser.Identifier);
                        this.state = 634;
                        this.match(qcodeParser.ASSIGN);
                        this.state = 635;
                        this.expression(0);
                    }
                    break;
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
    for_step() {
        let _localctx = new For_stepContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, qcodeParser.RULE_for_step);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 638;
                this.assignment_exp();
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
    for_end() {
        let _localctx = new For_endContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, qcodeParser.RULE_for_end);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                this.assignment_exp();
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
    quantum_gate_stmt() {
        let _localctx = new Quantum_gate_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, qcodeParser.RULE_quantum_gate_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this.quantum_gate_operation();
                this.state = 643;
                this.match(qcodeParser.SEMI);
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
    quantum_gate_operation() {
        let _localctx = new Quantum_gate_operationContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, qcodeParser.RULE_quantum_gate_operation);
        try {
            this.state = 754;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case qcodeParser.H_GATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 645;
                        this.match(qcodeParser.H_GATE);
                        this.state = 646;
                        this.match(qcodeParser.LPAREN);
                        this.state = 647;
                        this.control_gate_exp();
                        this.state = 648;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.X_GATE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 650;
                        this.match(qcodeParser.X_GATE);
                        this.state = 651;
                        this.match(qcodeParser.LPAREN);
                        this.state = 652;
                        this.control_gate_exp();
                        this.state = 653;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.NOT_GATE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 655;
                        this.match(qcodeParser.NOT_GATE);
                        this.state = 656;
                        this.match(qcodeParser.LPAREN);
                        this.state = 657;
                        this.control_gate_exp();
                        this.state = 658;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.T_GATE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 660;
                        this.match(qcodeParser.T_GATE);
                        this.state = 661;
                        this.match(qcodeParser.LPAREN);
                        this.state = 662;
                        this.control_gate_exp();
                        this.state = 663;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.S_GATE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 665;
                        this.match(qcodeParser.S_GATE);
                        this.state = 666;
                        this.match(qcodeParser.LPAREN);
                        this.state = 667;
                        this.control_gate_exp();
                        this.state = 668;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.Y_GATE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 670;
                        this.match(qcodeParser.Y_GATE);
                        this.state = 671;
                        this.match(qcodeParser.LPAREN);
                        this.state = 672;
                        this.control_gate_exp();
                        this.state = 673;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.Z_GATE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 675;
                        this.match(qcodeParser.Z_GATE);
                        this.state = 676;
                        this.match(qcodeParser.LPAREN);
                        this.state = 677;
                        this.control_gate_exp();
                        this.state = 678;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.X1_GATE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 680;
                        this.match(qcodeParser.X1_GATE);
                        this.state = 681;
                        this.match(qcodeParser.LPAREN);
                        this.state = 682;
                        this.control_gate_exp();
                        this.state = 683;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.Y1_GATE:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 685;
                        this.match(qcodeParser.Y1_GATE);
                        this.state = 686;
                        this.match(qcodeParser.LPAREN);
                        this.state = 687;
                        this.control_gate_exp();
                        this.state = 688;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.Z1_GATE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 690;
                        this.match(qcodeParser.Z1_GATE);
                        this.state = 691;
                        this.match(qcodeParser.LPAREN);
                        this.state = 692;
                        this.control_gate_exp();
                        this.state = 693;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.U4_GATE:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 695;
                        this.match(qcodeParser.U4_GATE);
                        this.state = 696;
                        this.match(qcodeParser.LPAREN);
                        this.state = 697;
                        this.control_gate_exp();
                        this.state = 698;
                        this.match(qcodeParser.COMMA);
                        this.state = 699;
                        this.four_angle_args();
                        this.state = 700;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.RX_GATE:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 702;
                        this.match(qcodeParser.RX_GATE);
                        this.state = 703;
                        this.match(qcodeParser.LPAREN);
                        this.state = 704;
                        this.control_gate_exp();
                        this.state = 705;
                        this.match(qcodeParser.COMMA);
                        this.state = 706;
                        this.expression(0);
                        this.state = 707;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.RY_GATE:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 709;
                        this.match(qcodeParser.RY_GATE);
                        this.state = 710;
                        this.match(qcodeParser.LPAREN);
                        this.state = 711;
                        this.control_gate_exp();
                        this.state = 712;
                        this.match(qcodeParser.COMMA);
                        this.state = 713;
                        this.expression(0);
                        this.state = 714;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.RZ_GATE:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 716;
                        this.match(qcodeParser.RZ_GATE);
                        this.state = 717;
                        this.match(qcodeParser.LPAREN);
                        this.state = 718;
                        this.control_gate_exp();
                        this.state = 719;
                        this.match(qcodeParser.COMMA);
                        this.state = 720;
                        this.expression(0);
                        this.state = 721;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.CNOT_GATE:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 723;
                        this.match(qcodeParser.CNOT_GATE);
                        this.state = 724;
                        this.match(qcodeParser.LPAREN);
                        this.state = 725;
                        this.double_gate_exp();
                        this.state = 726;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.CZ_GATE:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 728;
                        this.match(qcodeParser.CZ_GATE);
                        this.state = 729;
                        this.match(qcodeParser.LPAREN);
                        this.state = 730;
                        this.double_gate_exp();
                        this.state = 731;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.CU_GATE:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 733;
                        this.match(qcodeParser.CU_GATE);
                        this.state = 734;
                        this.match(qcodeParser.LPAREN);
                        this.state = 735;
                        this.double_gate_exp();
                        this.state = 736;
                        this.match(qcodeParser.COMMA);
                        this.state = 737;
                        this.four_angle_args();
                        this.state = 738;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.ISWAP:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 740;
                        this.match(qcodeParser.ISWAP);
                        this.state = 741;
                        this.match(qcodeParser.LPAREN);
                        this.state = 742;
                        this.double_gate_exp();
                        this.state = 743;
                        this.match(qcodeParser.COMMA);
                        this.state = 744;
                        this.theta();
                        this.state = 745;
                        this.match(qcodeParser.RPAREN);
                    }
                    break;
                case qcodeParser.CR_GATE:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 747;
                        this.match(qcodeParser.CR_GATE);
                        this.state = 748;
                        this.match(qcodeParser.LPAREN);
                        this.state = 749;
                        this.double_gate_exp();
                        this.state = 750;
                        this.match(qcodeParser.COMMA);
                        this.state = 751;
                        this.theta();
                        this.state = 752;
                        this.match(qcodeParser.RPAREN);
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
    four_angle_args() {
        let _localctx = new Four_angle_argsContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, qcodeParser.RULE_four_angle_args);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 756;
                this.alpha();
                this.state = 757;
                this.match(qcodeParser.COMMA);
                this.state = 758;
                this.beta();
                this.state = 759;
                this.match(qcodeParser.COMMA);
                this.state = 760;
                this.gamma();
                this.state = 761;
                this.match(qcodeParser.COMMA);
                this.state = 762;
                this.delta();
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
    alpha() {
        let _localctx = new AlphaContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, qcodeParser.RULE_alpha);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 764;
                this.expression(0);
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
    beta() {
        let _localctx = new BetaContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, qcodeParser.RULE_beta);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 766;
                this.expression(0);
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
    gamma() {
        let _localctx = new GammaContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, qcodeParser.RULE_gamma);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 768;
                this.expression(0);
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
    delta() {
        let _localctx = new DeltaContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, qcodeParser.RULE_delta);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 770;
                this.expression(0);
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
    theta() {
        let _localctx = new ThetaContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, qcodeParser.RULE_theta);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.expression(0);
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
    control_gate_exp() {
        let _localctx = new Control_gate_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, qcodeParser.RULE_control_gate_exp);
        try {
            this.state = 780;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 774;
                        this.match(qcodeParser.Identifier);
                        this.state = 775;
                        this.match(qcodeParser.LBRACK);
                        this.state = 776;
                        this.expression(0);
                        this.state = 777;
                        this.match(qcodeParser.RBRACK);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 779;
                        this.match(qcodeParser.Identifier);
                    }
                    break;
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
    double_gate_exp() {
        let _localctx = new Double_gate_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, qcodeParser.RULE_double_gate_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.control_gate_exp();
                this.state = 783;
                this.match(qcodeParser.COMMA);
                this.state = 784;
                this.target_gate_exp();
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
    target_gate_exp() {
        let _localctx = new Target_gate_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, qcodeParser.RULE_target_gate_exp);
        try {
            this.state = 792;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 786;
                        this.match(qcodeParser.Identifier);
                        this.state = 787;
                        this.match(qcodeParser.LBRACK);
                        this.state = 788;
                        this.expression(0);
                        this.state = 789;
                        this.match(qcodeParser.RBRACK);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 791;
                        this.match(qcodeParser.Identifier);
                    }
                    break;
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
    measurement_stmt() {
        let _localctx = new Measurement_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, qcodeParser.RULE_measurement_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 794;
                this.match(qcodeParser.MEASURE);
                this.state = 795;
                this.match(qcodeParser.LPAREN);
                this.state = 796;
                this.control_gate_exp();
                this.state = 797;
                this.match(qcodeParser.COMMA);
                this.state = 798;
                this.accept_cbit_stmt();
                this.state = 799;
                this.match(qcodeParser.RPAREN);
                this.state = 800;
                this.match(qcodeParser.SEMI);
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
    accept_cbit_stmt() {
        let _localctx = new Accept_cbit_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, qcodeParser.RULE_accept_cbit_stmt);
        try {
            this.state = 808;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 802;
                        this.match(qcodeParser.Identifier);
                        this.state = 803;
                        this.match(qcodeParser.LBRACK);
                        this.state = 804;
                        this.expression(0);
                        this.state = 805;
                        this.match(qcodeParser.RBRACK);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 807;
                        this.match(qcodeParser.Identifier);
                    }
                    break;
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
    q_if_operation() {
        let _localctx = new Q_if_operationContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, qcodeParser.RULE_q_if_operation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.match(qcodeParser.QIF);
                this.state = 811;
                this.match(qcodeParser.LPAREN);
                this.state = 812;
                this.q_condition();
                this.state = 813;
                this.match(qcodeParser.RPAREN);
                this.state = 814;
                this.match(qcodeParser.LBRACE);
                this.state = 815;
                this.q_if_stmt();
                this.state = 816;
                this.match(qcodeParser.RBRACE);
                this.state = 822;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                    case 1:
                        {
                            this.state = 817;
                            this.match(qcodeParser.QELSE);
                            this.state = 818;
                            this.match(qcodeParser.LBRACE);
                            this.state = 819;
                            this.q_if_stmt();
                            this.state = 820;
                            this.match(qcodeParser.RBRACE);
                        }
                        break;
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
    q_if_stmt() {
        let _localctx = new Q_if_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, qcodeParser.RULE_q_if_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 827;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.PI) | (1 << qcodeParser.LET) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.IF) | (1 << qcodeParser.FOR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.LEN) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.H_GATE) | (1 << qcodeParser.X_GATE) | (1 << qcodeParser.NOT_GATE) | (1 << qcodeParser.T_GATE) | (1 << qcodeParser.S_GATE) | (1 << qcodeParser.Y_GATE) | (1 << qcodeParser.Z_GATE) | (1 << qcodeParser.X1_GATE) | (1 << qcodeParser.Y1_GATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.BANG - 32)) | (1 << (qcodeParser.TILDE - 32)) | (1 << (qcodeParser.LOGIC_AND - 32)) | (1 << (qcodeParser.AND - 32)) | (1 << (qcodeParser.INC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (qcodeParser.DEC - 64)) | (1 << (qcodeParser.ADD - 64)) | (1 << (qcodeParser.SUB - 64)) | (1 << (qcodeParser.MUL - 64)) | (1 << (qcodeParser.POW - 64)) | (1 << (qcodeParser.LBRACE - 64)) | (1 << (qcodeParser.SEMI - 64)) | (1 << (qcodeParser.LPAREN - 64)) | (1 << (qcodeParser.Identifier - 64)) | (1 << (qcodeParser.Constant - 64)) | (1 << (qcodeParser.Digit_Sequence - 64)))) !== 0)) {
                    {
                        {
                            this.state = 824;
                            this.q_if_stmt_item();
                        }
                    }
                    this.state = 829;
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
    q_if_stmt_item() {
        let _localctx = new Q_if_stmt_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, qcodeParser.RULE_q_if_stmt_item);
        try {
            this.state = 833;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 830;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 831;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 832;
                        this.literal_declaration();
                    }
                    break;
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
    q_while_operation() {
        let _localctx = new Q_while_operationContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, qcodeParser.RULE_q_while_operation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 835;
                this.match(qcodeParser.QWHILE);
                this.state = 836;
                this.match(qcodeParser.LPAREN);
                this.state = 837;
                this.q_condition();
                this.state = 838;
                this.match(qcodeParser.RPAREN);
                this.state = 839;
                this.match(qcodeParser.LBRACE);
                this.state = 840;
                this.q_while_stmt();
                this.state = 841;
                this.match(qcodeParser.RBRACE);
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
    q_while_stmt() {
        let _localctx = new Q_while_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, qcodeParser.RULE_q_while_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 846;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.PI) | (1 << qcodeParser.LET) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.IF) | (1 << qcodeParser.FOR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.LEN) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.H_GATE) | (1 << qcodeParser.X_GATE) | (1 << qcodeParser.NOT_GATE) | (1 << qcodeParser.T_GATE) | (1 << qcodeParser.S_GATE) | (1 << qcodeParser.Y_GATE) | (1 << qcodeParser.Z_GATE) | (1 << qcodeParser.X1_GATE) | (1 << qcodeParser.Y1_GATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.BANG - 32)) | (1 << (qcodeParser.TILDE - 32)) | (1 << (qcodeParser.LOGIC_AND - 32)) | (1 << (qcodeParser.AND - 32)) | (1 << (qcodeParser.INC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (qcodeParser.DEC - 64)) | (1 << (qcodeParser.ADD - 64)) | (1 << (qcodeParser.SUB - 64)) | (1 << (qcodeParser.MUL - 64)) | (1 << (qcodeParser.POW - 64)) | (1 << (qcodeParser.LBRACE - 64)) | (1 << (qcodeParser.SEMI - 64)) | (1 << (qcodeParser.LPAREN - 64)) | (1 << (qcodeParser.Identifier - 64)) | (1 << (qcodeParser.Constant - 64)) | (1 << (qcodeParser.Digit_Sequence - 64)))) !== 0)) {
                    {
                        {
                            this.state = 843;
                            this.q_while_stmt_item();
                        }
                    }
                    this.state = 848;
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
    q_while_stmt_item() {
        let _localctx = new Q_while_stmt_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, qcodeParser.RULE_q_while_stmt_item);
        try {
            this.state = 852;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 849;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 850;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 851;
                        this.literal_declaration();
                    }
                    break;
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
    q_condition() {
        let _localctx = new Q_conditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, qcodeParser.RULE_q_condition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this.inclu_exp(0);
                this.state = 860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === qcodeParser.LOGIC_AND || _la === qcodeParser.LOGIC_OR) {
                    {
                        {
                            this.state = 855;
                            this.q_operator();
                            this.state = 856;
                            this.inclu_exp(0);
                        }
                    }
                    this.state = 862;
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
    q_operator() {
        let _localctx = new Q_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, qcodeParser.RULE_q_operator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                _la = this._input.LA(1);
                if (!(_la === qcodeParser.LOGIC_AND || _la === qcodeParser.LOGIC_OR)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 12:
                return this.init_DeclaratorList_sempred(_localctx, predIndex);
            case 13:
                return this.init_Literal_DeclaratorList_sempred(_localctx, predIndex);
            case 16:
                return this.declarator_sempred(_localctx, predIndex);
            case 20:
                return this.expression_sempred(_localctx, predIndex);
            case 21:
                return this.logicOr_exp_sempred(_localctx, predIndex);
            case 22:
                return this.logicAnd_exp_sempred(_localctx, predIndex);
            case 23:
                return this.inclu_exp_sempred(_localctx, predIndex);
            case 24:
                return this.exclu_exp_sempred(_localctx, predIndex);
            case 25:
                return this.and_exp_sempred(_localctx, predIndex);
            case 26:
                return this.equal_exp_sempred(_localctx, predIndex);
            case 27:
                return this.relation_exp_sempred(_localctx, predIndex);
            case 28:
                return this.shift_exp_sempred(_localctx, predIndex);
            case 29:
                return this.additive_exp_sempred(_localctx, predIndex);
            case 30:
                return this.multi_exp_sempred(_localctx, predIndex);
            case 34:
                return this.postfix_exp_sempred(_localctx, predIndex);
            case 35:
                return this.argument_exp_List_sempred(_localctx, predIndex);
            case 37:
                return this.args_type_List_sempred(_localctx, predIndex);
            case 40:
                return this.initializerList_sempred(_localctx, predIndex);
            case 42:
                return this.designatorList_sempred(_localctx, predIndex);
            case 50:
                return this.block_List_sempred(_localctx, predIndex);
        }
        return true;
    }
    init_DeclaratorList_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    init_Literal_DeclaratorList_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    declarator_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicOr_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicAnd_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    inclu_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    exclu_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    and_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 8:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    equal_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 9:
                return this.precpred(this._ctx, 2);
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    relation_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 4);
            case 12:
                return this.precpred(this._ctx, 3);
            case 13:
                return this.precpred(this._ctx, 2);
            case 14:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    shift_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 15:
                return this.precpred(this._ctx, 2);
            case 16:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    additive_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 17:
                return this.precpred(this._ctx, 2);
            case 18:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    multi_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 19:
                return this.precpred(this._ctx, 4);
            case 20:
                return this.precpred(this._ctx, 3);
            case 21:
                return this.precpred(this._ctx, 2);
            case 22:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    postfix_exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 23:
                return this.precpred(this._ctx, 4);
            case 24:
                return this.precpred(this._ctx, 3);
            case 25:
                return this.precpred(this._ctx, 2);
            case 26:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    argument_exp_List_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 27:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    args_type_List_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 28:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    initializerList_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 29:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    designatorList_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    block_List_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 31:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!qcodeParser.__ATN) {
            qcodeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(qcodeParser._serializedATN));
        }
        return qcodeParser.__ATN;
    }
}
qcodeParser.T__0 = 1;
qcodeParser.T__1 = 2;
qcodeParser.PI = 3;
qcodeParser.LET = 4;
qcodeParser.INCLUDE = 5;
qcodeParser.INT = 6;
qcodeParser.FLOAT = 7;
qcodeParser.BOOLEAN = 8;
qcodeParser.IF = 9;
qcodeParser.ELSE = 10;
qcodeParser.FOR = 11;
qcodeParser.LIB_POSTFIX = 12;
qcodeParser.INC_POSTFIX = 13;
qcodeParser.QRUNES_POSTFIX = 14;
qcodeParser.VAR = 15;
qcodeParser.DOUBLE = 16;
qcodeParser.LEN = 17;
qcodeParser.HOST = 18;
qcodeParser.QVEC = 19;
qcodeParser.QUBIT = 20;
qcodeParser.CVEC = 21;
qcodeParser.CBIT = 22;
qcodeParser.H_GATE = 23;
qcodeParser.X_GATE = 24;
qcodeParser.NOT_GATE = 25;
qcodeParser.T_GATE = 26;
qcodeParser.S_GATE = 27;
qcodeParser.Y_GATE = 28;
qcodeParser.Z_GATE = 29;
qcodeParser.X1_GATE = 30;
qcodeParser.Y1_GATE = 31;
qcodeParser.Z1_GATE = 32;
qcodeParser.U4_GATE = 33;
qcodeParser.RX_GATE = 34;
qcodeParser.RY_GATE = 35;
qcodeParser.RZ_GATE = 36;
qcodeParser.CNOT_GATE = 37;
qcodeParser.CZ_GATE = 38;
qcodeParser.CR_GATE = 39;
qcodeParser.CU_GATE = 40;
qcodeParser.ISWAP = 41;
qcodeParser.MEASURE = 42;
qcodeParser.QIF = 43;
qcodeParser.QWHILE = 44;
qcodeParser.QELSE = 45;
qcodeParser.SHARP_SIGN = 46;
qcodeParser.ASSIGN = 47;
qcodeParser.GT = 48;
qcodeParser.LT = 49;
qcodeParser.BANG = 50;
qcodeParser.TILDE = 51;
qcodeParser.COLON = 52;
qcodeParser.EQUAL = 53;
qcodeParser.LE = 54;
qcodeParser.GE = 55;
qcodeParser.NOTEQUAL = 56;
qcodeParser.LOGIC_AND = 57;
qcodeParser.LOGIC_OR = 58;
qcodeParser.AND = 59;
qcodeParser.EXCLU = 60;
qcodeParser.INCLU = 61;
qcodeParser.QUE_MARK = 62;
qcodeParser.INC = 63;
qcodeParser.DEC = 64;
qcodeParser.ADD = 65;
qcodeParser.SUB = 66;
qcodeParser.MUL = 67;
qcodeParser.POW = 68;
qcodeParser.DIV = 69;
qcodeParser.MOD = 70;
qcodeParser.ADD_ASSIGN = 71;
qcodeParser.SUB_ASSIGN = 72;
qcodeParser.MUL_ASSIGN = 73;
qcodeParser.DIV_ASSIGN = 74;
qcodeParser.LSHIFT = 75;
qcodeParser.RSHIFT = 76;
qcodeParser.LBRACE = 77;
qcodeParser.RBRACE = 78;
qcodeParser.SEMI = 79;
qcodeParser.COMMA = 80;
qcodeParser.DOT = 81;
qcodeParser.LPAREN = 82;
qcodeParser.RPAREN = 83;
qcodeParser.LBRACK = 84;
qcodeParser.RBRACK = 85;
qcodeParser.Identifier = 86;
qcodeParser.Constant = 87;
qcodeParser.Digit_Sequence = 88;
qcodeParser.WhiteSpace = 89;
qcodeParser.SingleLineComment = 90;
qcodeParser.MultiLinesComment = 91;
qcodeParser.RULE_qrunes = 0;
qcodeParser.RULE_lang_unit = 1;
qcodeParser.RULE_include_declaration = 2;
qcodeParser.RULE_include_sign = 3;
qcodeParser.RULE_postfix = 4;
qcodeParser.RULE_declaration = 5;
qcodeParser.RULE_literal_declaration = 6;
qcodeParser.RULE_declaration_Specifier = 7;
qcodeParser.RULE_literal_type = 8;
qcodeParser.RULE_primary_type = 9;
qcodeParser.RULE_quantum_type = 10;
qcodeParser.RULE_assist_classical_type = 11;
qcodeParser.RULE_init_DeclaratorList = 12;
qcodeParser.RULE_init_Literal_DeclaratorList = 13;
qcodeParser.RULE_init_Declarator = 14;
qcodeParser.RULE_init_Literal_Declarator = 15;
qcodeParser.RULE_declarator = 16;
qcodeParser.RULE_assignment_exp = 17;
qcodeParser.RULE_assignment_operator = 18;
qcodeParser.RULE_condition_exp = 19;
qcodeParser.RULE_expression = 20;
qcodeParser.RULE_logicOr_exp = 21;
qcodeParser.RULE_logicAnd_exp = 22;
qcodeParser.RULE_inclu_exp = 23;
qcodeParser.RULE_exclu_exp = 24;
qcodeParser.RULE_and_exp = 25;
qcodeParser.RULE_equal_exp = 26;
qcodeParser.RULE_relation_exp = 27;
qcodeParser.RULE_shift_exp = 28;
qcodeParser.RULE_additive_exp = 29;
qcodeParser.RULE_multi_exp = 30;
qcodeParser.RULE_cast_exp = 31;
qcodeParser.RULE_unary_exp = 32;
qcodeParser.RULE_unary_operator = 33;
qcodeParser.RULE_postfix_exp = 34;
qcodeParser.RULE_argument_exp_List = 35;
qcodeParser.RULE_primary_exp = 36;
qcodeParser.RULE_args_type_List = 37;
qcodeParser.RULE_args_declaration = 38;
qcodeParser.RULE_initializer = 39;
qcodeParser.RULE_initializerList = 40;
qcodeParser.RULE_designation = 41;
qcodeParser.RULE_designatorList = 42;
qcodeParser.RULE_designator = 43;
qcodeParser.RULE_constant_exp = 44;
qcodeParser.RULE_func_declaration = 45;
qcodeParser.RULE_func_declarator = 46;
qcodeParser.RULE_func_definition = 47;
qcodeParser.RULE_declarationList = 48;
qcodeParser.RULE_comp_stmt = 49;
qcodeParser.RULE_block_List = 50;
qcodeParser.RULE_block_Item = 51;
qcodeParser.RULE_statement = 52;
qcodeParser.RULE_exp_stmt = 53;
qcodeParser.RULE_select_stmt = 54;
qcodeParser.RULE_iterate_stmt = 55;
qcodeParser.RULE_for_stmt = 56;
qcodeParser.RULE_for_start = 57;
qcodeParser.RULE_for_step = 58;
qcodeParser.RULE_for_end = 59;
qcodeParser.RULE_quantum_gate_stmt = 60;
qcodeParser.RULE_quantum_gate_operation = 61;
qcodeParser.RULE_four_angle_args = 62;
qcodeParser.RULE_alpha = 63;
qcodeParser.RULE_beta = 64;
qcodeParser.RULE_gamma = 65;
qcodeParser.RULE_delta = 66;
qcodeParser.RULE_theta = 67;
qcodeParser.RULE_control_gate_exp = 68;
qcodeParser.RULE_double_gate_exp = 69;
qcodeParser.RULE_target_gate_exp = 70;
qcodeParser.RULE_measurement_stmt = 71;
qcodeParser.RULE_accept_cbit_stmt = 72;
qcodeParser.RULE_q_if_operation = 73;
qcodeParser.RULE_q_if_stmt = 74;
qcodeParser.RULE_q_if_stmt_item = 75;
qcodeParser.RULE_q_while_operation = 76;
qcodeParser.RULE_q_while_stmt = 77;
qcodeParser.RULE_q_while_stmt_item = 78;
qcodeParser.RULE_q_condition = 79;
qcodeParser.RULE_q_operator = 80;
qcodeParser.ruleNames = [
    "qrunes", "lang_unit", "include_declaration", "include_sign", "postfix",
    "declaration", "literal_declaration", "declaration_Specifier", "literal_type",
    "primary_type", "quantum_type", "assist_classical_type", "init_DeclaratorList",
    "init_Literal_DeclaratorList", "init_Declarator", "init_Literal_Declarator",
    "declarator", "assignment_exp", "assignment_operator", "condition_exp",
    "expression", "logicOr_exp", "logicAnd_exp", "inclu_exp", "exclu_exp",
    "and_exp", "equal_exp", "relation_exp", "shift_exp", "additive_exp", "multi_exp",
    "cast_exp", "unary_exp", "unary_operator", "postfix_exp", "argument_exp_List",
    "primary_exp", "args_type_List", "args_declaration", "initializer", "initializerList",
    "designation", "designatorList", "designator", "constant_exp", "func_declaration",
    "func_declarator", "func_definition", "declarationList", "comp_stmt",
    "block_List", "block_Item", "statement", "exp_stmt", "select_stmt", "iterate_stmt",
    "for_stmt", "for_start", "for_step", "for_end", "quantum_gate_stmt", "quantum_gate_operation",
    "four_angle_args", "alpha", "beta", "gamma", "delta", "theta", "control_gate_exp",
    "double_gate_exp", "target_gate_exp", "measurement_stmt", "accept_cbit_stmt",
    "q_if_operation", "q_if_stmt", "q_if_stmt_item", "q_while_operation",
    "q_while_stmt", "q_while_stmt_item", "q_condition", "q_operator"
];
qcodeParser._LITERAL_NAMES = [
    undefined, "'\"'", "'''", "'Pi'", "'let'", "'include'", "'int'", "'float'",
    "'boolean'", "'if'", "'else'", "'for'", "'.lib'", "'.inc'", "'.qrunes'",
    "'var'", "'double'", "'len'", "'host'", "'qvec'", "'qubit'", "'cvec'",
    "'cbit'", "'H'", "'X'", "'NOT'", "'T'", "'S'", "'Y'", "'Z'", "'X1'", "'Y1'",
    "'Z1'", "'U4'", "'RX'", "'RY'", "'RZ'", "'CNOT'", "'CZ'", "'CR'", "'CU'",
    "'iSWAP'", "'Measure'", "'qif'", "'qwhile'", "'qelse'", "'#'", "'='",
    "'>'", "'<'", "'!'", "'~'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'",
    "'||'", "'&'", "'^'", "'|'", "'?'", "'++'", "'--'", "'+'", "'-'", "'*'",
    "'**'", "'/'", "'%'", "'+='", "'-='", "'*='", "'/='", "'<<'", "'>>'",
    "'{'", "'}'", "';'", "','", "'.'", "'('", "')'", "'['", "']'"
];
qcodeParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, "PI", "LET", "INCLUDE", "INT", "FLOAT",
    "BOOLEAN", "IF", "ELSE", "FOR", "LIB_POSTFIX", "INC_POSTFIX", "QRUNES_POSTFIX",
    "VAR", "DOUBLE", "LEN", "HOST", "QVEC", "QUBIT", "CVEC", "CBIT", "H_GATE",
    "X_GATE", "NOT_GATE", "T_GATE", "S_GATE", "Y_GATE", "Z_GATE", "X1_GATE",
    "Y1_GATE", "Z1_GATE", "U4_GATE", "RX_GATE", "RY_GATE", "RZ_GATE", "CNOT_GATE",
    "CZ_GATE", "CR_GATE", "CU_GATE", "ISWAP", "MEASURE", "QIF", "QWHILE",
    "QELSE", "SHARP_SIGN", "ASSIGN", "GT", "LT", "BANG", "TILDE", "COLON",
    "EQUAL", "LE", "GE", "NOTEQUAL", "LOGIC_AND", "LOGIC_OR", "AND", "EXCLU",
    "INCLU", "QUE_MARK", "INC", "DEC", "ADD", "SUB", "MUL", "POW", "DIV",
    "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "LSHIFT",
    "RSHIFT", "LBRACE", "RBRACE", "SEMI", "COMMA", "DOT", "LPAREN", "RPAREN",
    "LBRACK", "RBRACK", "Identifier", "Constant", "Digit_Sequence", "WhiteSpace",
    "SingleLineComment", "MultiLinesComment"
];
qcodeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(qcodeParser._LITERAL_NAMES, qcodeParser._SYMBOLIC_NAMES, []);
qcodeParser._serializedATNSegments = 2;
qcodeParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03]\u0364\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x03\x02\x07\x02\xA6\n\x02\f\x02\x0E\x02\xA9" +
    "\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xB0\n\x03\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
    "\x03\x07\x05\x07\xBD\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x05\b\xC3\n\b" +
    "\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xCB\n\t\x03\n\x03\n\x03\v\x03" +
    "\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x07\x0E\xDB\n\x0E\f\x0E\x0E\x0E\xDE\v\x0E\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE6\n\x0F\f\x0F\x0E\x0F\xE9\v\x0F\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xF0\n\x10\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x07\x12\xFE\n\x12\f\x12\x0E\x12\u0101\v\x12\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u010A\n\x13\x03\x14\x03\x14" +
    "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0114\n\x15\x03" +
    "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u011C\n\x16\f\x16" +
    "\x0E\x16\u011F\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
    "\x17\u0127\n\x17\f\x17\x0E\x17\u012A\v\x17\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x07\x18\u0132\n\x18\f\x18\x0E\x18\u0135\v\x18\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u013D\n\x19\f\x19" +
    "\x0E\x19\u0140\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
    "\x1A\u0148\n\x1A\f\x1A\x0E\x1A\u014B\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x07\x1B\u0153\n\x1B\f\x1B\x0E\x1B\u0156\v\x1B\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
    "\x1C\u0161\n\x1C\f\x1C\x0E\x1C\u0164\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1D\x07\x1D\u0175\n\x1D\f\x1D\x0E\x1D\u0178\v\x1D\x03" +
    "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
    "\x1E\u0183\n\x1E\f\x1E\x0E\x1E\u0186\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
    "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0191\n\x1F\f\x1F" +
    "\x0E\x1F\u0194\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
    " \x03 \x03 \x03 \x03 \x03 \x07 \u01A5\n \f \x0E \u01A8\v \x03!\x03!\x05" +
    "!\u01AC\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
    "\x05\"\u01B8\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05" +
    "$\u01C4\n$\x03$\x03$\x03$\x03$\x03$\x05$\u01CB\n$\x03$\x03$\x03$\x03$" +
    "\x03$\x07$\u01D2\n$\f$\x0E$\u01D5\v$\x03%\x03%\x03%\x03%\x03%\x03%\x07" +
    "%\u01DD\n%\f%\x0E%\u01E0\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05" +
    "&\u01EA\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01F2\n\'\f\'\x0E" +
    "\'\u01F5\v\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05" +
    ")\u0202\n)\x03*\x03*\x05*\u0206\n*\x03*\x03*\x03*\x03*\x03*\x05*\u020D" +
    "\n*\x03*\x07*\u0210\n*\f*\x0E*\u0213\v*\x03+\x03+\x03+\x03,\x03,\x03," +
    "\x03,\x03,\x07,\u021D\n,\f,\x0E,\u0220\v,\x03-\x03-\x03-\x03-\x03.\x03" +
    ".\x03/\x03/\x03/\x030\x030\x030\x050\u022E\n0\x030\x030\x031\x031\x03" +
    "1\x032\x032\x032\x032\x052\u0239\n2\x033\x033\x053\u023D\n3\x033\x033" +
    "\x034\x034\x034\x034\x034\x074\u0246\n4\f4\x0E4\u0249\v4\x035\x035\x03" +
    "5\x055\u024E\n5\x036\x036\x036\x036\x036\x036\x036\x036\x056\u0258\n6" +
    "\x037\x057\u025B\n7\x037\x037\x038\x038\x038\x038\x038\x038\x038\x058" +
    "\u0266\n8\x039\x039\x039\x039\x039\x039\x03:\x05:\u026F\n:\x03:\x05:\u0272" +
    "\n:\x03:\x05:\u0275\n:\x03:\x03:\x05:\u0279\n:\x03;\x03;\x03;\x03;\x05" +
    ";\u027F\n;\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u02F5\n?\x03@\x03@\x03@\x03@\x03" +
    "@\x03@\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03" +
    "F\x03F\x03F\x03F\x03F\x03F\x05F\u030F\nF\x03G\x03G\x03G\x03G\x03H\x03" +
    "H\x03H\x03H\x03H\x03H\x05H\u031B\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
    "I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u032B\nJ\x03K\x03K\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0339\nK\x03L\x07L\u033C" +
    "\nL\fL\x0EL\u033F\vL\x03M\x03M\x03M\x05M\u0344\nM\x03N\x03N\x03N\x03N" +
    "\x03N\x03N\x03N\x03N\x03O\x07O\u034F\nO\fO\x0EO\u0352\vO\x03P\x03P\x03" +
    "P\x05P\u0357\nP\x03Q\x03Q\x03Q\x03Q\x07Q\u035D\nQ\fQ\x0EQ\u0360\vQ\x03" +
    "R\x03R\x03R\x02\x02\x16\x1A\x1C\"*,.02468:<>FHLRVfS\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
    "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
    "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
    "\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\x02\n\x03\x02" +
    "\x03\x04\x03\x02\x0E\x10\x04\x02\b\t\x12\x12\x03\x02\x15\x16\x03\x02\x17" +
    "\x18\x04\x0211IL\x05\x0245==CF\x03\x02;<\u037E\x02\xA7\x03\x02\x02\x02" +
    "\x04\xAF\x03\x02\x02\x02\x06\xB1\x03\x02\x02\x02\b\xB7\x03\x02\x02\x02" +
    "\n\xB9\x03\x02\x02\x02\f\xBC\x03\x02\x02\x02\x0E\xC2\x03\x02\x02\x02\x10" +
    "\xCA\x03\x02\x02\x02\x12\xCC\x03\x02\x02\x02\x14\xCE\x03\x02\x02\x02\x16" +
    "\xD0\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD4\x03\x02\x02\x02\x1C" +
    "\xDF\x03\x02\x02\x02\x1E\xEF\x03\x02\x02\x02 \xF1\x03\x02\x02\x02\"\xF5" +
    "\x03\x02\x02\x02$\u0109\x03\x02\x02\x02&\u010B\x03\x02\x02\x02(\u010D" +
    "\x03\x02\x02\x02*\u0115\x03\x02\x02\x02,\u0120\x03\x02\x02\x02.\u012B" +
    "\x03\x02\x02\x020\u0136\x03\x02\x02\x022\u0141\x03\x02\x02\x024\u014C" +
    "\x03\x02\x02\x026\u0157\x03\x02\x02\x028\u0165\x03\x02\x02\x02:\u0179" +
    "\x03\x02\x02\x02<\u0187\x03\x02\x02\x02>\u0195\x03\x02\x02\x02@\u01AB" +
    "\x03\x02\x02\x02B\u01B7\x03\x02\x02\x02D\u01B9\x03\x02\x02\x02F\u01BB" +
    "\x03\x02\x02\x02H\u01D6\x03\x02\x02\x02J\u01E9\x03\x02\x02\x02L\u01EB" +
    "\x03\x02\x02\x02N\u01F6\x03\x02\x02\x02P\u0201\x03\x02\x02\x02R\u0203" +
    "\x03\x02\x02\x02T\u0214\x03\x02\x02\x02V\u0217\x03\x02\x02\x02X\u0221" +
    "\x03\x02\x02\x02Z\u0225\x03\x02\x02\x02\\\u0227\x03\x02\x02\x02^\u022A" +
    "\x03\x02\x02\x02`\u0231\x03\x02\x02\x02b\u0238\x03\x02\x02\x02d\u023A" +
    "\x03\x02\x02\x02f\u0240\x03\x02\x02\x02h\u024D\x03\x02\x02\x02j\u0257" +
    "\x03\x02\x02\x02l\u025A\x03\x02\x02\x02n\u025E\x03\x02\x02\x02p\u0267" +
    "\x03\x02\x02\x02r\u026E\x03\x02\x02\x02t\u027E\x03\x02\x02\x02v\u0280" +
    "\x03\x02\x02\x02x\u0282\x03\x02\x02\x02z\u0284\x03\x02\x02\x02|\u02F4" +
    "\x03\x02\x02\x02~\u02F6\x03\x02\x02\x02\x80\u02FE\x03\x02\x02\x02\x82" +
    "\u0300\x03\x02\x02\x02\x84\u0302\x03\x02\x02\x02\x86\u0304\x03\x02\x02" +
    "\x02\x88\u0306\x03\x02\x02\x02\x8A\u030E\x03\x02\x02\x02\x8C\u0310\x03" +
    "\x02\x02\x02\x8E\u031A\x03\x02\x02\x02\x90\u031C\x03\x02\x02\x02\x92\u032A" +
    "\x03\x02\x02\x02\x94\u032C\x03\x02\x02\x02\x96\u033D\x03\x02\x02\x02\x98" +
    "\u0343\x03\x02\x02\x02\x9A\u0345\x03\x02\x02\x02\x9C\u0350\x03\x02\x02" +
    "\x02\x9E\u0356\x03\x02\x02\x02\xA0\u0358\x03\x02\x02\x02\xA2\u0361\x03" +
    "\x02\x02\x02\xA4\xA6\x05\x04\x03\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03" +
    "\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x03\x03" +
    "\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xB0\x05\x06\x04\x02\xAB\xB0\x05" +
    "\f\x07\x02\xAC\xB0\x05\x0E\b\x02\xAD\xB0\x05\\/\x02\xAE\xB0\x05`1\x02" +
    "\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02\x02" +
    "\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x05\x03\x02\x02\x02" +
    "\xB1\xB2\x07\x07\x02\x02\xB2\xB3\x05\b\x05\x02\xB3\xB4\x07X\x02\x02\xB4" +
    "\xB5\x05\n\x06\x02\xB5\xB6\x05\b\x05\x02\xB6\x07\x03\x02\x02\x02\xB7\xB8" +
    "\t\x02\x02\x02\xB8\t\x03\x02\x02\x02\xB9\xBA\t\x03\x02\x02\xBA\v\x03\x02" +
    "\x02\x02\xBB\xBD\x05\x10\t\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02" +
    "\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x05\x1A\x0E\x02\xBF\xC0\x07Q" +
    "\x02\x02\xC0\r\x03\x02\x02\x02\xC1\xC3\x05\x12\n\x02\xC2\xC1\x03\x02\x02" +
    "\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x05\x1C\x0F" +
    "\x02\xC5\xC6\x07Q\x02\x02\xC6\x0F\x03\x02\x02\x02\xC7\xCB\x05\x16\f\x02" +
    "\xC8\xCB\x05\x14\v\x02\xC9\xCB\x05\x18\r\x02\xCA\xC7\x03\x02\x02\x02\xCA" +
    "\xC8\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\x11\x03\x02\x02\x02\xCC" +
    "\xCD\x07\x06\x02\x02\xCD\x13\x03\x02\x02\x02\xCE\xCF\t\x04\x02\x02\xCF" +
    "\x15\x03\x02\x02\x02\xD0\xD1\t\x05\x02\x02\xD1\x17\x03\x02\x02\x02\xD2" +
    "\xD3\t\x06\x02\x02\xD3\x19\x03\x02\x02\x02\xD4\xD5\b\x0E\x01\x02\xD5\xD6" +
    "\x05\x1E\x10\x02\xD6\xDC\x03\x02\x02\x02\xD7\xD8\f\x03\x02\x02\xD8\xD9" +
    "\x07R\x02\x02\xD9\xDB\x05\x1E\x10\x02\xDA\xD7\x03\x02\x02\x02\xDB\xDE" +
    "\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\x1B" +
    "\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\b\x0F\x01\x02\xE0\xE1" +
    "\x05 \x11\x02\xE1\xE7\x03\x02\x02\x02\xE2\xE3\f\x03\x02\x02\xE3\xE4\x07" +
    "R\x02\x02\xE4\xE6\x05 \x11\x02\xE5\xE2\x03\x02\x02\x02\xE6\xE9\x03\x02" +
    "\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\x1D\x03\x02" +
    "\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xF0\x05\"\x12\x02\xEB\xEC\x05\"\x12" +
    "\x02\xEC\xED\x071\x02\x02\xED\xEE\x05P)\x02\xEE\xF0\x03\x02\x02\x02\xEF" +
    "\xEA\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02\xF0\x1F\x03\x02\x02\x02\xF1" +
    "\xF2\x05\"\x12\x02\xF2\xF3\x071\x02\x02\xF3\xF4\x05P)\x02\xF4!\x03\x02" +
    "\x02\x02\xF5\xF6\b\x12\x01\x02\xF6\xF7\x07X\x02\x02\xF7\xFF\x03\x02\x02" +
    "\x02\xF8\xF9\f\x03\x02\x02\xF9\xFA\x07V\x02\x02\xFA\xFB\x05$\x13\x02\xFB" +
    "\xFC\x07W\x02\x02\xFC\xFE\x03\x02\x02\x02\xFD\xF8\x03\x02\x02\x02\xFE" +
    "\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02" +
    "\u0100#\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u010A\x05(\x15" +
    "\x02\u0103\u0104\x05B\"\x02\u0104\u0105\x05&\x14\x02\u0105\u0106\x05$" +
    "\x13\x02\u0106\u010A\x03\x02\x02\x02\u0107\u010A\x07Z\x02\x02\u0108\u010A" +
    "\x07Y\x02\x02\u0109\u0102\x03\x02\x02\x02\u0109\u0103\x03\x02\x02\x02" +
    "\u0109\u0107\x03\x02\x02\x02\u0109\u0108\x03\x02\x02\x02\u010A%\x03\x02" +
    "\x02\x02\u010B\u010C\t\x07\x02\x02\u010C\'\x03\x02\x02\x02\u010D\u0113" +
    "\x05,\x17\x02\u010E\u010F\x07@\x02\x02\u010F\u0110\x05*\x16\x02\u0110" +
    "\u0111\x076\x02\x02\u0111\u0112\x05(\x15\x02\u0112\u0114\x03\x02\x02\x02" +
    "\u0113\u010E\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114)\x03\x02" +
    "\x02\x02\u0115\u0116\b\x16\x01\x02\u0116\u0117\x05$\x13\x02\u0117\u011D" +
    "\x03\x02\x02\x02\u0118\u0119\f\x03\x02\x02\u0119\u011A\x07R\x02\x02\u011A" +
    "\u011C\x05$\x13\x02\u011B\u0118\x03\x02\x02\x02\u011C\u011F\x03\x02\x02" +
    "\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E+\x03" +
    "\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0121\b\x17\x01\x02\u0121" +
    "\u0122\x05.\x18\x02\u0122\u0128\x03\x02\x02\x02\u0123\u0124\f\x03\x02" +
    "\x02\u0124\u0125\x07<\x02\x02\u0125\u0127\x05.\x18\x02\u0126\u0123\x03" +
    "\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
    "\u0129\x03\x02\x02\x02\u0129-\x03\x02\x02\x02\u012A\u0128\x03\x02\x02" +
    "\x02\u012B\u012C\b\x18\x01\x02\u012C\u012D\x050\x19\x02\u012D\u0133\x03" +
    "\x02\x02\x02\u012E\u012F\f\x03\x02\x02\u012F\u0130\x07;\x02\x02\u0130" +
    "\u0132\x050\x19\x02\u0131\u012E\x03\x02\x02\x02\u0132\u0135\x03\x02\x02" +
    "\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134/\x03" +
    "\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0137\b\x19\x01\x02\u0137" +
    "\u0138\x052\x1A\x02\u0138\u013E\x03\x02\x02\x02\u0139\u013A\f\x03\x02" +
    "\x02\u013A\u013B\x07?\x02\x02\u013B\u013D\x052\x1A\x02\u013C\u0139\x03" +
    "\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E" +
    "\u013F\x03\x02\x02\x02\u013F1\x03\x02\x02\x02\u0140\u013E\x03\x02\x02" +
    "\x02\u0141\u0142\b\x1A\x01\x02\u0142\u0143\x054\x1B\x02\u0143\u0149\x03" +
    "\x02\x02\x02\u0144\u0145\f\x03\x02\x02\u0145\u0146\x07>\x02\x02\u0146" +
    "\u0148\x054\x1B\x02\u0147\u0144\x03\x02\x02\x02\u0148\u014B\x03\x02\x02" +
    "\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A3\x03" +
    "\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014D\b\x1B\x01\x02\u014D" +
    "\u014E\x056\x1C\x02\u014E\u0154\x03\x02\x02\x02\u014F\u0150\f\x03\x02" +
    "\x02\u0150\u0151\x07=\x02\x02\u0151\u0153\x056\x1C\x02\u0152\u014F\x03" +
    "\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
    "\u0155\x03\x02\x02\x02\u01555\x03\x02\x02\x02\u0156\u0154\x03\x02\x02" +
    "\x02\u0157\u0158\b\x1C\x01\x02\u0158\u0159\x058\x1D\x02\u0159\u0162\x03" +
    "\x02\x02\x02\u015A\u015B\f\x04\x02\x02\u015B\u015C\x077\x02\x02\u015C" +
    "\u0161\x058\x1D\x02\u015D\u015E\f\x03\x02\x02\u015E\u015F\x07:\x02\x02" +
    "\u015F\u0161\x058\x1D\x02\u0160\u015A\x03\x02\x02\x02\u0160\u015D\x03" +
    "\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162" +
    "\u0163\x03\x02\x02\x02\u01637\x03\x02\x02\x02\u0164\u0162\x03\x02\x02" +
    "\x02\u0165\u0166\b\x1D\x01\x02\u0166\u0167\x05:\x1E\x02\u0167\u0176\x03" +
    "\x02\x02\x02\u0168\u0169\f\x06\x02\x02\u0169\u016A\x072\x02\x02\u016A" +
    "\u0175\x05:\x1E\x02\u016B\u016C\f\x05\x02\x02\u016C\u016D\x073\x02\x02" +
    "\u016D\u0175\x05:\x1E\x02\u016E\u016F\f\x04\x02\x02\u016F\u0170\x079\x02" +
    "\x02\u0170\u0175\x05:\x1E\x02\u0171\u0172\f\x03\x02\x02\u0172\u0173\x07" +
    "8\x02\x02\u0173\u0175\x05:\x1E\x02\u0174\u0168\x03\x02\x02\x02\u0174\u016B" +
    "\x03\x02\x02\x02\u0174\u016E\x03\x02\x02\x02\u0174\u0171\x03\x02\x02\x02" +
    "\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03" +
    "\x02\x02\x02\u01779\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179" +
    "\u017A\b\x1E\x01\x02\u017A\u017B\x05<\x1F\x02\u017B\u0184\x03\x02\x02" +
    "\x02\u017C\u017D\f\x04\x02\x02\u017D\u017E\x07M\x02\x02\u017E\u0183\x05" +
    "<\x1F\x02\u017F\u0180\f\x03\x02\x02\u0180\u0181\x07N\x02\x02\u0181\u0183" +
    "\x05<\x1F\x02\u0182\u017C\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02" +
    "\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03" +
    "\x02\x02\x02\u0185;\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187" +
    "\u0188\b\x1F\x01\x02\u0188\u0189\x05> \x02\u0189\u0192\x03\x02\x02\x02" +
    "\u018A\u018B\f\x04\x02\x02\u018B\u018C\x07C\x02\x02\u018C\u0191\x05> " +
    "\x02\u018D\u018E\f\x03\x02\x02\u018E\u018F\x07D\x02\x02\u018F\u0191\x05" +
    "> \x02\u0190\u018A\x03\x02\x02\x02\u0190\u018D\x03\x02\x02\x02\u0191\u0194" +
    "\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02" +
    "\u0193=\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0196\b \x01" +
    "\x02\u0196\u0197\x05@!\x02\u0197\u01A6\x03\x02\x02\x02\u0198\u0199\f\x06" +
    "\x02\x02\u0199\u019A\x07E\x02\x02\u019A\u01A5\x05@!\x02\u019B\u019C\f" +
    "\x05\x02\x02\u019C\u019D\x07G\x02\x02\u019D\u01A5\x05@!\x02\u019E\u019F" +
    "\f\x04\x02\x02\u019F\u01A0\x07H\x02\x02\u01A0\u01A5\x05@!\x02\u01A1\u01A2" +
    "\f\x03\x02\x02\u01A2\u01A3\x07F\x02\x02\u01A3\u01A5\x05@!\x02\u01A4\u0198" +
    "\x03\x02\x02\x02\u01A4\u019B\x03\x02\x02\x02\u01A4\u019E\x03\x02\x02\x02" +
    "\u01A4\u01A1\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03" +
    "\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7?\x03\x02\x02\x02\u01A8" +
    "\u01A6\x03\x02\x02\x02\u01A9\u01AC\x05B\"\x02\u01AA\u01AC\x07Z\x02\x02" +
    "\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01ACA\x03\x02" +
    "\x02\x02\u01AD\u01B8\x05F$\x02\u01AE\u01AF\x07A\x02\x02\u01AF\u01B8\x05" +
    "B\"\x02\u01B0\u01B1\x07B\x02\x02\u01B1\u01B8\x05B\"\x02\u01B2\u01B3\x05" +
    "D#\x02\u01B3\u01B4\x05@!\x02\u01B4\u01B8\x03\x02\x02\x02\u01B5\u01B6\x07" +
    ";\x02\x02\u01B6\u01B8\x07X\x02\x02\u01B7\u01AD\x03\x02\x02\x02\u01B7\u01AE" +
    "\x03\x02\x02\x02\u01B7\u01B0\x03\x02\x02\x02\u01B7\u01B2\x03\x02\x02\x02" +
    "\u01B7\u01B5\x03\x02\x02\x02\u01B8C\x03\x02\x02\x02\u01B9\u01BA\t\b\x02" +
    "\x02\u01BAE\x03\x02\x02\x02\u01BB\u01BC\b$\x01\x02\u01BC\u01BD\x05J&\x02" +
    "\u01BD\u01D3\x03\x02\x02\x02\u01BE\u01BF\f\x06\x02\x02\u01BF\u01C0\x07" +
    "V\x02\x02\u01C0\u01C3\x05*\x16\x02\u01C1\u01C2\x076\x02\x02\u01C2\u01C4" +
    "\x05*\x16\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02" +
    "\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07W\x02\x02\u01C6\u01D2\x03" +
    "\x02\x02\x02\u01C7\u01C8\f\x05\x02\x02\u01C8\u01CA\x07T\x02\x02\u01C9" +
    "\u01CB\x05H%\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02" +
    "\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01D2\x07U\x02\x02\u01CD\u01CE\f\x04" +
    "\x02\x02\u01CE\u01D2\x07A\x02\x02\u01CF\u01D0\f\x03\x02\x02\u01D0\u01D2" +
    "\x07B\x02\x02\u01D1\u01BE\x03\x02\x02\x02\u01D1\u01C7\x03\x02\x02\x02" +
    "\u01D1\u01CD\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01D5\x03" +
    "\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
    "G\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D7\b%\x01\x02\u01D7" +
    "\u01D8\x05$\x13\x02\u01D8\u01DE\x03\x02\x02\x02\u01D9\u01DA\f\x03\x02" +
    "\x02\u01DA\u01DB\x07R\x02\x02\u01DB\u01DD\x05$\x13\x02\u01DC\u01D9\x03" +
    "\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE" +
    "\u01DF\x03\x02\x02\x02\u01DFI\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02" +
    "\x02\u01E1\u01EA\x07X\x02\x02\u01E2\u01EA\x07Y\x02\x02\u01E3\u01E4\x07" +
    "T\x02\x02\u01E4\u01E5\x05*\x16\x02\u01E5\u01E6\x07U\x02\x02\u01E6\u01EA" +
    "\x03\x02\x02\x02\u01E7\u01EA\x07\x13\x02\x02\u01E8\u01EA\x07\x05\x02\x02" +
    "\u01E9\u01E1\x03\x02\x02\x02\u01E9\u01E2\x03\x02\x02\x02\u01E9\u01E3\x03" +
    "\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA" +
    "K\x03\x02\x02\x02\u01EB\u01EC\b\'\x01\x02\u01EC\u01ED\x05N(\x02\u01ED" +
    "\u01F3\x03\x02\x02\x02\u01EE\u01EF\f\x03\x02\x02\u01EF\u01F0\x07R\x02" +
    "\x02\u01F0\u01F2\x05N(\x02\u01F1\u01EE\x03\x02\x02\x02\u01F2\u01F5\x03" +
    "\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
    "M\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F7\x05\x10\t\x02" +
    "\u01F7\u01F8\x05\"\x12\x02\u01F8O\x03\x02\x02\x02\u01F9\u0202\x05$\x13" +
    "\x02\u01FA\u01FB\x07O\x02\x02\u01FB\u01FC\x05R*\x02\u01FC\u01FD\x07R\x02" +
    "\x02\u01FD\u01FE\x05R*\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x07" +
    "P\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01F9\x03\x02\x02\x02\u0201" +
    "\u01FA\x03\x02\x02\x02\u0202Q\x03\x02\x02\x02\u0203\u0205\b*\x01\x02\u0204" +
    "\u0206\x05T+\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02";
qcodeParser._serializedATNSegment1 = "\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x05P)\x02\u0208\u0211\x03" +
    "\x02\x02\x02\u0209\u020A\f\x03\x02\x02\u020A\u020C\x07R\x02\x02\u020B" +
    "\u020D\x05T+\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02" +
    "\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x05P)\x02\u020F\u0209\x03\x02" +
    "\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211" +
    "\u0212\x03\x02\x02\x02\u0212S\x03\x02\x02\x02\u0213\u0211\x03\x02\x02" +
    "\x02\u0214\u0215\x05V,\x02\u0215\u0216\x071\x02\x02\u0216U\x03\x02\x02" +
    "\x02\u0217\u0218\b,\x01\x02\u0218\u0219\x05X-\x02\u0219\u021E\x03\x02" +
    "\x02\x02\u021A\u021B\f\x03\x02\x02\u021B\u021D\x05X-\x02\u021C\u021A\x03" +
    "\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E" +
    "\u021F\x03\x02\x02\x02\u021FW\x03\x02\x02\x02\u0220\u021E\x03\x02\x02" +
    "\x02\u0221\u0222\x07V\x02\x02\u0222\u0223\x05Z.\x02\u0223\u0224\x07W\x02" +
    "\x02\u0224Y\x03\x02\x02\x02\u0225\u0226\x05(\x15\x02\u0226[\x03\x02\x02" +
    "\x02\u0227\u0228\x05^0\x02\u0228\u0229\x07Q\x02\x02\u0229]\x03\x02\x02" +
    "\x02\u022A\u022B\x07X\x02\x02\u022B\u022D\x07T\x02\x02\u022C\u022E\x05" +
    "L\'\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
    "\u022F\x03\x02\x02\x02\u022F\u0230\x07U\x02\x02\u0230_\x03\x02\x02\x02" +
    "\u0231\u0232\x05^0\x02\u0232\u0233\x05d3\x02\u0233a\x03\x02\x02\x02\u0234" +
    "\u0239\x05\f\x07\x02\u0235\u0236\x05\f\x07\x02\u0236\u0237\x05b2\x02\u0237" +
    "\u0239\x03\x02\x02\x02\u0238\u0234\x03\x02\x02\x02\u0238\u0235\x03\x02" +
    "\x02\x02\u0239c\x03\x02\x02\x02\u023A\u023C\x07O\x02\x02\u023B\u023D\x05" +
    "f4\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E" +
    "\x03\x02\x02\x02\u023E\u023F\x07P\x02\x02\u023Fe\x03\x02\x02\x02\u0240" +
    "\u0241\b4\x01\x02\u0241\u0242\x05h5\x02\u0242\u0247\x03\x02\x02\x02\u0243" +
    "\u0244\f\x03\x02\x02\u0244\u0246\x05h5\x02\u0245\u0243\x03\x02\x02\x02" +
    "\u0246\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03" +
    "\x02\x02\x02\u0248g\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A" +
    "\u024E\x05j6\x02\u024B\u024E\x05\f\x07\x02\u024C\u024E\x05\x0E\b\x02\u024D" +
    "\u024A\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024C\x03\x02" +
    "\x02\x02\u024Ei\x03\x02\x02\x02\u024F\u0258\x05l7\x02\u0250\u0258\x05" +
    "d3\x02\u0251\u0258\x05n8\x02\u0252\u0258\x05p9\x02\u0253\u0258\x05z>\x02" +
    "\u0254\u0258\x05\x90I\x02\u0255\u0258\x05\x94K\x02\u0256\u0258\x05\x9A" +
    "N\x02\u0257\u024F\x03\x02\x02\x02\u0257\u0250\x03\x02\x02\x02\u0257\u0251" +
    "\x03\x02\x02\x02\u0257\u0252\x03\x02\x02\x02\u0257\u0253\x03\x02\x02\x02" +
    "\u0257\u0254\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0256\x03" +
    "\x02\x02\x02\u0258k\x03\x02\x02\x02\u0259\u025B\x05*\x16\x02\u025A\u0259" +
    "\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02" +
    "\u025C\u025D\x07Q\x02\x02\u025Dm\x03\x02\x02\x02\u025E\u025F\x07\v\x02" +
    "\x02\u025F\u0260\x07T\x02\x02\u0260\u0261\x05*\x16\x02\u0261\u0262\x07" +
    "U\x02\x02\u0262\u0265\x05j6\x02\u0263\u0264\x07\f\x02\x02\u0264\u0266" +
    "\x05j6\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266" +
    "o\x03\x02\x02\x02\u0267\u0268\x07\r\x02\x02\u0268\u0269\x07T\x02\x02\u0269" +
    "\u026A\x05r:\x02\u026A\u026B\x07U\x02\x02\u026B\u026C\x05j6\x02\u026C" +
    "q\x03\x02\x02\x02\u026D\u026F\x05t;\x02\u026E\u026D\x03\x02\x02\x02\u026E" +
    "\u026F\x03\x02\x02\x02\u026F\u0271\x03\x02\x02\x02\u0270\u0272\x076\x02" +
    "\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274" +
    "\x03\x02\x02\x02\u0273\u0275\x05v<\x02\u0274\u0273\x03\x02\x02\x02\u0274" +
    "\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x076\x02" +
    "\x02\u0277\u0279\x05x=\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03" +
    "\x02\x02\x02\u0279s\x03\x02\x02\x02\u027A\u027F\x05J&\x02\u027B\u027C" +
    "\x07X\x02\x02\u027C\u027D\x071\x02\x02\u027D\u027F\x05*\x16\x02\u027E" +
    "\u027A\x03\x02\x02\x02\u027E\u027B\x03\x02\x02\x02\u027Fu\x03\x02\x02" +
    "\x02\u0280\u0281\x05$\x13\x02\u0281w\x03\x02\x02\x02\u0282\u0283\x05$" +
    "\x13\x02\u0283y\x03\x02\x02\x02\u0284\u0285\x05|?\x02\u0285\u0286\x07" +
    "Q\x02\x02\u0286{\x03\x02\x02\x02\u0287\u0288\x07\x19\x02\x02\u0288\u0289" +
    "\x07T\x02\x02\u0289\u028A\x05\x8AF\x02\u028A\u028B\x07U\x02\x02\u028B" +
    "\u02F5\x03\x02\x02\x02\u028C\u028D\x07\x1A\x02\x02\u028D\u028E\x07T\x02" +
    "\x02\u028E\u028F\x05\x8AF\x02\u028F\u0290\x07U\x02\x02\u0290\u02F5\x03" +
    "\x02\x02\x02\u0291\u0292\x07\x1B\x02\x02\u0292\u0293\x07T\x02\x02\u0293" +
    "\u0294\x05\x8AF\x02\u0294\u0295\x07U\x02\x02\u0295\u02F5\x03\x02\x02\x02" +
    "\u0296\u0297\x07\x1C\x02\x02\u0297\u0298\x07T\x02\x02\u0298\u0299\x05" +
    "\x8AF\x02\u0299\u029A\x07U\x02\x02\u029A\u02F5\x03\x02\x02\x02\u029B\u029C" +
    "\x07\x1D\x02\x02\u029C\u029D\x07T\x02\x02\u029D\u029E\x05\x8AF\x02\u029E" +
    "\u029F\x07U\x02\x02\u029F\u02F5\x03\x02\x02\x02\u02A0\u02A1\x07\x1E\x02" +
    "\x02\u02A1\u02A2\x07T\x02\x02\u02A2\u02A3\x05\x8AF\x02\u02A3\u02A4\x07" +
    "U\x02\x02\u02A4\u02F5\x03\x02\x02\x02\u02A5\u02A6\x07\x1F\x02\x02\u02A6" +
    "\u02A7\x07T\x02\x02\u02A7\u02A8\x05\x8AF\x02\u02A8\u02A9\x07U\x02\x02" +
    "\u02A9\u02F5\x03\x02\x02\x02\u02AA\u02AB\x07 \x02\x02\u02AB\u02AC\x07" +
    "T\x02\x02\u02AC\u02AD\x05\x8AF\x02\u02AD\u02AE\x07U\x02\x02\u02AE\u02F5" +
    "\x03\x02\x02\x02\u02AF\u02B0\x07!\x02\x02\u02B0\u02B1\x07T\x02\x02\u02B1" +
    "\u02B2\x05\x8AF\x02\u02B2\u02B3\x07U\x02\x02\u02B3\u02F5\x03\x02\x02\x02" +
    "\u02B4\u02B5\x07\"\x02\x02\u02B5\u02B6\x07T\x02\x02\u02B6\u02B7\x05\x8A" +
    "F\x02\u02B7\u02B8\x07U\x02\x02\u02B8\u02F5\x03\x02\x02\x02\u02B9\u02BA" +
    "\x07#\x02\x02\u02BA\u02BB\x07T\x02\x02\u02BB\u02BC\x05\x8AF\x02\u02BC" +
    "\u02BD\x07R\x02\x02\u02BD\u02BE\x05~@\x02\u02BE\u02BF\x07U\x02\x02\u02BF" +
    "\u02F5\x03\x02\x02\x02\u02C0\u02C1\x07$\x02\x02\u02C1\u02C2\x07T\x02\x02" +
    "\u02C2\u02C3\x05\x8AF\x02\u02C3\u02C4\x07R\x02\x02\u02C4\u02C5\x05*\x16" +
    "\x02\u02C5\u02C6\x07U\x02\x02\u02C6\u02F5\x03\x02\x02\x02\u02C7\u02C8" +
    "\x07%\x02\x02\u02C8\u02C9\x07T\x02\x02\u02C9\u02CA\x05\x8AF\x02\u02CA" +
    "\u02CB\x07R\x02\x02\u02CB\u02CC\x05*\x16\x02\u02CC\u02CD\x07U\x02\x02" +
    "\u02CD\u02F5\x03\x02\x02\x02\u02CE\u02CF\x07&\x02\x02\u02CF\u02D0\x07" +
    "T\x02\x02\u02D0\u02D1\x05\x8AF\x02\u02D1\u02D2\x07R\x02\x02\u02D2\u02D3" +
    "\x05*\x16\x02\u02D3\u02D4\x07U\x02\x02\u02D4\u02F5\x03\x02\x02\x02\u02D5" +
    "\u02D6\x07\'\x02\x02\u02D6\u02D7\x07T\x02\x02\u02D7\u02D8\x05\x8CG\x02" +
    "\u02D8\u02D9\x07U\x02\x02\u02D9\u02F5\x03\x02\x02\x02\u02DA\u02DB\x07" +
    "(\x02\x02\u02DB\u02DC\x07T\x02\x02\u02DC\u02DD\x05\x8CG\x02\u02DD\u02DE" +
    "\x07U\x02\x02\u02DE\u02F5\x03\x02\x02\x02\u02DF\u02E0\x07*\x02\x02\u02E0" +
    "\u02E1\x07T\x02\x02\u02E1\u02E2\x05\x8CG\x02\u02E2\u02E3\x07R\x02\x02" +
    "\u02E3\u02E4\x05~@\x02\u02E4\u02E5\x07U\x02\x02\u02E5\u02F5\x03\x02\x02" +
    "\x02\u02E6\u02E7\x07+\x02\x02\u02E7\u02E8\x07T\x02\x02\u02E8\u02E9\x05" +
    "\x8CG\x02\u02E9\u02EA\x07R\x02\x02\u02EA\u02EB\x05\x88E\x02\u02EB\u02EC" +
    "\x07U\x02\x02\u02EC\u02F5\x03\x02\x02\x02\u02ED\u02EE\x07)\x02\x02\u02EE" +
    "\u02EF\x07T\x02\x02\u02EF\u02F0\x05\x8CG\x02\u02F0\u02F1\x07R\x02\x02" +
    "\u02F1\u02F2\x05\x88E\x02\u02F2\u02F3\x07U\x02\x02\u02F3\u02F5\x03\x02" +
    "\x02\x02\u02F4\u0287\x03\x02\x02\x02\u02F4\u028C\x03\x02\x02\x02\u02F4" +
    "\u0291\x03\x02\x02\x02\u02F4\u0296\x03\x02\x02\x02\u02F4\u029B\x03\x02" +
    "\x02\x02\u02F4\u02A0\x03\x02\x02\x02\u02F4\u02A5\x03\x02\x02\x02\u02F4" +
    "\u02AA\x03\x02\x02\x02\u02F4\u02AF\x03\x02\x02\x02\u02F4\u02B4\x03\x02" +
    "\x02\x02\u02F4\u02B9\x03\x02\x02\x02\u02F4\u02C0\x03\x02\x02\x02\u02F4" +
    "\u02C7\x03\x02\x02\x02\u02F4\u02CE\x03\x02\x02\x02\u02F4\u02D5\x03\x02" +
    "\x02\x02\u02F4\u02DA\x03\x02\x02\x02\u02F4\u02DF\x03\x02\x02\x02\u02F4" +
    "\u02E6\x03\x02\x02\x02\u02F4\u02ED\x03\x02\x02\x02\u02F5}\x03\x02\x02" +
    "\x02\u02F6\u02F7\x05\x80A\x02\u02F7\u02F8\x07R\x02\x02\u02F8\u02F9\x05" +
    "\x82B\x02\u02F9\u02FA\x07R\x02\x02\u02FA\u02FB\x05\x84C\x02\u02FB\u02FC" +
    "\x07R\x02\x02\u02FC\u02FD\x05\x86D\x02\u02FD\x7F\x03\x02\x02\x02\u02FE" +
    "\u02FF\x05*\x16\x02\u02FF\x81\x03\x02\x02\x02\u0300\u0301\x05*\x16\x02" +
    "\u0301\x83\x03\x02\x02\x02\u0302\u0303\x05*\x16\x02\u0303\x85\x03\x02" +
    "\x02\x02\u0304\u0305\x05*\x16\x02\u0305\x87\x03\x02\x02\x02\u0306\u0307" +
    "\x05*\x16\x02\u0307\x89\x03\x02\x02\x02\u0308\u0309\x07X\x02\x02\u0309" +
    "\u030A\x07V\x02\x02\u030A\u030B\x05*\x16\x02\u030B\u030C\x07W\x02\x02" +
    "\u030C\u030F\x03\x02\x02\x02\u030D\u030F\x07X\x02\x02\u030E\u0308\x03" +
    "\x02\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F\x8B\x03\x02\x02\x02\u0310" +
    "\u0311\x05\x8AF\x02\u0311\u0312\x07R\x02\x02\u0312\u0313\x05\x8EH\x02" +
    "\u0313\x8D\x03\x02\x02\x02\u0314\u0315\x07X\x02\x02\u0315\u0316\x07V\x02" +
    "\x02\u0316\u0317\x05*\x16\x02\u0317\u0318\x07W\x02\x02\u0318\u031B\x03" +
    "\x02\x02\x02\u0319\u031B\x07X\x02\x02\u031A\u0314\x03\x02\x02\x02\u031A" +
    "\u0319\x03\x02\x02\x02\u031B\x8F\x03\x02\x02\x02\u031C\u031D\x07,\x02" +
    "\x02\u031D\u031E\x07T\x02\x02\u031E\u031F\x05\x8AF\x02\u031F\u0320\x07" +
    "R\x02\x02\u0320\u0321\x05\x92J\x02\u0321\u0322\x07U\x02\x02\u0322\u0323" +
    "\x07Q\x02\x02\u0323\x91\x03\x02\x02\x02\u0324\u0325\x07X\x02\x02\u0325" +
    "\u0326\x07V\x02\x02\u0326\u0327\x05*\x16\x02\u0327\u0328\x07W\x02\x02" +
    "\u0328\u032B\x03\x02\x02\x02\u0329\u032B\x07X\x02\x02\u032A\u0324\x03" +
    "\x02\x02\x02\u032A\u0329\x03\x02\x02\x02\u032B\x93\x03\x02\x02\x02\u032C" +
    "\u032D\x07-\x02\x02\u032D\u032E\x07T\x02\x02\u032E\u032F\x05\xA0Q\x02" +
    "\u032F\u0330\x07U\x02\x02\u0330\u0331\x07O\x02\x02\u0331\u0332\x05\x96" +
    "L\x02\u0332\u0338\x07P\x02\x02\u0333\u0334\x07/\x02\x02\u0334\u0335\x07" +
    "O\x02\x02\u0335\u0336\x05\x96L\x02\u0336\u0337\x07P\x02\x02\u0337\u0339" +
    "\x03\x02\x02\x02\u0338\u0333\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02" +
    "\u0339\x95\x03\x02\x02\x02\u033A\u033C\x05\x98M\x02\u033B\u033A\x03\x02" +
    "\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D" +
    "\u033E\x03\x02\x02\x02\u033E\x97\x03\x02\x02\x02\u033F\u033D\x03\x02\x02" +
    "\x02\u0340\u0344\x05j6\x02\u0341\u0344\x05\f\x07\x02\u0342\u0344\x05\x0E" +
    "\b\x02\u0343\u0340\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0342" +
    "\x03\x02\x02\x02\u0344\x99\x03\x02\x02\x02\u0345\u0346\x07.\x02\x02\u0346" +
    "\u0347\x07T\x02\x02\u0347\u0348\x05\xA0Q\x02\u0348\u0349\x07U\x02\x02" +
    "\u0349\u034A\x07O\x02\x02\u034A\u034B\x05\x9CO\x02\u034B\u034C\x07P\x02" +
    "\x02\u034C\x9B\x03\x02\x02\x02\u034D\u034F\x05\x9EP\x02\u034E\u034D\x03" +
    "\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350" +
    "\u0351\x03\x02\x02\x02\u0351\x9D\x03\x02\x02\x02\u0352\u0350\x03\x02\x02" +
    "\x02\u0353\u0357\x05j6\x02\u0354\u0357\x05\f\x07\x02\u0355\u0357\x05\x0E" +
    "\b\x02\u0356\u0353\x03\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0355" +
    "\x03\x02\x02\x02\u0357\x9F\x03\x02\x02\x02\u0358\u035E\x050\x19\x02\u0359" +
    "\u035A\x05\xA2R\x02\u035A\u035B\x050\x19\x02\u035B\u035D\x03\x02\x02\x02" +
    "\u035C\u0359\x03\x02\x02\x02\u035D\u0360\x03\x02\x02\x02\u035E\u035C\x03" +
    "\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\xA1\x03\x02\x02\x02\u0360" +
    "\u035E\x03\x02\x02\x02\u0361\u0362\t\t\x02\x02\u0362\xA3\x03\x02\x02\x02" +
    "B\xA7\xAF\xBC\xC2\xCA\xDC\xE7\xEF\xFF\u0109\u0113\u011D\u0128\u0133\u013E" +
    "\u0149\u0154\u0160\u0162\u0174\u0176\u0182\u0184\u0190\u0192\u01A4\u01A6" +
    "\u01AB\u01B7\u01C3\u01CA\u01D1\u01D3\u01DE\u01E9\u01F3\u0201\u0205\u020C" +
    "\u0211\u021E\u022D\u0238\u023C\u0247\u024D\u0257\u025A\u0265\u026E\u0271" +
    "\u0274\u0278\u027E\u02F4\u030E\u031A\u032A\u0338\u033D\u0343\u0350\u0356" +
    "\u035E";
qcodeParser._serializedATN = Utils.join([
    qcodeParser._serializedATNSegment0,
    qcodeParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], qcodeParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], qcodeParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], qcodeParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], qcodeParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "qrunes", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "lang_unit", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "include_declaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "include_sign", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "postfix", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "declaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "literal_declaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "declaration_Specifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "literal_type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "primary_type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "quantum_type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "assist_classical_type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "init_DeclaratorList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "init_Literal_DeclaratorList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "init_Declarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "init_Literal_Declarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "declarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "assignment_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "assignment_operator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "condition_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "logicOr_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "logicAnd_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "inclu_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "exclu_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "and_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "equal_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "relation_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "shift_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "additive_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "multi_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "cast_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "unary_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "unary_operator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "postfix_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "argument_exp_List", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "primary_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "args_type_List", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "args_declaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "initializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "initializerList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "designation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "designatorList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "designator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "constant_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "func_declaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "func_declarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "func_definition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "declarationList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "comp_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "block_List", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "block_Item", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "statement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "exp_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "select_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "iterate_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "for_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "for_start", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "for_step", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "for_end", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "quantum_gate_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "quantum_gate_operation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "four_angle_args", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "alpha", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "beta", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "gamma", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "delta", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "theta", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "control_gate_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "double_gate_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "target_gate_exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "measurement_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "accept_cbit_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_if_operation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_if_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_if_stmt_item", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_while_operation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_while_stmt", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_while_stmt_item", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], qcodeParser.prototype, "q_operator", null);
exports.qcodeParser = qcodeParser;
class QrunesContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    lang_unit(i) {
        if (i === undefined) {
            return this.getRuleContexts(Lang_unitContext);
        }
        else {
            return this.getRuleContext(i, Lang_unitContext);
        }
    }
    get ruleIndex() { return qcodeParser.RULE_qrunes; }
    enterRule(listener) {
        if (listener.enterQrunes)
            listener.enterQrunes(this);
    }
    exitRule(listener) {
        if (listener.exitQrunes)
            listener.exitQrunes(this);
    }
    accept(visitor) {
        if (visitor.visitQrunes)
            return visitor.visitQrunes(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QrunesContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QrunesContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QrunesContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QrunesContext.prototype, "accept", null);
exports.QrunesContext = QrunesContext;
class Lang_unitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    include_declaration() {
        return this.tryGetRuleContext(0, Include_declarationContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    literal_declaration() {
        return this.tryGetRuleContext(0, Literal_declarationContext);
    }
    func_declaration() {
        return this.tryGetRuleContext(0, Func_declarationContext);
    }
    func_definition() {
        return this.tryGetRuleContext(0, Func_definitionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_lang_unit; }
    enterRule(listener) {
        if (listener.enterLang_unit)
            listener.enterLang_unit(this);
    }
    exitRule(listener) {
        if (listener.exitLang_unit)
            listener.exitLang_unit(this);
    }
    accept(visitor) {
        if (visitor.visitLang_unit)
            return visitor.visitLang_unit(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Lang_unitContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Lang_unitContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Lang_unitContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Lang_unitContext.prototype, "accept", null);
exports.Lang_unitContext = Lang_unitContext;
class Include_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INCLUDE() { return this.getToken(qcodeParser.INCLUDE, 0); }
    include_sign(i) {
        if (i === undefined) {
            return this.getRuleContexts(Include_signContext);
        }
        else {
            return this.getRuleContext(i, Include_signContext);
        }
    }
    Identifier() { return this.getToken(qcodeParser.Identifier, 0); }
    postfix() {
        return this.getRuleContext(0, PostfixContext);
    }
    get ruleIndex() { return qcodeParser.RULE_include_declaration; }
    enterRule(listener) {
        if (listener.enterInclude_declaration)
            listener.enterInclude_declaration(this);
    }
    exitRule(listener) {
        if (listener.exitInclude_declaration)
            listener.exitInclude_declaration(this);
    }
    accept(visitor) {
        if (visitor.visitInclude_declaration)
            return visitor.visitInclude_declaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Include_declarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Include_declarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Include_declarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Include_declarationContext.prototype, "accept", null);
exports.Include_declarationContext = Include_declarationContext;
class Include_signContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return qcodeParser.RULE_include_sign; }
    enterRule(listener) {
        if (listener.enterInclude_sign)
            listener.enterInclude_sign(this);
    }
    exitRule(listener) {
        if (listener.exitInclude_sign)
            listener.exitInclude_sign(this);
    }
    accept(visitor) {
        if (visitor.visitInclude_sign)
            return visitor.visitInclude_sign(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Include_signContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Include_signContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Include_signContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Include_signContext.prototype, "accept", null);
exports.Include_signContext = Include_signContext;
class PostfixContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LIB_POSTFIX() { return this.tryGetToken(qcodeParser.LIB_POSTFIX, 0); }
    INC_POSTFIX() { return this.tryGetToken(qcodeParser.INC_POSTFIX, 0); }
    QRUNES_POSTFIX() { return this.tryGetToken(qcodeParser.QRUNES_POSTFIX, 0); }
    get ruleIndex() { return qcodeParser.RULE_postfix; }
    enterRule(listener) {
        if (listener.enterPostfix)
            listener.enterPostfix(this);
    }
    exitRule(listener) {
        if (listener.exitPostfix)
            listener.exitPostfix(this);
    }
    accept(visitor) {
        if (visitor.visitPostfix)
            return visitor.visitPostfix(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PostfixContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PostfixContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PostfixContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PostfixContext.prototype, "accept", null);
exports.PostfixContext = PostfixContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    init_DeclaratorList() {
        return this.getRuleContext(0, Init_DeclaratorListContext);
    }
    SEMI() { return this.getToken(qcodeParser.SEMI, 0); }
    declaration_Specifier() {
        return this.tryGetRuleContext(0, Declaration_SpecifierContext);
    }
    get ruleIndex() { return qcodeParser.RULE_declaration; }
    enterRule(listener) {
        if (listener.enterDeclaration)
            listener.enterDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitDeclaration)
            listener.exitDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitDeclaration)
            return visitor.visitDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclarationContext.prototype, "accept", null);
exports.DeclarationContext = DeclarationContext;
class Literal_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    init_Literal_DeclaratorList() {
        return this.getRuleContext(0, Init_Literal_DeclaratorListContext);
    }
    SEMI() { return this.getToken(qcodeParser.SEMI, 0); }
    literal_type() {
        return this.tryGetRuleContext(0, Literal_typeContext);
    }
    get ruleIndex() { return qcodeParser.RULE_literal_declaration; }
    enterRule(listener) {
        if (listener.enterLiteral_declaration)
            listener.enterLiteral_declaration(this);
    }
    exitRule(listener) {
        if (listener.exitLiteral_declaration)
            listener.exitLiteral_declaration(this);
    }
    accept(visitor) {
        if (visitor.visitLiteral_declaration)
            return visitor.visitLiteral_declaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Literal_declarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Literal_declarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Literal_declarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Literal_declarationContext.prototype, "accept", null);
exports.Literal_declarationContext = Literal_declarationContext;
class Declaration_SpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    quantum_type() {
        return this.tryGetRuleContext(0, Quantum_typeContext);
    }
    primary_type() {
        return this.tryGetRuleContext(0, Primary_typeContext);
    }
    assist_classical_type() {
        return this.tryGetRuleContext(0, Assist_classical_typeContext);
    }
    get ruleIndex() { return qcodeParser.RULE_declaration_Specifier; }
    enterRule(listener) {
        if (listener.enterDeclaration_Specifier)
            listener.enterDeclaration_Specifier(this);
    }
    exitRule(listener) {
        if (listener.exitDeclaration_Specifier)
            listener.exitDeclaration_Specifier(this);
    }
    accept(visitor) {
        if (visitor.visitDeclaration_Specifier)
            return visitor.visitDeclaration_Specifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Declaration_SpecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Declaration_SpecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Declaration_SpecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Declaration_SpecifierContext.prototype, "accept", null);
exports.Declaration_SpecifierContext = Declaration_SpecifierContext;
class Literal_typeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LET() { return this.getToken(qcodeParser.LET, 0); }
    get ruleIndex() { return qcodeParser.RULE_literal_type; }
    enterRule(listener) {
        if (listener.enterLiteral_type)
            listener.enterLiteral_type(this);
    }
    exitRule(listener) {
        if (listener.exitLiteral_type)
            listener.exitLiteral_type(this);
    }
    accept(visitor) {
        if (visitor.visitLiteral_type)
            return visitor.visitLiteral_type(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Literal_typeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Literal_typeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Literal_typeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Literal_typeContext.prototype, "accept", null);
exports.Literal_typeContext = Literal_typeContext;
class Primary_typeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INT() { return this.tryGetToken(qcodeParser.INT, 0); }
    FLOAT() { return this.tryGetToken(qcodeParser.FLOAT, 0); }
    DOUBLE() { return this.tryGetToken(qcodeParser.DOUBLE, 0); }
    get ruleIndex() { return qcodeParser.RULE_primary_type; }
    enterRule(listener) {
        if (listener.enterPrimary_type)
            listener.enterPrimary_type(this);
    }
    exitRule(listener) {
        if (listener.exitPrimary_type)
            listener.exitPrimary_type(this);
    }
    accept(visitor) {
        if (visitor.visitPrimary_type)
            return visitor.visitPrimary_type(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Primary_typeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Primary_typeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Primary_typeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Primary_typeContext.prototype, "accept", null);
exports.Primary_typeContext = Primary_typeContext;
class Quantum_typeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QVEC() { return this.tryGetToken(qcodeParser.QVEC, 0); }
    QUBIT() { return this.tryGetToken(qcodeParser.QUBIT, 0); }
    get ruleIndex() { return qcodeParser.RULE_quantum_type; }
    enterRule(listener) {
        if (listener.enterQuantum_type)
            listener.enterQuantum_type(this);
    }
    exitRule(listener) {
        if (listener.exitQuantum_type)
            listener.exitQuantum_type(this);
    }
    accept(visitor) {
        if (visitor.visitQuantum_type)
            return visitor.visitQuantum_type(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Quantum_typeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Quantum_typeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Quantum_typeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Quantum_typeContext.prototype, "accept", null);
exports.Quantum_typeContext = Quantum_typeContext;
class Assist_classical_typeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CBIT() { return this.tryGetToken(qcodeParser.CBIT, 0); }
    CVEC() { return this.tryGetToken(qcodeParser.CVEC, 0); }
    get ruleIndex() { return qcodeParser.RULE_assist_classical_type; }
    enterRule(listener) {
        if (listener.enterAssist_classical_type)
            listener.enterAssist_classical_type(this);
    }
    exitRule(listener) {
        if (listener.exitAssist_classical_type)
            listener.exitAssist_classical_type(this);
    }
    accept(visitor) {
        if (visitor.visitAssist_classical_type)
            return visitor.visitAssist_classical_type(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Assist_classical_typeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Assist_classical_typeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Assist_classical_typeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Assist_classical_typeContext.prototype, "accept", null);
exports.Assist_classical_typeContext = Assist_classical_typeContext;
class Init_DeclaratorListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    init_Declarator() {
        return this.getRuleContext(0, Init_DeclaratorContext);
    }
    init_DeclaratorList() {
        return this.tryGetRuleContext(0, Init_DeclaratorListContext);
    }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_init_DeclaratorList; }
    enterRule(listener) {
        if (listener.enterInit_DeclaratorList)
            listener.enterInit_DeclaratorList(this);
    }
    exitRule(listener) {
        if (listener.exitInit_DeclaratorList)
            listener.exitInit_DeclaratorList(this);
    }
    accept(visitor) {
        if (visitor.visitInit_DeclaratorList)
            return visitor.visitInit_DeclaratorList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Init_DeclaratorListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Init_DeclaratorListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Init_DeclaratorListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Init_DeclaratorListContext.prototype, "accept", null);
exports.Init_DeclaratorListContext = Init_DeclaratorListContext;
class Init_Literal_DeclaratorListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    init_Literal_Declarator() {
        return this.getRuleContext(0, Init_Literal_DeclaratorContext);
    }
    init_Literal_DeclaratorList() {
        return this.tryGetRuleContext(0, Init_Literal_DeclaratorListContext);
    }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_init_Literal_DeclaratorList; }
    enterRule(listener) {
        if (listener.enterInit_Literal_DeclaratorList)
            listener.enterInit_Literal_DeclaratorList(this);
    }
    exitRule(listener) {
        if (listener.exitInit_Literal_DeclaratorList)
            listener.exitInit_Literal_DeclaratorList(this);
    }
    accept(visitor) {
        if (visitor.visitInit_Literal_DeclaratorList)
            return visitor.visitInit_Literal_DeclaratorList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorListContext.prototype, "accept", null);
exports.Init_Literal_DeclaratorListContext = Init_Literal_DeclaratorListContext;
class Init_DeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declarator() {
        return this.getRuleContext(0, DeclaratorContext);
    }
    ASSIGN() { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
    initializer() {
        return this.tryGetRuleContext(0, InitializerContext);
    }
    get ruleIndex() { return qcodeParser.RULE_init_Declarator; }
    enterRule(listener) {
        if (listener.enterInit_Declarator)
            listener.enterInit_Declarator(this);
    }
    exitRule(listener) {
        if (listener.exitInit_Declarator)
            listener.exitInit_Declarator(this);
    }
    accept(visitor) {
        if (visitor.visitInit_Declarator)
            return visitor.visitInit_Declarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Init_DeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Init_DeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Init_DeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Init_DeclaratorContext.prototype, "accept", null);
exports.Init_DeclaratorContext = Init_DeclaratorContext;
class Init_Literal_DeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declarator() {
        return this.getRuleContext(0, DeclaratorContext);
    }
    ASSIGN() { return this.getToken(qcodeParser.ASSIGN, 0); }
    initializer() {
        return this.getRuleContext(0, InitializerContext);
    }
    get ruleIndex() { return qcodeParser.RULE_init_Literal_Declarator; }
    enterRule(listener) {
        if (listener.enterInit_Literal_Declarator)
            listener.enterInit_Literal_Declarator(this);
    }
    exitRule(listener) {
        if (listener.exitInit_Literal_Declarator)
            listener.exitInit_Literal_Declarator(this);
    }
    accept(visitor) {
        if (visitor.visitInit_Literal_Declarator)
            return visitor.visitInit_Literal_Declarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Init_Literal_DeclaratorContext.prototype, "accept", null);
exports.Init_Literal_DeclaratorContext = Init_Literal_DeclaratorContext;
class DeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(qcodeParser.Identifier, 0); }
    declarator() {
        return this.tryGetRuleContext(0, DeclaratorContext);
    }
    LBRACK() { return this.tryGetToken(qcodeParser.LBRACK, 0); }
    assignment_exp() {
        return this.tryGetRuleContext(0, Assignment_expContext);
    }
    RBRACK() { return this.tryGetToken(qcodeParser.RBRACK, 0); }
    get ruleIndex() { return qcodeParser.RULE_declarator; }
    enterRule(listener) {
        if (listener.enterDeclarator)
            listener.enterDeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitDeclarator)
            listener.exitDeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitDeclarator)
            return visitor.visitDeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclaratorContext.prototype, "accept", null);
exports.DeclaratorContext = DeclaratorContext;
class Assignment_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    condition_exp() {
        return this.tryGetRuleContext(0, Condition_expContext);
    }
    unary_exp() {
        return this.tryGetRuleContext(0, Unary_expContext);
    }
    assignment_operator() {
        return this.tryGetRuleContext(0, Assignment_operatorContext);
    }
    assignment_exp() {
        return this.tryGetRuleContext(0, Assignment_expContext);
    }
    Digit_Sequence() { return this.tryGetToken(qcodeParser.Digit_Sequence, 0); }
    Constant() { return this.tryGetToken(qcodeParser.Constant, 0); }
    get ruleIndex() { return qcodeParser.RULE_assignment_exp; }
    enterRule(listener) {
        if (listener.enterAssignment_exp)
            listener.enterAssignment_exp(this);
    }
    exitRule(listener) {
        if (listener.exitAssignment_exp)
            listener.exitAssignment_exp(this);
    }
    accept(visitor) {
        if (visitor.visitAssignment_exp)
            return visitor.visitAssignment_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Assignment_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Assignment_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Assignment_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Assignment_expContext.prototype, "accept", null);
exports.Assignment_expContext = Assignment_expContext;
class Assignment_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASSIGN() { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
    ADD_ASSIGN() { return this.tryGetToken(qcodeParser.ADD_ASSIGN, 0); }
    SUB_ASSIGN() { return this.tryGetToken(qcodeParser.SUB_ASSIGN, 0); }
    MUL_ASSIGN() { return this.tryGetToken(qcodeParser.MUL_ASSIGN, 0); }
    DIV_ASSIGN() { return this.tryGetToken(qcodeParser.DIV_ASSIGN, 0); }
    get ruleIndex() { return qcodeParser.RULE_assignment_operator; }
    enterRule(listener) {
        if (listener.enterAssignment_operator)
            listener.enterAssignment_operator(this);
    }
    exitRule(listener) {
        if (listener.exitAssignment_operator)
            listener.exitAssignment_operator(this);
    }
    accept(visitor) {
        if (visitor.visitAssignment_operator)
            return visitor.visitAssignment_operator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Assignment_operatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Assignment_operatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Assignment_operatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Assignment_operatorContext.prototype, "accept", null);
exports.Assignment_operatorContext = Assignment_operatorContext;
class Condition_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    logicOr_exp() {
        return this.getRuleContext(0, LogicOr_expContext);
    }
    QUE_MARK() { return this.tryGetToken(qcodeParser.QUE_MARK, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    COLON() { return this.tryGetToken(qcodeParser.COLON, 0); }
    condition_exp() {
        return this.tryGetRuleContext(0, Condition_expContext);
    }
    get ruleIndex() { return qcodeParser.RULE_condition_exp; }
    enterRule(listener) {
        if (listener.enterCondition_exp)
            listener.enterCondition_exp(this);
    }
    exitRule(listener) {
        if (listener.exitCondition_exp)
            listener.exitCondition_exp(this);
    }
    accept(visitor) {
        if (visitor.visitCondition_exp)
            return visitor.visitCondition_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Condition_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Condition_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Condition_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Condition_expContext.prototype, "accept", null);
exports.Condition_expContext = Condition_expContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment_exp() {
        return this.getRuleContext(0, Assignment_expContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_expression; }
    enterRule(listener) {
        if (listener.enterExpression)
            listener.enterExpression(this);
    }
    exitRule(listener) {
        if (listener.exitExpression)
            listener.exitExpression(this);
    }
    accept(visitor) {
        if (visitor.visitExpression)
            return visitor.visitExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "accept", null);
exports.ExpressionContext = ExpressionContext;
class LogicOr_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    logicAnd_exp() {
        return this.getRuleContext(0, LogicAnd_expContext);
    }
    logicOr_exp() {
        return this.tryGetRuleContext(0, LogicOr_expContext);
    }
    LOGIC_OR() { return this.tryGetToken(qcodeParser.LOGIC_OR, 0); }
    get ruleIndex() { return qcodeParser.RULE_logicOr_exp; }
    enterRule(listener) {
        if (listener.enterLogicOr_exp)
            listener.enterLogicOr_exp(this);
    }
    exitRule(listener) {
        if (listener.exitLogicOr_exp)
            listener.exitLogicOr_exp(this);
    }
    accept(visitor) {
        if (visitor.visitLogicOr_exp)
            return visitor.visitLogicOr_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LogicOr_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LogicOr_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LogicOr_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LogicOr_expContext.prototype, "accept", null);
exports.LogicOr_expContext = LogicOr_expContext;
class LogicAnd_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inclu_exp() {
        return this.getRuleContext(0, Inclu_expContext);
    }
    logicAnd_exp() {
        return this.tryGetRuleContext(0, LogicAnd_expContext);
    }
    LOGIC_AND() { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
    get ruleIndex() { return qcodeParser.RULE_logicAnd_exp; }
    enterRule(listener) {
        if (listener.enterLogicAnd_exp)
            listener.enterLogicAnd_exp(this);
    }
    exitRule(listener) {
        if (listener.exitLogicAnd_exp)
            listener.exitLogicAnd_exp(this);
    }
    accept(visitor) {
        if (visitor.visitLogicAnd_exp)
            return visitor.visitLogicAnd_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LogicAnd_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LogicAnd_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LogicAnd_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LogicAnd_expContext.prototype, "accept", null);
exports.LogicAnd_expContext = LogicAnd_expContext;
class Inclu_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exclu_exp() {
        return this.getRuleContext(0, Exclu_expContext);
    }
    inclu_exp() {
        return this.tryGetRuleContext(0, Inclu_expContext);
    }
    INCLU() { return this.tryGetToken(qcodeParser.INCLU, 0); }
    get ruleIndex() { return qcodeParser.RULE_inclu_exp; }
    enterRule(listener) {
        if (listener.enterInclu_exp)
            listener.enterInclu_exp(this);
    }
    exitRule(listener) {
        if (listener.exitInclu_exp)
            listener.exitInclu_exp(this);
    }
    accept(visitor) {
        if (visitor.visitInclu_exp)
            return visitor.visitInclu_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Inclu_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Inclu_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Inclu_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Inclu_expContext.prototype, "accept", null);
exports.Inclu_expContext = Inclu_expContext;
class Exclu_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    and_exp() {
        return this.getRuleContext(0, And_expContext);
    }
    exclu_exp() {
        return this.tryGetRuleContext(0, Exclu_expContext);
    }
    EXCLU() { return this.tryGetToken(qcodeParser.EXCLU, 0); }
    get ruleIndex() { return qcodeParser.RULE_exclu_exp; }
    enterRule(listener) {
        if (listener.enterExclu_exp)
            listener.enterExclu_exp(this);
    }
    exitRule(listener) {
        if (listener.exitExclu_exp)
            listener.exitExclu_exp(this);
    }
    accept(visitor) {
        if (visitor.visitExclu_exp)
            return visitor.visitExclu_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Exclu_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Exclu_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Exclu_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Exclu_expContext.prototype, "accept", null);
exports.Exclu_expContext = Exclu_expContext;
class And_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    equal_exp() {
        return this.getRuleContext(0, Equal_expContext);
    }
    and_exp() {
        return this.tryGetRuleContext(0, And_expContext);
    }
    AND() { return this.tryGetToken(qcodeParser.AND, 0); }
    get ruleIndex() { return qcodeParser.RULE_and_exp; }
    enterRule(listener) {
        if (listener.enterAnd_exp)
            listener.enterAnd_exp(this);
    }
    exitRule(listener) {
        if (listener.exitAnd_exp)
            listener.exitAnd_exp(this);
    }
    accept(visitor) {
        if (visitor.visitAnd_exp)
            return visitor.visitAnd_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], And_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], And_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], And_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], And_expContext.prototype, "accept", null);
exports.And_expContext = And_expContext;
class Equal_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    relation_exp() {
        return this.getRuleContext(0, Relation_expContext);
    }
    equal_exp() {
        return this.tryGetRuleContext(0, Equal_expContext);
    }
    EQUAL() { return this.tryGetToken(qcodeParser.EQUAL, 0); }
    NOTEQUAL() { return this.tryGetToken(qcodeParser.NOTEQUAL, 0); }
    get ruleIndex() { return qcodeParser.RULE_equal_exp; }
    enterRule(listener) {
        if (listener.enterEqual_exp)
            listener.enterEqual_exp(this);
    }
    exitRule(listener) {
        if (listener.exitEqual_exp)
            listener.exitEqual_exp(this);
    }
    accept(visitor) {
        if (visitor.visitEqual_exp)
            return visitor.visitEqual_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Equal_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Equal_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Equal_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Equal_expContext.prototype, "accept", null);
exports.Equal_expContext = Equal_expContext;
class Relation_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    shift_exp() {
        return this.getRuleContext(0, Shift_expContext);
    }
    relation_exp() {
        return this.tryGetRuleContext(0, Relation_expContext);
    }
    GT() { return this.tryGetToken(qcodeParser.GT, 0); }
    LT() { return this.tryGetToken(qcodeParser.LT, 0); }
    GE() { return this.tryGetToken(qcodeParser.GE, 0); }
    LE() { return this.tryGetToken(qcodeParser.LE, 0); }
    get ruleIndex() { return qcodeParser.RULE_relation_exp; }
    enterRule(listener) {
        if (listener.enterRelation_exp)
            listener.enterRelation_exp(this);
    }
    exitRule(listener) {
        if (listener.exitRelation_exp)
            listener.exitRelation_exp(this);
    }
    accept(visitor) {
        if (visitor.visitRelation_exp)
            return visitor.visitRelation_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Relation_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Relation_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Relation_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Relation_expContext.prototype, "accept", null);
exports.Relation_expContext = Relation_expContext;
class Shift_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    additive_exp() {
        return this.getRuleContext(0, Additive_expContext);
    }
    shift_exp() {
        return this.tryGetRuleContext(0, Shift_expContext);
    }
    LSHIFT() { return this.tryGetToken(qcodeParser.LSHIFT, 0); }
    RSHIFT() { return this.tryGetToken(qcodeParser.RSHIFT, 0); }
    get ruleIndex() { return qcodeParser.RULE_shift_exp; }
    enterRule(listener) {
        if (listener.enterShift_exp)
            listener.enterShift_exp(this);
    }
    exitRule(listener) {
        if (listener.exitShift_exp)
            listener.exitShift_exp(this);
    }
    accept(visitor) {
        if (visitor.visitShift_exp)
            return visitor.visitShift_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Shift_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Shift_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Shift_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Shift_expContext.prototype, "accept", null);
exports.Shift_expContext = Shift_expContext;
class Additive_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    multi_exp() {
        return this.getRuleContext(0, Multi_expContext);
    }
    additive_exp() {
        return this.tryGetRuleContext(0, Additive_expContext);
    }
    ADD() { return this.tryGetToken(qcodeParser.ADD, 0); }
    SUB() { return this.tryGetToken(qcodeParser.SUB, 0); }
    get ruleIndex() { return qcodeParser.RULE_additive_exp; }
    enterRule(listener) {
        if (listener.enterAdditive_exp)
            listener.enterAdditive_exp(this);
    }
    exitRule(listener) {
        if (listener.exitAdditive_exp)
            listener.exitAdditive_exp(this);
    }
    accept(visitor) {
        if (visitor.visitAdditive_exp)
            return visitor.visitAdditive_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Additive_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Additive_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Additive_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Additive_expContext.prototype, "accept", null);
exports.Additive_expContext = Additive_expContext;
class Multi_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    cast_exp() {
        return this.getRuleContext(0, Cast_expContext);
    }
    multi_exp() {
        return this.tryGetRuleContext(0, Multi_expContext);
    }
    MUL() { return this.tryGetToken(qcodeParser.MUL, 0); }
    DIV() { return this.tryGetToken(qcodeParser.DIV, 0); }
    MOD() { return this.tryGetToken(qcodeParser.MOD, 0); }
    POW() { return this.tryGetToken(qcodeParser.POW, 0); }
    get ruleIndex() { return qcodeParser.RULE_multi_exp; }
    enterRule(listener) {
        if (listener.enterMulti_exp)
            listener.enterMulti_exp(this);
    }
    exitRule(listener) {
        if (listener.exitMulti_exp)
            listener.exitMulti_exp(this);
    }
    accept(visitor) {
        if (visitor.visitMulti_exp)
            return visitor.visitMulti_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Multi_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Multi_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Multi_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Multi_expContext.prototype, "accept", null);
exports.Multi_expContext = Multi_expContext;
class Cast_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unary_exp() {
        return this.tryGetRuleContext(0, Unary_expContext);
    }
    Digit_Sequence() { return this.tryGetToken(qcodeParser.Digit_Sequence, 0); }
    get ruleIndex() { return qcodeParser.RULE_cast_exp; }
    enterRule(listener) {
        if (listener.enterCast_exp)
            listener.enterCast_exp(this);
    }
    exitRule(listener) {
        if (listener.exitCast_exp)
            listener.exitCast_exp(this);
    }
    accept(visitor) {
        if (visitor.visitCast_exp)
            return visitor.visitCast_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Cast_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Cast_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Cast_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Cast_expContext.prototype, "accept", null);
exports.Cast_expContext = Cast_expContext;
class Unary_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    postfix_exp() {
        return this.tryGetRuleContext(0, Postfix_expContext);
    }
    INC() { return this.tryGetToken(qcodeParser.INC, 0); }
    unary_exp() {
        return this.tryGetRuleContext(0, Unary_expContext);
    }
    DEC() { return this.tryGetToken(qcodeParser.DEC, 0); }
    unary_operator() {
        return this.tryGetRuleContext(0, Unary_operatorContext);
    }
    cast_exp() {
        return this.tryGetRuleContext(0, Cast_expContext);
    }
    LOGIC_AND() { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
    Identifier() { return this.tryGetToken(qcodeParser.Identifier, 0); }
    get ruleIndex() { return qcodeParser.RULE_unary_exp; }
    enterRule(listener) {
        if (listener.enterUnary_exp)
            listener.enterUnary_exp(this);
    }
    exitRule(listener) {
        if (listener.exitUnary_exp)
            listener.exitUnary_exp(this);
    }
    accept(visitor) {
        if (visitor.visitUnary_exp)
            return visitor.visitUnary_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Unary_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Unary_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Unary_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Unary_expContext.prototype, "accept", null);
exports.Unary_expContext = Unary_expContext;
class Unary_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ADD() { return this.tryGetToken(qcodeParser.ADD, 0); }
    SUB() { return this.tryGetToken(qcodeParser.SUB, 0); }
    MUL() { return this.tryGetToken(qcodeParser.MUL, 0); }
    POW() { return this.tryGetToken(qcodeParser.POW, 0); }
    BANG() { return this.tryGetToken(qcodeParser.BANG, 0); }
    TILDE() { return this.tryGetToken(qcodeParser.TILDE, 0); }
    AND() { return this.tryGetToken(qcodeParser.AND, 0); }
    get ruleIndex() { return qcodeParser.RULE_unary_operator; }
    enterRule(listener) {
        if (listener.enterUnary_operator)
            listener.enterUnary_operator(this);
    }
    exitRule(listener) {
        if (listener.exitUnary_operator)
            listener.exitUnary_operator(this);
    }
    accept(visitor) {
        if (visitor.visitUnary_operator)
            return visitor.visitUnary_operator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Unary_operatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Unary_operatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Unary_operatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Unary_operatorContext.prototype, "accept", null);
exports.Unary_operatorContext = Unary_operatorContext;
class Postfix_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primary_exp() {
        return this.tryGetRuleContext(0, Primary_expContext);
    }
    postfix_exp() {
        return this.tryGetRuleContext(0, Postfix_expContext);
    }
    LBRACK() { return this.tryGetToken(qcodeParser.LBRACK, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    RBRACK() { return this.tryGetToken(qcodeParser.RBRACK, 0); }
    COLON() { return this.tryGetToken(qcodeParser.COLON, 0); }
    LPAREN() { return this.tryGetToken(qcodeParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(qcodeParser.RPAREN, 0); }
    argument_exp_List() {
        return this.tryGetRuleContext(0, Argument_exp_ListContext);
    }
    INC() { return this.tryGetToken(qcodeParser.INC, 0); }
    DEC() { return this.tryGetToken(qcodeParser.DEC, 0); }
    get ruleIndex() { return qcodeParser.RULE_postfix_exp; }
    enterRule(listener) {
        if (listener.enterPostfix_exp)
            listener.enterPostfix_exp(this);
    }
    exitRule(listener) {
        if (listener.exitPostfix_exp)
            listener.exitPostfix_exp(this);
    }
    accept(visitor) {
        if (visitor.visitPostfix_exp)
            return visitor.visitPostfix_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Postfix_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Postfix_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Postfix_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Postfix_expContext.prototype, "accept", null);
exports.Postfix_expContext = Postfix_expContext;
class Argument_exp_ListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment_exp() {
        return this.getRuleContext(0, Assignment_expContext);
    }
    argument_exp_List() {
        return this.tryGetRuleContext(0, Argument_exp_ListContext);
    }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_argument_exp_List; }
    enterRule(listener) {
        if (listener.enterArgument_exp_List)
            listener.enterArgument_exp_List(this);
    }
    exitRule(listener) {
        if (listener.exitArgument_exp_List)
            listener.exitArgument_exp_List(this);
    }
    accept(visitor) {
        if (visitor.visitArgument_exp_List)
            return visitor.visitArgument_exp_List(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Argument_exp_ListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Argument_exp_ListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Argument_exp_ListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Argument_exp_ListContext.prototype, "accept", null);
exports.Argument_exp_ListContext = Argument_exp_ListContext;
class Primary_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(qcodeParser.Identifier, 0); }
    Constant() { return this.tryGetToken(qcodeParser.Constant, 0); }
    LPAREN() { return this.tryGetToken(qcodeParser.LPAREN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.tryGetToken(qcodeParser.RPAREN, 0); }
    LEN() { return this.tryGetToken(qcodeParser.LEN, 0); }
    PI() { return this.tryGetToken(qcodeParser.PI, 0); }
    get ruleIndex() { return qcodeParser.RULE_primary_exp; }
    enterRule(listener) {
        if (listener.enterPrimary_exp)
            listener.enterPrimary_exp(this);
    }
    exitRule(listener) {
        if (listener.exitPrimary_exp)
            listener.exitPrimary_exp(this);
    }
    accept(visitor) {
        if (visitor.visitPrimary_exp)
            return visitor.visitPrimary_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Primary_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Primary_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Primary_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Primary_expContext.prototype, "accept", null);
exports.Primary_expContext = Primary_expContext;
class Args_type_ListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    args_declaration() {
        return this.getRuleContext(0, Args_declarationContext);
    }
    args_type_List() {
        return this.tryGetRuleContext(0, Args_type_ListContext);
    }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_args_type_List; }
    enterRule(listener) {
        if (listener.enterArgs_type_List)
            listener.enterArgs_type_List(this);
    }
    exitRule(listener) {
        if (listener.exitArgs_type_List)
            listener.exitArgs_type_List(this);
    }
    accept(visitor) {
        if (visitor.visitArgs_type_List)
            return visitor.visitArgs_type_List(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Args_type_ListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Args_type_ListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Args_type_ListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Args_type_ListContext.prototype, "accept", null);
exports.Args_type_ListContext = Args_type_ListContext;
class Args_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declaration_Specifier() {
        return this.getRuleContext(0, Declaration_SpecifierContext);
    }
    declarator() {
        return this.getRuleContext(0, DeclaratorContext);
    }
    get ruleIndex() { return qcodeParser.RULE_args_declaration; }
    enterRule(listener) {
        if (listener.enterArgs_declaration)
            listener.enterArgs_declaration(this);
    }
    exitRule(listener) {
        if (listener.exitArgs_declaration)
            listener.exitArgs_declaration(this);
    }
    accept(visitor) {
        if (visitor.visitArgs_declaration)
            return visitor.visitArgs_declaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Args_declarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Args_declarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Args_declarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Args_declarationContext.prototype, "accept", null);
exports.Args_declarationContext = Args_declarationContext;
class InitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment_exp() {
        return this.tryGetRuleContext(0, Assignment_expContext);
    }
    LBRACE() { return this.tryGetToken(qcodeParser.LBRACE, 0); }
    initializerList(i) {
        if (i === undefined) {
            return this.getRuleContexts(InitializerListContext);
        }
        else {
            return this.getRuleContext(i, InitializerListContext);
        }
    }
    RBRACE() { return this.tryGetToken(qcodeParser.RBRACE, 0); }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_initializer; }
    enterRule(listener) {
        if (listener.enterInitializer)
            listener.enterInitializer(this);
    }
    exitRule(listener) {
        if (listener.exitInitializer)
            listener.exitInitializer(this);
    }
    accept(visitor) {
        if (visitor.visitInitializer)
            return visitor.visitInitializer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitializerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitializerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitializerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitializerContext.prototype, "accept", null);
exports.InitializerContext = InitializerContext;
class InitializerListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    initializer() {
        return this.getRuleContext(0, InitializerContext);
    }
    designation() {
        return this.tryGetRuleContext(0, DesignationContext);
    }
    initializerList() {
        return this.tryGetRuleContext(0, InitializerListContext);
    }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    get ruleIndex() { return qcodeParser.RULE_initializerList; }
    enterRule(listener) {
        if (listener.enterInitializerList)
            listener.enterInitializerList(this);
    }
    exitRule(listener) {
        if (listener.exitInitializerList)
            listener.exitInitializerList(this);
    }
    accept(visitor) {
        if (visitor.visitInitializerList)
            return visitor.visitInitializerList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitializerListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitializerListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitializerListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitializerListContext.prototype, "accept", null);
exports.InitializerListContext = InitializerListContext;
class DesignationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    designatorList() {
        return this.getRuleContext(0, DesignatorListContext);
    }
    ASSIGN() { return this.getToken(qcodeParser.ASSIGN, 0); }
    get ruleIndex() { return qcodeParser.RULE_designation; }
    enterRule(listener) {
        if (listener.enterDesignation)
            listener.enterDesignation(this);
    }
    exitRule(listener) {
        if (listener.exitDesignation)
            listener.exitDesignation(this);
    }
    accept(visitor) {
        if (visitor.visitDesignation)
            return visitor.visitDesignation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DesignationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DesignationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DesignationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DesignationContext.prototype, "accept", null);
exports.DesignationContext = DesignationContext;
class DesignatorListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    designator() {
        return this.getRuleContext(0, DesignatorContext);
    }
    designatorList() {
        return this.tryGetRuleContext(0, DesignatorListContext);
    }
    get ruleIndex() { return qcodeParser.RULE_designatorList; }
    enterRule(listener) {
        if (listener.enterDesignatorList)
            listener.enterDesignatorList(this);
    }
    exitRule(listener) {
        if (listener.exitDesignatorList)
            listener.exitDesignatorList(this);
    }
    accept(visitor) {
        if (visitor.visitDesignatorList)
            return visitor.visitDesignatorList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DesignatorListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DesignatorListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DesignatorListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DesignatorListContext.prototype, "accept", null);
exports.DesignatorListContext = DesignatorListContext;
class DesignatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACK() { return this.getToken(qcodeParser.LBRACK, 0); }
    constant_exp() {
        return this.getRuleContext(0, Constant_expContext);
    }
    RBRACK() { return this.getToken(qcodeParser.RBRACK, 0); }
    get ruleIndex() { return qcodeParser.RULE_designator; }
    enterRule(listener) {
        if (listener.enterDesignator)
            listener.enterDesignator(this);
    }
    exitRule(listener) {
        if (listener.exitDesignator)
            listener.exitDesignator(this);
    }
    accept(visitor) {
        if (visitor.visitDesignator)
            return visitor.visitDesignator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DesignatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DesignatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DesignatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DesignatorContext.prototype, "accept", null);
exports.DesignatorContext = DesignatorContext;
class Constant_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    condition_exp() {
        return this.getRuleContext(0, Condition_expContext);
    }
    get ruleIndex() { return qcodeParser.RULE_constant_exp; }
    enterRule(listener) {
        if (listener.enterConstant_exp)
            listener.enterConstant_exp(this);
    }
    exitRule(listener) {
        if (listener.exitConstant_exp)
            listener.exitConstant_exp(this);
    }
    accept(visitor) {
        if (visitor.visitConstant_exp)
            return visitor.visitConstant_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Constant_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Constant_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Constant_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Constant_expContext.prototype, "accept", null);
exports.Constant_expContext = Constant_expContext;
class Func_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    func_declarator() {
        return this.getRuleContext(0, Func_declaratorContext);
    }
    SEMI() { return this.getToken(qcodeParser.SEMI, 0); }
    get ruleIndex() { return qcodeParser.RULE_func_declaration; }
    enterRule(listener) {
        if (listener.enterFunc_declaration)
            listener.enterFunc_declaration(this);
    }
    exitRule(listener) {
        if (listener.exitFunc_declaration)
            listener.exitFunc_declaration(this);
    }
    accept(visitor) {
        if (visitor.visitFunc_declaration)
            return visitor.visitFunc_declaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Func_declarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Func_declarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Func_declarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Func_declarationContext.prototype, "accept", null);
exports.Func_declarationContext = Func_declarationContext;
class Func_declaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(qcodeParser.Identifier, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    args_type_List() {
        return this.tryGetRuleContext(0, Args_type_ListContext);
    }
    get ruleIndex() { return qcodeParser.RULE_func_declarator; }
    enterRule(listener) {
        if (listener.enterFunc_declarator)
            listener.enterFunc_declarator(this);
    }
    exitRule(listener) {
        if (listener.exitFunc_declarator)
            listener.exitFunc_declarator(this);
    }
    accept(visitor) {
        if (visitor.visitFunc_declarator)
            return visitor.visitFunc_declarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Func_declaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Func_declaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Func_declaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Func_declaratorContext.prototype, "accept", null);
exports.Func_declaratorContext = Func_declaratorContext;
class Func_definitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    func_declarator() {
        return this.getRuleContext(0, Func_declaratorContext);
    }
    comp_stmt() {
        return this.getRuleContext(0, Comp_stmtContext);
    }
    get ruleIndex() { return qcodeParser.RULE_func_definition; }
    enterRule(listener) {
        if (listener.enterFunc_definition)
            listener.enterFunc_definition(this);
    }
    exitRule(listener) {
        if (listener.exitFunc_definition)
            listener.exitFunc_definition(this);
    }
    accept(visitor) {
        if (visitor.visitFunc_definition)
            return visitor.visitFunc_definition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Func_definitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Func_definitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Func_definitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Func_definitionContext.prototype, "accept", null);
exports.Func_definitionContext = Func_definitionContext;
class DeclarationListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    declarationList() {
        return this.tryGetRuleContext(0, DeclarationListContext);
    }
    get ruleIndex() { return qcodeParser.RULE_declarationList; }
    enterRule(listener) {
        if (listener.enterDeclarationList)
            listener.enterDeclarationList(this);
    }
    exitRule(listener) {
        if (listener.exitDeclarationList)
            listener.exitDeclarationList(this);
    }
    accept(visitor) {
        if (visitor.visitDeclarationList)
            return visitor.visitDeclarationList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclarationListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclarationListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclarationListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclarationListContext.prototype, "accept", null);
exports.DeclarationListContext = DeclarationListContext;
class Comp_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() { return this.getToken(qcodeParser.LBRACE, 0); }
    RBRACE() { return this.getToken(qcodeParser.RBRACE, 0); }
    block_List() {
        return this.tryGetRuleContext(0, Block_ListContext);
    }
    get ruleIndex() { return qcodeParser.RULE_comp_stmt; }
    enterRule(listener) {
        if (listener.enterComp_stmt)
            listener.enterComp_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitComp_stmt)
            listener.exitComp_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitComp_stmt)
            return visitor.visitComp_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Comp_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Comp_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Comp_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Comp_stmtContext.prototype, "accept", null);
exports.Comp_stmtContext = Comp_stmtContext;
class Block_ListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block_Item() {
        return this.getRuleContext(0, Block_ItemContext);
    }
    block_List() {
        return this.tryGetRuleContext(0, Block_ListContext);
    }
    get ruleIndex() { return qcodeParser.RULE_block_List; }
    enterRule(listener) {
        if (listener.enterBlock_List)
            listener.enterBlock_List(this);
    }
    exitRule(listener) {
        if (listener.exitBlock_List)
            listener.exitBlock_List(this);
    }
    accept(visitor) {
        if (visitor.visitBlock_List)
            return visitor.visitBlock_List(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Block_ListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Block_ListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Block_ListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Block_ListContext.prototype, "accept", null);
exports.Block_ListContext = Block_ListContext;
class Block_ItemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    literal_declaration() {
        return this.tryGetRuleContext(0, Literal_declarationContext);
    }
    get ruleIndex() { return qcodeParser.RULE_block_Item; }
    enterRule(listener) {
        if (listener.enterBlock_Item)
            listener.enterBlock_Item(this);
    }
    exitRule(listener) {
        if (listener.exitBlock_Item)
            listener.exitBlock_Item(this);
    }
    accept(visitor) {
        if (visitor.visitBlock_Item)
            return visitor.visitBlock_Item(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Block_ItemContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Block_ItemContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Block_ItemContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Block_ItemContext.prototype, "accept", null);
exports.Block_ItemContext = Block_ItemContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp_stmt() {
        return this.tryGetRuleContext(0, Exp_stmtContext);
    }
    comp_stmt() {
        return this.tryGetRuleContext(0, Comp_stmtContext);
    }
    select_stmt() {
        return this.tryGetRuleContext(0, Select_stmtContext);
    }
    iterate_stmt() {
        return this.tryGetRuleContext(0, Iterate_stmtContext);
    }
    quantum_gate_stmt() {
        return this.tryGetRuleContext(0, Quantum_gate_stmtContext);
    }
    measurement_stmt() {
        return this.tryGetRuleContext(0, Measurement_stmtContext);
    }
    q_if_operation() {
        return this.tryGetRuleContext(0, Q_if_operationContext);
    }
    q_while_operation() {
        return this.tryGetRuleContext(0, Q_while_operationContext);
    }
    get ruleIndex() { return qcodeParser.RULE_statement; }
    enterRule(listener) {
        if (listener.enterStatement)
            listener.enterStatement(this);
    }
    exitRule(listener) {
        if (listener.exitStatement)
            listener.exitStatement(this);
    }
    accept(visitor) {
        if (visitor.visitStatement)
            return visitor.visitStatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StatementContext.prototype, "accept", null);
exports.StatementContext = StatementContext;
class Exp_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMI() { return this.getToken(qcodeParser.SEMI, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_exp_stmt; }
    enterRule(listener) {
        if (listener.enterExp_stmt)
            listener.enterExp_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitExp_stmt)
            listener.exitExp_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitExp_stmt)
            return visitor.visitExp_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Exp_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Exp_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Exp_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Exp_stmtContext.prototype, "accept", null);
exports.Exp_stmtContext = Exp_stmtContext;
class Select_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() { return this.getToken(qcodeParser.IF, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    ELSE() { return this.tryGetToken(qcodeParser.ELSE, 0); }
    get ruleIndex() { return qcodeParser.RULE_select_stmt; }
    enterRule(listener) {
        if (listener.enterSelect_stmt)
            listener.enterSelect_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitSelect_stmt)
            listener.exitSelect_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitSelect_stmt)
            return visitor.visitSelect_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Select_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Select_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Select_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Select_stmtContext.prototype, "accept", null);
exports.Select_stmtContext = Select_stmtContext;
class Iterate_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() { return this.getToken(qcodeParser.FOR, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    for_stmt() {
        return this.getRuleContext(0, For_stmtContext);
    }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    get ruleIndex() { return qcodeParser.RULE_iterate_stmt; }
    enterRule(listener) {
        if (listener.enterIterate_stmt)
            listener.enterIterate_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitIterate_stmt)
            listener.exitIterate_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitIterate_stmt)
            return visitor.visitIterate_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Iterate_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Iterate_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Iterate_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Iterate_stmtContext.prototype, "accept", null);
exports.Iterate_stmtContext = Iterate_stmtContext;
class For_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(qcodeParser.COLON);
        }
        else {
            return this.getToken(qcodeParser.COLON, i);
        }
    }
    for_start() {
        return this.tryGetRuleContext(0, For_startContext);
    }
    for_step() {
        return this.tryGetRuleContext(0, For_stepContext);
    }
    for_end() {
        return this.tryGetRuleContext(0, For_endContext);
    }
    get ruleIndex() { return qcodeParser.RULE_for_stmt; }
    enterRule(listener) {
        if (listener.enterFor_stmt)
            listener.enterFor_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitFor_stmt)
            listener.exitFor_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitFor_stmt)
            return visitor.visitFor_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], For_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], For_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], For_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], For_stmtContext.prototype, "accept", null);
exports.For_stmtContext = For_stmtContext;
class For_startContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primary_exp() {
        return this.tryGetRuleContext(0, Primary_expContext);
    }
    Identifier() { return this.tryGetToken(qcodeParser.Identifier, 0); }
    ASSIGN() { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_for_start; }
    enterRule(listener) {
        if (listener.enterFor_start)
            listener.enterFor_start(this);
    }
    exitRule(listener) {
        if (listener.exitFor_start)
            listener.exitFor_start(this);
    }
    accept(visitor) {
        if (visitor.visitFor_start)
            return visitor.visitFor_start(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], For_startContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], For_startContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], For_startContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], For_startContext.prototype, "accept", null);
exports.For_startContext = For_startContext;
class For_stepContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment_exp() {
        return this.getRuleContext(0, Assignment_expContext);
    }
    get ruleIndex() { return qcodeParser.RULE_for_step; }
    enterRule(listener) {
        if (listener.enterFor_step)
            listener.enterFor_step(this);
    }
    exitRule(listener) {
        if (listener.exitFor_step)
            listener.exitFor_step(this);
    }
    accept(visitor) {
        if (visitor.visitFor_step)
            return visitor.visitFor_step(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], For_stepContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], For_stepContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], For_stepContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], For_stepContext.prototype, "accept", null);
exports.For_stepContext = For_stepContext;
class For_endContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment_exp() {
        return this.getRuleContext(0, Assignment_expContext);
    }
    get ruleIndex() { return qcodeParser.RULE_for_end; }
    enterRule(listener) {
        if (listener.enterFor_end)
            listener.enterFor_end(this);
    }
    exitRule(listener) {
        if (listener.exitFor_end)
            listener.exitFor_end(this);
    }
    accept(visitor) {
        if (visitor.visitFor_end)
            return visitor.visitFor_end(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], For_endContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], For_endContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], For_endContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], For_endContext.prototype, "accept", null);
exports.For_endContext = For_endContext;
class Quantum_gate_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    quantum_gate_operation() {
        return this.getRuleContext(0, Quantum_gate_operationContext);
    }
    SEMI() { return this.getToken(qcodeParser.SEMI, 0); }
    get ruleIndex() { return qcodeParser.RULE_quantum_gate_stmt; }
    enterRule(listener) {
        if (listener.enterQuantum_gate_stmt)
            listener.enterQuantum_gate_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitQuantum_gate_stmt)
            listener.exitQuantum_gate_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitQuantum_gate_stmt)
            return visitor.visitQuantum_gate_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Quantum_gate_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Quantum_gate_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Quantum_gate_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Quantum_gate_stmtContext.prototype, "accept", null);
exports.Quantum_gate_stmtContext = Quantum_gate_stmtContext;
class Quantum_gate_operationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    H_GATE() { return this.tryGetToken(qcodeParser.H_GATE, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    control_gate_exp() {
        return this.tryGetRuleContext(0, Control_gate_expContext);
    }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    X_GATE() { return this.tryGetToken(qcodeParser.X_GATE, 0); }
    NOT_GATE() { return this.tryGetToken(qcodeParser.NOT_GATE, 0); }
    T_GATE() { return this.tryGetToken(qcodeParser.T_GATE, 0); }
    S_GATE() { return this.tryGetToken(qcodeParser.S_GATE, 0); }
    Y_GATE() { return this.tryGetToken(qcodeParser.Y_GATE, 0); }
    Z_GATE() { return this.tryGetToken(qcodeParser.Z_GATE, 0); }
    X1_GATE() { return this.tryGetToken(qcodeParser.X1_GATE, 0); }
    Y1_GATE() { return this.tryGetToken(qcodeParser.Y1_GATE, 0); }
    Z1_GATE() { return this.tryGetToken(qcodeParser.Z1_GATE, 0); }
    U4_GATE() { return this.tryGetToken(qcodeParser.U4_GATE, 0); }
    COMMA() { return this.tryGetToken(qcodeParser.COMMA, 0); }
    four_angle_args() {
        return this.tryGetRuleContext(0, Four_angle_argsContext);
    }
    RX_GATE() { return this.tryGetToken(qcodeParser.RX_GATE, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RY_GATE() { return this.tryGetToken(qcodeParser.RY_GATE, 0); }
    RZ_GATE() { return this.tryGetToken(qcodeParser.RZ_GATE, 0); }
    CNOT_GATE() { return this.tryGetToken(qcodeParser.CNOT_GATE, 0); }
    double_gate_exp() {
        return this.tryGetRuleContext(0, Double_gate_expContext);
    }
    CZ_GATE() { return this.tryGetToken(qcodeParser.CZ_GATE, 0); }
    CU_GATE() { return this.tryGetToken(qcodeParser.CU_GATE, 0); }
    ISWAP() { return this.tryGetToken(qcodeParser.ISWAP, 0); }
    theta() {
        return this.tryGetRuleContext(0, ThetaContext);
    }
    CR_GATE() { return this.tryGetToken(qcodeParser.CR_GATE, 0); }
    get ruleIndex() { return qcodeParser.RULE_quantum_gate_operation; }
    enterRule(listener) {
        if (listener.enterQuantum_gate_operation)
            listener.enterQuantum_gate_operation(this);
    }
    exitRule(listener) {
        if (listener.exitQuantum_gate_operation)
            listener.exitQuantum_gate_operation(this);
    }
    accept(visitor) {
        if (visitor.visitQuantum_gate_operation)
            return visitor.visitQuantum_gate_operation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Quantum_gate_operationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Quantum_gate_operationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Quantum_gate_operationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Quantum_gate_operationContext.prototype, "accept", null);
exports.Quantum_gate_operationContext = Quantum_gate_operationContext;
class Four_angle_argsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    alpha() {
        return this.getRuleContext(0, AlphaContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(qcodeParser.COMMA);
        }
        else {
            return this.getToken(qcodeParser.COMMA, i);
        }
    }
    beta() {
        return this.getRuleContext(0, BetaContext);
    }
    gamma() {
        return this.getRuleContext(0, GammaContext);
    }
    delta() {
        return this.getRuleContext(0, DeltaContext);
    }
    get ruleIndex() { return qcodeParser.RULE_four_angle_args; }
    enterRule(listener) {
        if (listener.enterFour_angle_args)
            listener.enterFour_angle_args(this);
    }
    exitRule(listener) {
        if (listener.exitFour_angle_args)
            listener.exitFour_angle_args(this);
    }
    accept(visitor) {
        if (visitor.visitFour_angle_args)
            return visitor.visitFour_angle_args(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Four_angle_argsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Four_angle_argsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Four_angle_argsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Four_angle_argsContext.prototype, "accept", null);
exports.Four_angle_argsContext = Four_angle_argsContext;
class AlphaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_alpha; }
    enterRule(listener) {
        if (listener.enterAlpha)
            listener.enterAlpha(this);
    }
    exitRule(listener) {
        if (listener.exitAlpha)
            listener.exitAlpha(this);
    }
    accept(visitor) {
        if (visitor.visitAlpha)
            return visitor.visitAlpha(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AlphaContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AlphaContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AlphaContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AlphaContext.prototype, "accept", null);
exports.AlphaContext = AlphaContext;
class BetaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_beta; }
    enterRule(listener) {
        if (listener.enterBeta)
            listener.enterBeta(this);
    }
    exitRule(listener) {
        if (listener.exitBeta)
            listener.exitBeta(this);
    }
    accept(visitor) {
        if (visitor.visitBeta)
            return visitor.visitBeta(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BetaContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BetaContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BetaContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BetaContext.prototype, "accept", null);
exports.BetaContext = BetaContext;
class GammaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_gamma; }
    enterRule(listener) {
        if (listener.enterGamma)
            listener.enterGamma(this);
    }
    exitRule(listener) {
        if (listener.exitGamma)
            listener.exitGamma(this);
    }
    accept(visitor) {
        if (visitor.visitGamma)
            return visitor.visitGamma(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], GammaContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], GammaContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], GammaContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], GammaContext.prototype, "accept", null);
exports.GammaContext = GammaContext;
class DeltaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_delta; }
    enterRule(listener) {
        if (listener.enterDelta)
            listener.enterDelta(this);
    }
    exitRule(listener) {
        if (listener.exitDelta)
            listener.exitDelta(this);
    }
    accept(visitor) {
        if (visitor.visitDelta)
            return visitor.visitDelta(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeltaContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeltaContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeltaContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeltaContext.prototype, "accept", null);
exports.DeltaContext = DeltaContext;
class ThetaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return qcodeParser.RULE_theta; }
    enterRule(listener) {
        if (listener.enterTheta)
            listener.enterTheta(this);
    }
    exitRule(listener) {
        if (listener.exitTheta)
            listener.exitTheta(this);
    }
    accept(visitor) {
        if (visitor.visitTheta)
            return visitor.visitTheta(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ThetaContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ThetaContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ThetaContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ThetaContext.prototype, "accept", null);
exports.ThetaContext = ThetaContext;
class Control_gate_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(qcodeParser.Identifier, 0); }
    LBRACK() { return this.tryGetToken(qcodeParser.LBRACK, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RBRACK() { return this.tryGetToken(qcodeParser.RBRACK, 0); }
    get ruleIndex() { return qcodeParser.RULE_control_gate_exp; }
    enterRule(listener) {
        if (listener.enterControl_gate_exp)
            listener.enterControl_gate_exp(this);
    }
    exitRule(listener) {
        if (listener.exitControl_gate_exp)
            listener.exitControl_gate_exp(this);
    }
    accept(visitor) {
        if (visitor.visitControl_gate_exp)
            return visitor.visitControl_gate_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Control_gate_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Control_gate_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Control_gate_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Control_gate_expContext.prototype, "accept", null);
exports.Control_gate_expContext = Control_gate_expContext;
class Double_gate_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    control_gate_exp() {
        return this.getRuleContext(0, Control_gate_expContext);
    }
    COMMA() { return this.getToken(qcodeParser.COMMA, 0); }
    target_gate_exp() {
        return this.getRuleContext(0, Target_gate_expContext);
    }
    get ruleIndex() { return qcodeParser.RULE_double_gate_exp; }
    enterRule(listener) {
        if (listener.enterDouble_gate_exp)
            listener.enterDouble_gate_exp(this);
    }
    exitRule(listener) {
        if (listener.exitDouble_gate_exp)
            listener.exitDouble_gate_exp(this);
    }
    accept(visitor) {
        if (visitor.visitDouble_gate_exp)
            return visitor.visitDouble_gate_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Double_gate_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Double_gate_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Double_gate_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Double_gate_expContext.prototype, "accept", null);
exports.Double_gate_expContext = Double_gate_expContext;
class Target_gate_expContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(qcodeParser.Identifier, 0); }
    LBRACK() { return this.tryGetToken(qcodeParser.LBRACK, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RBRACK() { return this.tryGetToken(qcodeParser.RBRACK, 0); }
    get ruleIndex() { return qcodeParser.RULE_target_gate_exp; }
    enterRule(listener) {
        if (listener.enterTarget_gate_exp)
            listener.enterTarget_gate_exp(this);
    }
    exitRule(listener) {
        if (listener.exitTarget_gate_exp)
            listener.exitTarget_gate_exp(this);
    }
    accept(visitor) {
        if (visitor.visitTarget_gate_exp)
            return visitor.visitTarget_gate_exp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Target_gate_expContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Target_gate_expContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Target_gate_expContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Target_gate_expContext.prototype, "accept", null);
exports.Target_gate_expContext = Target_gate_expContext;
class Measurement_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    MEASURE() { return this.getToken(qcodeParser.MEASURE, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    control_gate_exp() {
        return this.getRuleContext(0, Control_gate_expContext);
    }
    COMMA() { return this.getToken(qcodeParser.COMMA, 0); }
    accept_cbit_stmt() {
        return this.getRuleContext(0, Accept_cbit_stmtContext);
    }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    SEMI() { return this.getToken(qcodeParser.SEMI, 0); }
    get ruleIndex() { return qcodeParser.RULE_measurement_stmt; }
    enterRule(listener) {
        if (listener.enterMeasurement_stmt)
            listener.enterMeasurement_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitMeasurement_stmt)
            listener.exitMeasurement_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitMeasurement_stmt)
            return visitor.visitMeasurement_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Measurement_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Measurement_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Measurement_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Measurement_stmtContext.prototype, "accept", null);
exports.Measurement_stmtContext = Measurement_stmtContext;
class Accept_cbit_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(qcodeParser.Identifier, 0); }
    LBRACK() { return this.tryGetToken(qcodeParser.LBRACK, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RBRACK() { return this.tryGetToken(qcodeParser.RBRACK, 0); }
    get ruleIndex() { return qcodeParser.RULE_accept_cbit_stmt; }
    enterRule(listener) {
        if (listener.enterAccept_cbit_stmt)
            listener.enterAccept_cbit_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitAccept_cbit_stmt)
            listener.exitAccept_cbit_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitAccept_cbit_stmt)
            return visitor.visitAccept_cbit_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Accept_cbit_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Accept_cbit_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Accept_cbit_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Accept_cbit_stmtContext.prototype, "accept", null);
exports.Accept_cbit_stmtContext = Accept_cbit_stmtContext;
class Q_if_operationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QIF() { return this.getToken(qcodeParser.QIF, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    q_condition() {
        return this.getRuleContext(0, Q_conditionContext);
    }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    LBRACE(i) {
        if (i === undefined) {
            return this.getTokens(qcodeParser.LBRACE);
        }
        else {
            return this.getToken(qcodeParser.LBRACE, i);
        }
    }
    q_if_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Q_if_stmtContext);
        }
        else {
            return this.getRuleContext(i, Q_if_stmtContext);
        }
    }
    RBRACE(i) {
        if (i === undefined) {
            return this.getTokens(qcodeParser.RBRACE);
        }
        else {
            return this.getToken(qcodeParser.RBRACE, i);
        }
    }
    QELSE() { return this.tryGetToken(qcodeParser.QELSE, 0); }
    get ruleIndex() { return qcodeParser.RULE_q_if_operation; }
    enterRule(listener) {
        if (listener.enterQ_if_operation)
            listener.enterQ_if_operation(this);
    }
    exitRule(listener) {
        if (listener.exitQ_if_operation)
            listener.exitQ_if_operation(this);
    }
    accept(visitor) {
        if (visitor.visitQ_if_operation)
            return visitor.visitQ_if_operation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_if_operationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_if_operationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_if_operationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_if_operationContext.prototype, "accept", null);
exports.Q_if_operationContext = Q_if_operationContext;
class Q_if_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    q_if_stmt_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Q_if_stmt_itemContext);
        }
        else {
            return this.getRuleContext(i, Q_if_stmt_itemContext);
        }
    }
    get ruleIndex() { return qcodeParser.RULE_q_if_stmt; }
    enterRule(listener) {
        if (listener.enterQ_if_stmt)
            listener.enterQ_if_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitQ_if_stmt)
            listener.exitQ_if_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitQ_if_stmt)
            return visitor.visitQ_if_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_if_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_if_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_if_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_if_stmtContext.prototype, "accept", null);
exports.Q_if_stmtContext = Q_if_stmtContext;
class Q_if_stmt_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    literal_declaration() {
        return this.tryGetRuleContext(0, Literal_declarationContext);
    }
    get ruleIndex() { return qcodeParser.RULE_q_if_stmt_item; }
    enterRule(listener) {
        if (listener.enterQ_if_stmt_item)
            listener.enterQ_if_stmt_item(this);
    }
    exitRule(listener) {
        if (listener.exitQ_if_stmt_item)
            listener.exitQ_if_stmt_item(this);
    }
    accept(visitor) {
        if (visitor.visitQ_if_stmt_item)
            return visitor.visitQ_if_stmt_item(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_if_stmt_itemContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_if_stmt_itemContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_if_stmt_itemContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_if_stmt_itemContext.prototype, "accept", null);
exports.Q_if_stmt_itemContext = Q_if_stmt_itemContext;
class Q_while_operationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QWHILE() { return this.getToken(qcodeParser.QWHILE, 0); }
    LPAREN() { return this.getToken(qcodeParser.LPAREN, 0); }
    q_condition() {
        return this.getRuleContext(0, Q_conditionContext);
    }
    RPAREN() { return this.getToken(qcodeParser.RPAREN, 0); }
    LBRACE() { return this.getToken(qcodeParser.LBRACE, 0); }
    q_while_stmt() {
        return this.getRuleContext(0, Q_while_stmtContext);
    }
    RBRACE() { return this.getToken(qcodeParser.RBRACE, 0); }
    get ruleIndex() { return qcodeParser.RULE_q_while_operation; }
    enterRule(listener) {
        if (listener.enterQ_while_operation)
            listener.enterQ_while_operation(this);
    }
    exitRule(listener) {
        if (listener.exitQ_while_operation)
            listener.exitQ_while_operation(this);
    }
    accept(visitor) {
        if (visitor.visitQ_while_operation)
            return visitor.visitQ_while_operation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_while_operationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_while_operationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_while_operationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_while_operationContext.prototype, "accept", null);
exports.Q_while_operationContext = Q_while_operationContext;
class Q_while_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    q_while_stmt_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Q_while_stmt_itemContext);
        }
        else {
            return this.getRuleContext(i, Q_while_stmt_itemContext);
        }
    }
    get ruleIndex() { return qcodeParser.RULE_q_while_stmt; }
    enterRule(listener) {
        if (listener.enterQ_while_stmt)
            listener.enterQ_while_stmt(this);
    }
    exitRule(listener) {
        if (listener.exitQ_while_stmt)
            listener.exitQ_while_stmt(this);
    }
    accept(visitor) {
        if (visitor.visitQ_while_stmt)
            return visitor.visitQ_while_stmt(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_while_stmtContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_while_stmtContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_while_stmtContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_while_stmtContext.prototype, "accept", null);
exports.Q_while_stmtContext = Q_while_stmtContext;
class Q_while_stmt_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    literal_declaration() {
        return this.tryGetRuleContext(0, Literal_declarationContext);
    }
    get ruleIndex() { return qcodeParser.RULE_q_while_stmt_item; }
    enterRule(listener) {
        if (listener.enterQ_while_stmt_item)
            listener.enterQ_while_stmt_item(this);
    }
    exitRule(listener) {
        if (listener.exitQ_while_stmt_item)
            listener.exitQ_while_stmt_item(this);
    }
    accept(visitor) {
        if (visitor.visitQ_while_stmt_item)
            return visitor.visitQ_while_stmt_item(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_while_stmt_itemContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_while_stmt_itemContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_while_stmt_itemContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_while_stmt_itemContext.prototype, "accept", null);
exports.Q_while_stmt_itemContext = Q_while_stmt_itemContext;
class Q_conditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inclu_exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(Inclu_expContext);
        }
        else {
            return this.getRuleContext(i, Inclu_expContext);
        }
    }
    q_operator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Q_operatorContext);
        }
        else {
            return this.getRuleContext(i, Q_operatorContext);
        }
    }
    get ruleIndex() { return qcodeParser.RULE_q_condition; }
    enterRule(listener) {
        if (listener.enterQ_condition)
            listener.enterQ_condition(this);
    }
    exitRule(listener) {
        if (listener.exitQ_condition)
            listener.exitQ_condition(this);
    }
    accept(visitor) {
        if (visitor.visitQ_condition)
            return visitor.visitQ_condition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_conditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_conditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_conditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_conditionContext.prototype, "accept", null);
exports.Q_conditionContext = Q_conditionContext;
class Q_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LOGIC_AND() { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
    LOGIC_OR() { return this.tryGetToken(qcodeParser.LOGIC_OR, 0); }
    get ruleIndex() { return qcodeParser.RULE_q_operator; }
    enterRule(listener) {
        if (listener.enterQ_operator)
            listener.enterQ_operator(this);
    }
    exitRule(listener) {
        if (listener.exitQ_operator)
            listener.exitQ_operator(this);
    }
    accept(visitor) {
        if (visitor.visitQ_operator)
            return visitor.visitQ_operator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Q_operatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Q_operatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Q_operatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Q_operatorContext.prototype, "accept", null);
exports.Q_operatorContext = Q_operatorContext;
//# sourceMappingURL=qcodeParser.js.map