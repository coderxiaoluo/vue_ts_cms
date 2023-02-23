const Koa = require("koa");
// 获取post参数需要的
// const koaBody = require("koa-bodyparser")
const router = require("./routers");
const server = new Koa();

server.use(router.routes()).use(router.allowedMethods());
server.listen(8888, () => {
  console.log("服务器启动成功：http://localhost:8888");
});
