const KoaRouter = require("koa-router")
const router = new KoaRouter()

const high_score = require("../data/high_score.json")


router.get("/",async (ctx,next) => {
  ctx.set({
    "Content-Type": "text/html;charset=UTF-8",
    "Access-Control-Allow-Origin":"http://127.0.0.1:5173"
  })
  ctx.body = high_score
})

module.exports = router