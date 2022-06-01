webpackJsonp([37],{"96wA":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("S1ZC"),o=a("jpo7"),i=a("jmEP"),s=a("xXZE"),l={name:"report-list",components:{StatusSelect:n.a,LaboratoryList:o.a,OrgSelect:i.a},i18n_prefix:"page.report-manage.report-generate",data:function(){var t=this;return{search:{type:"",name:"",code:"",test:"",version:""},pageInfo:{loading:!1,pageIndex:1,pageSize:10,totalElements:30},tableData:[{name:1}],maxlength:50,tableColumns:[{title:"报告名称",key:"name",align:"left"},{title:"本地地址",key:"path",align:"left"},{title:"操作",key:"action",width:300,align:"center",render:function(e,a){return e("div",[e("span",{class:"primary",style:{color:"#0084FF"},on:{click:function(){t.action(a.row,"edit")}}},t.$t_p("edit")),e("span",{class:"primary",style:{color:"#0084FF"},on:{click:function(){t.action(a.row,"putout")}}},"导出"),e("span",{class:"secondary",style:{color:"#F12121"},on:{click:function(){t.action(a.row,"delete")}}},t.$t_p("delete"))])}}],drawer:!1,form:{name:"",type:""},status:"",formConfig:{name:{label:"请确认设备名称"},type:{label:""}},title:"",currentIndex:0}},mounted:function(){this.loadTableData()},methods:{loadTableData:function(){var t,e=this;this.pageInfo.loading=!0,(t={pageSize:this.pageInfo.pageSize,pageNumber:this.pageInfo.pageIndex,name:this.search.type},s.a.request({url:"/jmreport/fileRecordList",params:t,method:"get"})).then(function(t){200===t.code&&(e.tableData=t.result.data,e.pageInfo.totalElements=t.result.totalElement)}).finally(function(){e.pageInfo.loading=!1})},addItem:function(){},onRowClick:function(){},onPaginationChange:function(t){this.pageInfo.pageIndex=t,this.loadTableData()},onPaginationSizeChange:function(t){this.pageInfo.pageSize=t,this.loadTableData()},rowClassName:function(t,e){if(t.id==this.currentIndex)return"demo-table-info-row"},openDrawer:function(t){this.drawer=!0,this.status=t,this.formConfig.type.label="start"===this.status?"选择启动方式":"stop"===this.status?"选择停止方式":"选择系统控制参数",this.title="start"===this.status?"启动":"stop"===this.status?"停止":"测试"},action:function(t,e){var a=this;"edit"===e?this.$router.push({path:"/report-generate",query:{id:t.urlId}}):"putout"===e?window.location.href=window.location.origin+"/device-ai/"+t.url:this.$Modal.confirm({title:this.$t("common.text.prompt"),width:this.$flexible(450),content:this.$t("common.text.confirm_title",{name:"报告名称"})+"["+t.name+"]的报告吗?",onOk:function(){(function(t){return s.a.request({url:"/jmreport/deleteReport",data:t,method:"post"})})({id:t.id}).then(function(){a.$Message.success(a.$t("common.message.delete_success")),a.loadTableData()},function(){a.$Message.warning(a.$t("common.message.delete_fail"))})}})},confirm:function(){},passCancel:function(){}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report-generate"},[a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticClass:"filter-input"},[a("Input",{staticClass:"filter-input",attrs:{maxlength:t.maxlength,placeholder:"请输入报告名称",clearable:""},on:{"on-enter":t.loadTableData},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}})],1),t._v(" "),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",loading:t.pageInfo.loading,"custom-icon":"iconfont icon-chazhao"},on:{click:t.loadTableData}},[t._v("查询\n      ")])],1),t._v(" "),a("div",{staticClass:"user-table"},[a("Table",{staticClass:"m-table no-scroll no-border",attrs:{stripe:"",loading:t.pageInfo.loading,columns:t.tableColumns,"row-class-name":t.rowClassName,data:t.tableData},on:{"on-row-click":t.onRowClick}})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("Page",{attrs:{current:t.pageInfo.pageIndex,"page-size":t.pageInfo.pageSize,total:t.pageInfo.totalElements,"show-sizer":"","show-total":""},on:{"on-change":t.onPaginationChange,"on-page-size-change":t.onPaginationSizeChange}})],1)]),t._v(" "),a("Drawer",{attrs:{width:"720",closable:!1,"mask-closable":!1},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"now-form-title",attrs:{slot:"header"},slot:"header"},[a("Icon",{staticClass:"now-form-close",attrs:{type:"ios-close-circle",color:"#DCDCDC",size:18},on:{click:function(e){t.drawer=!1}}}),t._v(" "),a("span",[t._v(t._s(t.title))])],1),t._v(" "),t.drawer?a("Form",{ref:"formNew",attrs:{"label-width":t.$flexible(110),rules:t.formValidate,model:t.form}},[a("FormItem",{attrs:{label:t.formConfig.name.label,prop:"name"}},[a("Input",{staticClass:"search-input",attrs:{maxlength:50,placeholder:"请输入区域名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:t.formConfig.type.label}},[a("OrgSelect",{attrs:{placeholder:"请选择启动方式",flag:t.flag,id:t.id},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1)],1):t._e(),t._v(" "),t.$hasAccess("org.edit")?a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:t.passCancel}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-sub"},[e("div",{staticClass:"title"},[e("div",{staticClass:"breadcrumb-item-link"},[this._v("报告生成")])])])}]};var c=a("VU/8")(l,r,!1,function(t){a("qDi6")},"data-v-62c0c3c0",null).exports;e.default=c},qDi6:function(t,e){}});
//# sourceMappingURL=37.826af2e2345591a9ffa9.js.map