const ServiceStatus = require("./ServiceStatus");
const ServiceScenario = require("./ServiceScenario");

module.exports = class Service {
  constructor(data) {
    this.id = data.Id;
    this.name = data.Name;
    this.status = new ServiceStatus(data.Status);
    this.scenarios = data.Scenarios.map((scenario) => {
      return new ServiceScenario(scenario);
    });
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getStatus() {
    return this.status;
  }

  getHasProblem() {
    return this.status.getHasProblem();
  }

  getScenarios() {
    return this.scenarios;
  }
};
