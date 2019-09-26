var http = require("http");

const React = require('react');
const ReactDOMServer = require('react-dom/server');


const attendeeListProps = require('./dummyProps')
const AttendeeList = require('../lib/attendeeList').default;

const get404 = (req, res) => {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 Not Found");
}

const sendMail = (req, res) => {

    const emailElement = React.createElement(AttendeeList, { mode: attendeeListProps.mode, attributes: attendeeListProps.attributes});
    const content = ReactDOMServer.renderToStaticMarkup(emailElement);
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
}

http.createServer(function(req, res) {

    console.log(`${req.method} request for ${req.url}`);

	if (req.method === "GET") {

        if(req.url === "/send_mail"){
            sendMail(req, res)
        }
        else{
            get404(req, res)
        }
    }
}).listen(3100);

console.log("Notif server listening on port 3100");