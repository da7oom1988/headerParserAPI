var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.get('/api/whoami',function(req,res){
    var str1 = req.headers['user-agent'];
    var str2 = str1.substring(str1.indexOf("(")+1 , str1.indexOf(")"));
    var obj = {
        "ipaddress":req.headers.host,
        "language":req.headers['accept-language'],
        "software":str2};
    console.log(obj);
    res.json(obj);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
