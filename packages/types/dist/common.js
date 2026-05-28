"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNaira = exports.toNaira = exports.toKobo = void 0;
const toKobo = (naira) => Math.round(naira * 100);
exports.toKobo = toKobo;
const toNaira = (kobo) => kobo / 100;
exports.toNaira = toNaira;
const formatNaira = (kobo) => '₦' + (0, exports.toNaira)(kobo).toLocaleString('en-NG', { minimumFractionDigits: 0 });
exports.formatNaira = formatNaira;
