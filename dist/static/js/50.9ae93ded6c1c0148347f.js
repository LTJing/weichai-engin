webpackJsonp([50],{"6AkQ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Gu7T"),i=a.n(n),o=a("Dd8w"),s=a.n(o),r=a("woOf"),d=a.n(r),l=a("//Fk"),c=a.n(l),m=a("8urd"),h=a("TVG1"),f=a("jmEP"),u=a("G8pB"),p={name:"area-manage",i18n_prefix:"page.area-manage",components:{OrgSelect:f.a,customDrawer:u.a},data:function(){return{flag:0,nodeMap:{},title:"",ids:[],formFilter:{orgName:""},newData:[],oldData:[],formList:[],formValue:{},id:"",treeLoading:!1,formValidate:{name:[{required:!0,message:"区域名称不能为空",trigger:"blur"}]},searchKey:[],allData:[],buttonProps:{type:"text",size:"small"},type:""}},methods:{checkFrom:function(){var e=this;return new c.a(function(t,a){e.$refs.formAdd.validate(function(e,n){e?t():a(e,n)})})},checkFrom1:function(){var e=this;return new c.a(function(t,a){e.$refs.formEdit.validate(function(e,n){e?t():a(e,n)})})},renderContent:function(e,t){var a=this,n=t.root,i=t.node,o=t.data,s=void 0,r=void 0;return 0===i.nodeKey?(r={style:{width:this.$flexible(202)+"px",fontSize:this.$flexible(14)+"px"}},s="操作"):(r={class:"span-right"},s=[e("Button",{props:d()({},this.buttonProps),class:"primary",style:{marginLeft:0,paddingLeft:0,color:"#0084FF"},on:{click:function(){a.showDrawer("edit",n,i,o)}}},"编辑"),e("Button",{props:d()({},this.buttonProps),class:"primary",style:{color:"#0084FF"},on:{click:function(){a.showDrawer("child",n,i,o)}}},"新增下级区域"),e("Button",{props:d()({},this.buttonProps),class:"secondary",style:{color:"#F12121"},on:{click:function(){a.remove(n,i,o)}}},"删除")]),e("li",{class:"li-box",style:{display:"flex",width:"100%",background:i.nodeKey%2==0?"rgba(0,0,0,.3)":"#262C3A",zIndex:0}},[e("span",{class:"span-title-right",style:{display:"flex",alignItems:"center"}},[e("span",{class:"span-title",style:{cursor:"pointer"}},o.title)]),e("span",r,s)])},handleEidt:function(e){},passCancel:function(){this.flag=0,this.modal1=!1},ok:function(){var e=this;this.checkFrom().then(function(){e.modal1=!e.modal1,e.id?Object(m.a)(s()({},e.formAdd,{id:e.id})).then(function(){e.$Message.success(e.$t("common.message.edit_success"));var t=e.nodeMap[e.formAdd.oldNode];e.formAdd.data.parentId=e.formAdd.parentId,e.formAdd.data.orgName=e.formAdd.orgName,e.formAdd.data.title=e.formAdd.orgName;var a=e.nodeMap[e.formAdd.parentId];a&&a.children.push(e.formAdd.data);var n=t.children.indexOf(e.formAdd.data);t.children.splice(n,1)},function(t){1e3==t.code?e.$Message.warning(t.msg):e.$Message.warning(e.$t("common.message.edit_fail"))}):Object(m.b)(e.formAdd).then(function(t){200===t.code?(e.$Message.success(e.$t("common.message.add_success")),e.getData()):1e3==t.code?e.$Message.warning(t.msg):e.$Message.warning(e.$t("common.message.add_fail"))})})},getIds:function(e){var t=this;e.map(function(e){t.ids.push(e.id),e.expand&&e.hasChild>0&&t.getIds(e.children)})},cancel:function(){this.$Message.info("Clicked cancel")},showDrawer:function(e,t,a,n){this.$refs.drawer.open(),this.type=e,"all"===e?(this.title="新增区域",this.formList=[{type:"input",label:"区域名称",placeholder:"请输入区域名称",value:"name"},{type:"area-select",label:"上级区域",placeholder:"请选择区域",value:"parentId"}],this.formValue={name:"",parentId:void 0}):"child"===e?(this.title="新增下级区域",this.formList=[{type:"input",label:"区域名称",placeholder:"请输入区域名称",value:"name"},{type:"input",label:"上级区域",placeholder:"请选择区域",value:"parent"}],this.formValue={name:"",parent:n.orgName,parentId:n.id}):(this.title="编辑区域",this.formList=[{type:"input",label:"区域名称",placeholder:"请输入区域名称",value:"name"},{type:"area-select",label:"上级区域",placeholder:"请选择区域",value:"parentId"}],console.log("---------",n),this.formValue={name:n.orgName,id:n.id,parentId:n.parentId})},confirm:function(e){if(e)switch(this.type){case"all":case"child":this.addAll();break;case"edit":this.edit()}},addAll:function(){var e=this;this.formValue.name&&Object(m.b)({orgName:this.formValue.name,parentId:this.formValue.parentId}).then(function(t){200===t.code?(e.$Message.success(e.$t("common.message.add_success")),e.$refs.drawer.close(),e.formValue={name:"",parent:""},e.getData()):e.$Message.error(e.$t("common.message.add_fail"))})},edit:function(){var e=this;this.formValue.name&&Object(m.a)({id:this.formValue.id,orgName:this.formValue.name,parentId:this.formValue.parentId}).then(function(t){200===t.code?(e.$Message.success(e.$t("common.message.edit_success")),e.$refs.drawer.close(),e.formValue={},e.getData()):e.$Message.warning(e.$t("common.message.edit_fail"))})},EditArea:function(e,t,a){console.log(e,t,a),this.title=this.$t_p("edit_area_title"),this.flag=1,this.id=a.id,this.formAdd={orgName:a.orgName,parentId:a.parentId,oldNode:a.parentId,alias:a.alias,data:a,root:e,node:t},this.modal1=!0},okNext:function(){var e=this;this.checkFrom1().then(function(){Object(m.b)(e.formEdit).then(function(t){e.$Message.success(e.$t("common.message.add_success")),e.modal=!e.modal,e.loadNextLevelData(e.formEdit.parent)},function(t){e.modal=!e.modal,1e3===t.code?e.$Message.warning(t.msg):e.$Message.warning(e.$t("common.message.add_fail"))})})},append:function(e,t,a){console.log(a),this.modal=!0,this.formEdit={orgName:"",parentId:a.id,alias:" ",parent:a}},remove:function(e,t,a){var n=this;this.$Modal.confirm({title:this.$t("common.text.prompt"),width:this.$flexible(450),content:this.$t_p("confirm_deletion")+"["+a.orgName+"]?",onOk:function(){Object(m.c)({id:a.id}).then(function(i){if(200===i.code){var o=e.find(function(e){return e===t}).parent,s=e.find(function(e){return e.nodeKey===o}).node,r=s.children.indexOf(a);s.children.splice(r,1),n.$Message.success(n.$t("common.message.delete_success"))}else 1e3===i.code?n.$Message.warning(i.msg):n.$Message.warning(n.$t("common.message.delete_fail"))})}})},onTreeExpandToggle:function(e){0==e.loadState&&this.loadNextLevelData(e)},getData:function(){var e=this;this.treeLoading=!0,Object(m.e)({level:1}).then(function(t){var a={};e.oldData=Object(h.l)(t.data||[],function(t,n){var i=t.children&&t.children.length>0||1!=t.hasChild?1:0,o={title:t.orgName,id:t.id,expand:!1,orgName:t.orgName,parentId:t.parentId,hasChild:t.hasChild,loadState:i,level:n,children:i?t.children:1==t.hasChild?[{title:e.$t("common.message.loading")}]:[]};return o.expand=!1,o._orig=o,a[t.id]=o,e.nodeMap=s()({},e.nodeMap,a),o}),e.allData=[].concat(i()(e.oldData)),e.getIds(e.oldData)}).finally(function(){e.treeLoading=!1})},loadNextLevelData:function(e){var t=this;e.loadState=1,Object(m.f)({parentId:e.id}).then(function(a){var n={},i=Object(h.l)(a.data||[],function(e,a){var i=e.children&&e.children.length>0||1!=e.hasChild?1:0,o={title:e.orgName,id:e.id,expand:!1,orgName:e.orgName,parentId:e.parentId,hasChild:e.hasChild,loadState:i,level:a,children:i?e.children:1==e.hasChild?[{title:t.$t("common.message.loading")}]:[]};return o._orig=o,n[e.id]=o,t.nodeMap=s()({},t.nodeMap,n),o});e.children=i,t.nodeMap[""+e.id].children=i,t.getIds(i)}).catch(function(){e.loadState=0})},searchData:function(e,t){var a=this;this.newData=[],e.filter(function(e){e.orgName.indexOf(t)>=0?a.newData.push(e):e.hasChild>0&&1==e.loadState&&a.searchData(e.children,t)})},handleSearch:function(){var e=this.formFilter.alias;""==e?this.allData=this.oldData:(this.searchData(this.oldData,e),this.allData=this.newData)},changeData:function(){this.handleSearch()}},watch:{"formFilter.alias":function(e){this.handleSearch()}},mounted:function(){this.getData(),console.log(this.buttonProps)}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"area-manage"},[a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("div",{staticClass:"add-btn"},[a("Button",{attrs:{type:"default"},on:{click:function(t){e.showDrawer("all")}}},[a("span",{staticClass:"iconfont icon-a-lianhe68"}),e._v("\n        新增\n      ")])],1),e._v(" "),a("div",{staticClass:"content-box"},[a("div",{staticClass:"content-content"},[a("Tree",{attrs:{data:e.allData,loading:e.treeLoading,render:e.renderContent},on:{"on-toggle-expand":e.onTreeExpandToggle}})],1)]),e._v(" "),a("custom-drawer",{ref:"drawer",attrs:{title:e.title,formValidate:e.formValidate,formList:e.formList,flag:e.flag,id:e.id},on:{confirm:e.confirm},model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-sub"},[t("div",{staticClass:"title"},[t("div",{staticClass:"breadcrumb-item-link"},[this._v("区域管理")]),this._v(" "),t("span",{staticClass:"empty"})])])}]};var v=a("VU/8")(p,g,!1,function(e){a("l2BM")},null,null).exports;t.default=v},l2BM:function(e,t){}});
//# sourceMappingURL=50.9ae93ded6c1c0148347f.js.map