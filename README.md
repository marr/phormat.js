phormat
-------

# install #
`npm install phormat`

# config #
`s3config.json` should include the following:
```
{
	"accessKeyId": "YOUR_S3_ACCESS_KEY_HERE",
	"secretAccessKey": "YOUR_S3_SECRET_HERE"
}
```

# usage #
```
var phormat = require('phormat')

// use the bucketlist to retrieve a s3 object from aws
phormat
    .bucketlist()
    .createReadStream()
    .pipe(process.stdout)
```
