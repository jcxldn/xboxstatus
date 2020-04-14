module.exports = class ScenarioIncident {
  constructor(data, deviceClassArray) {
    this.id = data.Id;
    this.start = data.Begin;
    this.end = data.End;

    this.stage = {
      id: data.Stage.Id,
      message: data.Stage.Message,
    };

    this.impactedDevicesArray = data.ImpactedDevices;
    this.deviceClassArray = deviceClassArray;
  }

  getId() {
    return this.id;
  }

  getStartDate() {
    if (this.start == null) {
      throw new Error("Start time not available.");
    } else {
      return Date.parse(this.start);
    }
  }

  getEndDate() {
    if (this.end == null) {
      throw new Error("End time not available, incident is still ongoing.");
    } else {
      return Date.parse(this.end);
    }
  }

  getIsOngoing() {
    return this.end == null;
  }

  getStageId() {
    return this.stage.id;
  }

  getStageMessage() {
    return this.stage.message;
  }

  getImpactedDevices() {
    return this.deviceClassArray.filter((device) =>
      this.deviceClassArray.includes(device.getId())
    );
  }

  getImpactedDeviceIds() {
    return this.deviceClassArray;
  }
};
