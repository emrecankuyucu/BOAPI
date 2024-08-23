


var http=require('http')
var getApi=require('./getApi.js')
const express=require('express');
const { Console } = require('console');

const cors = require('cors');

const app=express();
app.use(cors());


const port=8080;
var jsonResult;


// http.createServer(function(req, res) {
//     res.writeHead(200)
//     res.end('Merhaba asdasdas')   
// }).listen(8080)

app.get('/', (req, res) => {
  res.send('Merhaba, dünya!');
});
var rrr;
app.get('/api/getParities', (req, res) => {
  var a=getApi.getBinancePairInfo("BTCUSDT").then(data=>{jsonResult=data});
 console.log(a)
  

  const customResponse = {
    timestamp: new Date().toISOString()
    

  };
  
  res.json(jsonResult);
});
app.get('/api/getAllPairs', (req, res) => {
  var a=getApi.getAllPairs().then(data=>{jsonResult=data});
 console.log(a)
  

  const customResponse = {
    timestamp: new Date().toISOString()
    

  };
  
  res.json(jsonResult);
});


app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});




// var resultAllPair =getApi.getAllPairs(); 

// console.log(resultAllPair)
