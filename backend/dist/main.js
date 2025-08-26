"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
let cachedApp;
async function bootstrap() {
    if (!cachedApp) {
        const expressApp = (0, express_1.default)();
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        app.enableCors();
        app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
        await app.init();
        cachedApp = expressApp;
    }
    return cachedApp;
}
async function handler(req, res) {
    const app = await bootstrap();
    return app(req, res);
}
//# sourceMappingURL=main.js.map