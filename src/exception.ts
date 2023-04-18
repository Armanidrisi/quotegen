export class CategoryNotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "CategoryNotFoundError";
    Object.setPrototypeOf(this, CategoryNotFoundError.prototype);
  }
}
