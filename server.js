var http = require("http"),terminal = require("web-terminal"); var app = http.createServer(function (req, res) { res.end(""); }); app.listen(1337); terminal(app);
