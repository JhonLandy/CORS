const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
let app = new Koa();
let router = new Router();
// app.use(static(__dirname+"/static"));

// router.options("/http/test",ctx=>{
//     // 允许cors跨域；
//     ctx.set("Access-Control-Allow-Origin","http://localhost:3000")
//     // 允许设置的头部信息；
//     ctx.set("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild")
//     // 允许前端获取的头部
//     ctx.set("Access-Control-Expose-Headers","Date")
//     // 允许前端请求的方法；
//     ctx.set("Access-Control-Allow-Methods",'PUT, POST, GET, DELETE, OPTIONS');
//     // 允许携带凭证；cookie  --》允许跨域的地址需要指定 ："http://localhost:3000"
//     ctx.set("Access-Control-Allow-Credentials",true);
//     ctx.body = "";
// })
// router.get("/",ctx=>{
//     ctx.body = "some value... at 4000";
// });
router.get("/http/test",ctx=>{
    console.log("请求过来了");
    console.log("cookie", ctx.headers.cookie);
    ctx.set("Access-Control-Allow-Origin","http://127.0.0.1:3000")
    // 允许设置的头部信息；
    // ctx.set("Access-Control-Allow-Headers","Content-type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild")
    // 允许前端获取的头部
    ctx.set('Set-Cookie', '__Host-id=1; Secure; Path=/;')
    ctx.set("Access-Control-Expose-Headers","Date")
    // 允许前端请求的方法 ；
    // ctx.set("Access-Control-Allow-Methods",'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set("Access-Control-Allow-Credentials", true);//如果开了，前端请设置xhr.withCredentials = true
    ctx.body = {
        info:"I am at 4000"
    };
});
// router.post("/getDataService",ctx=>{
//     ctx.body = {
//         info:"4000端口数据"
//     }
// })

app.use(router.routes());
app.listen(4000);