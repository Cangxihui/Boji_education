webpackJsonp([11],{WMnc:function(e,t){},psK5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Cz8s"),n=a("p/61"),i=a("vMJZ"),r=(a("IcnI"),a("mtWM"),{name:"UserInfo",data:function(){return{isEdit:!1,userInfo:{},userInfoObj:"",selectedTag:"1",searchResults:[],pageSize:8,currentPage:1,inputPage:1,totalPage:10,haslogin:!1}},computed:{currentPageData:function(){var e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return this.searchResults.slice(e,t)}},methods:{handleAvatarSuccess:function(e,t){200==e.code?(this.userInfoObj.avatar=e.data,this.userInfoObj.head_start=1):this.$message.error("上传图片失败")},beforeAvatarUpload:function(e){var t="image/png"==e.type||"image/jpg"==e.type||"image/jpeg"==e.type,a=e.size/1024/1024<1;return t||this.$message.error("上传头像图片只能是 JPG/JPEG/PNG 格式!"),a||this.$message.error("上传头像图片大小不能超过 1MB!"),t&&a},saveInfoFun:function(){var e=this;e.userInfoObj.nickName?Object(i.c)(e.userInfoObj).then(function(t){e.$message.success("保存成功！"),e.isEdit=!1,e.routeChange()}):e.$message.error("昵称为必填项，请填写昵称")},handleTypeSelect:function(e){this.selectedTag=e,this.searchUserCase()},getTotalPage:function(){this.totalPage=Math.ceil(this.searchResults.length/this.pageSize)},searchUserCase:function(){var e=this,t={userId:this.userInfoObj.id,searchType:this.selectedTag};this.$http.post("/shoppingcase/SearchShoppingCase",t).then(function(t){e.searchResults=t.data.data,e.getTotalPage()}).catch(function(e){console.error(e)})},handlePageChange:function(e){this.currentPage=e},routeChange:function(){localStorage.getItem("userInfo")?(this.haslogin=!0,this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.userInfoObj=this.userInfo,console.log(this.userInfo)):this.haslogin=!1}},components:{"boji-navbar":s.a,"boji-webinfo":n.a},watch:{$route:"routeChange"},created:function(){localStorage.getItem("userInfo")?(this.haslogin=!0,this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.userInfoObj=this.userInfo,console.log(this.userInfo)):this.haslogin=!1,this.routeChange(),this.selectedTag="1",this.searchUserCase()}}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background"},[a("boji-navbar"),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"container"},[a("section",[a("h1",{staticStyle:{"font-size":"32px","font-weight":"700",width:"100%","background-color":"rgb(236, 244, 252)",padding:"5px","border-radius":"10px"}},[e._v("个人中心")]),e._v(" "),a("ul",{staticClass:"userInfoBox",staticStyle:{padding:"0px","font-size":"16px","font-weight":"400px",color:"grey"}},[a("li",{staticClass:"username",staticStyle:{margin:"10px",padding:"0px"}},[a("span",{staticClass:"leftTitle",staticStyle:{"font-weight":"600"}},[e._v("昵称:")]),e._v(" "),a("span",[e._v(e._s(e.userInfoObj.nickname?e.userInfoObj.nickname:"无"))])]),e._v(" "),a("li",{staticStyle:{margin:"5px",padding:"0px"}},[a("span",{staticClass:"leftTitle",staticStyle:{"font-weight":"600"}},[e._v("电子邮件:")]),e._v(" "),a("span",[e._v(e._s(e.userInfoObj.email?e.userInfoObj.email:"无"))])])])]),e._v(" "),a("div",{staticClass:"case-container"},[a("div",{staticClass:"type-select",staticStyle:{display:"flex","flex-direction":"row","background-color":"rgb(247, 239, 230)",width:"100%",height:"50px","justify-content":"center","align-items":"center"}},[a("div",{class:["case-type",{active:"1"===e.selectedTag}],staticStyle:{width:"33.33%"},on:{click:function(t){return e.handleTypeSelect("1")}}},[e._v("已完成订单")]),e._v(" "),a("div",{class:["case-type",{active:"2"===e.selectedTag}],staticStyle:{width:"33.33%"},on:{click:function(t){return e.handleTypeSelect("2")}}},[e._v("未完成订单")]),e._v(" "),a("div",{class:["case-type",{active:"3"===e.selectedTag}],staticStyle:{width:"33.33%"},on:{click:function(t){return e.handleTypeSelect("3")}}},[e._v("过期订单")])]),e._v(" "),a("div",{staticClass:"caseDetail"},[a("el-table",{staticStyle:{width:"100%","font-weight":"600","font-size":"16px","margin-bottom":"40px","overflow-y":"auto"},attrs:{data:e.currentPageData,onload:"false"}},[a("el-table-column",{staticStyle:{"margin-left":"4px"},attrs:{prop:"casetype",label:"订单类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["01"==t.row.casetype?a("span",[e._v("单条数据")]):e._e(),e._v(" "),"02"==t.row.casetype?a("span",[e._v("包库")]):e._e(),e._v(" "),"03"==t.row.casetype?a("span",[e._v("充值")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"casedate",align:"center",label:"订单时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"money",align:"center",label:"订单金额(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.money/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"remark1",align:"center",label:"备注信息"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[8],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.searchResults.length},on:{"current-change":e.handlePageChange}})],1)])]),e._v(" "),a("boji-webinfo")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"navBox"},[t("div",{staticClass:"logoBox"})])}]};var c=a("VU/8")(r,o,!1,function(e){a("WMnc")},"data-v-36956d90",null);t.default=c.exports}});