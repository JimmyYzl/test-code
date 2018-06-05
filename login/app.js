var express = require('express'),
    app = express(),
    routes = require('./router/index');
    

app.use('/api', routes);

app.use('/frontend', express.static('./view'));
app.listen(3001);