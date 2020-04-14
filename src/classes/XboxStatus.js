const net = require("../net");

const Category = require("./ServiceCategory");
const GlobalStatus = require("./GlobalStatus");

module.exports = class XboxStatus {
  constructor(data) {
    this.categoryArr = data.dataArray.map((category) => {
      return new Category(category);
    });

    this.statusArr = [];
    data.statusArray.forEach((type) => {
      const globalClass = new GlobalStatus(type.data);
      this.statusArr.push({ name: type.name, data: globalClass });
    });
  }

  static async getStatusAsync() {
    const res = await net.get(net.xmlURI);
    //return res.data;

    // Convert the data to an array, so that we can react to new categories.
    const keys = Object.keys(res.data);

    const dataArray = [];

    keys.forEach((key) => {
      let data = res.data[key];
      // If category was not already an array, make it one.
      if (!Array.isArray(data)) data = [data];

      if (key != "Status") dataArray.push({ name: key, data });
    });

    // Convert the status object's contents to an array.
    const statusKeys = Object.keys(res.data["Status"]);

    const statusArray = [];

    statusKeys.forEach((key) => {
      statusArray.push({ name: key, data: res.data["Status"][key] });
    });

    return new XboxStatus({ dataArray, statusArray });
  }

  getCategories() {
    return this.categoryArr;
  }

  getStatus() {
    return this.statusArr;
  }
};
