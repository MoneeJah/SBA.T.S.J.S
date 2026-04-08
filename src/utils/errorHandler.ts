// src/utils/errorHandler.ts

// Custom error class for your app
export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

// Handles any kind of error and returns a clean string
export function handleError(error: unknown): string {
  if (error instanceof CustomError) {
    return `Custom Error: ${error.message}`;
  } else if (error instanceof Error) {
    return `Unexpected Error: ${error.message}`;
  } else {
    return "An unknown error occurred";
  }
}