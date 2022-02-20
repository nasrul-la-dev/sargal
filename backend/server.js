const http = require('http');
const app = require('./app');

//Renvoyer un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
const normalizePort = val => {

  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  
  if (port >= 0) {
    return port;
  }

  return false

};

//configurer le port sur lequel express reçoit les requêtes
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Cette fonction recherche les différentes erreurs et les gère de manière appropriée.
//Elle est ensuite enregistrée dans le serveur
const errorHandler = error => {
  //error.syscall est une chaîne décrivant l'appel système qui a échoué
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    //ne tentative a été faite pour accéder à un fichier d'une manière interdite par ses autorisations d'accès aux fichiers.
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    //une tentative de liaison d'un serveur ( net, http, ou https) à une adresse locale a échoué en raison d'un autre serveur du système local occupant déjà cette adresse.
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
