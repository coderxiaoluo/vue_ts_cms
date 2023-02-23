const KoaRouter = require("koa-router");
const router = new KoaRouter();
const userRouter = require("./user/user");
const high_scoreRouter = require("./high_score");

router.use("/api/user", userRouter.routes(), userRouter.allowedMethods());
router.use(
  "/api/high",
  high_scoreRouter.routes(),
  high_scoreRouter.allowedMethods()
);

module.exports = router;
