// var koa = require('koa');
// var app = koa();

// app.use(function *(){
//   this.body = 'Hello World';
// });

// app.listen(3000);

var koa = require('koa');
var app = koa();

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log(1111);
  console.log('%s %s - %s', this.method, this.url, ms);
  console.log(2222);
});

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(process.env.PORT ||3000);     