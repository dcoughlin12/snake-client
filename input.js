let connection;
const connect = require('./play.js');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //MOVES
  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'd') {
      conn.write('Move: right');
    }
  });
  stdin.on('data', (key) => {
    if (key === 'p') {
      conn.write('Say: HELLO FREN');
    }
  });
  //Exit command-- ctl + c
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  return stdin;
};
module.exports = setupInput;

