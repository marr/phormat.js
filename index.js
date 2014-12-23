var bucketlist = require('./lib/bucketlist');
var through2 = require('through2');
var XmlStream = require('xml-stream');

function processBucket(xmlBuffer) {
    var data = xmlBuffer.toString();
    return data
}

module.exports = function(callback) {

    var allData = [];
    var xmlStream = new bucketlist().createReadStream();
    xmlStream = new XmlStream(xmlStream);
    xmlStream.on('updateElement: Contents', function(data) {
        data = processBucket(data);
        allData.push(data);
    });
    xmlStream.on('end', function() {
        callback(allData);
    });
    xmlStream.on('error', function(message) {
        console.error(err);
    });
};
