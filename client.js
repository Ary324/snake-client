const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", function() {
    console.log("Connection has been made");
    conn.write("Name: ARY");
    // setInterval(function() {
    //   conn.write("Move: up");
    // }, 500);
    conn.on('data', data => {
      console.log(data);
    });
  });
    
  return conn;
};

module.exports = connect;