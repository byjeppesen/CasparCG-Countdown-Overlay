let values = {
  filename: "",
  duration: 0,
  position: 0,
};

const callbacks = [];

function parseOscMsg(msg) {
  //   console.log(msg);
  switch (msg.address) {
    case "/channel/1/stage/layer/10/foreground/file/name":
      if (msg.args[0].value !== values.filename) {
        values.filename = msg.args[0].value;
        updateCallbacks();
      }
      break;
    case "/channel/1/stage/layer/10/foreground/file/time":
      let didValuesChange = false;
      if (msg.args[0].value !== values.position) {
        values.position = msg.args[0].value;
        didValuesChange = true;
      }
      if (msg.args[1].value !== values.duration) {
        values.duration = msg.args[1].value;
        didValuesChange = true;
      }
      if (didValuesChange) updateCallbacks();
      break;
    default:
  }
  //
}

function callbackValues(cb) {
  //   console.log(values);
  console.log(cb);
  cb === undefined ? console.log("cb undefined") : callbacks.push(cb);
}

function updateCallbacks() {
  callbacks.forEach((cb) => {
    cb(values);
  });
}

module.exports = {
  callbackValues,
  parseOscMsg,
};
