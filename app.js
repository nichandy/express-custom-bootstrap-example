const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const router = express.Router();

// const livereload = require('livereload');
// const server = livereload.createServer();
// server.watch(__dirname + "/public");

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/assets')); // Serves public assets folder
app.use(express.static(__dirname + '/public')); // Serves public assets folder
app.set('views', [__dirname + '/views']);

// Bootstrap
//app.use("/css", express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use("/js", express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/jquery/dist')));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', router);

//Routes
router.get('/', (req, res) => {
  res.render('index', {
      pageTitle: 'Bootstrap Test Page',
      path: '/'
  })
});

// This 


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));