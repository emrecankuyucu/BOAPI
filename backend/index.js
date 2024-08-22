

var http=require('http')
var getApi=require('./getApi.js')

http.createServer(function(req, res) {
    res.writeHead(200)
    res.end('Merhaba asdasdas')   
}).listen(8080)


var resultOnePair =getApi.getBinancePairInfo("BTCUSDT");

console.log(resultOnePair)

var resultAllPair =getApi.getAllPairs(); 

console.log(resultAllPair)
