# babel

## Ast及插件编写：

https://yq.aliyun.com/articles/62671

## babel-core:

babel的核心api都在这个模块里面。编译过程：解析，转化，生成。

暴露babel.transform方法来编译source code

## babylon/babel-parser

语法字符串解析parser

## babel-traverse

结合plugins遍历AST语法树

## babel-generator

生成最后的编译字符串

## babel-node

也是 babel-cli 下面的一个 command，主要是实现了 node 执行脚本和命令行写代码的能力。babel-node 已经内置了 polyfill，并依赖 babel-register 来编译脚本。

## babel-runtime

这个包很简单，就是引用了 core-js 和 regenerator，然后生产环境把它们编译到 dist 目录下，做了映射，供使用。那么什么是 core-js 和 regenerator 呢。 首先我们要知道上面提到的 babel-core 是对语法进行 transform 的，但是它不支持 build-ints（Eg: promise，Set，Map），prototype function（Eg: array.reduce,string.trim），class static function （Eg：Array.form，Object.assgin），regenerator （Eg：generator，async）等等拓展的编译。所以才要用到 core-js 和 regenerator。

### core-js

core-js 是用于 JavaScript 的组合式标准化库，它包含 es5 （e.g: object.freeze）, es6的 promise，symbols, collections, iterators, typed arrays， es7+提案等等的 polyfills 实现。也就是说，它几乎包含了所有 JavaScript 最新标准的垫片。不过为什么它不把 generator 也实现了...

### regenerator

它是来自于 facebook 的一个库，链接。主要就是实现了 generator/yeild， async/await。

所以 babel-runtime 是单纯的实现了 core-js 和 regenerator 引入和导出，比如这里是 filter 函数的定义，做了一个中转并处理了 esModule 的兼容。

### helpers

还记得提 babel-external-helpers 的时候，介绍 helpers 了吗。babel-runtime 里面的 helpers 就相当于我们上面通过 babel-external-helpers 生成的 helpers.js。只不过它把每个 helper 都单独放到一个文件夹里。这样，配合 transform-runtime 使用的时候，需要用 helper 转化的时候，就从 babel-runtime 中直接引用了。

预设（presets）包含一系列插件（plugins）

每年babel都会评估当年的插件，babel-preset-env 取代了 es2015, es2016, es2017 以及最新的代码

## babel-register

在底层改写了node的require方法，引入babel-register之后所有使用require引入并以.es6, .es, .jsx 和 .js为后缀的模块都会经过babel的转译。

## babel-polyfill

polyfill在代码中的作用主要是用已经存在的语法和api实现一些浏览器还没有实现的api，对浏览器的一些缺陷做一些修补。例如Array新增了includes方法。它是以重载全局变量 （E.g: Promise）,还有原型和类上的静态方法（E.g：Array.prototype.reduce/Array.form），从而达到对 es6+ 的支持。不同于 babel-runtime 的是，babel-polyfill 是一次性引入你的项目中的，就像是 React 包一样，同项目代码一起编译到生产环境。它同样是引用了 core-js 和 regenerator，使用babel-node时，这个polyfill会自动加载。

## .babelrc

前面已经介绍了babel常用的一些模块，接下来看看babel的配置文件 .babelrc。

后面的后缀rc来自linux中，使用过linux就知道linux中很多rc结尾的文件，比如.bashrc，rc是run command的缩写，翻译成中文就是运行时的命令，表示程序执行时就会来调用这个文件。

babel所有的操作基本都会来读取这个配置文件，除了一些在回调函数中设置options参数的，如果没有这个配置文件，会从package.json文件的babel属性中读取配置。

## babel-plugin-transform-runtime

上面我们知道，transform-runtime 是为了方便使用 babel-runtime 的，它会分析我们的 ast 中，是否有引用 babel-rumtime 中的垫片（通过映射关系），如果有，就会在当前模块顶部插入我们需要的垫片。

## transform-runtime 对比 babel-polyfill

其实通过上面的介绍我们已经了解他们是干什么的了，这里再稍微总结区分一下吧。我在这里把 babel-runtime 和 babel-plugin-transform-runtime 统称为 transform-runtime，因为一起用才比较好。

- babel-polyfill 是当前环境注入这些 es6+ 标准的垫片，好处是引用一次，不再担心兼容，而且它就是全局下的包，代码的任何地方都可以使用。缺点也很明显，它可能会污染原生的一些方法而把原生的方法重写。如果当前项目已经有一个 polyfill 的包了，那你只能保留其一。而且一次性引入这么一个包，会大大增加体积。如果你只是用几个特性，就没必要了，如果你是开发较大的应用，而且会频繁使用新特性并考虑兼容，那就直接引入吧。

- transform-runtime 是利用 plugin 自动识别并替换代码中的新特性，你不需要再引入，只需要装好 babel-runtime 和 配好 plugin 就可以了。好处是按需替换，检测到你需要哪个，就引入哪个 polyfill，如果只用了一部分，打包完的文件体积对比 babel-polyfill 会小很多。而且 transform-runtime 不会污染原生的对象，方法，也不会对其他 polyfill 产生影响。所以 transform-runtime 的方式更适合开发工具包，库，一方面是体积够小，另一方面是用户（开发者）不会因为引用了我们的工具，包而污染了全局的原生方法，产生副作用，还是应该留给用户自己去选择。缺点是随着应用的增大，相同的 polyfill 每个模块都要做重复的工作（检测，替换），虽然 polyfill 只是引用，编译效率不够高效。

另外，关于 babel-runtime 为什么是 dependencies 依赖。它只是一个集中了 polyfill 的 library，对应需要的 polyfill 都是要引入项目中，并跟项目代码一起打包的。不过它不会都引入，你用了哪个，plugin 就给你 require 哪个。所以即使你最终项目只是 require('babel-runtime/core-js/object/values')其中的一个文件，但是对于这包来说，也是生产依赖的。

比较transform-runtime与babel-polyfill引入垫片的差异：

- 使用runtime是按需引入，需要用到哪些polyfill，runtime就自动帮你引入哪些，不需要再手动一个个的去配置plugins，只是引入的polyfill不是全局性的，有些局限性。而且runtime引入的polyfill不会改写一些实例方法，比如Object和Array原型链上的方法，像前面提到的Array.protype.includes。

- babel-polyfill就能解决runtime的那些问题，它的垫片是全局的，而且全能，基本上ES6中要用到的polyfill在babel-polyfill中都有，它提供了一个完整的ES6+的环境。babel官方建议只要不在意babel-polyfill的体积，最好进行全局引入，因为这是最稳妥的方式。

- 一般的建议是开发一些框架或者库的时候使用不会污染全局作用域的babel-runtime，而开发web应用的时候可以全局引入babel-polyfill避免一些不必要的错误，而且大型web应用中全局引入babel-polyfill可能还会减少你打包后的文件体积（相比起各个模块引入重复的polyfill来说）。

所以，一般项目中，安装babel-preset-env及babel-polyfill，然后在preset中按照需要进行配置应该就能满足基础需求。


参考资料：

https://www.csdn.net/apps/download/?code=pc_1555579859

https://blog.5udou.cn/blog/babel-preset-envSheng-Ji-Qian-Yi-Wan-Quan-Zhi-Bei-70

ie各版本报找不到promise
https://www.cnblogs.com/wonyun/p/8076453.html
