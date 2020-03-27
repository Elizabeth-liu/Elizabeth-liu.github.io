(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{188:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("Consult the "),s("router-link",{attrs:{to:"./../config/"}},[t._v("Config Reference")]),t._v(" for a full list of options.")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("A VuePress theme is responsible for all the layout and interactivity details of your site. VuePress ships with a default theme (you are looking at it right now) which is designed for technical documentation. It exposes a number of options that allow you to customize the navbar, sidebar and homepage, etc. For details, check out the "),s("router-link",{attrs:{to:"./../default-theme-config/"}},[t._v("Default Theme Config")]),t._v(" page.")],1),t._v(" "),s("p",[t._v("If you wish to develop a custom theme, see "),s("router-link",{attrs:{to:"./custom-themes.html"}},[t._v("Custom Themes")]),t._v(".")],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"config-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Config File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let's first create a "),e("code",[this._v(".vuepress")]),this._v(" directory inside your docs directory. This is where all VuePress-specific files will be placed in. Your project structure is probably like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The essential file for configuring a VuePress site is "),e("code",[this._v(".vuepress/config.js")]),this._v(", which should export a JavaScript object:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Hello VuePress'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Just playing around'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you've got the dev server running, you should see the page now has a header with the title and a search box. VuePress comes with built-in headers-based search - it automatically builds a simple search index from the title, "),e("code",[this._v("h2")]),this._v(" and "),e("code",[this._v("h3")]),this._v(" headers from all the pages.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Alternative Config Formats")]),this._v(" "),e("p",[this._v("You can also use YAML ("),e("code",[this._v(".vuepress/config.yml")]),this._v(") or TOML ("),e("code",[this._v(".vuepress/config.toml")]),this._v(") formats for the configuration file.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"theme-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Theme Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"app-level-enhancements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements","aria-hidden":"true"}},[this._v("#")]),this._v(" App Level Enhancements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Since the VuePress app is a standard Vue app, you can apply app-level enhancements by creating a file "),e("code",[this._v(".vuepress/enhanceApp.js")]),this._v(", which will be imported into the app if it is present. The file should "),e("code",[this._v("export default")]),this._v(" a hook function which will receive an object containing some app level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// the version of Vue being used in the VuePress app")]),t._v("\n  options"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// the options for the root Vue instance")]),t._v("\n  router"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// the router instance for the app")]),t._v("\n  siteData "),s("span",{attrs:{class:"token comment"}},[t._v("// site metadata")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...apply enhancements to the app")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="basic-config.md";e.default=n.exports}}]);