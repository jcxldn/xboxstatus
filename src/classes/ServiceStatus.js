// there are only two types, 1 - None || 2 - Impacted

module.exports = class ServiceStatus {
  constructor(data) {
    this.id = data.Id;
    this.name = data.Name || data.State;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getHasProblem() {
    return this.id != 1;
  }
};
