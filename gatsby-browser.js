const LogRocket = require("logrocket");

exports.onClientEntry = () => {
  console.log("client entered");
  LogRocket.init("lar2wo/leighhallidaycom");
};
