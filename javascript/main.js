;(function () {

  Pebble.addEventListener('ready', pebbleReady);
  Pebble.addEventListener('appmessage', pebbleAppMessage);
  Pebble.addEventListener('webviewclosed', pebbleWebViewClosed);

  RockShot.init('0db6a55e-b32a-4b03-b037-95637bf306ff');

  function pebbleReady(e) {
  }

  function pebbleAppMessage(e) {
    var payload = e.payload;
  }

  function pebbleWebViewClosed(e) {
  }

}());