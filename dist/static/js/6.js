webpackJsonp([6],{QkJ2:function(t,e){},dMJG:function(t,e){},gejy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Cz8s"),n=a("MQwy"),s={data:function(){return{rewardData:"",tableData:[{payTime:"2021-10-23",name:"智障少女欢乐多",money:"188"},{payTime:"2021-10-28",name:"刺猬",money:"50"},{payTime:"2021-11-03",name:"迅捷小鹿",money:"30"}]}},methods:{showInitDate:function(t,e){return initDate(t,e)}},components:{},created:function(){}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tRewardBox tcommonBox"},[t._m(0),t._v(" "),a("section",[t._m(1),t._v(" "),a("h1",[t._v("赞赏说明：")]),t._v(" "),a("p",[t._v("\n      如果我的课程对你有所帮助，你可以请作者喝杯咖啡表示鼓励\n      ☕️)请备注留下你的姓名/昵称方便我公布赞赏记录。\n    ")]),t._v(" "),a("hr"),t._v(" "),a("h1",[t._v("赞赏方式：")]),t._v(" "),a("el-row",{attrs:{gutter:30}},[a("el-col",{staticClass:"donate-item",attrs:{span:12}},[a("div",{staticClass:"donate-tip"},[a("img",{attrs:{src:t.rewardData.wechat_image?t.rewardData.wechat_image:"static/img/wx_pay.png",onerror:t.$store.state.errorImg}}),t._v(" "),a("span",[t._v("微信扫一扫，请我喝杯咖啡")])])]),t._v(" "),a("el-col",{staticClass:"donate-item",attrs:{span:12}},[a("div",{staticClass:"donate-tip"},[a("img",{attrs:{src:t.rewardData.alipay_image?t.rewardData.alipay_image:"static/img/ali_pay.jpg",onerror:t.$store.state.errorImg}}),t._v(" "),a("span",{staticStyle:{"padding-top":"14px"}},[t._v("支付宝扫一扫，请我喝杯咖啡")])])])],1),t._v(" "),a("h1",[t._v("@赞赏记录：")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"payTime",label:"日期",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"赞赏人",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"money",label:"金额",align:"center"}})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[e("a",{attrs:{href:"#/DetailShare",target:"_blank"}},[this._v(" 赞赏 ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"coffee",staticStyle:{"max-width":"20%"},attrs:{src:"static/img/coffee.jpg",alt:""}})])}]};var l=a("VU/8")(s,i,!1,function(t){a("dMJG")},null,null).exports,o={name:"Reward",data:function(){return{}},methods:{},components:{"sg-nav":r.a,"sg-reward":l,"sg-rightlist":n.a},created:function(){}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("sg-nav"),this._v(" "),e("div",{staticClass:"group-container"},[e("el-row",{attrs:{gutter:30}})],1)],1)},staticRenderFns:[]};var m=a("VU/8")(o,c,!1,function(t){a("QkJ2")},null,null);e.default=m.exports}});