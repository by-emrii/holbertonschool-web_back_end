export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    this._sqft = sqft;

    // check if subclass has overridden evacuationWarningMessage
    // if Building is not being instatiated/created properly
    if (new.target !== Building) {
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  // abstract method
  evacuationWarningMessage() {
    throw new Error('Subclasses must have evacuationWarningMessage');
  }
}
