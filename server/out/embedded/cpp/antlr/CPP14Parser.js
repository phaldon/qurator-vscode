"use strict";
// Generated from CPP14.g4 by ANTLR 4.6-SNAPSHOT
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
class CPP14Parser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CPP14Parser._ATN, this);
    }
    get vocabulary() {
        return CPP14Parser.VOCABULARY;
    }
    get grammarFileName() { return "CPP14.g4"; }
    get ruleNames() { return CPP14Parser.ruleNames; }
    get serializedATN() { return CPP14Parser._serializedATN; }
    translationunit() {
        let _localctx = new TranslationunitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CPP14Parser.RULE_translationunit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                    {
                        this.state = 402;
                        this.declarationseq(0);
                    }
                }
                this.state = 405;
                this.match(CPP14Parser.EOF);
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
    primaryexpression() {
        let _localctx = new PrimaryexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CPP14Parser.RULE_primaryexpression);
        try {
            this.state = 415;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.False:
                case CPP14Parser.Nullptr:
                case CPP14Parser.True:
                case CPP14Parser.Integerliteral:
                case CPP14Parser.Characterliteral:
                case CPP14Parser.Floatingliteral:
                case CPP14Parser.Stringliteral:
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 407;
                        this.literal();
                    }
                    break;
                case CPP14Parser.This:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 408;
                        this.match(CPP14Parser.This);
                    }
                    break;
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 409;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 410;
                        this.expression(0);
                        this.state = 411;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Operator:
                case CPP14Parser.Tilde:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 413;
                        this.idexpression();
                    }
                    break;
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 414;
                        this.lambdaexpression();
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
    idexpression() {
        let _localctx = new IdexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CPP14Parser.RULE_idexpression);
        try {
            this.state = 419;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 417;
                        this.unqualifiedid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 418;
                        this.qualifiedid();
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
    unqualifiedid() {
        let _localctx = new UnqualifiedidContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CPP14Parser.RULE_unqualifiedid);
        try {
            this.state = 430;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 421;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 422;
                        this.operatorfunctionid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 423;
                        this.conversionfunctionid();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 424;
                        this.literaloperatorid();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 425;
                        this.match(CPP14Parser.Tilde);
                        this.state = 426;
                        this.classname();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 427;
                        this.match(CPP14Parser.Tilde);
                        this.state = 428;
                        this.decltypespecifier();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 429;
                        this.templateid();
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
    qualifiedid() {
        let _localctx = new QualifiedidContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CPP14Parser.RULE_qualifiedid);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 432;
                this.nestednamespecifier(0);
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Template) {
                    {
                        this.state = 433;
                        this.match(CPP14Parser.Template);
                    }
                }
                this.state = 436;
                this.unqualifiedid();
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
    nestednamespecifier(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new NestednamespecifierContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 10;
        this.enterRecursionRule(_localctx, 10, CPP14Parser.RULE_nestednamespecifier, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 439;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 2:
                        {
                            this.state = 440;
                            this.thetypename();
                            this.state = 441;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 3:
                        {
                            this.state = 443;
                            this.namespacename();
                            this.state = 444;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 4:
                        {
                            this.state = 446;
                            this.decltypespecifier();
                            this.state = 447;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 463;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 461;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new NestednamespecifierContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
                                        this.state = 451;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 452;
                                        this.match(CPP14Parser.Identifier);
                                        this.state = 453;
                                        this.match(CPP14Parser.Doublecolon);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new NestednamespecifierContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
                                        this.state = 454;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 456;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CPP14Parser.Template) {
                                            {
                                                this.state = 455;
                                                this.match(CPP14Parser.Template);
                                            }
                                        }
                                        this.state = 458;
                                        this.simpletemplateid();
                                        this.state = 459;
                                        this.match(CPP14Parser.Doublecolon);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 465;
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
    lambdaexpression() {
        let _localctx = new LambdaexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CPP14Parser.RULE_lambdaexpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 466;
                this.lambdaintroducer();
                this.state = 468;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.LeftParen) {
                    {
                        this.state = 467;
                        this.lambdadeclarator();
                    }
                }
                this.state = 470;
                this.compoundstatement();
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
    lambdaintroducer() {
        let _localctx = new LambdaintroducerContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CPP14Parser.RULE_lambdaintroducer);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 472;
                this.match(CPP14Parser.LeftBracket);
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.This || _la === CPP14Parser.And || _la === CPP14Parser.Assign || _la === CPP14Parser.Identifier) {
                    {
                        this.state = 473;
                        this.lambdacapture();
                    }
                }
                this.state = 476;
                this.match(CPP14Parser.RightBracket);
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
    lambdacapture() {
        let _localctx = new LambdacaptureContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CPP14Parser.RULE_lambdacapture);
        try {
            this.state = 484;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 478;
                        this.capturedefault();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 479;
                        this.capturelist(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 480;
                        this.capturedefault();
                        this.state = 481;
                        this.match(CPP14Parser.Comma);
                        this.state = 482;
                        this.capturelist(0);
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
    capturedefault() {
        let _localctx = new CapturedefaultContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CPP14Parser.RULE_capturedefault);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 486;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.And || _la === CPP14Parser.Assign)) {
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
    capturelist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new CapturelistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 20;
        this.enterRecursionRule(_localctx, 20, CPP14Parser.RULE_capturelist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 489;
                    this.capture();
                    this.state = 491;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                        case 1:
                            {
                                this.state = 490;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 501;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new CapturelistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_capturelist);
                                this.state = 493;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 494;
                                this.match(CPP14Parser.Comma);
                                this.state = 495;
                                this.capture();
                                this.state = 497;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 496;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 503;
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
    capture() {
        let _localctx = new CaptureContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CPP14Parser.RULE_capture);
        try {
            this.state = 506;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 504;
                        this.simplecapture();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 505;
                        this.initcapture();
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
    simplecapture() {
        let _localctx = new SimplecaptureContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CPP14Parser.RULE_simplecapture);
        try {
            this.state = 512;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 508;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case CPP14Parser.And:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 509;
                        this.match(CPP14Parser.And);
                        this.state = 510;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case CPP14Parser.This:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 511;
                        this.match(CPP14Parser.This);
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
    initcapture() {
        let _localctx = new InitcaptureContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CPP14Parser.RULE_initcapture);
        try {
            this.state = 519;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 514;
                        this.match(CPP14Parser.Identifier);
                        this.state = 515;
                        this.initializer();
                    }
                    break;
                case CPP14Parser.And:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 516;
                        this.match(CPP14Parser.And);
                        this.state = 517;
                        this.match(CPP14Parser.Identifier);
                        this.state = 518;
                        this.initializer();
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
    lambdadeclarator() {
        let _localctx = new LambdadeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CPP14Parser.RULE_lambdadeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this.match(CPP14Parser.LeftParen);
                this.state = 522;
                this.parameterdeclarationclause();
                this.state = 523;
                this.match(CPP14Parser.RightParen);
                this.state = 525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Mutable) {
                    {
                        this.state = 524;
                        this.match(CPP14Parser.Mutable);
                    }
                }
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Noexcept || _la === CPP14Parser.Throw) {
                    {
                        this.state = 527;
                        this.exceptionspecification();
                    }
                }
                this.state = 531;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                    {
                        this.state = 530;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Arrow) {
                    {
                        this.state = 533;
                        this.trailingreturntype();
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
    postfixexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new PostfixexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 30;
        this.enterRecursionRule(_localctx, 30, CPP14Parser.RULE_postfixexpression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 537;
                            this.primaryexpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 538;
                            this.simpletypespecifier();
                            this.state = 539;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 541;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                {
                                    this.state = 540;
                                    this.expressionlist();
                                }
                            }
                            this.state = 543;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 3:
                        {
                            this.state = 545;
                            this.typenamespecifier();
                            this.state = 546;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 548;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                {
                                    this.state = 547;
                                    this.expressionlist();
                                }
                            }
                            this.state = 550;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 4:
                        {
                            this.state = 552;
                            this.simpletypespecifier();
                            this.state = 553;
                            this.bracedinitlist();
                        }
                        break;
                    case 5:
                        {
                            this.state = 555;
                            this.typenamespecifier();
                            this.state = 556;
                            this.bracedinitlist();
                        }
                        break;
                    case 6:
                        {
                            this.state = 558;
                            this.match(CPP14Parser.Dynamic_cast);
                            this.state = 559;
                            this.match(CPP14Parser.Less);
                            this.state = 560;
                            this.thetypeid();
                            this.state = 561;
                            this.match(CPP14Parser.Greater);
                            this.state = 562;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 563;
                            this.expression(0);
                            this.state = 564;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 7:
                        {
                            this.state = 566;
                            this.match(CPP14Parser.Static_cast);
                            this.state = 567;
                            this.match(CPP14Parser.Less);
                            this.state = 568;
                            this.thetypeid();
                            this.state = 569;
                            this.match(CPP14Parser.Greater);
                            this.state = 570;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 571;
                            this.expression(0);
                            this.state = 572;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 8:
                        {
                            this.state = 574;
                            this.match(CPP14Parser.Reinterpret_cast);
                            this.state = 575;
                            this.match(CPP14Parser.Less);
                            this.state = 576;
                            this.thetypeid();
                            this.state = 577;
                            this.match(CPP14Parser.Greater);
                            this.state = 578;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 579;
                            this.expression(0);
                            this.state = 580;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 9:
                        {
                            this.state = 582;
                            this.match(CPP14Parser.Const_cast);
                            this.state = 583;
                            this.match(CPP14Parser.Less);
                            this.state = 584;
                            this.thetypeid();
                            this.state = 585;
                            this.match(CPP14Parser.Greater);
                            this.state = 586;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 587;
                            this.expression(0);
                            this.state = 588;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 10:
                        {
                            this.state = 590;
                            this.typeidofthetypeid();
                            this.state = 591;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 592;
                            this.expression(0);
                            this.state = 593;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 11:
                        {
                            this.state = 595;
                            this.typeidofthetypeid();
                            this.state = 596;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 597;
                            this.thetypeid();
                            this.state = 598;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 642;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 640;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 602;
                                        if (!(this.precpred(this._ctx, 19)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        this.state = 603;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 604;
                                        this.expression(0);
                                        this.state = 605;
                                        this.match(CPP14Parser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 607;
                                        if (!(this.precpred(this._ctx, 18)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        this.state = 608;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 609;
                                        this.bracedinitlist();
                                        this.state = 610;
                                        this.match(CPP14Parser.RightBracket);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 612;
                                        if (!(this.precpred(this._ctx, 17)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        this.state = 613;
                                        this.match(CPP14Parser.LeftParen);
                                        this.state = 615;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                            {
                                                this.state = 614;
                                                this.expressionlist();
                                            }
                                        }
                                        this.state = 617;
                                        this.match(CPP14Parser.RightParen);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 618;
                                        if (!(this.precpred(this._ctx, 12)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        this.state = 619;
                                        this.match(CPP14Parser.Dot);
                                        this.state = 621;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CPP14Parser.Template) {
                                            {
                                                this.state = 620;
                                                this.match(CPP14Parser.Template);
                                            }
                                        }
                                        this.state = 623;
                                        this.idexpression();
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 624;
                                        if (!(this.precpred(this._ctx, 11)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        this.state = 625;
                                        this.match(CPP14Parser.Arrow);
                                        this.state = 627;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CPP14Parser.Template) {
                                            {
                                                this.state = 626;
                                                this.match(CPP14Parser.Template);
                                            }
                                        }
                                        this.state = 629;
                                        this.idexpression();
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 630;
                                        if (!(this.precpred(this._ctx, 10)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        this.state = 631;
                                        this.match(CPP14Parser.Dot);
                                        this.state = 632;
                                        this.pseudodestructorname();
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 633;
                                        if (!(this.precpred(this._ctx, 9)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        this.state = 634;
                                        this.match(CPP14Parser.Arrow);
                                        this.state = 635;
                                        this.pseudodestructorname();
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 636;
                                        if (!(this.precpred(this._ctx, 8)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        this.state = 637;
                                        this.match(CPP14Parser.PlusPlus);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 638;
                                        if (!(this.precpred(this._ctx, 7)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        this.state = 639;
                                        this.match(CPP14Parser.MinusMinus);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 644;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
    typeidofexpr() {
        let _localctx = new TypeidofexprContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CPP14Parser.RULE_typeidofexpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 645;
                this.match(CPP14Parser.Typeid);
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
    typeidofthetypeid() {
        let _localctx = new TypeidofthetypeidContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CPP14Parser.RULE_typeidofthetypeid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 647;
                this.match(CPP14Parser.Typeid);
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
    expressionlist() {
        let _localctx = new ExpressionlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CPP14Parser.RULE_expressionlist);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                this.initializerlist(0);
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
    pseudodestructorname() {
        let _localctx = new PseudodestructornameContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CPP14Parser.RULE_pseudodestructorname);
        let _la;
        try {
            this.state = 673;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 652;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                            case 1:
                                {
                                    this.state = 651;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 654;
                        this.thetypename();
                        this.state = 655;
                        this.match(CPP14Parser.Doublecolon);
                        this.state = 656;
                        this.match(CPP14Parser.Tilde);
                        this.state = 657;
                        this.thetypename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 659;
                        this.nestednamespecifier(0);
                        this.state = 660;
                        this.match(CPP14Parser.Template);
                        this.state = 661;
                        this.simpletemplateid();
                        this.state = 662;
                        this.match(CPP14Parser.Doublecolon);
                        this.state = 663;
                        this.match(CPP14Parser.Tilde);
                        this.state = 664;
                        this.thetypename();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 667;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
                            {
                                this.state = 666;
                                this.nestednamespecifier(0);
                            }
                        }
                        this.state = 669;
                        this.match(CPP14Parser.Tilde);
                        this.state = 670;
                        this.thetypename();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 671;
                        this.match(CPP14Parser.Tilde);
                        this.state = 672;
                        this.decltypespecifier();
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
    unaryexpression() {
        let _localctx = new UnaryexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CPP14Parser.RULE_unaryexpression);
        try {
            this.state = 703;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 675;
                        this.postfixexpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 676;
                        this.match(CPP14Parser.PlusPlus);
                        this.state = 677;
                        this.castexpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 678;
                        this.match(CPP14Parser.MinusMinus);
                        this.state = 679;
                        this.castexpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 680;
                        this.unaryoperator();
                        this.state = 681;
                        this.castexpression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 683;
                        this.match(CPP14Parser.Sizeof);
                        this.state = 684;
                        this.unaryexpression();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 685;
                        this.match(CPP14Parser.Sizeof);
                        this.state = 686;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 687;
                        this.thetypeid();
                        this.state = 688;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 690;
                        this.match(CPP14Parser.Sizeof);
                        this.state = 691;
                        this.match(CPP14Parser.Ellipsis);
                        this.state = 692;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 693;
                        this.match(CPP14Parser.Identifier);
                        this.state = 694;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 695;
                        this.match(CPP14Parser.Alignof);
                        this.state = 696;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 697;
                        this.thetypeid();
                        this.state = 698;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 700;
                        this.noexceptexpression();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 701;
                        this.newexpression();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 702;
                        this.deleteexpression();
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
    unaryoperator() {
        let _localctx = new UnaryoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CPP14Parser.RULE_unaryoperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 705;
                _la = this._input.LA(1);
                if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.Plus - 84)) | (1 << (CPP14Parser.Minus - 84)) | (1 << (CPP14Parser.Star - 84)) | (1 << (CPP14Parser.And - 84)) | (1 << (CPP14Parser.Or - 84)) | (1 << (CPP14Parser.Tilde - 84)) | (1 << (CPP14Parser.Not - 84)))) !== 0))) {
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
    newexpression() {
        let _localctx = new NewexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CPP14Parser.RULE_newexpression);
        let _la;
        try {
            this.state = 731;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 708;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Doublecolon) {
                            {
                                this.state = 707;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 710;
                        this.match(CPP14Parser.New);
                        this.state = 712;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.LeftParen) {
                            {
                                this.state = 711;
                                this.newplacement();
                            }
                        }
                        this.state = 714;
                        this.newtypeid();
                        this.state = 716;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                            case 1:
                                {
                                    this.state = 715;
                                    this.newinitializer();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 719;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Doublecolon) {
                            {
                                this.state = 718;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 721;
                        this.match(CPP14Parser.New);
                        this.state = 723;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                            case 1:
                                {
                                    this.state = 722;
                                    this.newplacement();
                                }
                                break;
                        }
                        this.state = 725;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 726;
                        this.thetypeid();
                        this.state = 727;
                        this.match(CPP14Parser.RightParen);
                        this.state = 729;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                            case 1:
                                {
                                    this.state = 728;
                                    this.newinitializer();
                                }
                                break;
                        }
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
    newplacement() {
        let _localctx = new NewplacementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CPP14Parser.RULE_newplacement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this.match(CPP14Parser.LeftParen);
                this.state = 734;
                this.expressionlist();
                this.state = 735;
                this.match(CPP14Parser.RightParen);
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
    newtypeid() {
        let _localctx = new NewtypeidContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CPP14Parser.RULE_newtypeid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 737;
                this.typespecifierseq();
                this.state = 739;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 738;
                            this.newdeclarator();
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
    newdeclarator() {
        let _localctx = new NewdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CPP14Parser.RULE_newdeclarator);
        try {
            this.state = 746;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Decltype:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 741;
                        this.ptroperator();
                        this.state = 743;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                            case 1:
                                {
                                    this.state = 742;
                                    this.newdeclarator();
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 745;
                        this.noptrnewdeclarator(0);
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
    noptrnewdeclarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new NoptrnewdeclaratorContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 52;
        this.enterRecursionRule(_localctx, 52, CPP14Parser.RULE_noptrnewdeclarator, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 749;
                    this.match(CPP14Parser.LeftBracket);
                    this.state = 750;
                    this.expression(0);
                    this.state = 751;
                    this.match(CPP14Parser.RightBracket);
                    this.state = 753;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                        case 1:
                            {
                                this.state = 752;
                                this.attributespecifierseq(0);
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 764;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new NoptrnewdeclaratorContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrnewdeclarator);
                                this.state = 755;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 756;
                                this.match(CPP14Parser.LeftBracket);
                                this.state = 757;
                                this.constantexpression();
                                this.state = 758;
                                this.match(CPP14Parser.RightBracket);
                                this.state = 760;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 759;
                                            this.attributespecifierseq(0);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 766;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
    newinitializer() {
        let _localctx = new NewinitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CPP14Parser.RULE_newinitializer);
        let _la;
        try {
            this.state = 773;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 767;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 769;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 768;
                                this.expressionlist();
                            }
                        }
                        this.state = 771;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 772;
                        this.bracedinitlist();
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
    deleteexpression() {
        let _localctx = new DeleteexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CPP14Parser.RULE_deleteexpression);
        let _la;
        try {
            this.state = 787;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 776;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Doublecolon) {
                            {
                                this.state = 775;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 778;
                        this.match(CPP14Parser.Delete);
                        this.state = 779;
                        this.castexpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 781;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Doublecolon) {
                            {
                                this.state = 780;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 783;
                        this.match(CPP14Parser.Delete);
                        this.state = 784;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 785;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 786;
                        this.castexpression();
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
    noexceptexpression() {
        let _localctx = new NoexceptexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CPP14Parser.RULE_noexceptexpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 789;
                this.match(CPP14Parser.Noexcept);
                this.state = 790;
                this.match(CPP14Parser.LeftParen);
                this.state = 791;
                this.expression(0);
                this.state = 792;
                this.match(CPP14Parser.RightParen);
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
    castexpression() {
        let _localctx = new CastexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CPP14Parser.RULE_castexpression);
        try {
            this.state = 800;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 794;
                        this.unaryexpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 795;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 796;
                        this.thetypeid();
                        this.state = 797;
                        this.match(CPP14Parser.RightParen);
                        this.state = 798;
                        this.castexpression();
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
    pmexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new PmexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 62;
        this.enterRecursionRule(_localctx, 62, CPP14Parser.RULE_pmexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 803;
                    this.castexpression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 813;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 811;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PmexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
                                        this.state = 805;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 806;
                                        this.match(CPP14Parser.DotStar);
                                        this.state = 807;
                                        this.castexpression();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PmexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
                                        this.state = 808;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 809;
                                        this.match(CPP14Parser.ArrowStar);
                                        this.state = 810;
                                        this.castexpression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 815;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
    multiplicativeexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new MultiplicativeexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 64;
        this.enterRecursionRule(_localctx, 64, CPP14Parser.RULE_multiplicativeexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 817;
                    this.pmexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 830;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 828;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
                                        this.state = 819;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 820;
                                        this.match(CPP14Parser.Star);
                                        this.state = 821;
                                        this.pmexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
                                        this.state = 822;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 823;
                                        this.match(CPP14Parser.Div);
                                        this.state = 824;
                                        this.pmexpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
                                        this.state = 825;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 826;
                                        this.match(CPP14Parser.Mod);
                                        this.state = 827;
                                        this.pmexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 832;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
    additiveexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new AdditiveexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 66;
        this.enterRecursionRule(_localctx, 66, CPP14Parser.RULE_additiveexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 834;
                    this.multiplicativeexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 844;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 842;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new AdditiveexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
                                        this.state = 836;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 837;
                                        this.match(CPP14Parser.Plus);
                                        this.state = 838;
                                        this.multiplicativeexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AdditiveexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
                                        this.state = 839;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 840;
                                        this.match(CPP14Parser.Minus);
                                        this.state = 841;
                                        this.multiplicativeexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 846;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
    shiftexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ShiftexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 68;
        this.enterRecursionRule(_localctx, 68, CPP14Parser.RULE_shiftexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 848;
                    this.additiveexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 859;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 857;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ShiftexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
                                        this.state = 850;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 851;
                                        this.match(CPP14Parser.LeftShift);
                                        this.state = 852;
                                        this.additiveexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ShiftexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
                                        this.state = 853;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 854;
                                        this.rightShift();
                                        this.state = 855;
                                        this.additiveexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 861;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
    relationalexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new RelationalexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 70;
        this.enterRecursionRule(_localctx, 70, CPP14Parser.RULE_relationalexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 863;
                    this.shiftexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 879;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 877;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 865;
                                        if (!(this.precpred(this._ctx, 4)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        this.state = 866;
                                        this.match(CPP14Parser.Less);
                                        this.state = 867;
                                        this.shiftexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 868;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 869;
                                        this.match(CPP14Parser.Greater);
                                        this.state = 870;
                                        this.shiftexpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 871;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 872;
                                        this.match(CPP14Parser.LessEqual);
                                        this.state = 873;
                                        this.shiftexpression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 874;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 875;
                                        this.match(CPP14Parser.GreaterEqual);
                                        this.state = 876;
                                        this.shiftexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 881;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
    equalityexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new EqualityexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 72;
        this.enterRecursionRule(_localctx, 72, CPP14Parser.RULE_equalityexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 883;
                    this.relationalexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 893;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 891;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new EqualityexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
                                        this.state = 885;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 886;
                                        this.match(CPP14Parser.Equal);
                                        this.state = 887;
                                        this.relationalexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new EqualityexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
                                        this.state = 888;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 889;
                                        this.match(CPP14Parser.NotEqual);
                                        this.state = 890;
                                        this.relationalexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 895;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
    andexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new AndexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 74;
        this.enterRecursionRule(_localctx, 74, CPP14Parser.RULE_andexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 897;
                    this.equalityexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 904;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new AndexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_andexpression);
                                this.state = 899;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 900;
                                this.match(CPP14Parser.And);
                                this.state = 901;
                                this.equalityexpression(0);
                            }
                        }
                    }
                    this.state = 906;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
    exclusiveorexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExclusiveorexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 76;
        this.enterRecursionRule(_localctx, 76, CPP14Parser.RULE_exclusiveorexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 908;
                    this.andexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 915;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExclusiveorexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_exclusiveorexpression);
                                this.state = 910;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 911;
                                this.match(CPP14Parser.Caret);
                                this.state = 912;
                                this.andexpression(0);
                            }
                        }
                    }
                    this.state = 917;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
    inclusiveorexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new InclusiveorexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 78;
        this.enterRecursionRule(_localctx, 78, CPP14Parser.RULE_inclusiveorexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 919;
                    this.exclusiveorexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 926;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InclusiveorexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_inclusiveorexpression);
                                this.state = 921;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 922;
                                this.match(CPP14Parser.Or);
                                this.state = 923;
                                this.exclusiveorexpression(0);
                            }
                        }
                    }
                    this.state = 928;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
    logicalandexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new LogicalandexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 80;
        this.enterRecursionRule(_localctx, 80, CPP14Parser.RULE_logicalandexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 930;
                    this.inclusiveorexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 937;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicalandexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalandexpression);
                                this.state = 932;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 933;
                                this.match(CPP14Parser.AndAnd);
                                this.state = 934;
                                this.inclusiveorexpression(0);
                            }
                        }
                    }
                    this.state = 939;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
    logicalorexpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new LogicalorexpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 82;
        this.enterRecursionRule(_localctx, 82, CPP14Parser.RULE_logicalorexpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 941;
                    this.logicalandexpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 948;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicalorexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalorexpression);
                                this.state = 943;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 944;
                                this.match(CPP14Parser.OrOr);
                                this.state = 945;
                                this.logicalandexpression(0);
                            }
                        }
                    }
                    this.state = 950;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
    conditionalexpression() {
        let _localctx = new ConditionalexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, CPP14Parser.RULE_conditionalexpression);
        try {
            this.state = 958;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 951;
                        this.logicalorexpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 952;
                        this.logicalorexpression(0);
                        this.state = 953;
                        this.match(CPP14Parser.Question);
                        this.state = 954;
                        this.expression(0);
                        this.state = 955;
                        this.match(CPP14Parser.Colon);
                        this.state = 956;
                        this.assignmentexpression();
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
    assignmentexpression() {
        let _localctx = new AssignmentexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, CPP14Parser.RULE_assignmentexpression);
        try {
            this.state = 966;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 960;
                        this.conditionalexpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 961;
                        this.logicalorexpression(0);
                        this.state = 962;
                        this.assignmentoperator();
                        this.state = 963;
                        this.initializerclause();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 965;
                        this.throwexpression();
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
    assignmentoperator() {
        let _localctx = new AssignmentoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, CPP14Parser.RULE_assignmentoperator);
        try {
            this.state = 979;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Assign:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 968;
                        this.match(CPP14Parser.Assign);
                    }
                    break;
                case CPP14Parser.StarAssign:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 969;
                        this.match(CPP14Parser.StarAssign);
                    }
                    break;
                case CPP14Parser.DivAssign:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 970;
                        this.match(CPP14Parser.DivAssign);
                    }
                    break;
                case CPP14Parser.ModAssign:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 971;
                        this.match(CPP14Parser.ModAssign);
                    }
                    break;
                case CPP14Parser.PlusAssign:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 972;
                        this.match(CPP14Parser.PlusAssign);
                    }
                    break;
                case CPP14Parser.MinusAssign:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 973;
                        this.match(CPP14Parser.MinusAssign);
                    }
                    break;
                case CPP14Parser.Greater:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 974;
                        this.rightShiftAssign();
                    }
                    break;
                case CPP14Parser.LeftShiftAssign:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 975;
                        this.match(CPP14Parser.LeftShiftAssign);
                    }
                    break;
                case CPP14Parser.AndAssign:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 976;
                        this.match(CPP14Parser.AndAssign);
                    }
                    break;
                case CPP14Parser.XorAssign:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 977;
                        this.match(CPP14Parser.XorAssign);
                    }
                    break;
                case CPP14Parser.OrAssign:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 978;
                        this.match(CPP14Parser.OrAssign);
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
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 90;
        this.enterRecursionRule(_localctx, 90, CPP14Parser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 982;
                    this.assignmentexpression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 989;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_expression);
                                this.state = 984;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 985;
                                this.match(CPP14Parser.Comma);
                                this.state = 986;
                                this.assignmentexpression();
                            }
                        }
                    }
                    this.state = 991;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
    constantexpression() {
        let _localctx = new ConstantexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, CPP14Parser.RULE_constantexpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.conditionalexpression();
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
        this.enterRule(_localctx, 94, CPP14Parser.RULE_statement);
        let _la;
        try {
            this.state = 1020;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 994;
                        this.labeledstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 996;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                            case 1:
                                {
                                    this.state = 995;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 998;
                        this.expressionstatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1000;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 999;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1002;
                        this.compoundstatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1004;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1003;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1006;
                        this.selectionstatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1008;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1007;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1010;
                        this.iterationstatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1012;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1011;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1014;
                        this.jumpstatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1015;
                        this.declarationstatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1016;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1019;
                        this.tryblock();
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
    labeledstatement() {
        let _localctx = new LabeledstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, CPP14Parser.RULE_labeledstatement);
        let _la;
        try {
            this.state = 1042;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1023;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1022;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1025;
                        this.match(CPP14Parser.Identifier);
                        this.state = 1026;
                        this.match(CPP14Parser.Colon);
                        this.state = 1027;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1029;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1028;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1031;
                        this.match(CPP14Parser.Case);
                        this.state = 1032;
                        this.constantexpression();
                        this.state = 1033;
                        this.match(CPP14Parser.Colon);
                        this.state = 1034;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1037;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1036;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1039;
                        this.match(CPP14Parser.Default);
                        this.state = 1040;
                        this.match(CPP14Parser.Colon);
                        this.state = 1041;
                        this.statement();
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
    expressionstatement() {
        let _localctx = new ExpressionstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, CPP14Parser.RULE_expressionstatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1045;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                    {
                        this.state = 1044;
                        this.expression(0);
                    }
                }
                this.state = 1047;
                this.match(CPP14Parser.Semi);
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
    compoundstatement() {
        let _localctx = new CompoundstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, CPP14Parser.RULE_compoundstatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1049;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1051;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Switch - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.PlusPlus - 111)) | (1 << (CPP14Parser.MinusMinus - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)) | (1 << (CPP14Parser.Integerliteral - 111)) | (1 << (CPP14Parser.Characterliteral - 111)) | (1 << (CPP14Parser.Floatingliteral - 111)) | (1 << (CPP14Parser.Stringliteral - 111)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 111)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 111)) | (1 << (CPP14Parser.Userdefinedstringliteral - 111)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 111)))) !== 0)) {
                    {
                        this.state = 1050;
                        this.statementseq(0);
                    }
                }
                this.state = 1053;
                this.match(CPP14Parser.RightBrace);
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
    statementseq(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new StatementseqContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 102;
        this.enterRecursionRule(_localctx, 102, CPP14Parser.RULE_statementseq, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1056;
                    this.statement();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1062;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new StatementseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_statementseq);
                                this.state = 1058;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1059;
                                this.statement();
                            }
                        }
                    }
                    this.state = 1064;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
    selectionstatement() {
        let _localctx = new SelectionstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, CPP14Parser.RULE_selectionstatement);
        try {
            this.state = 1085;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1065;
                        this.match(CPP14Parser.If);
                        this.state = 1066;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1067;
                        this.condition();
                        this.state = 1068;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1069;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1071;
                        this.match(CPP14Parser.If);
                        this.state = 1072;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1073;
                        this.condition();
                        this.state = 1074;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1075;
                        this.statement();
                        this.state = 1076;
                        this.match(CPP14Parser.Else);
                        this.state = 1077;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1079;
                        this.match(CPP14Parser.Switch);
                        this.state = 1080;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1081;
                        this.condition();
                        this.state = 1082;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1083;
                        this.statement();
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
    condition() {
        let _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, CPP14Parser.RULE_condition);
        let _la;
        try {
            this.state = 1103;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1087;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1089;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1088;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1091;
                        this.declspecifierseq();
                        this.state = 1092;
                        this.declarator();
                        this.state = 1093;
                        this.match(CPP14Parser.Assign);
                        this.state = 1094;
                        this.initializerclause();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1097;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1096;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1099;
                        this.declspecifierseq();
                        this.state = 1100;
                        this.declarator();
                        this.state = 1101;
                        this.bracedinitlist();
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
    iterationstatement() {
        let _localctx = new IterationstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, CPP14Parser.RULE_iterationstatement);
        let _la;
        try {
            this.state = 1140;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1105;
                        this.match(CPP14Parser.While);
                        this.state = 1106;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1107;
                        this.condition();
                        this.state = 1108;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1109;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1111;
                        this.match(CPP14Parser.Do);
                        this.state = 1112;
                        this.statement();
                        this.state = 1113;
                        this.match(CPP14Parser.While);
                        this.state = 1114;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1115;
                        this.expression(0);
                        this.state = 1116;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1117;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1119;
                        this.match(CPP14Parser.For);
                        this.state = 1120;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1121;
                        this.forinitstatement();
                        this.state = 1123;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 1122;
                                this.condition();
                            }
                        }
                        this.state = 1125;
                        this.match(CPP14Parser.Semi);
                        this.state = 1127;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 1126;
                                this.expression(0);
                            }
                        }
                        this.state = 1129;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1130;
                        this.statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1132;
                        this.match(CPP14Parser.For);
                        this.state = 1133;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1134;
                        this.forrangedeclaration();
                        this.state = 1135;
                        this.match(CPP14Parser.Colon);
                        this.state = 1136;
                        this.forrangeinitializer();
                        this.state = 1137;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1138;
                        this.statement();
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
    forinitstatement() {
        let _localctx = new ForinitstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, CPP14Parser.RULE_forinitstatement);
        try {
            this.state = 1144;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1142;
                        this.expressionstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1143;
                        this.simpledeclaration();
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
    forrangedeclaration() {
        let _localctx = new ForrangedeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, CPP14Parser.RULE_forrangedeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                    {
                        this.state = 1146;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1149;
                this.declspecifierseq();
                this.state = 1150;
                this.declarator();
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
    forrangeinitializer() {
        let _localctx = new ForrangeinitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, CPP14Parser.RULE_forrangeinitializer);
        try {
            this.state = 1154;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Alignof:
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Const_cast:
                case CPP14Parser.Decltype:
                case CPP14Parser.Delete:
                case CPP14Parser.Double:
                case CPP14Parser.Dynamic_cast:
                case CPP14Parser.False:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.New:
                case CPP14Parser.Noexcept:
                case CPP14Parser.Nullptr:
                case CPP14Parser.Operator:
                case CPP14Parser.Reinterpret_cast:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Sizeof:
                case CPP14Parser.Static_cast:
                case CPP14Parser.This:
                case CPP14Parser.Throw:
                case CPP14Parser.True:
                case CPP14Parser.Typeid:
                case CPP14Parser.Typename:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                case CPP14Parser.Plus:
                case CPP14Parser.Minus:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Or:
                case CPP14Parser.Tilde:
                case CPP14Parser.Not:
                case CPP14Parser.PlusPlus:
                case CPP14Parser.MinusMinus:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                case CPP14Parser.Integerliteral:
                case CPP14Parser.Characterliteral:
                case CPP14Parser.Floatingliteral:
                case CPP14Parser.Stringliteral:
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1152;
                        this.expression(0);
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1153;
                        this.bracedinitlist();
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
    jumpstatement() {
        let _localctx = new JumpstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, CPP14Parser.RULE_jumpstatement);
        let _la;
        try {
            this.state = 1172;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1156;
                        this.match(CPP14Parser.Break);
                        this.state = 1157;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1158;
                        this.match(CPP14Parser.Continue);
                        this.state = 1159;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1160;
                        this.match(CPP14Parser.Return);
                        this.state = 1162;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 1161;
                                this.expression(0);
                            }
                        }
                        this.state = 1164;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1165;
                        this.match(CPP14Parser.Return);
                        this.state = 1166;
                        this.bracedinitlist();
                        this.state = 1167;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1169;
                        this.match(CPP14Parser.Goto);
                        this.state = 1170;
                        this.match(CPP14Parser.Identifier);
                        this.state = 1171;
                        this.match(CPP14Parser.Semi);
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
    declarationstatement() {
        let _localctx = new DeclarationstatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, CPP14Parser.RULE_declarationstatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1174;
                this.blockdeclaration();
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
    declarationseq(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new DeclarationseqContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 120;
        this.enterRecursionRule(_localctx, 120, CPP14Parser.RULE_declarationseq, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1177;
                    this.declaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1183;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new DeclarationseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_declarationseq);
                                this.state = 1179;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1180;
                                this.declaration();
                            }
                        }
                    }
                    this.state = 1185;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
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
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, CPP14Parser.RULE_declaration);
        try {
            this.state = 1195;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1186;
                        this.blockdeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1187;
                        this.functiondefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1188;
                        this.templatedeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1189;
                        this.explicitinstantiation();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1190;
                        this.explicitspecialization();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1191;
                        this.linkagespecification();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1192;
                        this.namespacedefinition();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1193;
                        this.emptydeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1194;
                        this.attributedeclaration();
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
    blockdeclaration() {
        let _localctx = new BlockdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, CPP14Parser.RULE_blockdeclaration);
        try {
            this.state = 1205;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1197;
                        this.simpledeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1198;
                        this.asmdefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1199;
                        this.namespacealiasdefinition();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1200;
                        this.usingdeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1201;
                        this.usingdirective();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1202;
                        this.static_assertdeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1203;
                        this.aliasdeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1204;
                        this.opaqueenumdeclaration();
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
    aliasdeclaration() {
        let _localctx = new AliasdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, CPP14Parser.RULE_aliasdeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1207;
                this.match(CPP14Parser.Using);
                this.state = 1208;
                this.match(CPP14Parser.Identifier);
                this.state = 1210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                    {
                        this.state = 1209;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1212;
                this.match(CPP14Parser.Assign);
                this.state = 1213;
                this.thetypeid();
                this.state = 1214;
                this.match(CPP14Parser.Semi);
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
    simpledeclaration() {
        let _localctx = new SimpledeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, CPP14Parser.RULE_simpledeclaration);
        let _la;
        try {
            this.state = 1230;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Class:
                case CPP14Parser.Const:
                case CPP14Parser.Constexpr:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Enum:
                case CPP14Parser.Explicit:
                case CPP14Parser.Extern:
                case CPP14Parser.Float:
                case CPP14Parser.Friend:
                case CPP14Parser.Inline:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Mutable:
                case CPP14Parser.Operator:
                case CPP14Parser.Register:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Static:
                case CPP14Parser.Struct:
                case CPP14Parser.Thread_local:
                case CPP14Parser.Typedef:
                case CPP14Parser.Typename:
                case CPP14Parser.Union:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Virtual:
                case CPP14Parser.Void:
                case CPP14Parser.Volatile:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Tilde:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Semi:
                case CPP14Parser.Ellipsis:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1217;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1216;
                                    this.declspecifierseq();
                                }
                                break;
                        }
                        this.state = 1220;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)) | (1 << (CPP14Parser.Tilde - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 1219;
                                this.initdeclaratorlist(0);
                            }
                        }
                        this.state = 1222;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case CPP14Parser.Alignas:
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1223;
                        this.attributespecifierseq(0);
                        this.state = 1225;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1224;
                                    this.declspecifierseq();
                                }
                                break;
                        }
                        this.state = 1227;
                        this.initdeclaratorlist(0);
                        this.state = 1228;
                        this.match(CPP14Parser.Semi);
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
    static_assertdeclaration() {
        let _localctx = new Static_assertdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, CPP14Parser.RULE_static_assertdeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1232;
                this.match(CPP14Parser.Static_assert);
                this.state = 1233;
                this.match(CPP14Parser.LeftParen);
                this.state = 1234;
                this.constantexpression();
                this.state = 1235;
                this.match(CPP14Parser.Comma);
                this.state = 1236;
                this.match(CPP14Parser.Stringliteral);
                this.state = 1237;
                this.match(CPP14Parser.RightParen);
                this.state = 1238;
                this.match(CPP14Parser.Semi);
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
    emptydeclaration() {
        let _localctx = new EmptydeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, CPP14Parser.RULE_emptydeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1240;
                this.match(CPP14Parser.Semi);
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
    attributedeclaration() {
        let _localctx = new AttributedeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, CPP14Parser.RULE_attributedeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1242;
                this.attributespecifierseq(0);
                this.state = 1243;
                this.match(CPP14Parser.Semi);
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
    declspecifier() {
        let _localctx = new DeclspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, CPP14Parser.RULE_declspecifier);
        try {
            this.state = 1251;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Extern:
                case CPP14Parser.Mutable:
                case CPP14Parser.Register:
                case CPP14Parser.Static:
                case CPP14Parser.Thread_local:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1245;
                        this.storageclassspecifier();
                    }
                    break;
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Class:
                case CPP14Parser.Const:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Enum:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Struct:
                case CPP14Parser.Typename:
                case CPP14Parser.Union:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Volatile:
                case CPP14Parser.Wchar:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1246;
                        this.typespecifier();
                    }
                    break;
                case CPP14Parser.Explicit:
                case CPP14Parser.Inline:
                case CPP14Parser.Virtual:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1247;
                        this.functionspecifier();
                    }
                    break;
                case CPP14Parser.Friend:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1248;
                        this.match(CPP14Parser.Friend);
                    }
                    break;
                case CPP14Parser.Typedef:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1249;
                        this.match(CPP14Parser.Typedef);
                    }
                    break;
                case CPP14Parser.Constexpr:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1250;
                        this.match(CPP14Parser.Constexpr);
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
    declspecifierseq() {
        let _localctx = new DeclspecifierseqContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, CPP14Parser.RULE_declspecifierseq);
        try {
            this.state = 1260;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1253;
                        this.declspecifier();
                        this.state = 1255;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1254;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1257;
                        this.declspecifier();
                        this.state = 1258;
                        this.declspecifierseq();
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
    storageclassspecifier() {
        let _localctx = new StorageclassspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, CPP14Parser.RULE_storageclassspecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1262;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.Extern || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0))) {
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
    functionspecifier() {
        let _localctx = new FunctionspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, CPP14Parser.RULE_functionspecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1264;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.Explicit || _la === CPP14Parser.Inline || _la === CPP14Parser.Virtual)) {
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
    typedefname() {
        let _localctx = new TypedefnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, CPP14Parser.RULE_typedefname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1266;
                this.match(CPP14Parser.Identifier);
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
    typespecifier() {
        let _localctx = new TypespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, CPP14Parser.RULE_typespecifier);
        try {
            this.state = 1271;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1268;
                        this.trailingtypespecifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1269;
                        this.classspecifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1270;
                        this.enumspecifier();
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
    trailingtypespecifier() {
        let _localctx = new TrailingtypespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, CPP14Parser.RULE_trailingtypespecifier);
        try {
            this.state = 1277;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Wchar:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1273;
                        this.simpletypespecifier();
                    }
                    break;
                case CPP14Parser.Class:
                case CPP14Parser.Enum:
                case CPP14Parser.Struct:
                case CPP14Parser.Union:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1274;
                        this.elaboratedtypespecifier();
                    }
                    break;
                case CPP14Parser.Typename:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1275;
                        this.typenamespecifier();
                    }
                    break;
                case CPP14Parser.Const:
                case CPP14Parser.Volatile:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1276;
                        this.cvqualifier();
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
    typespecifierseq() {
        let _localctx = new TypespecifierseqContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, CPP14Parser.RULE_typespecifierseq);
        try {
            this.state = 1286;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1279;
                        this.typespecifier();
                        this.state = 1281;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1280;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1283;
                        this.typespecifier();
                        this.state = 1284;
                        this.typespecifierseq();
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
    trailingtypespecifierseq() {
        let _localctx = new TrailingtypespecifierseqContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, CPP14Parser.RULE_trailingtypespecifierseq);
        try {
            this.state = 1295;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1288;
                        this.trailingtypespecifier();
                        this.state = 1290;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1289;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1292;
                        this.trailingtypespecifier();
                        this.state = 1293;
                        this.trailingtypespecifierseq();
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
    simpletypespecifier() {
        let _localctx = new SimpletypespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, CPP14Parser.RULE_simpletypespecifier);
        try {
            this.state = 1320;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1298;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1297;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 1300;
                        this.thetypename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1301;
                        this.nestednamespecifier(0);
                        this.state = 1302;
                        this.match(CPP14Parser.Template);
                        this.state = 1303;
                        this.simpletemplateid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1305;
                        this.match(CPP14Parser.Char);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1306;
                        this.match(CPP14Parser.Char16);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1307;
                        this.match(CPP14Parser.Char32);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1308;
                        this.match(CPP14Parser.Wchar);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1309;
                        this.match(CPP14Parser.Bool);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1310;
                        this.match(CPP14Parser.Short);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1311;
                        this.match(CPP14Parser.Int);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1312;
                        this.match(CPP14Parser.Long);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1313;
                        this.match(CPP14Parser.Signed);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1314;
                        this.match(CPP14Parser.Unsigned);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1315;
                        this.match(CPP14Parser.Float);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1316;
                        this.match(CPP14Parser.Double);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1317;
                        this.match(CPP14Parser.Void);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1318;
                        this.match(CPP14Parser.Auto);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1319;
                        this.decltypespecifier();
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
    thetypename() {
        let _localctx = new ThetypenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, CPP14Parser.RULE_thetypename);
        try {
            this.state = 1326;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1322;
                        this.classname();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1323;
                        this.enumname();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1324;
                        this.typedefname();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1325;
                        this.simpletemplateid();
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
    decltypespecifier() {
        let _localctx = new DecltypespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, CPP14Parser.RULE_decltypespecifier);
        try {
            this.state = 1337;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1328;
                        this.match(CPP14Parser.Decltype);
                        this.state = 1329;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1330;
                        this.expression(0);
                        this.state = 1331;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1333;
                        this.match(CPP14Parser.Decltype);
                        this.state = 1334;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1335;
                        this.match(CPP14Parser.Auto);
                        this.state = 1336;
                        this.match(CPP14Parser.RightParen);
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
    elaboratedtypespecifier() {
        let _localctx = new ElaboratedtypespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, CPP14Parser.RULE_elaboratedtypespecifier);
        let _la;
        try {
            this.state = 1363;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1339;
                        this.classkey();
                        this.state = 1341;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1340;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1344;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1343;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 1346;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1348;
                        this.classkey();
                        this.state = 1349;
                        this.simpletemplateid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1351;
                        this.classkey();
                        this.state = 1352;
                        this.nestednamespecifier(0);
                        this.state = 1354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Template) {
                            {
                                this.state = 1353;
                                this.match(CPP14Parser.Template);
                            }
                        }
                        this.state = 1356;
                        this.simpletemplateid();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1358;
                        this.match(CPP14Parser.Enum);
                        this.state = 1360;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1359;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 1362;
                        this.match(CPP14Parser.Identifier);
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
    enumname() {
        let _localctx = new EnumnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, CPP14Parser.RULE_enumname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1365;
                this.match(CPP14Parser.Identifier);
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
    enumspecifier() {
        let _localctx = new EnumspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, CPP14Parser.RULE_enumspecifier);
        let _la;
        try {
            this.state = 1380;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1367;
                        this.enumhead();
                        this.state = 1368;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1370;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Identifier) {
                            {
                                this.state = 1369;
                                this.enumeratorlist(0);
                            }
                        }
                        this.state = 1372;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1374;
                        this.enumhead();
                        this.state = 1375;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1376;
                        this.enumeratorlist(0);
                        this.state = 1377;
                        this.match(CPP14Parser.Comma);
                        this.state = 1378;
                        this.match(CPP14Parser.RightBrace);
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
    enumhead() {
        let _localctx = new EnumheadContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, CPP14Parser.RULE_enumhead);
        let _la;
        try {
            this.state = 1401;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1382;
                        this.enumkey();
                        this.state = 1384;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1383;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1387;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Identifier) {
                            {
                                this.state = 1386;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 1390;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Colon) {
                            {
                                this.state = 1389;
                                this.enumbase();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1392;
                        this.enumkey();
                        this.state = 1394;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1393;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1396;
                        this.nestednamespecifier(0);
                        this.state = 1397;
                        this.match(CPP14Parser.Identifier);
                        this.state = 1399;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Colon) {
                            {
                                this.state = 1398;
                                this.enumbase();
                            }
                        }
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
    opaqueenumdeclaration() {
        let _localctx = new OpaqueenumdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, CPP14Parser.RULE_opaqueenumdeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1403;
                this.enumkey();
                this.state = 1405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                    {
                        this.state = 1404;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1407;
                this.match(CPP14Parser.Identifier);
                this.state = 1409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Colon) {
                    {
                        this.state = 1408;
                        this.enumbase();
                    }
                }
                this.state = 1411;
                this.match(CPP14Parser.Semi);
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
    enumkey() {
        let _localctx = new EnumkeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, CPP14Parser.RULE_enumkey);
        try {
            this.state = 1418;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1413;
                        this.match(CPP14Parser.Enum);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1414;
                        this.match(CPP14Parser.Enum);
                        this.state = 1415;
                        this.match(CPP14Parser.Class);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1416;
                        this.match(CPP14Parser.Enum);
                        this.state = 1417;
                        this.match(CPP14Parser.Struct);
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
    enumbase() {
        let _localctx = new EnumbaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, CPP14Parser.RULE_enumbase);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1420;
                this.match(CPP14Parser.Colon);
                this.state = 1421;
                this.typespecifierseq();
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
    enumeratorlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new EnumeratorlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 174;
        this.enterRecursionRule(_localctx, 174, CPP14Parser.RULE_enumeratorlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1424;
                    this.enumeratordefinition();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1431;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new EnumeratorlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_enumeratorlist);
                                this.state = 1426;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1427;
                                this.match(CPP14Parser.Comma);
                                this.state = 1428;
                                this.enumeratordefinition();
                            }
                        }
                    }
                    this.state = 1433;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
    enumeratordefinition() {
        let _localctx = new EnumeratordefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, CPP14Parser.RULE_enumeratordefinition);
        try {
            this.state = 1439;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1434;
                        this.enumerator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1435;
                        this.enumerator();
                        this.state = 1436;
                        this.match(CPP14Parser.Assign);
                        this.state = 1437;
                        this.constantexpression();
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
    enumerator() {
        let _localctx = new EnumeratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, CPP14Parser.RULE_enumerator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1441;
                this.match(CPP14Parser.Identifier);
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
    namespacename() {
        let _localctx = new NamespacenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, CPP14Parser.RULE_namespacename);
        try {
            this.state = 1445;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1443;
                        this.originalnamespacename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1444;
                        this.namespacealias();
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
    originalnamespacename() {
        let _localctx = new OriginalnamespacenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, CPP14Parser.RULE_originalnamespacename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1447;
                this.match(CPP14Parser.Identifier);
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
    namespacedefinition() {
        let _localctx = new NamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, CPP14Parser.RULE_namespacedefinition);
        try {
            this.state = 1451;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1449;
                        this.namednamespacedefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1450;
                        this.unnamednamespacedefinition();
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
    namednamespacedefinition() {
        let _localctx = new NamednamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, CPP14Parser.RULE_namednamespacedefinition);
        try {
            this.state = 1455;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1453;
                        this.originalnamespacedefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1454;
                        this.extensionnamespacedefinition();
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
    originalnamespacedefinition() {
        let _localctx = new OriginalnamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, CPP14Parser.RULE_originalnamespacedefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Inline) {
                    {
                        this.state = 1457;
                        this.match(CPP14Parser.Inline);
                    }
                }
                this.state = 1460;
                this.match(CPP14Parser.Namespace);
                this.state = 1461;
                this.match(CPP14Parser.Identifier);
                this.state = 1462;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1463;
                this.namespacebody();
                this.state = 1464;
                this.match(CPP14Parser.RightBrace);
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
    extensionnamespacedefinition() {
        let _localctx = new ExtensionnamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, CPP14Parser.RULE_extensionnamespacedefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Inline) {
                    {
                        this.state = 1466;
                        this.match(CPP14Parser.Inline);
                    }
                }
                this.state = 1469;
                this.match(CPP14Parser.Namespace);
                this.state = 1470;
                this.originalnamespacename();
                this.state = 1471;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1472;
                this.namespacebody();
                this.state = 1473;
                this.match(CPP14Parser.RightBrace);
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
    unnamednamespacedefinition() {
        let _localctx = new UnnamednamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, CPP14Parser.RULE_unnamednamespacedefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Inline) {
                    {
                        this.state = 1475;
                        this.match(CPP14Parser.Inline);
                    }
                }
                this.state = 1478;
                this.match(CPP14Parser.Namespace);
                this.state = 1479;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1480;
                this.namespacebody();
                this.state = 1481;
                this.match(CPP14Parser.RightBrace);
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
    namespacebody() {
        let _localctx = new NamespacebodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, CPP14Parser.RULE_namespacebody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1484;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                    {
                        this.state = 1483;
                        this.declarationseq(0);
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
    namespacealias() {
        let _localctx = new NamespacealiasContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, CPP14Parser.RULE_namespacealias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1486;
                this.match(CPP14Parser.Identifier);
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
    namespacealiasdefinition() {
        let _localctx = new NamespacealiasdefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, CPP14Parser.RULE_namespacealiasdefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1488;
                this.match(CPP14Parser.Namespace);
                this.state = 1489;
                this.match(CPP14Parser.Identifier);
                this.state = 1490;
                this.match(CPP14Parser.Assign);
                this.state = 1491;
                this.qualifiednamespacespecifier();
                this.state = 1492;
                this.match(CPP14Parser.Semi);
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
    qualifiednamespacespecifier() {
        let _localctx = new QualifiednamespacespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, CPP14Parser.RULE_qualifiednamespacespecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1495;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                    case 1:
                        {
                            this.state = 1494;
                            this.nestednamespecifier(0);
                        }
                        break;
                }
                this.state = 1497;
                this.namespacename();
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
    usingdeclaration() {
        let _localctx = new UsingdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, CPP14Parser.RULE_usingdeclaration);
        let _la;
        try {
            this.state = 1512;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1499;
                        this.match(CPP14Parser.Using);
                        this.state = 1501;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Typename) {
                            {
                                this.state = 1500;
                                this.match(CPP14Parser.Typename);
                            }
                        }
                        this.state = 1503;
                        this.nestednamespecifier(0);
                        this.state = 1504;
                        this.unqualifiedid();
                        this.state = 1505;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1507;
                        this.match(CPP14Parser.Using);
                        this.state = 1508;
                        this.match(CPP14Parser.Doublecolon);
                        this.state = 1509;
                        this.unqualifiedid();
                        this.state = 1510;
                        this.match(CPP14Parser.Semi);
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
    usingdirective() {
        let _localctx = new UsingdirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, CPP14Parser.RULE_usingdirective);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                    {
                        this.state = 1514;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1517;
                this.match(CPP14Parser.Using);
                this.state = 1518;
                this.match(CPP14Parser.Namespace);
                this.state = 1520;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                    case 1:
                        {
                            this.state = 1519;
                            this.nestednamespecifier(0);
                        }
                        break;
                }
                this.state = 1522;
                this.namespacename();
                this.state = 1523;
                this.match(CPP14Parser.Semi);
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
    asmdefinition() {
        let _localctx = new AsmdefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, CPP14Parser.RULE_asmdefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1525;
                this.match(CPP14Parser.Asm);
                this.state = 1526;
                this.match(CPP14Parser.LeftParen);
                this.state = 1527;
                this.match(CPP14Parser.Stringliteral);
                this.state = 1528;
                this.match(CPP14Parser.RightParen);
                this.state = 1529;
                this.match(CPP14Parser.Semi);
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
    linkagespecification() {
        let _localctx = new LinkagespecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, CPP14Parser.RULE_linkagespecification);
        let _la;
        try {
            this.state = 1541;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1531;
                        this.match(CPP14Parser.Extern);
                        this.state = 1532;
                        this.match(CPP14Parser.Stringliteral);
                        this.state = 1533;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1535;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 1534;
                                this.declarationseq(0);
                            }
                        }
                        this.state = 1537;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1538;
                        this.match(CPP14Parser.Extern);
                        this.state = 1539;
                        this.match(CPP14Parser.Stringliteral);
                        this.state = 1540;
                        this.declaration();
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
    attributespecifierseq(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new AttributespecifierseqContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 210;
        this.enterRecursionRule(_localctx, 210, CPP14Parser.RULE_attributespecifierseq, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1544;
                    this.attributespecifier();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1550;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new AttributespecifierseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributespecifierseq);
                                this.state = 1546;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1547;
                                this.attributespecifier();
                            }
                        }
                    }
                    this.state = 1552;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
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
    attributespecifier() {
        let _localctx = new AttributespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, CPP14Parser.RULE_attributespecifier);
        try {
            this.state = 1560;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1553;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1554;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1555;
                        this.attributelist(0);
                        this.state = 1556;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 1557;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case CPP14Parser.Alignas:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1559;
                        this.alignmentspecifier();
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
    alignmentspecifier() {
        let _localctx = new AlignmentspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, CPP14Parser.RULE_alignmentspecifier);
        let _la;
        try {
            this.state = 1578;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1562;
                        this.match(CPP14Parser.Alignas);
                        this.state = 1563;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1564;
                        this.thetypeid();
                        this.state = 1566;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Ellipsis) {
                            {
                                this.state = 1565;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                        this.state = 1568;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1570;
                        this.match(CPP14Parser.Alignas);
                        this.state = 1571;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1572;
                        this.constantexpression();
                        this.state = 1574;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Ellipsis) {
                            {
                                this.state = 1573;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                        this.state = 1576;
                        this.match(CPP14Parser.RightParen);
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
    attributelist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new AttributelistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 216;
        this.enterRecursionRule(_localctx, 216, CPP14Parser.RULE_attributelist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1587;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        {
                            this.state = 1582;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1581;
                                        this.attribute();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1584;
                            this.attribute();
                            this.state = 1585;
                            this.match(CPP14Parser.Ellipsis);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1601;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 1599;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new AttributelistContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
                                        this.state = 1589;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 1590;
                                        this.match(CPP14Parser.Comma);
                                        this.state = 1592;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1591;
                                                    this.attribute();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AttributelistContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
                                        this.state = 1594;
                                        if (!(this.precpred(this._ctx, 1)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        this.state = 1595;
                                        this.match(CPP14Parser.Comma);
                                        this.state = 1596;
                                        this.attribute();
                                        this.state = 1597;
                                        this.match(CPP14Parser.Ellipsis);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1603;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
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
    attribute() {
        let _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, CPP14Parser.RULE_attribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1604;
                this.attributetoken();
                this.state = 1606;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                    case 1:
                        {
                            this.state = 1605;
                            this.attributeargumentclause();
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
    attributetoken() {
        let _localctx = new AttributetokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, CPP14Parser.RULE_attributetoken);
        try {
            this.state = 1610;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1608;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1609;
                        this.attributescopedtoken();
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
    attributescopedtoken() {
        let _localctx = new AttributescopedtokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, CPP14Parser.RULE_attributescopedtoken);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1612;
                this.attributenamespace();
                this.state = 1613;
                this.match(CPP14Parser.Doublecolon);
                this.state = 1614;
                this.match(CPP14Parser.Identifier);
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
    attributenamespace() {
        let _localctx = new AttributenamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, CPP14Parser.RULE_attributenamespace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1616;
                this.match(CPP14Parser.Identifier);
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
    attributeargumentclause() {
        let _localctx = new AttributeargumentclauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, CPP14Parser.RULE_attributeargumentclause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1618;
                this.match(CPP14Parser.LeftParen);
                this.state = 1619;
                this.balancedtokenseq(0);
                this.state = 1620;
                this.match(CPP14Parser.RightParen);
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
    balancedtokenseq(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new BalancedtokenseqContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 228;
        this.enterRecursionRule(_localctx, 228, CPP14Parser.RULE_balancedtokenseq, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1624;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                        case 1:
                            {
                                this.state = 1623;
                                this.balancedtoken();
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1630;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BalancedtokenseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_balancedtokenseq);
                                this.state = 1626;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1627;
                                this.balancedtoken();
                            }
                        }
                    }
                    this.state = 1632;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
    balancedtoken() {
        let _localctx = new BalancedtokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, CPP14Parser.RULE_balancedtoken);
        try {
            this.state = 1645;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1633;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1634;
                        this.balancedtokenseq(0);
                        this.state = 1635;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1637;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1638;
                        this.balancedtokenseq(0);
                        this.state = 1639;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1641;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1642;
                        this.balancedtokenseq(0);
                        this.state = 1643;
                        this.match(CPP14Parser.RightBrace);
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
    initdeclaratorlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new InitdeclaratorlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 232;
        this.enterRecursionRule(_localctx, 232, CPP14Parser.RULE_initdeclaratorlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1648;
                    this.initdeclarator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1655;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InitdeclaratorlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_initdeclaratorlist);
                                this.state = 1650;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1651;
                                this.match(CPP14Parser.Comma);
                                this.state = 1652;
                                this.initdeclarator();
                            }
                        }
                    }
                    this.state = 1657;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
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
    initdeclarator() {
        let _localctx = new InitdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, CPP14Parser.RULE_initdeclarator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1658;
                this.declarator();
                this.state = 1660;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                    case 1:
                        {
                            this.state = 1659;
                            this.initializer();
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
    declarator() {
        let _localctx = new DeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, CPP14Parser.RULE_declarator);
        try {
            this.state = 1667;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1662;
                        this.ptrdeclarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1663;
                        this.noptrdeclarator(0);
                        this.state = 1664;
                        this.parametersandqualifiers();
                        this.state = 1665;
                        this.trailingreturntype();
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
    ptrdeclarator() {
        let _localctx = new PtrdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, CPP14Parser.RULE_ptrdeclarator);
        try {
            this.state = 1673;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1669;
                        this.noptrdeclarator(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1670;
                        this.ptroperator();
                        this.state = 1671;
                        this.ptrdeclarator();
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
    noptrdeclarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new NoptrdeclaratorContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 240;
        this.enterRecursionRule(_localctx, 240, CPP14Parser.RULE_noptrdeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1684;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CPP14Parser.Decltype:
                    case CPP14Parser.Operator:
                    case CPP14Parser.Tilde:
                    case CPP14Parser.Doublecolon:
                    case CPP14Parser.Ellipsis:
                    case CPP14Parser.Identifier:
                        {
                            this.state = 1676;
                            this.declaratorid();
                            this.state = 1678;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1677;
                                        this.attributespecifierseq(0);
                                    }
                                    break;
                            }
                        }
                        break;
                    case CPP14Parser.LeftParen:
                        {
                            this.state = 1680;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 1681;
                            this.ptrdeclarator();
                            this.state = 1682;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1699;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 1697;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
                                        this.state = 1686;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 1687;
                                        this.parametersandqualifiers();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
                                        this.state = 1688;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 1689;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 1691;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                            {
                                                this.state = 1690;
                                                this.constantexpression();
                                            }
                                        }
                                        this.state = 1693;
                                        this.match(CPP14Parser.RightBracket);
                                        this.state = 1695;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1694;
                                                    this.attributespecifierseq(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1701;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
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
    parametersandqualifiers() {
        let _localctx = new ParametersandqualifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, CPP14Parser.RULE_parametersandqualifiers);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1702;
                this.match(CPP14Parser.LeftParen);
                this.state = 1703;
                this.parameterdeclarationclause();
                this.state = 1704;
                this.match(CPP14Parser.RightParen);
                this.state = 1706;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                    case 1:
                        {
                            this.state = 1705;
                            this.cvqualifierseq();
                        }
                        break;
                }
                this.state = 1709;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                    case 1:
                        {
                            this.state = 1708;
                            this.refqualifier();
                        }
                        break;
                }
                this.state = 1712;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
                    case 1:
                        {
                            this.state = 1711;
                            this.exceptionspecification();
                        }
                        break;
                }
                this.state = 1715;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                    case 1:
                        {
                            this.state = 1714;
                            this.attributespecifierseq(0);
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
    trailingreturntype() {
        let _localctx = new TrailingreturntypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, CPP14Parser.RULE_trailingreturntype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1717;
                this.match(CPP14Parser.Arrow);
                this.state = 1718;
                this.trailingtypespecifierseq();
                this.state = 1720;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                    case 1:
                        {
                            this.state = 1719;
                            this.abstractdeclarator();
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
    ptroperator() {
        let _localctx = new PtroperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, CPP14Parser.RULE_ptroperator);
        try {
            this.state = 1745;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Star:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1722;
                        this.match(CPP14Parser.Star);
                        this.state = 1724;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1723;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 1727;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1726;
                                    this.cvqualifierseq();
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.And:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1729;
                        this.match(CPP14Parser.And);
                        this.state = 1731;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1730;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.AndAnd:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1733;
                        this.match(CPP14Parser.AndAnd);
                        this.state = 1735;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1734;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1737;
                        this.nestednamespecifier(0);
                        this.state = 1738;
                        this.match(CPP14Parser.Star);
                        this.state = 1740;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 187, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1739;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 1743;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 188, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1742;
                                    this.cvqualifierseq();
                                }
                                break;
                        }
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
    cvqualifierseq() {
        let _localctx = new CvqualifierseqContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, CPP14Parser.RULE_cvqualifierseq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1747;
                this.cvqualifier();
                this.state = 1749;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 190, this._ctx)) {
                    case 1:
                        {
                            this.state = 1748;
                            this.cvqualifierseq();
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
    cvqualifier() {
        let _localctx = new CvqualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, CPP14Parser.RULE_cvqualifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1751;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.Const || _la === CPP14Parser.Volatile)) {
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
    refqualifier() {
        let _localctx = new RefqualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, CPP14Parser.RULE_refqualifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1753;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.And || _la === CPP14Parser.AndAnd)) {
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
    declaratorid() {
        let _localctx = new DeclaratoridContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, CPP14Parser.RULE_declaratorid);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1756;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Ellipsis) {
                    {
                        this.state = 1755;
                        this.match(CPP14Parser.Ellipsis);
                    }
                }
                this.state = 1758;
                this.idexpression();
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
    thetypeid() {
        let _localctx = new ThetypeidContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, CPP14Parser.RULE_thetypeid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1760;
                this.typespecifierseq();
                this.state = 1762;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                    case 1:
                        {
                            this.state = 1761;
                            this.abstractdeclarator();
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
    abstractdeclarator() {
        let _localctx = new AbstractdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, CPP14Parser.RULE_abstractdeclarator);
        try {
            this.state = 1772;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1764;
                        this.ptrabstractdeclarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1766;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 193, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1765;
                                    this.noptrabstractdeclarator(0);
                                }
                                break;
                        }
                        this.state = 1768;
                        this.parametersandqualifiers();
                        this.state = 1769;
                        this.trailingreturntype();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1771;
                        this.abstractpackdeclarator();
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
    ptrabstractdeclarator() {
        let _localctx = new PtrabstractdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, CPP14Parser.RULE_ptrabstractdeclarator);
        try {
            this.state = 1779;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1774;
                        this.noptrabstractdeclarator(0);
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1775;
                        this.ptroperator();
                        this.state = 1777;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1776;
                                    this.ptrabstractdeclarator();
                                }
                                break;
                        }
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
    noptrabstractdeclarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new NoptrabstractdeclaratorContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 262;
        this.enterRecursionRule(_localctx, 262, CPP14Parser.RULE_noptrabstractdeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1795;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
                    case 1:
                        {
                            this.state = 1782;
                            this.parametersandqualifiers();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1783;
                            this.match(CPP14Parser.LeftBracket);
                            this.state = 1785;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                {
                                    this.state = 1784;
                                    this.constantexpression();
                                }
                            }
                            this.state = 1787;
                            this.match(CPP14Parser.RightBracket);
                            this.state = 1789;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1788;
                                        this.attributespecifierseq(0);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 1791;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 1792;
                            this.ptrabstractdeclarator();
                            this.state = 1793;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1810;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 1808;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 202, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
                                        this.state = 1797;
                                        if (!(this.precpred(this._ctx, 5)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        this.state = 1798;
                                        this.parametersandqualifiers();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
                                        this.state = 1799;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 1800;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 1802;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                            {
                                                this.state = 1801;
                                                this.constantexpression();
                                            }
                                        }
                                        this.state = 1804;
                                        this.match(CPP14Parser.RightBracket);
                                        this.state = 1806;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 201, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1805;
                                                    this.attributespecifierseq(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1812;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
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
    abstractpackdeclarator() {
        let _localctx = new AbstractpackdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, CPP14Parser.RULE_abstractpackdeclarator);
        try {
            this.state = 1817;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Ellipsis:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1813;
                        this.noptrabstractpackdeclarator(0);
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1814;
                        this.ptroperator();
                        this.state = 1815;
                        this.abstractpackdeclarator();
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
    noptrabstractpackdeclarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new NoptrabstractpackdeclaratorContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 266;
        this.enterRecursionRule(_localctx, 266, CPP14Parser.RULE_noptrabstractpackdeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1820;
                    this.match(CPP14Parser.Ellipsis);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1835;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 1833;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
                                        this.state = 1822;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 1823;
                                        this.parametersandqualifiers();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
                                        this.state = 1824;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 1825;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 1827;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                                            {
                                                this.state = 1826;
                                                this.constantexpression();
                                            }
                                        }
                                        this.state = 1829;
                                        this.match(CPP14Parser.RightBracket);
                                        this.state = 1831;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1830;
                                                    this.attributespecifierseq(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1837;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
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
    parameterdeclarationclause() {
        let _localctx = new ParameterdeclarationclauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, CPP14Parser.RULE_parameterdeclarationclause);
        let _la;
        try {
            this.state = 1848;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 211, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1839;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
                            {
                                this.state = 1838;
                                this.parameterdeclarationlist(0);
                            }
                        }
                        this.state = 1842;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Ellipsis) {
                            {
                                this.state = 1841;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1844;
                        this.parameterdeclarationlist(0);
                        this.state = 1845;
                        this.match(CPP14Parser.Comma);
                        this.state = 1846;
                        this.match(CPP14Parser.Ellipsis);
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
    parameterdeclarationlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ParameterdeclarationlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 270;
        this.enterRecursionRule(_localctx, 270, CPP14Parser.RULE_parameterdeclarationlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1851;
                    this.parameterdeclaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1858;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ParameterdeclarationlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_parameterdeclarationlist);
                                this.state = 1853;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1854;
                                this.match(CPP14Parser.Comma);
                                this.state = 1855;
                                this.parameterdeclaration();
                            }
                        }
                    }
                    this.state = 1860;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
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
    parameterdeclaration() {
        let _localctx = new ParameterdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, CPP14Parser.RULE_parameterdeclaration);
        let _la;
        try {
            this.state = 1892;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1862;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1861;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1864;
                        this.declspecifierseq();
                        this.state = 1865;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1868;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1867;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1870;
                        this.declspecifierseq();
                        this.state = 1871;
                        this.declarator();
                        this.state = 1872;
                        this.match(CPP14Parser.Assign);
                        this.state = 1873;
                        this.initializerclause();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1876;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1875;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1878;
                        this.declspecifierseq();
                        this.state = 1880;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1879;
                                    this.abstractdeclarator();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1882;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1885;
                        this.declspecifierseq();
                        this.state = 1887;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Decltype || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 1886;
                                this.abstractdeclarator();
                            }
                        }
                        this.state = 1889;
                        this.match(CPP14Parser.Assign);
                        this.state = 1890;
                        this.initializerclause();
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
    functiondefinition() {
        let _localctx = new FunctiondefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, CPP14Parser.RULE_functiondefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1895;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                    {
                        this.state = 1894;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1898;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 221, this._ctx)) {
                    case 1:
                        {
                            this.state = 1897;
                            this.declspecifierseq();
                        }
                        break;
                }
                this.state = 1900;
                this.declarator();
                this.state = 1902;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
                    {
                        this.state = 1901;
                        this.virtspecifierseq(0);
                    }
                }
                this.state = 1904;
                this.functionbody();
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
    functionbody() {
        let _localctx = new FunctionbodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, CPP14Parser.RULE_functionbody);
        let _la;
        try {
            this.state = 1917;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 224, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1907;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Colon) {
                            {
                                this.state = 1906;
                                this.ctorinitializer();
                            }
                        }
                        this.state = 1909;
                        this.compoundstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1910;
                        this.functiontryblock();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1911;
                        this.match(CPP14Parser.Assign);
                        this.state = 1912;
                        this.match(CPP14Parser.Default);
                        this.state = 1913;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1914;
                        this.match(CPP14Parser.Assign);
                        this.state = 1915;
                        this.match(CPP14Parser.Delete);
                        this.state = 1916;
                        this.match(CPP14Parser.Semi);
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
    initializer() {
        let _localctx = new InitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, CPP14Parser.RULE_initializer);
        try {
            this.state = 1924;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftBrace:
                case CPP14Parser.Assign:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1919;
                        this.braceorequalinitializer();
                    }
                    break;
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1920;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1921;
                        this.expressionlist();
                        this.state = 1922;
                        this.match(CPP14Parser.RightParen);
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
    braceorequalinitializer() {
        let _localctx = new BraceorequalinitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, CPP14Parser.RULE_braceorequalinitializer);
        try {
            this.state = 1929;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Assign:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1926;
                        this.match(CPP14Parser.Assign);
                        this.state = 1927;
                        this.initializerclause();
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1928;
                        this.bracedinitlist();
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
    initializerclause() {
        let _localctx = new InitializerclauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, CPP14Parser.RULE_initializerclause);
        try {
            this.state = 1933;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Alignof:
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Const_cast:
                case CPP14Parser.Decltype:
                case CPP14Parser.Delete:
                case CPP14Parser.Double:
                case CPP14Parser.Dynamic_cast:
                case CPP14Parser.False:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.New:
                case CPP14Parser.Noexcept:
                case CPP14Parser.Nullptr:
                case CPP14Parser.Operator:
                case CPP14Parser.Reinterpret_cast:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Sizeof:
                case CPP14Parser.Static_cast:
                case CPP14Parser.This:
                case CPP14Parser.Throw:
                case CPP14Parser.True:
                case CPP14Parser.Typeid:
                case CPP14Parser.Typename:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                case CPP14Parser.Plus:
                case CPP14Parser.Minus:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Or:
                case CPP14Parser.Tilde:
                case CPP14Parser.Not:
                case CPP14Parser.PlusPlus:
                case CPP14Parser.MinusMinus:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                case CPP14Parser.Integerliteral:
                case CPP14Parser.Characterliteral:
                case CPP14Parser.Floatingliteral:
                case CPP14Parser.Stringliteral:
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1931;
                        this.assignmentexpression();
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1932;
                        this.bracedinitlist();
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
    initializerlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new InitializerlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 284;
        this.enterRecursionRule(_localctx, 284, CPP14Parser.RULE_initializerlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1936;
                    this.initializerclause();
                    this.state = 1938;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 228, this._ctx)) {
                        case 1:
                            {
                                this.state = 1937;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1948;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InitializerlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_initializerlist);
                                this.state = 1940;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 1941;
                                this.match(CPP14Parser.Comma);
                                this.state = 1942;
                                this.initializerclause();
                                this.state = 1944;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 229, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1943;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 1950;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
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
    bracedinitlist() {
        let _localctx = new BracedinitlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, CPP14Parser.RULE_bracedinitlist);
        let _la;
        try {
            this.state = 1960;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 232, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1951;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1952;
                        this.initializerlist(0);
                        this.state = 1954;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Comma) {
                            {
                                this.state = 1953;
                                this.match(CPP14Parser.Comma);
                            }
                        }
                        this.state = 1956;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1958;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1959;
                        this.match(CPP14Parser.RightBrace);
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
    classname() {
        let _localctx = new ClassnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, CPP14Parser.RULE_classname);
        try {
            this.state = 1964;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 233, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1962;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1963;
                        this.simpletemplateid();
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
    classspecifier() {
        let _localctx = new ClassspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, CPP14Parser.RULE_classspecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1966;
                this.classhead();
                this.state = 1967;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                    {
                        this.state = 1968;
                        this.memberspecification();
                    }
                }
                this.state = 1971;
                this.match(CPP14Parser.RightBrace);
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
    classhead() {
        let _localctx = new ClassheadContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, CPP14Parser.RULE_classhead);
        let _la;
        try {
            this.state = 1991;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 240, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1973;
                        this.classkey();
                        this.state = 1975;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1974;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1977;
                        this.classheadname();
                        this.state = 1979;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Final) {
                            {
                                this.state = 1978;
                                this.classvirtspecifier();
                            }
                        }
                        this.state = 1982;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Colon) {
                            {
                                this.state = 1981;
                                this.baseclause();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1984;
                        this.classkey();
                        this.state = 1986;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 1985;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1989;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Colon) {
                            {
                                this.state = 1988;
                                this.baseclause();
                            }
                        }
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
    classheadname() {
        let _localctx = new ClassheadnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, CPP14Parser.RULE_classheadname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1994;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 241, this._ctx)) {
                    case 1:
                        {
                            this.state = 1993;
                            this.nestednamespecifier(0);
                        }
                        break;
                }
                this.state = 1996;
                this.classname();
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
    classvirtspecifier() {
        let _localctx = new ClassvirtspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 296, CPP14Parser.RULE_classvirtspecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1998;
                this.match(CPP14Parser.Final);
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
    classkey() {
        let _localctx = new ClasskeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 298, CPP14Parser.RULE_classkey);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2000;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.Class || _la === CPP14Parser.Struct || _la === CPP14Parser.Union)) {
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
    memberspecification() {
        let _localctx = new MemberspecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 300, CPP14Parser.RULE_memberspecification);
        let _la;
        try {
            this.state = 2011;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Alignas:
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Class:
                case CPP14Parser.Const:
                case CPP14Parser.Constexpr:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Enum:
                case CPP14Parser.Explicit:
                case CPP14Parser.Extern:
                case CPP14Parser.Float:
                case CPP14Parser.Friend:
                case CPP14Parser.Inline:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Mutable:
                case CPP14Parser.Operator:
                case CPP14Parser.Register:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Static:
                case CPP14Parser.Static_assert:
                case CPP14Parser.Struct:
                case CPP14Parser.Template:
                case CPP14Parser.Thread_local:
                case CPP14Parser.Typedef:
                case CPP14Parser.Typename:
                case CPP14Parser.Union:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Using:
                case CPP14Parser.Virtual:
                case CPP14Parser.Void:
                case CPP14Parser.Volatile:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Tilde:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Colon:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Semi:
                case CPP14Parser.Ellipsis:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2002;
                        this.memberdeclaration();
                        this.state = 2004;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 2003;
                                this.memberspecification();
                            }
                        }
                    }
                    break;
                case CPP14Parser.Private:
                case CPP14Parser.Protected:
                case CPP14Parser.Public:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2006;
                        this.accessspecifier();
                        this.state = 2007;
                        this.match(CPP14Parser.Colon);
                        this.state = 2009;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 2008;
                                this.memberspecification();
                            }
                        }
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
    memberdeclaration() {
        let _localctx = new MemberdeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 302, CPP14Parser.RULE_memberdeclaration);
        let _la;
        try {
            this.state = 2029;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 248, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2014;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 245, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2013;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 2017;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 246, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2016;
                                    this.declspecifierseq();
                                }
                                break;
                        }
                        this.state = 2020;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)) | (1 << (CPP14Parser.Tilde - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 2019;
                                this.memberdeclaratorlist(0);
                            }
                        }
                        this.state = 2022;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2023;
                        this.functiondefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2024;
                        this.usingdeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2025;
                        this.static_assertdeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2026;
                        this.templatedeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2027;
                        this.aliasdeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 2028;
                        this.emptydeclaration();
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
    memberdeclaratorlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new MemberdeclaratorlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 304;
        this.enterRecursionRule(_localctx, 304, CPP14Parser.RULE_memberdeclaratorlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 2032;
                    this.memberdeclarator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 2039;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new MemberdeclaratorlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_memberdeclaratorlist);
                                this.state = 2034;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 2035;
                                this.match(CPP14Parser.Comma);
                                this.state = 2036;
                                this.memberdeclarator();
                            }
                        }
                    }
                    this.state = 2041;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
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
    memberdeclarator() {
        let _localctx = new MemberdeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 306, CPP14Parser.RULE_memberdeclarator);
        let _la;
        try {
            this.state = 2061;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 255, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2042;
                        this.declarator();
                        this.state = 2044;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 250, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2043;
                                    this.virtspecifierseq(0);
                                }
                                break;
                        }
                        this.state = 2047;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 251, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2046;
                                    this.purespecifier();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2049;
                        this.declarator();
                        this.state = 2051;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 252, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2050;
                                    this.braceorequalinitializer();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2054;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Identifier) {
                            {
                                this.state = 2053;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2057;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 2056;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2059;
                        this.match(CPP14Parser.Colon);
                        this.state = 2060;
                        this.constantexpression();
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
    virtspecifierseq(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new VirtspecifierseqContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 308;
        this.enterRecursionRule(_localctx, 308, CPP14Parser.RULE_virtspecifierseq, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 2064;
                    this.virtspecifier();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 2070;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new VirtspecifierseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_virtspecifierseq);
                                this.state = 2066;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 2067;
                                this.virtspecifier();
                            }
                        }
                    }
                    this.state = 2072;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
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
    virtspecifier() {
        let _localctx = new VirtspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 310, CPP14Parser.RULE_virtspecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2073;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.Final || _la === CPP14Parser.Override)) {
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
    purespecifier() {
        let _localctx = new PurespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 312, CPP14Parser.RULE_purespecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2075;
                this.match(CPP14Parser.Assign);
                this.state = 2076;
                _localctx._val = this.match(CPP14Parser.Octalliteral);
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
    baseclause() {
        let _localctx = new BaseclauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 314, CPP14Parser.RULE_baseclause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2078;
                this.match(CPP14Parser.Colon);
                this.state = 2079;
                this.basespecifierlist(0);
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
    basespecifierlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new BasespecifierlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 316;
        this.enterRecursionRule(_localctx, 316, CPP14Parser.RULE_basespecifierlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 2082;
                    this.basespecifier();
                    this.state = 2084;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 257, this._ctx)) {
                        case 1:
                            {
                                this.state = 2083;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 2094;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BasespecifierlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_basespecifierlist);
                                this.state = 2086;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 2087;
                                this.match(CPP14Parser.Comma);
                                this.state = 2088;
                                this.basespecifier();
                                this.state = 2090;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 258, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 2089;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 2096;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
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
    basespecifier() {
        let _localctx = new BasespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 318, CPP14Parser.RULE_basespecifier);
        let _la;
        try {
            this.state = 2118;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 265, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2098;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 2097;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2100;
                        this.basetypespecifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2102;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 2101;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2104;
                        this.match(CPP14Parser.Virtual);
                        this.state = 2106;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CPP14Parser.Private - 47)) | (1 << (CPP14Parser.Protected - 47)) | (1 << (CPP14Parser.Public - 47)))) !== 0)) {
                            {
                                this.state = 2105;
                                this.accessspecifier();
                            }
                        }
                        this.state = 2108;
                        this.basetypespecifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2110;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 2109;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2112;
                        this.accessspecifier();
                        this.state = 2114;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Virtual) {
                            {
                                this.state = 2113;
                                this.match(CPP14Parser.Virtual);
                            }
                        }
                        this.state = 2116;
                        this.basetypespecifier();
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
    classordecltype() {
        let _localctx = new ClassordecltypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 320, CPP14Parser.RULE_classordecltype);
        try {
            this.state = 2125;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 267, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2121;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 266, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2120;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 2123;
                        this.classname();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2124;
                        this.decltypespecifier();
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
    basetypespecifier() {
        let _localctx = new BasetypespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 322, CPP14Parser.RULE_basetypespecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2127;
                this.classordecltype();
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
    accessspecifier() {
        let _localctx = new AccessspecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 324, CPP14Parser.RULE_accessspecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2129;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CPP14Parser.Private - 47)) | (1 << (CPP14Parser.Protected - 47)) | (1 << (CPP14Parser.Public - 47)))) !== 0))) {
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
    conversionfunctionid() {
        let _localctx = new ConversionfunctionidContext(this._ctx, this.state);
        this.enterRule(_localctx, 326, CPP14Parser.RULE_conversionfunctionid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2131;
                this.match(CPP14Parser.Operator);
                this.state = 2132;
                this.conversiontypeid();
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
    conversiontypeid() {
        let _localctx = new ConversiontypeidContext(this._ctx, this.state);
        this.enterRule(_localctx, 328, CPP14Parser.RULE_conversiontypeid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2134;
                this.typespecifierseq();
                this.state = 2136;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 268, this._ctx)) {
                    case 1:
                        {
                            this.state = 2135;
                            this.conversiondeclarator();
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
    conversiondeclarator() {
        let _localctx = new ConversiondeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 330, CPP14Parser.RULE_conversiondeclarator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2138;
                this.ptroperator();
                this.state = 2140;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 269, this._ctx)) {
                    case 1:
                        {
                            this.state = 2139;
                            this.conversiondeclarator();
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
    ctorinitializer() {
        let _localctx = new CtorinitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 332, CPP14Parser.RULE_ctorinitializer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2142;
                this.match(CPP14Parser.Colon);
                this.state = 2143;
                this.meminitializerlist();
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
    meminitializerlist() {
        let _localctx = new MeminitializerlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 334, CPP14Parser.RULE_meminitializerlist);
        let _la;
        try {
            this.state = 2156;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 272, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2145;
                        this.meminitializer();
                        this.state = 2147;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Ellipsis) {
                            {
                                this.state = 2146;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2149;
                        this.meminitializer();
                        this.state = 2151;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Ellipsis) {
                            {
                                this.state = 2150;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                        this.state = 2153;
                        this.match(CPP14Parser.Comma);
                        this.state = 2154;
                        this.meminitializerlist();
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
    meminitializer() {
        let _localctx = new MeminitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 336, CPP14Parser.RULE_meminitializer);
        let _la;
        try {
            this.state = 2168;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 274, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2158;
                        this.meminitializerid();
                        this.state = 2159;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 2161;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 2160;
                                this.expressionlist();
                            }
                        }
                        this.state = 2163;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2165;
                        this.meminitializerid();
                        this.state = 2166;
                        this.bracedinitlist();
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
    meminitializerid() {
        let _localctx = new MeminitializeridContext(this._ctx, this.state);
        this.enterRule(_localctx, 338, CPP14Parser.RULE_meminitializerid);
        try {
            this.state = 2172;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 275, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2170;
                        this.classordecltype();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2171;
                        this.match(CPP14Parser.Identifier);
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
    operatorfunctionid() {
        let _localctx = new OperatorfunctionidContext(this._ctx, this.state);
        this.enterRule(_localctx, 340, CPP14Parser.RULE_operatorfunctionid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2174;
                this.match(CPP14Parser.Operator);
                this.state = 2175;
                this.theoperator();
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
    literaloperatorid() {
        let _localctx = new LiteraloperatoridContext(this._ctx, this.state);
        this.enterRule(_localctx, 342, CPP14Parser.RULE_literaloperatorid);
        try {
            this.state = 2182;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 276, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2177;
                        this.match(CPP14Parser.Operator);
                        this.state = 2178;
                        this.match(CPP14Parser.Stringliteral);
                        this.state = 2179;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2180;
                        this.match(CPP14Parser.Operator);
                        this.state = 2181;
                        this.match(CPP14Parser.Userdefinedstringliteral);
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
    templatedeclaration() {
        let _localctx = new TemplatedeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 344, CPP14Parser.RULE_templatedeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2184;
                this.match(CPP14Parser.Template);
                this.state = 2185;
                this.match(CPP14Parser.Less);
                this.state = 2186;
                this.templateparameterlist(0);
                this.state = 2187;
                this.match(CPP14Parser.Greater);
                this.state = 2188;
                this.declaration();
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
    templateparameterlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TemplateparameterlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 346;
        this.enterRecursionRule(_localctx, 346, CPP14Parser.RULE_templateparameterlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 2191;
                    this.templateparameter();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 2198;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TemplateparameterlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateparameterlist);
                                this.state = 2193;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 2194;
                                this.match(CPP14Parser.Comma);
                                this.state = 2195;
                                this.templateparameter();
                            }
                        }
                    }
                    this.state = 2200;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
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
    templateparameter() {
        let _localctx = new TemplateparameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 348, CPP14Parser.RULE_templateparameter);
        try {
            this.state = 2203;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 278, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2201;
                        this.typeparameter();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2202;
                        this.parameterdeclaration();
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
    typeparameter() {
        let _localctx = new TypeparameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 350, CPP14Parser.RULE_typeparameter);
        let _la;
        try {
            this.state = 2253;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 288, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2205;
                        this.match(CPP14Parser.Class);
                        this.state = 2207;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 279, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2206;
                                    this.match(CPP14Parser.Ellipsis);
                                }
                                break;
                        }
                        this.state = 2210;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 280, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2209;
                                    this.match(CPP14Parser.Identifier);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2212;
                        this.match(CPP14Parser.Class);
                        this.state = 2214;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Identifier) {
                            {
                                this.state = 2213;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2216;
                        this.match(CPP14Parser.Assign);
                        this.state = 2217;
                        this.thetypeid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2218;
                        this.match(CPP14Parser.Typename);
                        this.state = 2220;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 282, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2219;
                                    this.match(CPP14Parser.Ellipsis);
                                }
                                break;
                        }
                        this.state = 2223;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 283, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2222;
                                    this.match(CPP14Parser.Identifier);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2225;
                        this.match(CPP14Parser.Typename);
                        this.state = 2227;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Identifier) {
                            {
                                this.state = 2226;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2229;
                        this.match(CPP14Parser.Assign);
                        this.state = 2230;
                        this.thetypeid();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2231;
                        this.match(CPP14Parser.Template);
                        this.state = 2232;
                        this.match(CPP14Parser.Less);
                        this.state = 2233;
                        this.templateparameterlist(0);
                        this.state = 2234;
                        this.match(CPP14Parser.Greater);
                        this.state = 2235;
                        this.match(CPP14Parser.Class);
                        this.state = 2237;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 285, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2236;
                                    this.match(CPP14Parser.Ellipsis);
                                }
                                break;
                        }
                        this.state = 2240;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 286, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2239;
                                    this.match(CPP14Parser.Identifier);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2242;
                        this.match(CPP14Parser.Template);
                        this.state = 2243;
                        this.match(CPP14Parser.Less);
                        this.state = 2244;
                        this.templateparameterlist(0);
                        this.state = 2245;
                        this.match(CPP14Parser.Greater);
                        this.state = 2246;
                        this.match(CPP14Parser.Class);
                        this.state = 2248;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Identifier) {
                            {
                                this.state = 2247;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2250;
                        this.match(CPP14Parser.Assign);
                        this.state = 2251;
                        this.idexpression();
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
    simpletemplateid() {
        let _localctx = new SimpletemplateidContext(this._ctx, this.state);
        this.enterRule(_localctx, 352, CPP14Parser.RULE_simpletemplateid);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2255;
                this.templatename();
                this.state = 2256;
                this.match(CPP14Parser.Less);
                this.state = 2258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                    {
                        this.state = 2257;
                        this.templateargumentlist(0);
                    }
                }
                this.state = 2260;
                this.match(CPP14Parser.Greater);
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
    templateid() {
        let _localctx = new TemplateidContext(this._ctx, this.state);
        this.enterRule(_localctx, 354, CPP14Parser.RULE_templateid);
        let _la;
        try {
            this.state = 2277;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 292, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2262;
                        this.simpletemplateid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2263;
                        this.operatorfunctionid();
                        this.state = 2264;
                        this.match(CPP14Parser.Less);
                        this.state = 2266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 2265;
                                this.templateargumentlist(0);
                            }
                        }
                        this.state = 2268;
                        this.match(CPP14Parser.Greater);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2270;
                        this.literaloperatorid();
                        this.state = 2271;
                        this.match(CPP14Parser.Less);
                        this.state = 2273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
                            {
                                this.state = 2272;
                                this.templateargumentlist(0);
                            }
                        }
                        this.state = 2275;
                        this.match(CPP14Parser.Greater);
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
    templatename() {
        let _localctx = new TemplatenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 356, CPP14Parser.RULE_templatename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2279;
                this.match(CPP14Parser.Identifier);
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
    templateargumentlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TemplateargumentlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 358;
        this.enterRecursionRule(_localctx, 358, CPP14Parser.RULE_templateargumentlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 2282;
                    this.templateargument();
                    this.state = 2284;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 293, this._ctx)) {
                        case 1:
                            {
                                this.state = 2283;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 2294;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TemplateargumentlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateargumentlist);
                                this.state = 2286;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 2287;
                                this.match(CPP14Parser.Comma);
                                this.state = 2288;
                                this.templateargument();
                                this.state = 2290;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 294, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 2289;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 2296;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
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
    templateargument() {
        let _localctx = new TemplateargumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 360, CPP14Parser.RULE_templateargument);
        try {
            this.state = 2300;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 296, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2297;
                        this.thetypeid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2298;
                        this.constantexpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2299;
                        this.idexpression();
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
    typenamespecifier() {
        let _localctx = new TypenamespecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 362, CPP14Parser.RULE_typenamespecifier);
        let _la;
        try {
            this.state = 2313;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 298, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2302;
                        this.match(CPP14Parser.Typename);
                        this.state = 2303;
                        this.nestednamespecifier(0);
                        this.state = 2304;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2306;
                        this.match(CPP14Parser.Typename);
                        this.state = 2307;
                        this.nestednamespecifier(0);
                        this.state = 2309;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Template) {
                            {
                                this.state = 2308;
                                this.match(CPP14Parser.Template);
                            }
                        }
                        this.state = 2311;
                        this.simpletemplateid();
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
    explicitinstantiation() {
        let _localctx = new ExplicitinstantiationContext(this._ctx, this.state);
        this.enterRule(_localctx, 364, CPP14Parser.RULE_explicitinstantiation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Extern) {
                    {
                        this.state = 2315;
                        this.match(CPP14Parser.Extern);
                    }
                }
                this.state = 2318;
                this.match(CPP14Parser.Template);
                this.state = 2319;
                this.declaration();
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
    explicitspecialization() {
        let _localctx = new ExplicitspecializationContext(this._ctx, this.state);
        this.enterRule(_localctx, 366, CPP14Parser.RULE_explicitspecialization);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2321;
                this.match(CPP14Parser.Template);
                this.state = 2322;
                this.match(CPP14Parser.Less);
                this.state = 2323;
                this.match(CPP14Parser.Greater);
                this.state = 2324;
                this.declaration();
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
    tryblock() {
        let _localctx = new TryblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 368, CPP14Parser.RULE_tryblock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2326;
                this.match(CPP14Parser.Try);
                this.state = 2327;
                this.compoundstatement();
                this.state = 2328;
                this.handlerseq();
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
    functiontryblock() {
        let _localctx = new FunctiontryblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 370, CPP14Parser.RULE_functiontryblock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2330;
                this.match(CPP14Parser.Try);
                this.state = 2332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CPP14Parser.Colon) {
                    {
                        this.state = 2331;
                        this.ctorinitializer();
                    }
                }
                this.state = 2334;
                this.compoundstatement();
                this.state = 2335;
                this.handlerseq();
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
    handlerseq() {
        let _localctx = new HandlerseqContext(this._ctx, this.state);
        this.enterRule(_localctx, 372, CPP14Parser.RULE_handlerseq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2337;
                this.handler();
                this.state = 2339;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 301, this._ctx)) {
                    case 1:
                        {
                            this.state = 2338;
                            this.handlerseq();
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
    handler() {
        let _localctx = new HandlerContext(this._ctx, this.state);
        this.enterRule(_localctx, 374, CPP14Parser.RULE_handler);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2341;
                this.match(CPP14Parser.Catch);
                this.state = 2342;
                this.match(CPP14Parser.LeftParen);
                this.state = 2343;
                this.exceptiondeclaration();
                this.state = 2344;
                this.match(CPP14Parser.RightParen);
                this.state = 2345;
                this.compoundstatement();
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
    exceptiondeclaration() {
        let _localctx = new ExceptiondeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 376, CPP14Parser.RULE_exceptiondeclaration);
        let _la;
        try {
            this.state = 2361;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 305, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2348;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 2347;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2350;
                        this.typespecifierseq();
                        this.state = 2351;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
                            {
                                this.state = 2353;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2356;
                        this.typespecifierseq();
                        this.state = 2358;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CPP14Parser.Decltype || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
                            {
                                this.state = 2357;
                                this.abstractdeclarator();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2360;
                        this.match(CPP14Parser.Ellipsis);
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
    throwexpression() {
        let _localctx = new ThrowexpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 378, CPP14Parser.RULE_throwexpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2363;
                this.match(CPP14Parser.Throw);
                this.state = 2365;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 306, this._ctx)) {
                    case 1:
                        {
                            this.state = 2364;
                            this.assignmentexpression();
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
    exceptionspecification() {
        let _localctx = new ExceptionspecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 380, CPP14Parser.RULE_exceptionspecification);
        try {
            this.state = 2369;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Throw:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2367;
                        this.dynamicexceptionspecification();
                    }
                    break;
                case CPP14Parser.Noexcept:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2368;
                        this.noexceptspecification();
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
    dynamicexceptionspecification() {
        let _localctx = new DynamicexceptionspecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 382, CPP14Parser.RULE_dynamicexceptionspecification);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2371;
                this.match(CPP14Parser.Throw);
                this.state = 2372;
                this.match(CPP14Parser.LeftParen);
                this.state = 2374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Struct - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (CPP14Parser.Typename - 69)) | (1 << (CPP14Parser.Union - 69)) | (1 << (CPP14Parser.Unsigned - 69)) | (1 << (CPP14Parser.Void - 69)) | (1 << (CPP14Parser.Volatile - 69)) | (1 << (CPP14Parser.Wchar - 69)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
                    {
                        this.state = 2373;
                        this.typeidlist(0);
                    }
                }
                this.state = 2376;
                this.match(CPP14Parser.RightParen);
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
    typeidlist(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypeidlistContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 384;
        this.enterRecursionRule(_localctx, 384, CPP14Parser.RULE_typeidlist, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 2379;
                    this.thetypeid();
                    this.state = 2381;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 309, this._ctx)) {
                        case 1:
                            {
                                this.state = 2380;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 2391;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeidlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_typeidlist);
                                this.state = 2383;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 2384;
                                this.match(CPP14Parser.Comma);
                                this.state = 2385;
                                this.thetypeid();
                                this.state = 2387;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 310, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 2386;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 2393;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
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
    noexceptspecification() {
        let _localctx = new NoexceptspecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 386, CPP14Parser.RULE_noexceptspecification);
        try {
            this.state = 2400;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 312, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2394;
                        this.match(CPP14Parser.Noexcept);
                        this.state = 2395;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 2396;
                        this.constantexpression();
                        this.state = 2397;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2399;
                        this.match(CPP14Parser.Noexcept);
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
    rightShift() {
        let _localctx = new RightShiftContext(this._ctx, this.state);
        this.enterRule(_localctx, 388, CPP14Parser.RULE_rightShift);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2402;
                this.match(CPP14Parser.Greater);
                this.state = 2403;
                this.match(CPP14Parser.Greater);
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
    rightShiftAssign() {
        let _localctx = new RightShiftAssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 390, CPP14Parser.RULE_rightShiftAssign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2405;
                this.match(CPP14Parser.Greater);
                this.state = 2406;
                this.match(CPP14Parser.Greater);
                this.state = 2407;
                this.match(CPP14Parser.Assign);
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
    theoperator() {
        let _localctx = new TheoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 392, CPP14Parser.RULE_theoperator);
        try {
            this.state = 2457;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 313, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2409;
                        this.match(CPP14Parser.New);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2410;
                        this.match(CPP14Parser.Delete);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2411;
                        this.match(CPP14Parser.New);
                        this.state = 2412;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 2413;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2414;
                        this.match(CPP14Parser.Delete);
                        this.state = 2415;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 2416;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2417;
                        this.match(CPP14Parser.Plus);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2418;
                        this.match(CPP14Parser.Minus);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 2419;
                        this.match(CPP14Parser.Star);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 2420;
                        this.match(CPP14Parser.Div);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 2421;
                        this.match(CPP14Parser.Mod);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 2422;
                        this.match(CPP14Parser.Caret);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 2423;
                        this.match(CPP14Parser.And);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 2424;
                        this.match(CPP14Parser.Or);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 2425;
                        this.match(CPP14Parser.Tilde);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 2426;
                        this.match(CPP14Parser.Not);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 2427;
                        this.match(CPP14Parser.Assign);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 2428;
                        this.match(CPP14Parser.Less);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 2429;
                        this.match(CPP14Parser.Greater);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 2430;
                        this.match(CPP14Parser.PlusAssign);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 2431;
                        this.match(CPP14Parser.MinusAssign);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 2432;
                        this.match(CPP14Parser.StarAssign);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 2433;
                        this.match(CPP14Parser.DivAssign);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 2434;
                        this.match(CPP14Parser.ModAssign);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 2435;
                        this.match(CPP14Parser.XorAssign);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 2436;
                        this.match(CPP14Parser.AndAssign);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 2437;
                        this.match(CPP14Parser.OrAssign);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 2438;
                        this.match(CPP14Parser.LeftShift);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 2439;
                        this.rightShift();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 2440;
                        this.rightShiftAssign();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 2441;
                        this.match(CPP14Parser.LeftShiftAssign);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 2442;
                        this.match(CPP14Parser.Equal);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 2443;
                        this.match(CPP14Parser.NotEqual);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 2444;
                        this.match(CPP14Parser.LessEqual);
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 2445;
                        this.match(CPP14Parser.GreaterEqual);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 2446;
                        this.match(CPP14Parser.AndAnd);
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 2447;
                        this.match(CPP14Parser.OrOr);
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 2448;
                        this.match(CPP14Parser.PlusPlus);
                    }
                    break;
                case 37:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 2449;
                        this.match(CPP14Parser.MinusMinus);
                    }
                    break;
                case 38:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 2450;
                        this.match(CPP14Parser.Comma);
                    }
                    break;
                case 39:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 2451;
                        this.match(CPP14Parser.ArrowStar);
                    }
                    break;
                case 40:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 2452;
                        this.match(CPP14Parser.Arrow);
                    }
                    break;
                case 41:
                    this.enterOuterAlt(_localctx, 41);
                    {
                        this.state = 2453;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 2454;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(_localctx, 42);
                    {
                        this.state = 2455;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 2456;
                        this.match(CPP14Parser.RightBracket);
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
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 394, CPP14Parser.RULE_literal);
        try {
            this.state = 2466;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Integerliteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2459;
                        this.match(CPP14Parser.Integerliteral);
                    }
                    break;
                case CPP14Parser.Characterliteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2460;
                        this.match(CPP14Parser.Characterliteral);
                    }
                    break;
                case CPP14Parser.Floatingliteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2461;
                        this.match(CPP14Parser.Floatingliteral);
                    }
                    break;
                case CPP14Parser.Stringliteral:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2462;
                        this.match(CPP14Parser.Stringliteral);
                    }
                    break;
                case CPP14Parser.False:
                case CPP14Parser.True:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2463;
                        this.booleanliteral();
                    }
                    break;
                case CPP14Parser.Nullptr:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2464;
                        this.pointerliteral();
                    }
                    break;
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 2465;
                        this.userdefinedliteral();
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
    booleanliteral() {
        let _localctx = new BooleanliteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 396, CPP14Parser.RULE_booleanliteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2468;
                _la = this._input.LA(1);
                if (!(_la === CPP14Parser.False || _la === CPP14Parser.True)) {
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
    pointerliteral() {
        let _localctx = new PointerliteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 398, CPP14Parser.RULE_pointerliteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2470;
                this.match(CPP14Parser.Nullptr);
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
    userdefinedliteral() {
        let _localctx = new UserdefinedliteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 400, CPP14Parser.RULE_userdefinedliteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2472;
                _la = this._input.LA(1);
                if (!(((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Userdefinedintegerliteral - 135)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 135)) | (1 << (CPP14Parser.Userdefinedstringliteral - 135)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 135)))) !== 0))) {
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
            case 5:
                return this.nestednamespecifier_sempred(_localctx, predIndex);
            case 10:
                return this.capturelist_sempred(_localctx, predIndex);
            case 15:
                return this.postfixexpression_sempred(_localctx, predIndex);
            case 26:
                return this.noptrnewdeclarator_sempred(_localctx, predIndex);
            case 31:
                return this.pmexpression_sempred(_localctx, predIndex);
            case 32:
                return this.multiplicativeexpression_sempred(_localctx, predIndex);
            case 33:
                return this.additiveexpression_sempred(_localctx, predIndex);
            case 34:
                return this.shiftexpression_sempred(_localctx, predIndex);
            case 35:
                return this.relationalexpression_sempred(_localctx, predIndex);
            case 36:
                return this.equalityexpression_sempred(_localctx, predIndex);
            case 37:
                return this.andexpression_sempred(_localctx, predIndex);
            case 38:
                return this.exclusiveorexpression_sempred(_localctx, predIndex);
            case 39:
                return this.inclusiveorexpression_sempred(_localctx, predIndex);
            case 40:
                return this.logicalandexpression_sempred(_localctx, predIndex);
            case 41:
                return this.logicalorexpression_sempred(_localctx, predIndex);
            case 45:
                return this.expression_sempred(_localctx, predIndex);
            case 51:
                return this.statementseq_sempred(_localctx, predIndex);
            case 60:
                return this.declarationseq_sempred(_localctx, predIndex);
            case 87:
                return this.enumeratorlist_sempred(_localctx, predIndex);
            case 105:
                return this.attributespecifierseq_sempred(_localctx, predIndex);
            case 108:
                return this.attributelist_sempred(_localctx, predIndex);
            case 114:
                return this.balancedtokenseq_sempred(_localctx, predIndex);
            case 116:
                return this.initdeclaratorlist_sempred(_localctx, predIndex);
            case 120:
                return this.noptrdeclarator_sempred(_localctx, predIndex);
            case 131:
                return this.noptrabstractdeclarator_sempred(_localctx, predIndex);
            case 133:
                return this.noptrabstractpackdeclarator_sempred(_localctx, predIndex);
            case 135:
                return this.parameterdeclarationlist_sempred(_localctx, predIndex);
            case 142:
                return this.initializerlist_sempred(_localctx, predIndex);
            case 152:
                return this.memberdeclaratorlist_sempred(_localctx, predIndex);
            case 154:
                return this.virtspecifierseq_sempred(_localctx, predIndex);
            case 158:
                return this.basespecifierlist_sempred(_localctx, predIndex);
            case 173:
                return this.templateparameterlist_sempred(_localctx, predIndex);
            case 179:
                return this.templateargumentlist_sempred(_localctx, predIndex);
            case 192:
                return this.typeidlist_sempred(_localctx, predIndex);
        }
        return true;
    }
    nestednamespecifier_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    capturelist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    postfixexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 19);
            case 4:
                return this.precpred(this._ctx, 18);
            case 5:
                return this.precpred(this._ctx, 17);
            case 6:
                return this.precpred(this._ctx, 12);
            case 7:
                return this.precpred(this._ctx, 11);
            case 8:
                return this.precpred(this._ctx, 10);
            case 9:
                return this.precpred(this._ctx, 9);
            case 10:
                return this.precpred(this._ctx, 8);
            case 11:
                return this.precpred(this._ctx, 7);
        }
        return true;
    }
    noptrnewdeclarator_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 12:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    pmexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this._ctx, 2);
            case 14:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    multiplicativeexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 15:
                return this.precpred(this._ctx, 3);
            case 16:
                return this.precpred(this._ctx, 2);
            case 17:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    additiveexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 18:
                return this.precpred(this._ctx, 2);
            case 19:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    shiftexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 20:
                return this.precpred(this._ctx, 2);
            case 21:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    relationalexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 22:
                return this.precpred(this._ctx, 4);
            case 23:
                return this.precpred(this._ctx, 3);
            case 24:
                return this.precpred(this._ctx, 2);
            case 25:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    equalityexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 26:
                return this.precpred(this._ctx, 2);
            case 27:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    andexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 28:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    exclusiveorexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 29:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    inclusiveorexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicalandexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 31:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicalorexpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 32:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 33:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    statementseq_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 34:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    declarationseq_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 35:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    enumeratorlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 36:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    attributespecifierseq_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 37:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    attributelist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 38:
                return this.precpred(this._ctx, 3);
            case 39:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    balancedtokenseq_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 40:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    initdeclaratorlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 41:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    noptrdeclarator_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 42:
                return this.precpred(this._ctx, 3);
            case 43:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    noptrabstractdeclarator_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 44:
                return this.precpred(this._ctx, 5);
            case 45:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    noptrabstractpackdeclarator_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 46:
                return this.precpred(this._ctx, 3);
            case 47:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    parameterdeclarationlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 48:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    initializerlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 49:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    memberdeclaratorlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 50:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    virtspecifierseq_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 51:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    basespecifierlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 52:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    templateparameterlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 53:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    templateargumentlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 54:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    typeidlist_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 55:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!CPP14Parser.__ATN) {
            CPP14Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CPP14Parser._serializedATN));
        }
        return CPP14Parser.__ATN;
    }
}
CPP14Parser.MultiLineMacro = 1;
CPP14Parser.Directive = 2;
CPP14Parser.Alignas = 3;
CPP14Parser.Alignof = 4;
CPP14Parser.Asm = 5;
CPP14Parser.Auto = 6;
CPP14Parser.Bool = 7;
CPP14Parser.Break = 8;
CPP14Parser.Case = 9;
CPP14Parser.Catch = 10;
CPP14Parser.Char = 11;
CPP14Parser.Char16 = 12;
CPP14Parser.Char32 = 13;
CPP14Parser.Class = 14;
CPP14Parser.Const = 15;
CPP14Parser.Constexpr = 16;
CPP14Parser.Const_cast = 17;
CPP14Parser.Continue = 18;
CPP14Parser.Decltype = 19;
CPP14Parser.Default = 20;
CPP14Parser.Delete = 21;
CPP14Parser.Do = 22;
CPP14Parser.Double = 23;
CPP14Parser.Dynamic_cast = 24;
CPP14Parser.Else = 25;
CPP14Parser.Enum = 26;
CPP14Parser.Explicit = 27;
CPP14Parser.Export = 28;
CPP14Parser.Extern = 29;
CPP14Parser.False = 30;
CPP14Parser.Final = 31;
CPP14Parser.Float = 32;
CPP14Parser.For = 33;
CPP14Parser.Friend = 34;
CPP14Parser.Goto = 35;
CPP14Parser.If = 36;
CPP14Parser.Inline = 37;
CPP14Parser.Int = 38;
CPP14Parser.Long = 39;
CPP14Parser.Mutable = 40;
CPP14Parser.Namespace = 41;
CPP14Parser.New = 42;
CPP14Parser.Noexcept = 43;
CPP14Parser.Nullptr = 44;
CPP14Parser.Operator = 45;
CPP14Parser.Override = 46;
CPP14Parser.Private = 47;
CPP14Parser.Protected = 48;
CPP14Parser.Public = 49;
CPP14Parser.Register = 50;
CPP14Parser.Reinterpret_cast = 51;
CPP14Parser.Return = 52;
CPP14Parser.Short = 53;
CPP14Parser.Signed = 54;
CPP14Parser.Sizeof = 55;
CPP14Parser.Static = 56;
CPP14Parser.Static_assert = 57;
CPP14Parser.Static_cast = 58;
CPP14Parser.Struct = 59;
CPP14Parser.Switch = 60;
CPP14Parser.Template = 61;
CPP14Parser.This = 62;
CPP14Parser.Thread_local = 63;
CPP14Parser.Throw = 64;
CPP14Parser.True = 65;
CPP14Parser.Try = 66;
CPP14Parser.Typedef = 67;
CPP14Parser.Typeid = 68;
CPP14Parser.Typename = 69;
CPP14Parser.Union = 70;
CPP14Parser.Unsigned = 71;
CPP14Parser.Using = 72;
CPP14Parser.Virtual = 73;
CPP14Parser.Void = 74;
CPP14Parser.Volatile = 75;
CPP14Parser.Wchar = 76;
CPP14Parser.While = 77;
CPP14Parser.LeftParen = 78;
CPP14Parser.RightParen = 79;
CPP14Parser.LeftBracket = 80;
CPP14Parser.RightBracket = 81;
CPP14Parser.LeftBrace = 82;
CPP14Parser.RightBrace = 83;
CPP14Parser.Plus = 84;
CPP14Parser.Minus = 85;
CPP14Parser.Star = 86;
CPP14Parser.Div = 87;
CPP14Parser.Mod = 88;
CPP14Parser.Caret = 89;
CPP14Parser.And = 90;
CPP14Parser.Or = 91;
CPP14Parser.Tilde = 92;
CPP14Parser.Not = 93;
CPP14Parser.Assign = 94;
CPP14Parser.Less = 95;
CPP14Parser.Greater = 96;
CPP14Parser.PlusAssign = 97;
CPP14Parser.MinusAssign = 98;
CPP14Parser.StarAssign = 99;
CPP14Parser.DivAssign = 100;
CPP14Parser.ModAssign = 101;
CPP14Parser.XorAssign = 102;
CPP14Parser.AndAssign = 103;
CPP14Parser.OrAssign = 104;
CPP14Parser.LeftShift = 105;
CPP14Parser.LeftShiftAssign = 106;
CPP14Parser.Equal = 107;
CPP14Parser.NotEqual = 108;
CPP14Parser.LessEqual = 109;
CPP14Parser.GreaterEqual = 110;
CPP14Parser.AndAnd = 111;
CPP14Parser.OrOr = 112;
CPP14Parser.PlusPlus = 113;
CPP14Parser.MinusMinus = 114;
CPP14Parser.Comma = 115;
CPP14Parser.ArrowStar = 116;
CPP14Parser.Arrow = 117;
CPP14Parser.Question = 118;
CPP14Parser.Colon = 119;
CPP14Parser.Doublecolon = 120;
CPP14Parser.Semi = 121;
CPP14Parser.Dot = 122;
CPP14Parser.DotStar = 123;
CPP14Parser.Ellipsis = 124;
CPP14Parser.Identifier = 125;
CPP14Parser.Integerliteral = 126;
CPP14Parser.Decimalliteral = 127;
CPP14Parser.Octalliteral = 128;
CPP14Parser.Hexadecimalliteral = 129;
CPP14Parser.Binaryliteral = 130;
CPP14Parser.Integersuffix = 131;
CPP14Parser.Characterliteral = 132;
CPP14Parser.Floatingliteral = 133;
CPP14Parser.Stringliteral = 134;
CPP14Parser.Userdefinedintegerliteral = 135;
CPP14Parser.Userdefinedfloatingliteral = 136;
CPP14Parser.Userdefinedstringliteral = 137;
CPP14Parser.Userdefinedcharacterliteral = 138;
CPP14Parser.Whitespace = 139;
CPP14Parser.Newline = 140;
CPP14Parser.BlockComment = 141;
CPP14Parser.LineComment = 142;
CPP14Parser.RULE_translationunit = 0;
CPP14Parser.RULE_primaryexpression = 1;
CPP14Parser.RULE_idexpression = 2;
CPP14Parser.RULE_unqualifiedid = 3;
CPP14Parser.RULE_qualifiedid = 4;
CPP14Parser.RULE_nestednamespecifier = 5;
CPP14Parser.RULE_lambdaexpression = 6;
CPP14Parser.RULE_lambdaintroducer = 7;
CPP14Parser.RULE_lambdacapture = 8;
CPP14Parser.RULE_capturedefault = 9;
CPP14Parser.RULE_capturelist = 10;
CPP14Parser.RULE_capture = 11;
CPP14Parser.RULE_simplecapture = 12;
CPP14Parser.RULE_initcapture = 13;
CPP14Parser.RULE_lambdadeclarator = 14;
CPP14Parser.RULE_postfixexpression = 15;
CPP14Parser.RULE_typeidofexpr = 16;
CPP14Parser.RULE_typeidofthetypeid = 17;
CPP14Parser.RULE_expressionlist = 18;
CPP14Parser.RULE_pseudodestructorname = 19;
CPP14Parser.RULE_unaryexpression = 20;
CPP14Parser.RULE_unaryoperator = 21;
CPP14Parser.RULE_newexpression = 22;
CPP14Parser.RULE_newplacement = 23;
CPP14Parser.RULE_newtypeid = 24;
CPP14Parser.RULE_newdeclarator = 25;
CPP14Parser.RULE_noptrnewdeclarator = 26;
CPP14Parser.RULE_newinitializer = 27;
CPP14Parser.RULE_deleteexpression = 28;
CPP14Parser.RULE_noexceptexpression = 29;
CPP14Parser.RULE_castexpression = 30;
CPP14Parser.RULE_pmexpression = 31;
CPP14Parser.RULE_multiplicativeexpression = 32;
CPP14Parser.RULE_additiveexpression = 33;
CPP14Parser.RULE_shiftexpression = 34;
CPP14Parser.RULE_relationalexpression = 35;
CPP14Parser.RULE_equalityexpression = 36;
CPP14Parser.RULE_andexpression = 37;
CPP14Parser.RULE_exclusiveorexpression = 38;
CPP14Parser.RULE_inclusiveorexpression = 39;
CPP14Parser.RULE_logicalandexpression = 40;
CPP14Parser.RULE_logicalorexpression = 41;
CPP14Parser.RULE_conditionalexpression = 42;
CPP14Parser.RULE_assignmentexpression = 43;
CPP14Parser.RULE_assignmentoperator = 44;
CPP14Parser.RULE_expression = 45;
CPP14Parser.RULE_constantexpression = 46;
CPP14Parser.RULE_statement = 47;
CPP14Parser.RULE_labeledstatement = 48;
CPP14Parser.RULE_expressionstatement = 49;
CPP14Parser.RULE_compoundstatement = 50;
CPP14Parser.RULE_statementseq = 51;
CPP14Parser.RULE_selectionstatement = 52;
CPP14Parser.RULE_condition = 53;
CPP14Parser.RULE_iterationstatement = 54;
CPP14Parser.RULE_forinitstatement = 55;
CPP14Parser.RULE_forrangedeclaration = 56;
CPP14Parser.RULE_forrangeinitializer = 57;
CPP14Parser.RULE_jumpstatement = 58;
CPP14Parser.RULE_declarationstatement = 59;
CPP14Parser.RULE_declarationseq = 60;
CPP14Parser.RULE_declaration = 61;
CPP14Parser.RULE_blockdeclaration = 62;
CPP14Parser.RULE_aliasdeclaration = 63;
CPP14Parser.RULE_simpledeclaration = 64;
CPP14Parser.RULE_static_assertdeclaration = 65;
CPP14Parser.RULE_emptydeclaration = 66;
CPP14Parser.RULE_attributedeclaration = 67;
CPP14Parser.RULE_declspecifier = 68;
CPP14Parser.RULE_declspecifierseq = 69;
CPP14Parser.RULE_storageclassspecifier = 70;
CPP14Parser.RULE_functionspecifier = 71;
CPP14Parser.RULE_typedefname = 72;
CPP14Parser.RULE_typespecifier = 73;
CPP14Parser.RULE_trailingtypespecifier = 74;
CPP14Parser.RULE_typespecifierseq = 75;
CPP14Parser.RULE_trailingtypespecifierseq = 76;
CPP14Parser.RULE_simpletypespecifier = 77;
CPP14Parser.RULE_thetypename = 78;
CPP14Parser.RULE_decltypespecifier = 79;
CPP14Parser.RULE_elaboratedtypespecifier = 80;
CPP14Parser.RULE_enumname = 81;
CPP14Parser.RULE_enumspecifier = 82;
CPP14Parser.RULE_enumhead = 83;
CPP14Parser.RULE_opaqueenumdeclaration = 84;
CPP14Parser.RULE_enumkey = 85;
CPP14Parser.RULE_enumbase = 86;
CPP14Parser.RULE_enumeratorlist = 87;
CPP14Parser.RULE_enumeratordefinition = 88;
CPP14Parser.RULE_enumerator = 89;
CPP14Parser.RULE_namespacename = 90;
CPP14Parser.RULE_originalnamespacename = 91;
CPP14Parser.RULE_namespacedefinition = 92;
CPP14Parser.RULE_namednamespacedefinition = 93;
CPP14Parser.RULE_originalnamespacedefinition = 94;
CPP14Parser.RULE_extensionnamespacedefinition = 95;
CPP14Parser.RULE_unnamednamespacedefinition = 96;
CPP14Parser.RULE_namespacebody = 97;
CPP14Parser.RULE_namespacealias = 98;
CPP14Parser.RULE_namespacealiasdefinition = 99;
CPP14Parser.RULE_qualifiednamespacespecifier = 100;
CPP14Parser.RULE_usingdeclaration = 101;
CPP14Parser.RULE_usingdirective = 102;
CPP14Parser.RULE_asmdefinition = 103;
CPP14Parser.RULE_linkagespecification = 104;
CPP14Parser.RULE_attributespecifierseq = 105;
CPP14Parser.RULE_attributespecifier = 106;
CPP14Parser.RULE_alignmentspecifier = 107;
CPP14Parser.RULE_attributelist = 108;
CPP14Parser.RULE_attribute = 109;
CPP14Parser.RULE_attributetoken = 110;
CPP14Parser.RULE_attributescopedtoken = 111;
CPP14Parser.RULE_attributenamespace = 112;
CPP14Parser.RULE_attributeargumentclause = 113;
CPP14Parser.RULE_balancedtokenseq = 114;
CPP14Parser.RULE_balancedtoken = 115;
CPP14Parser.RULE_initdeclaratorlist = 116;
CPP14Parser.RULE_initdeclarator = 117;
CPP14Parser.RULE_declarator = 118;
CPP14Parser.RULE_ptrdeclarator = 119;
CPP14Parser.RULE_noptrdeclarator = 120;
CPP14Parser.RULE_parametersandqualifiers = 121;
CPP14Parser.RULE_trailingreturntype = 122;
CPP14Parser.RULE_ptroperator = 123;
CPP14Parser.RULE_cvqualifierseq = 124;
CPP14Parser.RULE_cvqualifier = 125;
CPP14Parser.RULE_refqualifier = 126;
CPP14Parser.RULE_declaratorid = 127;
CPP14Parser.RULE_thetypeid = 128;
CPP14Parser.RULE_abstractdeclarator = 129;
CPP14Parser.RULE_ptrabstractdeclarator = 130;
CPP14Parser.RULE_noptrabstractdeclarator = 131;
CPP14Parser.RULE_abstractpackdeclarator = 132;
CPP14Parser.RULE_noptrabstractpackdeclarator = 133;
CPP14Parser.RULE_parameterdeclarationclause = 134;
CPP14Parser.RULE_parameterdeclarationlist = 135;
CPP14Parser.RULE_parameterdeclaration = 136;
CPP14Parser.RULE_functiondefinition = 137;
CPP14Parser.RULE_functionbody = 138;
CPP14Parser.RULE_initializer = 139;
CPP14Parser.RULE_braceorequalinitializer = 140;
CPP14Parser.RULE_initializerclause = 141;
CPP14Parser.RULE_initializerlist = 142;
CPP14Parser.RULE_bracedinitlist = 143;
CPP14Parser.RULE_classname = 144;
CPP14Parser.RULE_classspecifier = 145;
CPP14Parser.RULE_classhead = 146;
CPP14Parser.RULE_classheadname = 147;
CPP14Parser.RULE_classvirtspecifier = 148;
CPP14Parser.RULE_classkey = 149;
CPP14Parser.RULE_memberspecification = 150;
CPP14Parser.RULE_memberdeclaration = 151;
CPP14Parser.RULE_memberdeclaratorlist = 152;
CPP14Parser.RULE_memberdeclarator = 153;
CPP14Parser.RULE_virtspecifierseq = 154;
CPP14Parser.RULE_virtspecifier = 155;
CPP14Parser.RULE_purespecifier = 156;
CPP14Parser.RULE_baseclause = 157;
CPP14Parser.RULE_basespecifierlist = 158;
CPP14Parser.RULE_basespecifier = 159;
CPP14Parser.RULE_classordecltype = 160;
CPP14Parser.RULE_basetypespecifier = 161;
CPP14Parser.RULE_accessspecifier = 162;
CPP14Parser.RULE_conversionfunctionid = 163;
CPP14Parser.RULE_conversiontypeid = 164;
CPP14Parser.RULE_conversiondeclarator = 165;
CPP14Parser.RULE_ctorinitializer = 166;
CPP14Parser.RULE_meminitializerlist = 167;
CPP14Parser.RULE_meminitializer = 168;
CPP14Parser.RULE_meminitializerid = 169;
CPP14Parser.RULE_operatorfunctionid = 170;
CPP14Parser.RULE_literaloperatorid = 171;
CPP14Parser.RULE_templatedeclaration = 172;
CPP14Parser.RULE_templateparameterlist = 173;
CPP14Parser.RULE_templateparameter = 174;
CPP14Parser.RULE_typeparameter = 175;
CPP14Parser.RULE_simpletemplateid = 176;
CPP14Parser.RULE_templateid = 177;
CPP14Parser.RULE_templatename = 178;
CPP14Parser.RULE_templateargumentlist = 179;
CPP14Parser.RULE_templateargument = 180;
CPP14Parser.RULE_typenamespecifier = 181;
CPP14Parser.RULE_explicitinstantiation = 182;
CPP14Parser.RULE_explicitspecialization = 183;
CPP14Parser.RULE_tryblock = 184;
CPP14Parser.RULE_functiontryblock = 185;
CPP14Parser.RULE_handlerseq = 186;
CPP14Parser.RULE_handler = 187;
CPP14Parser.RULE_exceptiondeclaration = 188;
CPP14Parser.RULE_throwexpression = 189;
CPP14Parser.RULE_exceptionspecification = 190;
CPP14Parser.RULE_dynamicexceptionspecification = 191;
CPP14Parser.RULE_typeidlist = 192;
CPP14Parser.RULE_noexceptspecification = 193;
CPP14Parser.RULE_rightShift = 194;
CPP14Parser.RULE_rightShiftAssign = 195;
CPP14Parser.RULE_theoperator = 196;
CPP14Parser.RULE_literal = 197;
CPP14Parser.RULE_booleanliteral = 198;
CPP14Parser.RULE_pointerliteral = 199;
CPP14Parser.RULE_userdefinedliteral = 200;
CPP14Parser.ruleNames = [
    "translationunit", "primaryexpression", "idexpression", "unqualifiedid",
    "qualifiedid", "nestednamespecifier", "lambdaexpression", "lambdaintroducer",
    "lambdacapture", "capturedefault", "capturelist", "capture", "simplecapture",
    "initcapture", "lambdadeclarator", "postfixexpression", "typeidofexpr",
    "typeidofthetypeid", "expressionlist", "pseudodestructorname", "unaryexpression",
    "unaryoperator", "newexpression", "newplacement", "newtypeid", "newdeclarator",
    "noptrnewdeclarator", "newinitializer", "deleteexpression", "noexceptexpression",
    "castexpression", "pmexpression", "multiplicativeexpression", "additiveexpression",
    "shiftexpression", "relationalexpression", "equalityexpression", "andexpression",
    "exclusiveorexpression", "inclusiveorexpression", "logicalandexpression",
    "logicalorexpression", "conditionalexpression", "assignmentexpression",
    "assignmentoperator", "expression", "constantexpression", "statement",
    "labeledstatement", "expressionstatement", "compoundstatement", "statementseq",
    "selectionstatement", "condition", "iterationstatement", "forinitstatement",
    "forrangedeclaration", "forrangeinitializer", "jumpstatement", "declarationstatement",
    "declarationseq", "declaration", "blockdeclaration", "aliasdeclaration",
    "simpledeclaration", "static_assertdeclaration", "emptydeclaration", "attributedeclaration",
    "declspecifier", "declspecifierseq", "storageclassspecifier", "functionspecifier",
    "typedefname", "typespecifier", "trailingtypespecifier", "typespecifierseq",
    "trailingtypespecifierseq", "simpletypespecifier", "thetypename", "decltypespecifier",
    "elaboratedtypespecifier", "enumname", "enumspecifier", "enumhead", "opaqueenumdeclaration",
    "enumkey", "enumbase", "enumeratorlist", "enumeratordefinition", "enumerator",
    "namespacename", "originalnamespacename", "namespacedefinition", "namednamespacedefinition",
    "originalnamespacedefinition", "extensionnamespacedefinition", "unnamednamespacedefinition",
    "namespacebody", "namespacealias", "namespacealiasdefinition", "qualifiednamespacespecifier",
    "usingdeclaration", "usingdirective", "asmdefinition", "linkagespecification",
    "attributespecifierseq", "attributespecifier", "alignmentspecifier", "attributelist",
    "attribute", "attributetoken", "attributescopedtoken", "attributenamespace",
    "attributeargumentclause", "balancedtokenseq", "balancedtoken", "initdeclaratorlist",
    "initdeclarator", "declarator", "ptrdeclarator", "noptrdeclarator", "parametersandqualifiers",
    "trailingreturntype", "ptroperator", "cvqualifierseq", "cvqualifier",
    "refqualifier", "declaratorid", "thetypeid", "abstractdeclarator", "ptrabstractdeclarator",
    "noptrabstractdeclarator", "abstractpackdeclarator", "noptrabstractpackdeclarator",
    "parameterdeclarationclause", "parameterdeclarationlist", "parameterdeclaration",
    "functiondefinition", "functionbody", "initializer", "braceorequalinitializer",
    "initializerclause", "initializerlist", "bracedinitlist", "classname",
    "classspecifier", "classhead", "classheadname", "classvirtspecifier",
    "classkey", "memberspecification", "memberdeclaration", "memberdeclaratorlist",
    "memberdeclarator", "virtspecifierseq", "virtspecifier", "purespecifier",
    "baseclause", "basespecifierlist", "basespecifier", "classordecltype",
    "basetypespecifier", "accessspecifier", "conversionfunctionid", "conversiontypeid",
    "conversiondeclarator", "ctorinitializer", "meminitializerlist", "meminitializer",
    "meminitializerid", "operatorfunctionid", "literaloperatorid", "templatedeclaration",
    "templateparameterlist", "templateparameter", "typeparameter", "simpletemplateid",
    "templateid", "templatename", "templateargumentlist", "templateargument",
    "typenamespecifier", "explicitinstantiation", "explicitspecialization",
    "tryblock", "functiontryblock", "handlerseq", "handler", "exceptiondeclaration",
    "throwexpression", "exceptionspecification", "dynamicexceptionspecification",
    "typeidlist", "noexceptspecification", "rightShift", "rightShiftAssign",
    "theoperator", "literal", "booleanliteral", "pointerliteral", "userdefinedliteral"
];
CPP14Parser._LITERAL_NAMES = [
    undefined, undefined, undefined, "'alignas'", "'alignof'", "'asm'", "'auto'",
    "'bool'", "'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'",
    "'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", "'decltype'",
    "'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", "'else'",
    "'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'",
    "'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'",
    "'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'",
    "'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'",
    "'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'",
    "'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'",
    "'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'",
    "'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'",
    "'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'",
    "'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'",
    "'~'", "'!'", "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", "'%='",
    "'^='", "'&='", "'|='", "'<<'", "'<<='", "'=='", "'!='", "'<='", "'>='",
    "'&&'", "'||'", "'++'", "'--'", "','", "'->*'", "'->'", "'?'", "':'",
    "'::'", "';'", "'.'", "'.*'", "'...'"
];
CPP14Parser._SYMBOLIC_NAMES = [
    undefined, "MultiLineMacro", "Directive", "Alignas", "Alignof", "Asm",
    "Auto", "Bool", "Break", "Case", "Catch", "Char", "Char16", "Char32",
    "Class", "Const", "Constexpr", "Const_cast", "Continue", "Decltype", "Default",
    "Delete", "Do", "Double", "Dynamic_cast", "Else", "Enum", "Explicit",
    "Export", "Extern", "False", "Final", "Float", "For", "Friend", "Goto",
    "If", "Inline", "Int", "Long", "Mutable", "Namespace", "New", "Noexcept",
    "Nullptr", "Operator", "Override", "Private", "Protected", "Public", "Register",
    "Reinterpret_cast", "Return", "Short", "Signed", "Sizeof", "Static", "Static_assert",
    "Static_cast", "Struct", "Switch", "Template", "This", "Thread_local",
    "Throw", "True", "Try", "Typedef", "Typeid", "Typename", "Union", "Unsigned",
    "Using", "Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen",
    "RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace",
    "Plus", "Minus", "Star", "Div", "Mod", "Caret", "And", "Or", "Tilde",
    "Not", "Assign", "Less", "Greater", "PlusAssign", "MinusAssign", "StarAssign",
    "DivAssign", "ModAssign", "XorAssign", "AndAssign", "OrAssign", "LeftShift",
    "LeftShiftAssign", "Equal", "NotEqual", "LessEqual", "GreaterEqual", "AndAnd",
    "OrOr", "PlusPlus", "MinusMinus", "Comma", "ArrowStar", "Arrow", "Question",
    "Colon", "Doublecolon", "Semi", "Dot", "DotStar", "Ellipsis", "Identifier",
    "Integerliteral", "Decimalliteral", "Octalliteral", "Hexadecimalliteral",
    "Binaryliteral", "Integersuffix", "Characterliteral", "Floatingliteral",
    "Stringliteral", "Userdefinedintegerliteral", "Userdefinedfloatingliteral",
    "Userdefinedstringliteral", "Userdefinedcharacterliteral", "Whitespace",
    "Newline", "BlockComment", "LineComment"
];
CPP14Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CPP14Parser._LITERAL_NAMES, CPP14Parser._SYMBOLIC_NAMES, []);
CPP14Parser._serializedATNSegments = 5;
CPP14Parser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x90\u09AD\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
    "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
    "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
    "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
    "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
    "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
    "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
    "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
    "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
    "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
    "\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
    "\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
    "\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
    "\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
    "\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
    "\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
    "\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x03\x02\x05\x02\u0196\n\x02" +
    "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x05\x03\u01A2\n\x03\x03\x04\x03\x04\x05\x04\u01A6\n\x04\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
    "\u01B1\n\x05\x03\x06\x03\x06\x05\x06\u01B5\n\x06\x03\x06\x03\x06\x03\x07" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x05\x07\u01C4\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
    "\x07\u01CB\n\x07\x03\x07\x03\x07\x03\x07\x07\x07\u01D0\n\x07\f\x07\x0E" +
    "\x07\u01D3\v\x07\x03\b\x03\b\x05\b\u01D7\n\b\x03\b\x03\b\x03\t\x03\t\x05" +
    "\t\u01DD\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01E7" +
    "\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\u01EE\n\f\x03\f\x03\f\x03\f\x03" +
    "\f\x05\f\u01F4\n\f\x07\f\u01F6\n\f\f\f\x0E\f\u01F9\v\f\x03\r\x03\r\x05" +
    "\r\u01FD\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0203\n\x0E\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u020A\n\x0F\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x05\x10\u0210\n\x10\x03\x10\x05\x10\u0213\n\x10\x03\x10\x05" +
    "\x10\u0216\n\x10\x03\x10\x05\x10\u0219\n\x10\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x05\x11\u0220\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x05\x11\u0227\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u025B" +
    "\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u026A\n\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x05\x11\u0270\n\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x05\x11\u0276\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0283\n\x11\f\x11\x0E\x11" +
    "\u0286\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x05" +
    "\x15\u028F\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u029E\n\x15\x03" +
    "\x15\x03\x15\x03\x15\x03\x15\x05\x15\u02A4\n\x15\x03\x16\x03\x16\x03\x16" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u02C2" +
    "\n\x16\x03\x17\x03\x17\x03\x18\x05\x18\u02C7\n\x18\x03\x18\x03\x18\x05" +
    "\x18\u02CB\n\x18\x03\x18\x03\x18\x05\x18\u02CF\n\x18\x03\x18\x05\x18\u02D2" +
    "\n\x18\x03\x18\x03\x18\x05\x18\u02D6\n\x18\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x05\x18\u02DC\n\x18\x05\x18\u02DE\n\x18\x03\x19\x03\x19\x03\x19\x03" +
    "\x19\x03\x1A\x03\x1A\x05\x1A\u02E6\n\x1A\x03\x1B\x03\x1B\x05\x1B\u02EA" +
    "\n\x1B\x03\x1B\x05\x1B\u02ED\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
    "\x1C\x05\x1C\u02F4\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
    "\u02FB\n\x1C\x07\x1C\u02FD\n\x1C\f\x1C\x0E\x1C\u0300\v\x1C\x03\x1D\x03" +
    "\x1D\x05\x1D\u0304\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0308\n\x1D\x03\x1E\x05" +
    "\x1E\u030B\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0310\n\x1E\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1E\x05\x1E\u0316\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0323\n \x03!\x03!\x03!\x03" +
    "!\x03!\x03!\x03!\x03!\x03!\x07!\u032E\n!\f!\x0E!\u0331\v!\x03\"\x03\"" +
    "\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u033F" +
    "\n\"\f\"\x0E\"\u0342\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#" +
    "\x07#\u034D\n#\f#\x0E#\u0350\v#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
    "$\x03$\x03$\x07$\u035C\n$\f$\x0E$\u035F\v$\x03%\x03%\x03%\x03%\x03%\x03" +
    "%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0370\n%\f%\x0E%\u0373" +
    "\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u037E\n&\f&\x0E" +
    "&\u0381\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0389\n\'\f\'\x0E" +
    "\'\u038C\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0394\n(\f(\x0E(\u0397" +
    "\v(\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u039F\n)\f)\x0E)\u03A2\v)\x03*" +
    "\x03*\x03*\x03*\x03*\x03*\x07*\u03AA\n*\f*\x0E*\u03AD\v*\x03+\x03+\x03" +
    "+\x03+\x03+\x03+\x07+\u03B5\n+\f+\x0E+\u03B8\v+\x03,\x03,\x03,\x03,\x03" +
    ",\x03,\x03,\x05,\u03C1\n,\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u03C9\n-" +
    "\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u03D6\n." +
    "\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u03DE\n/\f/\x0E/\u03E1\v/\x030\x03" +
    "0\x031\x031\x051\u03E7\n1\x031\x031\x051\u03EB\n1\x031\x031\x051\u03EF" +
    "\n1\x031\x031\x051\u03F3\n1\x031\x031\x051\u03F7\n1\x031\x031\x031\x05" +
    "1\u03FC\n1\x031\x051\u03FF\n1\x032\x052\u0402\n2\x032\x032\x032\x032\x05" +
    "2\u0408\n2\x032\x032\x032\x032\x032\x032\x052\u0410\n2\x032\x032\x032" +
    "\x052\u0415\n2\x033\x053\u0418\n3\x033\x033\x034\x034\x054\u041E\n4\x03" +
    "4\x034\x035\x035\x035\x035\x035\x075\u0427\n5\f5\x0E5\u042A\v5\x036\x03" +
    "6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
    "6\x036\x036\x036\x036\x056\u0440\n6\x037\x037\x057\u0444\n7\x037\x037" +
    "\x037\x037\x037\x037\x057\u044C\n7\x037\x037\x037\x037\x057\u0452\n7\x03" +
    "8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
    "8\x038\x038\x038\x058\u0466\n8\x038\x038\x058\u046A\n8\x038\x038\x038" +
    "\x038\x038\x038\x038\x038\x038\x038\x038\x058\u0477\n8\x039\x039\x059" +
    "\u047B\n9\x03:\x05:\u047E\n:\x03:\x03:\x03:\x03;\x03;\x05;\u0485\n;\x03" +
    "<\x03<\x03<\x03<\x03<\x03<\x05<\u048D\n<\x03<\x03<\x03<\x03<\x03<\x03" +
    "<\x03<\x03<\x05<\u0497\n<\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x07>\u04A0" +
    "\n>\f>\x0E>\u04A3\v>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05" +
    "?\u04AE\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u04B8\n@\x03A" +
    "\x03A\x03A\x05A\u04BD\nA\x03A\x03A\x03A\x03A\x03B\x05B\u04C4\nB\x03B\x05" +
    "B\u04C7\nB\x03B\x03B\x03B\x05B\u04CC\nB\x03B\x03B\x03B\x05B\u04D1\nB\x03" +
    "C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03E\x03E\x03E\x03F\x03" +
    "F\x03F\x03F\x03F\x03F\x05F\u04E6\nF\x03G\x03G\x05G\u04EA\nG\x03G\x03G" +
    "\x03G\x05G\u04EF\nG\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03K\x05K" +
    "\u04FA\nK\x03L\x03L\x03L\x03L\x05L\u0500\nL\x03M\x03M\x05M\u0504\nM\x03" +
    "M\x03M\x03M\x05M\u0509\nM\x03N\x03N\x05N\u050D\nN\x03N\x03N\x03N\x05N" +
    "\u0512\nN\x03O\x05O\u0515\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
    "O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u052B\n" +
    "O\x03P\x03P\x03P\x03P\x05P\u0531\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
    "Q\x03Q\x03Q\x05Q\u053C\nQ\x03R\x03R\x05R\u0540\nR\x03R\x05R\u0543\nR\x03" +
    "R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u054D\nR\x03R\x03R\x03R\x03" +
    "R\x05R\u0553\nR\x03R\x05R\u0556\nR\x03S\x03S\x03T\x03T\x03T\x05T\u055D" +
    "\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0567\nT\x03U\x03U\x05" +
    "U\u056B\nU\x03U\x05U\u056E\nU\x03U\x05U\u0571\nU\x03U\x03U\x05U\u0575" +
    "\nU\x03U\x03U\x03U\x05U\u057A\nU\x05U\u057C\nU\x03V\x03V\x05V\u0580\n" +
    "V\x03V\x03V\x05V\u0584\nV\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x05W\u058D" +
    "\nW\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u0598\nY\fY\x0E" +
    "Y\u059B\vY\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u05A2\nZ\x03[\x03[\x03\\\x03" +
    "\\\x05\\\u05A8\n\\\x03]\x03]\x03^\x03^\x05^\u05AE\n^\x03_\x03_\x05_\u05B2" +
    "\n_\x03`\x05`\u05B5\n`\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x05a\u05BE\n" +
    "a\x03a\x03a\x03a\x03a\x03a\x03a\x03b\x05b\u05C7\nb\x03b\x03b\x03b\x03" +
    "b\x03b\x03c\x05c\u05CF\nc\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
    "f\x05f\u05DA\nf\x03f\x03f\x03g\x03g\x05g\u05E0\ng\x03g\x03g\x03g\x03g" +
    "\x03g\x03g\x03g\x03g\x03g\x05g\u05EB\ng\x03h\x05h\u05EE\nh\x03h\x03h\x03" +
    "h\x05h\u05F3\nh\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03i\x03j\x03" +
    "j\x03j\x03j\x05j\u0602\nj\x03j\x03j\x03j\x03j\x05j\u0608\nj\x03k\x03k" +
    "\x03k\x03k\x03k\x07k\u060F\nk\fk\x0Ek\u0612\vk\x03l\x03l\x03l\x03l\x03" +
    "l\x03l\x03l\x05l\u061B\nl\x03m\x03m\x03m\x03m\x05m\u0621\nm\x03m\x03m" +
    "\x03m\x03m\x03m\x03m\x05m\u0629\nm\x03m\x03m\x05m\u062D\nm\x03n\x03n\x05" +
    "n\u0631\nn\x03n\x03n\x03n\x05n\u0636\nn\x03n\x03n\x03n\x05n\u063B\nn\x03" +
    "n\x03n\x03n\x03n\x03n\x07n\u0642\nn\fn\x0En\u0645\vn\x03o\x03o\x05o\u0649" +
    "\no\x03p\x03p\x05p\u064D\np\x03q\x03q\x03q\x03q\x03r\x03r\x03s\x03s\x03" +
    "s\x03s\x03t\x03t\x05t\u065B\nt\x03t\x03t\x07t\u065F\nt\ft\x0Et\u0662\v" +
    "t\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u0670" +
    "\nu\x03v\x03v\x03v\x03v\x03v\x03v\x07v\u0678\nv\fv\x0Ev\u067B\vv\x03w" +
    "\x03w\x05w\u067F\nw\x03x\x03x\x03x\x03x\x03x\x05x\u0686\nx\x03y\x03y\x03" +
    "y\x03y\x05y\u068C\ny\x03z\x03z\x03z\x05z\u0691\nz\x03z\x03z\x03z\x03z" +
    "\x05z\u0697\nz\x03z\x03z\x03z\x03z\x03z\x05z\u069E\nz\x03z\x03z\x05z\u06A2" +
    "\nz\x07z\u06A4\nz\fz\x0Ez\u06A7\vz\x03{\x03{\x03{\x03{\x05{\u06AD\n{\x03" +
    "{\x05{\u06B0\n{\x03{\x05{\u06B3\n{\x03{\x05{\u06B6\n{\x03|\x03|\x03|\x05" +
    "|\u06BB\n|\x03}\x03}\x05}\u06BF\n}\x03}\x05}\u06C2\n}\x03}\x03}\x05}\u06C6" +
    "\n}\x03}\x03}\x05}\u06CA\n}\x03}\x03}\x03}\x05}\u06CF\n}\x03}\x05}\u06D2" +
    "\n}\x05}\u06D4\n}\x03~\x03~\x05~\u06D8\n~\x03\x7F\x03\x7F\x03\x80\x03" +
    "\x80\x03\x81\x05\x81\u06DF\n\x81\x03\x81\x03\x81\x03\x82\x03\x82\x05\x82" +
    "\u06E5\n\x82\x03\x83\x03\x83\x05\x83\u06E9\n\x83\x03\x83\x03\x83\x03\x83" +
    "\x03\x83\x05\x83\u06EF\n\x83\x03\x84\x03\x84\x03\x84\x05\x84\u06F4\n\x84" +
    "\x05\x84\u06F6\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06FC\n\x85" +
    "\x03\x85\x03\x85\x05\x85\u0700\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05" +
    "\x85\u0706\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u070D" +
    "\n\x85\x03\x85\x03\x85\x05\x85\u0711\n\x85\x07\x85\u0713\n\x85\f\x85\x0E" +
    "\x85\u0716\v\x85\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u071C\n\x86\x03" +
    "\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0726" +
    "\n\x87\x03\x87\x03\x87\x05\x87\u072A\n\x87\x07\x87\u072C\n\x87\f\x87\x0E" +
    "\x87\u072F\v\x87\x03\x88\x05\x88\u0732\n\x88\x03\x88\x05\x88\u0735\n\x88" +
    "\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u073B\n\x88\x03\x89\x03\x89\x03" +
    "\x89\x03\x89\x03\x89\x03\x89\x07\x89\u0743\n\x89\f\x89\x0E\x89\u0746\v" +
    "\x89\x03\x8A\x05\x8A\u0749\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A" +
    "\u074F\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0757" +
    "\n\x8A\x03\x8A\x03\x8A\x05\x8A\u075B\n\x8A\x03\x8A\x05\x8A\u075E\n\x8A" +
    "\x03\x8A\x03\x8A\x05\x8A\u0762\n\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0767" +
    "\n\x8A\x03\x8B\x05\x8B\u076A\n\x8B\x03\x8B\x05\x8B\u076D\n\x8B\x03\x8B" +
    "\x03\x8B\x05\x8B\u0771\n\x8B\x03\x8B\x03\x8B\x03\x8C\x05\x8C\u0776\n\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C" +
    "\u0780\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u0787\n\x8D" +
    "\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u078C\n\x8E\x03\x8F\x03\x8F\x05\x8F\u0790" +
    "\n\x8F\x03\x90\x03\x90\x03\x90\x05\x90\u0795\n\x90\x03\x90\x03\x90\x03" +
    "\x90\x03\x90\x05\x90\u079B\n\x90\x07\x90\u079D\n\x90\f\x90\x0E\x90\u07A0" +
    "\v\x90\x03\x91\x03\x91\x03\x91\x05\x91\u07A5\n\x91\x03\x91\x03\x91\x03" +
    "\x91\x03\x91\x05\x91\u07AB\n\x91\x03\x92\x03\x92\x05\x92\u07AF\n\x92\x03" +
    "\x93\x03\x93\x03\x93\x05\x93\u07B4\n\x93\x03\x93\x03\x93\x03\x94\x03\x94" +
    "\x05\x94\u07BA\n\x94\x03\x94\x03\x94\x05\x94\u07BE\n\x94\x03\x94\x05\x94" +
    "\u07C1\n\x94\x03\x94\x03\x94\x05\x94\u07C5\n\x94\x03\x94\x05\x94\u07C8" +
    "\n\x94\x05\x94\u07CA\n\x94\x03\x95\x05\x95\u07CD\n\x95\x03\x95\x03\x95" +
    "\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03\x98\x05\x98\u07D7\n\x98\x03" +
    "\x98\x03\x98\x03\x98\x05\x98\u07DC\n\x98\x05\x98\u07DE\n\x98\x03\x99\x05" +
    "\x99\u07E1\n\x99\x03\x99\x05\x99\u07E4\n\x99\x03\x99\x05\x99\u07E7\n\x99" +
    "\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99\u07F0" +
    "\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x07\x9A\u07F8\n" +
    "\x9A\f\x9A\x0E\x9A\u07FB\v\x9A\x03\x9B\x03\x9B\x05\x9B\u07FF\n\x9B\x03" +
    "\x9B\x05\x9B\u0802\n\x9B\x03\x9B\x03\x9B\x05\x9B\u0806\n\x9B\x03\x9B\x05" +
    "\x9B\u0809\n\x9B\x03\x9B\x05\x9B\u080C\n\x9B\x03\x9B\x03\x9B\x05\x9B\u0810" +
    "\n\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x07\x9C\u0817\n\x9C\f\x9C" +
    "\x0E\x9C\u081A\v\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9F\x03" +
    "\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u0827\n\xA0\x03\xA0\x03\xA0" +
    "\x03\xA0\x03\xA0\x05\xA0\u082D\n\xA0\x07\xA0\u082F\n\xA0\f\xA0\x0E\xA0" +
    "\u0832\v\xA0\x03\xA1\x05\xA1\u0835\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0839" +
    "\n\xA1\x03\xA1\x03\xA1\x05\xA1\u083D\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0841" +
    "\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0845\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0849" +
    "\n\xA1\x03\xA2\x05\xA2\u084C\n\xA2\x03\xA2\x03\xA2\x05\xA2\u0850\n\xA2" +
    "\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6" +
    "\x05\xA6\u085B\n\xA6\x03\xA7\x03\xA7\x05\xA7\u085F\n\xA7\x03\xA8\x03\xA8" +
    "\x03\xA8\x03\xA9\x03\xA9\x05\xA9\u0866\n\xA9\x03\xA9\x03\xA9\x05\xA9\u086A" +
    "\n\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u086F\n\xA9\x03\xAA\x03\xAA\x03" +
    "\xAA\x05\xAA\u0874\n\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x05\xAA" +
    "\u087B\n\xAA\x03\xAB\x03\xAB\x05\xAB\u087F\n\xAB\x03\xAC\x03\xAC\x03\xAC" +
    "\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u0889\n\xAD\x03\xAE\x03" +
    "\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03" +
    "\xAF\x03\xAF\x07\xAF\u0897\n\xAF\f\xAF\x0E\xAF\u089A\v\xAF\x03\xB0\x03" +
    "\xB0\x05\xB0\u089E\n\xB0\x03\xB1\x03\xB1\x05\xB1\u08A2\n\xB1\x03\xB1\x05" +
    "\xB1\u08A5\n\xB1\x03\xB1\x03\xB1\x05\xB1\u08A9\n\xB1\x03\xB1\x03\xB1\x03" +
    "\xB1\x03\xB1\x05\xB1\u08AF\n\xB1\x03\xB1\x05\xB1\u08B2\n\xB1\x03\xB1\x03" +
    "\xB1\x05\xB1\u08B6\n\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1" +
    "\x03\xB1\x03\xB1\x05\xB1\u08C0\n\xB1\x03\xB1\x05\xB1\u08C3\n\xB1\x03\xB1" +
    "\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u08CB\n\xB1\x03\xB1\x03" +
    "\xB1\x03\xB1\x05\xB1\u08D0\n\xB1\x03\xB2\x03\xB2\x03\xB2\x05\xB2\u08D5" +
    "\n\xB2\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u08DD\n" +
    "\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u08E4\n\xB3\x03\xB3" +
    "\x03\xB3\x05\xB3\u08E8\n\xB3\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x05" +
    "\xB5\u08EF\n\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u08F5\n\xB5\x07" +
    "\xB5\u08F7\n\xB5\f\xB5\x0E\xB5\u08FA\v\xB5\x03\xB6\x03\xB6\x03\xB6\x05" +
    "\xB6\u08FF\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB7" +
    "\x05\xB7\u0908\n\xB7\x03\xB7\x03\xB7\x05\xB7\u090C\n\xB7\x03\xB8\x05\xB8" +
    "\u090F\n\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03" +
    "\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x05\xBB\u091F";
CPP14Parser._serializedATNSegment1 = "\n\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x05\xBC\u0926\n\xBC\x03" +
    "\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBE\x05\xBE\u092F\n\xBE" +
    "\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0935\n\xBE\x03\xBE\x03\xBE\x05" +
    "\xBE\u0939\n\xBE\x03\xBE\x05\xBE\u093C\n\xBE\x03\xBF\x03\xBF\x05\xBF\u0940" +
    "\n\xBF\x03\xC0\x03\xC0\x05\xC0\u0944\n\xC0\x03\xC1\x03\xC1\x03\xC1\x05" +
    "\xC1\u0949\n\xC1\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC2\x05\xC2\u0950" +
    "\n\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x05\xC2\u0956\n\xC2\x07\xC2\u0958" +
    "\n\xC2\f\xC2\x0E\xC2\u095B\v\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3" +
    "\x03\xC3\x05\xC3\u0963\n\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03" +
    "\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03" +
    "\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03" +
    "\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03" +
    "\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03" +
    "\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03" +
    "\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u099C\n\xC6\x03\xC7\x03\xC7" +
    "\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u09A5\n\xC7\x03\xC8\x03" +
    "\xC8\x03\xC9\x03\xC9\x03\xCA\x03\xCA\x03\xCA\x02\x02$\f\x16 6@BDFHJLN" +
    "PRT\\hz\xB0\xD4\xDA\xE6\xEA\xF2\u0108\u010C\u0110\u011E\u0132\u0136\u013E" +
    "\u015C\u0168\u0182\xCB\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
    "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
    "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
    ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
    "Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
    "v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
    "\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C" +
    "\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE" +
    "\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0" +
    "\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2" +
    "\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4" +
    "\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6" +
    "\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106" +
    "\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114" +
    "\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122" +
    "\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130" +
    "\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E" +
    "\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C" +
    "\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A" +
    "\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168" +
    "\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176" +
    "\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184" +
    "\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192" +
    "\x02\x02\r\x04\x02\\\\``\x04\x02VX\\_\x07\x02\x1F\x1F**44::AA\x05\x02" +
    "\x1D\x1D\'\'KK\x04\x02\x11\x11MM\x04\x02\\\\qq\x05\x02\x10\x10==HH\x04" +
    "\x02!!00\x03\x0213\x04\x02  CC\x03\x02\x89\x8C\u0ACC\x02\u0195\x03\x02" +
    "\x02\x02\x04\u01A1\x03\x02\x02\x02\x06\u01A5\x03\x02\x02\x02\b\u01B0\x03" +
    "\x02\x02\x02\n\u01B2\x03\x02\x02\x02\f\u01C3\x03\x02\x02\x02\x0E\u01D4" +
    "\x03\x02\x02\x02\x10\u01DA\x03\x02\x02\x02\x12\u01E6\x03\x02\x02\x02\x14" +
    "\u01E8\x03\x02\x02\x02\x16\u01EA\x03\x02\x02\x02\x18\u01FC\x03\x02\x02" +
    "\x02\x1A\u0202\x03\x02\x02\x02\x1C\u0209\x03\x02\x02\x02\x1E\u020B\x03" +
    "\x02\x02\x02 \u025A\x03\x02\x02\x02\"\u0287\x03\x02\x02\x02$\u0289\x03" +
    "\x02\x02\x02&\u028B\x03\x02\x02\x02(\u02A3\x03\x02\x02\x02*\u02C1\x03" +
    "\x02\x02\x02,\u02C3\x03\x02\x02\x02.\u02DD\x03\x02\x02\x020\u02DF\x03" +
    "\x02\x02\x022\u02E3\x03\x02\x02\x024\u02EC\x03\x02\x02\x026\u02EE\x03" +
    "\x02\x02\x028\u0307\x03\x02\x02\x02:\u0315\x03\x02\x02\x02<\u0317\x03" +
    "\x02\x02\x02>\u0322\x03\x02\x02\x02@\u0324\x03\x02\x02\x02B\u0332\x03" +
    "\x02\x02\x02D\u0343\x03\x02\x02\x02F\u0351\x03\x02\x02\x02H\u0360\x03" +
    "\x02\x02\x02J\u0374\x03\x02\x02\x02L\u0382\x03\x02\x02\x02N\u038D\x03" +
    "\x02\x02\x02P\u0398\x03\x02\x02\x02R\u03A3\x03\x02\x02\x02T\u03AE\x03" +
    "\x02\x02\x02V\u03C0\x03\x02\x02\x02X\u03C8\x03\x02\x02\x02Z\u03D5\x03" +
    "\x02\x02\x02\\\u03D7\x03\x02\x02\x02^\u03E2\x03\x02\x02\x02`\u03FE\x03" +
    "\x02\x02\x02b\u0414\x03\x02\x02\x02d\u0417\x03\x02\x02\x02f\u041B\x03" +
    "\x02\x02\x02h\u0421\x03\x02\x02\x02j\u043F\x03\x02\x02\x02l\u0451\x03" +
    "\x02\x02\x02n\u0476\x03\x02\x02\x02p\u047A\x03\x02\x02\x02r\u047D\x03" +
    "\x02\x02\x02t\u0484\x03\x02\x02\x02v\u0496\x03\x02\x02\x02x\u0498\x03" +
    "\x02\x02\x02z\u049A\x03\x02\x02\x02|\u04AD\x03\x02\x02\x02~\u04B7\x03" +
    "\x02\x02\x02\x80\u04B9\x03\x02\x02\x02\x82\u04D0\x03\x02\x02\x02\x84\u04D2" +
    "\x03\x02\x02\x02\x86\u04DA\x03\x02\x02\x02\x88\u04DC\x03\x02\x02\x02\x8A" +
    "\u04E5\x03\x02\x02\x02\x8C\u04EE\x03\x02\x02\x02\x8E\u04F0\x03\x02\x02" +
    "\x02\x90\u04F2\x03\x02\x02\x02\x92\u04F4\x03\x02\x02\x02\x94\u04F9\x03" +
    "\x02\x02\x02\x96\u04FF\x03\x02\x02\x02\x98\u0508\x03\x02\x02\x02\x9A\u0511" +
    "\x03\x02\x02\x02\x9C\u052A\x03\x02\x02\x02\x9E\u0530\x03\x02\x02\x02\xA0" +
    "\u053B\x03\x02\x02\x02\xA2\u0555\x03\x02\x02\x02\xA4\u0557\x03\x02\x02" +
    "\x02\xA6\u0566\x03\x02\x02\x02\xA8\u057B\x03\x02\x02\x02\xAA\u057D\x03" +
    "\x02\x02\x02\xAC\u058C\x03\x02\x02\x02\xAE\u058E\x03\x02\x02\x02\xB0\u0591" +
    "\x03\x02\x02\x02\xB2\u05A1\x03\x02\x02\x02\xB4\u05A3\x03\x02\x02\x02\xB6" +
    "\u05A7\x03\x02\x02\x02\xB8\u05A9\x03\x02\x02\x02\xBA\u05AD\x03\x02\x02" +
    "\x02\xBC\u05B1\x03\x02\x02\x02\xBE\u05B4\x03\x02\x02\x02\xC0\u05BD\x03" +
    "\x02\x02\x02\xC2\u05C6\x03\x02\x02\x02\xC4\u05CE\x03\x02\x02\x02\xC6\u05D0" +
    "\x03\x02\x02\x02\xC8\u05D2\x03\x02\x02\x02\xCA\u05D9\x03\x02\x02\x02\xCC" +
    "\u05EA\x03\x02\x02\x02\xCE\u05ED\x03\x02\x02\x02\xD0\u05F7\x03\x02\x02" +
    "\x02\xD2\u0607\x03\x02\x02\x02\xD4\u0609\x03\x02\x02\x02\xD6\u061A\x03" +
    "\x02\x02\x02\xD8\u062C\x03\x02\x02\x02\xDA\u0635\x03\x02\x02\x02\xDC\u0646" +
    "\x03\x02\x02\x02\xDE\u064C\x03\x02\x02\x02\xE0\u064E\x03\x02\x02\x02\xE2" +
    "\u0652\x03\x02\x02\x02\xE4\u0654\x03\x02\x02\x02\xE6\u0658\x03\x02\x02" +
    "\x02\xE8\u066F\x03\x02\x02\x02\xEA\u0671\x03\x02\x02\x02\xEC\u067C\x03" +
    "\x02\x02\x02\xEE\u0685\x03\x02\x02\x02\xF0\u068B\x03\x02\x02\x02\xF2\u0696" +
    "\x03\x02\x02\x02\xF4\u06A8\x03\x02\x02\x02\xF6\u06B7\x03\x02\x02\x02\xF8" +
    "\u06D3\x03\x02\x02\x02\xFA\u06D5\x03\x02\x02\x02\xFC\u06D9\x03\x02\x02" +
    "\x02\xFE\u06DB\x03\x02\x02\x02\u0100\u06DE\x03\x02\x02\x02\u0102\u06E2" +
    "\x03\x02\x02\x02\u0104\u06EE\x03\x02\x02\x02\u0106\u06F5\x03\x02\x02\x02" +
    "\u0108\u0705\x03\x02\x02\x02\u010A\u071B\x03\x02\x02\x02\u010C\u071D\x03" +
    "\x02\x02\x02\u010E\u073A\x03\x02\x02\x02\u0110\u073C\x03\x02\x02\x02\u0112" +
    "\u0766\x03\x02\x02\x02\u0114\u0769\x03\x02\x02\x02\u0116\u077F\x03\x02" +
    "\x02\x02\u0118\u0786\x03\x02\x02\x02\u011A\u078B\x03\x02\x02\x02\u011C" +
    "\u078F\x03\x02\x02\x02\u011E\u0791\x03\x02\x02\x02\u0120\u07AA\x03\x02" +
    "\x02\x02\u0122\u07AE\x03\x02\x02\x02\u0124\u07B0\x03\x02\x02\x02\u0126" +
    "\u07C9\x03\x02\x02\x02\u0128\u07CC\x03\x02\x02\x02\u012A\u07D0\x03\x02" +
    "\x02\x02\u012C\u07D2\x03\x02\x02\x02\u012E\u07DD\x03\x02\x02\x02\u0130" +
    "\u07EF\x03\x02\x02\x02\u0132\u07F1\x03\x02\x02\x02\u0134\u080F\x03\x02" +
    "\x02\x02\u0136\u0811\x03\x02\x02\x02\u0138\u081B\x03\x02\x02\x02\u013A" +
    "\u081D\x03\x02\x02\x02\u013C\u0820\x03\x02\x02\x02\u013E\u0823\x03\x02" +
    "\x02\x02\u0140\u0848\x03\x02\x02\x02\u0142\u084F\x03\x02\x02\x02\u0144" +
    "\u0851\x03\x02\x02\x02\u0146\u0853\x03\x02\x02\x02\u0148\u0855\x03\x02" +
    "\x02\x02\u014A\u0858\x03\x02\x02\x02\u014C\u085C\x03\x02\x02\x02\u014E" +
    "\u0860\x03\x02\x02\x02\u0150\u086E\x03\x02\x02\x02\u0152\u087A\x03\x02" +
    "\x02\x02\u0154\u087E\x03\x02\x02\x02\u0156\u0880\x03\x02\x02\x02\u0158" +
    "\u0888\x03\x02\x02\x02\u015A\u088A\x03\x02\x02\x02\u015C\u0890\x03\x02" +
    "\x02\x02\u015E\u089D\x03\x02\x02\x02\u0160\u08CF\x03\x02\x02\x02\u0162" +
    "\u08D1\x03\x02\x02\x02\u0164\u08E7\x03\x02\x02\x02\u0166\u08E9\x03\x02" +
    "\x02\x02\u0168\u08EB\x03\x02\x02\x02\u016A\u08FE\x03\x02\x02\x02\u016C" +
    "\u090B\x03\x02\x02\x02\u016E\u090E\x03\x02\x02\x02\u0170\u0913\x03\x02" +
    "\x02\x02\u0172\u0918\x03\x02\x02\x02\u0174\u091C\x03\x02\x02\x02\u0176" +
    "\u0923\x03\x02\x02\x02\u0178\u0927\x03\x02\x02\x02\u017A\u093B\x03\x02" +
    "\x02\x02\u017C\u093D\x03\x02\x02\x02\u017E\u0943\x03\x02\x02\x02\u0180" +
    "\u0945\x03\x02\x02\x02\u0182\u094C\x03\x02\x02\x02\u0184\u0962\x03\x02" +
    "\x02\x02\u0186\u0964\x03\x02\x02\x02\u0188\u0967\x03\x02\x02\x02\u018A" +
    "\u099B\x03\x02\x02\x02\u018C\u09A4\x03\x02\x02\x02\u018E\u09A6\x03\x02" +
    "\x02\x02\u0190\u09A8\x03\x02\x02\x02\u0192\u09AA\x03\x02\x02\x02\u0194" +
    "\u0196\x05z>\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02" +
    "\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x07\x02\x02\x03\u0198\x03\x03" +
    "\x02\x02\x02\u0199\u01A2\x05\u018C\xC7\x02\u019A\u01A2\x07@\x02\x02\u019B" +
    "\u019C\x07P\x02\x02\u019C\u019D\x05\\/\x02\u019D\u019E\x07Q\x02\x02\u019E" +
    "\u01A2\x03\x02\x02\x02\u019F\u01A2\x05\x06\x04\x02\u01A0\u01A2\x05\x0E" +
    "\b\x02\u01A1\u0199\x03\x02\x02\x02\u01A1\u019A\x03\x02\x02\x02\u01A1\u019B" +
    "\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02" +
    "\u01A2\x05\x03\x02\x02\x02\u01A3\u01A6\x05\b\x05\x02\u01A4\u01A6\x05\n" +
    "\x06\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6" +
    "\x07\x03\x02\x02\x02\u01A7\u01B1\x07\x7F\x02\x02\u01A8\u01B1\x05\u0156" +
    "\xAC\x02\u01A9\u01B1\x05\u0148\xA5\x02\u01AA\u01B1\x05\u0158\xAD\x02\u01AB" +
    "\u01AC\x07^\x02\x02\u01AC\u01B1\x05\u0122\x92\x02\u01AD\u01AE\x07^\x02" +
    "\x02\u01AE\u01B1\x05\xA0Q\x02\u01AF\u01B1\x05\u0164\xB3\x02\u01B0\u01A7" +
    "\x03\x02\x02\x02\u01B0\u01A8\x03\x02\x02\x02\u01B0\u01A9\x03\x02\x02\x02" +
    "\u01B0\u01AA\x03\x02\x02\x02\u01B0\u01AB\x03\x02\x02\x02\u01B0\u01AD\x03" +
    "\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\t\x03\x02\x02\x02\u01B2" +
    "\u01B4\x05\f\x07\x02\u01B3\u01B5\x07?\x02\x02\u01B4\u01B3\x03\x02\x02" +
    "\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7" +
    "\x05\b\x05\x02\u01B7\v\x03\x02\x02\x02\u01B8\u01B9\b\x07\x01\x02\u01B9" +
    "\u01C4\x07z\x02\x02\u01BA\u01BB\x05\x9EP\x02\u01BB\u01BC\x07z\x02\x02" +
    "\u01BC\u01C4\x03\x02\x02\x02\u01BD\u01BE\x05\xB6\\\x02\u01BE\u01BF\x07" +
    "z\x02\x02\u01BF\u01C4\x03\x02\x02\x02\u01C0\u01C1\x05\xA0Q\x02\u01C1\u01C2" +
    "\x07z\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01B8\x03\x02\x02\x02" +
    "\u01C3\u01BA\x03\x02\x02\x02\u01C3\u01BD\x03\x02\x02\x02\u01C3\u01C0\x03" +
    "\x02\x02\x02\u01C4\u01D1\x03\x02\x02\x02\u01C5\u01C6\f\x04\x02\x02\u01C6" +
    "\u01C7\x07\x7F\x02\x02\u01C7\u01D0\x07z\x02\x02\u01C8\u01CA\f\x03\x02" +
    "\x02\u01C9\u01CB\x07?\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB" +
    "\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD\x05\u0162\xB2" +
    "\x02\u01CD\u01CE\x07z\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01C5" +
    "\x03\x02\x02\x02\u01CF\u01C8\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02" +
    "\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\r\x03\x02" +
    "\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D6\x05\x10\t\x02\u01D5\u01D7" +
    "\x05\x1E\x10\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02" +
    "\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x05f4\x02\u01D9\x0F\x03\x02\x02" +
    "\x02\u01DA\u01DC\x07R\x02\x02\u01DB\u01DD\x05\x12\n\x02\u01DC\u01DB\x03" +
    "\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE" +
    "\u01DF\x07S\x02\x02\u01DF\x11\x03\x02\x02\x02\u01E0\u01E7\x05\x14\v\x02" +
    "\u01E1\u01E7\x05\x16\f\x02\u01E2\u01E3\x05\x14\v\x02\u01E3\u01E4\x07u" +
    "\x02\x02\u01E4\u01E5\x05\x16\f\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E0" +
    "\x03\x02\x02\x02\u01E6\u01E1\x03\x02\x02\x02\u01E6\u01E2\x03\x02\x02\x02" +
    "\u01E7\x13\x03\x02\x02\x02\u01E8\u01E9\t\x02\x02\x02\u01E9\x15\x03\x02" +
    "\x02\x02\u01EA\u01EB\b\f\x01\x02\u01EB\u01ED\x05\x18\r\x02\u01EC\u01EE" +
    "\x07~\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02" +
    "\u01EE\u01F7\x03\x02\x02\x02\u01EF\u01F0\f\x03\x02\x02\u01F0\u01F1\x07" +
    "u\x02\x02\u01F1\u01F3\x05\x18\r\x02\u01F2\u01F4\x07~\x02\x02\u01F3\u01F2" +
    "\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F6\x03\x02\x02\x02" +
    "\u01F5\u01EF\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03" +
    "\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\x17\x03\x02\x02\x02\u01F9" +
    "\u01F7\x03\x02\x02\x02\u01FA\u01FD\x05\x1A\x0E\x02\u01FB\u01FD\x05\x1C" +
    "\x0F\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD" +
    "\x19\x03\x02\x02\x02\u01FE\u0203\x07\x7F\x02\x02\u01FF\u0200\x07\\\x02" +
    "\x02\u0200\u0203\x07\x7F\x02\x02\u0201\u0203\x07@\x02\x02\u0202\u01FE" +
    "\x03\x02\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0201\x03\x02\x02\x02" +
    "\u0203\x1B\x03\x02\x02\x02\u0204\u0205\x07\x7F\x02\x02\u0205\u020A\x05" +
    "\u0118\x8D\x02\u0206\u0207\x07\\\x02\x02\u0207\u0208\x07\x7F\x02\x02\u0208" +
    "\u020A\x05\u0118\x8D\x02\u0209\u0204\x03\x02\x02\x02\u0209\u0206\x03\x02" +
    "\x02\x02\u020A\x1D\x03\x02\x02\x02\u020B\u020C\x07P\x02\x02\u020C\u020D" +
    "\x05\u010E\x88\x02\u020D\u020F\x07Q\x02\x02\u020E\u0210\x07*\x02\x02\u020F" +
    "\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0212\x03\x02" +
    "\x02\x02\u0211\u0213\x05\u017E\xC0\x02\u0212\u0211\x03\x02\x02\x02\u0212" +
    "\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02\x02\x02\u0214\u0216\x05\xD4" +
    "k\x02\u0215\u0214\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0218" +
    "\x03\x02\x02\x02\u0217\u0219\x05\xF6|\x02\u0218\u0217\x03\x02\x02\x02" +
    "\u0218\u0219\x03\x02\x02\x02\u0219\x1F\x03\x02\x02\x02\u021A\u021B\b\x11" +
    "\x01\x02\u021B\u025B\x05\x04\x03\x02\u021C\u021D\x05\x9CO\x02\u021D\u021F" +
    "\x07P\x02\x02\u021E\u0220\x05&\x14\x02\u021F\u021E\x03\x02\x02\x02\u021F" +
    "\u0220\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x07Q\x02" +
    "\x02\u0222\u025B\x03\x02\x02\x02\u0223\u0224\x05\u016C\xB7\x02\u0224\u0226" +
    "\x07P\x02\x02\u0225\u0227\x05&\x14\x02\u0226\u0225\x03\x02\x02\x02\u0226" +
    "\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x07Q\x02" +
    "\x02\u0229\u025B\x03\x02\x02\x02\u022A\u022B\x05\x9CO\x02\u022B\u022C" +
    "\x05\u0120\x91\x02\u022C\u025B\x03\x02\x02\x02\u022D\u022E\x05\u016C\xB7" +
    "\x02\u022E\u022F\x05\u0120\x91\x02\u022F\u025B\x03\x02\x02\x02\u0230\u0231" +
    "\x07\x1A\x02\x02\u0231\u0232\x07a\x02\x02\u0232\u0233\x05\u0102\x82\x02" +
    "\u0233\u0234\x07b\x02\x02\u0234\u0235\x07P\x02\x02\u0235\u0236\x05\\/" +
    "\x02\u0236\u0237\x07Q\x02\x02\u0237\u025B\x03\x02\x02\x02\u0238\u0239" +
    "\x07<\x02\x02\u0239\u023A\x07a\x02\x02\u023A\u023B\x05\u0102\x82\x02\u023B" +
    "\u023C\x07b\x02\x02\u023C\u023D\x07P\x02\x02\u023D\u023E\x05\\/\x02\u023E" +
    "\u023F\x07Q\x02\x02\u023F\u025B\x03\x02\x02\x02\u0240\u0241\x075\x02\x02" +
    "\u0241\u0242\x07a\x02\x02\u0242\u0243\x05\u0102\x82\x02\u0243\u0244\x07" +
    "b\x02\x02\u0244\u0245\x07P\x02\x02\u0245\u0246\x05\\/\x02\u0246\u0247" +
    "\x07Q\x02\x02\u0247\u025B\x03\x02\x02\x02\u0248\u0249\x07\x13\x02\x02" +
    "\u0249\u024A\x07a\x02\x02\u024A\u024B\x05\u0102\x82\x02\u024B\u024C\x07" +
    "b\x02\x02\u024C\u024D\x07P\x02\x02\u024D\u024E\x05\\/\x02\u024E\u024F" +
    "\x07Q\x02\x02\u024F\u025B\x03\x02\x02\x02\u0250\u0251\x05$\x13\x02\u0251" +
    "\u0252\x07P\x02\x02\u0252\u0253\x05\\/\x02\u0253\u0254\x07Q\x02\x02\u0254" +
    "\u025B\x03\x02\x02\x02\u0255\u0256\x05$\x13\x02\u0256\u0257\x07P\x02\x02" +
    "\u0257\u0258\x05\u0102\x82\x02\u0258\u0259\x07Q\x02\x02\u0259\u025B\x03" +
    "\x02\x02\x02\u025A\u021A\x03\x02\x02\x02\u025A\u021C\x03\x02\x02\x02\u025A" +
    "\u0223\x03\x02\x02\x02\u025A\u022A\x03\x02\x02\x02\u025A\u022D\x03\x02" +
    "\x02\x02\u025A\u0230\x03\x02\x02\x02\u025A\u0238\x03\x02\x02\x02\u025A" +
    "\u0240\x03\x02\x02\x02\u025A\u0248\x03\x02\x02\x02\u025A\u0250\x03\x02" +
    "\x02\x02\u025A\u0255\x03\x02\x02\x02\u025B\u0284\x03\x02\x02\x02\u025C" +
    "\u025D\f\x15\x02\x02\u025D\u025E\x07R\x02\x02\u025E\u025F\x05\\/\x02\u025F" +
    "\u0260\x07S\x02\x02\u0260\u0283\x03\x02\x02\x02\u0261\u0262\f\x14\x02" +
    "\x02\u0262\u0263\x07R\x02\x02\u0263\u0264\x05\u0120\x91\x02\u0264\u0265" +
    "\x07S\x02\x02\u0265\u0283\x03\x02\x02\x02\u0266\u0267\f\x13\x02\x02\u0267" +
    "\u0269\x07P\x02\x02\u0268\u026A\x05&\x14\x02\u0269\u0268\x03\x02\x02\x02" +
    "\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u0283\x07" +
    "Q\x02\x02\u026C\u026D\f\x0E\x02\x02\u026D\u026F\x07|\x02\x02\u026E\u0270" +
    "\x07?\x02\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
    "\u0270\u0271\x03\x02\x02\x02\u0271\u0283\x05\x06\x04\x02\u0272\u0273\f" +
    "\r\x02\x02\u0273\u0275\x07w\x02\x02\u0274\u0276\x07?\x02\x02\u0275\u0274" +
    "\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02" +
    "\u0277\u0283\x05\x06\x04\x02\u0278\u0279\f\f\x02\x02\u0279\u027A\x07|" +
    "\x02\x02\u027A\u0283\x05(\x15\x02\u027B\u027C\f\v\x02\x02\u027C\u027D" +
    "\x07w\x02\x02\u027D\u0283\x05(\x15\x02\u027E\u027F\f\n\x02\x02\u027F\u0283" +
    "\x07s\x02\x02\u0280\u0281\f\t\x02\x02\u0281\u0283\x07t\x02\x02\u0282\u025C" +
    "\x03\x02\x02\x02\u0282\u0261\x03\x02\x02\x02\u0282\u0266\x03\x02\x02\x02" +
    "\u0282\u026C\x03\x02\x02\x02\u0282\u0272\x03\x02\x02\x02\u0282\u0278\x03" +
    "\x02\x02\x02\u0282\u027B\x03\x02\x02\x02\u0282\u027E\x03\x02\x02\x02\u0282" +
    "\u0280\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02" +
    "\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285!\x03\x02\x02\x02\u0286\u0284" +
    "\x03\x02\x02\x02\u0287\u0288\x07F\x02\x02\u0288#\x03\x02\x02\x02\u0289" +
    "\u028A\x07F\x02\x02\u028A%\x03\x02\x02\x02\u028B\u028C\x05\u011E\x90\x02" +
    "\u028C\'\x03\x02\x02\x02\u028D\u028F\x05\f\x07\x02\u028E\u028D\x03\x02" +
    "\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290" +
    "\u0291\x05\x9EP\x02\u0291\u0292\x07z\x02\x02\u0292\u0293\x07^\x02\x02" +
    "\u0293\u0294\x05\x9EP\x02\u0294\u02A4\x03\x02\x02\x02\u0295\u0296\x05" +
    "\f\x07\x02\u0296\u0297\x07?\x02\x02\u0297\u0298\x05\u0162\xB2\x02\u0298" +
    "\u0299\x07z\x02\x02\u0299\u029A\x07^\x02\x02\u029A\u029B\x05\x9EP\x02" +
    "\u029B\u02A4\x03\x02\x02\x02\u029C\u029E\x05\f\x07\x02\u029D\u029C\x03" +
    "\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
    "\u02A0\x07^\x02\x02\u02A0\u02A4\x05\x9EP\x02\u02A1\u02A2\x07^\x02\x02" +
    "\u02A2\u02A4\x05\xA0Q\x02\u02A3\u028E\x03\x02\x02\x02\u02A3\u0295\x03" +
    "\x02\x02\x02\u02A3\u029D\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4" +
    ")\x03\x02\x02\x02\u02A5\u02C2\x05 \x11\x02\u02A6\u02A7\x07s\x02\x02\u02A7" +
    "\u02C2\x05> \x02\u02A8\u02A9\x07t\x02\x02\u02A9\u02C2\x05> \x02\u02AA" +
    "\u02AB\x05,\x17\x02\u02AB\u02AC\x05> \x02\u02AC\u02C2\x03\x02\x02\x02" +
    "\u02AD\u02AE\x079\x02\x02\u02AE\u02C2\x05*\x16\x02\u02AF\u02B0\x079\x02" +
    "\x02\u02B0\u02B1\x07P\x02\x02\u02B1\u02B2\x05\u0102\x82\x02\u02B2\u02B3" +
    "\x07Q\x02\x02\u02B3\u02C2\x03\x02\x02\x02\u02B4\u02B5\x079\x02\x02\u02B5" +
    "\u02B6\x07~\x02\x02\u02B6\u02B7\x07P\x02\x02\u02B7\u02B8\x07\x7F\x02\x02" +
    "\u02B8\u02C2\x07Q\x02\x02\u02B9\u02BA\x07\x06\x02\x02\u02BA\u02BB\x07" +
    "P\x02\x02\u02BB\u02BC\x05\u0102\x82\x02\u02BC\u02BD\x07Q\x02\x02\u02BD" +
    "\u02C2\x03\x02\x02\x02\u02BE\u02C2\x05<\x1F\x02\u02BF\u02C2\x05.\x18\x02" +
    "\u02C0\u02C2\x05:\x1E\x02\u02C1\u02A5\x03\x02\x02\x02\u02C1\u02A6\x03" +
    "\x02\x02\x02\u02C1\u02A8\x03\x02\x02\x02\u02C1\u02AA\x03\x02\x02\x02\u02C1" +
    "\u02AD\x03\x02\x02\x02\u02C1\u02AF\x03\x02\x02\x02\u02C1\u02B4\x03\x02" +
    "\x02\x02\u02C1\u02B9\x03\x02\x02\x02\u02C1\u02BE\x03\x02\x02\x02\u02C1" +
    "\u02BF\x03\x02\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C2+\x03\x02\x02" +
    "\x02\u02C3\u02C4\t\x03\x02\x02\u02C4-\x03\x02\x02\x02\u02C5\u02C7\x07" +
    "z\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7" +
    "\u02C8\x03\x02\x02\x02\u02C8\u02CA\x07,\x02\x02\u02C9\u02CB\x050\x19\x02" +
    "\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03" +
    "\x02\x02\x02\u02CC\u02CE\x052\x1A\x02\u02CD\u02CF\x058\x1D\x02\u02CE\u02CD" +
    "\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02DE\x03\x02\x02\x02" +
    "\u02D0\u02D2\x07z\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1\u02D2\x03" +
    "\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D5\x07,\x02\x02\u02D4" +
    "\u02D6\x050\x19\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02" +
    "\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x07P\x02\x02\u02D8\u02D9" +
    "\x05\u0102\x82\x02\u02D9\u02DB\x07Q\x02\x02\u02DA\u02DC\x058\x1D\x02\u02DB" +
    "\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02" +
    "\x02\x02\u02DD\u02C6\x03\x02\x02\x02\u02DD\u02D1\x03\x02\x02\x02\u02DE" +
    "/\x03\x02\x02\x02\u02DF\u02E0\x07P\x02\x02\u02E0\u02E1\x05&\x14\x02\u02E1" +
    "\u02E2\x07Q\x02\x02\u02E21\x03\x02\x02\x02\u02E3\u02E5\x05\x98M\x02\u02E4" +
    "\u02E6\x054\x1B\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02" +
    "\x02\u02E63\x03\x02\x02\x02\u02E7\u02E9\x05\xF8}\x02\u02E8\u02EA\x054" +
    "\x1B\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA" +
    "\u02ED\x03\x02\x02\x02\u02EB\u02ED\x056\x1C\x02\u02EC\u02E7\x03\x02\x02" +
    "\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED5\x03\x02\x02\x02\u02EE\u02EF\b" +
    "\x1C\x01\x02\u02EF\u02F0\x07R\x02\x02\u02F0\u02F1\x05\\/\x02\u02F1\u02F3" +
    "\x07S\x02\x02\u02F2\u02F4\x05\xD4k\x02\u02F3\u02F2\x03\x02\x02\x02\u02F3" +
    "\u02F4\x03\x02\x02\x02\u02F4\u02FE\x03\x02\x02\x02\u02F5\u02F6\f\x03\x02" +
    "\x02\u02F6\u02F7\x07R\x02\x02\u02F7\u02F8\x05^0\x02\u02F8\u02FA\x07S\x02" +
    "\x02\u02F9\u02FB\x05\xD4k\x02\u02FA\u02F9\x03\x02\x02\x02\u02FA\u02FB" +
    "\x03\x02\x02\x02\u02FB\u02FD\x03\x02\x02\x02\u02FC\u02F5\x03\x02\x02\x02" +
    "\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03" +
    "\x02\x02\x02\u02FF7\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301" +
    "\u0303\x07P\x02\x02\u0302\u0304\x05&\x14\x02\u0303\u0302\x03\x02\x02\x02" +
    "\u0303\u0304\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0308\x07" +
    "Q\x02\x02\u0306\u0308\x05\u0120\x91\x02\u0307\u0301\x03\x02\x02\x02\u0307" +
    "\u0306\x03\x02\x02\x02\u03089\x03\x02\x02\x02\u0309\u030B\x07z\x02\x02" +
    "\u030A\u0309\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x03" +
    "\x02\x02\x02\u030C\u030D\x07\x17\x02\x02\u030D\u0316\x05> \x02\u030E\u0310" +
    "\x07z\x02\x02\u030F\u030E\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02" +
    "\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x07\x17\x02\x02\u0312\u0313\x07" +
    "R\x02\x02\u0313\u0314\x07S\x02\x02\u0314\u0316\x05> \x02\u0315\u030A\x03" +
    "\x02\x02\x02\u0315\u030F\x03\x02\x02\x02\u0316;\x03\x02\x02\x02\u0317" +
    "\u0318\x07-\x02\x02\u0318\u0319\x07P\x02\x02\u0319\u031A\x05\\/\x02\u031A" +
    "\u031B\x07Q\x02\x02\u031B=\x03\x02\x02\x02\u031C\u0323\x05*\x16\x02\u031D" +
    "\u031E\x07P\x02\x02\u031E\u031F\x05\u0102\x82\x02\u031F\u0320\x07Q\x02" +
    "\x02\u0320\u0321\x05> \x02\u0321\u0323\x03\x02\x02\x02\u0322\u031C\x03" +
    "\x02\x02\x02\u0322\u031D\x03\x02\x02\x02\u0323?\x03\x02\x02\x02\u0324" +
    "\u0325\b!\x01\x02\u0325\u0326\x05> \x02\u0326\u032F\x03\x02\x02\x02\u0327" +
    "\u0328\f\x04\x02\x02\u0328\u0329\x07}";
CPP14Parser._serializedATNSegment2 = "\x02\x02\u0329\u032E\x05> \x02\u032A\u032B\f\x03\x02\x02\u032B\u032C\x07" +
    "v\x02\x02\u032C\u032E\x05> \x02\u032D\u0327\x03\x02\x02\x02\u032D\u032A" +
    "\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02" +
    "\u032F\u0330\x03\x02\x02\x02\u0330A\x03\x02\x02\x02\u0331\u032F\x03\x02" +
    "\x02\x02\u0332\u0333\b\"\x01\x02\u0333\u0334\x05@!\x02\u0334\u0340\x03" +
    "\x02\x02\x02\u0335\u0336\f\x05\x02\x02\u0336\u0337\x07X\x02\x02\u0337" +
    "\u033F\x05@!\x02\u0338\u0339\f\x04\x02\x02\u0339\u033A\x07Y\x02\x02\u033A" +
    "\u033F\x05@!\x02\u033B\u033C\f\x03\x02\x02\u033C\u033D\x07Z\x02\x02\u033D" +
    "\u033F\x05@!\x02\u033E\u0335\x03\x02\x02\x02\u033E\u0338\x03\x02\x02\x02" +
    "\u033E\u033B\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03" +
    "\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341C\x03\x02\x02\x02\u0342" +
    "\u0340\x03\x02\x02\x02\u0343\u0344\b#\x01\x02\u0344\u0345\x05B\"\x02\u0345" +
    "\u034E\x03\x02\x02\x02\u0346\u0347\f\x04\x02\x02\u0347\u0348\x07V\x02" +
    "\x02\u0348\u034D\x05B\"\x02\u0349\u034A\f\x03\x02\x02\u034A\u034B\x07" +
    "W\x02\x02\u034B\u034D\x05B\"\x02\u034C\u0346\x03\x02\x02\x02\u034C\u0349" +
    "\x03\x02\x02\x02\u034D\u0350\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02" +
    "\u034E\u034F\x03\x02\x02\x02\u034FE\x03\x02\x02\x02\u0350\u034E\x03\x02" +
    "\x02\x02\u0351\u0352\b$\x01\x02\u0352\u0353\x05D#\x02\u0353\u035D\x03" +
    "\x02\x02\x02\u0354\u0355\f\x04\x02\x02\u0355\u0356\x07k\x02\x02\u0356" +
    "\u035C\x05D#\x02\u0357\u0358\f\x03\x02\x02\u0358\u0359\x05\u0186\xC4\x02" +
    "\u0359\u035A\x05D#\x02\u035A\u035C\x03\x02\x02\x02\u035B\u0354\x03\x02" +
    "\x02\x02\u035B\u0357\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D" +
    "\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035EG\x03\x02\x02" +
    "\x02\u035F\u035D\x03\x02\x02\x02\u0360\u0361\b%\x01\x02\u0361\u0362\x05" +
    "F$\x02\u0362\u0371\x03\x02\x02\x02\u0363\u0364\f\x06\x02\x02\u0364\u0365" +
    "\x07a\x02\x02\u0365\u0370\x05F$\x02\u0366\u0367\f\x05\x02\x02\u0367\u0368" +
    "\x07b\x02\x02\u0368\u0370\x05F$\x02\u0369\u036A\f\x04\x02\x02\u036A\u036B" +
    "\x07o\x02\x02\u036B\u0370\x05F$\x02\u036C\u036D\f\x03\x02\x02\u036D\u036E" +
    "\x07p\x02\x02\u036E\u0370\x05F$\x02\u036F\u0363\x03\x02\x02\x02\u036F" +
    "\u0366\x03\x02\x02\x02\u036F\u0369\x03\x02\x02\x02\u036F\u036C\x03\x02" +
    "\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u036F\x03\x02\x02\x02\u0371" +
    "\u0372\x03\x02\x02\x02\u0372I\x03\x02\x02\x02\u0373\u0371\x03\x02\x02" +
    "\x02\u0374\u0375\b&\x01\x02\u0375\u0376\x05H%\x02\u0376\u037F\x03\x02" +
    "\x02\x02\u0377\u0378\f\x04\x02\x02\u0378\u0379\x07m\x02\x02\u0379\u037E" +
    "\x05H%\x02\u037A\u037B\f\x03\x02\x02\u037B\u037C\x07n\x02\x02\u037C\u037E" +
    "\x05H%\x02\u037D\u0377\x03\x02\x02\x02\u037D\u037A\x03\x02\x02\x02\u037E" +
    "\u0381\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02" +
    "\x02\x02\u0380K\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382\u0383" +
    "\b\'\x01\x02\u0383\u0384\x05J&\x02\u0384\u038A\x03\x02\x02\x02\u0385\u0386" +
    "\f\x03\x02\x02\u0386\u0387\x07\\\x02\x02\u0387\u0389\x05J&\x02\u0388\u0385" +
    "\x03\x02\x02\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02" +
    "\u038A\u038B\x03\x02\x02\x02\u038BM\x03\x02\x02\x02\u038C\u038A\x03\x02" +
    "\x02\x02\u038D\u038E\b(\x01\x02\u038E\u038F\x05L\'\x02\u038F\u0395\x03" +
    "\x02\x02\x02\u0390\u0391\f\x03\x02\x02\u0391\u0392\x07[\x02\x02\u0392" +
    "\u0394\x05L\'\x02\u0393\u0390\x03\x02\x02\x02\u0394\u0397\x03\x02\x02" +
    "\x02\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396O\x03" +
    "\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0398\u0399\b)\x01\x02\u0399" +
    "\u039A\x05N(\x02\u039A\u03A0\x03\x02\x02\x02\u039B\u039C\f\x03\x02\x02" +
    "\u039C\u039D\x07]\x02\x02\u039D\u039F\x05N(\x02\u039E\u039B\x03\x02\x02" +
    "\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u03A1" +
    "\x03\x02\x02\x02\u03A1Q\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A3" +
    "\u03A4\b*\x01\x02\u03A4\u03A5\x05P)\x02\u03A5\u03AB\x03\x02\x02\x02\u03A6" +
    "\u03A7\f\x03\x02\x02\u03A7\u03A8\x07q\x02\x02\u03A8\u03AA\x05P)\x02\u03A9" +
    "\u03A6\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03A9\x03\x02" +
    "\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03ACS\x03\x02\x02\x02\u03AD\u03AB" +
    "\x03\x02\x02\x02\u03AE\u03AF\b+\x01\x02\u03AF\u03B0\x05R*\x02\u03B0\u03B6" +
    "\x03\x02\x02\x02\u03B1\u03B2\f\x03\x02\x02\u03B2\u03B3\x07r\x02\x02\u03B3" +
    "\u03B5\x05R*\x02\u03B4\u03B1\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02" +
    "\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7U\x03\x02" +
    "\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9\u03C1\x05T+\x02\u03BA\u03BB" +
    "\x05T+\x02\u03BB\u03BC\x07x\x02\x02\u03BC\u03BD\x05\\/\x02\u03BD\u03BE" +
    "\x07y\x02\x02\u03BE\u03BF\x05X-\x02\u03BF\u03C1\x03\x02\x02\x02\u03C0" +
    "\u03B9\x03\x02\x02\x02\u03C0\u03BA\x03\x02\x02\x02\u03C1W\x03\x02\x02" +
    "\x02\u03C2\u03C9\x05V,\x02\u03C3\u03C4\x05T+\x02\u03C4\u03C5\x05Z.\x02" +
    "\u03C5\u03C6\x05\u011C\x8F\x02\u03C6\u03C9\x03\x02\x02\x02\u03C7\u03C9" +
    "\x05\u017C\xBF\x02\u03C8\u03C2\x03\x02\x02\x02\u03C8\u03C3\x03\x02\x02" +
    "\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9Y\x03\x02\x02\x02\u03CA\u03D6\x07" +
    "`\x02\x02\u03CB\u03D6\x07e\x02\x02\u03CC\u03D6\x07f\x02\x02\u03CD\u03D6" +
    "\x07g\x02\x02\u03CE\u03D6\x07c\x02\x02\u03CF\u03D6\x07d\x02\x02\u03D0" +
    "\u03D6\x05\u0188\xC5\x02\u03D1\u03D6\x07l\x02\x02\u03D2\u03D6\x07i\x02" +
    "\x02\u03D3\u03D6\x07h\x02\x02\u03D4\u03D6\x07j\x02\x02\u03D5\u03CA\x03" +
    "\x02\x02\x02\u03D5\u03CB\x03\x02\x02\x02\u03D5\u03CC\x03\x02\x02\x02\u03D5" +
    "\u03CD\x03\x02\x02\x02\u03D5\u03CE\x03\x02\x02\x02\u03D5\u03CF\x03\x02" +
    "\x02\x02\u03D5\u03D0\x03\x02\x02\x02\u03D5\u03D1\x03\x02\x02\x02\u03D5" +
    "\u03D2\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D5\u03D4\x03\x02" +
    "\x02\x02\u03D6[\x03\x02\x02\x02\u03D7\u03D8\b/\x01\x02\u03D8\u03D9\x05" +
    "X-\x02\u03D9\u03DF\x03\x02\x02\x02\u03DA\u03DB\f\x03\x02\x02\u03DB\u03DC" +
    "\x07u\x02\x02\u03DC\u03DE\x05X-\x02\u03DD\u03DA\x03\x02\x02\x02\u03DE" +
    "\u03E1\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02" +
    "\x02\x02\u03E0]\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03E3" +
    "\x05V,\x02\u03E3_\x03\x02\x02\x02\u03E4\u03FF\x05b2\x02\u03E5\u03E7\x05" +
    "\xD4k\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7" +
    "\u03E8\x03\x02\x02\x02\u03E8\u03FF\x05d3\x02\u03E9\u03EB\x05\xD4k\x02" +
    "\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC\x03" +
    "\x02\x02\x02\u03EC\u03FF\x05f4\x02\u03ED\u03EF\x05\xD4k\x02\u03EE\u03ED" +
    "\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02" +
    "\u03F0\u03FF\x05j6\x02\u03F1\u03F3\x05\xD4k\x02\u03F2\u03F1\x03\x02\x02" +
    "\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03FF" +
    "\x05n8\x02\u03F5\u03F7\x05\xD4k\x02\u03F6\u03F5\x03\x02\x02\x02\u03F6" +
    "\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FF\x05v<\x02" +
    "\u03F9\u03FF\x05x=\x02\u03FA\u03FC\x05\xD4k\x02\u03FB\u03FA\x03\x02\x02" +
    "\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u03FF" +
    "\x05\u0172\xBA\x02\u03FE\u03E4\x03\x02\x02\x02\u03FE\u03E6\x03\x02\x02" +
    "\x02\u03FE\u03EA\x03\x02\x02\x02\u03FE\u03EE\x03\x02\x02\x02\u03FE\u03F2" +
    "\x03\x02\x02\x02\u03FE\u03F6\x03\x02\x02\x02\u03FE\u03F9\x03\x02\x02\x02" +
    "\u03FE\u03FB\x03\x02\x02\x02\u03FFa\x03\x02\x02\x02\u0400\u0402\x05\xD4" +
    "k\x02\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403" +
    "\x03\x02\x02\x02\u0403\u0404\x07\x7F\x02\x02\u0404\u0405\x07y\x02\x02" +
    "\u0405\u0415\x05`1\x02\u0406\u0408\x05\xD4k\x02\u0407\u0406\x03\x02\x02" +
    "\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040A" +
    "\x07\v\x02\x02\u040A\u040B\x05^0\x02\u040B\u040C\x07y\x02\x02\u040C\u040D" +
    "\x05`1\x02\u040D\u0415\x03\x02\x02\x02\u040E\u0410\x05\xD4k\x02\u040F" +
    "\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0411\x03\x02" +
    "\x02\x02\u0411\u0412\x07\x16\x02\x02\u0412\u0413\x07y\x02\x02\u0413\u0415" +
    "\x05`1\x02\u0414\u0401\x03\x02\x02\x02\u0414\u0407\x03\x02\x02\x02\u0414" +
    "\u040F\x03\x02\x02\x02\u0415c\x03\x02\x02\x02\u0416\u0418\x05\\/\x02\u0417" +
    "\u0416\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0419\x03\x02" +
    "\x02\x02\u0419\u041A\x07{\x02\x02\u041Ae\x03\x02\x02\x02\u041B\u041D\x07" +
    "T\x02\x02\u041C\u041E\x05h5\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E" +
    "\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x07U\x02\x02" +
    "\u0420g\x03\x02\x02\x02\u0421\u0422\b5\x01\x02\u0422\u0423\x05`1\x02\u0423" +
    "\u0428\x03\x02\x02\x02\u0424\u0425\f\x03\x02\x02\u0425\u0427\x05`1\x02" +
    "\u0426\u0424\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03" +
    "\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429i\x03\x02\x02\x02\u042A" +
    "\u0428\x03\x02\x02\x02\u042B\u042C\x07&\x02\x02\u042C\u042D\x07P\x02\x02" +
    "\u042D\u042E\x05l7\x02\u042E\u042F\x07Q\x02\x02\u042F\u0430\x05`1\x02" +
    "\u0430\u0440\x03\x02\x02\x02\u0431\u0432\x07&\x02\x02\u0432\u0433\x07" +
    "P\x02\x02\u0433\u0434\x05l7\x02\u0434\u0435\x07Q\x02\x02\u0435\u0436\x05" +
    "`1\x02\u0436\u0437\x07\x1B\x02\x02\u0437\u0438\x05`1\x02\u0438\u0440\x03" +
    "\x02\x02\x02\u0439\u043A\x07>\x02\x02\u043A\u043B\x07P\x02\x02\u043B\u043C" +
    "\x05l7\x02\u043C\u043D\x07Q\x02\x02\u043D\u043E\x05`1\x02\u043E\u0440" +
    "\x03\x02\x02\x02\u043F\u042B\x03\x02\x02\x02\u043F\u0431\x03\x02\x02\x02" +
    "\u043F\u0439\x03\x02\x02\x02\u0440k\x03\x02\x02\x02\u0441\u0452\x05\\" +
    "/\x02\u0442\u0444\x05\xD4k\x02\u0443\u0442\x03\x02\x02\x02\u0443\u0444" +
    "\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x05\x8CG\x02" +
    "\u0446\u0447\x05\xEEx\x02\u0447\u0448\x07`\x02\x02\u0448\u0449\x05\u011C" +
    "\x8F\x02\u0449\u0452\x03\x02\x02\x02\u044A\u044C\x05\xD4k\x02\u044B\u044A" +
    "\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02" +
    "\u044D\u044E\x05\x8CG\x02\u044E\u044F\x05\xEEx\x02\u044F\u0450\x05\u0120" +
    "\x91\x02\u0450\u0452\x03\x02\x02\x02\u0451\u0441\x03\x02\x02\x02\u0451" +
    "\u0443\x03\x02\x02\x02\u0451\u044B\x03\x02\x02\x02\u0452m\x03\x02\x02" +
    "\x02\u0453\u0454\x07O\x02\x02\u0454\u0455\x07P\x02\x02\u0455\u0456\x05" +
    "l7\x02\u0456\u0457\x07Q\x02\x02\u0457\u0458\x05`1\x02\u0458\u0477\x03" +
    "\x02\x02\x02\u0459\u045A\x07\x18\x02\x02\u045A\u045B\x05`1\x02\u045B\u045C" +
    "\x07O\x02\x02\u045C\u045D\x07P\x02\x02\u045D\u045E\x05\\/\x02\u045E\u045F" +
    "\x07Q\x02\x02\u045F\u0460\x07{\x02\x02\u0460\u0477\x03\x02\x02\x02\u0461" +
    "\u0462\x07#\x02\x02\u0462\u0463\x07P\x02\x02\u0463\u0465\x05p9\x02\u0464" +
    "\u0466\x05l7\x02\u0465\u0464\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02" +
    "\u0466\u0467\x03\x02\x02\x02\u0467\u0469\x07{\x02\x02\u0468\u046A\x05" +
    "\\/\x02\u0469\u0468\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A" +
    "\u046B\x03\x02\x02\x02\u046B\u046C\x07Q\x02\x02\u046C\u046D\x05`1\x02" +
    "\u046D\u0477\x03\x02\x02\x02\u046E\u046F\x07#\x02\x02\u046F\u0470\x07" +
    "P\x02\x02\u0470\u0471\x05r:\x02\u0471\u0472\x07y\x02\x02\u0472\u0473\x05" +
    "t;\x02\u0473\u0474\x07Q\x02\x02\u0474\u0475\x05`1\x02\u0475\u0477\x03" +
    "\x02\x02\x02\u0476\u0453\x03\x02\x02\x02\u0476\u0459\x03\x02\x02\x02\u0476" +
    "\u0461\x03\x02\x02\x02\u0476\u046E\x03\x02\x02\x02\u0477o\x03\x02\x02" +
    "\x02\u0478\u047B\x05d3\x02\u0479\u047B\x05\x82B\x02\u047A\u0478\x03\x02" +
    "\x02\x02\u047A\u0479\x03\x02\x02\x02\u047Bq\x03\x02\x02\x02\u047C\u047E" +
    "\x05\xD4k\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02" +
    "\u047E\u047F\x03\x02\x02\x02\u047F\u0480\x05\x8CG\x02\u0480\u0481\x05" +
    "\xEEx\x02\u0481s\x03\x02\x02\x02\u0482\u0485\x05\\/\x02\u0483\u0485\x05" +
    "\u0120\x91\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0483\x03\x02\x02\x02" +
    "\u0485u\x03\x02\x02\x02\u0486\u0487\x07\n\x02\x02\u0487\u0497\x07{\x02" +
    "\x02\u0488\u0489\x07\x14\x02\x02\u0489\u0497\x07{\x02\x02\u048A\u048C" +
    "\x076\x02\x02\u048B\u048D\x05\\/\x02\u048C\u048B\x03\x02\x02\x02\u048C" +
    "\u048D\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u0497\x07{\x02" +
    "\x02\u048F\u0490\x076\x02\x02\u0490\u0491\x05\u0120\x91\x02\u0491\u0492" +
    "\x07{\x02\x02\u0492\u0497\x03\x02\x02\x02\u0493\u0494\x07%\x02\x02\u0494" +
    "\u0495\x07\x7F\x02\x02\u0495\u0497\x07{\x02\x02\u0496\u0486\x03\x02\x02" +
    "\x02\u0496\u0488\x03\x02\x02\x02\u0496\u048A\x03\x02\x02\x02\u0496\u048F" +
    "\x03\x02\x02\x02\u0496\u0493\x03\x02\x02\x02\u0497w\x03\x02\x02\x02\u0498" +
    "\u0499\x05~@\x02\u0499y\x03\x02\x02\x02\u049A\u049B\b>\x01\x02\u049B\u049C" +
    "\x05|?\x02\u049C\u04A1\x03\x02\x02\x02\u049D\u049E\f\x03\x02\x02\u049E" +
    "\u04A0\x05|?\x02\u049F\u049D\x03\x02\x02\x02\u04A0\u04A3\x03\x02\x02\x02" +
    "\u04A1\u049F\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2{\x03\x02" +
    "\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A4\u04AE\x05~@\x02\u04A5\u04AE" +
    "\x05\u0114\x8B\x02\u04A6\u04AE\x05\u015A\xAE\x02\u04A7\u04AE\x05\u016E" +
    "\xB8\x02\u04A8\u04AE\x05\u0170\xB9\x02\u04A9\u04AE\x05\xD2j\x02\u04AA" +
    "\u04AE\x05\xBA^\x02\u04AB\u04AE\x05\x86D\x02\u04AC\u04AE\x05\x88E\x02" +
    "\u04AD\u04A4\x03\x02\x02\x02\u04AD\u04A5\x03\x02\x02\x02\u04AD\u04A6\x03" +
    "\x02\x02\x02\u04AD\u04A7\x03\x02\x02\x02\u04AD\u04A8\x03\x02\x02\x02\u04AD" +
    "\u04A9\x03\x02\x02\x02\u04AD\u04AA\x03\x02\x02\x02\u04AD\u04AB\x03\x02" +
    "\x02\x02\u04AD\u04AC\x03\x02\x02\x02\u04AE}\x03\x02\x02\x02\u04AF\u04B8" +
    "\x05\x82B\x02\u04B0\u04B8\x05\xD0i\x02\u04B1\u04B8\x05\xC8e\x02\u04B2" +
    "\u04B8\x05\xCCg\x02\u04B3\u04B8\x05\xCEh\x02\u04B4\u04B8\x05\x84C\x02" +
    "\u04B5\u04B8\x05\x80A\x02\u04B6\u04B8\x05\xAAV\x02\u04B7\u04AF\x03\x02" +
    "\x02\x02\u04B7\u04B0\x03\x02\x02\x02\u04B7\u04B1\x03\x02\x02\x02\u04B7" +
    "\u04B2\x03\x02\x02\x02\u04B7\u04B3\x03\x02\x02\x02\u04B7\u04B4\x03\x02" +
    "\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B6\x03\x02\x02\x02\u04B8" +
    "\x7F\x03\x02\x02\x02\u04B9\u04BA\x07J\x02\x02\u04BA\u04BC\x07\x7F\x02" +
    "\x02\u04BB\u04BD\x05\xD4k\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD" +
    "\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04BF\x07`\x02\x02" +
    "\u04BF\u04C0\x05\u0102\x82\x02\u04C0\u04C1\x07{\x02\x02\u04C1\x81\x03" +
    "\x02\x02\x02\u04C2\u04C4\x05\x8CG\x02\u04C3\u04C2\x03\x02\x02\x02\u04C3" +
    "\u04C4\x03\x02\x02\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5\u04C7\x05\xEA" +
    "v\x02\u04C6\u04C5\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C8" +
    "\x03\x02\x02\x02\u04C8\u04D1\x07{\x02\x02\u04C9\u04CB\x05\xD4k\x02\u04CA" +
    "\u04CC\x05\x8CG\x02\u04CB\u04CA\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02" +
    "\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04CE\x05\xEAv\x02\u04CE\u04CF" +
    "\x07{\x02\x02\u04CF\u04D1\x03\x02\x02\x02\u04D0\u04C3\x03\x02\x02\x02" +
    "\u04D0\u04C9\x03\x02\x02\x02\u04D1\x83\x03\x02\x02\x02\u04D2\u04D3\x07" +
    ";\x02\x02\u04D3\u04D4\x07P\x02\x02\u04D4\u04D5\x05^0\x02\u04D5\u04D6\x07" +
    "u\x02\x02\u04D6\u04D7\x07\x88\x02\x02\u04D7\u04D8\x07Q\x02\x02\u04D8\u04D9" +
    "\x07{\x02\x02\u04D9\x85\x03\x02\x02\x02\u04DA\u04DB\x07{\x02\x02\u04DB" +
    "\x87\x03\x02\x02\x02\u04DC\u04DD\x05\xD4k\x02\u04DD\u04DE\x07{\x02\x02" +
    "\u04DE\x89\x03\x02\x02\x02\u04DF\u04E6\x05\x8EH\x02\u04E0\u04E6\x05\x94" +
    "K\x02\u04E1\u04E6\x05\x90I\x02\u04E2\u04E6\x07$\x02\x02\u04E3\u04E6\x07" +
    "E\x02\x02\u04E4\u04E6\x07\x12\x02\x02\u04E5\u04DF\x03\x02\x02\x02\u04E5" +
    "\u04E0\x03\x02\x02\x02\u04E5\u04E1\x03\x02\x02\x02\u04E5\u04E2\x03\x02" +
    "\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5\u04E4\x03\x02\x02\x02\u04E6" +
    "\x8B\x03\x02\x02\x02\u04E7\u04E9\x05\x8AF\x02\u04E8\u04EA\x05\xD4k\x02" +
    "\u04E9\u04E8\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EF\x03" +
    "\x02\x02\x02\u04EB\u04EC\x05\x8AF\x02\u04EC\u04ED\x05\x8CG\x02\u04ED\u04EF" +
    "\x03\x02\x02\x02\u04EE\u04E7\x03\x02\x02\x02\u04EE\u04EB\x03\x02\x02\x02" +
    "\u04EF\x8D\x03\x02\x02\x02\u04F0\u04F1\t\x04\x02\x02\u04F1\x8F\x03\x02" +
    "\x02\x02\u04F2\u04F3\t\x05\x02\x02\u04F3\x91\x03\x02\x02\x02\u04F4\u04F5" +
    "\x07\x7F\x02\x02\u04F5\x93\x03\x02\x02\x02\u04F6\u04FA\x05\x96L\x02\u04F7" +
    "\u04FA\x05\u0124\x93\x02\u04F8\u04FA\x05\xA6T\x02\u04F9\u04F6\x03\x02" +
    "\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04F9\u04F8\x03\x02\x02\x02\u04FA" +
    "\x95\x03\x02\x02\x02\u04FB\u0500\x05\x9CO\x02\u04FC\u0500\x05\xA2R\x02" +
    "\u04FD\u0500\x05\u016C\xB7\x02\u04FE\u0500\x05\xFC\x7F\x02\u04FF\u04FB" +
    "\x03\x02\x02\x02\u04FF\u04FC\x03\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02" +
    "\u04FF\u04FE\x03\x02\x02\x02\u0500\x97\x03\x02\x02\x02\u0501\u0503\x05" +
    "\x94K\x02\u0502\u0504\x05\xD4k\x02\u0503\u0502\x03\x02\x02\x02\u0503\u0504" +
    "\x03\x02\x02\x02\u0504\u0509\x03\x02\x02\x02\u0505\u0506\x05\x94K\x02" +
    "\u0506\u0507\x05\x98M\x02\u0507\u0509\x03\x02\x02\x02\u0508\u0501\x03" +
    "\x02\x02\x02\u0508\u0505\x03\x02\x02\x02\u0509\x99\x03\x02\x02\x02\u050A" +
    "\u050C\x05\x96L\x02\u050B\u050D\x05\xD4k\x02\u050C\u050B\x03\x02\x02\x02" +
    "\u050C\u050D\x03\x02\x02\x02\u050D\u0512\x03\x02\x02\x02\u050E\u050F\x05" +
    "\x96L\x02\u050F\u0510\x05\x9AN\x02\u0510\u0512\x03\x02\x02\x02\u0511\u050A" +
    "\x03\x02\x02\x02\u0511\u050E\x03\x02\x02\x02\u0512\x9B\x03\x02\x02\x02" +
    "\u0513\u0515\x05\f\x07\x02\u0514\u0513\x03\x02\x02\x02\u0514\u0515\x03" +
    "\x02\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u052B\x05\x9EP\x02\u0517" +
    "\u0518\x05\f\x07\x02\u0518\u0519\x07?\x02\x02\u0519\u051A\x05\u0162\xB2" +
    "\x02\u051A\u052B\x03\x02\x02\x02\u051B\u052B\x07\r\x02\x02\u051C\u052B" +
    "\x07\x0E\x02\x02\u051D\u052B\x07\x0F\x02\x02\u051E\u052B\x07N\x02\x02" +
    "\u051F\u052B\x07\t\x02\x02\u0520\u052B\x077\x02\x02\u0521\u052B\x07(\x02" +
    "\x02\u0522\u052B\x07)\x02\x02\u0523\u052B\x078\x02\x02\u0524\u052B\x07" +
    "I\x02\x02\u0525\u052B\x07\"\x02\x02\u0526\u052B\x07\x19\x02\x02\u0527" +
    "\u052B\x07L\x02\x02\u0528\u052B\x07\b\x02\x02\u0529\u052B\x05\xA0Q\x02" +
    "\u052A\u0514\x03\x02\x02\x02\u052A\u0517\x03\x02\x02\x02\u052A\u051B\x03" +
    "\x02\x02\x02\u052A\u051C\x03\x02\x02\x02\u052A\u051D\x03\x02\x02\x02\u052A" +
    "\u051E\x03\x02\x02\x02\u052A\u051F\x03\x02\x02\x02\u052A\u0520\x03\x02" +
    "\x02\x02\u052A\u0521\x03\x02\x02\x02\u052A\u0522\x03\x02\x02\x02\u052A" +
    "\u0523\x03\x02\x02\x02\u052A\u0524\x03\x02\x02\x02\u052A\u0525\x03\x02" +
    "\x02\x02\u052A\u0526\x03\x02\x02\x02\u052A\u0527\x03\x02\x02\x02\u052A" +
    "\u0528\x03\x02\x02\x02\u052A\u0529\x03\x02\x02\x02\u052B\x9D\x03\x02\x02" +
    "\x02\u052C\u0531\x05\u0122\x92\x02\u052D\u0531\x05\xA4S\x02\u052E\u0531" +
    "\x05\x92J\x02\u052F\u0531\x05\u0162\xB2\x02\u0530\u052C\x03\x02\x02\x02" +
    "\u0530\u052D\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u052F\x03" +
    "\x02\x02\x02\u0531\x9F\x03\x02\x02\x02\u0532\u0533\x07\x15\x02\x02\u0533" +
    "\u0534\x07P\x02\x02\u0534\u0535\x05\\/\x02\u0535\u0536\x07Q\x02\x02\u0536" +
    "\u053C\x03\x02\x02\x02\u0537\u0538\x07\x15\x02\x02\u0538\u0539\x07P\x02" +
    "\x02\u0539\u053A\x07\b\x02\x02\u053A\u053C\x07Q\x02\x02\u053B\u0532\x03" +
    "\x02\x02\x02\u053B\u0537\x03\x02\x02\x02\u053C\xA1\x03\x02\x02\x02\u053D" +
    "\u053F\x05\u012C\x97\x02\u053E\u0540\x05\xD4k\x02\u053F\u053E\x03\x02" +
    "\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0542\x03\x02\x02\x02\u0541" +
    "\u0543\x05\f\x07\x02\u0542\u0541\x03\x02\x02\x02\u0542\u0543\x03\x02\x02" +
    "\x02\u0543\u0544\x03\x02\x02\x02\u0544\u0545\x07\x7F\x02\x02\u0545\u0556" +
    "\x03\x02\x02\x02\u0546\u0547\x05\u012C\x97\x02\u0547\u0548\x05\u0162\xB2" +
    "\x02\u0548\u0556\x03\x02\x02\x02\u0549\u054A\x05\u012C\x97\x02\u054A\u054C" +
    "\x05\f\x07\x02\u054B\u054D\x07?\x02\x02\u054C\u054B\x03\x02\x02\x02\u054C" +
    "\u054D\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u054F\x05\u0162" +
    "\xB2\x02\u054F\u0556\x03\x02\x02\x02\u0550\u0552\x07\x1C\x02\x02\u0551" +
    "\u0553\x05\f\x07\x02\u0552\u0551\x03\x02\x02\x02\u0552\u0553\x03\x02\x02" +
    "\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0556\x07\x7F\x02\x02\u0555\u053D" +
    "\x03\x02\x02\x02\u0555\u0546\x03\x02\x02\x02\u0555\u0549\x03\x02\x02\x02" +
    "\u0555\u0550\x03\x02\x02\x02\u0556\xA3\x03\x02\x02\x02\u0557\u0558\x07" +
    "\x7F\x02\x02\u0558\xA5\x03\x02\x02\x02\u0559\u055A\x05\xA8U\x02\u055A" +
    "\u055C\x07T\x02\x02\u055B\u055D\x05\xB0Y\x02\u055C\u055B\x03\x02\x02\x02" +
    "\u055C\u055D\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u055F\x07" +
    "U\x02\x02\u055F\u0567\x03\x02\x02\x02\u0560\u0561\x05\xA8U\x02\u0561\u0562" +
    "\x07T\x02\x02\u0562\u0563\x05\xB0Y\x02\u0563\u0564\x07u\x02\x02\u0564" +
    "\u0565\x07U\x02\x02\u0565\u0567\x03\x02\x02\x02\u0566\u0559\x03\x02\x02" +
    "\x02\u0566\u0560\x03\x02\x02\x02\u0567\xA7\x03\x02\x02\x02\u0568\u056A" +
    "\x05\xACW\x02\u0569\u056B\x05\xD4k\x02\u056A\u0569\x03\x02\x02\x02\u056A" +
    "\u056B\x03\x02\x02\x02\u056B\u056D\x03\x02\x02\x02\u056C\u056E\x07\x7F" +
    "\x02\x02\u056D\u056C\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E" +
    "\u0570\x03\x02\x02\x02\u056F\u0571\x05\xAEX\x02\u0570\u056F\x03\x02\x02" +
    "\x02\u0570\u0571\x03\x02\x02\x02\u0571\u057C\x03\x02\x02\x02\u0572\u0574" +
    "\x05\xACW\x02\u0573\u0575\x05\xD4k\x02\u0574\u0573\x03\x02\x02\x02\u0574" +
    "\u0575\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576\u0577\x05\f\x07" +
    "\x02\u0577\u0579\x07\x7F\x02\x02\u0578\u057A\x05\xAEX\x02\u0579\u0578" +
    "\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057C\x03\x02\x02\x02" +
    "\u057B\u0568\x03\x02\x02\x02\u057B\u0572\x03\x02\x02\x02\u057C\xA9\x03" +
    "\x02\x02\x02\u057D\u057F\x05\xACW\x02\u057E\u0580\x05\xD4k\x02\u057F\u057E" +
    "\x03\x02\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02" +
    "\u0581\u0583\x07\x7F\x02\x02\u0582\u0584\x05\xAEX\x02\u0583\u0582\x03" +
    "\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585" +
    "\u0586\x07{\x02\x02\u0586\xAB\x03\x02\x02\x02\u0587\u058D\x07\x1C\x02" +
    "\x02\u0588\u0589\x07\x1C\x02\x02\u0589\u058D\x07\x10\x02\x02\u058A\u058B" +
    "\x07\x1C\x02\x02\u058B\u058D\x07=\x02\x02\u058C\u0587\x03\x02\x02\x02" +
    "\u058C\u0588\x03\x02\x02\x02\u058C\u058A\x03\x02\x02\x02\u058D\xAD\x03" +
    "\x02\x02\x02\u058E\u058F\x07y\x02\x02\u058F\u0590\x05\x98M\x02\u0590\xAF" +
    "\x03\x02\x02\x02\u0591\u0592\bY\x01\x02\u0592\u0593\x05\xB2Z\x02\u0593" +
    "\u0599\x03\x02\x02\x02\u0594\u0595\f\x03\x02\x02\u0595\u0596\x07u\x02" +
    "\x02\u0596\u0598\x05\xB2Z\x02\u0597\u0594\x03\x02\x02\x02\u0598\u059B" +
    "\x03\x02\x02\x02\u0599\u0597\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02" +
    "\u059A\xB1\x03\x02\x02\x02\u059B\u0599\x03\x02\x02\x02\u059C\u05A2\x05" +
    "\xB4[\x02\u059D\u059E\x05\xB4[\x02\u059E\u059F\x07`\x02\x02\u059F\u05A0" +
    "\x05^0\x02\u05A0\u05A2\x03\x02\x02\x02\u05A1\u059C\x03\x02\x02\x02\u05A1" +
    "\u059D\x03\x02\x02\x02\u05A2\xB3\x03\x02\x02\x02\u05A3\u05A4\x07\x7F\x02" +
    "\x02\u05A4\xB5\x03\x02\x02\x02\u05A5\u05A8\x05\xB8]\x02\u05A6\u05A8\x05" +
    "\xC6d\x02\u05A7\u05A5\x03\x02\x02\x02\u05A7\u05A6\x03\x02\x02\x02\u05A8" +
    "\xB7\x03\x02\x02\x02\u05A9\u05AA\x07\x7F\x02\x02\u05AA\xB9\x03\x02\x02" +
    "\x02\u05AB\u05AE\x05\xBC_\x02\u05AC\u05AE\x05\xC2b\x02\u05AD\u05AB\x03" +
    "\x02\x02\x02\u05AD\u05AC\x03\x02\x02\x02\u05AE\xBB\x03\x02\x02\x02\u05AF" +
    "\u05B2\x05\xBE`\x02\u05B0\u05B2\x05\xC0a\x02\u05B1\u05AF\x03\x02\x02\x02" +
    "\u05B1\u05B0\x03\x02\x02\x02\u05B2\xBD\x03\x02\x02\x02\u05B3\u05B5\x07" +
    "\'\x02\x02\u05B4\u05B3\x03\x02\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5" +
    "\u05B6\x03\x02\x02\x02\u05B6\u05B7\x07+\x02\x02\u05B7\u05B8\x07\x7F\x02" +
    "\x02\u05B8\u05B9\x07T\x02\x02\u05B9\u05BA\x05\xC4c\x02\u05BA\u05BB\x07" +
    "U\x02\x02\u05BB\xBF\x03\x02\x02\x02\u05BC\u05BE\x07\'\x02\x02\u05BD\u05BC" +
    "\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02" +
    "\u05BF\u05C0\x07+\x02\x02\u05C0\u05C1\x05\xB8]\x02\u05C1\u05C2\x07T\x02" +
    "\x02\u05C2\u05C3\x05\xC4c\x02\u05C3\u05C4\x07U\x02\x02\u05C4\xC1\x03\x02" +
    "\x02\x02\u05C5\u05C7\x07\'\x02\x02\u05C6\u05C5\x03\x02\x02\x02\u05C6\u05C7" +
    "\x03\x02\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8\u05C9\x07+\x02\x02" +
    "\u05C9\u05CA\x07T\x02\x02\u05CA\u05CB\x05\xC4c\x02";
CPP14Parser._serializedATNSegment3 = "\u05CB\u05CC\x07U\x02\x02\u05CC\xC3\x03\x02\x02\x02\u05CD\u05CF\x05z>" +
    "\x02\u05CE\u05CD\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\xC5" +
    "\x03\x02\x02\x02\u05D0\u05D1\x07\x7F\x02\x02\u05D1\xC7\x03\x02\x02\x02" +
    "\u05D2\u05D3\x07+\x02\x02\u05D3\u05D4\x07\x7F\x02\x02\u05D4\u05D5\x07" +
    "`\x02\x02\u05D5\u05D6\x05\xCAf\x02\u05D6\u05D7\x07{\x02\x02\u05D7\xC9" +
    "\x03\x02\x02\x02\u05D8\u05DA\x05\f\x07\x02\u05D9\u05D8\x03\x02\x02\x02" +
    "\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB\u05DC\x05" +
    "\xB6\\\x02\u05DC\xCB\x03\x02\x02\x02\u05DD\u05DF\x07J\x02\x02\u05DE\u05E0" +
    "\x07G\x02\x02\u05DF\u05DE\x03\x02\x02\x02\u05DF\u05E0\x03\x02\x02\x02" +
    "\u05E0\u05E1\x03\x02\x02\x02\u05E1\u05E2\x05\f\x07\x02\u05E2\u05E3\x05" +
    "\b\x05\x02\u05E3\u05E4\x07{\x02\x02\u05E4\u05EB\x03\x02\x02\x02\u05E5" +
    "\u05E6\x07J\x02\x02\u05E6\u05E7\x07z\x02\x02\u05E7\u05E8\x05\b\x05\x02" +
    "\u05E8\u05E9\x07{\x02\x02\u05E9\u05EB\x03\x02\x02\x02\u05EA\u05DD\x03" +
    "\x02\x02\x02\u05EA\u05E5\x03\x02\x02\x02\u05EB\xCD\x03\x02\x02\x02\u05EC" +
    "\u05EE\x05\xD4k\x02\u05ED\u05EC\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02" +
    "\x02\u05EE\u05EF\x03\x02\x02\x02\u05EF\u05F0\x07J\x02\x02\u05F0\u05F2" +
    "\x07+\x02\x02\u05F1\u05F3\x05\f\x07\x02\u05F2\u05F1\x03\x02\x02\x02\u05F2" +
    "\u05F3\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4\u05F5\x05\xB6" +
    "\\\x02\u05F5\u05F6\x07{\x02\x02\u05F6\xCF\x03\x02\x02\x02\u05F7\u05F8" +
    "\x07\x07\x02\x02\u05F8\u05F9\x07P\x02\x02\u05F9\u05FA\x07\x88\x02\x02" +
    "\u05FA\u05FB\x07Q\x02\x02\u05FB\u05FC\x07{\x02\x02\u05FC\xD1\x03\x02\x02" +
    "\x02\u05FD\u05FE\x07\x1F\x02\x02\u05FE\u05FF\x07\x88\x02\x02\u05FF\u0601" +
    "\x07T\x02\x02\u0600\u0602\x05z>\x02\u0601\u0600\x03\x02\x02\x02\u0601" +
    "\u0602\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02\u0603\u0608\x07U\x02" +
    "\x02\u0604\u0605\x07\x1F\x02\x02\u0605\u0606\x07\x88\x02\x02\u0606\u0608" +
    "\x05|?\x02\u0607\u05FD\x03\x02\x02\x02\u0607\u0604\x03\x02\x02\x02\u0608" +
    "\xD3\x03\x02\x02\x02\u0609\u060A\bk\x01\x02\u060A\u060B\x05\xD6l\x02\u060B" +
    "\u0610\x03\x02\x02\x02\u060C\u060D\f\x03\x02\x02\u060D\u060F\x05\xD6l" +
    "\x02\u060E\u060C\x03\x02\x02\x02\u060F\u0612\x03\x02\x02\x02\u0610\u060E" +
    "\x03\x02\x02\x02\u0610\u0611\x03\x02\x02\x02\u0611\xD5\x03\x02\x02\x02" +
    "\u0612\u0610\x03\x02\x02\x02\u0613\u0614\x07R\x02\x02\u0614\u0615\x07" +
    "R\x02\x02\u0615\u0616\x05\xDAn\x02\u0616\u0617\x07S\x02\x02\u0617\u0618" +
    "\x07S\x02\x02\u0618\u061B\x03\x02\x02\x02\u0619\u061B\x05\xD8m\x02\u061A" +
    "\u0613\x03\x02\x02\x02\u061A\u0619\x03\x02\x02\x02\u061B\xD7\x03\x02\x02" +
    "\x02\u061C\u061D\x07\x05\x02\x02\u061D\u061E\x07P\x02\x02\u061E\u0620" +
    "\x05\u0102\x82\x02\u061F\u0621\x07~\x02\x02\u0620\u061F\x03\x02\x02\x02" +
    "\u0620\u0621\x03\x02\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622\u0623\x07" +
    "Q\x02\x02\u0623\u062D\x03\x02\x02\x02\u0624\u0625\x07\x05\x02\x02\u0625" +
    "\u0626\x07P\x02\x02\u0626\u0628\x05^0\x02\u0627\u0629\x07~\x02\x02\u0628" +
    "\u0627\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u062A\x03\x02" +
    "\x02\x02\u062A\u062B\x07Q\x02\x02\u062B\u062D\x03\x02\x02\x02\u062C\u061C" +
    "\x03\x02\x02\x02\u062C\u0624\x03\x02\x02\x02\u062D\xD9\x03\x02\x02\x02" +
    "\u062E\u0630\bn\x01\x02\u062F\u0631\x05\xDCo\x02\u0630\u062F\x03\x02\x02" +
    "\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0636\x03\x02\x02\x02\u0632\u0633" +
    "\x05\xDCo\x02\u0633\u0634\x07~\x02\x02\u0634\u0636\x03\x02\x02\x02\u0635" +
    "\u062E\x03\x02\x02\x02\u0635\u0632\x03\x02\x02\x02\u0636\u0643\x03\x02" +
    "\x02\x02\u0637\u0638\f\x05\x02\x02\u0638\u063A\x07u\x02\x02\u0639\u063B" +
    "\x05\xDCo\x02\u063A\u0639\x03\x02\x02\x02\u063A\u063B\x03\x02\x02\x02" +
    "\u063B\u0642\x03\x02\x02\x02\u063C\u063D\f\x03\x02\x02\u063D\u063E\x07" +
    "u\x02\x02\u063E\u063F\x05\xDCo\x02\u063F\u0640\x07~\x02\x02\u0640\u0642" +
    "\x03\x02\x02\x02\u0641\u0637\x03\x02\x02\x02\u0641\u063C\x03\x02\x02\x02" +
    "\u0642\u0645\x03\x02\x02\x02\u0643\u0641\x03\x02\x02\x02\u0643\u0644\x03" +
    "\x02\x02\x02\u0644\xDB\x03\x02\x02\x02\u0645\u0643\x03\x02\x02\x02\u0646" +
    "\u0648\x05\xDEp\x02\u0647\u0649\x05\xE4s\x02\u0648\u0647\x03\x02\x02\x02" +
    "\u0648\u0649\x03\x02\x02\x02\u0649\xDD\x03\x02\x02\x02\u064A\u064D\x07" +
    "\x7F\x02\x02\u064B\u064D\x05\xE0q\x02\u064C\u064A\x03\x02\x02\x02\u064C" +
    "\u064B\x03\x02\x02\x02\u064D\xDF\x03\x02\x02\x02\u064E\u064F\x05\xE2r" +
    "\x02\u064F\u0650\x07z\x02\x02\u0650\u0651\x07\x7F\x02\x02\u0651\xE1\x03" +
    "\x02\x02\x02\u0652\u0653\x07\x7F\x02\x02\u0653\xE3\x03\x02\x02\x02\u0654" +
    "\u0655\x07P\x02\x02\u0655\u0656\x05\xE6t\x02\u0656\u0657\x07Q\x02\x02" +
    "\u0657\xE5\x03\x02\x02\x02\u0658\u065A\bt\x01\x02\u0659\u065B\x05\xE8" +
    "u\x02\u065A\u0659\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u0660" +
    "\x03\x02\x02\x02\u065C\u065D\f\x03\x02\x02\u065D\u065F\x05\xE8u\x02\u065E" +
    "\u065C\x03\x02\x02\x02\u065F\u0662\x03\x02\x02\x02\u0660\u065E\x03\x02" +
    "\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\xE7\x03\x02\x02\x02\u0662\u0660" +
    "\x03\x02\x02\x02\u0663\u0664\x07P\x02\x02\u0664\u0665\x05\xE6t\x02\u0665" +
    "\u0666\x07Q\x02\x02\u0666\u0670\x03\x02\x02\x02\u0667\u0668\x07R\x02\x02" +
    "\u0668\u0669\x05\xE6t\x02\u0669\u066A\x07S\x02\x02\u066A\u0670\x03\x02" +
    "\x02\x02\u066B\u066C\x07T\x02\x02\u066C\u066D\x05\xE6t\x02\u066D\u066E" +
    "\x07U\x02\x02\u066E\u0670\x03\x02\x02\x02\u066F\u0663\x03\x02\x02\x02" +
    "\u066F\u0667\x03\x02\x02\x02\u066F\u066B\x03\x02\x02\x02\u0670\xE9\x03" +
    "\x02\x02\x02\u0671\u0672\bv\x01\x02\u0672\u0673\x05\xECw\x02\u0673\u0679" +
    "\x03\x02\x02\x02\u0674\u0675\f\x03\x02\x02\u0675\u0676\x07u\x02\x02\u0676" +
    "\u0678\x05\xECw\x02\u0677\u0674\x03\x02\x02\x02\u0678\u067B\x03\x02\x02" +
    "\x02\u0679\u0677\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\xEB" +
    "\x03\x02\x02\x02\u067B\u0679\x03\x02\x02\x02\u067C\u067E\x05\xEEx\x02" +
    "\u067D\u067F\x05\u0118\x8D\x02\u067E\u067D\x03\x02\x02\x02\u067E\u067F" +
    "\x03\x02\x02\x02\u067F\xED\x03\x02\x02\x02\u0680\u0686\x05\xF0y\x02\u0681" +
    "\u0682\x05\xF2z\x02\u0682\u0683\x05\xF4{\x02\u0683\u0684\x05\xF6|\x02" +
    "\u0684\u0686\x03\x02\x02\x02\u0685\u0680\x03\x02\x02\x02\u0685\u0681\x03" +
    "\x02\x02\x02\u0686\xEF\x03\x02\x02\x02\u0687\u068C\x05\xF2z\x02\u0688" +
    "\u0689\x05\xF8}\x02\u0689\u068A\x05\xF0y\x02\u068A\u068C\x03\x02\x02\x02" +
    "\u068B\u0687\x03\x02\x02\x02\u068B\u0688\x03\x02\x02\x02\u068C\xF1\x03" +
    "\x02\x02\x02\u068D\u068E\bz\x01\x02\u068E\u0690\x05\u0100\x81\x02\u068F" +
    "\u0691\x05\xD4k\x02\u0690\u068F\x03\x02\x02\x02\u0690\u0691\x03\x02\x02" +
    "\x02\u0691\u0697\x03\x02\x02\x02\u0692\u0693\x07P\x02\x02\u0693\u0694" +
    "\x05\xF0y\x02\u0694\u0695\x07Q\x02\x02\u0695\u0697\x03\x02\x02\x02\u0696" +
    "\u068D\x03\x02\x02\x02\u0696\u0692\x03\x02\x02\x02\u0697\u06A5\x03\x02" +
    "\x02\x02\u0698\u0699\f\x05\x02\x02\u0699\u06A4\x05\xF4{\x02\u069A\u069B" +
    "\f\x04\x02\x02\u069B\u069D\x07R\x02\x02\u069C\u069E\x05^0\x02\u069D\u069C" +
    "\x03\x02\x02\x02\u069D\u069E\x03\x02\x02\x02\u069E\u069F\x03\x02\x02\x02" +
    "\u069F\u06A1\x07S\x02\x02\u06A0\u06A2\x05\xD4k\x02\u06A1\u06A0\x03\x02" +
    "\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A4\x03\x02\x02\x02\u06A3" +
    "\u0698\x03\x02\x02\x02\u06A3\u069A\x03\x02\x02\x02\u06A4\u06A7\x03\x02" +
    "\x02\x02\u06A5\u06A3\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6" +
    "\xF3\x03\x02\x02\x02\u06A7\u06A5\x03\x02\x02\x02\u06A8\u06A9\x07P\x02" +
    "\x02\u06A9\u06AA\x05\u010E\x88\x02\u06AA\u06AC\x07Q\x02\x02\u06AB\u06AD" +
    "\x05\xFA~\x02\u06AC\u06AB\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02" +
    "\u06AD\u06AF\x03\x02\x02\x02\u06AE\u06B0\x05\xFE\x80\x02\u06AF\u06AE\x03" +
    "\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\u06B2\x03\x02\x02\x02\u06B1" +
    "\u06B3\x05\u017E\xC0\x02\u06B2\u06B1\x03\x02\x02\x02\u06B2\u06B3\x03\x02" +
    "\x02\x02\u06B3\u06B5\x03\x02\x02\x02\u06B4\u06B6\x05\xD4k\x02\u06B5\u06B4" +
    "\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\xF5\x03\x02\x02\x02" +
    "\u06B7\u06B8\x07w\x02\x02\u06B8\u06BA\x05\x9AN\x02\u06B9\u06BB\x05\u0104" +
    "\x83\x02\u06BA\u06B9\x03\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB" +
    "\xF7\x03\x02\x02\x02\u06BC\u06BE\x07X\x02\x02\u06BD\u06BF\x05\xD4k\x02" +
    "\u06BE\u06BD\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C1\x03" +
    "\x02\x02\x02\u06C0\u06C2\x05\xFA~\x02\u06C1\u06C0\x03\x02\x02\x02\u06C1" +
    "\u06C2\x03\x02\x02\x02\u06C2\u06D4\x03\x02\x02\x02\u06C3\u06C5\x07\\\x02" +
    "\x02\u06C4\u06C6\x05\xD4k\x02\u06C5\u06C4\x03\x02\x02\x02\u06C5\u06C6" +
    "\x03\x02\x02\x02\u06C6\u06D4\x03\x02\x02\x02\u06C7\u06C9\x07q\x02\x02" +
    "\u06C8\u06CA\x05\xD4k\x02\u06C9\u06C8\x03\x02\x02\x02\u06C9\u06CA\x03" +
    "\x02\x02\x02\u06CA\u06D4\x03\x02\x02\x02\u06CB\u06CC\x05\f\x07\x02\u06CC" +
    "\u06CE\x07X\x02\x02\u06CD\u06CF\x05\xD4k\x02\u06CE\u06CD\x03\x02\x02\x02" +
    "\u06CE\u06CF\x03\x02\x02\x02\u06CF\u06D1\x03\x02\x02\x02\u06D0\u06D2\x05" +
    "\xFA~\x02\u06D1\u06D0\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2" +
    "\u06D4\x03\x02\x02\x02\u06D3\u06BC\x03\x02\x02\x02\u06D3\u06C3\x03\x02" +
    "\x02\x02\u06D3\u06C7\x03\x02\x02\x02\u06D3\u06CB\x03\x02\x02\x02\u06D4" +
    "\xF9\x03\x02\x02\x02\u06D5\u06D7\x05\xFC\x7F\x02\u06D6\u06D8\x05\xFA~" +
    "\x02\u06D7\u06D6\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\xFB" +
    "\x03\x02\x02\x02\u06D9\u06DA\t\x06\x02\x02\u06DA\xFD\x03\x02\x02\x02\u06DB" +
    "\u06DC\t\x07\x02\x02\u06DC\xFF\x03\x02\x02\x02\u06DD\u06DF\x07~\x02\x02" +
    "\u06DE\u06DD\x03\x02\x02\x02\u06DE\u06DF\x03\x02\x02\x02\u06DF\u06E0\x03" +
    "\x02\x02\x02\u06E0\u06E1\x05\x06\x04\x02\u06E1\u0101\x03\x02\x02\x02\u06E2" +
    "\u06E4\x05\x98M\x02\u06E3\u06E5\x05\u0104\x83\x02\u06E4\u06E3\x03\x02" +
    "\x02\x02\u06E4\u06E5\x03\x02\x02\x02\u06E5\u0103\x03\x02\x02\x02\u06E6" +
    "\u06EF\x05\u0106\x84\x02\u06E7\u06E9\x05\u0108\x85\x02\u06E8\u06E7\x03" +
    "\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9\u06EA\x03\x02\x02\x02\u06EA" +
    "\u06EB\x05\xF4{\x02\u06EB\u06EC\x05\xF6|\x02\u06EC\u06EF\x03\x02\x02\x02" +
    "\u06ED\u06EF\x05\u010A\x86\x02\u06EE\u06E6\x03\x02\x02\x02\u06EE\u06E8" +
    "\x03\x02\x02\x02\u06EE\u06ED\x03\x02\x02\x02\u06EF\u0105\x03\x02\x02\x02" +
    "\u06F0\u06F6\x05\u0108\x85\x02\u06F1\u06F3\x05\xF8}\x02\u06F2\u06F4\x05" +
    "\u0106\x84\x02\u06F3\u06F2\x03\x02\x02\x02\u06F3\u06F4\x03\x02\x02\x02" +
    "\u06F4\u06F6\x03\x02\x02\x02\u06F5\u06F0\x03\x02\x02\x02\u06F5\u06F1\x03" +
    "\x02\x02\x02\u06F6\u0107\x03\x02\x02\x02\u06F7\u06F8\b\x85\x01\x02\u06F8" +
    "\u0706\x05\xF4{\x02\u06F9\u06FB\x07R\x02\x02\u06FA\u06FC\x05^0\x02\u06FB" +
    "\u06FA\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FD\x03\x02" +
    "\x02\x02\u06FD\u06FF\x07S\x02\x02\u06FE\u0700\x05\xD4k\x02\u06FF\u06FE" +
    "\x03\x02\x02\x02\u06FF\u0700\x03\x02\x02\x02\u0700\u0706\x03\x02\x02\x02" +
    "\u0701\u0702\x07P\x02\x02\u0702\u0703\x05\u0106\x84\x02\u0703\u0704\x07" +
    "Q\x02\x02\u0704\u0706\x03\x02\x02\x02\u0705\u06F7\x03\x02\x02\x02\u0705" +
    "\u06F9\x03\x02\x02\x02\u0705\u0701\x03\x02\x02\x02\u0706\u0714\x03\x02" +
    "\x02\x02\u0707\u0708\f\x07\x02\x02\u0708\u0713\x05\xF4{\x02\u0709\u070A" +
    "\f\x05\x02\x02\u070A\u070C\x07R\x02\x02\u070B\u070D\x05^0\x02\u070C\u070B" +
    "\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u070E\x03\x02\x02\x02" +
    "\u070E\u0710\x07S\x02\x02\u070F\u0711\x05\xD4k\x02\u0710\u070F\x03\x02" +
    "\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u0713\x03\x02\x02\x02\u0712" +
    "\u0707\x03\x02\x02\x02\u0712\u0709\x03\x02\x02\x02\u0713\u0716\x03\x02" +
    "\x02\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715" +
    "\u0109\x03\x02\x02\x02\u0716\u0714\x03\x02\x02\x02\u0717\u071C\x05\u010C" +
    "\x87\x02\u0718\u0719\x05\xF8}\x02\u0719\u071A\x05\u010A\x86\x02\u071A" +
    "\u071C\x03\x02\x02\x02\u071B\u0717\x03\x02\x02\x02\u071B\u0718\x03\x02" +
    "\x02\x02\u071C\u010B\x03\x02\x02\x02\u071D\u071E\b\x87\x01\x02\u071E\u071F" +
    "\x07~\x02\x02\u071F\u072D\x03\x02\x02\x02\u0720\u0721\f\x05\x02\x02\u0721" +
    "\u072C\x05\xF4{\x02\u0722\u0723\f\x04\x02\x02\u0723\u0725\x07R\x02\x02" +
    "\u0724\u0726\x05^0\x02\u0725\u0724\x03\x02\x02\x02\u0725\u0726\x03\x02" +
    "\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0729\x07S\x02\x02\u0728\u072A" +
    "\x05\xD4k\x02\u0729\u0728\x03\x02\x02\x02\u0729\u072A\x03\x02\x02\x02" +
    "\u072A\u072C\x03\x02\x02\x02\u072B\u0720\x03\x02\x02\x02\u072B\u0722\x03" +
    "\x02\x02\x02\u072C\u072F\x03\x02\x02\x02\u072D\u072B\x03\x02\x02\x02\u072D" +
    "\u072E\x03\x02\x02\x02\u072E\u010D\x03\x02\x02\x02\u072F\u072D\x03\x02" +
    "\x02\x02\u0730\u0732\x05\u0110\x89\x02\u0731\u0730\x03\x02\x02\x02\u0731" +
    "\u0732\x03\x02\x02\x02\u0732\u0734\x03\x02\x02\x02\u0733\u0735\x07~\x02" +
    "\x02\u0734\u0733\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735\u073B" +
    "\x03\x02\x02\x02\u0736\u0737\x05\u0110\x89\x02\u0737\u0738\x07u\x02\x02" +
    "\u0738\u0739\x07~\x02\x02\u0739\u073B\x03\x02\x02\x02\u073A\u0731\x03" +
    "\x02\x02\x02\u073A\u0736\x03\x02\x02\x02\u073B\u010F\x03\x02\x02\x02\u073C" +
    "\u073D\b\x89\x01\x02\u073D\u073E\x05\u0112\x8A\x02\u073E\u0744\x03\x02" +
    "\x02\x02\u073F\u0740\f\x03\x02\x02\u0740\u0741\x07u\x02\x02\u0741\u0743" +
    "\x05\u0112\x8A\x02\u0742\u073F\x03\x02\x02\x02\u0743\u0746\x03\x02\x02" +
    "\x02\u0744\u0742\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02\u0745\u0111" +
    "\x03\x02\x02\x02\u0746\u0744\x03\x02\x02\x02\u0747\u0749\x05\xD4k\x02" +
    "\u0748\u0747\x03\x02\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749\u074A\x03" +
    "\x02\x02\x02\u074A\u074B\x05\x8CG\x02\u074B\u074C\x05\xEEx\x02\u074C\u0767" +
    "\x03\x02\x02\x02\u074D\u074F\x05\xD4k\x02\u074E\u074D\x03\x02\x02\x02" +
    "\u074E\u074F\x03\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\u0751\x05" +
    "\x8CG\x02\u0751\u0752\x05\xEEx\x02\u0752\u0753\x07`\x02\x02\u0753\u0754" +
    "\x05\u011C\x8F\x02\u0754\u0767\x03\x02\x02\x02\u0755\u0757\x05\xD4k\x02" +
    "\u0756\u0755\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757\u0758\x03" +
    "\x02\x02\x02\u0758\u075A\x05\x8CG\x02\u0759\u075B\x05\u0104\x83\x02\u075A" +
    "\u0759\x03\x02\x02\x02\u075A\u075B\x03\x02\x02\x02\u075B\u0767\x03\x02" +
    "\x02\x02\u075C\u075E\x05\xD4k\x02\u075D\u075C\x03\x02\x02\x02\u075D\u075E" +
    "\x03\x02\x02\x02\u075E\u075F\x03\x02\x02\x02\u075F\u0761\x05\x8CG\x02" +
    "\u0760\u0762\x05\u0104\x83\x02\u0761\u0760\x03\x02\x02\x02\u0761\u0762" +
    "\x03\x02\x02\x02\u0762\u0763\x03\x02\x02\x02\u0763\u0764\x07`\x02\x02" +
    "\u0764\u0765\x05\u011C\x8F\x02\u0765\u0767\x03\x02\x02\x02\u0766\u0748" +
    "\x03\x02\x02\x02\u0766\u074E\x03\x02\x02\x02\u0766\u0756\x03\x02\x02\x02" +
    "\u0766\u075D\x03\x02\x02\x02\u0767\u0113\x03\x02\x02\x02\u0768\u076A\x05" +
    "\xD4k\x02\u0769\u0768\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A" +
    "\u076C\x03\x02\x02\x02\u076B\u076D\x05\x8CG\x02\u076C\u076B\x03\x02\x02" +
    "\x02\u076C\u076D\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E\u0770" +
    "\x05\xEEx\x02\u076F\u0771\x05\u0136\x9C\x02\u0770\u076F\x03\x02\x02\x02" +
    "\u0770\u0771\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0773\x05" +
    "\u0116\x8C\x02\u0773\u0115\x03\x02\x02\x02\u0774\u0776\x05\u014E\xA8\x02" +
    "\u0775\u0774\x03\x02\x02\x02\u0775\u0776\x03\x02\x02\x02\u0776\u0777\x03" +
    "\x02\x02\x02\u0777\u0780\x05f4\x02\u0778\u0780\x05\u0174\xBB\x02\u0779" +
    "\u077A\x07`\x02\x02\u077A\u077B\x07\x16\x02\x02\u077B\u0780\x07{\x02\x02" +
    "\u077C\u077D\x07`\x02\x02\u077D\u077E\x07\x17\x02\x02\u077E\u0780\x07" +
    "{\x02\x02\u077F\u0775\x03\x02\x02\x02\u077F\u0778\x03\x02\x02\x02\u077F" +
    "\u0779\x03\x02\x02\x02\u077F\u077C\x03\x02\x02\x02\u0780\u0117\x03\x02" +
    "\x02\x02\u0781\u0787\x05\u011A\x8E\x02\u0782\u0783\x07P\x02\x02\u0783" +
    "\u0784\x05&\x14\x02\u0784\u0785\x07Q\x02\x02\u0785\u0787\x03\x02\x02\x02" +
    "\u0786\u0781\x03\x02\x02\x02\u0786\u0782\x03\x02\x02\x02\u0787\u0119\x03" +
    "\x02\x02\x02\u0788\u0789\x07`\x02\x02\u0789\u078C\x05\u011C\x8F\x02\u078A" +
    "\u078C\x05\u0120\x91\x02\u078B\u0788\x03\x02\x02\x02\u078B\u078A\x03\x02" +
    "\x02\x02\u078C\u011B\x03\x02\x02\x02\u078D\u0790\x05X-\x02\u078E\u0790" +
    "\x05\u0120\x91\x02\u078F\u078D\x03\x02\x02\x02\u078F\u078E\x03\x02\x02" +
    "\x02\u0790\u011D\x03\x02\x02\x02\u0791\u0792\b\x90\x01\x02\u0792\u0794" +
    "\x05\u011C\x8F\x02\u0793\u0795\x07~\x02\x02\u0794\u0793\x03\x02\x02\x02" +
    "\u0794\u0795\x03\x02\x02\x02\u0795\u079E\x03\x02\x02\x02\u0796\u0797\f" +
    "\x03\x02\x02\u0797\u0798\x07u\x02\x02\u0798\u079A\x05\u011C\x8F\x02\u0799" +
    "\u079B\x07~\x02\x02\u079A\u0799\x03\x02\x02\x02\u079A\u079B\x03\x02\x02" +
    "\x02\u079B\u079D\x03\x02\x02\x02\u079C\u0796\x03\x02\x02\x02\u079D\u07A0" +
    "\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02" +
    "\u079F\u011F\x03\x02\x02\x02\u07A0\u079E\x03\x02\x02\x02\u07A1\u07A2\x07" +
    "T\x02\x02\u07A2\u07A4\x05\u011E\x90\x02\u07A3\u07A5\x07u\x02\x02\u07A4" +
    "\u07A3\x03\x02\x02\x02\u07A4\u07A5\x03\x02\x02\x02\u07A5\u07A6\x03\x02" +
    "\x02\x02\u07A6\u07A7\x07U\x02\x02\u07A7\u07AB\x03\x02\x02\x02\u07A8\u07A9" +
    "\x07T\x02\x02\u07A9\u07AB\x07U\x02\x02\u07AA\u07A1\x03\x02\x02\x02\u07AA" +
    "\u07A8\x03\x02\x02\x02\u07AB\u0121\x03\x02\x02\x02\u07AC\u07AF\x07\x7F" +
    "\x02\x02\u07AD\u07AF\x05\u0162\xB2\x02\u07AE\u07AC\x03\x02\x02\x02\u07AE" +
    "\u07AD\x03\x02\x02\x02\u07AF\u0123\x03\x02\x02\x02\u07B0\u07B1\x05\u0126" +
    "\x94\x02\u07B1\u07B3\x07T\x02\x02\u07B2\u07B4\x05\u012E\x98\x02\u07B3" +
    "\u07B2\x03\x02\x02\x02\u07B3\u07B4\x03\x02\x02\x02\u07B4\u07B5\x03\x02" +
    "\x02\x02\u07B5\u07B6\x07U\x02\x02\u07B6\u0125\x03\x02\x02\x02\u07B7\u07B9" +
    "\x05\u012C\x97\x02\u07B8\u07BA\x05\xD4k\x02\u07B9\u07B8\x03\x02\x02\x02" +
    "\u07B9\u07BA\x03\x02\x02\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB\u07BD\x05" +
    "\u0128\x95\x02\u07BC\u07BE\x05\u012A\x96\x02\u07BD\u07BC\x03\x02\x02\x02" +
    "\u07BD\u07BE\x03\x02\x02\x02\u07BE\u07C0\x03\x02\x02\x02\u07BF\u07C1\x05" +
    "\u013C\x9F\x02\u07C0\u07BF\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02" +
    "\u07C1\u07CA\x03\x02\x02\x02\u07C2\u07C4\x05\u012C\x97\x02\u07C3\u07C5" +
    "\x05\xD4k\x02\u07C4\u07C3\x03\x02\x02\x02\u07C4\u07C5\x03\x02\x02\x02" +
    "\u07C5\u07C7\x03\x02\x02\x02\u07C6\u07C8\x05\u013C\x9F\x02\u07C7\u07C6" +
    "\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07CA\x03\x02\x02\x02" +
    "\u07C9\u07B7\x03\x02\x02\x02\u07C9\u07C2\x03\x02\x02\x02\u07CA\u0127\x03" +
    "\x02\x02\x02\u07CB\u07CD\x05\f\x07\x02\u07CC\u07CB\x03\x02\x02\x02\u07CC" +
    "\u07CD\x03\x02\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE\u07CF\x05\u0122" +
    "\x92\x02\u07CF\u0129\x03\x02\x02\x02\u07D0\u07D1\x07!\x02\x02\u07D1\u012B" +
    "\x03\x02\x02\x02\u07D2\u07D3\t\b\x02\x02\u07D3\u012D\x03\x02\x02\x02\u07D4" +
    "\u07D6\x05\u0130\x99\x02\u07D5\u07D7\x05\u012E\x98\x02\u07D6\u07D5\x03" +
    "\x02\x02\x02\u07D6\u07D7\x03\x02\x02\x02\u07D7\u07DE\x03\x02\x02\x02\u07D8" +
    "\u07D9\x05\u0146\xA4\x02\u07D9\u07DB\x07y\x02\x02\u07DA\u07DC\x05\u012E" +
    "\x98\x02\u07DB\u07DA\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC" +
    "\u07DE\x03\x02\x02\x02\u07DD\u07D4\x03\x02\x02\x02\u07DD\u07D8\x03\x02" +
    "\x02\x02\u07DE\u012F\x03\x02\x02\x02\u07DF\u07E1\x05\xD4k\x02\u07E0\u07DF" +
    "\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u07E3\x03\x02\x02\x02" +
    "\u07E2\u07E4\x05\x8CG\x02\u07E3\u07E2\x03\x02\x02\x02\u07E3\u07E4\x03" +
    "\x02\x02\x02\u07E4\u07E6\x03\x02\x02\x02\u07E5\u07E7\x05\u0132\x9A\x02" +
    "\u07E6\u07E5\x03\x02\x02\x02\u07E6\u07E7\x03\x02\x02\x02\u07E7\u07E8\x03" +
    "\x02\x02\x02\u07E8\u07F0\x07{\x02\x02\u07E9\u07F0\x05\u0114\x8B\x02\u07EA" +
    "\u07F0\x05\xCCg\x02\u07EB\u07F0\x05\x84C\x02\u07EC\u07F0\x05\u015A\xAE" +
    "\x02\u07ED\u07F0\x05\x80A\x02\u07EE\u07F0\x05\x86D\x02\u07EF\u07E0\x03" +
    "\x02\x02\x02\u07EF\u07E9\x03\x02\x02\x02\u07EF\u07EA\x03\x02\x02\x02\u07EF" +
    "\u07EB\x03\x02\x02\x02\u07EF\u07EC\x03\x02\x02\x02\u07EF\u07ED\x03\x02" +
    "\x02\x02\u07EF\u07EE\x03\x02\x02\x02\u07F0\u0131\x03\x02\x02\x02\u07F1" +
    "\u07F2\b\x9A\x01\x02\u07F2\u07F3\x05\u0134\x9B\x02\u07F3\u07F9\x03\x02" +
    "\x02\x02\u07F4\u07F5\f\x03\x02\x02\u07F5\u07F6\x07u\x02\x02\u07F6\u07F8" +
    "\x05\u0134\x9B\x02\u07F7\u07F4\x03\x02\x02\x02\u07F8\u07FB\x03\x02\x02" +
    "\x02\u07F9\u07F7\x03\x02\x02\x02\u07F9\u07FA\x03\x02\x02\x02\u07FA\u0133" +
    "\x03\x02\x02\x02\u07FB\u07F9\x03\x02\x02\x02\u07FC\u07FE\x05\xEEx\x02" +
    "\u07FD\u07FF\x05\u0136\x9C\x02\u07FE\u07FD\x03\x02\x02\x02\u07FE\u07FF" +
    "\x03\x02\x02\x02\u07FF\u0801\x03\x02\x02\x02\u0800\u0802\x05\u013A\x9E" +
    "\x02\u0801\u0800\x03\x02\x02\x02\u0801\u0802\x03\x02\x02\x02\u0802\u0810" +
    "\x03\x02\x02\x02\u0803\u0805\x05\xEEx\x02\u0804\u0806\x05\u011A\x8E\x02" +
    "\u0805\u0804\x03\x02\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806\u0810\x03" +
    "\x02\x02\x02\u0807\u0809\x07\x7F\x02\x02\u0808\u0807\x03\x02\x02\x02\u0808" +
    "\u0809\x03\x02\x02\x02\u0809\u080B\x03\x02\x02\x02\u080A\u080C\x05\xD4" +
    "k\x02\u080B\u080A\x03\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u080D" +
    "\x03\x02\x02\x02\u080D\u080E\x07y\x02\x02\u080E\u0810\x05^0\x02\u080F" +
    "\u07FC\x03\x02\x02\x02\u080F\u0803\x03\x02\x02\x02\u080F\u0808\x03\x02" +
    "\x02\x02\u0810\u0135\x03\x02\x02\x02\u0811\u0812\b\x9C\x01\x02\u0812\u0813" +
    "\x05\u0138\x9D\x02\u0813\u0818\x03\x02\x02\x02\u0814\u0815\f\x03\x02\x02" +
    "\u0815\u0817\x05\u0138\x9D\x02\u0816\u0814\x03\x02\x02\x02\u0817\u081A" +
    "\x03\x02\x02\x02\u0818\u0816\x03\x02\x02\x02\u0818\u0819\x03\x02\x02\x02" +
    "\u0819\u0137\x03\x02\x02\x02\u081A\u0818\x03\x02\x02\x02\u081B\u081C\t" +
    "\t\x02\x02\u081C\u0139\x03\x02\x02\x02\u081D\u081E\x07`\x02\x02\u081E" +
    "\u081F\x07\x82\x02\x02\u081F\u013B\x03\x02\x02\x02\u0820\u0821\x07y\x02" +
    "\x02\u0821\u0822\x05\u013E\xA0\x02\u0822\u013D\x03\x02\x02\x02\u0823\u0824" +
    "\b\xA0\x01\x02\u0824\u0826\x05\u0140\xA1\x02\u0825\u0827\x07~\x02\x02" +
    "\u0826\u0825\x03\x02\x02\x02\u0826\u0827\x03\x02\x02\x02\u0827\u0830\x03" +
    "\x02\x02\x02\u0828\u0829\f\x03\x02\x02\u0829\u082A\x07u\x02\x02\u082A" +
    "\u082C\x05\u0140\xA1\x02\u082B\u082D\x07~\x02\x02\u082C\u082B\x03\x02" +
    "\x02\x02\u082C\u082D\x03\x02\x02\x02\u082D\u082F\x03\x02\x02\x02\u082E" +
    "\u0828\x03\x02\x02\x02\u082F\u0832\x03\x02\x02\x02\u0830\u082E\x03\x02" +
    "\x02\x02\u0830\u0831\x03\x02\x02\x02\u0831\u013F\x03\x02\x02\x02\u0832" +
    "\u0830\x03\x02\x02\x02\u0833\u0835\x05\xD4k\x02\u0834\u0833\x03\x02\x02" +
    "\x02\u0834\u0835\x03\x02\x02\x02\u0835\u0836\x03\x02\x02\x02\u0836\u0849" +
    "\x05\u0144\xA3\x02\u0837\u0839\x05\xD4k\x02\u0838\u0837\x03\x02\x02\x02" +
    "\u0838\u0839\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02\u083A\u083C\x07" +
    "K\x02\x02\u083B\u083D\x05\u0146\xA4\x02\u083C\u083B\x03\x02\x02\x02\u083C" +
    "\u083D\x03\x02\x02\x02\u083D\u083E\x03\x02\x02\x02\u083E\u0849\x05\u0144" +
    "\xA3\x02\u083F\u0841\x05\xD4k\x02\u0840\u083F\x03\x02\x02\x02\u0840\u0841" +
    "\x03\x02\x02\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0844\x05\u0146\xA4" +
    "\x02\u0843\u0845\x07K\x02\x02\u0844\u0843\x03\x02\x02\x02\u0844\u0845" +
    "\x03\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\u0847\x05\u0144\xA3" +
    "\x02\u0847\u0849\x03\x02\x02\x02\u0848\u0834\x03\x02\x02\x02\u0848\u0838" +
    "\x03\x02\x02\x02\u0848\u0840\x03\x02\x02\x02\u0849\u0141\x03\x02\x02\x02" +
    "\u084A\u084C\x05\f\x07\x02\u084B\u084A\x03\x02\x02\x02\u084B\u084C\x03" +
    "\x02\x02\x02\u084C\u084D\x03\x02\x02\x02\u084D\u0850\x05\u0122\x92\x02" +
    "\u084E\u0850\x05\xA0Q\x02\u084F\u084B\x03\x02\x02\x02\u084F\u084E\x03" +
    "\x02\x02\x02\u0850\u0143\x03\x02\x02\x02\u0851\u0852\x05\u0142\xA2\x02" +
    "\u0852\u0145\x03\x02\x02\x02\u0853\u0854\t\n\x02\x02\u0854\u0147\x03\x02" +
    "\x02\x02\u0855\u0856\x07/\x02\x02\u0856\u0857\x05\u014A\xA6\x02\u0857" +
    "\u0149\x03\x02\x02\x02\u0858\u085A\x05\x98M\x02\u0859\u085B\x05\u014C" +
    "\xA7\x02\u085A\u0859\x03\x02\x02\x02\u085A\u085B\x03\x02\x02\x02\u085B" +
    "\u014B\x03\x02\x02\x02\u085C\u085E\x05\xF8}\x02\u085D\u085F\x05\u014C" +
    "\xA7\x02\u085E\u085D\x03\x02\x02\x02\u085E\u085F\x03\x02\x02\x02\u085F" +
    "\u014D\x03\x02\x02\x02\u0860\u0861\x07y\x02\x02\u0861\u0862\x05\u0150" +
    "\xA9\x02\u0862\u014F\x03\x02\x02\x02\u0863\u0865\x05\u0152\xAA\x02\u0864" +
    "\u0866\x07~\x02\x02\u0865\u0864\x03\x02\x02\x02\u0865\u0866\x03\x02\x02" +
    "\x02\u0866\u086F\x03\x02\x02\x02\u0867\u0869\x05\u0152\xAA\x02\u0868\u086A" +
    "\x07~\x02\x02\u0869\u0868\x03\x02\x02\x02\u0869\u086A\x03\x02\x02\x02" +
    "\u086A\u086B\x03\x02\x02\x02\u086B\u086C\x07u\x02\x02\u086C\u086D\x05" +
    "\u0150\xA9\x02\u086D\u086F\x03\x02\x02\x02\u086E\u0863\x03\x02\x02\x02" +
    "\u086E\u0867\x03\x02\x02\x02\u086F\u0151\x03\x02\x02\x02\u0870\u0871\x05" +
    "\u0154\xAB\x02\u0871\u0873\x07P\x02\x02\u0872\u0874\x05&\x14\x02\u0873" +
    "\u0872\x03\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874\u0875\x03\x02" +
    "\x02\x02\u0875\u0876\x07Q\x02\x02\u0876\u087B\x03\x02\x02\x02\u0877\u0878" +
    "\x05\u0154\xAB\x02\u0878\u0879\x05\u0120\x91\x02\u0879\u087B\x03\x02\x02" +
    "\x02\u087A\u0870\x03\x02\x02\x02\u087A\u0877";
CPP14Parser._serializedATNSegment4 = "\x03\x02\x02\x02\u087B\u0153\x03\x02\x02\x02\u087C\u087F\x05\u0142\xA2" +
    "\x02\u087D\u087F\x07\x7F\x02\x02\u087E\u087C\x03\x02\x02\x02\u087E\u087D" +
    "\x03\x02\x02\x02\u087F\u0155\x03\x02\x02\x02\u0880\u0881\x07/\x02\x02" +
    "\u0881\u0882\x05\u018A\xC6\x02\u0882\u0157\x03\x02\x02\x02\u0883\u0884" +
    "\x07/\x02\x02\u0884\u0885\x07\x88\x02\x02\u0885\u0889\x07\x7F\x02\x02" +
    "\u0886\u0887\x07/\x02\x02\u0887\u0889\x07\x8B\x02\x02\u0888\u0883\x03" +
    "\x02\x02\x02\u0888\u0886\x03\x02\x02\x02\u0889\u0159\x03\x02\x02\x02\u088A" +
    "\u088B\x07?\x02\x02\u088B\u088C\x07a\x02\x02\u088C\u088D\x05\u015C\xAF" +
    "\x02\u088D\u088E\x07b\x02\x02\u088E\u088F\x05|?\x02\u088F\u015B\x03\x02" +
    "\x02\x02\u0890\u0891\b\xAF\x01\x02\u0891\u0892\x05\u015E\xB0\x02\u0892" +
    "\u0898\x03\x02\x02\x02\u0893\u0894\f\x03\x02\x02\u0894\u0895\x07u\x02" +
    "\x02\u0895\u0897\x05\u015E\xB0\x02\u0896\u0893\x03\x02\x02\x02\u0897\u089A" +
    "\x03\x02\x02\x02\u0898\u0896\x03\x02\x02\x02\u0898\u0899\x03\x02\x02\x02" +
    "\u0899\u015D\x03\x02\x02\x02\u089A\u0898\x03\x02\x02\x02\u089B\u089E\x05" +
    "\u0160\xB1\x02\u089C\u089E\x05\u0112\x8A\x02\u089D\u089B\x03\x02\x02\x02" +
    "\u089D\u089C\x03\x02\x02\x02\u089E\u015F\x03\x02\x02\x02\u089F\u08A1\x07" +
    "\x10\x02\x02\u08A0\u08A2\x07~\x02\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1" +
    "\u08A2\x03\x02\x02\x02\u08A2\u08A4\x03\x02\x02\x02\u08A3\u08A5\x07\x7F" +
    "\x02\x02\u08A4\u08A3\x03\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02\u08A5" +
    "\u08D0\x03\x02\x02\x02\u08A6\u08A8\x07\x10\x02\x02\u08A7\u08A9\x07\x7F" +
    "\x02\x02\u08A8\u08A7\x03\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9" +
    "\u08AA\x03\x02\x02\x02\u08AA\u08AB\x07`\x02\x02\u08AB\u08D0\x05\u0102" +
    "\x82\x02\u08AC\u08AE\x07G\x02\x02\u08AD\u08AF\x07~\x02\x02\u08AE\u08AD" +
    "\x03\x02\x02\x02\u08AE\u08AF\x03\x02\x02\x02\u08AF\u08B1\x03\x02\x02\x02" +
    "\u08B0\u08B2\x07\x7F\x02\x02\u08B1\u08B0\x03\x02\x02\x02\u08B1\u08B2\x03" +
    "\x02\x02\x02\u08B2\u08D0\x03\x02\x02\x02\u08B3\u08B5\x07G\x02\x02\u08B4" +
    "\u08B6\x07\x7F\x02\x02\u08B5\u08B4\x03\x02\x02\x02\u08B5\u08B6\x03\x02" +
    "\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7\u08B8\x07`\x02\x02\u08B8\u08D0" +
    "\x05\u0102\x82\x02\u08B9\u08BA\x07?\x02\x02\u08BA\u08BB\x07a\x02\x02\u08BB" +
    "\u08BC\x05\u015C\xAF\x02\u08BC\u08BD\x07b\x02\x02\u08BD\u08BF\x07\x10" +
    "\x02\x02\u08BE\u08C0\x07~\x02\x02\u08BF\u08BE\x03\x02\x02\x02\u08BF\u08C0" +
    "\x03\x02\x02\x02\u08C0\u08C2\x03\x02\x02\x02\u08C1\u08C3\x07\x7F\x02\x02" +
    "\u08C2\u08C1\x03\x02\x02\x02\u08C2\u08C3\x03\x02\x02\x02\u08C3\u08D0\x03" +
    "\x02\x02\x02\u08C4\u08C5\x07?\x02\x02\u08C5\u08C6\x07a\x02\x02\u08C6\u08C7" +
    "\x05\u015C\xAF\x02\u08C7\u08C8\x07b\x02\x02\u08C8\u08CA\x07\x10\x02\x02" +
    "\u08C9\u08CB\x07\x7F\x02\x02\u08CA\u08C9\x03\x02\x02\x02\u08CA\u08CB\x03" +
    "\x02\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CD\x07`\x02\x02\u08CD" +
    "\u08CE\x05\x06\x04\x02\u08CE\u08D0\x03\x02\x02\x02\u08CF\u089F\x03\x02" +
    "\x02\x02\u08CF\u08A6\x03\x02\x02\x02\u08CF\u08AC\x03\x02\x02\x02\u08CF" +
    "\u08B3\x03\x02\x02\x02\u08CF\u08B9\x03\x02\x02\x02\u08CF\u08C4\x03\x02" +
    "\x02\x02\u08D0\u0161\x03\x02\x02\x02\u08D1\u08D2\x05\u0166\xB4\x02\u08D2" +
    "\u08D4\x07a\x02\x02\u08D3\u08D5\x05\u0168\xB5\x02\u08D4\u08D3\x03\x02" +
    "\x02\x02\u08D4\u08D5\x03\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6" +
    "\u08D7\x07b\x02\x02\u08D7\u0163\x03\x02\x02\x02\u08D8\u08E8\x05\u0162" +
    "\xB2\x02\u08D9\u08DA\x05\u0156\xAC\x02\u08DA\u08DC\x07a\x02\x02\u08DB" +
    "\u08DD\x05\u0168\xB5\x02\u08DC\u08DB\x03\x02\x02\x02\u08DC\u08DD\x03\x02" +
    "\x02\x02\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08DF\x07b\x02\x02\u08DF\u08E8" +
    "\x03\x02\x02\x02\u08E0\u08E1\x05\u0158\xAD\x02\u08E1\u08E3\x07a\x02\x02" +
    "\u08E2\u08E4\x05\u0168\xB5\x02\u08E3\u08E2\x03\x02\x02\x02\u08E3\u08E4" +
    "\x03\x02\x02\x02\u08E4\u08E5\x03\x02\x02\x02\u08E5\u08E6\x07b\x02\x02" +
    "\u08E6\u08E8\x03\x02\x02\x02\u08E7\u08D8\x03\x02\x02\x02\u08E7\u08D9\x03" +
    "\x02\x02\x02\u08E7\u08E0\x03\x02\x02\x02\u08E8\u0165\x03\x02\x02\x02\u08E9" +
    "\u08EA\x07\x7F\x02\x02\u08EA\u0167\x03\x02\x02\x02\u08EB\u08EC\b\xB5\x01" +
    "\x02\u08EC\u08EE\x05\u016A\xB6\x02\u08ED\u08EF\x07~\x02\x02\u08EE\u08ED" +
    "\x03\x02\x02\x02\u08EE\u08EF\x03\x02\x02\x02\u08EF\u08F8\x03\x02\x02\x02" +
    "\u08F0\u08F1\f\x03\x02\x02\u08F1\u08F2\x07u\x02\x02\u08F2\u08F4\x05\u016A" +
    "\xB6\x02\u08F3\u08F5\x07~\x02\x02\u08F4\u08F3\x03\x02\x02\x02\u08F4\u08F5" +
    "\x03\x02\x02\x02\u08F5\u08F7\x03\x02\x02\x02\u08F6\u08F0\x03\x02\x02\x02" +
    "\u08F7\u08FA\x03\x02\x02\x02\u08F8\u08F6\x03\x02\x02\x02\u08F8\u08F9\x03" +
    "\x02\x02\x02\u08F9\u0169\x03\x02\x02\x02\u08FA\u08F8\x03\x02\x02\x02\u08FB" +
    "\u08FF\x05\u0102\x82\x02\u08FC\u08FF\x05^0\x02\u08FD\u08FF\x05\x06\x04" +
    "\x02\u08FE\u08FB\x03\x02\x02\x02\u08FE\u08FC\x03\x02\x02\x02\u08FE\u08FD" +
    "\x03\x02\x02\x02\u08FF\u016B\x03\x02\x02\x02\u0900\u0901\x07G\x02\x02" +
    "\u0901\u0902\x05\f\x07\x02\u0902\u0903\x07\x7F\x02\x02\u0903\u090C\x03" +
    "\x02\x02\x02\u0904\u0905\x07G\x02\x02\u0905\u0907\x05\f\x07\x02\u0906" +
    "\u0908\x07?\x02\x02\u0907\u0906\x03\x02\x02\x02\u0907\u0908\x03\x02\x02" +
    "\x02\u0908\u0909\x03\x02\x02\x02\u0909\u090A\x05\u0162\xB2\x02\u090A\u090C" +
    "\x03\x02\x02\x02\u090B\u0900\x03\x02\x02\x02\u090B\u0904\x03\x02\x02\x02" +
    "\u090C\u016D\x03\x02\x02\x02\u090D\u090F\x07\x1F\x02\x02\u090E\u090D\x03" +
    "\x02\x02\x02\u090E\u090F\x03\x02\x02\x02\u090F\u0910\x03\x02\x02\x02\u0910" +
    "\u0911\x07?\x02\x02\u0911\u0912\x05|?\x02\u0912\u016F\x03\x02\x02\x02" +
    "\u0913\u0914\x07?\x02\x02\u0914\u0915\x07a\x02\x02\u0915\u0916\x07b\x02" +
    "\x02\u0916\u0917\x05|?\x02\u0917\u0171\x03\x02\x02\x02\u0918\u0919\x07" +
    "D\x02\x02\u0919\u091A\x05f4\x02\u091A\u091B\x05\u0176\xBC\x02\u091B\u0173" +
    "\x03\x02\x02\x02\u091C\u091E\x07D\x02\x02\u091D\u091F\x05\u014E\xA8\x02" +
    "\u091E\u091D\x03\x02\x02\x02\u091E\u091F\x03\x02\x02\x02\u091F\u0920\x03" +
    "\x02\x02\x02\u0920\u0921\x05f4\x02\u0921\u0922\x05\u0176\xBC\x02\u0922" +
    "\u0175\x03\x02\x02\x02\u0923\u0925\x05\u0178\xBD\x02\u0924\u0926\x05\u0176" +
    "\xBC\x02\u0925\u0924\x03\x02\x02\x02\u0925\u0926\x03\x02\x02\x02\u0926" +
    "\u0177\x03\x02\x02\x02\u0927\u0928\x07\f\x02\x02\u0928\u0929\x07P\x02" +
    "\x02\u0929\u092A\x05\u017A\xBE\x02\u092A\u092B\x07Q\x02\x02\u092B\u092C" +
    "\x05f4\x02\u092C\u0179\x03\x02\x02\x02\u092D\u092F\x05\xD4k\x02\u092E" +
    "\u092D\x03\x02\x02\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0930\x03\x02" +
    "\x02\x02\u0930\u0931\x05\x98M\x02\u0931\u0932\x05\xEEx\x02\u0932\u093C" +
    "\x03\x02\x02\x02\u0933\u0935\x05\xD4k\x02\u0934\u0933\x03\x02\x02\x02" +
    "\u0934\u0935\x03\x02\x02\x02\u0935\u0936\x03\x02\x02\x02\u0936\u0938\x05" +
    "\x98M\x02\u0937\u0939\x05\u0104\x83\x02\u0938\u0937\x03\x02\x02\x02\u0938" +
    "\u0939\x03\x02\x02\x02\u0939\u093C\x03\x02\x02\x02\u093A\u093C\x07~\x02" +
    "\x02\u093B\u092E\x03\x02\x02\x02\u093B\u0934\x03\x02\x02\x02\u093B\u093A" +
    "\x03\x02\x02\x02\u093C\u017B\x03\x02\x02\x02\u093D\u093F\x07B\x02\x02" +
    "\u093E\u0940\x05X-\x02\u093F\u093E\x03\x02\x02\x02\u093F\u0940\x03\x02" +
    "\x02\x02\u0940\u017D\x03\x02\x02\x02\u0941\u0944\x05\u0180\xC1\x02\u0942" +
    "\u0944\x05\u0184\xC3\x02\u0943\u0941\x03\x02\x02\x02\u0943\u0942\x03\x02" +
    "\x02\x02\u0944\u017F\x03\x02\x02\x02\u0945\u0946\x07B\x02\x02\u0946\u0948" +
    "\x07P\x02\x02\u0947\u0949\x05\u0182\xC2\x02\u0948\u0947\x03\x02\x02\x02" +
    "\u0948\u0949\x03\x02\x02\x02\u0949\u094A\x03\x02\x02\x02\u094A\u094B\x07" +
    "Q\x02\x02\u094B\u0181\x03\x02\x02\x02\u094C\u094D\b\xC2\x01\x02\u094D" +
    "\u094F\x05\u0102\x82\x02\u094E\u0950\x07~\x02\x02\u094F\u094E\x03\x02" +
    "\x02\x02\u094F\u0950\x03\x02\x02\x02\u0950\u0959\x03\x02\x02\x02\u0951" +
    "\u0952\f\x03\x02\x02\u0952\u0953\x07u\x02\x02\u0953\u0955\x05\u0102\x82" +
    "\x02\u0954\u0956\x07~\x02\x02\u0955\u0954\x03\x02\x02\x02\u0955\u0956" +
    "\x03\x02\x02\x02\u0956\u0958\x03\x02\x02\x02\u0957\u0951\x03\x02\x02\x02" +
    "\u0958\u095B\x03\x02\x02\x02\u0959\u0957\x03\x02\x02\x02\u0959\u095A\x03" +
    "\x02\x02\x02\u095A\u0183\x03\x02\x02\x02\u095B\u0959\x03\x02\x02\x02\u095C" +
    "\u095D\x07-\x02\x02\u095D\u095E\x07P\x02\x02\u095E\u095F\x05^0\x02\u095F" +
    "\u0960\x07Q\x02\x02\u0960\u0963\x03\x02\x02\x02\u0961\u0963\x07-\x02\x02" +
    "\u0962\u095C\x03\x02\x02\x02\u0962\u0961\x03\x02\x02\x02\u0963\u0185\x03" +
    "\x02\x02\x02\u0964\u0965\x07b\x02\x02\u0965\u0966\x07b\x02\x02\u0966\u0187" +
    "\x03\x02\x02\x02\u0967\u0968\x07b\x02\x02\u0968\u0969\x07b\x02\x02\u0969" +
    "\u096A\x07`\x02\x02\u096A\u0189\x03\x02\x02\x02\u096B\u099C\x07,\x02\x02" +
    "\u096C\u099C\x07\x17\x02\x02\u096D\u096E\x07,\x02\x02\u096E\u096F\x07" +
    "R\x02\x02\u096F\u099C\x07S\x02\x02\u0970\u0971\x07\x17\x02\x02\u0971\u0972" +
    "\x07R\x02\x02\u0972\u099C\x07S\x02\x02\u0973\u099C\x07V\x02\x02\u0974" +
    "\u099C\x07W\x02\x02\u0975\u099C\x07X\x02\x02\u0976\u099C\x07Y\x02\x02" +
    "\u0977\u099C\x07Z\x02\x02\u0978\u099C\x07[\x02\x02\u0979\u099C\x07\\\x02" +
    "\x02\u097A\u099C\x07]\x02\x02\u097B\u099C\x07^\x02\x02\u097C\u099C\x07" +
    "_\x02\x02\u097D\u099C\x07`\x02\x02\u097E\u099C\x07a\x02\x02\u097F\u099C" +
    "\x07b\x02\x02\u0980\u099C\x07c\x02\x02\u0981\u099C\x07d\x02\x02\u0982" +
    "\u099C\x07e\x02\x02\u0983\u099C\x07f\x02\x02\u0984\u099C\x07g\x02\x02" +
    "\u0985\u099C\x07h\x02\x02\u0986\u099C\x07i\x02\x02\u0987\u099C\x07j\x02" +
    "\x02\u0988\u099C\x07k\x02\x02\u0989\u099C\x05\u0186\xC4\x02\u098A\u099C" +
    "\x05\u0188\xC5\x02\u098B\u099C\x07l\x02\x02\u098C\u099C\x07m\x02\x02\u098D" +
    "\u099C\x07n\x02\x02\u098E\u099C\x07o\x02\x02\u098F\u099C\x07p\x02\x02" +
    "\u0990\u099C\x07q\x02\x02\u0991\u099C\x07r\x02\x02\u0992\u099C\x07s\x02" +
    "\x02\u0993\u099C\x07t\x02\x02\u0994\u099C\x07u\x02\x02\u0995\u099C\x07" +
    "v\x02\x02\u0996\u099C\x07w\x02\x02\u0997\u0998\x07P\x02\x02\u0998\u099C" +
    "\x07Q\x02\x02\u0999\u099A\x07R\x02\x02\u099A\u099C\x07S\x02\x02\u099B" +
    "\u096B\x03\x02\x02\x02\u099B\u096C\x03\x02\x02\x02\u099B\u096D\x03\x02" +
    "\x02\x02\u099B\u0970\x03\x02\x02\x02\u099B\u0973\x03\x02\x02\x02\u099B" +
    "\u0974\x03\x02\x02\x02\u099B\u0975\x03\x02\x02\x02\u099B\u0976\x03\x02" +
    "\x02\x02\u099B\u0977\x03\x02\x02\x02\u099B\u0978\x03\x02\x02\x02\u099B" +
    "\u0979\x03\x02\x02\x02\u099B\u097A\x03\x02\x02\x02\u099B\u097B\x03\x02" +
    "\x02\x02\u099B\u097C\x03\x02\x02\x02\u099B\u097D\x03\x02\x02\x02\u099B" +
    "\u097E\x03\x02\x02\x02\u099B\u097F\x03\x02\x02\x02\u099B\u0980\x03\x02" +
    "\x02\x02\u099B\u0981\x03\x02\x02\x02\u099B\u0982\x03\x02\x02\x02\u099B" +
    "\u0983\x03\x02\x02\x02\u099B\u0984\x03\x02\x02\x02\u099B\u0985\x03\x02" +
    "\x02\x02\u099B\u0986\x03\x02\x02\x02\u099B\u0987\x03\x02\x02\x02\u099B" +
    "\u0988\x03\x02\x02\x02\u099B\u0989\x03\x02\x02\x02\u099B\u098A\x03\x02" +
    "\x02\x02\u099B\u098B\x03\x02\x02\x02\u099B\u098C\x03\x02\x02\x02\u099B" +
    "\u098D\x03\x02\x02\x02\u099B\u098E\x03\x02\x02\x02\u099B\u098F\x03\x02" +
    "\x02\x02\u099B\u0990\x03\x02\x02\x02\u099B\u0991\x03\x02\x02\x02\u099B" +
    "\u0992\x03\x02\x02\x02\u099B\u0993\x03\x02\x02\x02\u099B\u0994\x03\x02" +
    "\x02\x02\u099B\u0995\x03\x02\x02\x02\u099B\u0996\x03\x02\x02\x02\u099B" +
    "\u0997\x03\x02\x02\x02\u099B\u0999\x03\x02\x02\x02\u099C\u018B\x03\x02" +
    "\x02\x02\u099D\u09A5\x07\x80\x02\x02\u099E\u09A5\x07\x86\x02\x02\u099F" +
    "\u09A5\x07\x87\x02\x02\u09A0\u09A5\x07\x88\x02\x02\u09A1\u09A5\x05\u018E" +
    "\xC8\x02\u09A2\u09A5\x05\u0190\xC9\x02\u09A3\u09A5\x05\u0192\xCA\x02\u09A4" +
    "\u099D\x03\x02\x02\x02\u09A4\u099E\x03\x02\x02\x02\u09A4\u099F\x03\x02" +
    "\x02\x02\u09A4\u09A0\x03\x02\x02\x02\u09A4\u09A1\x03\x02\x02\x02\u09A4" +
    "\u09A2\x03\x02\x02\x02\u09A4\u09A3\x03\x02\x02\x02\u09A5\u018D\x03\x02" +
    "\x02\x02\u09A6\u09A7\t\v\x02\x02\u09A7\u018F\x03\x02\x02\x02\u09A8\u09A9" +
    "\x07.\x02\x02\u09A9\u0191\x03\x02\x02\x02\u09AA\u09AB\t\f\x02\x02\u09AB" +
    "\u0193\x03\x02\x02\x02\u013D\u0195\u01A1\u01A5\u01B0\u01B4\u01C3\u01CA" +
    "\u01CF\u01D1\u01D6\u01DC\u01E6\u01ED\u01F3\u01F7\u01FC\u0202\u0209\u020F" +
    "\u0212\u0215\u0218\u021F\u0226\u025A\u0269\u026F\u0275\u0282\u0284\u028E" +
    "\u029D\u02A3\u02C1\u02C6\u02CA\u02CE\u02D1\u02D5\u02DB\u02DD\u02E5\u02E9" +
    "\u02EC\u02F3\u02FA\u02FE\u0303\u0307\u030A\u030F\u0315\u0322\u032D\u032F" +
    "\u033E\u0340\u034C\u034E\u035B\u035D\u036F\u0371\u037D\u037F\u038A\u0395" +
    "\u03A0\u03AB\u03B6\u03C0\u03C8\u03D5\u03DF\u03E6\u03EA\u03EE\u03F2\u03F6" +
    "\u03FB\u03FE\u0401\u0407\u040F\u0414\u0417\u041D\u0428\u043F\u0443\u044B" +
    "\u0451\u0465\u0469\u0476\u047A\u047D\u0484\u048C\u0496\u04A1\u04AD\u04B7" +
    "\u04BC\u04C3\u04C6\u04CB\u04D0\u04E5\u04E9\u04EE\u04F9\u04FF\u0503\u0508" +
    "\u050C\u0511\u0514\u052A\u0530\u053B\u053F\u0542\u054C\u0552\u0555\u055C" +
    "\u0566\u056A\u056D\u0570\u0574\u0579\u057B\u057F\u0583\u058C\u0599\u05A1" +
    "\u05A7\u05AD\u05B1\u05B4\u05BD\u05C6\u05CE\u05D9\u05DF\u05EA\u05ED\u05F2" +
    "\u0601\u0607\u0610\u061A\u0620\u0628\u062C\u0630\u0635\u063A\u0641\u0643" +
    "\u0648\u064C\u065A\u0660\u066F\u0679\u067E\u0685\u068B\u0690\u0696\u069D" +
    "\u06A1\u06A3\u06A5\u06AC\u06AF\u06B2\u06B5\u06BA\u06BE\u06C1\u06C5\u06C9" +
    "\u06CE\u06D1\u06D3\u06D7\u06DE\u06E4\u06E8\u06EE\u06F3\u06F5\u06FB\u06FF" +
    "\u0705\u070C\u0710\u0712\u0714\u071B\u0725\u0729\u072B\u072D\u0731\u0734" +
    "\u073A\u0744\u0748\u074E\u0756\u075A\u075D\u0761\u0766\u0769\u076C\u0770" +
    "\u0775\u077F\u0786\u078B\u078F\u0794\u079A\u079E\u07A4\u07AA\u07AE\u07B3" +
    "\u07B9\u07BD\u07C0\u07C4\u07C7\u07C9\u07CC\u07D6\u07DB\u07DD\u07E0\u07E3" +
    "\u07E6\u07EF\u07F9\u07FE\u0801\u0805\u0808\u080B\u080F\u0818\u0826\u082C" +
    "\u0830\u0834\u0838\u083C\u0840\u0844\u0848\u084B\u084F\u085A\u085E\u0865" +
    "\u0869\u086E\u0873\u087A\u087E\u0888\u0898\u089D\u08A1\u08A4\u08A8\u08AE" +
    "\u08B1\u08B5\u08BF\u08C2\u08CA\u08CF\u08D4\u08DC\u08E3\u08E7\u08EE\u08F4" +
    "\u08F8\u08FE\u0907\u090B\u090E\u091E\u0925\u092E\u0934\u0938\u093B\u093F" +
    "\u0943\u0948\u094F\u0955\u0959\u0962\u099B\u09A4";
CPP14Parser._serializedATN = Utils.join([
    CPP14Parser._serializedATNSegment0,
    CPP14Parser._serializedATNSegment1,
    CPP14Parser._serializedATNSegment2,
    CPP14Parser._serializedATNSegment3,
    CPP14Parser._serializedATNSegment4
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], CPP14Parser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], CPP14Parser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], CPP14Parser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], CPP14Parser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "translationunit", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "primaryexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "idexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "unqualifiedid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "qualifiedid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "nestednamespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "lambdaexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "lambdaintroducer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "lambdacapture", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "capturedefault", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "capturelist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "capture", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "simplecapture", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "initcapture", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "lambdadeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "postfixexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typeidofexpr", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typeidofthetypeid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "expressionlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "pseudodestructorname", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "unaryexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "unaryoperator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "newexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "newplacement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "newtypeid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "newdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "noptrnewdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "newinitializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "deleteexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "noexceptexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "castexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "pmexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "multiplicativeexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "additiveexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "shiftexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "relationalexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "equalityexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "andexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "exclusiveorexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "inclusiveorexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "logicalandexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "logicalorexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "conditionalexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "assignmentexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "assignmentoperator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "constantexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "statement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "labeledstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "expressionstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "compoundstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "statementseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "selectionstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "iterationstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "forinitstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "forrangedeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "forrangeinitializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "jumpstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declarationstatement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declarationseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "blockdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "aliasdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "simpledeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "static_assertdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "emptydeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributedeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declspecifierseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "storageclassspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "functionspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typedefname", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "trailingtypespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typespecifierseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "trailingtypespecifierseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "simpletypespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "thetypename", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "decltypespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "elaboratedtypespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumname", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumhead", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "opaqueenumdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumkey", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumbase", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumeratorlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumeratordefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "enumerator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "namespacename", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "originalnamespacename", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "namespacedefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "namednamespacedefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "originalnamespacedefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "extensionnamespacedefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "unnamednamespacedefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "namespacebody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "namespacealias", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "namespacealiasdefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "qualifiednamespacespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "usingdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "usingdirective", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "asmdefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "linkagespecification", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributespecifierseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "alignmentspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributelist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attribute", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributetoken", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributescopedtoken", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributenamespace", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "attributeargumentclause", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "balancedtokenseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "balancedtoken", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "initdeclaratorlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "initdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "ptrdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "noptrdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "parametersandqualifiers", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "trailingreturntype", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "ptroperator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "cvqualifierseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "cvqualifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "refqualifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "declaratorid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "thetypeid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "abstractdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "ptrabstractdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "noptrabstractdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "abstractpackdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "noptrabstractpackdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "parameterdeclarationclause", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "parameterdeclarationlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "parameterdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "functiondefinition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "functionbody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "initializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "braceorequalinitializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "initializerclause", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "initializerlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "bracedinitlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classname", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classhead", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classheadname", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classvirtspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classkey", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "memberspecification", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "memberdeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "memberdeclaratorlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "memberdeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "virtspecifierseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "virtspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "purespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "baseclause", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "basespecifierlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "basespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "classordecltype", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "basetypespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "accessspecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "conversionfunctionid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "conversiontypeid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "conversiondeclarator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "ctorinitializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "meminitializerlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "meminitializer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "meminitializerid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "operatorfunctionid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "literaloperatorid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templatedeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templateparameterlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templateparameter", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typeparameter", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "simpletemplateid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templateid", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templatename", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templateargumentlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "templateargument", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typenamespecifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "explicitinstantiation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "explicitspecialization", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "tryblock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "functiontryblock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "handlerseq", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "handler", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "exceptiondeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "throwexpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "exceptionspecification", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "dynamicexceptionspecification", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "typeidlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "noexceptspecification", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "rightShift", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "rightShiftAssign", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "theoperator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "booleanliteral", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "pointerliteral", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], CPP14Parser.prototype, "userdefinedliteral", null);
exports.CPP14Parser = CPP14Parser;
class TranslationunitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(CPP14Parser.EOF, 0); }
    declarationseq() {
        return this.tryGetRuleContext(0, DeclarationseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_translationunit; }
    enterRule(listener) {
        if (listener.enterTranslationunit)
            listener.enterTranslationunit(this);
    }
    exitRule(listener) {
        if (listener.exitTranslationunit)
            listener.exitTranslationunit(this);
    }
    accept(visitor) {
        if (visitor.visitTranslationunit)
            return visitor.visitTranslationunit(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TranslationunitContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TranslationunitContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TranslationunitContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TranslationunitContext.prototype, "accept", null);
exports.TranslationunitContext = TranslationunitContext;
class PrimaryexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    This() { return this.tryGetToken(CPP14Parser.This, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    idexpression() {
        return this.tryGetRuleContext(0, IdexpressionContext);
    }
    lambdaexpression() {
        return this.tryGetRuleContext(0, LambdaexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_primaryexpression; }
    enterRule(listener) {
        if (listener.enterPrimaryexpression)
            listener.enterPrimaryexpression(this);
    }
    exitRule(listener) {
        if (listener.exitPrimaryexpression)
            listener.exitPrimaryexpression(this);
    }
    accept(visitor) {
        if (visitor.visitPrimaryexpression)
            return visitor.visitPrimaryexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PrimaryexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PrimaryexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PrimaryexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PrimaryexpressionContext.prototype, "accept", null);
exports.PrimaryexpressionContext = PrimaryexpressionContext;
class IdexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unqualifiedid() {
        return this.tryGetRuleContext(0, UnqualifiedidContext);
    }
    qualifiedid() {
        return this.tryGetRuleContext(0, QualifiedidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_idexpression; }
    enterRule(listener) {
        if (listener.enterIdexpression)
            listener.enterIdexpression(this);
    }
    exitRule(listener) {
        if (listener.exitIdexpression)
            listener.exitIdexpression(this);
    }
    accept(visitor) {
        if (visitor.visitIdexpression)
            return visitor.visitIdexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IdexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IdexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IdexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IdexpressionContext.prototype, "accept", null);
exports.IdexpressionContext = IdexpressionContext;
class UnqualifiedidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    operatorfunctionid() {
        return this.tryGetRuleContext(0, OperatorfunctionidContext);
    }
    conversionfunctionid() {
        return this.tryGetRuleContext(0, ConversionfunctionidContext);
    }
    literaloperatorid() {
        return this.tryGetRuleContext(0, LiteraloperatoridContext);
    }
    classname() {
        return this.tryGetRuleContext(0, ClassnameContext);
    }
    decltypespecifier() {
        return this.tryGetRuleContext(0, DecltypespecifierContext);
    }
    templateid() {
        return this.tryGetRuleContext(0, TemplateidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_unqualifiedid; }
    enterRule(listener) {
        if (listener.enterUnqualifiedid)
            listener.enterUnqualifiedid(this);
    }
    exitRule(listener) {
        if (listener.exitUnqualifiedid)
            listener.exitUnqualifiedid(this);
    }
    accept(visitor) {
        if (visitor.visitUnqualifiedid)
            return visitor.visitUnqualifiedid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnqualifiedidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnqualifiedidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnqualifiedidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnqualifiedidContext.prototype, "accept", null);
exports.UnqualifiedidContext = UnqualifiedidContext;
class QualifiedidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nestednamespecifier() {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    unqualifiedid() {
        return this.getRuleContext(0, UnqualifiedidContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    get ruleIndex() { return CPP14Parser.RULE_qualifiedid; }
    enterRule(listener) {
        if (listener.enterQualifiedid)
            listener.enterQualifiedid(this);
    }
    exitRule(listener) {
        if (listener.exitQualifiedid)
            listener.exitQualifiedid(this);
    }
    accept(visitor) {
        if (visitor.visitQualifiedid)
            return visitor.visitQualifiedid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QualifiedidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QualifiedidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QualifiedidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QualifiedidContext.prototype, "accept", null);
exports.QualifiedidContext = QualifiedidContext;
class NestednamespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    thetypename() {
        return this.tryGetRuleContext(0, ThetypenameContext);
    }
    namespacename() {
        return this.tryGetRuleContext(0, NamespacenameContext);
    }
    decltypespecifier() {
        return this.tryGetRuleContext(0, DecltypespecifierContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    get ruleIndex() { return CPP14Parser.RULE_nestednamespecifier; }
    enterRule(listener) {
        if (listener.enterNestednamespecifier)
            listener.enterNestednamespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitNestednamespecifier)
            listener.exitNestednamespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitNestednamespecifier)
            return visitor.visitNestednamespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NestednamespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NestednamespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NestednamespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NestednamespecifierContext.prototype, "accept", null);
exports.NestednamespecifierContext = NestednamespecifierContext;
class LambdaexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    lambdaintroducer() {
        return this.getRuleContext(0, LambdaintroducerContext);
    }
    compoundstatement() {
        return this.getRuleContext(0, CompoundstatementContext);
    }
    lambdadeclarator() {
        return this.tryGetRuleContext(0, LambdadeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_lambdaexpression; }
    enterRule(listener) {
        if (listener.enterLambdaexpression)
            listener.enterLambdaexpression(this);
    }
    exitRule(listener) {
        if (listener.exitLambdaexpression)
            listener.exitLambdaexpression(this);
    }
    accept(visitor) {
        if (visitor.visitLambdaexpression)
            return visitor.visitLambdaexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdaexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdaexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdaexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdaexpressionContext.prototype, "accept", null);
exports.LambdaexpressionContext = LambdaexpressionContext;
class LambdaintroducerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    lambdacapture() {
        return this.tryGetRuleContext(0, LambdacaptureContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_lambdaintroducer; }
    enterRule(listener) {
        if (listener.enterLambdaintroducer)
            listener.enterLambdaintroducer(this);
    }
    exitRule(listener) {
        if (listener.exitLambdaintroducer)
            listener.exitLambdaintroducer(this);
    }
    accept(visitor) {
        if (visitor.visitLambdaintroducer)
            return visitor.visitLambdaintroducer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdaintroducerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdaintroducerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdaintroducerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdaintroducerContext.prototype, "accept", null);
exports.LambdaintroducerContext = LambdaintroducerContext;
class LambdacaptureContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    capturedefault() {
        return this.tryGetRuleContext(0, CapturedefaultContext);
    }
    capturelist() {
        return this.tryGetRuleContext(0, CapturelistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_lambdacapture; }
    enterRule(listener) {
        if (listener.enterLambdacapture)
            listener.enterLambdacapture(this);
    }
    exitRule(listener) {
        if (listener.exitLambdacapture)
            listener.exitLambdacapture(this);
    }
    accept(visitor) {
        if (visitor.visitLambdacapture)
            return visitor.visitLambdacapture(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdacaptureContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdacaptureContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdacaptureContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdacaptureContext.prototype, "accept", null);
exports.LambdacaptureContext = LambdacaptureContext;
class CapturedefaultContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return CPP14Parser.RULE_capturedefault; }
    enterRule(listener) {
        if (listener.enterCapturedefault)
            listener.enterCapturedefault(this);
    }
    exitRule(listener) {
        if (listener.exitCapturedefault)
            listener.exitCapturedefault(this);
    }
    accept(visitor) {
        if (visitor.visitCapturedefault)
            return visitor.visitCapturedefault(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CapturedefaultContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CapturedefaultContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CapturedefaultContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CapturedefaultContext.prototype, "accept", null);
exports.CapturedefaultContext = CapturedefaultContext;
class CapturelistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    capture() {
        return this.getRuleContext(0, CaptureContext);
    }
    capturelist() {
        return this.tryGetRuleContext(0, CapturelistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_capturelist; }
    enterRule(listener) {
        if (listener.enterCapturelist)
            listener.enterCapturelist(this);
    }
    exitRule(listener) {
        if (listener.exitCapturelist)
            listener.exitCapturelist(this);
    }
    accept(visitor) {
        if (visitor.visitCapturelist)
            return visitor.visitCapturelist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CapturelistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CapturelistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CapturelistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CapturelistContext.prototype, "accept", null);
exports.CapturelistContext = CapturelistContext;
class CaptureContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simplecapture() {
        return this.tryGetRuleContext(0, SimplecaptureContext);
    }
    initcapture() {
        return this.tryGetRuleContext(0, InitcaptureContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_capture; }
    enterRule(listener) {
        if (listener.enterCapture)
            listener.enterCapture(this);
    }
    exitRule(listener) {
        if (listener.exitCapture)
            listener.exitCapture(this);
    }
    accept(visitor) {
        if (visitor.visitCapture)
            return visitor.visitCapture(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CaptureContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CaptureContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CaptureContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CaptureContext.prototype, "accept", null);
exports.CaptureContext = CaptureContext;
class SimplecaptureContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    This() { return this.tryGetToken(CPP14Parser.This, 0); }
    get ruleIndex() { return CPP14Parser.RULE_simplecapture; }
    enterRule(listener) {
        if (listener.enterSimplecapture)
            listener.enterSimplecapture(this);
    }
    exitRule(listener) {
        if (listener.exitSimplecapture)
            listener.exitSimplecapture(this);
    }
    accept(visitor) {
        if (visitor.visitSimplecapture)
            return visitor.visitSimplecapture(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SimplecaptureContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SimplecaptureContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SimplecaptureContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SimplecaptureContext.prototype, "accept", null);
exports.SimplecaptureContext = SimplecaptureContext;
class InitcaptureContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    initializer() {
        return this.getRuleContext(0, InitializerContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_initcapture; }
    enterRule(listener) {
        if (listener.enterInitcapture)
            listener.enterInitcapture(this);
    }
    exitRule(listener) {
        if (listener.exitInitcapture)
            listener.exitInitcapture(this);
    }
    accept(visitor) {
        if (visitor.visitInitcapture)
            return visitor.visitInitcapture(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitcaptureContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitcaptureContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitcaptureContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitcaptureContext.prototype, "accept", null);
exports.InitcaptureContext = InitcaptureContext;
class LambdadeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parameterdeclarationclause() {
        return this.getRuleContext(0, ParameterdeclarationclauseContext);
    }
    Mutable() { return this.tryGetToken(CPP14Parser.Mutable, 0); }
    exceptionspecification() {
        return this.tryGetRuleContext(0, ExceptionspecificationContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    trailingreturntype() {
        return this.tryGetRuleContext(0, TrailingreturntypeContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_lambdadeclarator; }
    enterRule(listener) {
        if (listener.enterLambdadeclarator)
            listener.enterLambdadeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitLambdadeclarator)
            listener.exitLambdadeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitLambdadeclarator)
            return visitor.visitLambdadeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdadeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdadeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdadeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdadeclaratorContext.prototype, "accept", null);
exports.LambdadeclaratorContext = LambdadeclaratorContext;
class PostfixexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primaryexpression() {
        return this.tryGetRuleContext(0, PrimaryexpressionContext);
    }
    postfixexpression() {
        return this.tryGetRuleContext(0, PostfixexpressionContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    expressionlist() {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    }
    simpletypespecifier() {
        return this.tryGetRuleContext(0, SimpletypespecifierContext);
    }
    typenamespecifier() {
        return this.tryGetRuleContext(0, TypenamespecifierContext);
    }
    idexpression() {
        return this.tryGetRuleContext(0, IdexpressionContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    pseudodestructorname() {
        return this.tryGetRuleContext(0, PseudodestructornameContext);
    }
    Dynamic_cast() { return this.tryGetToken(CPP14Parser.Dynamic_cast, 0); }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    Static_cast() { return this.tryGetToken(CPP14Parser.Static_cast, 0); }
    Reinterpret_cast() { return this.tryGetToken(CPP14Parser.Reinterpret_cast, 0); }
    Const_cast() { return this.tryGetToken(CPP14Parser.Const_cast, 0); }
    typeidofthetypeid() {
        return this.tryGetRuleContext(0, TypeidofthetypeidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_postfixexpression; }
    enterRule(listener) {
        if (listener.enterPostfixexpression)
            listener.enterPostfixexpression(this);
    }
    exitRule(listener) {
        if (listener.exitPostfixexpression)
            listener.exitPostfixexpression(this);
    }
    accept(visitor) {
        if (visitor.visitPostfixexpression)
            return visitor.visitPostfixexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PostfixexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PostfixexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PostfixexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PostfixexpressionContext.prototype, "accept", null);
exports.PostfixexpressionContext = PostfixexpressionContext;
class TypeidofexprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Typeid() { return this.getToken(CPP14Parser.Typeid, 0); }
    get ruleIndex() { return CPP14Parser.RULE_typeidofexpr; }
    enterRule(listener) {
        if (listener.enterTypeidofexpr)
            listener.enterTypeidofexpr(this);
    }
    exitRule(listener) {
        if (listener.exitTypeidofexpr)
            listener.exitTypeidofexpr(this);
    }
    accept(visitor) {
        if (visitor.visitTypeidofexpr)
            return visitor.visitTypeidofexpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeidofexprContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeidofexprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeidofexprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeidofexprContext.prototype, "accept", null);
exports.TypeidofexprContext = TypeidofexprContext;
class TypeidofthetypeidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Typeid() { return this.getToken(CPP14Parser.Typeid, 0); }
    get ruleIndex() { return CPP14Parser.RULE_typeidofthetypeid; }
    enterRule(listener) {
        if (listener.enterTypeidofthetypeid)
            listener.enterTypeidofthetypeid(this);
    }
    exitRule(listener) {
        if (listener.exitTypeidofthetypeid)
            listener.exitTypeidofthetypeid(this);
    }
    accept(visitor) {
        if (visitor.visitTypeidofthetypeid)
            return visitor.visitTypeidofthetypeid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeidofthetypeidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeidofthetypeidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeidofthetypeidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeidofthetypeidContext.prototype, "accept", null);
exports.TypeidofthetypeidContext = TypeidofthetypeidContext;
class ExpressionlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    initializerlist() {
        return this.getRuleContext(0, InitializerlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_expressionlist; }
    enterRule(listener) {
        if (listener.enterExpressionlist)
            listener.enterExpressionlist(this);
    }
    exitRule(listener) {
        if (listener.exitExpressionlist)
            listener.exitExpressionlist(this);
    }
    accept(visitor) {
        if (visitor.visitExpressionlist)
            return visitor.visitExpressionlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionlistContext.prototype, "accept", null);
exports.ExpressionlistContext = ExpressionlistContext;
class PseudodestructornameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    thetypename(i) {
        if (i === undefined) {
            return this.getRuleContexts(ThetypenameContext);
        }
        else {
            return this.getRuleContext(i, ThetypenameContext);
        }
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    decltypespecifier() {
        return this.tryGetRuleContext(0, DecltypespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_pseudodestructorname; }
    enterRule(listener) {
        if (listener.enterPseudodestructorname)
            listener.enterPseudodestructorname(this);
    }
    exitRule(listener) {
        if (listener.exitPseudodestructorname)
            listener.exitPseudodestructorname(this);
    }
    accept(visitor) {
        if (visitor.visitPseudodestructorname)
            return visitor.visitPseudodestructorname(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PseudodestructornameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PseudodestructornameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PseudodestructornameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PseudodestructornameContext.prototype, "accept", null);
exports.PseudodestructornameContext = PseudodestructornameContext;
class UnaryexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    postfixexpression() {
        return this.tryGetRuleContext(0, PostfixexpressionContext);
    }
    castexpression() {
        return this.tryGetRuleContext(0, CastexpressionContext);
    }
    unaryoperator() {
        return this.tryGetRuleContext(0, UnaryoperatorContext);
    }
    Sizeof() { return this.tryGetToken(CPP14Parser.Sizeof, 0); }
    unaryexpression() {
        return this.tryGetRuleContext(0, UnaryexpressionContext);
    }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    Alignof() { return this.tryGetToken(CPP14Parser.Alignof, 0); }
    noexceptexpression() {
        return this.tryGetRuleContext(0, NoexceptexpressionContext);
    }
    newexpression() {
        return this.tryGetRuleContext(0, NewexpressionContext);
    }
    deleteexpression() {
        return this.tryGetRuleContext(0, DeleteexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_unaryexpression; }
    enterRule(listener) {
        if (listener.enterUnaryexpression)
            listener.enterUnaryexpression(this);
    }
    exitRule(listener) {
        if (listener.exitUnaryexpression)
            listener.exitUnaryexpression(this);
    }
    accept(visitor) {
        if (visitor.visitUnaryexpression)
            return visitor.visitUnaryexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnaryexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnaryexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnaryexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnaryexpressionContext.prototype, "accept", null);
exports.UnaryexpressionContext = UnaryexpressionContext;
class UnaryoperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return CPP14Parser.RULE_unaryoperator; }
    enterRule(listener) {
        if (listener.enterUnaryoperator)
            listener.enterUnaryoperator(this);
    }
    exitRule(listener) {
        if (listener.exitUnaryoperator)
            listener.exitUnaryoperator(this);
    }
    accept(visitor) {
        if (visitor.visitUnaryoperator)
            return visitor.visitUnaryoperator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnaryoperatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnaryoperatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnaryoperatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnaryoperatorContext.prototype, "accept", null);
exports.UnaryoperatorContext = UnaryoperatorContext;
class NewexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    New() { return this.getToken(CPP14Parser.New, 0); }
    newtypeid() {
        return this.tryGetRuleContext(0, NewtypeidContext);
    }
    newplacement() {
        return this.tryGetRuleContext(0, NewplacementContext);
    }
    newinitializer() {
        return this.tryGetRuleContext(0, NewinitializerContext);
    }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_newexpression; }
    enterRule(listener) {
        if (listener.enterNewexpression)
            listener.enterNewexpression(this);
    }
    exitRule(listener) {
        if (listener.exitNewexpression)
            listener.exitNewexpression(this);
    }
    accept(visitor) {
        if (visitor.visitNewexpression)
            return visitor.visitNewexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NewexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NewexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NewexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NewexpressionContext.prototype, "accept", null);
exports.NewexpressionContext = NewexpressionContext;
class NewplacementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionlist() {
        return this.getRuleContext(0, ExpressionlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_newplacement; }
    enterRule(listener) {
        if (listener.enterNewplacement)
            listener.enterNewplacement(this);
    }
    exitRule(listener) {
        if (listener.exitNewplacement)
            listener.exitNewplacement(this);
    }
    accept(visitor) {
        if (visitor.visitNewplacement)
            return visitor.visitNewplacement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NewplacementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NewplacementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NewplacementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NewplacementContext.prototype, "accept", null);
exports.NewplacementContext = NewplacementContext;
class NewtypeidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typespecifierseq() {
        return this.getRuleContext(0, TypespecifierseqContext);
    }
    newdeclarator() {
        return this.tryGetRuleContext(0, NewdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_newtypeid; }
    enterRule(listener) {
        if (listener.enterNewtypeid)
            listener.enterNewtypeid(this);
    }
    exitRule(listener) {
        if (listener.exitNewtypeid)
            listener.exitNewtypeid(this);
    }
    accept(visitor) {
        if (visitor.visitNewtypeid)
            return visitor.visitNewtypeid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NewtypeidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NewtypeidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NewtypeidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NewtypeidContext.prototype, "accept", null);
exports.NewtypeidContext = NewtypeidContext;
class NewdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ptroperator() {
        return this.tryGetRuleContext(0, PtroperatorContext);
    }
    newdeclarator() {
        return this.tryGetRuleContext(0, NewdeclaratorContext);
    }
    noptrnewdeclarator() {
        return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_newdeclarator; }
    enterRule(listener) {
        if (listener.enterNewdeclarator)
            listener.enterNewdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitNewdeclarator)
            listener.exitNewdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitNewdeclarator)
            return visitor.visitNewdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NewdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NewdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NewdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NewdeclaratorContext.prototype, "accept", null);
exports.NewdeclaratorContext = NewdeclaratorContext;
class NoptrnewdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    noptrnewdeclarator() {
        return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_noptrnewdeclarator; }
    enterRule(listener) {
        if (listener.enterNoptrnewdeclarator)
            listener.enterNoptrnewdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitNoptrnewdeclarator)
            listener.exitNoptrnewdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitNoptrnewdeclarator)
            return visitor.visitNoptrnewdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NoptrnewdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NoptrnewdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NoptrnewdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NoptrnewdeclaratorContext.prototype, "accept", null);
exports.NoptrnewdeclaratorContext = NoptrnewdeclaratorContext;
class NewinitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionlist() {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_newinitializer; }
    enterRule(listener) {
        if (listener.enterNewinitializer)
            listener.enterNewinitializer(this);
    }
    exitRule(listener) {
        if (listener.exitNewinitializer)
            listener.exitNewinitializer(this);
    }
    accept(visitor) {
        if (visitor.visitNewinitializer)
            return visitor.visitNewinitializer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NewinitializerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NewinitializerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NewinitializerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NewinitializerContext.prototype, "accept", null);
exports.NewinitializerContext = NewinitializerContext;
class DeleteexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Delete() { return this.getToken(CPP14Parser.Delete, 0); }
    castexpression() {
        return this.getRuleContext(0, CastexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_deleteexpression; }
    enterRule(listener) {
        if (listener.enterDeleteexpression)
            listener.enterDeleteexpression(this);
    }
    exitRule(listener) {
        if (listener.exitDeleteexpression)
            listener.exitDeleteexpression(this);
    }
    accept(visitor) {
        if (visitor.visitDeleteexpression)
            return visitor.visitDeleteexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeleteexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeleteexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeleteexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeleteexpressionContext.prototype, "accept", null);
exports.DeleteexpressionContext = DeleteexpressionContext;
class NoexceptexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Noexcept() { return this.getToken(CPP14Parser.Noexcept, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_noexceptexpression; }
    enterRule(listener) {
        if (listener.enterNoexceptexpression)
            listener.enterNoexceptexpression(this);
    }
    exitRule(listener) {
        if (listener.exitNoexceptexpression)
            listener.exitNoexceptexpression(this);
    }
    accept(visitor) {
        if (visitor.visitNoexceptexpression)
            return visitor.visitNoexceptexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NoexceptexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NoexceptexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NoexceptexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NoexceptexpressionContext.prototype, "accept", null);
exports.NoexceptexpressionContext = NoexceptexpressionContext;
class CastexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unaryexpression() {
        return this.tryGetRuleContext(0, UnaryexpressionContext);
    }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    castexpression() {
        return this.tryGetRuleContext(0, CastexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_castexpression; }
    enterRule(listener) {
        if (listener.enterCastexpression)
            listener.enterCastexpression(this);
    }
    exitRule(listener) {
        if (listener.exitCastexpression)
            listener.exitCastexpression(this);
    }
    accept(visitor) {
        if (visitor.visitCastexpression)
            return visitor.visitCastexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CastexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CastexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CastexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CastexpressionContext.prototype, "accept", null);
exports.CastexpressionContext = CastexpressionContext;
class PmexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    castexpression() {
        return this.getRuleContext(0, CastexpressionContext);
    }
    pmexpression() {
        return this.tryGetRuleContext(0, PmexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_pmexpression; }
    enterRule(listener) {
        if (listener.enterPmexpression)
            listener.enterPmexpression(this);
    }
    exitRule(listener) {
        if (listener.exitPmexpression)
            listener.exitPmexpression(this);
    }
    accept(visitor) {
        if (visitor.visitPmexpression)
            return visitor.visitPmexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PmexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PmexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PmexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PmexpressionContext.prototype, "accept", null);
exports.PmexpressionContext = PmexpressionContext;
class MultiplicativeexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    pmexpression() {
        return this.getRuleContext(0, PmexpressionContext);
    }
    multiplicativeexpression() {
        return this.tryGetRuleContext(0, MultiplicativeexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_multiplicativeexpression; }
    enterRule(listener) {
        if (listener.enterMultiplicativeexpression)
            listener.enterMultiplicativeexpression(this);
    }
    exitRule(listener) {
        if (listener.exitMultiplicativeexpression)
            listener.exitMultiplicativeexpression(this);
    }
    accept(visitor) {
        if (visitor.visitMultiplicativeexpression)
            return visitor.visitMultiplicativeexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MultiplicativeexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MultiplicativeexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MultiplicativeexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MultiplicativeexpressionContext.prototype, "accept", null);
exports.MultiplicativeexpressionContext = MultiplicativeexpressionContext;
class AdditiveexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    multiplicativeexpression() {
        return this.getRuleContext(0, MultiplicativeexpressionContext);
    }
    additiveexpression() {
        return this.tryGetRuleContext(0, AdditiveexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_additiveexpression; }
    enterRule(listener) {
        if (listener.enterAdditiveexpression)
            listener.enterAdditiveexpression(this);
    }
    exitRule(listener) {
        if (listener.exitAdditiveexpression)
            listener.exitAdditiveexpression(this);
    }
    accept(visitor) {
        if (visitor.visitAdditiveexpression)
            return visitor.visitAdditiveexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AdditiveexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AdditiveexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AdditiveexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AdditiveexpressionContext.prototype, "accept", null);
exports.AdditiveexpressionContext = AdditiveexpressionContext;
class ShiftexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    additiveexpression() {
        return this.getRuleContext(0, AdditiveexpressionContext);
    }
    shiftexpression() {
        return this.tryGetRuleContext(0, ShiftexpressionContext);
    }
    rightShift() {
        return this.tryGetRuleContext(0, RightShiftContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_shiftexpression; }
    enterRule(listener) {
        if (listener.enterShiftexpression)
            listener.enterShiftexpression(this);
    }
    exitRule(listener) {
        if (listener.exitShiftexpression)
            listener.exitShiftexpression(this);
    }
    accept(visitor) {
        if (visitor.visitShiftexpression)
            return visitor.visitShiftexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ShiftexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ShiftexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ShiftexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ShiftexpressionContext.prototype, "accept", null);
exports.ShiftexpressionContext = ShiftexpressionContext;
class RelationalexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    shiftexpression() {
        return this.getRuleContext(0, ShiftexpressionContext);
    }
    relationalexpression() {
        return this.tryGetRuleContext(0, RelationalexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_relationalexpression; }
    enterRule(listener) {
        if (listener.enterRelationalexpression)
            listener.enterRelationalexpression(this);
    }
    exitRule(listener) {
        if (listener.exitRelationalexpression)
            listener.exitRelationalexpression(this);
    }
    accept(visitor) {
        if (visitor.visitRelationalexpression)
            return visitor.visitRelationalexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], RelationalexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], RelationalexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], RelationalexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], RelationalexpressionContext.prototype, "accept", null);
exports.RelationalexpressionContext = RelationalexpressionContext;
class EqualityexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    relationalexpression() {
        return this.getRuleContext(0, RelationalexpressionContext);
    }
    equalityexpression() {
        return this.tryGetRuleContext(0, EqualityexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_equalityexpression; }
    enterRule(listener) {
        if (listener.enterEqualityexpression)
            listener.enterEqualityexpression(this);
    }
    exitRule(listener) {
        if (listener.exitEqualityexpression)
            listener.exitEqualityexpression(this);
    }
    accept(visitor) {
        if (visitor.visitEqualityexpression)
            return visitor.visitEqualityexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EqualityexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EqualityexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EqualityexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EqualityexpressionContext.prototype, "accept", null);
exports.EqualityexpressionContext = EqualityexpressionContext;
class AndexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    equalityexpression() {
        return this.getRuleContext(0, EqualityexpressionContext);
    }
    andexpression() {
        return this.tryGetRuleContext(0, AndexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_andexpression; }
    enterRule(listener) {
        if (listener.enterAndexpression)
            listener.enterAndexpression(this);
    }
    exitRule(listener) {
        if (listener.exitAndexpression)
            listener.exitAndexpression(this);
    }
    accept(visitor) {
        if (visitor.visitAndexpression)
            return visitor.visitAndexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AndexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AndexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AndexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AndexpressionContext.prototype, "accept", null);
exports.AndexpressionContext = AndexpressionContext;
class ExclusiveorexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    andexpression() {
        return this.getRuleContext(0, AndexpressionContext);
    }
    exclusiveorexpression() {
        return this.tryGetRuleContext(0, ExclusiveorexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_exclusiveorexpression; }
    enterRule(listener) {
        if (listener.enterExclusiveorexpression)
            listener.enterExclusiveorexpression(this);
    }
    exitRule(listener) {
        if (listener.exitExclusiveorexpression)
            listener.exitExclusiveorexpression(this);
    }
    accept(visitor) {
        if (visitor.visitExclusiveorexpression)
            return visitor.visitExclusiveorexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExclusiveorexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExclusiveorexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExclusiveorexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExclusiveorexpressionContext.prototype, "accept", null);
exports.ExclusiveorexpressionContext = ExclusiveorexpressionContext;
class InclusiveorexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exclusiveorexpression() {
        return this.getRuleContext(0, ExclusiveorexpressionContext);
    }
    inclusiveorexpression() {
        return this.tryGetRuleContext(0, InclusiveorexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_inclusiveorexpression; }
    enterRule(listener) {
        if (listener.enterInclusiveorexpression)
            listener.enterInclusiveorexpression(this);
    }
    exitRule(listener) {
        if (listener.exitInclusiveorexpression)
            listener.exitInclusiveorexpression(this);
    }
    accept(visitor) {
        if (visitor.visitInclusiveorexpression)
            return visitor.visitInclusiveorexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InclusiveorexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InclusiveorexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InclusiveorexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InclusiveorexpressionContext.prototype, "accept", null);
exports.InclusiveorexpressionContext = InclusiveorexpressionContext;
class LogicalandexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inclusiveorexpression() {
        return this.getRuleContext(0, InclusiveorexpressionContext);
    }
    logicalandexpression() {
        return this.tryGetRuleContext(0, LogicalandexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_logicalandexpression; }
    enterRule(listener) {
        if (listener.enterLogicalandexpression)
            listener.enterLogicalandexpression(this);
    }
    exitRule(listener) {
        if (listener.exitLogicalandexpression)
            listener.exitLogicalandexpression(this);
    }
    accept(visitor) {
        if (visitor.visitLogicalandexpression)
            return visitor.visitLogicalandexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LogicalandexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LogicalandexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LogicalandexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LogicalandexpressionContext.prototype, "accept", null);
exports.LogicalandexpressionContext = LogicalandexpressionContext;
class LogicalorexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    logicalandexpression() {
        return this.getRuleContext(0, LogicalandexpressionContext);
    }
    logicalorexpression() {
        return this.tryGetRuleContext(0, LogicalorexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_logicalorexpression; }
    enterRule(listener) {
        if (listener.enterLogicalorexpression)
            listener.enterLogicalorexpression(this);
    }
    exitRule(listener) {
        if (listener.exitLogicalorexpression)
            listener.exitLogicalorexpression(this);
    }
    accept(visitor) {
        if (visitor.visitLogicalorexpression)
            return visitor.visitLogicalorexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LogicalorexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LogicalorexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LogicalorexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LogicalorexpressionContext.prototype, "accept", null);
exports.LogicalorexpressionContext = LogicalorexpressionContext;
class ConditionalexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    logicalorexpression() {
        return this.getRuleContext(0, LogicalorexpressionContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    assignmentexpression() {
        return this.tryGetRuleContext(0, AssignmentexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_conditionalexpression; }
    enterRule(listener) {
        if (listener.enterConditionalexpression)
            listener.enterConditionalexpression(this);
    }
    exitRule(listener) {
        if (listener.exitConditionalexpression)
            listener.exitConditionalexpression(this);
    }
    accept(visitor) {
        if (visitor.visitConditionalexpression)
            return visitor.visitConditionalexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConditionalexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConditionalexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConditionalexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConditionalexpressionContext.prototype, "accept", null);
exports.ConditionalexpressionContext = ConditionalexpressionContext;
class AssignmentexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionalexpression() {
        return this.tryGetRuleContext(0, ConditionalexpressionContext);
    }
    logicalorexpression() {
        return this.tryGetRuleContext(0, LogicalorexpressionContext);
    }
    assignmentoperator() {
        return this.tryGetRuleContext(0, AssignmentoperatorContext);
    }
    initializerclause() {
        return this.tryGetRuleContext(0, InitializerclauseContext);
    }
    throwexpression() {
        return this.tryGetRuleContext(0, ThrowexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_assignmentexpression; }
    enterRule(listener) {
        if (listener.enterAssignmentexpression)
            listener.enterAssignmentexpression(this);
    }
    exitRule(listener) {
        if (listener.exitAssignmentexpression)
            listener.exitAssignmentexpression(this);
    }
    accept(visitor) {
        if (visitor.visitAssignmentexpression)
            return visitor.visitAssignmentexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AssignmentexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AssignmentexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AssignmentexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AssignmentexpressionContext.prototype, "accept", null);
exports.AssignmentexpressionContext = AssignmentexpressionContext;
class AssignmentoperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    rightShiftAssign() {
        return this.tryGetRuleContext(0, RightShiftAssignContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_assignmentoperator; }
    enterRule(listener) {
        if (listener.enterAssignmentoperator)
            listener.enterAssignmentoperator(this);
    }
    exitRule(listener) {
        if (listener.exitAssignmentoperator)
            listener.exitAssignmentoperator(this);
    }
    accept(visitor) {
        if (visitor.visitAssignmentoperator)
            return visitor.visitAssignmentoperator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AssignmentoperatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AssignmentoperatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AssignmentoperatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AssignmentoperatorContext.prototype, "accept", null);
exports.AssignmentoperatorContext = AssignmentoperatorContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignmentexpression() {
        return this.getRuleContext(0, AssignmentexpressionContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_expression; }
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
class ConstantexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionalexpression() {
        return this.getRuleContext(0, ConditionalexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_constantexpression; }
    enterRule(listener) {
        if (listener.enterConstantexpression)
            listener.enterConstantexpression(this);
    }
    exitRule(listener) {
        if (listener.exitConstantexpression)
            listener.exitConstantexpression(this);
    }
    accept(visitor) {
        if (visitor.visitConstantexpression)
            return visitor.visitConstantexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConstantexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConstantexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConstantexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConstantexpressionContext.prototype, "accept", null);
exports.ConstantexpressionContext = ConstantexpressionContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    labeledstatement() {
        return this.tryGetRuleContext(0, LabeledstatementContext);
    }
    expressionstatement() {
        return this.tryGetRuleContext(0, ExpressionstatementContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    compoundstatement() {
        return this.tryGetRuleContext(0, CompoundstatementContext);
    }
    selectionstatement() {
        return this.tryGetRuleContext(0, SelectionstatementContext);
    }
    iterationstatement() {
        return this.tryGetRuleContext(0, IterationstatementContext);
    }
    jumpstatement() {
        return this.tryGetRuleContext(0, JumpstatementContext);
    }
    declarationstatement() {
        return this.tryGetRuleContext(0, DeclarationstatementContext);
    }
    tryblock() {
        return this.tryGetRuleContext(0, TryblockContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_statement; }
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
class LabeledstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    Case() { return this.tryGetToken(CPP14Parser.Case, 0); }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    Default() { return this.tryGetToken(CPP14Parser.Default, 0); }
    get ruleIndex() { return CPP14Parser.RULE_labeledstatement; }
    enterRule(listener) {
        if (listener.enterLabeledstatement)
            listener.enterLabeledstatement(this);
    }
    exitRule(listener) {
        if (listener.exitLabeledstatement)
            listener.exitLabeledstatement(this);
    }
    accept(visitor) {
        if (visitor.visitLabeledstatement)
            return visitor.visitLabeledstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LabeledstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LabeledstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LabeledstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LabeledstatementContext.prototype, "accept", null);
exports.LabeledstatementContext = LabeledstatementContext;
class ExpressionstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_expressionstatement; }
    enterRule(listener) {
        if (listener.enterExpressionstatement)
            listener.enterExpressionstatement(this);
    }
    exitRule(listener) {
        if (listener.exitExpressionstatement)
            listener.exitExpressionstatement(this);
    }
    accept(visitor) {
        if (visitor.visitExpressionstatement)
            return visitor.visitExpressionstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionstatementContext.prototype, "accept", null);
exports.ExpressionstatementContext = ExpressionstatementContext;
class CompoundstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementseq() {
        return this.tryGetRuleContext(0, StatementseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_compoundstatement; }
    enterRule(listener) {
        if (listener.enterCompoundstatement)
            listener.enterCompoundstatement(this);
    }
    exitRule(listener) {
        if (listener.exitCompoundstatement)
            listener.exitCompoundstatement(this);
    }
    accept(visitor) {
        if (visitor.visitCompoundstatement)
            return visitor.visitCompoundstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CompoundstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CompoundstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CompoundstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CompoundstatementContext.prototype, "accept", null);
exports.CompoundstatementContext = CompoundstatementContext;
class StatementseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    statementseq() {
        return this.tryGetRuleContext(0, StatementseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_statementseq; }
    enterRule(listener) {
        if (listener.enterStatementseq)
            listener.enterStatementseq(this);
    }
    exitRule(listener) {
        if (listener.exitStatementseq)
            listener.exitStatementseq(this);
    }
    accept(visitor) {
        if (visitor.visitStatementseq)
            return visitor.visitStatementseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StatementseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StatementseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StatementseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StatementseqContext.prototype, "accept", null);
exports.StatementseqContext = StatementseqContext;
class SelectionstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    If() { return this.tryGetToken(CPP14Parser.If, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    Else() { return this.tryGetToken(CPP14Parser.Else, 0); }
    Switch() { return this.tryGetToken(CPP14Parser.Switch, 0); }
    get ruleIndex() { return CPP14Parser.RULE_selectionstatement; }
    enterRule(listener) {
        if (listener.enterSelectionstatement)
            listener.enterSelectionstatement(this);
    }
    exitRule(listener) {
        if (listener.exitSelectionstatement)
            listener.exitSelectionstatement(this);
    }
    accept(visitor) {
        if (visitor.visitSelectionstatement)
            return visitor.visitSelectionstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SelectionstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SelectionstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SelectionstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SelectionstatementContext.prototype, "accept", null);
exports.SelectionstatementContext = SelectionstatementContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    declspecifierseq() {
        return this.tryGetRuleContext(0, DeclspecifierseqContext);
    }
    declarator() {
        return this.tryGetRuleContext(0, DeclaratorContext);
    }
    initializerclause() {
        return this.tryGetRuleContext(0, InitializerclauseContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_condition; }
    enterRule(listener) {
        if (listener.enterCondition)
            listener.enterCondition(this);
    }
    exitRule(listener) {
        if (listener.exitCondition)
            listener.exitCondition(this);
    }
    accept(visitor) {
        if (visitor.visitCondition)
            return visitor.visitCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "accept", null);
exports.ConditionContext = ConditionContext;
class IterationstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    While() { return this.tryGetToken(CPP14Parser.While, 0); }
    condition() {
        return this.tryGetRuleContext(0, ConditionContext);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    Do() { return this.tryGetToken(CPP14Parser.Do, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    For() { return this.tryGetToken(CPP14Parser.For, 0); }
    forinitstatement() {
        return this.tryGetRuleContext(0, ForinitstatementContext);
    }
    forrangedeclaration() {
        return this.tryGetRuleContext(0, ForrangedeclarationContext);
    }
    forrangeinitializer() {
        return this.tryGetRuleContext(0, ForrangeinitializerContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_iterationstatement; }
    enterRule(listener) {
        if (listener.enterIterationstatement)
            listener.enterIterationstatement(this);
    }
    exitRule(listener) {
        if (listener.exitIterationstatement)
            listener.exitIterationstatement(this);
    }
    accept(visitor) {
        if (visitor.visitIterationstatement)
            return visitor.visitIterationstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IterationstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IterationstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IterationstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IterationstatementContext.prototype, "accept", null);
exports.IterationstatementContext = IterationstatementContext;
class ForinitstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionstatement() {
        return this.tryGetRuleContext(0, ExpressionstatementContext);
    }
    simpledeclaration() {
        return this.tryGetRuleContext(0, SimpledeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_forinitstatement; }
    enterRule(listener) {
        if (listener.enterForinitstatement)
            listener.enterForinitstatement(this);
    }
    exitRule(listener) {
        if (listener.exitForinitstatement)
            listener.exitForinitstatement(this);
    }
    accept(visitor) {
        if (visitor.visitForinitstatement)
            return visitor.visitForinitstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ForinitstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ForinitstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ForinitstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ForinitstatementContext.prototype, "accept", null);
exports.ForinitstatementContext = ForinitstatementContext;
class ForrangedeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declspecifierseq() {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    declarator() {
        return this.getRuleContext(0, DeclaratorContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_forrangedeclaration; }
    enterRule(listener) {
        if (listener.enterForrangedeclaration)
            listener.enterForrangedeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitForrangedeclaration)
            listener.exitForrangedeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitForrangedeclaration)
            return visitor.visitForrangedeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ForrangedeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ForrangedeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ForrangedeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ForrangedeclarationContext.prototype, "accept", null);
exports.ForrangedeclarationContext = ForrangedeclarationContext;
class ForrangeinitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_forrangeinitializer; }
    enterRule(listener) {
        if (listener.enterForrangeinitializer)
            listener.enterForrangeinitializer(this);
    }
    exitRule(listener) {
        if (listener.exitForrangeinitializer)
            listener.exitForrangeinitializer(this);
    }
    accept(visitor) {
        if (visitor.visitForrangeinitializer)
            return visitor.visitForrangeinitializer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ForrangeinitializerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ForrangeinitializerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ForrangeinitializerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ForrangeinitializerContext.prototype, "accept", null);
exports.ForrangeinitializerContext = ForrangeinitializerContext;
class JumpstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Break() { return this.tryGetToken(CPP14Parser.Break, 0); }
    Continue() { return this.tryGetToken(CPP14Parser.Continue, 0); }
    Return() { return this.tryGetToken(CPP14Parser.Return, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    Goto() { return this.tryGetToken(CPP14Parser.Goto, 0); }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_jumpstatement; }
    enterRule(listener) {
        if (listener.enterJumpstatement)
            listener.enterJumpstatement(this);
    }
    exitRule(listener) {
        if (listener.exitJumpstatement)
            listener.exitJumpstatement(this);
    }
    accept(visitor) {
        if (visitor.visitJumpstatement)
            return visitor.visitJumpstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], JumpstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], JumpstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], JumpstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], JumpstatementContext.prototype, "accept", null);
exports.JumpstatementContext = JumpstatementContext;
class DeclarationstatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    blockdeclaration() {
        return this.getRuleContext(0, BlockdeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_declarationstatement; }
    enterRule(listener) {
        if (listener.enterDeclarationstatement)
            listener.enterDeclarationstatement(this);
    }
    exitRule(listener) {
        if (listener.exitDeclarationstatement)
            listener.exitDeclarationstatement(this);
    }
    accept(visitor) {
        if (visitor.visitDeclarationstatement)
            return visitor.visitDeclarationstatement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclarationstatementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclarationstatementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclarationstatementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclarationstatementContext.prototype, "accept", null);
exports.DeclarationstatementContext = DeclarationstatementContext;
class DeclarationseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    declarationseq() {
        return this.tryGetRuleContext(0, DeclarationseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_declarationseq; }
    enterRule(listener) {
        if (listener.enterDeclarationseq)
            listener.enterDeclarationseq(this);
    }
    exitRule(listener) {
        if (listener.exitDeclarationseq)
            listener.exitDeclarationseq(this);
    }
    accept(visitor) {
        if (visitor.visitDeclarationseq)
            return visitor.visitDeclarationseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclarationseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclarationseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclarationseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclarationseqContext.prototype, "accept", null);
exports.DeclarationseqContext = DeclarationseqContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    blockdeclaration() {
        return this.tryGetRuleContext(0, BlockdeclarationContext);
    }
    functiondefinition() {
        return this.tryGetRuleContext(0, FunctiondefinitionContext);
    }
    templatedeclaration() {
        return this.tryGetRuleContext(0, TemplatedeclarationContext);
    }
    explicitinstantiation() {
        return this.tryGetRuleContext(0, ExplicitinstantiationContext);
    }
    explicitspecialization() {
        return this.tryGetRuleContext(0, ExplicitspecializationContext);
    }
    linkagespecification() {
        return this.tryGetRuleContext(0, LinkagespecificationContext);
    }
    namespacedefinition() {
        return this.tryGetRuleContext(0, NamespacedefinitionContext);
    }
    emptydeclaration() {
        return this.tryGetRuleContext(0, EmptydeclarationContext);
    }
    attributedeclaration() {
        return this.tryGetRuleContext(0, AttributedeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_declaration; }
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
class BlockdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simpledeclaration() {
        return this.tryGetRuleContext(0, SimpledeclarationContext);
    }
    asmdefinition() {
        return this.tryGetRuleContext(0, AsmdefinitionContext);
    }
    namespacealiasdefinition() {
        return this.tryGetRuleContext(0, NamespacealiasdefinitionContext);
    }
    usingdeclaration() {
        return this.tryGetRuleContext(0, UsingdeclarationContext);
    }
    usingdirective() {
        return this.tryGetRuleContext(0, UsingdirectiveContext);
    }
    static_assertdeclaration() {
        return this.tryGetRuleContext(0, Static_assertdeclarationContext);
    }
    aliasdeclaration() {
        return this.tryGetRuleContext(0, AliasdeclarationContext);
    }
    opaqueenumdeclaration() {
        return this.tryGetRuleContext(0, OpaqueenumdeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_blockdeclaration; }
    enterRule(listener) {
        if (listener.enterBlockdeclaration)
            listener.enterBlockdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitBlockdeclaration)
            listener.exitBlockdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitBlockdeclaration)
            return visitor.visitBlockdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BlockdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BlockdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BlockdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BlockdeclarationContext.prototype, "accept", null);
exports.BlockdeclarationContext = BlockdeclarationContext;
class AliasdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Using() { return this.getToken(CPP14Parser.Using, 0); }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    thetypeid() {
        return this.getRuleContext(0, ThetypeidContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_aliasdeclaration; }
    enterRule(listener) {
        if (listener.enterAliasdeclaration)
            listener.enterAliasdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitAliasdeclaration)
            listener.exitAliasdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitAliasdeclaration)
            return visitor.visitAliasdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AliasdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AliasdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AliasdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AliasdeclarationContext.prototype, "accept", null);
exports.AliasdeclarationContext = AliasdeclarationContext;
class SimpledeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declspecifierseq() {
        return this.tryGetRuleContext(0, DeclspecifierseqContext);
    }
    initdeclaratorlist() {
        return this.tryGetRuleContext(0, InitdeclaratorlistContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_simpledeclaration; }
    enterRule(listener) {
        if (listener.enterSimpledeclaration)
            listener.enterSimpledeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitSimpledeclaration)
            listener.exitSimpledeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitSimpledeclaration)
            return visitor.visitSimpledeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SimpledeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SimpledeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SimpledeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SimpledeclarationContext.prototype, "accept", null);
exports.SimpledeclarationContext = SimpledeclarationContext;
class Static_assertdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Static_assert() { return this.getToken(CPP14Parser.Static_assert, 0); }
    constantexpression() {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    Stringliteral() { return this.getToken(CPP14Parser.Stringliteral, 0); }
    get ruleIndex() { return CPP14Parser.RULE_static_assertdeclaration; }
    enterRule(listener) {
        if (listener.enterStatic_assertdeclaration)
            listener.enterStatic_assertdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitStatic_assertdeclaration)
            listener.exitStatic_assertdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitStatic_assertdeclaration)
            return visitor.visitStatic_assertdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Static_assertdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Static_assertdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Static_assertdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Static_assertdeclarationContext.prototype, "accept", null);
exports.Static_assertdeclarationContext = Static_assertdeclarationContext;
class EmptydeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return CPP14Parser.RULE_emptydeclaration; }
    enterRule(listener) {
        if (listener.enterEmptydeclaration)
            listener.enterEmptydeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitEmptydeclaration)
            listener.exitEmptydeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitEmptydeclaration)
            return visitor.visitEmptydeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EmptydeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EmptydeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EmptydeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EmptydeclarationContext.prototype, "accept", null);
exports.EmptydeclarationContext = EmptydeclarationContext;
class AttributedeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributespecifierseq() {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attributedeclaration; }
    enterRule(listener) {
        if (listener.enterAttributedeclaration)
            listener.enterAttributedeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitAttributedeclaration)
            listener.exitAttributedeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitAttributedeclaration)
            return visitor.visitAttributedeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributedeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributedeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributedeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributedeclarationContext.prototype, "accept", null);
exports.AttributedeclarationContext = AttributedeclarationContext;
class DeclspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    storageclassspecifier() {
        return this.tryGetRuleContext(0, StorageclassspecifierContext);
    }
    typespecifier() {
        return this.tryGetRuleContext(0, TypespecifierContext);
    }
    functionspecifier() {
        return this.tryGetRuleContext(0, FunctionspecifierContext);
    }
    Friend() { return this.tryGetToken(CPP14Parser.Friend, 0); }
    Typedef() { return this.tryGetToken(CPP14Parser.Typedef, 0); }
    Constexpr() { return this.tryGetToken(CPP14Parser.Constexpr, 0); }
    get ruleIndex() { return CPP14Parser.RULE_declspecifier; }
    enterRule(listener) {
        if (listener.enterDeclspecifier)
            listener.enterDeclspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitDeclspecifier)
            listener.exitDeclspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitDeclspecifier)
            return visitor.visitDeclspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclspecifierContext.prototype, "accept", null);
exports.DeclspecifierContext = DeclspecifierContext;
class DeclspecifierseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declspecifier() {
        return this.getRuleContext(0, DeclspecifierContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    declspecifierseq() {
        return this.tryGetRuleContext(0, DeclspecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_declspecifierseq; }
    enterRule(listener) {
        if (listener.enterDeclspecifierseq)
            listener.enterDeclspecifierseq(this);
    }
    exitRule(listener) {
        if (listener.exitDeclspecifierseq)
            listener.exitDeclspecifierseq(this);
    }
    accept(visitor) {
        if (visitor.visitDeclspecifierseq)
            return visitor.visitDeclspecifierseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclspecifierseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclspecifierseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclspecifierseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclspecifierseqContext.prototype, "accept", null);
exports.DeclspecifierseqContext = DeclspecifierseqContext;
class StorageclassspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Register() { return this.tryGetToken(CPP14Parser.Register, 0); }
    Static() { return this.tryGetToken(CPP14Parser.Static, 0); }
    Thread_local() { return this.tryGetToken(CPP14Parser.Thread_local, 0); }
    Extern() { return this.tryGetToken(CPP14Parser.Extern, 0); }
    Mutable() { return this.tryGetToken(CPP14Parser.Mutable, 0); }
    get ruleIndex() { return CPP14Parser.RULE_storageclassspecifier; }
    enterRule(listener) {
        if (listener.enterStorageclassspecifier)
            listener.enterStorageclassspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitStorageclassspecifier)
            listener.exitStorageclassspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitStorageclassspecifier)
            return visitor.visitStorageclassspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StorageclassspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StorageclassspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StorageclassspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StorageclassspecifierContext.prototype, "accept", null);
exports.StorageclassspecifierContext = StorageclassspecifierContext;
class FunctionspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Inline() { return this.tryGetToken(CPP14Parser.Inline, 0); }
    Virtual() { return this.tryGetToken(CPP14Parser.Virtual, 0); }
    Explicit() { return this.tryGetToken(CPP14Parser.Explicit, 0); }
    get ruleIndex() { return CPP14Parser.RULE_functionspecifier; }
    enterRule(listener) {
        if (listener.enterFunctionspecifier)
            listener.enterFunctionspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitFunctionspecifier)
            listener.exitFunctionspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitFunctionspecifier)
            return visitor.visitFunctionspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctionspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionspecifierContext.prototype, "accept", null);
exports.FunctionspecifierContext = FunctionspecifierContext;
class TypedefnameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_typedefname; }
    enterRule(listener) {
        if (listener.enterTypedefname)
            listener.enterTypedefname(this);
    }
    exitRule(listener) {
        if (listener.exitTypedefname)
            listener.exitTypedefname(this);
    }
    accept(visitor) {
        if (visitor.visitTypedefname)
            return visitor.visitTypedefname(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypedefnameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypedefnameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypedefnameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypedefnameContext.prototype, "accept", null);
exports.TypedefnameContext = TypedefnameContext;
class TypespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    trailingtypespecifier() {
        return this.tryGetRuleContext(0, TrailingtypespecifierContext);
    }
    classspecifier() {
        return this.tryGetRuleContext(0, ClassspecifierContext);
    }
    enumspecifier() {
        return this.tryGetRuleContext(0, EnumspecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_typespecifier; }
    enterRule(listener) {
        if (listener.enterTypespecifier)
            listener.enterTypespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitTypespecifier)
            listener.exitTypespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitTypespecifier)
            return visitor.visitTypespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypespecifierContext.prototype, "accept", null);
exports.TypespecifierContext = TypespecifierContext;
class TrailingtypespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simpletypespecifier() {
        return this.tryGetRuleContext(0, SimpletypespecifierContext);
    }
    elaboratedtypespecifier() {
        return this.tryGetRuleContext(0, ElaboratedtypespecifierContext);
    }
    typenamespecifier() {
        return this.tryGetRuleContext(0, TypenamespecifierContext);
    }
    cvqualifier() {
        return this.tryGetRuleContext(0, CvqualifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_trailingtypespecifier; }
    enterRule(listener) {
        if (listener.enterTrailingtypespecifier)
            listener.enterTrailingtypespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitTrailingtypespecifier)
            listener.exitTrailingtypespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitTrailingtypespecifier)
            return visitor.visitTrailingtypespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TrailingtypespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TrailingtypespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TrailingtypespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TrailingtypespecifierContext.prototype, "accept", null);
exports.TrailingtypespecifierContext = TrailingtypespecifierContext;
class TypespecifierseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typespecifier() {
        return this.getRuleContext(0, TypespecifierContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    typespecifierseq() {
        return this.tryGetRuleContext(0, TypespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_typespecifierseq; }
    enterRule(listener) {
        if (listener.enterTypespecifierseq)
            listener.enterTypespecifierseq(this);
    }
    exitRule(listener) {
        if (listener.exitTypespecifierseq)
            listener.exitTypespecifierseq(this);
    }
    accept(visitor) {
        if (visitor.visitTypespecifierseq)
            return visitor.visitTypespecifierseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypespecifierseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypespecifierseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypespecifierseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypespecifierseqContext.prototype, "accept", null);
exports.TypespecifierseqContext = TypespecifierseqContext;
class TrailingtypespecifierseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    trailingtypespecifier() {
        return this.getRuleContext(0, TrailingtypespecifierContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    trailingtypespecifierseq() {
        return this.tryGetRuleContext(0, TrailingtypespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_trailingtypespecifierseq; }
    enterRule(listener) {
        if (listener.enterTrailingtypespecifierseq)
            listener.enterTrailingtypespecifierseq(this);
    }
    exitRule(listener) {
        if (listener.exitTrailingtypespecifierseq)
            listener.exitTrailingtypespecifierseq(this);
    }
    accept(visitor) {
        if (visitor.visitTrailingtypespecifierseq)
            return visitor.visitTrailingtypespecifierseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TrailingtypespecifierseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TrailingtypespecifierseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TrailingtypespecifierseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TrailingtypespecifierseqContext.prototype, "accept", null);
exports.TrailingtypespecifierseqContext = TrailingtypespecifierseqContext;
class SimpletypespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    thetypename() {
        return this.tryGetRuleContext(0, ThetypenameContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    Char() { return this.tryGetToken(CPP14Parser.Char, 0); }
    Char16() { return this.tryGetToken(CPP14Parser.Char16, 0); }
    Char32() { return this.tryGetToken(CPP14Parser.Char32, 0); }
    Wchar() { return this.tryGetToken(CPP14Parser.Wchar, 0); }
    Bool() { return this.tryGetToken(CPP14Parser.Bool, 0); }
    Short() { return this.tryGetToken(CPP14Parser.Short, 0); }
    Int() { return this.tryGetToken(CPP14Parser.Int, 0); }
    Long() { return this.tryGetToken(CPP14Parser.Long, 0); }
    Signed() { return this.tryGetToken(CPP14Parser.Signed, 0); }
    Unsigned() { return this.tryGetToken(CPP14Parser.Unsigned, 0); }
    Float() { return this.tryGetToken(CPP14Parser.Float, 0); }
    Double() { return this.tryGetToken(CPP14Parser.Double, 0); }
    Void() { return this.tryGetToken(CPP14Parser.Void, 0); }
    Auto() { return this.tryGetToken(CPP14Parser.Auto, 0); }
    decltypespecifier() {
        return this.tryGetRuleContext(0, DecltypespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_simpletypespecifier; }
    enterRule(listener) {
        if (listener.enterSimpletypespecifier)
            listener.enterSimpletypespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitSimpletypespecifier)
            listener.exitSimpletypespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitSimpletypespecifier)
            return visitor.visitSimpletypespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SimpletypespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SimpletypespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SimpletypespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SimpletypespecifierContext.prototype, "accept", null);
exports.SimpletypespecifierContext = SimpletypespecifierContext;
class ThetypenameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classname() {
        return this.tryGetRuleContext(0, ClassnameContext);
    }
    enumname() {
        return this.tryGetRuleContext(0, EnumnameContext);
    }
    typedefname() {
        return this.tryGetRuleContext(0, TypedefnameContext);
    }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_thetypename; }
    enterRule(listener) {
        if (listener.enterThetypename)
            listener.enterThetypename(this);
    }
    exitRule(listener) {
        if (listener.exitThetypename)
            listener.exitThetypename(this);
    }
    accept(visitor) {
        if (visitor.visitThetypename)
            return visitor.visitThetypename(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ThetypenameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ThetypenameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ThetypenameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ThetypenameContext.prototype, "accept", null);
exports.ThetypenameContext = ThetypenameContext;
class DecltypespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Decltype() { return this.getToken(CPP14Parser.Decltype, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    Auto() { return this.tryGetToken(CPP14Parser.Auto, 0); }
    get ruleIndex() { return CPP14Parser.RULE_decltypespecifier; }
    enterRule(listener) {
        if (listener.enterDecltypespecifier)
            listener.enterDecltypespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitDecltypespecifier)
            listener.exitDecltypespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitDecltypespecifier)
            return visitor.visitDecltypespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DecltypespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DecltypespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DecltypespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DecltypespecifierContext.prototype, "accept", null);
exports.DecltypespecifierContext = DecltypespecifierContext;
class ElaboratedtypespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classkey() {
        return this.tryGetRuleContext(0, ClasskeyContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    Enum() { return this.tryGetToken(CPP14Parser.Enum, 0); }
    get ruleIndex() { return CPP14Parser.RULE_elaboratedtypespecifier; }
    enterRule(listener) {
        if (listener.enterElaboratedtypespecifier)
            listener.enterElaboratedtypespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitElaboratedtypespecifier)
            listener.exitElaboratedtypespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitElaboratedtypespecifier)
            return visitor.visitElaboratedtypespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ElaboratedtypespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ElaboratedtypespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ElaboratedtypespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ElaboratedtypespecifierContext.prototype, "accept", null);
exports.ElaboratedtypespecifierContext = ElaboratedtypespecifierContext;
class EnumnameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_enumname; }
    enterRule(listener) {
        if (listener.enterEnumname)
            listener.enterEnumname(this);
    }
    exitRule(listener) {
        if (listener.exitEnumname)
            listener.exitEnumname(this);
    }
    accept(visitor) {
        if (visitor.visitEnumname)
            return visitor.visitEnumname(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumnameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumnameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumnameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumnameContext.prototype, "accept", null);
exports.EnumnameContext = EnumnameContext;
class EnumspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumhead() {
        return this.getRuleContext(0, EnumheadContext);
    }
    enumeratorlist() {
        return this.tryGetRuleContext(0, EnumeratorlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_enumspecifier; }
    enterRule(listener) {
        if (listener.enterEnumspecifier)
            listener.enterEnumspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitEnumspecifier)
            listener.exitEnumspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitEnumspecifier)
            return visitor.visitEnumspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumspecifierContext.prototype, "accept", null);
exports.EnumspecifierContext = EnumspecifierContext;
class EnumheadContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumkey() {
        return this.getRuleContext(0, EnumkeyContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    enumbase() {
        return this.tryGetRuleContext(0, EnumbaseContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_enumhead; }
    enterRule(listener) {
        if (listener.enterEnumhead)
            listener.enterEnumhead(this);
    }
    exitRule(listener) {
        if (listener.exitEnumhead)
            listener.exitEnumhead(this);
    }
    accept(visitor) {
        if (visitor.visitEnumhead)
            return visitor.visitEnumhead(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumheadContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumheadContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumheadContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumheadContext.prototype, "accept", null);
exports.EnumheadContext = EnumheadContext;
class OpaqueenumdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumkey() {
        return this.getRuleContext(0, EnumkeyContext);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    enumbase() {
        return this.tryGetRuleContext(0, EnumbaseContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_opaqueenumdeclaration; }
    enterRule(listener) {
        if (listener.enterOpaqueenumdeclaration)
            listener.enterOpaqueenumdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitOpaqueenumdeclaration)
            listener.exitOpaqueenumdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitOpaqueenumdeclaration)
            return visitor.visitOpaqueenumdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OpaqueenumdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OpaqueenumdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OpaqueenumdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OpaqueenumdeclarationContext.prototype, "accept", null);
exports.OpaqueenumdeclarationContext = OpaqueenumdeclarationContext;
class EnumkeyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Enum() { return this.getToken(CPP14Parser.Enum, 0); }
    Class() { return this.tryGetToken(CPP14Parser.Class, 0); }
    Struct() { return this.tryGetToken(CPP14Parser.Struct, 0); }
    get ruleIndex() { return CPP14Parser.RULE_enumkey; }
    enterRule(listener) {
        if (listener.enterEnumkey)
            listener.enterEnumkey(this);
    }
    exitRule(listener) {
        if (listener.exitEnumkey)
            listener.exitEnumkey(this);
    }
    accept(visitor) {
        if (visitor.visitEnumkey)
            return visitor.visitEnumkey(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumkeyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumkeyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumkeyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumkeyContext.prototype, "accept", null);
exports.EnumkeyContext = EnumkeyContext;
class EnumbaseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typespecifierseq() {
        return this.getRuleContext(0, TypespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_enumbase; }
    enterRule(listener) {
        if (listener.enterEnumbase)
            listener.enterEnumbase(this);
    }
    exitRule(listener) {
        if (listener.exitEnumbase)
            listener.exitEnumbase(this);
    }
    accept(visitor) {
        if (visitor.visitEnumbase)
            return visitor.visitEnumbase(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumbaseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumbaseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumbaseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumbaseContext.prototype, "accept", null);
exports.EnumbaseContext = EnumbaseContext;
class EnumeratorlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumeratordefinition() {
        return this.getRuleContext(0, EnumeratordefinitionContext);
    }
    enumeratorlist() {
        return this.tryGetRuleContext(0, EnumeratorlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_enumeratorlist; }
    enterRule(listener) {
        if (listener.enterEnumeratorlist)
            listener.enterEnumeratorlist(this);
    }
    exitRule(listener) {
        if (listener.exitEnumeratorlist)
            listener.exitEnumeratorlist(this);
    }
    accept(visitor) {
        if (visitor.visitEnumeratorlist)
            return visitor.visitEnumeratorlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumeratorlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumeratorlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumeratorlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumeratorlistContext.prototype, "accept", null);
exports.EnumeratorlistContext = EnumeratorlistContext;
class EnumeratordefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumerator() {
        return this.getRuleContext(0, EnumeratorContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_enumeratordefinition; }
    enterRule(listener) {
        if (listener.enterEnumeratordefinition)
            listener.enterEnumeratordefinition(this);
    }
    exitRule(listener) {
        if (listener.exitEnumeratordefinition)
            listener.exitEnumeratordefinition(this);
    }
    accept(visitor) {
        if (visitor.visitEnumeratordefinition)
            return visitor.visitEnumeratordefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumeratordefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumeratordefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumeratordefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumeratordefinitionContext.prototype, "accept", null);
exports.EnumeratordefinitionContext = EnumeratordefinitionContext;
class EnumeratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_enumerator; }
    enterRule(listener) {
        if (listener.enterEnumerator)
            listener.enterEnumerator(this);
    }
    exitRule(listener) {
        if (listener.exitEnumerator)
            listener.exitEnumerator(this);
    }
    accept(visitor) {
        if (visitor.visitEnumerator)
            return visitor.visitEnumerator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumeratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumeratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumeratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumeratorContext.prototype, "accept", null);
exports.EnumeratorContext = EnumeratorContext;
class NamespacenameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    originalnamespacename() {
        return this.tryGetRuleContext(0, OriginalnamespacenameContext);
    }
    namespacealias() {
        return this.tryGetRuleContext(0, NamespacealiasContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_namespacename; }
    enterRule(listener) {
        if (listener.enterNamespacename)
            listener.enterNamespacename(this);
    }
    exitRule(listener) {
        if (listener.exitNamespacename)
            listener.exitNamespacename(this);
    }
    accept(visitor) {
        if (visitor.visitNamespacename)
            return visitor.visitNamespacename(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamespacenameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamespacenameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamespacenameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamespacenameContext.prototype, "accept", null);
exports.NamespacenameContext = NamespacenameContext;
class OriginalnamespacenameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_originalnamespacename; }
    enterRule(listener) {
        if (listener.enterOriginalnamespacename)
            listener.enterOriginalnamespacename(this);
    }
    exitRule(listener) {
        if (listener.exitOriginalnamespacename)
            listener.exitOriginalnamespacename(this);
    }
    accept(visitor) {
        if (visitor.visitOriginalnamespacename)
            return visitor.visitOriginalnamespacename(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OriginalnamespacenameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OriginalnamespacenameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OriginalnamespacenameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OriginalnamespacenameContext.prototype, "accept", null);
exports.OriginalnamespacenameContext = OriginalnamespacenameContext;
class NamespacedefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namednamespacedefinition() {
        return this.tryGetRuleContext(0, NamednamespacedefinitionContext);
    }
    unnamednamespacedefinition() {
        return this.tryGetRuleContext(0, UnnamednamespacedefinitionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_namespacedefinition; }
    enterRule(listener) {
        if (listener.enterNamespacedefinition)
            listener.enterNamespacedefinition(this);
    }
    exitRule(listener) {
        if (listener.exitNamespacedefinition)
            listener.exitNamespacedefinition(this);
    }
    accept(visitor) {
        if (visitor.visitNamespacedefinition)
            return visitor.visitNamespacedefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamespacedefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamespacedefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamespacedefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamespacedefinitionContext.prototype, "accept", null);
exports.NamespacedefinitionContext = NamespacedefinitionContext;
class NamednamespacedefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    originalnamespacedefinition() {
        return this.tryGetRuleContext(0, OriginalnamespacedefinitionContext);
    }
    extensionnamespacedefinition() {
        return this.tryGetRuleContext(0, ExtensionnamespacedefinitionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_namednamespacedefinition; }
    enterRule(listener) {
        if (listener.enterNamednamespacedefinition)
            listener.enterNamednamespacedefinition(this);
    }
    exitRule(listener) {
        if (listener.exitNamednamespacedefinition)
            listener.exitNamednamespacedefinition(this);
    }
    accept(visitor) {
        if (visitor.visitNamednamespacedefinition)
            return visitor.visitNamednamespacedefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamednamespacedefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamednamespacedefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamednamespacedefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamednamespacedefinitionContext.prototype, "accept", null);
exports.NamednamespacedefinitionContext = NamednamespacedefinitionContext;
class OriginalnamespacedefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Namespace() { return this.getToken(CPP14Parser.Namespace, 0); }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    namespacebody() {
        return this.getRuleContext(0, NamespacebodyContext);
    }
    Inline() { return this.tryGetToken(CPP14Parser.Inline, 0); }
    get ruleIndex() { return CPP14Parser.RULE_originalnamespacedefinition; }
    enterRule(listener) {
        if (listener.enterOriginalnamespacedefinition)
            listener.enterOriginalnamespacedefinition(this);
    }
    exitRule(listener) {
        if (listener.exitOriginalnamespacedefinition)
            listener.exitOriginalnamespacedefinition(this);
    }
    accept(visitor) {
        if (visitor.visitOriginalnamespacedefinition)
            return visitor.visitOriginalnamespacedefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OriginalnamespacedefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OriginalnamespacedefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OriginalnamespacedefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OriginalnamespacedefinitionContext.prototype, "accept", null);
exports.OriginalnamespacedefinitionContext = OriginalnamespacedefinitionContext;
class ExtensionnamespacedefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Namespace() { return this.getToken(CPP14Parser.Namespace, 0); }
    originalnamespacename() {
        return this.getRuleContext(0, OriginalnamespacenameContext);
    }
    namespacebody() {
        return this.getRuleContext(0, NamespacebodyContext);
    }
    Inline() { return this.tryGetToken(CPP14Parser.Inline, 0); }
    get ruleIndex() { return CPP14Parser.RULE_extensionnamespacedefinition; }
    enterRule(listener) {
        if (listener.enterExtensionnamespacedefinition)
            listener.enterExtensionnamespacedefinition(this);
    }
    exitRule(listener) {
        if (listener.exitExtensionnamespacedefinition)
            listener.exitExtensionnamespacedefinition(this);
    }
    accept(visitor) {
        if (visitor.visitExtensionnamespacedefinition)
            return visitor.visitExtensionnamespacedefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExtensionnamespacedefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExtensionnamespacedefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExtensionnamespacedefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExtensionnamespacedefinitionContext.prototype, "accept", null);
exports.ExtensionnamespacedefinitionContext = ExtensionnamespacedefinitionContext;
class UnnamednamespacedefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Namespace() { return this.getToken(CPP14Parser.Namespace, 0); }
    namespacebody() {
        return this.getRuleContext(0, NamespacebodyContext);
    }
    Inline() { return this.tryGetToken(CPP14Parser.Inline, 0); }
    get ruleIndex() { return CPP14Parser.RULE_unnamednamespacedefinition; }
    enterRule(listener) {
        if (listener.enterUnnamednamespacedefinition)
            listener.enterUnnamednamespacedefinition(this);
    }
    exitRule(listener) {
        if (listener.exitUnnamednamespacedefinition)
            listener.exitUnnamednamespacedefinition(this);
    }
    accept(visitor) {
        if (visitor.visitUnnamednamespacedefinition)
            return visitor.visitUnnamednamespacedefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnnamednamespacedefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnnamednamespacedefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnnamednamespacedefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnnamednamespacedefinitionContext.prototype, "accept", null);
exports.UnnamednamespacedefinitionContext = UnnamednamespacedefinitionContext;
class NamespacebodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declarationseq() {
        return this.tryGetRuleContext(0, DeclarationseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_namespacebody; }
    enterRule(listener) {
        if (listener.enterNamespacebody)
            listener.enterNamespacebody(this);
    }
    exitRule(listener) {
        if (listener.exitNamespacebody)
            listener.exitNamespacebody(this);
    }
    accept(visitor) {
        if (visitor.visitNamespacebody)
            return visitor.visitNamespacebody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamespacebodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamespacebodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamespacebodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamespacebodyContext.prototype, "accept", null);
exports.NamespacebodyContext = NamespacebodyContext;
class NamespacealiasContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_namespacealias; }
    enterRule(listener) {
        if (listener.enterNamespacealias)
            listener.enterNamespacealias(this);
    }
    exitRule(listener) {
        if (listener.exitNamespacealias)
            listener.exitNamespacealias(this);
    }
    accept(visitor) {
        if (visitor.visitNamespacealias)
            return visitor.visitNamespacealias(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamespacealiasContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamespacealiasContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamespacealiasContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamespacealiasContext.prototype, "accept", null);
exports.NamespacealiasContext = NamespacealiasContext;
class NamespacealiasdefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Namespace() { return this.getToken(CPP14Parser.Namespace, 0); }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    qualifiednamespacespecifier() {
        return this.getRuleContext(0, QualifiednamespacespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_namespacealiasdefinition; }
    enterRule(listener) {
        if (listener.enterNamespacealiasdefinition)
            listener.enterNamespacealiasdefinition(this);
    }
    exitRule(listener) {
        if (listener.exitNamespacealiasdefinition)
            listener.exitNamespacealiasdefinition(this);
    }
    accept(visitor) {
        if (visitor.visitNamespacealiasdefinition)
            return visitor.visitNamespacealiasdefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamespacealiasdefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamespacealiasdefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamespacealiasdefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamespacealiasdefinitionContext.prototype, "accept", null);
exports.NamespacealiasdefinitionContext = NamespacealiasdefinitionContext;
class QualifiednamespacespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namespacename() {
        return this.getRuleContext(0, NamespacenameContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_qualifiednamespacespecifier; }
    enterRule(listener) {
        if (listener.enterQualifiednamespacespecifier)
            listener.enterQualifiednamespacespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitQualifiednamespacespecifier)
            listener.exitQualifiednamespacespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitQualifiednamespacespecifier)
            return visitor.visitQualifiednamespacespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QualifiednamespacespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QualifiednamespacespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QualifiednamespacespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QualifiednamespacespecifierContext.prototype, "accept", null);
exports.QualifiednamespacespecifierContext = QualifiednamespacespecifierContext;
class UsingdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Using() { return this.getToken(CPP14Parser.Using, 0); }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    unqualifiedid() {
        return this.getRuleContext(0, UnqualifiedidContext);
    }
    Typename() { return this.tryGetToken(CPP14Parser.Typename, 0); }
    get ruleIndex() { return CPP14Parser.RULE_usingdeclaration; }
    enterRule(listener) {
        if (listener.enterUsingdeclaration)
            listener.enterUsingdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitUsingdeclaration)
            listener.exitUsingdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitUsingdeclaration)
            return visitor.visitUsingdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UsingdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UsingdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UsingdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UsingdeclarationContext.prototype, "accept", null);
exports.UsingdeclarationContext = UsingdeclarationContext;
class UsingdirectiveContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Using() { return this.getToken(CPP14Parser.Using, 0); }
    Namespace() { return this.getToken(CPP14Parser.Namespace, 0); }
    namespacename() {
        return this.getRuleContext(0, NamespacenameContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_usingdirective; }
    enterRule(listener) {
        if (listener.enterUsingdirective)
            listener.enterUsingdirective(this);
    }
    exitRule(listener) {
        if (listener.exitUsingdirective)
            listener.exitUsingdirective(this);
    }
    accept(visitor) {
        if (visitor.visitUsingdirective)
            return visitor.visitUsingdirective(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UsingdirectiveContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UsingdirectiveContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UsingdirectiveContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UsingdirectiveContext.prototype, "accept", null);
exports.UsingdirectiveContext = UsingdirectiveContext;
class AsmdefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Asm() { return this.getToken(CPP14Parser.Asm, 0); }
    Stringliteral() { return this.getToken(CPP14Parser.Stringliteral, 0); }
    get ruleIndex() { return CPP14Parser.RULE_asmdefinition; }
    enterRule(listener) {
        if (listener.enterAsmdefinition)
            listener.enterAsmdefinition(this);
    }
    exitRule(listener) {
        if (listener.exitAsmdefinition)
            listener.exitAsmdefinition(this);
    }
    accept(visitor) {
        if (visitor.visitAsmdefinition)
            return visitor.visitAsmdefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AsmdefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AsmdefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AsmdefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AsmdefinitionContext.prototype, "accept", null);
exports.AsmdefinitionContext = AsmdefinitionContext;
class LinkagespecificationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Extern() { return this.getToken(CPP14Parser.Extern, 0); }
    Stringliteral() { return this.getToken(CPP14Parser.Stringliteral, 0); }
    declarationseq() {
        return this.tryGetRuleContext(0, DeclarationseqContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_linkagespecification; }
    enterRule(listener) {
        if (listener.enterLinkagespecification)
            listener.enterLinkagespecification(this);
    }
    exitRule(listener) {
        if (listener.exitLinkagespecification)
            listener.exitLinkagespecification(this);
    }
    accept(visitor) {
        if (visitor.visitLinkagespecification)
            return visitor.visitLinkagespecification(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LinkagespecificationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LinkagespecificationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LinkagespecificationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LinkagespecificationContext.prototype, "accept", null);
exports.LinkagespecificationContext = LinkagespecificationContext;
class AttributespecifierseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributespecifier() {
        return this.getRuleContext(0, AttributespecifierContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attributespecifierseq; }
    enterRule(listener) {
        if (listener.enterAttributespecifierseq)
            listener.enterAttributespecifierseq(this);
    }
    exitRule(listener) {
        if (listener.exitAttributespecifierseq)
            listener.exitAttributespecifierseq(this);
    }
    accept(visitor) {
        if (visitor.visitAttributespecifierseq)
            return visitor.visitAttributespecifierseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributespecifierseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributespecifierseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributespecifierseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributespecifierseqContext.prototype, "accept", null);
exports.AttributespecifierseqContext = AttributespecifierseqContext;
class AttributespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributelist() {
        return this.tryGetRuleContext(0, AttributelistContext);
    }
    alignmentspecifier() {
        return this.tryGetRuleContext(0, AlignmentspecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attributespecifier; }
    enterRule(listener) {
        if (listener.enterAttributespecifier)
            listener.enterAttributespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitAttributespecifier)
            listener.exitAttributespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitAttributespecifier)
            return visitor.visitAttributespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributespecifierContext.prototype, "accept", null);
exports.AttributespecifierContext = AttributespecifierContext;
class AlignmentspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Alignas() { return this.getToken(CPP14Parser.Alignas, 0); }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_alignmentspecifier; }
    enterRule(listener) {
        if (listener.enterAlignmentspecifier)
            listener.enterAlignmentspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitAlignmentspecifier)
            listener.exitAlignmentspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitAlignmentspecifier)
            return visitor.visitAlignmentspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AlignmentspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AlignmentspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AlignmentspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AlignmentspecifierContext.prototype, "accept", null);
exports.AlignmentspecifierContext = AlignmentspecifierContext;
class AttributelistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attribute() {
        return this.tryGetRuleContext(0, AttributeContext);
    }
    attributelist() {
        return this.tryGetRuleContext(0, AttributelistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attributelist; }
    enterRule(listener) {
        if (listener.enterAttributelist)
            listener.enterAttributelist(this);
    }
    exitRule(listener) {
        if (listener.exitAttributelist)
            listener.exitAttributelist(this);
    }
    accept(visitor) {
        if (visitor.visitAttributelist)
            return visitor.visitAttributelist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributelistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributelistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributelistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributelistContext.prototype, "accept", null);
exports.AttributelistContext = AttributelistContext;
class AttributeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributetoken() {
        return this.getRuleContext(0, AttributetokenContext);
    }
    attributeargumentclause() {
        return this.tryGetRuleContext(0, AttributeargumentclauseContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attribute; }
    enterRule(listener) {
        if (listener.enterAttribute)
            listener.enterAttribute(this);
    }
    exitRule(listener) {
        if (listener.exitAttribute)
            listener.exitAttribute(this);
    }
    accept(visitor) {
        if (visitor.visitAttribute)
            return visitor.visitAttribute(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributeContext.prototype, "accept", null);
exports.AttributeContext = AttributeContext;
class AttributetokenContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    attributescopedtoken() {
        return this.tryGetRuleContext(0, AttributescopedtokenContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attributetoken; }
    enterRule(listener) {
        if (listener.enterAttributetoken)
            listener.enterAttributetoken(this);
    }
    exitRule(listener) {
        if (listener.exitAttributetoken)
            listener.exitAttributetoken(this);
    }
    accept(visitor) {
        if (visitor.visitAttributetoken)
            return visitor.visitAttributetoken(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributetokenContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributetokenContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributetokenContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributetokenContext.prototype, "accept", null);
exports.AttributetokenContext = AttributetokenContext;
class AttributescopedtokenContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributenamespace() {
        return this.getRuleContext(0, AttributenamespaceContext);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_attributescopedtoken; }
    enterRule(listener) {
        if (listener.enterAttributescopedtoken)
            listener.enterAttributescopedtoken(this);
    }
    exitRule(listener) {
        if (listener.exitAttributescopedtoken)
            listener.exitAttributescopedtoken(this);
    }
    accept(visitor) {
        if (visitor.visitAttributescopedtoken)
            return visitor.visitAttributescopedtoken(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributescopedtokenContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributescopedtokenContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributescopedtokenContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributescopedtokenContext.prototype, "accept", null);
exports.AttributescopedtokenContext = AttributescopedtokenContext;
class AttributenamespaceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_attributenamespace; }
    enterRule(listener) {
        if (listener.enterAttributenamespace)
            listener.enterAttributenamespace(this);
    }
    exitRule(listener) {
        if (listener.exitAttributenamespace)
            listener.exitAttributenamespace(this);
    }
    accept(visitor) {
        if (visitor.visitAttributenamespace)
            return visitor.visitAttributenamespace(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributenamespaceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributenamespaceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributenamespaceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributenamespaceContext.prototype, "accept", null);
exports.AttributenamespaceContext = AttributenamespaceContext;
class AttributeargumentclauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    balancedtokenseq() {
        return this.getRuleContext(0, BalancedtokenseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_attributeargumentclause; }
    enterRule(listener) {
        if (listener.enterAttributeargumentclause)
            listener.enterAttributeargumentclause(this);
    }
    exitRule(listener) {
        if (listener.exitAttributeargumentclause)
            listener.exitAttributeargumentclause(this);
    }
    accept(visitor) {
        if (visitor.visitAttributeargumentclause)
            return visitor.visitAttributeargumentclause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AttributeargumentclauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AttributeargumentclauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AttributeargumentclauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AttributeargumentclauseContext.prototype, "accept", null);
exports.AttributeargumentclauseContext = AttributeargumentclauseContext;
class BalancedtokenseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    balancedtoken() {
        return this.tryGetRuleContext(0, BalancedtokenContext);
    }
    balancedtokenseq() {
        return this.tryGetRuleContext(0, BalancedtokenseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_balancedtokenseq; }
    enterRule(listener) {
        if (listener.enterBalancedtokenseq)
            listener.enterBalancedtokenseq(this);
    }
    exitRule(listener) {
        if (listener.exitBalancedtokenseq)
            listener.exitBalancedtokenseq(this);
    }
    accept(visitor) {
        if (visitor.visitBalancedtokenseq)
            return visitor.visitBalancedtokenseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BalancedtokenseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BalancedtokenseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BalancedtokenseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BalancedtokenseqContext.prototype, "accept", null);
exports.BalancedtokenseqContext = BalancedtokenseqContext;
class BalancedtokenContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    balancedtokenseq() {
        return this.getRuleContext(0, BalancedtokenseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_balancedtoken; }
    enterRule(listener) {
        if (listener.enterBalancedtoken)
            listener.enterBalancedtoken(this);
    }
    exitRule(listener) {
        if (listener.exitBalancedtoken)
            listener.exitBalancedtoken(this);
    }
    accept(visitor) {
        if (visitor.visitBalancedtoken)
            return visitor.visitBalancedtoken(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BalancedtokenContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BalancedtokenContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BalancedtokenContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BalancedtokenContext.prototype, "accept", null);
exports.BalancedtokenContext = BalancedtokenContext;
class InitdeclaratorlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    initdeclarator() {
        return this.getRuleContext(0, InitdeclaratorContext);
    }
    initdeclaratorlist() {
        return this.tryGetRuleContext(0, InitdeclaratorlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_initdeclaratorlist; }
    enterRule(listener) {
        if (listener.enterInitdeclaratorlist)
            listener.enterInitdeclaratorlist(this);
    }
    exitRule(listener) {
        if (listener.exitInitdeclaratorlist)
            listener.exitInitdeclaratorlist(this);
    }
    accept(visitor) {
        if (visitor.visitInitdeclaratorlist)
            return visitor.visitInitdeclaratorlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitdeclaratorlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitdeclaratorlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitdeclaratorlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitdeclaratorlistContext.prototype, "accept", null);
exports.InitdeclaratorlistContext = InitdeclaratorlistContext;
class InitdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declarator() {
        return this.getRuleContext(0, DeclaratorContext);
    }
    initializer() {
        return this.tryGetRuleContext(0, InitializerContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_initdeclarator; }
    enterRule(listener) {
        if (listener.enterInitdeclarator)
            listener.enterInitdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitInitdeclarator)
            listener.exitInitdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitInitdeclarator)
            return visitor.visitInitdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitdeclaratorContext.prototype, "accept", null);
exports.InitdeclaratorContext = InitdeclaratorContext;
class DeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ptrdeclarator() {
        return this.tryGetRuleContext(0, PtrdeclaratorContext);
    }
    noptrdeclarator() {
        return this.tryGetRuleContext(0, NoptrdeclaratorContext);
    }
    parametersandqualifiers() {
        return this.tryGetRuleContext(0, ParametersandqualifiersContext);
    }
    trailingreturntype() {
        return this.tryGetRuleContext(0, TrailingreturntypeContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_declarator; }
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
class PtrdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    noptrdeclarator() {
        return this.tryGetRuleContext(0, NoptrdeclaratorContext);
    }
    ptroperator() {
        return this.tryGetRuleContext(0, PtroperatorContext);
    }
    ptrdeclarator() {
        return this.tryGetRuleContext(0, PtrdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_ptrdeclarator; }
    enterRule(listener) {
        if (listener.enterPtrdeclarator)
            listener.enterPtrdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitPtrdeclarator)
            listener.exitPtrdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitPtrdeclarator)
            return visitor.visitPtrdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PtrdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PtrdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PtrdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PtrdeclaratorContext.prototype, "accept", null);
exports.PtrdeclaratorContext = PtrdeclaratorContext;
class NoptrdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declaratorid() {
        return this.tryGetRuleContext(0, DeclaratoridContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    noptrdeclarator() {
        return this.tryGetRuleContext(0, NoptrdeclaratorContext);
    }
    parametersandqualifiers() {
        return this.tryGetRuleContext(0, ParametersandqualifiersContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    ptrdeclarator() {
        return this.tryGetRuleContext(0, PtrdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_noptrdeclarator; }
    enterRule(listener) {
        if (listener.enterNoptrdeclarator)
            listener.enterNoptrdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitNoptrdeclarator)
            listener.exitNoptrdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitNoptrdeclarator)
            return visitor.visitNoptrdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NoptrdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NoptrdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NoptrdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NoptrdeclaratorContext.prototype, "accept", null);
exports.NoptrdeclaratorContext = NoptrdeclaratorContext;
class ParametersandqualifiersContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parameterdeclarationclause() {
        return this.getRuleContext(0, ParameterdeclarationclauseContext);
    }
    cvqualifierseq() {
        return this.tryGetRuleContext(0, CvqualifierseqContext);
    }
    refqualifier() {
        return this.tryGetRuleContext(0, RefqualifierContext);
    }
    exceptionspecification() {
        return this.tryGetRuleContext(0, ExceptionspecificationContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_parametersandqualifiers; }
    enterRule(listener) {
        if (listener.enterParametersandqualifiers)
            listener.enterParametersandqualifiers(this);
    }
    exitRule(listener) {
        if (listener.exitParametersandqualifiers)
            listener.exitParametersandqualifiers(this);
    }
    accept(visitor) {
        if (visitor.visitParametersandqualifiers)
            return visitor.visitParametersandqualifiers(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParametersandqualifiersContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParametersandqualifiersContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParametersandqualifiersContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParametersandqualifiersContext.prototype, "accept", null);
exports.ParametersandqualifiersContext = ParametersandqualifiersContext;
class TrailingreturntypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    trailingtypespecifierseq() {
        return this.getRuleContext(0, TrailingtypespecifierseqContext);
    }
    abstractdeclarator() {
        return this.tryGetRuleContext(0, AbstractdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_trailingreturntype; }
    enterRule(listener) {
        if (listener.enterTrailingreturntype)
            listener.enterTrailingreturntype(this);
    }
    exitRule(listener) {
        if (listener.exitTrailingreturntype)
            listener.exitTrailingreturntype(this);
    }
    accept(visitor) {
        if (visitor.visitTrailingreturntype)
            return visitor.visitTrailingreturntype(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TrailingreturntypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TrailingreturntypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TrailingreturntypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TrailingreturntypeContext.prototype, "accept", null);
exports.TrailingreturntypeContext = TrailingreturntypeContext;
class PtroperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    cvqualifierseq() {
        return this.tryGetRuleContext(0, CvqualifierseqContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_ptroperator; }
    enterRule(listener) {
        if (listener.enterPtroperator)
            listener.enterPtroperator(this);
    }
    exitRule(listener) {
        if (listener.exitPtroperator)
            listener.exitPtroperator(this);
    }
    accept(visitor) {
        if (visitor.visitPtroperator)
            return visitor.visitPtroperator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PtroperatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PtroperatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PtroperatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PtroperatorContext.prototype, "accept", null);
exports.PtroperatorContext = PtroperatorContext;
class CvqualifierseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    cvqualifier() {
        return this.getRuleContext(0, CvqualifierContext);
    }
    cvqualifierseq() {
        return this.tryGetRuleContext(0, CvqualifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_cvqualifierseq; }
    enterRule(listener) {
        if (listener.enterCvqualifierseq)
            listener.enterCvqualifierseq(this);
    }
    exitRule(listener) {
        if (listener.exitCvqualifierseq)
            listener.exitCvqualifierseq(this);
    }
    accept(visitor) {
        if (visitor.visitCvqualifierseq)
            return visitor.visitCvqualifierseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CvqualifierseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CvqualifierseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CvqualifierseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CvqualifierseqContext.prototype, "accept", null);
exports.CvqualifierseqContext = CvqualifierseqContext;
class CvqualifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Const() { return this.tryGetToken(CPP14Parser.Const, 0); }
    Volatile() { return this.tryGetToken(CPP14Parser.Volatile, 0); }
    get ruleIndex() { return CPP14Parser.RULE_cvqualifier; }
    enterRule(listener) {
        if (listener.enterCvqualifier)
            listener.enterCvqualifier(this);
    }
    exitRule(listener) {
        if (listener.exitCvqualifier)
            listener.exitCvqualifier(this);
    }
    accept(visitor) {
        if (visitor.visitCvqualifier)
            return visitor.visitCvqualifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CvqualifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CvqualifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CvqualifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CvqualifierContext.prototype, "accept", null);
exports.CvqualifierContext = CvqualifierContext;
class RefqualifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return CPP14Parser.RULE_refqualifier; }
    enterRule(listener) {
        if (listener.enterRefqualifier)
            listener.enterRefqualifier(this);
    }
    exitRule(listener) {
        if (listener.exitRefqualifier)
            listener.exitRefqualifier(this);
    }
    accept(visitor) {
        if (visitor.visitRefqualifier)
            return visitor.visitRefqualifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], RefqualifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], RefqualifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], RefqualifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], RefqualifierContext.prototype, "accept", null);
exports.RefqualifierContext = RefqualifierContext;
class DeclaratoridContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    idexpression() {
        return this.getRuleContext(0, IdexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_declaratorid; }
    enterRule(listener) {
        if (listener.enterDeclaratorid)
            listener.enterDeclaratorid(this);
    }
    exitRule(listener) {
        if (listener.exitDeclaratorid)
            listener.exitDeclaratorid(this);
    }
    accept(visitor) {
        if (visitor.visitDeclaratorid)
            return visitor.visitDeclaratorid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DeclaratoridContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DeclaratoridContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DeclaratoridContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DeclaratoridContext.prototype, "accept", null);
exports.DeclaratoridContext = DeclaratoridContext;
class ThetypeidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typespecifierseq() {
        return this.getRuleContext(0, TypespecifierseqContext);
    }
    abstractdeclarator() {
        return this.tryGetRuleContext(0, AbstractdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_thetypeid; }
    enterRule(listener) {
        if (listener.enterThetypeid)
            listener.enterThetypeid(this);
    }
    exitRule(listener) {
        if (listener.exitThetypeid)
            listener.exitThetypeid(this);
    }
    accept(visitor) {
        if (visitor.visitThetypeid)
            return visitor.visitThetypeid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ThetypeidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ThetypeidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ThetypeidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ThetypeidContext.prototype, "accept", null);
exports.ThetypeidContext = ThetypeidContext;
class AbstractdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ptrabstractdeclarator() {
        return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
    }
    parametersandqualifiers() {
        return this.tryGetRuleContext(0, ParametersandqualifiersContext);
    }
    trailingreturntype() {
        return this.tryGetRuleContext(0, TrailingreturntypeContext);
    }
    noptrabstractdeclarator() {
        return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
    }
    abstractpackdeclarator() {
        return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_abstractdeclarator; }
    enterRule(listener) {
        if (listener.enterAbstractdeclarator)
            listener.enterAbstractdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitAbstractdeclarator)
            listener.exitAbstractdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitAbstractdeclarator)
            return visitor.visitAbstractdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AbstractdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AbstractdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AbstractdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AbstractdeclaratorContext.prototype, "accept", null);
exports.AbstractdeclaratorContext = AbstractdeclaratorContext;
class PtrabstractdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    noptrabstractdeclarator() {
        return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
    }
    ptroperator() {
        return this.tryGetRuleContext(0, PtroperatorContext);
    }
    ptrabstractdeclarator() {
        return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_ptrabstractdeclarator; }
    enterRule(listener) {
        if (listener.enterPtrabstractdeclarator)
            listener.enterPtrabstractdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitPtrabstractdeclarator)
            listener.exitPtrabstractdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitPtrabstractdeclarator)
            return visitor.visitPtrabstractdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PtrabstractdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PtrabstractdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PtrabstractdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PtrabstractdeclaratorContext.prototype, "accept", null);
exports.PtrabstractdeclaratorContext = PtrabstractdeclaratorContext;
class NoptrabstractdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    noptrabstractdeclarator() {
        return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
    }
    parametersandqualifiers() {
        return this.tryGetRuleContext(0, ParametersandqualifiersContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    ptrabstractdeclarator() {
        return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_noptrabstractdeclarator; }
    enterRule(listener) {
        if (listener.enterNoptrabstractdeclarator)
            listener.enterNoptrabstractdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitNoptrabstractdeclarator)
            listener.exitNoptrabstractdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitNoptrabstractdeclarator)
            return visitor.visitNoptrabstractdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NoptrabstractdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NoptrabstractdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NoptrabstractdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NoptrabstractdeclaratorContext.prototype, "accept", null);
exports.NoptrabstractdeclaratorContext = NoptrabstractdeclaratorContext;
class AbstractpackdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    noptrabstractpackdeclarator() {
        return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
    }
    ptroperator() {
        return this.tryGetRuleContext(0, PtroperatorContext);
    }
    abstractpackdeclarator() {
        return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_abstractpackdeclarator; }
    enterRule(listener) {
        if (listener.enterAbstractpackdeclarator)
            listener.enterAbstractpackdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitAbstractpackdeclarator)
            listener.exitAbstractpackdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitAbstractpackdeclarator)
            return visitor.visitAbstractpackdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AbstractpackdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AbstractpackdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AbstractpackdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AbstractpackdeclaratorContext.prototype, "accept", null);
exports.AbstractpackdeclaratorContext = AbstractpackdeclaratorContext;
class NoptrabstractpackdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    noptrabstractpackdeclarator() {
        return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
    }
    parametersandqualifiers() {
        return this.tryGetRuleContext(0, ParametersandqualifiersContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_noptrabstractpackdeclarator; }
    enterRule(listener) {
        if (listener.enterNoptrabstractpackdeclarator)
            listener.enterNoptrabstractpackdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitNoptrabstractpackdeclarator)
            listener.exitNoptrabstractpackdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitNoptrabstractpackdeclarator)
            return visitor.visitNoptrabstractpackdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NoptrabstractpackdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NoptrabstractpackdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NoptrabstractpackdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NoptrabstractpackdeclaratorContext.prototype, "accept", null);
exports.NoptrabstractpackdeclaratorContext = NoptrabstractpackdeclaratorContext;
class ParameterdeclarationclauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parameterdeclarationlist() {
        return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_parameterdeclarationclause; }
    enterRule(listener) {
        if (listener.enterParameterdeclarationclause)
            listener.enterParameterdeclarationclause(this);
    }
    exitRule(listener) {
        if (listener.exitParameterdeclarationclause)
            listener.exitParameterdeclarationclause(this);
    }
    accept(visitor) {
        if (visitor.visitParameterdeclarationclause)
            return visitor.visitParameterdeclarationclause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParameterdeclarationclauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationclauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationclauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationclauseContext.prototype, "accept", null);
exports.ParameterdeclarationclauseContext = ParameterdeclarationclauseContext;
class ParameterdeclarationlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parameterdeclaration() {
        return this.getRuleContext(0, ParameterdeclarationContext);
    }
    parameterdeclarationlist() {
        return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_parameterdeclarationlist; }
    enterRule(listener) {
        if (listener.enterParameterdeclarationlist)
            listener.enterParameterdeclarationlist(this);
    }
    exitRule(listener) {
        if (listener.exitParameterdeclarationlist)
            listener.exitParameterdeclarationlist(this);
    }
    accept(visitor) {
        if (visitor.visitParameterdeclarationlist)
            return visitor.visitParameterdeclarationlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParameterdeclarationlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationlistContext.prototype, "accept", null);
exports.ParameterdeclarationlistContext = ParameterdeclarationlistContext;
class ParameterdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declspecifierseq() {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    declarator() {
        return this.tryGetRuleContext(0, DeclaratorContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    initializerclause() {
        return this.tryGetRuleContext(0, InitializerclauseContext);
    }
    abstractdeclarator() {
        return this.tryGetRuleContext(0, AbstractdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_parameterdeclaration; }
    enterRule(listener) {
        if (listener.enterParameterdeclaration)
            listener.enterParameterdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitParameterdeclaration)
            listener.exitParameterdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitParameterdeclaration)
            return visitor.visitParameterdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParameterdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParameterdeclarationContext.prototype, "accept", null);
exports.ParameterdeclarationContext = ParameterdeclarationContext;
class FunctiondefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declarator() {
        return this.getRuleContext(0, DeclaratorContext);
    }
    functionbody() {
        return this.getRuleContext(0, FunctionbodyContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    declspecifierseq() {
        return this.tryGetRuleContext(0, DeclspecifierseqContext);
    }
    virtspecifierseq() {
        return this.tryGetRuleContext(0, VirtspecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_functiondefinition; }
    enterRule(listener) {
        if (listener.enterFunctiondefinition)
            listener.enterFunctiondefinition(this);
    }
    exitRule(listener) {
        if (listener.exitFunctiondefinition)
            listener.exitFunctiondefinition(this);
    }
    accept(visitor) {
        if (visitor.visitFunctiondefinition)
            return visitor.visitFunctiondefinition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctiondefinitionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctiondefinitionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctiondefinitionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctiondefinitionContext.prototype, "accept", null);
exports.FunctiondefinitionContext = FunctiondefinitionContext;
class FunctionbodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    compoundstatement() {
        return this.tryGetRuleContext(0, CompoundstatementContext);
    }
    ctorinitializer() {
        return this.tryGetRuleContext(0, CtorinitializerContext);
    }
    functiontryblock() {
        return this.tryGetRuleContext(0, FunctiontryblockContext);
    }
    Default() { return this.tryGetToken(CPP14Parser.Default, 0); }
    Delete() { return this.tryGetToken(CPP14Parser.Delete, 0); }
    get ruleIndex() { return CPP14Parser.RULE_functionbody; }
    enterRule(listener) {
        if (listener.enterFunctionbody)
            listener.enterFunctionbody(this);
    }
    exitRule(listener) {
        if (listener.exitFunctionbody)
            listener.exitFunctionbody(this);
    }
    accept(visitor) {
        if (visitor.visitFunctionbody)
            return visitor.visitFunctionbody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionbodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctionbodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionbodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionbodyContext.prototype, "accept", null);
exports.FunctionbodyContext = FunctionbodyContext;
class InitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    braceorequalinitializer() {
        return this.tryGetRuleContext(0, BraceorequalinitializerContext);
    }
    expressionlist() {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_initializer; }
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
class BraceorequalinitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    initializerclause() {
        return this.tryGetRuleContext(0, InitializerclauseContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_braceorequalinitializer; }
    enterRule(listener) {
        if (listener.enterBraceorequalinitializer)
            listener.enterBraceorequalinitializer(this);
    }
    exitRule(listener) {
        if (listener.exitBraceorequalinitializer)
            listener.exitBraceorequalinitializer(this);
    }
    accept(visitor) {
        if (visitor.visitBraceorequalinitializer)
            return visitor.visitBraceorequalinitializer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceorequalinitializerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceorequalinitializerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceorequalinitializerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceorequalinitializerContext.prototype, "accept", null);
exports.BraceorequalinitializerContext = BraceorequalinitializerContext;
class InitializerclauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignmentexpression() {
        return this.tryGetRuleContext(0, AssignmentexpressionContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_initializerclause; }
    enterRule(listener) {
        if (listener.enterInitializerclause)
            listener.enterInitializerclause(this);
    }
    exitRule(listener) {
        if (listener.exitInitializerclause)
            listener.exitInitializerclause(this);
    }
    accept(visitor) {
        if (visitor.visitInitializerclause)
            return visitor.visitInitializerclause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitializerclauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitializerclauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitializerclauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitializerclauseContext.prototype, "accept", null);
exports.InitializerclauseContext = InitializerclauseContext;
class InitializerlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    initializerclause() {
        return this.getRuleContext(0, InitializerclauseContext);
    }
    initializerlist() {
        return this.tryGetRuleContext(0, InitializerlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_initializerlist; }
    enterRule(listener) {
        if (listener.enterInitializerlist)
            listener.enterInitializerlist(this);
    }
    exitRule(listener) {
        if (listener.exitInitializerlist)
            listener.exitInitializerlist(this);
    }
    accept(visitor) {
        if (visitor.visitInitializerlist)
            return visitor.visitInitializerlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InitializerlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InitializerlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InitializerlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InitializerlistContext.prototype, "accept", null);
exports.InitializerlistContext = InitializerlistContext;
class BracedinitlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    initializerlist() {
        return this.tryGetRuleContext(0, InitializerlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_bracedinitlist; }
    enterRule(listener) {
        if (listener.enterBracedinitlist)
            listener.enterBracedinitlist(this);
    }
    exitRule(listener) {
        if (listener.exitBracedinitlist)
            listener.exitBracedinitlist(this);
    }
    accept(visitor) {
        if (visitor.visitBracedinitlist)
            return visitor.visitBracedinitlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BracedinitlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BracedinitlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BracedinitlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BracedinitlistContext.prototype, "accept", null);
exports.BracedinitlistContext = BracedinitlistContext;
class ClassnameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_classname; }
    enterRule(listener) {
        if (listener.enterClassname)
            listener.enterClassname(this);
    }
    exitRule(listener) {
        if (listener.exitClassname)
            listener.exitClassname(this);
    }
    accept(visitor) {
        if (visitor.visitClassname)
            return visitor.visitClassname(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassnameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassnameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassnameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassnameContext.prototype, "accept", null);
exports.ClassnameContext = ClassnameContext;
class ClassspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classhead() {
        return this.getRuleContext(0, ClassheadContext);
    }
    memberspecification() {
        return this.tryGetRuleContext(0, MemberspecificationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_classspecifier; }
    enterRule(listener) {
        if (listener.enterClassspecifier)
            listener.enterClassspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitClassspecifier)
            listener.exitClassspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitClassspecifier)
            return visitor.visitClassspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassspecifierContext.prototype, "accept", null);
exports.ClassspecifierContext = ClassspecifierContext;
class ClassheadContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classkey() {
        return this.getRuleContext(0, ClasskeyContext);
    }
    classheadname() {
        return this.tryGetRuleContext(0, ClassheadnameContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    classvirtspecifier() {
        return this.tryGetRuleContext(0, ClassvirtspecifierContext);
    }
    baseclause() {
        return this.tryGetRuleContext(0, BaseclauseContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_classhead; }
    enterRule(listener) {
        if (listener.enterClasshead)
            listener.enterClasshead(this);
    }
    exitRule(listener) {
        if (listener.exitClasshead)
            listener.exitClasshead(this);
    }
    accept(visitor) {
        if (visitor.visitClasshead)
            return visitor.visitClasshead(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassheadContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassheadContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassheadContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassheadContext.prototype, "accept", null);
exports.ClassheadContext = ClassheadContext;
class ClassheadnameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classname() {
        return this.getRuleContext(0, ClassnameContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_classheadname; }
    enterRule(listener) {
        if (listener.enterClassheadname)
            listener.enterClassheadname(this);
    }
    exitRule(listener) {
        if (listener.exitClassheadname)
            listener.exitClassheadname(this);
    }
    accept(visitor) {
        if (visitor.visitClassheadname)
            return visitor.visitClassheadname(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassheadnameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassheadnameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassheadnameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassheadnameContext.prototype, "accept", null);
exports.ClassheadnameContext = ClassheadnameContext;
class ClassvirtspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Final() { return this.getToken(CPP14Parser.Final, 0); }
    get ruleIndex() { return CPP14Parser.RULE_classvirtspecifier; }
    enterRule(listener) {
        if (listener.enterClassvirtspecifier)
            listener.enterClassvirtspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitClassvirtspecifier)
            listener.exitClassvirtspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitClassvirtspecifier)
            return visitor.visitClassvirtspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassvirtspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassvirtspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassvirtspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassvirtspecifierContext.prototype, "accept", null);
exports.ClassvirtspecifierContext = ClassvirtspecifierContext;
class ClasskeyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Class() { return this.tryGetToken(CPP14Parser.Class, 0); }
    Struct() { return this.tryGetToken(CPP14Parser.Struct, 0); }
    Union() { return this.tryGetToken(CPP14Parser.Union, 0); }
    get ruleIndex() { return CPP14Parser.RULE_classkey; }
    enterRule(listener) {
        if (listener.enterClasskey)
            listener.enterClasskey(this);
    }
    exitRule(listener) {
        if (listener.exitClasskey)
            listener.exitClasskey(this);
    }
    accept(visitor) {
        if (visitor.visitClasskey)
            return visitor.visitClasskey(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClasskeyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClasskeyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClasskeyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClasskeyContext.prototype, "accept", null);
exports.ClasskeyContext = ClasskeyContext;
class MemberspecificationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    memberdeclaration() {
        return this.tryGetRuleContext(0, MemberdeclarationContext);
    }
    memberspecification() {
        return this.tryGetRuleContext(0, MemberspecificationContext);
    }
    accessspecifier() {
        return this.tryGetRuleContext(0, AccessspecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_memberspecification; }
    enterRule(listener) {
        if (listener.enterMemberspecification)
            listener.enterMemberspecification(this);
    }
    exitRule(listener) {
        if (listener.exitMemberspecification)
            listener.exitMemberspecification(this);
    }
    accept(visitor) {
        if (visitor.visitMemberspecification)
            return visitor.visitMemberspecification(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MemberspecificationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MemberspecificationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MemberspecificationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MemberspecificationContext.prototype, "accept", null);
exports.MemberspecificationContext = MemberspecificationContext;
class MemberdeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    declspecifierseq() {
        return this.tryGetRuleContext(0, DeclspecifierseqContext);
    }
    memberdeclaratorlist() {
        return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
    }
    functiondefinition() {
        return this.tryGetRuleContext(0, FunctiondefinitionContext);
    }
    usingdeclaration() {
        return this.tryGetRuleContext(0, UsingdeclarationContext);
    }
    static_assertdeclaration() {
        return this.tryGetRuleContext(0, Static_assertdeclarationContext);
    }
    templatedeclaration() {
        return this.tryGetRuleContext(0, TemplatedeclarationContext);
    }
    aliasdeclaration() {
        return this.tryGetRuleContext(0, AliasdeclarationContext);
    }
    emptydeclaration() {
        return this.tryGetRuleContext(0, EmptydeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_memberdeclaration; }
    enterRule(listener) {
        if (listener.enterMemberdeclaration)
            listener.enterMemberdeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitMemberdeclaration)
            listener.exitMemberdeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitMemberdeclaration)
            return visitor.visitMemberdeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MemberdeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MemberdeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MemberdeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MemberdeclarationContext.prototype, "accept", null);
exports.MemberdeclarationContext = MemberdeclarationContext;
class MemberdeclaratorlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    memberdeclarator() {
        return this.getRuleContext(0, MemberdeclaratorContext);
    }
    memberdeclaratorlist() {
        return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_memberdeclaratorlist; }
    enterRule(listener) {
        if (listener.enterMemberdeclaratorlist)
            listener.enterMemberdeclaratorlist(this);
    }
    exitRule(listener) {
        if (listener.exitMemberdeclaratorlist)
            listener.exitMemberdeclaratorlist(this);
    }
    accept(visitor) {
        if (visitor.visitMemberdeclaratorlist)
            return visitor.visitMemberdeclaratorlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MemberdeclaratorlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MemberdeclaratorlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MemberdeclaratorlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MemberdeclaratorlistContext.prototype, "accept", null);
exports.MemberdeclaratorlistContext = MemberdeclaratorlistContext;
class MemberdeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declarator() {
        return this.tryGetRuleContext(0, DeclaratorContext);
    }
    virtspecifierseq() {
        return this.tryGetRuleContext(0, VirtspecifierseqContext);
    }
    purespecifier() {
        return this.tryGetRuleContext(0, PurespecifierContext);
    }
    braceorequalinitializer() {
        return this.tryGetRuleContext(0, BraceorequalinitializerContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_memberdeclarator; }
    enterRule(listener) {
        if (listener.enterMemberdeclarator)
            listener.enterMemberdeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitMemberdeclarator)
            listener.exitMemberdeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitMemberdeclarator)
            return visitor.visitMemberdeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MemberdeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MemberdeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MemberdeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MemberdeclaratorContext.prototype, "accept", null);
exports.MemberdeclaratorContext = MemberdeclaratorContext;
class VirtspecifierseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    virtspecifier() {
        return this.getRuleContext(0, VirtspecifierContext);
    }
    virtspecifierseq() {
        return this.tryGetRuleContext(0, VirtspecifierseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_virtspecifierseq; }
    enterRule(listener) {
        if (listener.enterVirtspecifierseq)
            listener.enterVirtspecifierseq(this);
    }
    exitRule(listener) {
        if (listener.exitVirtspecifierseq)
            listener.exitVirtspecifierseq(this);
    }
    accept(visitor) {
        if (visitor.visitVirtspecifierseq)
            return visitor.visitVirtspecifierseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VirtspecifierseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VirtspecifierseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VirtspecifierseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VirtspecifierseqContext.prototype, "accept", null);
exports.VirtspecifierseqContext = VirtspecifierseqContext;
class VirtspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Override() { return this.tryGetToken(CPP14Parser.Override, 0); }
    Final() { return this.tryGetToken(CPP14Parser.Final, 0); }
    get ruleIndex() { return CPP14Parser.RULE_virtspecifier; }
    enterRule(listener) {
        if (listener.enterVirtspecifier)
            listener.enterVirtspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitVirtspecifier)
            listener.exitVirtspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitVirtspecifier)
            return visitor.visitVirtspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VirtspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VirtspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VirtspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VirtspecifierContext.prototype, "accept", null);
exports.VirtspecifierContext = VirtspecifierContext;
class PurespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Assign() { return this.getToken(CPP14Parser.Assign, 0); }
    Octalliteral() { return this.getToken(CPP14Parser.Octalliteral, 0); }
    get ruleIndex() { return CPP14Parser.RULE_purespecifier; }
    enterRule(listener) {
        if (listener.enterPurespecifier)
            listener.enterPurespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitPurespecifier)
            listener.exitPurespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitPurespecifier)
            return visitor.visitPurespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PurespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PurespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PurespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PurespecifierContext.prototype, "accept", null);
exports.PurespecifierContext = PurespecifierContext;
class BaseclauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    basespecifierlist() {
        return this.getRuleContext(0, BasespecifierlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_baseclause; }
    enterRule(listener) {
        if (listener.enterBaseclause)
            listener.enterBaseclause(this);
    }
    exitRule(listener) {
        if (listener.exitBaseclause)
            listener.exitBaseclause(this);
    }
    accept(visitor) {
        if (visitor.visitBaseclause)
            return visitor.visitBaseclause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BaseclauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BaseclauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BaseclauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BaseclauseContext.prototype, "accept", null);
exports.BaseclauseContext = BaseclauseContext;
class BasespecifierlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    basespecifier() {
        return this.getRuleContext(0, BasespecifierContext);
    }
    basespecifierlist() {
        return this.tryGetRuleContext(0, BasespecifierlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_basespecifierlist; }
    enterRule(listener) {
        if (listener.enterBasespecifierlist)
            listener.enterBasespecifierlist(this);
    }
    exitRule(listener) {
        if (listener.exitBasespecifierlist)
            listener.exitBasespecifierlist(this);
    }
    accept(visitor) {
        if (visitor.visitBasespecifierlist)
            return visitor.visitBasespecifierlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BasespecifierlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BasespecifierlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BasespecifierlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BasespecifierlistContext.prototype, "accept", null);
exports.BasespecifierlistContext = BasespecifierlistContext;
class BasespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    basetypespecifier() {
        return this.getRuleContext(0, BasetypespecifierContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    Virtual() { return this.tryGetToken(CPP14Parser.Virtual, 0); }
    accessspecifier() {
        return this.tryGetRuleContext(0, AccessspecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_basespecifier; }
    enterRule(listener) {
        if (listener.enterBasespecifier)
            listener.enterBasespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitBasespecifier)
            listener.exitBasespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitBasespecifier)
            return visitor.visitBasespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BasespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BasespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BasespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BasespecifierContext.prototype, "accept", null);
exports.BasespecifierContext = BasespecifierContext;
class ClassordecltypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classname() {
        return this.tryGetRuleContext(0, ClassnameContext);
    }
    nestednamespecifier() {
        return this.tryGetRuleContext(0, NestednamespecifierContext);
    }
    decltypespecifier() {
        return this.tryGetRuleContext(0, DecltypespecifierContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_classordecltype; }
    enterRule(listener) {
        if (listener.enterClassordecltype)
            listener.enterClassordecltype(this);
    }
    exitRule(listener) {
        if (listener.exitClassordecltype)
            listener.exitClassordecltype(this);
    }
    accept(visitor) {
        if (visitor.visitClassordecltype)
            return visitor.visitClassordecltype(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassordecltypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassordecltypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassordecltypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassordecltypeContext.prototype, "accept", null);
exports.ClassordecltypeContext = ClassordecltypeContext;
class BasetypespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classordecltype() {
        return this.getRuleContext(0, ClassordecltypeContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_basetypespecifier; }
    enterRule(listener) {
        if (listener.enterBasetypespecifier)
            listener.enterBasetypespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitBasetypespecifier)
            listener.exitBasetypespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitBasetypespecifier)
            return visitor.visitBasetypespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BasetypespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BasetypespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BasetypespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BasetypespecifierContext.prototype, "accept", null);
exports.BasetypespecifierContext = BasetypespecifierContext;
class AccessspecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Private() { return this.tryGetToken(CPP14Parser.Private, 0); }
    Protected() { return this.tryGetToken(CPP14Parser.Protected, 0); }
    Public() { return this.tryGetToken(CPP14Parser.Public, 0); }
    get ruleIndex() { return CPP14Parser.RULE_accessspecifier; }
    enterRule(listener) {
        if (listener.enterAccessspecifier)
            listener.enterAccessspecifier(this);
    }
    exitRule(listener) {
        if (listener.exitAccessspecifier)
            listener.exitAccessspecifier(this);
    }
    accept(visitor) {
        if (visitor.visitAccessspecifier)
            return visitor.visitAccessspecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AccessspecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AccessspecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AccessspecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AccessspecifierContext.prototype, "accept", null);
exports.AccessspecifierContext = AccessspecifierContext;
class ConversionfunctionidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Operator() { return this.getToken(CPP14Parser.Operator, 0); }
    conversiontypeid() {
        return this.getRuleContext(0, ConversiontypeidContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_conversionfunctionid; }
    enterRule(listener) {
        if (listener.enterConversionfunctionid)
            listener.enterConversionfunctionid(this);
    }
    exitRule(listener) {
        if (listener.exitConversionfunctionid)
            listener.exitConversionfunctionid(this);
    }
    accept(visitor) {
        if (visitor.visitConversionfunctionid)
            return visitor.visitConversionfunctionid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConversionfunctionidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConversionfunctionidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConversionfunctionidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConversionfunctionidContext.prototype, "accept", null);
exports.ConversionfunctionidContext = ConversionfunctionidContext;
class ConversiontypeidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typespecifierseq() {
        return this.getRuleContext(0, TypespecifierseqContext);
    }
    conversiondeclarator() {
        return this.tryGetRuleContext(0, ConversiondeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_conversiontypeid; }
    enterRule(listener) {
        if (listener.enterConversiontypeid)
            listener.enterConversiontypeid(this);
    }
    exitRule(listener) {
        if (listener.exitConversiontypeid)
            listener.exitConversiontypeid(this);
    }
    accept(visitor) {
        if (visitor.visitConversiontypeid)
            return visitor.visitConversiontypeid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConversiontypeidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConversiontypeidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConversiontypeidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConversiontypeidContext.prototype, "accept", null);
exports.ConversiontypeidContext = ConversiontypeidContext;
class ConversiondeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ptroperator() {
        return this.getRuleContext(0, PtroperatorContext);
    }
    conversiondeclarator() {
        return this.tryGetRuleContext(0, ConversiondeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_conversiondeclarator; }
    enterRule(listener) {
        if (listener.enterConversiondeclarator)
            listener.enterConversiondeclarator(this);
    }
    exitRule(listener) {
        if (listener.exitConversiondeclarator)
            listener.exitConversiondeclarator(this);
    }
    accept(visitor) {
        if (visitor.visitConversiondeclarator)
            return visitor.visitConversiondeclarator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConversiondeclaratorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConversiondeclaratorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConversiondeclaratorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConversiondeclaratorContext.prototype, "accept", null);
exports.ConversiondeclaratorContext = ConversiondeclaratorContext;
class CtorinitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    meminitializerlist() {
        return this.getRuleContext(0, MeminitializerlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_ctorinitializer; }
    enterRule(listener) {
        if (listener.enterCtorinitializer)
            listener.enterCtorinitializer(this);
    }
    exitRule(listener) {
        if (listener.exitCtorinitializer)
            listener.exitCtorinitializer(this);
    }
    accept(visitor) {
        if (visitor.visitCtorinitializer)
            return visitor.visitCtorinitializer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CtorinitializerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CtorinitializerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CtorinitializerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CtorinitializerContext.prototype, "accept", null);
exports.CtorinitializerContext = CtorinitializerContext;
class MeminitializerlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    meminitializer() {
        return this.getRuleContext(0, MeminitializerContext);
    }
    meminitializerlist() {
        return this.tryGetRuleContext(0, MeminitializerlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_meminitializerlist; }
    enterRule(listener) {
        if (listener.enterMeminitializerlist)
            listener.enterMeminitializerlist(this);
    }
    exitRule(listener) {
        if (listener.exitMeminitializerlist)
            listener.exitMeminitializerlist(this);
    }
    accept(visitor) {
        if (visitor.visitMeminitializerlist)
            return visitor.visitMeminitializerlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MeminitializerlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MeminitializerlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MeminitializerlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MeminitializerlistContext.prototype, "accept", null);
exports.MeminitializerlistContext = MeminitializerlistContext;
class MeminitializerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    meminitializerid() {
        return this.getRuleContext(0, MeminitializeridContext);
    }
    expressionlist() {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    }
    bracedinitlist() {
        return this.tryGetRuleContext(0, BracedinitlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_meminitializer; }
    enterRule(listener) {
        if (listener.enterMeminitializer)
            listener.enterMeminitializer(this);
    }
    exitRule(listener) {
        if (listener.exitMeminitializer)
            listener.exitMeminitializer(this);
    }
    accept(visitor) {
        if (visitor.visitMeminitializer)
            return visitor.visitMeminitializer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MeminitializerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MeminitializerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MeminitializerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MeminitializerContext.prototype, "accept", null);
exports.MeminitializerContext = MeminitializerContext;
class MeminitializeridContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classordecltype() {
        return this.tryGetRuleContext(0, ClassordecltypeContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_meminitializerid; }
    enterRule(listener) {
        if (listener.enterMeminitializerid)
            listener.enterMeminitializerid(this);
    }
    exitRule(listener) {
        if (listener.exitMeminitializerid)
            listener.exitMeminitializerid(this);
    }
    accept(visitor) {
        if (visitor.visitMeminitializerid)
            return visitor.visitMeminitializerid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MeminitializeridContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MeminitializeridContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MeminitializeridContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MeminitializeridContext.prototype, "accept", null);
exports.MeminitializeridContext = MeminitializeridContext;
class OperatorfunctionidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Operator() { return this.getToken(CPP14Parser.Operator, 0); }
    theoperator() {
        return this.getRuleContext(0, TheoperatorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_operatorfunctionid; }
    enterRule(listener) {
        if (listener.enterOperatorfunctionid)
            listener.enterOperatorfunctionid(this);
    }
    exitRule(listener) {
        if (listener.exitOperatorfunctionid)
            listener.exitOperatorfunctionid(this);
    }
    accept(visitor) {
        if (visitor.visitOperatorfunctionid)
            return visitor.visitOperatorfunctionid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OperatorfunctionidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OperatorfunctionidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OperatorfunctionidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OperatorfunctionidContext.prototype, "accept", null);
exports.OperatorfunctionidContext = OperatorfunctionidContext;
class LiteraloperatoridContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Operator() { return this.getToken(CPP14Parser.Operator, 0); }
    Stringliteral() { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    Userdefinedstringliteral() { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
    get ruleIndex() { return CPP14Parser.RULE_literaloperatorid; }
    enterRule(listener) {
        if (listener.enterLiteraloperatorid)
            listener.enterLiteraloperatorid(this);
    }
    exitRule(listener) {
        if (listener.exitLiteraloperatorid)
            listener.exitLiteraloperatorid(this);
    }
    accept(visitor) {
        if (visitor.visitLiteraloperatorid)
            return visitor.visitLiteraloperatorid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LiteraloperatoridContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LiteraloperatoridContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LiteraloperatoridContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LiteraloperatoridContext.prototype, "accept", null);
exports.LiteraloperatoridContext = LiteraloperatoridContext;
class TemplatedeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Template() { return this.getToken(CPP14Parser.Template, 0); }
    templateparameterlist() {
        return this.getRuleContext(0, TemplateparameterlistContext);
    }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_templatedeclaration; }
    enterRule(listener) {
        if (listener.enterTemplatedeclaration)
            listener.enterTemplatedeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitTemplatedeclaration)
            listener.exitTemplatedeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitTemplatedeclaration)
            return visitor.visitTemplatedeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplatedeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplatedeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplatedeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplatedeclarationContext.prototype, "accept", null);
exports.TemplatedeclarationContext = TemplatedeclarationContext;
class TemplateparameterlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    templateparameter() {
        return this.getRuleContext(0, TemplateparameterContext);
    }
    templateparameterlist() {
        return this.tryGetRuleContext(0, TemplateparameterlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_templateparameterlist; }
    enterRule(listener) {
        if (listener.enterTemplateparameterlist)
            listener.enterTemplateparameterlist(this);
    }
    exitRule(listener) {
        if (listener.exitTemplateparameterlist)
            listener.exitTemplateparameterlist(this);
    }
    accept(visitor) {
        if (visitor.visitTemplateparameterlist)
            return visitor.visitTemplateparameterlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplateparameterlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplateparameterlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplateparameterlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplateparameterlistContext.prototype, "accept", null);
exports.TemplateparameterlistContext = TemplateparameterlistContext;
class TemplateparameterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typeparameter() {
        return this.tryGetRuleContext(0, TypeparameterContext);
    }
    parameterdeclaration() {
        return this.tryGetRuleContext(0, ParameterdeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_templateparameter; }
    enterRule(listener) {
        if (listener.enterTemplateparameter)
            listener.enterTemplateparameter(this);
    }
    exitRule(listener) {
        if (listener.exitTemplateparameter)
            listener.exitTemplateparameter(this);
    }
    accept(visitor) {
        if (visitor.visitTemplateparameter)
            return visitor.visitTemplateparameter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplateparameterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplateparameterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplateparameterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplateparameterContext.prototype, "accept", null);
exports.TemplateparameterContext = TemplateparameterContext;
class TypeparameterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Class() { return this.tryGetToken(CPP14Parser.Class, 0); }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    Typename() { return this.tryGetToken(CPP14Parser.Typename, 0); }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    templateparameterlist() {
        return this.tryGetRuleContext(0, TemplateparameterlistContext);
    }
    idexpression() {
        return this.tryGetRuleContext(0, IdexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_typeparameter; }
    enterRule(listener) {
        if (listener.enterTypeparameter)
            listener.enterTypeparameter(this);
    }
    exitRule(listener) {
        if (listener.exitTypeparameter)
            listener.exitTypeparameter(this);
    }
    accept(visitor) {
        if (visitor.visitTypeparameter)
            return visitor.visitTypeparameter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeparameterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeparameterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeparameterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeparameterContext.prototype, "accept", null);
exports.TypeparameterContext = TypeparameterContext;
class SimpletemplateidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    templatename() {
        return this.getRuleContext(0, TemplatenameContext);
    }
    templateargumentlist() {
        return this.tryGetRuleContext(0, TemplateargumentlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_simpletemplateid; }
    enterRule(listener) {
        if (listener.enterSimpletemplateid)
            listener.enterSimpletemplateid(this);
    }
    exitRule(listener) {
        if (listener.exitSimpletemplateid)
            listener.exitSimpletemplateid(this);
    }
    accept(visitor) {
        if (visitor.visitSimpletemplateid)
            return visitor.visitSimpletemplateid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SimpletemplateidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SimpletemplateidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SimpletemplateidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SimpletemplateidContext.prototype, "accept", null);
exports.SimpletemplateidContext = SimpletemplateidContext;
class TemplateidContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    operatorfunctionid() {
        return this.tryGetRuleContext(0, OperatorfunctionidContext);
    }
    templateargumentlist() {
        return this.tryGetRuleContext(0, TemplateargumentlistContext);
    }
    literaloperatorid() {
        return this.tryGetRuleContext(0, LiteraloperatoridContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_templateid; }
    enterRule(listener) {
        if (listener.enterTemplateid)
            listener.enterTemplateid(this);
    }
    exitRule(listener) {
        if (listener.exitTemplateid)
            listener.exitTemplateid(this);
    }
    accept(visitor) {
        if (visitor.visitTemplateid)
            return visitor.visitTemplateid(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplateidContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplateidContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplateidContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplateidContext.prototype, "accept", null);
exports.TemplateidContext = TemplateidContext;
class TemplatenameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() { return this.getToken(CPP14Parser.Identifier, 0); }
    get ruleIndex() { return CPP14Parser.RULE_templatename; }
    enterRule(listener) {
        if (listener.enterTemplatename)
            listener.enterTemplatename(this);
    }
    exitRule(listener) {
        if (listener.exitTemplatename)
            listener.exitTemplatename(this);
    }
    accept(visitor) {
        if (visitor.visitTemplatename)
            return visitor.visitTemplatename(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplatenameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplatenameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplatenameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplatenameContext.prototype, "accept", null);
exports.TemplatenameContext = TemplatenameContext;
class TemplateargumentlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    templateargument() {
        return this.getRuleContext(0, TemplateargumentContext);
    }
    templateargumentlist() {
        return this.tryGetRuleContext(0, TemplateargumentlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_templateargumentlist; }
    enterRule(listener) {
        if (listener.enterTemplateargumentlist)
            listener.enterTemplateargumentlist(this);
    }
    exitRule(listener) {
        if (listener.exitTemplateargumentlist)
            listener.exitTemplateargumentlist(this);
    }
    accept(visitor) {
        if (visitor.visitTemplateargumentlist)
            return visitor.visitTemplateargumentlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplateargumentlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplateargumentlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplateargumentlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplateargumentlistContext.prototype, "accept", null);
exports.TemplateargumentlistContext = TemplateargumentlistContext;
class TemplateargumentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    thetypeid() {
        return this.tryGetRuleContext(0, ThetypeidContext);
    }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    idexpression() {
        return this.tryGetRuleContext(0, IdexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_templateargument; }
    enterRule(listener) {
        if (listener.enterTemplateargument)
            listener.enterTemplateargument(this);
    }
    exitRule(listener) {
        if (listener.exitTemplateargument)
            listener.exitTemplateargument(this);
    }
    accept(visitor) {
        if (visitor.visitTemplateargument)
            return visitor.visitTemplateargument(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TemplateargumentContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TemplateargumentContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TemplateargumentContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TemplateargumentContext.prototype, "accept", null);
exports.TemplateargumentContext = TemplateargumentContext;
class TypenamespecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Typename() { return this.getToken(CPP14Parser.Typename, 0); }
    nestednamespecifier() {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    Identifier() { return this.tryGetToken(CPP14Parser.Identifier, 0); }
    simpletemplateid() {
        return this.tryGetRuleContext(0, SimpletemplateidContext);
    }
    Template() { return this.tryGetToken(CPP14Parser.Template, 0); }
    get ruleIndex() { return CPP14Parser.RULE_typenamespecifier; }
    enterRule(listener) {
        if (listener.enterTypenamespecifier)
            listener.enterTypenamespecifier(this);
    }
    exitRule(listener) {
        if (listener.exitTypenamespecifier)
            listener.exitTypenamespecifier(this);
    }
    accept(visitor) {
        if (visitor.visitTypenamespecifier)
            return visitor.visitTypenamespecifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypenamespecifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypenamespecifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypenamespecifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypenamespecifierContext.prototype, "accept", null);
exports.TypenamespecifierContext = TypenamespecifierContext;
class ExplicitinstantiationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Template() { return this.getToken(CPP14Parser.Template, 0); }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    Extern() { return this.tryGetToken(CPP14Parser.Extern, 0); }
    get ruleIndex() { return CPP14Parser.RULE_explicitinstantiation; }
    enterRule(listener) {
        if (listener.enterExplicitinstantiation)
            listener.enterExplicitinstantiation(this);
    }
    exitRule(listener) {
        if (listener.exitExplicitinstantiation)
            listener.exitExplicitinstantiation(this);
    }
    accept(visitor) {
        if (visitor.visitExplicitinstantiation)
            return visitor.visitExplicitinstantiation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExplicitinstantiationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExplicitinstantiationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExplicitinstantiationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExplicitinstantiationContext.prototype, "accept", null);
exports.ExplicitinstantiationContext = ExplicitinstantiationContext;
class ExplicitspecializationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Template() { return this.getToken(CPP14Parser.Template, 0); }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_explicitspecialization; }
    enterRule(listener) {
        if (listener.enterExplicitspecialization)
            listener.enterExplicitspecialization(this);
    }
    exitRule(listener) {
        if (listener.exitExplicitspecialization)
            listener.exitExplicitspecialization(this);
    }
    accept(visitor) {
        if (visitor.visitExplicitspecialization)
            return visitor.visitExplicitspecialization(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExplicitspecializationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExplicitspecializationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExplicitspecializationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExplicitspecializationContext.prototype, "accept", null);
exports.ExplicitspecializationContext = ExplicitspecializationContext;
class TryblockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Try() { return this.getToken(CPP14Parser.Try, 0); }
    compoundstatement() {
        return this.getRuleContext(0, CompoundstatementContext);
    }
    handlerseq() {
        return this.getRuleContext(0, HandlerseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_tryblock; }
    enterRule(listener) {
        if (listener.enterTryblock)
            listener.enterTryblock(this);
    }
    exitRule(listener) {
        if (listener.exitTryblock)
            listener.exitTryblock(this);
    }
    accept(visitor) {
        if (visitor.visitTryblock)
            return visitor.visitTryblock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TryblockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TryblockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TryblockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TryblockContext.prototype, "accept", null);
exports.TryblockContext = TryblockContext;
class FunctiontryblockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Try() { return this.getToken(CPP14Parser.Try, 0); }
    compoundstatement() {
        return this.getRuleContext(0, CompoundstatementContext);
    }
    handlerseq() {
        return this.getRuleContext(0, HandlerseqContext);
    }
    ctorinitializer() {
        return this.tryGetRuleContext(0, CtorinitializerContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_functiontryblock; }
    enterRule(listener) {
        if (listener.enterFunctiontryblock)
            listener.enterFunctiontryblock(this);
    }
    exitRule(listener) {
        if (listener.exitFunctiontryblock)
            listener.exitFunctiontryblock(this);
    }
    accept(visitor) {
        if (visitor.visitFunctiontryblock)
            return visitor.visitFunctiontryblock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctiontryblockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctiontryblockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctiontryblockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctiontryblockContext.prototype, "accept", null);
exports.FunctiontryblockContext = FunctiontryblockContext;
class HandlerseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    handler() {
        return this.getRuleContext(0, HandlerContext);
    }
    handlerseq() {
        return this.tryGetRuleContext(0, HandlerseqContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_handlerseq; }
    enterRule(listener) {
        if (listener.enterHandlerseq)
            listener.enterHandlerseq(this);
    }
    exitRule(listener) {
        if (listener.exitHandlerseq)
            listener.exitHandlerseq(this);
    }
    accept(visitor) {
        if (visitor.visitHandlerseq)
            return visitor.visitHandlerseq(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], HandlerseqContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], HandlerseqContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], HandlerseqContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], HandlerseqContext.prototype, "accept", null);
exports.HandlerseqContext = HandlerseqContext;
class HandlerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Catch() { return this.getToken(CPP14Parser.Catch, 0); }
    exceptiondeclaration() {
        return this.getRuleContext(0, ExceptiondeclarationContext);
    }
    compoundstatement() {
        return this.getRuleContext(0, CompoundstatementContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_handler; }
    enterRule(listener) {
        if (listener.enterHandler)
            listener.enterHandler(this);
    }
    exitRule(listener) {
        if (listener.exitHandler)
            listener.exitHandler(this);
    }
    accept(visitor) {
        if (visitor.visitHandler)
            return visitor.visitHandler(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], HandlerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], HandlerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], HandlerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], HandlerContext.prototype, "accept", null);
exports.HandlerContext = HandlerContext;
class ExceptiondeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typespecifierseq() {
        return this.tryGetRuleContext(0, TypespecifierseqContext);
    }
    declarator() {
        return this.tryGetRuleContext(0, DeclaratorContext);
    }
    attributespecifierseq() {
        return this.tryGetRuleContext(0, AttributespecifierseqContext);
    }
    abstractdeclarator() {
        return this.tryGetRuleContext(0, AbstractdeclaratorContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_exceptiondeclaration; }
    enterRule(listener) {
        if (listener.enterExceptiondeclaration)
            listener.enterExceptiondeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitExceptiondeclaration)
            listener.exitExceptiondeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitExceptiondeclaration)
            return visitor.visitExceptiondeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExceptiondeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExceptiondeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExceptiondeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExceptiondeclarationContext.prototype, "accept", null);
exports.ExceptiondeclarationContext = ExceptiondeclarationContext;
class ThrowexpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Throw() { return this.getToken(CPP14Parser.Throw, 0); }
    assignmentexpression() {
        return this.tryGetRuleContext(0, AssignmentexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_throwexpression; }
    enterRule(listener) {
        if (listener.enterThrowexpression)
            listener.enterThrowexpression(this);
    }
    exitRule(listener) {
        if (listener.exitThrowexpression)
            listener.exitThrowexpression(this);
    }
    accept(visitor) {
        if (visitor.visitThrowexpression)
            return visitor.visitThrowexpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ThrowexpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ThrowexpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ThrowexpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ThrowexpressionContext.prototype, "accept", null);
exports.ThrowexpressionContext = ThrowexpressionContext;
class ExceptionspecificationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    dynamicexceptionspecification() {
        return this.tryGetRuleContext(0, DynamicexceptionspecificationContext);
    }
    noexceptspecification() {
        return this.tryGetRuleContext(0, NoexceptspecificationContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_exceptionspecification; }
    enterRule(listener) {
        if (listener.enterExceptionspecification)
            listener.enterExceptionspecification(this);
    }
    exitRule(listener) {
        if (listener.exitExceptionspecification)
            listener.exitExceptionspecification(this);
    }
    accept(visitor) {
        if (visitor.visitExceptionspecification)
            return visitor.visitExceptionspecification(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExceptionspecificationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExceptionspecificationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExceptionspecificationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExceptionspecificationContext.prototype, "accept", null);
exports.ExceptionspecificationContext = ExceptionspecificationContext;
class DynamicexceptionspecificationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Throw() { return this.getToken(CPP14Parser.Throw, 0); }
    typeidlist() {
        return this.tryGetRuleContext(0, TypeidlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_dynamicexceptionspecification; }
    enterRule(listener) {
        if (listener.enterDynamicexceptionspecification)
            listener.enterDynamicexceptionspecification(this);
    }
    exitRule(listener) {
        if (listener.exitDynamicexceptionspecification)
            listener.exitDynamicexceptionspecification(this);
    }
    accept(visitor) {
        if (visitor.visitDynamicexceptionspecification)
            return visitor.visitDynamicexceptionspecification(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DynamicexceptionspecificationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DynamicexceptionspecificationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DynamicexceptionspecificationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DynamicexceptionspecificationContext.prototype, "accept", null);
exports.DynamicexceptionspecificationContext = DynamicexceptionspecificationContext;
class TypeidlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    thetypeid() {
        return this.getRuleContext(0, ThetypeidContext);
    }
    typeidlist() {
        return this.tryGetRuleContext(0, TypeidlistContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_typeidlist; }
    enterRule(listener) {
        if (listener.enterTypeidlist)
            listener.enterTypeidlist(this);
    }
    exitRule(listener) {
        if (listener.exitTypeidlist)
            listener.exitTypeidlist(this);
    }
    accept(visitor) {
        if (visitor.visitTypeidlist)
            return visitor.visitTypeidlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeidlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeidlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeidlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeidlistContext.prototype, "accept", null);
exports.TypeidlistContext = TypeidlistContext;
class NoexceptspecificationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Noexcept() { return this.getToken(CPP14Parser.Noexcept, 0); }
    constantexpression() {
        return this.tryGetRuleContext(0, ConstantexpressionContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_noexceptspecification; }
    enterRule(listener) {
        if (listener.enterNoexceptspecification)
            listener.enterNoexceptspecification(this);
    }
    exitRule(listener) {
        if (listener.exitNoexceptspecification)
            listener.exitNoexceptspecification(this);
    }
    accept(visitor) {
        if (visitor.visitNoexceptspecification)
            return visitor.visitNoexceptspecification(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NoexceptspecificationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NoexceptspecificationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NoexceptspecificationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NoexceptspecificationContext.prototype, "accept", null);
exports.NoexceptspecificationContext = NoexceptspecificationContext;
class RightShiftContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(CPP14Parser.Greater);
        }
        else {
            return this.getToken(CPP14Parser.Greater, i);
        }
    }
    get ruleIndex() { return CPP14Parser.RULE_rightShift; }
    enterRule(listener) {
        if (listener.enterRightShift)
            listener.enterRightShift(this);
    }
    exitRule(listener) {
        if (listener.exitRightShift)
            listener.exitRightShift(this);
    }
    accept(visitor) {
        if (visitor.visitRightShift)
            return visitor.visitRightShift(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], RightShiftContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], RightShiftContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], RightShiftContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], RightShiftContext.prototype, "accept", null);
exports.RightShiftContext = RightShiftContext;
class RightShiftAssignContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(CPP14Parser.Greater);
        }
        else {
            return this.getToken(CPP14Parser.Greater, i);
        }
    }
    Assign() { return this.getToken(CPP14Parser.Assign, 0); }
    get ruleIndex() { return CPP14Parser.RULE_rightShiftAssign; }
    enterRule(listener) {
        if (listener.enterRightShiftAssign)
            listener.enterRightShiftAssign(this);
    }
    exitRule(listener) {
        if (listener.exitRightShiftAssign)
            listener.exitRightShiftAssign(this);
    }
    accept(visitor) {
        if (visitor.visitRightShiftAssign)
            return visitor.visitRightShiftAssign(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], RightShiftAssignContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], RightShiftAssignContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], RightShiftAssignContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], RightShiftAssignContext.prototype, "accept", null);
exports.RightShiftAssignContext = RightShiftAssignContext;
class TheoperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    New() { return this.tryGetToken(CPP14Parser.New, 0); }
    Delete() { return this.tryGetToken(CPP14Parser.Delete, 0); }
    rightShift() {
        return this.tryGetRuleContext(0, RightShiftContext);
    }
    rightShiftAssign() {
        return this.tryGetRuleContext(0, RightShiftAssignContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_theoperator; }
    enterRule(listener) {
        if (listener.enterTheoperator)
            listener.enterTheoperator(this);
    }
    exitRule(listener) {
        if (listener.exitTheoperator)
            listener.exitTheoperator(this);
    }
    accept(visitor) {
        if (visitor.visitTheoperator)
            return visitor.visitTheoperator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TheoperatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TheoperatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TheoperatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TheoperatorContext.prototype, "accept", null);
exports.TheoperatorContext = TheoperatorContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Integerliteral() { return this.tryGetToken(CPP14Parser.Integerliteral, 0); }
    Characterliteral() { return this.tryGetToken(CPP14Parser.Characterliteral, 0); }
    Floatingliteral() { return this.tryGetToken(CPP14Parser.Floatingliteral, 0); }
    Stringliteral() { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
    booleanliteral() {
        return this.tryGetRuleContext(0, BooleanliteralContext);
    }
    pointerliteral() {
        return this.tryGetRuleContext(0, PointerliteralContext);
    }
    userdefinedliteral() {
        return this.tryGetRuleContext(0, UserdefinedliteralContext);
    }
    get ruleIndex() { return CPP14Parser.RULE_literal; }
    enterRule(listener) {
        if (listener.enterLiteral)
            listener.enterLiteral(this);
    }
    exitRule(listener) {
        if (listener.exitLiteral)
            listener.exitLiteral(this);
    }
    accept(visitor) {
        if (visitor.visitLiteral)
            return visitor.visitLiteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "accept", null);
exports.LiteralContext = LiteralContext;
class BooleanliteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    False() { return this.tryGetToken(CPP14Parser.False, 0); }
    True() { return this.tryGetToken(CPP14Parser.True, 0); }
    get ruleIndex() { return CPP14Parser.RULE_booleanliteral; }
    enterRule(listener) {
        if (listener.enterBooleanliteral)
            listener.enterBooleanliteral(this);
    }
    exitRule(listener) {
        if (listener.exitBooleanliteral)
            listener.exitBooleanliteral(this);
    }
    accept(visitor) {
        if (visitor.visitBooleanliteral)
            return visitor.visitBooleanliteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BooleanliteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BooleanliteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BooleanliteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BooleanliteralContext.prototype, "accept", null);
exports.BooleanliteralContext = BooleanliteralContext;
class PointerliteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Nullptr() { return this.getToken(CPP14Parser.Nullptr, 0); }
    get ruleIndex() { return CPP14Parser.RULE_pointerliteral; }
    enterRule(listener) {
        if (listener.enterPointerliteral)
            listener.enterPointerliteral(this);
    }
    exitRule(listener) {
        if (listener.exitPointerliteral)
            listener.exitPointerliteral(this);
    }
    accept(visitor) {
        if (visitor.visitPointerliteral)
            return visitor.visitPointerliteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PointerliteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PointerliteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PointerliteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PointerliteralContext.prototype, "accept", null);
exports.PointerliteralContext = PointerliteralContext;
class UserdefinedliteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Userdefinedintegerliteral() { return this.tryGetToken(CPP14Parser.Userdefinedintegerliteral, 0); }
    Userdefinedfloatingliteral() { return this.tryGetToken(CPP14Parser.Userdefinedfloatingliteral, 0); }
    Userdefinedstringliteral() { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
    Userdefinedcharacterliteral() { return this.tryGetToken(CPP14Parser.Userdefinedcharacterliteral, 0); }
    get ruleIndex() { return CPP14Parser.RULE_userdefinedliteral; }
    enterRule(listener) {
        if (listener.enterUserdefinedliteral)
            listener.enterUserdefinedliteral(this);
    }
    exitRule(listener) {
        if (listener.exitUserdefinedliteral)
            listener.exitUserdefinedliteral(this);
    }
    accept(visitor) {
        if (visitor.visitUserdefinedliteral)
            return visitor.visitUserdefinedliteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UserdefinedliteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UserdefinedliteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UserdefinedliteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UserdefinedliteralContext.prototype, "accept", null);
exports.UserdefinedliteralContext = UserdefinedliteralContext;
//# sourceMappingURL=CPP14Parser.js.map