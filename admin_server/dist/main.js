"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var router_1 = __importDefault(require("./src/router"));
var app = new koa_1.default();
// router
app.use(router_1.default.routes());
app.listen(30001);
