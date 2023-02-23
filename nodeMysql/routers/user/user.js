const KoaRouter = require("koa-router");
const KoaBody = require("koa-bodyparser");
const router = new KoaRouter();

const user = require("../../data/user.json");
const USER_NAME = "codeLuo";
const PWD = "root";
router.post("/", KoaBody(), async (ctx, next) => {
  ctx.set({
    "Content-Type": "text/html;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  });
  const { name: name, password: pwd } = ctx.request.body;
  if (USER_NAME == name && PWD == pwd) {
    ctx.body = {
      code: 1,
      data: {
        name: name,
        token: "100",
      },
    };
  } else {
    ctx.body = "404";
  }
});

module.exports = router;
