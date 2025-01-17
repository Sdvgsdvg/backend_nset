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
exports.TherapistsController = void 0;
const common_1 = require("@nestjs/common");
const Therapist_service_1 = require("./Therapist.service");
let TherapistsController = class TherapistsController {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
    }
    async createTherapist(data) {
        return this.firestoreService.create('Therapists', data);
    }
    async getTherapist(id) {
        return this.firestoreService.read('Therapists', id);
    }
    async updateTherapist(id, data) {
        return this.firestoreService.update('Therapists', id, data);
    }
    async deleteTherapist(id) {
        return this.firestoreService.delete('Therapists', id);
    }
};
exports.TherapistsController = TherapistsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TherapistsController.prototype, "createTherapist", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TherapistsController.prototype, "getTherapist", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TherapistsController.prototype, "updateTherapist", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TherapistsController.prototype, "deleteTherapist", null);
exports.TherapistsController = TherapistsController = __decorate([
    (0, common_1.Controller)('Therapists'),
    __metadata("design:paramtypes", [Therapist_service_1.TherapistService])
], TherapistsController);
//# sourceMappingURL=Therapist.controller.js.map