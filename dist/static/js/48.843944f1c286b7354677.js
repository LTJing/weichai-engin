webpackJsonp([48],{"5emg":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),r=a("Xxa5"),s=a.n(r),o=a("exGp"),l=a.n(o),c=a("//Fk"),d=a.n(c),u=a("qgvZ"),v=a("G8pB"),m=a("xV2B"),f=a("xXZE"),h=a("PJh5"),p=a.n(h),g={name:"real-time-statistics",components:{ChartBase:u.a,customDrawer:v.a},data:function(){return{orderData:[],maxlength:50,selectLocation:"",tableColumns:[{title:"序号",key:"id",align:"left"},{title:"点位名称",key:"orderContent",align:"left",render:function(e,t){if(t.row.orderContent)return e("div",JSON.parse(t.row.orderContent).pointName)}},{title:"执行参数",key:"orderContent",align:"left",render:function(e,t){if(t.row.orderContent)return e("div",JSON.parse(t.row.orderContent).pointValue)}},{title:"执行情况",key:"executeStatus",align:"left",render:function(e,t){switch(t.row.executeStatus){case"FAIL":return e("div","下发失败");case"WAIT_DELIVERY":return e("div","等待下发");case"SUCCESS":return e("div","下发成功")}}},{title:"生效时间",key:"executeTime",align:"left"}],formList:[],formValue:{},formValidate:{},chartOption:{},pointList:[],search:{name:"",status:""},currentId:"",rangeTime:[p()().subtract(1,"days").format("YYYY-MM-DD HH:mm:ss"),p()().format("YYYY-MM-DD HH:mm:ss")],deviceId:"",tableData:[],deviceName:[],realData:[],clicked:0,pageInfo:{loading:!1,pageIndex:1,pageSize:10,totalElements:0},autoRefresh:!0,flushInterval:10,timer:"",controlType:"",drawerTitle:"",hasValidate:0,orderTimer:null}},watch:{deviceId:function(e){var t=this;this.itemIds=[],this.chartOption={},this.timer&&clearInterval(this.timer),this.loadPointData(e),this.autoRefresh&&(this.timer=setInterval(function(){t.loadPointData(e)},1e3*this.flushInterval))}},destroyed:function(){this.timer&&clearInterval(this.timer),this.orderTimer&&clearInterval(this.orderTimer)},methods:{getQiTingfenkong:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/status?deviceId="+i.deviceId,method:"get"})).then(function(e){if(200===e.code){var a=e.data.map(function(e){return{name:e.name,value:e.key+","+e.value}});t(a)}})})},rowClassName:function(e,t){if(e.id==this.currentIndex)return"demo-table-info-row"},onRowClick:function(){},getGonglvModefenkong:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/power/control/mode?deviceId="+i.deviceId,method:"get"})).then(function(e){if(200===e.code){var a=e.data.map(function(e){return{name:e.name,value:e.key+","+e.value}});t(a)}})})},getSystemOutput:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/system/output/power?deviceId="+i.deviceId,method:"get"})).then(function(e){200===e.code&&t(e.data.key)})})},getIfClear:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/accident/clear?deviceId="+i.deviceId,method:"get"})).then(function(e){if(200===e.code){var a=e.data.map(function(e){return{name:e.name,value:e.key+","+e.value}});t(a)}})})},getSystemStatus:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/system/status/set?deviceId="+i.deviceId,method:"get"})).then(function(e){if(200===e.code){var a=e.data.map(function(e){return{name:e.name,value:e.key+","+e.value}});t(a)}})})},getSystemAutofenpei:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/system/power/auto/assign?deviceId="+i.deviceId,method:"get"})).then(function(e){200===e.code&&t(e.data.key)})})},getBingLi:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/line?deviceId="+i.deviceId,method:"get"})).then(function(e){if(200===e.code){var a=e.data.map(function(e){return{name:e.name,value:e.key+","+e.value}});t(a)}})})},getWaiting:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/standby/mode?deviceId="+i.deviceId,method:"get"})).then(function(e){if(200===e.code){var a=e.data.map(function(e){return{name:e.name,value:e.key+","+e.value}});t(a)}})})},getYouGong:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/active/power/set?deviceId="+i.deviceId,method:"get"})).then(function(e){200===e.code&&t(e.data.key)})})},getWuGong:function(){var e=this;return new d.a(function(t,a){var i;(i={deviceId:e.deviceId},f.a.request({url:"/control/enum/reActive/power/set?deviceId="+i.deviceId,method:"get"})).then(function(e){200===e.code&&t(e.data.key)})})},showDrawer:function(){var e=this;return l()(s.a.mark(function t(){var a,i,n,r,o,l,c,d,u,v,m,f,h,p;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.controlType,t.next="SINGLE_FCU"===t.t0?3:"ALL_FCU"===t.t0?24:"PCS"===t.t0?39:63;break;case 3:if(e.drawerTitle="单机FCU控制",e.hasValidate){t.next=23;break}return t.next=7,e.getQiTingfenkong();case 7:return a=t.sent,t.next=10,e.getGonglvModefenkong();case 10:return i=t.sent,t.next=13,e.getSystemOutput();case 13:return n=t.sent,t.next=16,e.getIfClear();case 16:return r=t.sent,t.next=19,e.getSystemStatus();case 19:o=t.sent,e.formValidate={one:[{required:!0,message:"一键控制不能为空"}],two:[{required:!0,message:"功率控制模式不能为空"}],three:[{required:!0,message:"系统输出功率不能为空"}],four:[{required:!0,message:"故障清除不能为空"}],five:[{required:!0,message:"系统状态设定不能为空"}]},e.formList=[{label:"一键控制",type:"select",value:"one",data:a},{label:"功率控制模式",type:"select",value:"two",data:i},{label:"系统输出功率",type:"input",value:"three",placeholder:"请录入总功率（平局分配）",unit:"W",key:n,inputType:"number"},{label:"故障清除",type:"radio",value:"four",data:r},{label:"系统状态设定",type:"select",value:"five",data:o}],e.hasValidate++;case 23:return t.abrupt("break",65);case 24:if(e.drawerTitle="整机FCU控制",e.hasValidate){t.next=38;break}return t.next=28,e.getQiTingfenkong();case 28:return l=t.sent,t.next=31,e.getSystemAutofenpei();case 31:return c=t.sent,t.next=34,e.getIfClear();case 34:d=t.sent,e.formValidate={one:[{required:!0,message:"整机控制不能为空"}],two:[{required:!0,message:"系统功率自动分配不能为空"}],three:[{required:!0,message:"故障清除不能为空"}]},e.formList=[{label:"整机控制",type:"select",value:"one",data:l},{label:"系统状态设定",type:"input",value:"two",unit:"KW",key:c,inputType:"number"},{label:"故障清除",type:"radio",value:"three",data:d}],e.hasValidate++;case 38:return t.abrupt("break",65);case 39:if(e.drawerTitle="PCS控制",e.hasValidate){t.next=62;break}return t.next=43,e.getQiTingfenkong();case 43:return u=t.sent,t.next=46,e.getBingLi();case 46:return v=t.sent,t.next=49,e.getIfClear();case 49:return m=t.sent,t.next=52,e.getWaiting();case 52:return f=t.sent,t.next=55,e.getYouGong();case 55:return h=t.sent,t.next=58,e.getWuGong();case 58:p=t.sent,e.formValidate={one:[{required:!0,message:"PCS开关机不能为空"}],two:[{required:!0,message:"并离网不能为空"}],three:[{required:!0,message:"故障清除不能为空"}],four:[{required:!0,message:"PCS待机模式不能为空"}],five:[{required:!0,message:"有功功率不能为空"}],six:[{required:!0,message:"无功功率不能为空"}]},e.formList=[{label:"整机控制",type:"select",value:"one",data:u},{label:"并离网",type:"radio",value:"two",data:v},{label:"故障清除",type:"radio",value:"three",data:m},{label:"PCS待机模式",type:"select",value:"four",data:f},{label:"有功功率设定",type:"input",value:"five",unit:"KW",placeholder:"请录入有功功率",key:h,inputType:"number"},{label:"无功功率设定",type:"input",value:"six",unit:"KW",placeholder:"请录入无功功率",key:p,inputType:"number"}],e.hasValidate++;case 62:return t.abrupt("break",65);case 63:return e.drawerTitle="电池控制",t.abrupt("break",65);case 65:e.$refs.drawer.resetFields(),e.$refs.drawer.open();case 67:case"end":return t.stop()}},t,e)}))()},confirm:function(){var e,t=this,a=this.formValue,i=[];switch(this.controlType){case"SINGLE_FCU":i.push({pointName:a.one.split(",")[0],pointValue:a.one.split(",")[1]}),i.push({pointName:a.two.split(",")[0],pointValue:a.two.split(",")[1]}),i.push({pointName:this.formList[2].key,pointValue:a.three}),i.push({pointName:a.four.split(",")[0],pointValue:a.four.split(",")[1]}),i.push({pointName:a.five.split(",")[0],pointValue:a.five.split(",")[1]});break;case"ALL_FCU":i.push({pointName:a.one.split(",")[0],pointValue:a.one.split(",")[1]}),i.push({pointName:this.formList[1].key,pointValue:a.two}),i.push({pointName:a.three.split(",")[0],pointValue:a.three.split(",")[1]});break;case"PCS":i.push({pointName:a.one.split(",")[0],pointValue:a.one.split(",")[1]}),i.push({pointName:a.two.split(",")[0],pointValue:a.two.split(",")[1]}),i.push({pointName:a.three.split(",")[0],pointValue:a.three.split(",")[1]}),i.push({pointName:a.four.split(",")[0],pointValue:a.four.split(",")[1]}),i.push({pointName:this.formList[4].key,pointValue:100*Number(a.five)}),i.push({pointName:this.formList[5].key,pointValue:100*Number(a.six)})}(e={orders:i},f.a.request({url:"/device/order/delivery",data:e,method:"post"})).then(function(e){200===e.code?(t.getOrderList(e.data),t.orderTimer=setInterval(function(){t.getOrderList(e.data)},5e3),t.$Message.success("控制命令下发成功")):t.$Message.error("控制命令下发失败")}),this.$refs.drawer.close()},getOrderList:function(e){var t=this;Object(m.K)({orderId:e}).then(function(e){200===e.code?t.orderData=e.data:t.$Message.error(e.msg)})},changeAutoRefresh:function(e){var t=this;e?this.timer=setInterval(function(){t.loadPointData(t.deviceId)},1e3*this.flushInterval):clearInterval(this.timer)},clickLi:function(e,t){this.timer&&clearInterval(this.timer),this.orderTimer&&clearInterval(this.orderTimer),this.clicked=t,this.deviceId=e.id,this.controlType=e.deviceControlMode,this.hasValidate=0,this.formValidate={},this.formList=[],this.formValue={},this.orderData=[]},checkDate:function(e){var t=this;e.checked=!e.checked,e.checked?(this.itemIds.push(e.itemId),this.deviceName.push(e.alias)):this.itemIds.map(function(a,i){e.itemId==a&&(t.itemIds.splice(i,1),t.deviceName.splice(i,1))})},checkItemId:function(e){e.checked=!e.checked,this.itemIds.push(e.itemId)},loadRealData:function(){var e=this;Object(m.u)({deviceId:this.deviceId}).then(function(t){e.realData=(t.data.result||[]).map(function(e){return n()({},e,{checked:!1})})})},loadPointData:function(e){var t=this;Object(m.T)({id:e}).then(function(e){200===e.code&&(t.pointList=e.data.items.map(function(e){return n()({},e)}),t.flushInterval=e.data.flushInterval)})},rgb:function(){var e="("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";return e},color:function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),i="#"+e.toString(16)+t.toString(16)+a.toString(16);return i},line:function(e,t,a){this.chartOption={grid:{x:80,y:20,x2:80,y2:50,containLabel:!0},tooltip:{trigger:"axis"},color:["#ff7f50","#87cefa","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0","#1e90ff","#ff6347","#7b68ee","#00fa9a","#ffd700","#6699FF","#ff6666","#3cb371","#b8860b","#30e0e0"],xAxis:{type:"category",boundaryGap:!1,data:e,splitLine:{show:!0,lineStyle:{color:["#dedede"]}},axisLine:{lineStyle:{color:"#d2d2d2",width:1}}},dataZoom:[{type:"slider",xAxisIndex:0,start:0,end:100}],yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:["#dedede"]}},axisLine:{lineStyle:{color:"#d2d2d2",width:1}}},series:t}},loadTableData:function(e,t){var a=this;e&&(this.pageInfo.pageIndex=1);var i={1:this.$t("common.text.run"),0:this.$t("common.text.stop")};Object(m.w)({pageNumber:this.pageInfo.pageIndex,pageSize:this.pageInfo.pageSize,name:this.search.name,deviceStatus:this.search.status,mode:"control"}).then(function(e){a.tableData=(e.data.result||[]).map(function(e){return n()({},e,{deviceStatusName:i[e.deviceStatus]})}),console.log(a.tableData),a.tableData.length>0&&(a.deviceId=a.tableData[0].id,a.controlType=a.tableData[0].deviceControlMode),t&&a.clickLi(a.tableData[0],0),a.pageInfo.totalElements=e.data.totalElements||0}).finally(function(){})},onPaginationChange:function(e){this.pageInfo.pageIndex=e,this.loadTableData(!1)},onPaginationSizeChange:function(e){this.pageInfo.pageSize=e,this.loadTableData(!0)}},mounted:function(){this.loadTableData(!0,1)}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"real-time-statistics view-list"},[a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("div",{staticClass:"container-box"},[a("div",{staticClass:"left"},[a("div",{staticClass:"left-title"},[a("Icon",{staticClass:"icon",staticStyle:{"z-index":"99"},attrs:{type:"md-search"},on:{click:e.loadTableData}}),e._v(" "),a("Input",{staticClass:"serch-input",attrs:{maxlength:50,placeholder:"请输入设备名称/编码"},on:{"on-enter":e.loadTableData},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1),e._v(" "),a("div",{staticClass:"left-box"},e._l(e.tableData,function(t,i){return a("li",{class:e.clicked===i?"active":"",on:{click:function(a){e.clickLi(t,i)}}},[a("div",{staticClass:"li-title"},[a("div",{staticClass:"li-left",attrs:{title:t.deviceName.length>10?t.deviceName:""}},[e._v("\n                "+e._s(t.deviceName)+"\n              ")]),e._v(" "),a("div",{staticClass:"li-right",class:1==t.deviceStatus?"green":"red"},[e._v("\n                "+e._s(t.deviceStatusName)+"\n              ")])]),e._v(" "),a("div",{staticClass:"li-content"},[a("div",{staticClass:"li-code"},[a("span",[e._v(" "+e._s(e.$t("common.text.device_code"))+"：")]),a("span",{staticClass:"title",attrs:{title:t.deviceCode.length>15?t.deviceCode:""}},[e._v(e._s(t.deviceCode))])]),e._v(" "),a("div",{staticClass:"li-code"},[a("span",[e._v(e._s(e.$t("common.text.device_model"))+"：")]),a("span",{staticClass:"title",attrs:{title:t.modelName.length>15?t.modelName:""}},[e._v(e._s(t.modelName))])])])])}),0)]),e._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"right-title"},[e._v("选择数据项:")]),e._v(" "),a("div",{staticClass:"control-menu"},[a("Button",{staticStyle:{width:"100px"},on:{click:e.showDrawer}},[e._v("控制")]),e._v(" "),a("div",{staticClass:"common-flex"},[a("div",[e._v("自动刷新：")]),e._v(" "),a("i-switch",{attrs:{size:"large"},on:{"on-change":e.changeAutoRefresh},model:{value:e.autoRefresh,callback:function(t){e.autoRefresh=t},expression:"autoRefresh"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("开启")]),e._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("关闭")])])],1)],1),e._v(" "),a("div",{staticClass:"right-boxes"},e._l(e.pointList,function(t,i){return a("div",{key:i,staticClass:"box"},[a("div",{staticClass:"nameline"},[e._v("\n              "+e._s(t.itemName)+" - "+e._s(t.itemCode)+"\n            ")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(t.value)+e._s(t.unit))])])}),0),e._v(" "),a("div",{staticClass:"user-table"},[a("Table",{staticClass:"m-table no-scroll no-border",attrs:{stripe:"",height:"200",loading:e.pageInfo.loading,columns:e.tableColumns,"row-class-name":e.rowClassName,data:e.orderData},on:{"on-row-click":e.onRowClick}})],1)])])]),e._v(" "),a("custom-drawer",{ref:"drawer",attrs:{title:e.drawerTitle,formValidate:e.formValidate,formList:e.formList},on:{confirm:e.confirm},model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-sub"},[t("div",{staticClass:"title"},[t("div",{staticClass:"breadcrumb-item-link"},[this._v("实时数据分析")])])])}]};var b=a("VU/8")(g,I,!1,function(e){a("JUdS")},"data-v-3930a576",null).exports;t.default=b},JUdS:function(e,t){}});
//# sourceMappingURL=48.843944f1c286b7354677.js.map