const ServiceStatus = require("./ServiceStatus");

module.exports = class GlobalStatus extends ServiceStatus {
  constructor(data) {
    super(data);
    this.lastUpdated = Date.parse(data.LastUpdated);
  }

  getLastUpdated() {
    return this.lastUpdated;
  }
};
