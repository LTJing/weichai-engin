webpackJsonp([38],{S4DI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("S1ZC"),i=a("jpo7"),l=a("jmEP"),o=a("G8pB"),r={name:"report-generate",components:{StatusSelect:n.a,LaboratoryList:i.a,OrgSelect:l.a,customDrawer:o.a},data:function(){var e=this;return{search:{test:"",name:"",template:""},pageInfo:{loading:!1,pageIndex:1,pageSize:10,totalElements:30},reportFormList:[{type:"select",placeholder:"设备类型:",value:"deviceType",data:[{value:1,name:"111"},{value:2,name:"222"},{value:3,name:"3333"}]},{type:"select",placeholder:"设备名称:",value:"deviceName",data:[]},{type:"select",placeholder:"设备编号:",value:"deviceCode",data:[]},{type:"select",placeholder:"实验类型:",value:"testType",data:[]},{type:"select",placeholder:"模板类型:",value:"tempType",data:[]},{type:"select",placeholder:"模板版本:",value:"tempVerson",data:[]},{type:"select",placeholder:"参数名称与数量:",value:"joinandnum",data:[]},{type:"select",placeholder:"参数类型:",value:"argType",data:[]},{type:"date",placeholder:"时间范围:",value:"date"}],reportFormValue:{deviceType:1,deviceName:"",deviceCode:"",testType:"",tempType:"",tempVerson:"",joinandnum:"",argType:"",date:""},formList:[],formValue:{},formValidate:{},type:"",title:"",tableData:[],maxlength:50,tableColumns:[{title:"模板名称",key:"templateName",align:"left"},{title:"实验类型",key:"templateTest",align:"left"},{title:"模板类型",key:"templateType",align:"left"},{title:"版本信息",key:"templateVersion",align:"left"},{title:"跟新时间",key:"updateTime",align:"left"},{title:"操作",key:"action",width:300,align:"left",render:function(t,a){return t("div",[t("span",{style:{color:"#0084FF"},on:{click:function(){e.showDrawer("edit",a)}}},"编辑"),t("span",{style:{color:"#F12121"},on:{click:function(){e.action(a.row,"delete")}}},"删除")])}}],drawer:!1,form:{name:"",type:""},status:"",formConfig:{name:{label:"请确认设备名称"},type:{label:""}},currentIndex:0}},computed:{url:function(){var e=window.location.href.split("device")[0],t=this.$route.query.id;return t?e+"jmreport/index/"+t:e+"jmreport/list"}},mounted:function(){},created:function(){window.addEventListener("message",this.handleMessage)},methods:{back:function(){history.back()},handleMessage:function(e){},loadTableData:function(){},addItem:function(){},onRowClick:function(){},onPaginationChange:function(){},onPaginationSizeChange:function(){},rowClassName:function(e,t){if(e.id==this.currentIndex)return"demo-table-info-row"},showDrawer:function(e){this.$refs.drawer.open(),this.type=e},action:function(e,t){this.openDrawer()},confirm:function(){},previewReport:function(){console.log(this.reportFormValue)},saveReport:function(){},dateChange:function(e){console.log(e),this.reportFormValue.date=e}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"report-list"},[t("div",{staticClass:"content"},[t("div",{staticClass:"header-sub"},[t("div",{staticClass:"title"},[t("div",{staticClass:"breadcrumb-item-link"},[this._v("报告管理")]),this._v(" "),t("Button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:this.back}},[this._v("返回")])],1)]),this._v(" "),t("div",{staticClass:"iframe-box"},[t("iframe",{attrs:{src:this.url,frameborder:"0"}})])])])},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(e){a("f801")},"data-v-2b8149be",null).exports;t.default=c},f801:function(e,t){}});
//# sourceMappingURL=38.96a75283cca2d5b23a0d.js.map