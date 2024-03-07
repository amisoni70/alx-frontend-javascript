export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
      this._sqft = sqft;
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(sqft) {
    if ((typeof sqft !== 'number') && (sqft instanceof Number)) {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
