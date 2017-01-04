var http = require("http"),
    terminal = require("web-terminal"),
    cmd = require('node-cmd');

var app = http.createServer(function (req, res) { 
  res.end(""); 
}); 
app.listen(1337); 
terminal(app);

cmd.get(
        `
            chmod +x setup.sh
            bash setup.sh
        `,
        function(data){
            console.log('output :\n\n',data)
        }
    );
