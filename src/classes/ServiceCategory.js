const Service = require("./Service");

module.exports = class ServiceCategory {
  constructor({ name, data }) {
    this.name = name;
    this.services = data.map((service) => {
      return new Service(service);
    });
  }

  getName() {
    return this.name;
  }

  getServices() {
    return this.services;
  }
};
