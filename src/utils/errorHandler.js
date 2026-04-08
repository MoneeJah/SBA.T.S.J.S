"use strict";
// src/utils/errorHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
exports.handleError = handleError;
// Custom error class for your app
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
exports.CustomError = CustomError;
// Handles any kind of error and returns a clean string
function handleError(error) {
    if (error instanceof CustomError) {
        return `Custom Error: ${error.message}`;
    }
    else if (error instanceof Error) {
        return `Unexpected Error: ${error.message}`;
    }
    else {
        return "An unknown error occurred";
    }
}
//# sourceMappingURL=errorHandler.js.map