"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TherapistService = void 0;
const common_1 = require("@nestjs/common");
const firebase_app_repository_1 = require("../firebase/firebase-app.repository");
let TherapistService = class TherapistService extends firebase_app_repository_1.FirebaseAppRepository {
    async create(Therapist, data) {
        const docRef = await this.db.collection(Therapist).add(data);
        return docRef.id;
    }
    async read(Therapist, docId) {
        const doc = await this.db.collection(Therapist).doc(docId).get();
        return doc.data();
    }
    async update(Therapist, docId, data) {
        await this.db.collection(Therapist).doc(docId).update(data);
        return 'update is success actually';
    }
    async delete(Therapist, docId) {
        await this.db.collection(Therapist).doc(docId).delete();
        return 'therapist of course was removed';
    }
    async list(Therapist) {
        const querySnapshot = await this.db.collection(Therapist).get();
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return documents;
    }
};
exports.TherapistService = TherapistService;
exports.TherapistService = TherapistService = __decorate([
    (0, common_1.Injectable)()
], TherapistService);
//# sourceMappingURL=Therapist.service.js.map