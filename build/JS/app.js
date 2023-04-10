"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LockeStorag_1 = require("./LockeStorag"); //Import GetData And SetData Function From LockeStorag.ts File.
// Useing in convert value radians to degrees
let dataOfMemory = "";
dataOfMemory = (0, LockeStorag_1.getCrudData)();
//
let display = "";
let subDisplay = 0;
let errMsg = document.getElementById("err-msg");
let displayOT = document.getElementById("input-field");
let angleShow = document.getElementById("angle");
let Special1 = document.getElementById("2ndSpecial-1");
let x2 = document.getElementById("x2");
let sqrt = document.getElementById("sqrt");
let xry = document.getElementById("**");
let x10 = document.getElementById("10x");
let log = document.getElementById("log");
let inn = document.getElementById("in");
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");
let cosec = document.getElementById("cosec");
let sec = document.getElementById("sec");
let cot = document.getElementById("cot");
let trigonometryCaseSecond = "o";
let trigonometryHyp = "o";
let temporaryMemory = "";
let i = 1;
let fact = 1;
let memoryRecolButton = document.getElementById("mr");
let memoryClearButton = document.getElementById("mc");
//Convert value radians to degrees
function radians_to_degrees(radians) {
    subDisplay = Number(radians);
    var pi = Math.PI;
    return String(subDisplay * (180 / pi));
}
//Convert value degrees to radians
function degrees_to_radians(degrees) {
    subDisplay = Number(degrees);
    var pi = Math.PI;
    return String(subDisplay * (pi / 180));
}
let buttons = document.querySelectorAll(".jsrun");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id || e.target.title) { //getting id and title of targeted button
            case "Eql": // while click equal to (=)
                if (display.includes("rt")) {
                    let firstNumber = display.slice(0, display.indexOf("rt"));
                    let secondNumber = display.slice(display.indexOf("rt") + 2, display.length);
                    try {
                        let result = "";
                        result = eval(`${Math.pow(Number(secondNumber), (1 / Number(firstNumber)))}`);
                        displayOT.textContent = result;
                    }
                    catch (err) { //Throw an error and remove it after 3s.
                        errMsg.textContent = "Invalid Entry!";
                        setTimeout(() => {
                            errMsg.textContent = "";
                            displayOT.textContent = "";
                            display = "";
                        }, 3000);
                    }
                    break;
                }
                else if (display.includes("e**")) {
                    try {
                        display = display.replace("e", "2.7");
                        display = eval(display);
                        displayOT.textContent = display;
                    }
                    catch (_a) {
                        errMsg.textContent = "Invalid Entry!";
                        setTimeout(() => {
                            errMsg.textContent = "";
                            displayOT.textContent = "";
                            display = "";
                        }, 3000);
                    }
                    break;
                }
                else if (display.includes("e+")) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                    break;
                }
                else {
                    try {
                        display = eval(display);
                        displayOT.textContent = display;
                    }
                    catch (err) {
                        errMsg.textContent = "Invalid Entry!";
                        setTimeout(() => {
                            errMsg.textContent = "";
                            displayOT.textContent = "";
                            display = "";
                        }, 3000);
                    }
                    break;
                }
                break;
            case "c": //while click "C" button
                display = "";
                displayOT.textContent = display;
                break;
            case "ms": // while click MS button
                (0, LockeStorag_1.setCrudData)(display);
                break;
            case "mm": // while click M- button
                temporaryMemory = (0, LockeStorag_1.getCrudData)();
                display = String(Number(display) - Number(temporaryMemory));
                displayOT.textContent = display;
                break;
            case "mpp": // while click M+ button
                temporaryMemory = (0, LockeStorag_1.getCrudData)();
                display = String(Number(display) + Number(temporaryMemory));
                displayOT.textContent = display;
                break;
            case "mr": // while click MR button
                temporaryMemory = (0, LockeStorag_1.getCrudData)();
                display = String(temporaryMemory);
                displayOT.textContent = display;
                break;
            case "mc": // while click MC button
                temporaryMemory = "";
                (0, LockeStorag_1.setCrudData)(temporaryMemory);
                display = String((0, LockeStorag_1.getCrudData)());
                displayOT.textContent = display;
                memoryRecolButton.disabled = true;
                memoryClearButton.disabled = true;
                break;
            case "d-1": // while click delete one number (⌫) button
                display = display.slice(0, display.length - 1);
                displayOT.textContent = display;
                break;
            case "x2": // while click square button
                try {
                    display = display + "*" + display;
                    display = eval(display);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "x3": // while click cube button
                try {
                    display = display + "**3";
                    display = eval(display);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "sqrt": // while click square root button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.sqrt(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "cbrt": // while click cube root button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.cbrt(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "1/": // while click 1/x button
                try {
                    display = "1/" + display;
                    display = eval(display);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "log": // while click log button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.log10(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "in": // while click in button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.log(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "mx": // while click | x | button
                if (Number(display) < 0) {
                    display = display.slice(display.length - 1);
                    displayOT.textContent = display;
                }
                else {
                    displayOT.textContent = display;
                }
                break;
            case "mp": // while click +/- button
                let num = Number(display);
                if (num > 0) {
                    display = display + "*-1";
                    display = eval(display);
                    displayOT.textContent = display;
                }
                else {
                    display = display + "*-1";
                    display = eval(display);
                    displayOT.textContent = display;
                }
                break;
            case "exp": // while click exp button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.exp(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "f-e": // while click f-e button
                try {
                    display = Number.parseFloat(display).toExponential();
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "frr": // while click ⎡x⎤ button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.round(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "floor": // while click ⎣x⎦ button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.floor(subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "rand": // while click rand button
                try {
                    subDisplay = Number(display);
                    subDisplay = Math.floor(Math.random() * subDisplay);
                    display = String(subDisplay);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "10x": // while click 10x button
                try {
                    display = "10**" + display;
                    display = eval(display);
                    displayOT.textContent = display;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "!": // while click n! button
                for (i = 1; i <= Number(display); i++) {
                    fact = fact * i;
                }
                displayOT.textContent = String(fact);
                fact = 1;
                i = 1;
                break;
            case "dms": // while click →dms button
                try {
                    subDisplay = Number(display);
                    let d = Math.floor(subDisplay);
                    let minfloat = (subDisplay - d) * 60;
                    let m = Math.floor(minfloat);
                    let secfloat = (minfloat - m) * 60;
                    let s = Math.round(secfloat);
                    if (s === 60) {
                        m++;
                        s = 0;
                    }
                    if (m === 60) {
                        d++;
                        m = 0;
                    }
                    let output = "" + d + ":" + m + ":" + s;
                    displayOT.textContent = output;
                }
                catch (err) {
                    errMsg.textContent = "Invalid Entry!";
                    setTimeout(() => {
                        errMsg.textContent = "";
                        displayOT.textContent = "";
                        display = "";
                    }, 3000);
                }
                break;
            case "toDeg": //Convert Radions to degrees.
                display = radians_to_degrees(display);
                displayOT.textContent = display;
                break;
            case "angle": //While Click ["DEG" , "RAD" , "GRAD"] it will change the button's value.
                if (e.target.value == "deg") {
                    angleShow.innerHTML = "RAD";
                    angleShow.value = "rad";
                }
                else if (e.target.value == "rad") {
                    angleShow.innerHTML = "GRAD";
                    angleShow.value = "grad";
                }
                else if (e.target.value == "grad") {
                    angleShow.innerHTML = "DEG";
                    angleShow.value = "deg";
                }
                break;
            case "hyp":
            case "2nd": //Any Case Click hyp and 2nd button it will change the trigonometry button's value.
                if (trigonometryHyp == "o" && trigonometryCaseSecond == "o") {
                    sin.innerHTML = "sinθ";
                    sin.title = "sin";
                    cos.innerHTML = "cosθ";
                    cos.title = "cos";
                    tan.innerHTML = "tanθ";
                    tan.title = "tan";
                    cosec.innerHTML = "cosecθ";
                    cosec.title = "cosec";
                    sec.innerHTML = "secθ";
                    sec.title = "sec";
                    cot.innerHTML = "cotθ";
                    cot.title = "cot";
                    if (e.target.id == "2nd") {
                        trigonometryHyp = "z";
                    }
                    else if (e.target.id == "hyp") {
                        trigonometryCaseSecond = "z";
                    }
                    break;
                }
                else if (trigonometryHyp == "z" && trigonometryCaseSecond == "o") {
                    sin.innerHTML = "sin <sup>-1</sup>";
                    sin.title = "sin-1";
                    cos.innerHTML = "cos <sup>-1</sup>";
                    cos.title = "cos-1";
                    tan.innerHTML = "tan <sup>-1</sup>";
                    tan.title = "tan-1";
                    cosec.innerHTML = "cosec <sup>-1</sup>";
                    cosec.title = "cosec-1";
                    sec.innerHTML = "sec <sup>-1</sup>";
                    sec.title = "sec-1";
                    cot.innerHTML = "cot <sup>-1</sup>";
                    cot.title = "cot-1";
                    if (e.target.id == "2nd") {
                        trigonometryHyp = "o";
                    }
                    else if (e.target.id == "hyp") {
                        trigonometryCaseSecond = "z";
                    }
                    break;
                }
                else if (trigonometryHyp == "o" && trigonometryCaseSecond == "z") {
                    sin.innerHTML = "sinhθ";
                    sin.title = "sinh";
                    cos.innerHTML = "coshθ";
                    cos.title = "cosh";
                    tan.innerHTML = "tanhθ";
                    tan.title = "tanh";
                    cosec.innerHTML = "cosechθ";
                    cosec.title = "cosech";
                    sec.innerHTML = "sechθ";
                    sec.title = "sech";
                    cot.innerHTML = "cothθ";
                    cot.title = "coth";
                    if (e.target.id == "2nd") {
                        trigonometryHyp = "z";
                    }
                    else if (e.target.id == "hyp") {
                        trigonometryCaseSecond = "o";
                    }
                    break;
                }
                else if (trigonometryHyp == "z" && trigonometryCaseSecond == "z") {
                    sin.innerHTML = "sinh <sup>-1</sup>";
                    sin.title = "sinh-1";
                    cos.innerHTML = "cosh <sup>-1</sup>";
                    cos.title = "cosh-1";
                    tan.innerHTML = "tanh <sup>-1</sup>";
                    tan.title = "tanh-1";
                    cosec.innerHTML = "cosech <sup>-1</sup>";
                    cosec.title = "cosech-1";
                    sec.innerHTML = "sech <sup>-1</sup>";
                    sec.title = "sech-1";
                    cot.innerHTML = "coth <sup>-1</sup>";
                    cot.title = "coth-1";
                    if (e.target.id == "2nd") {
                        trigonometryHyp = "o";
                    }
                    else if (e.target.id == "hyp") {
                        trigonometryCaseSecond = "o";
                    }
                    break;
                }
                break;
            case "sin": //while click sin button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.sin(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.sin(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.sin(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sinh": //while click sinh button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.sinh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.sinh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.sinh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sin-1": //while click sin-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.asin(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.asin(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.asin(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sinh-1": //while click sinh-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.asinh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.asinh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.asinh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cos": //while click cos button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.cos(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.cos(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.cos(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cosh": //while click cosh button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.cosh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.cosh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.cosh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cos-1": //while click cos-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.acos(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.acos(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.acos(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cosh-1": //while click cosh-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.acosh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.acosh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.acosh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "tan": //while click tan button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.tan(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.tan(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.tan(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "tanh": //while click tanh button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.tanh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.tanh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.tanh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "tan-1": //while click tan-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.atan(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.atan(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.atan(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "tanh-1": //while click tanh-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(Math.atanh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(Math.atanh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(Math.atanh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cosec": //while click cosec button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.sin(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.sin(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.sin(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cosech": //while click cosech button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.sinh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.sinh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.sinh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cosec-1": //while click cosec-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.asin(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.asin(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.asin(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cosech-1": //while click cosech-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.asinh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.asinh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.asinh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sec": //while click sec button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.cos(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.cos(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.cos(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sech": //while click sech button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.cosh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.cosh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.cosh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sec-1": //while click sec-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.acos(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.acos(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.acos(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "sech-1": //while click sech-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.acosh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.acosh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.acosh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cot": //while click cot button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.tan(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.tan(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.tan(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "coth": //while click coth button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.tanh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.tanh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.tanh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "cot-1": //while click cot-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.atan(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.atan(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.atan(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "coth-1": //while click coth-1 button.
                if (angleShow.value == "deg") {
                    display = degrees_to_radians(display);
                    subDisplay = Number(display);
                    display = String(1 / Math.atanh(subDisplay));
                }
                else if (angleShow.value == "grad") {
                    subDisplay = Number(display);
                    subDisplay = subDisplay * 0.0157;
                    display = String(1 / Math.atanh(subDisplay));
                }
                else {
                    subDisplay = Number(display);
                    display = String(1 / Math.atanh(subDisplay));
                }
                displayOT.textContent = display;
                break;
            case "2ndSpecial-1": //front 2nd button will change full column button value while click first time
                Special1.id = "2ndSpecial-2";
                x2.innerHTML = "x<sup title='x3'>3</sup>";
                x2.title = "x3";
                x2.id = "x3";
                sqrt.innerHTML = "3√x";
                sqrt.title = "cbrt";
                sqrt.id = "cbrt";
                xry.innerHTML = "y√x";
                xry.title = "rt";
                xry.id = "rt";
                x10.innerHTML = "2<sup title='2**'>x</sup>";
                x10.title = "2**";
                x10.id = "2**";
                log.innerHTML = "log<sub title='log'>10</sub>(x)";
                inn.innerHTML = "e<sup title='e**'>x</sup>";
                inn.title = "e**";
                inn.id = "e**";
                break;
            case "2ndSpecial-2": //second time front 2nd button change full column value again and it will same as befor value.
                Special1.id = "2ndSpecial-1";
                x2.innerHTML = "x<sup title='x2'>2</sup>";
                x2.title = "x2";
                x2.id = "x2";
                sqrt.innerHTML = "2√x";
                sqrt.id = "sqrt";
                sqrt.title = "sqrt";
                xry.innerHTML = "x<sup title='**'>y</sup> ";
                xry.title = "**";
                xry.id = "**";
                x10.innerHTML = "10<sup title='10x'>x</sup>";
                x10.title = "10x";
                x10.id = "10x";
                log.innerHTML = "log(x)";
                inn.innerHTML = "in";
                inn.title = "in";
                inn.id = "in";
                break;
            default: //While clicking any button it will display it value on screen
                display += e.target.id;
                displayOT.textContent = display;
                break;
        }
        if ((0, LockeStorag_1.getCrudData)() != "") { //if loclestorage was null then MR & MC will disabled
            memoryRecolButton.disabled = false;
            memoryClearButton.disabled = false;
        }
        else {
            memoryRecolButton.disabled = true;
            memoryClearButton.disabled = true;
        }
    });
});
if (dataOfMemory != "") { //if loclestorage was null then MR & MC will disabled
    memoryRecolButton.disabled = false;
    memoryClearButton.disabled = false;
}
else {
    memoryRecolButton.disabled = true;
    memoryClearButton.disabled = true;
}
