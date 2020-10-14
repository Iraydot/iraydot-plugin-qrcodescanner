var exec = require('cordova/exec');

var scanInProgress = false;

/**
 * Constructor.
 *
 * @returns {QRcodeScanner}
 */
function QRcodeScanner() {}

QRcodeScanner.prototype.scan = function (successCallback, errorCallback) {

    if (errorCallback == null) {
        errorCallback = function () {};
    }

    if (typeof errorCallback != "function") {
        console.log("QRcodeScanner.scan failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("QRcodeScanner.scan failure: success callback parameter must be a function");
        return;
    }

    if (scanInProgress) {
        errorCallback('Scan is already in progress');
        return;
    }

    scanInProgress = true;

    exec(
        function (result) {
            scanInProgress = false;
            successCallback(result);
        },
        function (error) {
            scanInProgress = false;
            errorCallback(error);
        },
        'QRcodeScanner',
        'scan'
    );
}

var qrcodeScanner = new QRcodeScanner();
module.exports = qrcodeScanner