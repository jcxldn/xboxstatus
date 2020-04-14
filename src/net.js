const axios = require("axios").default;

module.exports = axios.create({
  headers: {
    "X-Powered-By": "xboxstatus",
  },
});

module.exports.xmlURI = "https://xnotify.xboxlive.com/servicestatusv5/GB/en-GB";
