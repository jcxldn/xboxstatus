const ScenarioDevice = require("./ScenarioDevice");
const ScenarioIncident = require("./ScenarioIncident");

module.exports = class ServiceScenario {
  constructor(data) {
    this.id = data.Id;
    this.name = data.Name;
    this.devices = data.Devices.map((device) => {
      return new ScenarioDevice(device);
    });

    this.incidents = data.Incidents.map((incident) => {
      return new ScenarioIncident(incident, this.devices);
    });
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDevices() {
    return this.devices;
  }

  getIncidents() {
    return this.incidents;
  }
};
