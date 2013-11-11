jshint javascript/main.js || { exit 1; }
jshint pebble/appinfo.json || { exit 1; }
uglifyjs javascript/libs/rockshot/src/firebase.js javascript/libs/rockshot/src/rockshot.js javascript/main.js -o pebble/src/js/pebble-js-app.js
cd pebble
pebble clean
pebble build || { exit 1; }
rm src/js/pebble-js-app.js || { exit 1; }
if [ "$1" = "install" ]; then
    pebble install --logs
fi