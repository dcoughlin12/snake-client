//Establishes connection with the game server
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // event handler to handle incoming data and console log it for the player
  conn.on('data', (data) => {
  console.log('Server says: ', data);
	})

  return conn;
}

module.exports = connect