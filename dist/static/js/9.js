webpackJsonp([9],{KDll:function(t,e){},"q+OL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Cz8s"),c=a("p/61"),i=a("s8Ph"),o=(a("1pQF"),a("mtWM"),{name:"AllDataShow",data:function(){return{totalPage:10,searchText:"",showSearchResults:!1,searchResults:[],searchTextShow:"",selectedDatabase:1,selectedDatabaseName:"",selectedCategory:5,selectedCategoryName:"",CategoryObjMinID:10086,DatabaseObj:{},CategoryObj:{},CategoryAll:{},keyWordList:{},pageSize:15,currentPage:1,inputPage:1}},created:function(){this.selectedDatabase=1,this.selectedCategory=5,this.getCategory()},mounted:function(){},computed:{currentPageData:function(){var t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.searchResults.slice(t,e)}},methods:{getTotalPage:function(){this.totalPage=Math.ceil(this.searchResults.length/this.pageSize)},getCategory:function(){var t=this;Object(i.a)().then(function(e){t.DatabaseObj=e.filter(function(t){return-1===t.pid}),t.selectedDatabaseName=t.DatabaseObj[t.selectedDatabase-1].name,t.CategoryAll=e,t.CategoryObj=e.filter(function(t){return-1!==t.pid}),t.CategoryObjMinID=t.CategoryObj[0].id,t.sendSearchText()})},getCategoryName:function(t){return this.CategoryAll.filter(function(e){return e.id===t})[0].name},handleCategoryClick:function(t){this.selectedCategory=t.id,this.sendSearchText()},handleDatabaseyClick:function(t){t.id!=this.selectedDatabase?this.selectedDatabase=t.id:this.selectedDatabase=-1,this.sendSearchText()},gotoDetail:function(t){this.$router.push({path:"/DetailData?id="+t})},sendSearchText:function(){var t=this,e=this.searchText,a={searchContent:e,categoryId:this.selectedCategory};this.showSearchResults=!0,this.searchTextShow=e,this.$http.post("/content/search",a).then(function(e){t.searchResults=e.data.data}).catch(function(t){console.error(t)})},splitKeyWord:function(t){return t.split(";")},collectData:function(t){var e=this,a=localStorage.getItem("userInfo");a?this.$confirm("是否添加进您的收藏列表?","收藏提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={userId:JSON.parse(a).id,contentId:t};e.$http.post("/collect/collect",n).then(function(t){200==t.data.code?e.$alert("收藏成功！","提示",{confirmButtonText:"确定",callback:function(t){}}):e.$alert("收藏失败,您的收藏列表中已存在该数据！","提示",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(t){console.error(t)})}).catch(function(){}):this.$confirm("您还未登录，是否进入登录界面?","登录提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push({path:"/Login?login=1"})}).catch(function(){})},handlePageChange:function(t){this.currentPage=t},shoppingOption:function(t){var e=this,a=localStorage.getItem("userInfo");a?this.$confirm("是否添加进您的购物车列表?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={userId:JSON.parse(a).id,contentId:t};e.$http.post("/shopping/addToShoppingCar",n).then(function(t){200==t.data.code?e.$alert("添加成功！","提示",{confirmButtonText:"确定",callback:function(t){}}):e.$alert("添加失败,您的购物车中已存在该数据！","提示",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(t){console.error(t)})}).catch(function(){}):this.$confirm("您还未登录，是否进入登录界面?","登录提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push({path:"/Login?login=1"})}).catch(function(){})}},components:{"boji-navbar":n.a,"boji-webinfo":c.a}}),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-container"},[a("boji-navbar"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"dataMenuContainer"},[a("div",{staticClass:"databaseNav"},t._l(t.DatabaseObj,function(e){return"4"!=e.id?a("div",{key:e.id,staticClass:"navDatabaseSelection"},[a("div",{class:["databaseNameBox ",{active:e.id===t.selectedDatabase}],on:{click:function(a){return t.handleDatabaseyClick(e)}}},[t._v(t._s(e.name))]),t._v(" "),t._l(t.CategoryObj,function(n){return n.pid===e.id&&e.id===t.selectedDatabase?a("div",{key:n.id,class:["categoryNameBox ",{active:n.id===t.selectedCategory}],on:{click:function(e){return t.handleCategoryClick(n)}}},[t._v(t._s(n.name))]):t._e()})],2):t._e()}),0),t._v(" "),a("div",{staticClass:"dataListShow"},[a("el-table",{staticStyle:{width:"100%","font-weight":"700","font-size":"18px","margin-bottom":"40px"},attrs:{data:t.currentPageData,onload:"false"}},[a("el-table-column",{attrs:{prop:"dataid",align:"center",label:"数据编号","label-class-name":"labelTitle"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",align:"center",label:"题名","label-class-name":"labelTitle"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark1",align:"center",label:"关键词","label-class-name":"labelTitle"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description",align:"center",label:"内容","label-class-name":"labelTitle"}}),t._v("\n>\n            ")],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[t.pageSize],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.searchResults.length},on:{"current-change":t.handlePageChange}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navBox"},[e("div",{staticClass:"logoBox"})])}]};var r=a("VU/8")(o,s,!1,function(t){a("KDll")},"data-v-556c16e6",null);e.default=r.exports}});