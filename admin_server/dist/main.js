"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var router_1 = __importDefault(require("./src/router"));
var koa_body_1 = __importDefault(require("koa-body"));
var koa2_cors_1 = __importDefault(require("koa2-cors"));
var app = new koa_1.default();
// body
app.use(koa_body_1.default({
    multipart: true,
    formidable: {
        maxFileSize: 10 * 1024 * 1024 // 100M, default 2M
    }
}));
// 跨域
app.use(koa2_cors_1.default());
// router
app.use(router_1.default.routes());
app.listen(30001);
