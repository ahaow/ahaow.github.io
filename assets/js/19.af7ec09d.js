(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{185:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("MVVM和MVC都是一种设计思想，主要就是MVC中的Controller演变成ViewModel,，MVVM主要通过数据来显示视图层而不是操作节点，解决了MVC中大量的DOM操作使页面渲染性能降低，加载速度慢，影响用户体验问题。主要用于数据操作比较多的场景。\n场景：数据操作比较多的场景，更加便捷")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("SPA (single-page application) 仅在Web页面初始化时就加载相应的HTML、Javascript和CSS.")]),t._v(" "),s("p",[t._v("一旦页面加载完毕,SPA不会因为用户的操作而进行页面的重新加载或跳转; 取而代之的是利用路由机制实现HTML内容的变化,UI与用户的交互,避免页面的重新加载")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("这个概念出现在组件通信。\n父组件是通过props把数据传递到子组件的，但是这个prop只能由父组件修改,子组件是不能修改的\n子组件想修改时,只能通过$emit派发一个自定义事件,父组件接收后,由父组件修改.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("computed: 计算属性,依赖其他属性值,并且computed的值有缓存,只有它依赖的属性值发生改变,下一次获取computed的值才会重新计算")]),t._v(" "),s("p",[t._v("watch: 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")]),t._v(" "),s("p",[t._v("运用场景：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("因为组件是用来复用的,js里对象是引用关系,这样作用域没有隔离,而new Vue的实例,是不会被复用的,因此不存在引用对象的问题")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("h2",{attrs:{id:"的作用和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#的作用和使用"}},[t._v("#")]),t._v(" "),s("keep-alive"),t._v("的作用和使用")],1),t._v(" "),s("p",[t._v("keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染")]),t._v(" "),s("p",[t._v("其有以下特性：")]),t._v(" "),t._m(23),t._v(" "),t._m(24)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue面试题"}},[this._v("#")]),this._v(" Vue面试题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是-mvvm，与-mvc-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvvm，与-mvc-有什么区别"}},[this._v("#")]),this._v(" 什么是 MVVM，与 MVC 有什么区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"spa单页面的理解及优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spa单页面的理解及优缺点"}},[this._v("#")]),this._v(" SPA单页面的理解及优缺点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("用户体验好，快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重新渲染；")]),this._v(" "),e("li",[this._v("SPA相对对服务器压力小")]),this._v(" "),e("li",[this._v("前后端职责分离，前端进行交互逻辑，后端处理数据处理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),this._v(" "),e("li",[this._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),this._v(" "),e("li",[this._v("SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"怎样理解单向数据流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎样理解单向数据流"}},[this._v("#")]),this._v(" 怎样理解单向数据流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[this._v("#")]),this._v(" 生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/10/19/Kn4wxe.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在哪个生命周期内调用异步请求？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在哪个生命周期内调用异步请求？"}},[this._v("#")]),this._v(" 在哪个生命周期内调用异步请求？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("能更快获取到服务端数据，减少页面 loading 时间；")]),this._v(" "),e("li",[this._v("ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v-show-和-v-if的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-show-和-v-if的区别"}},[this._v("#")]),this._v(" v-show 和 v-if的区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("v-show 是 css切换 是display block/none的切换, 而 v-if是完整的销毁和重新创建")]),this._v(" "),e("li",[this._v("使用频繁切换用v-show")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"计算属性和watch的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算属性和watch的区别"}},[this._v("#")]),this._v(" 计算属性和watch的区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")])]),this._v(" "),e("li",[e("p",[this._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"组件中data为什么是函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件中data为什么是函数"}},[this._v("#")]),this._v(" 组件中data为什么是函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v-model-的原理？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-model-的原理？"}},[this._v("#")]),this._v(" v-model 的原理？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"组件之间的通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件之间的通信"}},[this._v("#")]),this._v(" 组件之间的通信")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("父子 "),s("code",[t._v("props/event")]),t._v(" "),s("code",[t._v("$parent/$children")]),t._v(" "),s("code",[t._v("ref")]),t._v(" "),s("code",[t._v("provide/inject")])]),t._v(" "),s("li",[t._v("兄弟 "),s("code",[t._v("EventBus")]),t._v(" "),s("code",[t._v("vuex")])]),t._v(" "),s("li",[t._v("跨级 "),s("code",[t._v("EventBus")]),t._v(" "),s("code",[t._v("vuex")]),t._v(" "),s("code",[t._v("provide inject")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue2-x双向绑定原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x双向绑定原理"}},[this._v("#")]),this._v(" Vue2.x双向绑定原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[this._v("#")]),this._v(" nextTick()")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-router有哪几种导航钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router有哪几种导航钩子"}},[this._v("#")]),this._v(" vue-router有哪几种导航钩子")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("全局导航钩子：router.beforeEach(to,from,next) 作用：跳转前进行拦截判断")]),this._v(" "),e("li",[this._v("组件内的钩子")]),this._v(" "),e("li",[this._v("单独路由独享组件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("一般结合路由和动态组件一起使用，用于缓存组件；")]),this._v(" "),e("li",[this._v("提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；")]),this._v(" "),e("li",[this._v("对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue中key值的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中key值的作用"}},[this._v("#")]),this._v(" Vue中key值的作用")])}],!1,null,null,null);e.default=i.exports}}]);