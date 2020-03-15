# webpack

roadhog不更新后，我把项目迁移回webpack3.x，后又升级到webpack4.x，感觉基础性的配置，脚手架等工具已经覆盖，而高级一些的功能，如dll等，在我们的中台项目中引入后效果不明显。

根据官方文档引入webpack相关配置不难，比较难的是webpack与封装了webpack的工具的配合，如根据nextjs项目需求进行对应的webpack配置，并随着nextjs升级而修改配置。# 其他



<!-- create-react-app 的 webpack 配置在这个项目下：react-scripts。
vue-cli 使用 webpack 模板生成的项目文件中，webpack 相关配置存放在 build 目录下。



css-loader 负责解析 CSS 代码，主要是为了处理 CSS 中的依赖，例如 @import 和 url() 等引用外部文件的声明；
style-loader 会将 css-loader 解析的结果转变成 JS 代码，运行时动态插入 style 标签来让 CSS 代码生效。
经由上述两个 loader 的处理后，CSS 代码会转变为 JS，和 index.js 一起打包了。如果需要单独把 CSS 文件分离出来，我们需要使用 extract-text-webpack-plugin 插件。

使用 webpack-dev-server 的好处是相对简单，直接安装依赖后执行命令即可，而使用 webpack-dev-middleware 的好处是可以在既有的 Express 代码基础上快速添加 webpack-dev-server 的功能，同时利用 Express 来根据需要添加更多的功能，如 mock 服务、代理 API 请求等。 -->

<!--

https://segmentfault.com/a/1190000015822824

http://louiszhai.github.io/2017/04/19/hmr/

https://juejin.im/book/5a6abad5518825733c144469/section/5a6abcc7f265da3e3e33fd78

Webpack揭秘
https://juejin.im/post/5badd0c5e51d450e4437f07a

require、import和export
https://www.cnblogs.com/libin-1/p/7127481.html

webpack代码分割技巧
http://foio.github.io/wepack-code-spliting/

内容来自：
https://juejin.im/post/5b56909a518825195f499806
https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc


升级到webpack 4 但万万没想到还是遇到了不少的问题！ 有很多之前遗留的问题还是没有很好地解决。但最主要的问题还是它的文档有所欠缺，已经废除了的东西如commonsChunkPlugin还在官方文档中到处出现，很多重要的东西却一笔带过，甚至没写，需要用户自己去看源码才能解决。

最新最完整的文档还是看他项目的配置WebpackOptions.json，强烈建议遇到不清楚的配置项可以看这个，因为它一定保证是和最新代码同步的。

本文章不是手摸手从零教你 webpack 配置，所以并不会讲太多很基础的配置问题。比如如何处理 css 文件，如何配置 webpack-dev-server，讲述 file-loader 和 url-loader 之间的区别等等，有需求的推荐看 官方文档 或者 survivejs 出的一个系列教程。或者推荐看我司的另一篇 wbepack 入门文章，已同步到 webpack4 传送门。

![avatar](https://user-gold-cdn.xitu.io/2018/8/7/16513e81dfa85cbc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

言归正题，我们来看看 webpack 默认帮我们做了些什么?

development 模式下，默认开启了NamedChunksPlugin 和NamedModulesPlugin方便调试，提供了更完整的错误信息，更快的重新编译的速度。

production 模式下，由于提供了splitChunks和minimize，所以基本零配置，代码就会自动分割、压缩、优化，同时 webpack 也会自动帮你 Scope hoisting 和 Tree-shaking。

将 css 独立拆包最大的好处就是 js 和 css 的改动，不会影响对方。比如我改了 js 文件并不会导致 css 文件的缓存失效。而且现在它自动会配合optimization.splitChunks的配置，可以自定义拆分 css 文件，比如我单独配置了element-ui作为单独一个bundle,它会自动也将它的样式单独打包成一个 css 文件，不会像以前默认将第三方的 css 全部打包成一个几十甚至上百 KB 的app.xxx.css文件了。

使用 optimize-css-assets-webpack-plugin 这个插件，它不仅能帮你压缩 css 还能优化你的代码。

![avatar](https://user-gold-cdn.xitu.io/2018/7/30/164e93dc299d7062?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如上图测试用例所示，由于optimize-css-assets-webpack-plugin这个插件默认使用了 cssnano 来作 css 优化，
所以它不仅压缩了代码、删掉了代码中无用的注释、还去除了冗余的 css、优化了 css 的书写顺序，优化了你的代码 margin: 10px 20px 10px 20px; =>margin:10px 20px;。同时大大减小了你 css 的文件大小。更多优化的细节见文档。

Tree-Shaking
这其实并不是 webpack 4 才提出来的概念，最早是 rollup 提出来并实现的，后来在 webpack 2 中就实现了，本次在 webpack 4 只是增加了 JSON Tree Shaking和sideEffects能让你能更好的摇。
不过这里还是要提一下，默认 webpack 是支持Tree-Shaking的，但在你的项目中可能会因为babel的原因导致它失效。
因为Tree Shaking这个功能是基于ES6 modules 的静态特性检测，来找出未使用的代码，所以如果你使用了 babel 插件的时候，如：babel-preset-env，它默认会将模块打包成commonjs，这样就会让Tree Shaking失效了。
其实在 webpack 2 之后它自己就支持模块化处理。所以只要让 babel 不transform modules就可以了。配置如下：

```js
// .babelrc
{
  "presets": [
    ["env", {
      modules: false,
      ...
    }]
  ]
}
```

## 默认分包策略
webpack 4 最大的改动就是废除了 CommonsChunkPlugin 引入了 optimization.splitChunks。
webpack 4 的Code Splitting 它最大的特点就是配置简单，如果你的 mode 是 production，那么 webpack 4 就会自动开启 Code Splitting。

![avatar](https://user-gold-cdn.xitu.io/2018/7/24/164cac10a2222794?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如上图所示，在没配置任何东西的情况下，webpack 4 就智能的帮你做了代码分包。入口文件依赖的文件都被打包进了app.js，那些大于 30kb 的第三方包，如：echarts、xlsx、dropzone等都被单独打包成了一个个独立 bundle。
它内置的代码分割策略是这样的：

新的 chunk 是否被共享或者是来自 node_modules 的模块
新的 chunk 体积在压缩之前是否大于 30kb
按需加载 chunk 的并发请求数量小于等于 5 个
页面初始加载时的并发请求数量小于等于 3 个

![avatar](https://user-gold-cdn.xitu.io/2018/7/31/164efb0fedb0bef7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

但有一些小的组件，如上图：vue-count-to 在未压缩的情况下只有 5kb，虽然它被两个页面共用了，但 webpack 4 默认的情况下还是会将它和那些懒加载的页面代码打包到一起，并不会单独将它拆成一个独立的 bundle。（虽然被共用了，但因为体积没有大于 30kb）
你可能会觉得 webpack 默认策略是不是有问题，我一个组件被多个页面，你每个页面都将这个组件打包进去了，岂不是会重复打包很多次这个组件？就拿vue-count-to来举例，你可以把共用两次以上的组件或者代码单独抽出来打包成一个 bundle，但你不要忘了vue-count-to未压缩的情况下就只有 5kb，gizp 压缩完可能只有 1.5kb 左右，你为了共用这 1.5kb 的代码，却要额外花费一次 http 请求的时间损耗，得不偿失。我个人认为 webpack 目前默认的打包规则是一个比较合理的策略了。
但有些场景下这些规则可能就显得不怎么合理了。比如我有一个管理后台，它大部分的页面都是表单和 Table，我使用了一个第三方 table 组件，几乎后台每个页面都需要它，但它的体积也就 15kb，不具备单独拆包的标准，它就这样被打包到每个页面的 bundle 中了，这就很浪费资源了。这种情况下建议把大部分页面能共用的组件单独抽出来，合并成一个component-vendor.js的包（后面会介绍）。

总结
拆包策略：

基础类库 chunk-libs
UI 组件库 chunk-elementUI
自定义共用组件/函数 chunk-commons
低频组件 chunk-eachrts/chunk-xlsx等
业务代码 lazy-loading xxxx.js

持久化缓存：

使用 runtimeChunk 提取 manifest，使用 script-ext-html-webpack-plugin等插件内联到index.html减少请求
使用 HashedModuleIdsPlugin 固定 moduleId
使用 NamedChunkPlugin结合自定义 nameResolver 来固定 chunkId


 --> -->
