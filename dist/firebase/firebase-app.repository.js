"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAppRepository = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
const auth_1 = require("firebase/auth");
let FirebaseAppRepository = class FirebaseAppRepository {
    constructor(firebaseAdmin, firebaseApp) {
        this.firebaseAdmin = firebaseAdmin;
        this.firebaseApp = firebaseApp;
        this.db = firebaseAdmin.firestore();
        this.collection = this.db.collection('users');
        this.authInstance = (0, auth_1.getAuth)(this.firebaseApp);
        this.auth = firebaseAdmin.auth();
    }
};
exports.FirebaseAppRepository = FirebaseAppRepository;
exports.FirebaseAppRepository = FirebaseAppRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FIREBASE_ADMIN')),
    __param(1, (0, common_1.Inject)('FIREBASE_APP')),
    __metadata("design:paramtypes", [Object, Object])
], FirebaseAppRepository);
//# sourceMappingURL=firebase-app.repository.js.map