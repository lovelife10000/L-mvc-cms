/**
 * Created by v_lljunli on 2017/8/17.
 */
'use strict';
module.exports = (router,app) => {

  router.get('/', function (ctx, next) {
    console.log(ctx.params);
    ctx.body = 'Hello World!';
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());

};
