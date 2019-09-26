var http = require("http");

const fetch = require('node-fetch');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Email = require('../lib/Email').default;

const get404 = (req, res) => {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 Not Found");
}


function getWeatherInMadrid() {
    return fetch('https://www.metaweather.com/api/location/766273/')
      .then(res => res.json())
      .then((res) => {
        return res.consolidated_weather.map(w => ({
          date: w.applicable_date,
          name: w.weather_state_name,
          abbr: w.weather_state_abbr,
          tMax: w.max_temp,
          tMin: w.min_temp,
        }));
      });
  }

const sendMail = (req, res) => {

    getWeatherInMadrid()
    .then((weather) => {
        const emailElement = React.createElement(Email, { data : { weather, city: 'Madrid' } });
        const content = ReactDOMServer.renderToStaticMarkup(emailElement);
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    })
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