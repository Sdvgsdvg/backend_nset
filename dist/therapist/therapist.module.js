"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TherapistModule = void 0;
const common_1 = require("@nestjs/common");
const firebase_app_module_1 = require("../firebase/firebase-app.module");
const Therapist_controller_1 = require("./Therapist.controller");
const Therapist_service_1 = require("./Therapist.service");
let TherapistModule = class TherapistModule {
};
exports.TherapistModule = TherapistModule;
exports.TherapistModule = TherapistModule = __decorate([
    (0, common_1.Module)({
        imports: [firebase_app_module_1.FirebaseAppModule],
        controllers: [Therapist_controller_1.TherapistsController],
        providers: [Therapist_service_1.TherapistService],
    })
], TherapistModule);
//# sourceMappingURL=therapist.module.js.map