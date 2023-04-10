"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCrudData = exports.getCrudData = void 0;
function getCrudData() {
    let getM = localStorage.getItem('crud');
    return getM;
} // Exported localStorage getdata function
exports.getCrudData = getCrudData;
function setCrudData(putM) {
    localStorage.setItem('crud', putM);
} // Exported localStorage setdata function
exports.setCrudData = setCrudData;
