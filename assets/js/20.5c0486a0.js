(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{189:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The following guides are based on a few shared assumptions:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("ol",[e("li",[e("p",[t._v("Make sure you have "),e("a",{attrs:{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("firebase-tools"),e("OutboundLink")],1),t._v(" installed.")])]),t._v(" "),t._m(15)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),e("ol",[e("li",[e("p",[t._v("First install "),e("a",{attrs:{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"}},[t._v("surge"),e("OutboundLink")],1),t._v(", if you haven't already.")])]),t._v(" "),t._m(22),t._v(" "),t._m(23)]),t._v(" "),e("p",[t._v("You can also deploy to a "),e("a",{attrs:{href:"http://surge.sh/help/adding-a-custom-domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom domain"),e("OutboundLink")],1),t._v(" by adding "),e("code",[t._v("surge docs/.vuepress/dist yourdomain.com")]),t._v(".")]),t._v(" "),t._m(24),t._v(" "),e("ol",[e("li",[e("p",[t._v("First install "),e("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku CLI"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a Heroku account "),e("a",{attrs:{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(25)]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),e("p",[t._v("This is the configuration of your site. see more at "),e("a",{attrs:{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("heroku-buildpack-static"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"deploying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("You are placing your docs inside the "),e("code",[t._v("docs")]),t._v(" directory of your project;")]),t._v(" "),e("li",[t._v("You are using the default build output location ("),e("code",[t._v(".vuepress/dist")]),t._v(");")]),t._v(" "),e("li",[t._v("VuePress is installed as a local dependency in your project, and you have setup the following npm scripts:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub Pages")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("Set correct "),e("code",[t._v("base")]),t._v(" in "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME>.github.io/")]),t._v(", you can omit "),e("code",[t._v("base")]),t._v(" as it defaults to "),e("code",[t._v('"/"')]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v(", (i.e. your repository is at "),e("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("), set "),e("code",[t._v("base")]),t._v(" to "),e("code",[t._v('"/<REPO>/"')]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Inside your project, create "),e("code",[t._v("deploy.sh")]),t._v(" with the following content (with highlighted lines uncommented appropriately) and run it to deploy:")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# abort on errors")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# build")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# navigate into the build output directory")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# if you are deploying to a custom domain")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" -\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("You can also run the above script in your CI setup to enable automatic deployment on each push.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gitlab-pages-and-gitlab-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages-and-gitlab-ci","aria-hidden":"true"}},[this._v("#")]),this._v(" GitLab Pages and GitLab CI")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("Set correct "),e("code",[t._v("base")]),t._v(" in "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/")]),t._v(", you can omit "),e("code",[t._v("base")]),t._v(" as it defaults to "),e("code",[t._v('"/"')]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/<REPO>/")]),t._v(", (i.e. your repository is at "),e("code",[t._v("https://gitlab.com/<USERNAME>/<REPO>")]),t._v("), set "),e("code",[t._v("base")]),t._v(" to "),e("code",[t._v('"/<REPO>/"')]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Set "),e("code",[t._v("dest")]),t._v(" in "),e("code",[t._v(".vuepress/config.js")]),t._v(" to "),e("code",[t._v("public")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a file called "),e("code",[t._v(".gitlab-ci.yml")]),t._v(" in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9.11.1\n\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("pages")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("cache")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/\n\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("artifacts")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public\n  "),e("span",{attrs:{class:"token key atrule"}},[t._v("only")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[this._v("#")]),this._v(" Netlify")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("On Netlify, setup up a new project from GitHub with the following settings:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("Build Command:")]),t._v(" "),e("code",[t._v("npm run docs:build")]),t._v(" or "),e("code",[t._v("yarn docs:build")])]),t._v(" "),e("li",[e("strong",[t._v("Publish directory:")]),t._v(" "),e("code",[t._v("docs/.vuepress/dist")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("Hit the deploy button!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"google-firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-firebase","aria-hidden":"true"}},[this._v("#")]),this._v(" Google Firebase")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Create "),s("code",[this._v("firebase.json")]),this._v(" and "),s("code",[this._v(".firebaserc")]),this._v(" at the root of your project with the following content:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("firebase.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{attrs:{class:"token property"}},[t._v('"hosting"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{attrs:{class:"token property"}},[t._v('"public"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{attrs:{class:"token property"}},[t._v('"ignore"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v(".firebaserc")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{attrs:{class:"token string"}},[t._v('"projects"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{attrs:{class:"token string"}},[t._v('"default"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"<YOUR_FIREBASE_ID>"')]),t._v("\n "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("After running "),s("code",[this._v("yarn docs:build")]),this._v(" or "),s("code",[this._v("npm run docs:build")]),this._v(", deploy with the command "),s("code",[this._v("firebase deploy")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"surge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[this._v("#")]),this._v(" Surge")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Run "),s("code",[this._v("yarn docs:build")]),this._v(" or "),s("code",[this._v("npm run docs:build")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Deploy to surge, by typing "),s("code",[this._v("surge docs/.vuepress/dist")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"heroku"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[this._v("#")]),this._v(" Heroku")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Run "),s("code",[this._v("heroku login")]),this._v(" and fill in your Heroku credentials:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("heroku login\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("Create a file called "),s("code",[this._v("static.json")]),this._v(" in the root of your project with the content below:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("static.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"root"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("Set up your Heroku git remote:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# version change")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),e("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{attrs:{class:"token string"}},[t._v('"My site ready for deployment."')]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# creates a new app with a specified name")]),t._v("\nheroku apps:create example\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# set buildpack for static sites")]),t._v("\nheroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"6"}},[s("li",[this._v("Deploying Your Site")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# publish site")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# opens a browser to view the Dashboard version of Heroku CI")]),t._v("\nheroku "),e("span",{attrs:{class:"token function"}},[t._v("open")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="deploy.md";s.default=n.exports}}]);