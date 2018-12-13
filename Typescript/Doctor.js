"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Doctor {
    constructor(id, name, specialization) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
    }
    toString() {
        // Using templat literals
        return `${this.id},${this.name},${this.specialization}`;
    }
}
exports.Doctor = Doctor;
