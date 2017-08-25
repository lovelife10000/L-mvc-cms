/**
 * Created by v_lljunli on 2017/8/17.
 */
// 'use strict';
// const path = require('path');
// const Koa = require('koa');
// const router = require('koa-router')();
// const app =new Koa();
// //const Route=require('./app/Http/routes');
//
//
// app.use(require('./app/Http/routes'));
//
// app.listen(3000);

var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

// fake app
debug('booting %s', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello debug!\n');
}).listen(3000, function(){
  debug('listening');
});