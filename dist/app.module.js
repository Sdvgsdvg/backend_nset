"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const jwt_startegy_1 = require("./auth/strategy/jwt.startegy");
const firebase_app_module_1 = require("./firebase/firebase-app.module");
const auth_module_1 = require("./auth/auth.module");
const prisma_service_1 = require("./prisma.service");
const humans_module_1 = require("./entites/humans/humans.module");
const therapist_module_1 = require("./therapist/therapist.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ cache: true }),
            firebase_app_module_1.FirebaseAppModule,
            auth_module_1.AuthModule,
            therapist_module_1.TherapistModule,
            humans_module_1.HumansModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, jwt_startegy_1.JwtStartegy, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map