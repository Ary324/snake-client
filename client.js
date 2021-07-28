const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.2.207',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", function() {
    console.log("Connection has been made");
    conn.write("Name: ARY");
    // setInterval(function() {
    //   conn.write("Move: up");
    // }, 500);
  });
    
  return conn;
};

module.exports = connect;