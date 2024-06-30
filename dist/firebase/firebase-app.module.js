"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const firebase_app_provider_1 = require("./firebase-app.provider");
const firebase_app_repository_1 = require("./firebase-app.repository");
let FirebaseAppModule = class FirebaseAppModule {
};
exports.FirebaseAppModule = FirebaseAppModule;
exports.FirebaseAppModule = FirebaseAppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ cache: true })],
        providers: [
            firebase_app_provider_1.firebaseAdminProvider,
            firebase_app_provider_1.firebaseAppProvider,
            config_1.ConfigService,
            firebase_app_provider_1.FirebaseAppProvider,
            firebase_app_repository_1.FirebaseAppRepository,
        ],
        exports: [firebase_app_repository_1.FirebaseAppRepository, 'FIREBASE_APP', 'FIREBASE_ADMIN'],
    })
], FirebaseAppModule);
//# sourceMappingURL=firebase-app.module.js.map