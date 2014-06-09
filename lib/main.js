var {data} = require('sdk/self');
var mainPanel = require("sdk/panel").Panel({
  width: 300,
  height: 400,
  contentURL: data.url("main.html"),
  contentScriptFile: [data.url("jquery-1.11.1.js"), data.url("wordfrequencycounter.js")],
  position: {
    top: 10,
    right: 10
  }
});

require("sdk/ui/button/action").ActionButton({
  id: "show-word-frequency-counter",
  label: "Show WFC Panel",
  icon: "./icon-16.png",
  onClick: showPanel
});

function showPanel() {
  mainPanel.show();
}

mainPanel.on("show", function() {
  mainPanel.port.emit('show');
});

mainPanel.on("hide", function() {
  mainPanel.port.emit('hide');
})