const express = require('express');
const cons = require('consolidate');
const app = express();
const screenNameRoute = require('./routes/screen-name');

function redirectToCnn(req, res) {
  res.redirect('/cnnbrk');
}

app.set('port', process.env.port || 3000);
app.set('env', process.env.NODE_ENV || 'development');
app.set('view engine', 'html');
app.set('views', process.cwd() + '/views');
app.engine('html', cons.nunjucks);
app.use('/static', express.static('dist/public'));

app.get('/favicon.ico', (req, res) => res.sendStatus(200));
app.get('/cnnbrk-tweets', redirectToCnn);
app.get('/', redirectToCnn);
app.get('/:screen_name', screenNameRoute);

app.listen(app.get('port'), () => {
  console.log(`Running on port ${app.get('port')} in ${app.get('env')}`); // eslint-disable-line
});
