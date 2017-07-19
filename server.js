const os = require('os');
const express = require('express');

function totalMem() {
  return Math.round(os.totalmem() / (1024 * 1024));
}

function freeMem() {
  return Math.round(os.freemem() / (1024 * 1024));
}

function usedMem() {
  return totalMem() - freeMem();
}

const app = express();

app.get('/memory', function(req, res) {
  // res.send('H ello ' + req.params.name);

  res.send({ totalMem: totalMem(), freeMem: freeMem(), usedMem: usedMem() });
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});
