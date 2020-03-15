# http

## 简述
http：目前绝大多数是http1.1版本，最原始的web协议，默认80端口，基于TCP协议。
https：加密的http协议(http+SSL/TLS)，默认443端口，基于TCP协议。
http2：第二代http协议，相较于HTTP1.x，大幅度的提升了web性能。在与HTTP/1.1完全语义兼容的基础上，进一步减少了网络延迟和传输的安全性，基于TCP协议。

<!-- HTTP1.x 与 HTTP2 简介与区别
https://www.eteplus.com/post/MDU6SXNzdWUyNTMxNjE1ODc= -->

## 跨域
常见跨域方式：
https://segmentfault.com/a/1190000011145364
https://juejin.im/post/5d1ecb96f265da1b6d404433#heading-5

### 反向代理
开发环境通常会在脚手架中配置反向代理
```js
module.exports = {
    devServer: {
        port: 8085,
        proxy: {
            '/douban': {
                target: 'https://douban.uieee.com/v2/movie',
                changeOrigin: true,
                pathRewrite: {
                    '^/douban': ''
                }
            }
        }
    }
};
```
生产环境通常会使用nginx。

### 代理转发
自己想做一个聚合搜索网页，前端使用iframe嵌套百度，google等搜索网页。实际使用中，不同网站都设置了对iframe的限制，所以还是要用node发送请求并处理response的headers。
```js
// 前端
<iframe style="width: 400px; height: 300px;" src="http://localhost:10101/?target=https%3A%2F%2Fgithub.com%2Fjoin"/>
```
```js
// 后端
const http = require("http");
const https = require("https");
const querystring = require("querystring");
const url = require("url");
const fs = require("fs");
var request = require('request');

const port = 7000;

http.createServer(onRequest).listen(port, () => {
  console.log("Server Running!", port);
});

function onRequest(req, res) {
  if (req.url == '/' || req.url == '/favicon.ico')  {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    return
  }
  const originUrl = url.parse(req.url);
  const qs = querystring.parse(originUrl.query);
  const targetUrl = qs["target"];
  const target = url.parse(targetUrl);

  const options = {
    hostname: target.hostname,
    port: 80,
    path: url.format(target),
    method: "GET",
  };

  // 2.代发请求
  const proxy = https.request(options, _res => {
    console.log(_res);
    // 3.修改响应头
    const fieldsToRemove = ["x-frame-options", "content-security-policy"];
    Object.keys(_res.headers).forEach(field => {
      if (!fieldsToRemove.includes(field.toLocaleLowerCase())) {
        res.setHeader(field, _res.headers[field]);
      }
    });
    _res.pipe(res, {
      end: true
    });
  });

  req.pipe(proxy, {
    end: true
  });
}
```

单纯只是用node请求其他服务器的话，针对国内的网站，使用request模块即可快速实现；而对于国外的网站，则需要在request中使用proxy。
```js
var request = require('request');
const http = require("http");
const port = 7000;

http.createServer(function(req,res){
　res.setHeader('Content-Type','text/html');
    request({
      url: 'https://google.com',
      proxy: 'http://127.0.0.1:1087' // 本机使用的翻墙代理
    }, function (error, response, body) {
        res.end(body);
    })
}).listen(port, () => {
  console.log("Server Running!", port);
});

// 使用iframe跨域，部分网站ok，其他会进行不同程度反嵌套以防止clickattacking，比如百度会debug，google.com会报“Refused to display 'https://www.google.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.”（search页还是可以的，"https://www.google.com/search?igu=1&ei=&q=YOUR+WORD"）。stackoverflow和github报错“Refused to display 'https://github.com/.... in a frame because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'self'".” 最终解决办法只有反向代理。

// 参考：http://www.ayqy.net/blog/%e6%89%93%e7%a0%b4iframe%e5%ae%89%e5%85%a8%e9%99%90%e5%88%b6%e7%9a%843%e7%a7%8d%e6%96%b9%e6%a1%88/

// 备注：
// 应该是创建https服务器（https.createserver）的时候才需要证书，客户端会向三方机构验证证书。使用openssl 生成自签名证书免费,本地测试使用。https.request不需要证书。

缓存
https://segmentfault.com/a/1190000020786519


// 从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！
// https://zhuanlan.zhihu.com/p/34453198
