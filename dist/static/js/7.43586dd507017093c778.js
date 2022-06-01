webpackJsonp([7],{JFWE:function(e,t){},Qh2t:function(e,t){},"aAh+":function(e,t){},c42R:function(e,t){},cA3Y:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("RWfK"),n=i("BO1k"),s=i.n(n),r=i("BTaQ"),o=i("mjGd"),c=i("TVG1"),l=i("xV2B"),d={name:"single-device",components:{Select:r.Select,GraphViewer:o.a},data:function(){return{disabled:!0,token:Object(c.g)(),deviceGroupList:[],form:{place:"1",name:""},placeOptions:[{id:"1",name:"潍坊"}],moduleId:"",freshTime:[{id:"1",value:"5s"},{id:"2",value:"10s"},{id:"3",value:"60s"}],time:"5s",screenOptions:[{id:"1",name:"PI&D状态刷写"},{id:"2",name:"用户用能监测图"},{id:"3",name:"并网监测图"},{id:"4",name:"机组功能监测图"}],isFull:!1,deviceTableColumns:[{title:"负责人",key:"device",align:"left",ellipsis:!0,tooltip:!0},{title:"联系方式",key:"content",align:"left",ellipsis:!0,tooltip:!0}],dangerTableColumns:[{title:"设备名称",key:"deviceName",align:"left"},{title:"告警信息",key:"errorDesc",align:"left",ellipsis:!0,tooltip:!0},{title:"告警时间",key:"alertTime",align:"left",ellipsis:!0,tooltip:!0}],deviceTableData:[{device:"张三",subDevice:"111-222",content:"12345667885"},{device:"李四",subDevice:"111-222",content:"12345667885"},{device:"王五",subDevice:"111-222",content:"12345667885"},{device:"赵六",subDevice:"111-222",content:"12345667885"},{device:"番七",subDevice:"111-222",content:"12345667885"}],dangerTableData:[],screen:"1",loading:{deviceTable:!1,dangerTable:!1},deviceCurrentIndex:0,dangerCurrentIndex:0,financialList:[{id:1,name:"累计总发电",type:"POWER_TOTAL",num:"130",symbol:"kWh"},{id:2,name:"当日总发电",type:"POWER_DAILY",num:"130",symbol:"kWh"},{id:3,name:"累计上网电",type:"ONLINE_POWER_TOTAL",num:"130",symbol:"kWh"},{id:4,name:"碳减排",type:"CARBON_REDUCE_TOTAL",num:"130",symbol:"t"},{id:5,name:"累计水耗",type:"WATER_CONSUMPTION_TOTAL",num:"130",symbol:"kg"},{id:6,name:"累计气耗",type:"GAS_CONSUMPTION_TOTAL",num:"130",symbol:"m³"}],performenceList:[{id:1,name:"历史最高效率",num:"96",icon:"icon-zuigao",bg:"rgb(23, 80, 236, .2)",type:"HISTORY_MAX_POWER_EFFICIENCY",color:"#1750EC"},{id:2,name:"历史最大效率",num:"96",icon:"icon-zuida",bg:"rgba(0, 132, 255, .2)",type:"HISTORY_MAX_POWER_EFFICIENCY",color:"#0084FF"},{id:3,name:"历史平均效率",num:"96",icon:"icon-pingjun",bg:"rgba(36, 204, 53, .2)",type:"HISTORY_MAX_AVG_POWER_EFFICIENCY",color:"#24CC35"}],reliableList:[{id:1,name:"发电时长",num:"96",symbol:"/h",icon:"icon-a-guzhang2",bg:"rgba(241, 33, 33, .2)",type:"RUNTIME_TOTAL",color:"#F12121"},{id:2,name:"平均故障次数",num:"96",symbol:"/次",icon:"icon-a-lianhe62",bg:"rgba(250, 197, 22, .2)",type:"DOWN_NUM_AVG_DAILY",color:"#FAC516"},{id:3,name:"累计故障次数",num:"96",symbol:"/次",icon:"icon-shichang",bg:"rgba(255, 118, 0, .2)",type:"FAIL_NUM_TOTAL",color:"#FF7600"}],deviceList:[{id:1,name:"1号单机",status:"1",twinStatus:"1",img:"./static/img/device-group-1.png"},{id:2,name:"2号单机",status:"2",twinStatus:"4",img:"./static/img/device-group-2.png"},{id:3,name:"3号单机",status:"3",twinStatus:"4",img:"./static/img/device-group-2.png"},{id:4,name:"4号单机",status:"1",twinStatus:"1",img:"./static/img/device-group-1.png"},{id:5,name:"4号单机",status:"1",twinStatus:"1",img:"./static/img/device-group-1.png"}],singleList:[],chartId:"POWER_GENERATION_AMOUNT",chartOptions:[{id:"POWER_GENERATION_AMOUNT",name:"发电量"},{id:"CARBON_EMISSIONS",name:"碳减排"},{id:"WATER_CONSUMPTION",name:"水耗"},{id:"GAS_CONSUMPTION",name:"气耗"},{id:"POWER_GENERATION_EFFICIENCY",name:"发电效率"},{id:"POWER_GENERATION",name:"发电功率"},{id:"RUN_TIME",name:"运行时长"},{id:"FAIL_NUM",name:"故障次数"},{id:"TROUBLE_FREE_OPERATION_TIME",name:"无故障运行时长"},{id:"DOWN_TIME",name:"停机次数"}],showTitle:!0,deviceId:0,timer:null}},computed:{orgCode:function(){var e="?moduleId="+this.form.name,t="&token="+this.token;return this.configurationUrl+e+t},configurationUrl:function(){return window.location.href.split("device")[0]+"mxgraph/#/home"}},destroyed:function(){localStorage.removeItem("freshTime"),clearInterval(this.timer)},mounted:function(){var e=this;this.deviceId=this.$route.params.id?this.$route.params.id:999,this.form.name=this.deviceId.toString(),this.getDeviceGroup();var t=localStorage.getItem("freshTime")?1e3*Number(localStorage.getItem("freshTime")):5e3;this.timer=setInterval(function(){e.getDeviceGroup()},t),this.getChartType(),this.getDeviceInfo()},methods:{getDeviceInfo:function(){var e=this;Object(l.t)({id:this.deviceId}).then(function(t){if(200===t.code){var i=t.data,a=!0,n=!1,r=void 0;try{for(var o,c=s()(e.financialList);!(a=(o=c.next()).done);a=!0){var l=o.value;l.num=i.economyIndex[l.type]}}catch(e){n=!0,r=e}finally{try{!a&&c.return&&c.return()}finally{if(n)throw r}}var d=!0,u=!1,h=void 0;try{for(var v,m=s()(e.performenceList);!(d=(v=m.next()).done);d=!0){var f=v.value;f.num=i.performanceIndex[f.type]}}catch(e){u=!0,h=e}finally{try{!d&&m.return&&m.return()}finally{if(u)throw h}}var g=!0,p=!1,b=void 0;try{for(var _,y=s()(e.reliableList);!(g=(_=y.next()).done);g=!0){var I=_.value;I.num=i.reliabilityIndex[I.type]}}catch(e){p=!0,b=e}finally{try{!g&&y.return&&y.return()}finally{if(p)throw b}}}}),this.loading.dangerTable=!0,Object(l._0)({deviceId:this.deviceId,pageNumber:1,pageSize:10}).then(function(t){200===t.code&&(e.dangerTableData=t.data.result,e.loading.dangerTable=!1)})},getChartType:function(){var e=this;Object(l.q)({id:this.deviceId}).then(function(t){200===t.code&&(t.data.sceneType?e.chartId=t.data.sceneType:e.chartId="POWER_GENERATION_AMOUNT",e.getChartData())})},changeChart:function(e){Object(l.e)({deviceId:this.deviceId,sceneType:e}).then(function(e){200===e.code&&console.log("保存成功")}),this.chartId=e,this.getChartData()},changeGroup:function(e){var t=!0,i=!1,a=void 0;try{for(var n,r=s()(this.deviceGroupList);!(t=(n=r.next()).done);t=!0){var o=n.value;Number(this.form.name)===Number(o.deviceId)&&(this.deviceId=o.deviceId.toString(),this.getDeviceInfo())}}catch(e){i=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(i)throw a}}this.moduleId=this.form.name.toString();var c=!0,l=!1,d=void 0;try{for(var u,h=s()(this.deviceGroupList);!(c=(u=h.next()).done);c=!0){var v=u.value;Number(v.deviceId)===Number(this.form.name)&&(this.singleList=v.child||[])}}catch(e){l=!0,d=e}finally{try{!c&&h.return&&h.return()}finally{if(l)throw d}}this.getChartType()},freshTimeChange:function(e){var t=this;localStorage.setItem("freshTime",e.slice(0,-1));var i=localStorage.getItem("freshTime")?1e3*Number(localStorage.getItem("freshTime")):5e3;clearInterval(this.timer),this.timer=setInterval(function(){t.getDeviceGroup()},i)},getName:function(e){var t=!0,i=!1,a=void 0;try{for(var n,r=s()(this.chartOptions);!(t=(n=r.next()).done);t=!0){var o=n.value;if(e===o.id)return o.name}}catch(e){i=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(i)throw a}}},ChangeShow:function(e){var t=this;1===e?this.showTitle=!1:setTimeout(function(){t.showTitle=!0},2e3)},getDeviceGroup:function(){var e=this;Object(l._2)().then(function(t){var i=t.code,a=t.data;if(200===i)for(var n in e.deviceGroupList=a.map(function(e){return{name:e.deviceName,id:e.mxgraphId,deviceId:e.deviceId,child:e.child}}),e.deviceGroupList){var s=e.deviceGroupList[n];Number(s.deviceId)===Number(e.deviceId)&&(e.form.name=e.deviceGroupList[n].deviceId,e.deviceId=e.deviceGroupList[n].deviceId,e.moduleId=e.deviceGroupList[n].id.toString(),e.singleList=e.deviceGroupList[n].child)}})},navToSingle:function(e){var t=Number(this.form.name),i=e.deviceId;this.$router.push({path:"/single-device",query:{parentId:t,deviceId:i}})},navToEdit:function(){var e="?moduleId="+this.moduleId,t="&token="+this.token,i="&deviceId=",a=!0,n=!1,r=void 0;try{for(var o,c=s()(this.deviceGroupList);!(a=(o=c.next()).done);a=!0){var l=o.value;l.deviceId===this.form.name&&(i+=l.deviceId)}}catch(e){n=!0,r=e}finally{try{!a&&c.return&&c.return()}finally{if(n)throw r}}window.open(this.configurationUrl+e+t+i,"_blank")},getChartData:function(){var e=this,t=this.deviceId,i=this.chartId;Object(l.p)({deviceId:t,businessType:i}).then(function(t){if(200===t.code){var i=t.data.indexs[0],a=i.value.map(function(e){return e.x}),n=i.legend.map(function(e){return e.name}),r=[],o=!0,c=!1,l=void 0;try{for(var d,u=s()(i.legend);!(o=(d=u.next()).done);o=!0){var h=d.value,v=[],m=!0,f=!1,g=void 0;try{for(var p,b=s()(i.value);!(m=(p=b.next()).done);m=!0){var _=p.value;v.push(_[h.key])}}catch(e){f=!0,g=e}finally{try{!m&&b.return&&b.return()}finally{if(f)throw g}}r.push(v)}}catch(e){c=!0,l=e}finally{try{!o&&u.return&&u.return()}finally{if(c)throw l}}for(var y=[],I=0;I<=r.length-1;I++){var C=e.getColors(I);y.push({name:n[I],data:r[I],type:"line",smooth:!0,itemStyle:{color:C.color},lineStyle:{color:C.color,shadowBlur:6,shadowColor:C.shadowColor,shadowOffsetY:3},emphasis:{label:{show:!0,position:"outside"}}})}var w={series:y,xData:a,legend:n};e.initChart(w)}else{e.initChart({series:[],xData:[],legend:[]})}})},getColors:function(e){switch(e){case 0:return{color:"#1CC96C",shadowColor:"rgba(255, 255, 255, 0.6)"};case 1:return{color:"#FFCE08",shadowColor:"rgba(184, 193, 29, 1)"};case 2:return{color:"#0084FF",shadowColor:"rgba(0, 0, 0, 0.16)"};case 3:return{color:"red",shadowColor:"rgba(0, 0, 0, 0.66)"}}},initChart:function(e){console.log("初始化");var t=document.getElementById("chart");this.$echarts.dispose(t),this.$echarts.init(t).setOption({xAxis:{type:"category",data:e.xData,axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.6)"}},axisLabel:{color:"rgba(255, 255, 255, 0.6)"},axisTick:{show:!1}},yAxis:{type:"value",scale:!0,splitNumber:5,axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.6)"}},axisLabel:{color:"rgba(255, 255, 255, 0.6)"},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed",color:"rgba(255, 255, 255, 0.6)"}}},grid:{bottom:20,left:60,right:0},tooltip:{show:!0,trigger:"axis"},legend:{data:e.legend,icon:"circle",itemWidth:7,itemHeight:7,right:0,textStyle:{color:"#cccc"}},series:e.series})},jump:function(){},screenChange:function(e){console.log("-----------",e)},fullSreen:function(){this.isFull=!this.isFull,this.initViewer()},initViewer:function(){this.$refs.graphViewer.reset()},handleClick:function(e){console.log(e)},getColor:function(e){var t=void 0;switch(e){case"1":t="#0084FF";break;case"2":t="#FDC018";break;case"3":t="#F12121";break;case"4":t="#FF7600"}return t}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"single-device"},[i("div",{staticClass:"left"},[i("div",{staticClass:"left-head border"},[e._v("整机组介绍")]),e._v(" "),i("div",{staticClass:"left-device border"},[i("div",{staticClass:"form"},[i("div",{staticClass:"form-item form-item-select"},[i("div",{staticClass:"label"},[e._v("机组地点")]),e._v(" "),i("div",{staticClass:"select"},[i("Select",{model:{value:e.form.place,callback:function(t){e.$set(e.form,"place",t)},expression:"form.place"}},e._l(e.placeOptions,function(t){return i("Option",{key:t.id,attrs:{value:t.id}},[e._v("\n                "+e._s(t.name)+"\n              ")])}),1)],1)]),e._v(" "),i("div",{staticClass:"form-item form-item-select"},[i("div",{staticClass:"label"},[e._v("机组名称")]),e._v(" "),i("div",{staticClass:"select"},[i("Select",{on:{"on-change":e.changeGroup},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.deviceGroupList,function(t){return i("Option",{key:t.id,attrs:{value:t.deviceId}},[e._v("\n                "+e._s(t.name)+"\n              ")])}),1)],1)])])]),e._v(" "),i("div",{staticClass:"left-enivronment border"},[e.showTitle?i("div",{staticClass:"title",on:{mouseenter:function(t){e.ChangeShow(1)}}},[e._v("\n        "+e._s(e.getName(e.chartId))+"\n      ")]):e._e(),e._v(" "),e.showTitle?e._e():i("div",{staticClass:"title",on:{mouseleave:function(t){e.ChangeShow(2)}}},[i("Select",{on:{"on-change":e.changeChart},model:{value:e.chartId,callback:function(t){e.chartId=t},expression:"chartId"}},e._l(e.chartOptions,function(t){return i("Option",{key:t.id,attrs:{value:t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),1)],1),e._v(" "),i("div",{staticClass:"chart",staticStyle:{width:"100%",height:"200px"},attrs:{id:"chart"}})]),e._v(" "),i("div",{staticClass:"left-danger"},[i("div",{staticClass:"title"},[e._v("故障告警")]),e._v(" "),i("div",{staticClass:"left-dangertable"},[i("Table",{staticClass:"m-table no-scroll no-border",attrs:{stripe:"",loading:e.loading.dangerTable,columns:e.dangerTableColumns,"highlight-row":"",height:"400%",data:e.dangerTableData}})],1)])]),e._v(" "),i("div",{staticClass:"right"},[i("div",{class:["right-monitor",e.isFull?"active":""]},[i("div",{staticClass:"right-head"},[i("div",{staticClass:"right-head-left"},[e._v("实时监测")]),e._v(" "),i("div",{staticClass:"right-head-right"},[i("div",{staticStyle:{"margin-right":"10px"}},[e._v("刷新频率")]),e._v(" "),i("div",{staticClass:"select",staticStyle:{width:"100px"}},[i("Select",{on:{"on-change":e.freshTimeChange},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},e._l(e.freshTime,function(t){return i("Option",{key:t.id,attrs:{value:t.value}},[e._v("\n                "+e._s(t.value)+"\n              ")])}),1)],1),e._v(" "),i("div",{staticClass:"select"},[i("Select",{on:{"on-change":e.screenChange},model:{value:e.screen,callback:function(t){e.screen=t},expression:"screen"}},e._l(e.screenOptions,function(t){return i("Option",{key:t.id,attrs:{value:t.id}},[e._v("\n                "+e._s(t.name)+"\n              ")])}),1)],1),e._v(" "),i("div",{staticClass:"jump"},[i("Button",{attrs:{type:"default"},on:{click:function(t){e.navToEdit()}}},[e._v("测点配置")])],1),e._v(" "),i("div",{staticClass:"jump"},[i("Button",{attrs:{type:"primary","custom-icon":"iconfont icon-tiaozhuanmianban"},on:{click:e.fullSreen}},[e._v(e._s(e.isFull?"退出全屏":"全屏"))])],1)])]),e._v(" "),i("div",{staticClass:"right-screen"},["1"===e.screen?i("GraphViewer",{ref:"graphViewer",attrs:{"module-id":e.moduleId},on:{initViewer:function(t){e.initViewer()}}}):e._e(),e._v(" "),"1"!==e.screen?i("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"http://www.baidu.com",frameborder:"0"}}):e._e()],1)]),e._v(" "),i("div",{staticClass:"right-device-group",staticStyle:{"overflow-y":"scroll"}},e._l(e.singleList,function(t){return i("div",{key:t.id,staticClass:"device-item",on:{click:function(i){e.navToSingle(t)}}},[i("div",{staticClass:"device-item-icon",style:{backgroundImage:"NORMAL"===t.deviceStatus?"url(./static/img/device-group-2.png)":"url(./static/img/device-group-1.png)"}},[i("div",[e._v(e._s(t.id))])]),e._v(" "),i("div",{staticClass:"device-item-content"},[i("div",{staticClass:"name"},[e._v(e._s(t.unitName))]),e._v(" "),i("div",{staticClass:"status"},[e._v("\n            设备状态: "),i("span",{style:e.getColors("NORMAL"===t.deviceStatus?2:"SHUTDOWN"===t.deviceStatus?1:3)},[e._v(e._s("NORMAL"===t.deviceStatus?"正常":"SHUTDOWN"===t.deviceStatus?"停机":"故障"))])])])])}),0),e._v(" "),i("div",{staticClass:"right-target"},[i("div",{staticClass:"right-target-item right-target-financial"},[i("div",{staticClass:"label"},[e._v("经济指标")]),e._v(" "),i("div",{staticClass:"content"},e._l(e.financialList,function(t){return i("div",{key:t.id,staticClass:"content-item"},[i("div",[e._v(e._s(t.name))]),e._v(" "),i("div",[i("span",{staticClass:"num"},[e._v(e._s(t.num))]),e._v(" "),i("span",{staticClass:"symbol"},[e._v("/"+e._s(t.symbol))])])])}),0)]),e._v(" "),i("div",{staticClass:"right-target-item right-target-performence"},[i("div",{staticClass:"label"},[e._v("性能指标")]),e._v(" "),i("div",{staticClass:"content"},e._l(e.performenceList,function(t){return i("div",{key:t.id,staticClass:"content-item"},[i("div",{staticClass:"icon",style:{backgroundColor:t.bg}},[i("span",{class:["iconfont",t.icon],style:{color:t.color}})]),e._v(" "),i("div",{staticClass:"data"},[i("div",[e._v(e._s(t.name))]),e._v(" "),i("div",[i("span",{staticClass:"num"},[e._v(e._s(t.num))]),e._v(" "),i("span",{staticClass:"symbol"},[e._v("/%")])])])])}),0)]),e._v(" "),i("div",{staticClass:"right-target-item right-target-reliable"},[i("div",{staticClass:"label"},[e._v("可靠性指标")]),e._v(" "),i("div",{staticClass:"content"},e._l(e.reliableList,function(t){return i("div",{key:t.id,staticClass:"content-item"},[i("div",{staticClass:"icon",style:{backgroundColor:t.bg}},[i("span",{class:["iconfont",t.icon],style:{color:t.color}})]),e._v(" "),i("div",{staticClass:"data"},[i("div",[e._v(e._s(t.name))]),e._v(" "),i("div",[i("span",{staticClass:"num"},[e._v(e._s(t.num))]),e._v(" "),i("span",{staticClass:"symbol"},[e._v(e._s(t.symbol))])])])])}),0)])])])])},staticRenderFns:[]};var h=i("VU/8")(d,u,!1,function(e){i("JFWE")},"data-v-1fdcab99",null).exports,v=i("Dd8w"),m=i.n(v),f={name:"detail-target",components:{customChart:i("ooO1").a},data:function(){return{tab:1,chartList:[],deviceId:999,deviceList:[]}},mounted:function(){this.changeTab(1),this.getDeviceGroup()},methods:{getDeviceGroup:function(){var e=this;Object(l._2)().then(function(t){200===t.code?e.deviceList=t.data:e.$Message.warning(t.msg)})},deviceChange:function(e){this.init(),this.getDatas(this.tab)},changeTab:function(e){var t=this;this.tab=e,this.init(),setTimeout(function(){t.changeData(e)})},init:function(){this.chartList=[]},changeData:function(e){this.getDatas(e)},getDatas:function(e){var t=this,i=this.deviceId,a=this.getType(e);Object(l.n)({deviceId:i,fieldType:a}).then(function(e){200===e.code?t.chartList=e.data.indexs.map(function(e){return{title:e.title,type:"line",xAxis:{key:"x"},yAxis:{symbol:e.unit},legend:e.legend.map(function(e,i){return m()({},e,{color:t.getColor(i)})}),value:e.value}}):(t.chartList=[],t.$Message.warning(e.msg))})},getColor:function(e){switch(e){case 0:return"#0084FF";case 1:return"#1CC96C";case 2:return"#b6a2de";case 3:return"#ffb980"}},getType:function(e){switch(e){case 1:return"ECONOMY";case 2:return"PERFORMANCE";case 3:return"RELIABILITY"}}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"detail-target"},[i("div",{staticClass:"common-flex"},[i("Select",{staticStyle:{width:"fit-content"},on:{"on-change":e.deviceChange},model:{value:e.deviceId,callback:function(t){e.deviceId=t},expression:"deviceId"}},e._l(e.deviceList,function(t){return i("Option",{key:t.deviceId,attrs:{value:t.deviceId}},[e._v("\n      "+e._s(t.deviceName)+"\n    ")])}),1),e._v(" "),i("div",{staticClass:"btnGroup"},[i("div",{style:{backgroundColor:1===e.tab?"#0084FF":"#000",color:1===e.tab?"#fff":"rgba(255,255,255,0.6)"},on:{click:function(t){e.changeTab(1)}}},[e._v("经济指标")]),e._v(" "),i("div",{style:{backgroundColor:2===e.tab?"#0084FF":"#000",color:2===e.tab?"#fff":"rgba(255,255,255,0.6)"},on:{click:function(t){e.changeTab(2)}}},[e._v("性能指标")]),e._v(" "),i("div",{style:{backgroundColor:3===e.tab?"#0084FF":"#000",color:3===e.tab?"#fff":"rgba(255,255,255,0.6)"},on:{click:function(t){e.changeTab(3)}}},[e._v("可靠性指标")])])],1),e._v(" "),i("div",{staticClass:"card-group"},e._l(e.chartList,function(t,a){return i("div",{key:a,staticClass:"card"},[i("div",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),i("div",{staticClass:"chart-container"},[i("custom-chart",e._b({attrs:{data:t.value,id:a,height:280}},"custom-chart",t,!1))],1)])}),0)])},staticRenderFns:[]};var p=i("VU/8")(f,g,!1,function(e){i("Qh2t")},"data-v-7c9f5dad",null).exports,b=i("CCvC"),_={name:"platform",components:{tab:a.a,singleDevice:h,detailTarget:p},mixins:[b.a],data:function(){return{tabList:[{id:1,name:"整机组概况",com:h},{id:2,name:"统计指标",com:p}],tabIndex:0,is:null}},created:function(){this.is=this.tabList[this.tabIndex].com},methods:{changeTab:function(e){console.log(e),this.tabIndex=e,this.is=this.tabList[e].com}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-device-group"},[t("tab",{attrs:{data:this.tabList,current:this.tabIndex},on:{change:this.changeTab}}),this._v(" "),t("div",{staticClass:"content"},[t("transition",{attrs:{"enter-active-class":this.routerTransitionClass.enter,"leave-active-class":this.routerTransitionClass.leave}},[t(this.is,{tag:"component"})],1)],1)],1)},staticRenderFns:[]};var I=i("VU/8")(_,y,!1,function(e){i("hZGq")},"data-v-3397e873",null).exports;t.default=I},hZGq:function(e,t){},mjGd:function(e,t,i){"use strict";var a=i("mvHQ"),n=i.n(a),s=i("Dd8w"),r=i.n(s),o=i("//Fk"),c=i.n(o),l=i("E4Tp"),d=i("XLwt"),u=i.n(d),h=i("qgvZ"),v=i("P9l9"),m=i("xV2B"),f=i("TVG1"),g=i("PJh5"),p=i.n(g),b={name:"graph-viewer",i18n_prefix:"component.graph-viewer",components:{CommonLoading:l.a,ChartBase:h.a},props:{moduleId:{type:[String,Number]},background:{type:String},zoomEnable:{type:Boolean,default:function(){return!1}},panEnable:{type:Boolean,default:function(){return!1}}},data:function(){return{LoadComplete:!1,timeRange:[p()().add(-1,"d").format("YYYY-MM-DD HH:mm:ss"),p()().format("YYYY-MM-DD HH:mm:ss")],showInfo:!1,tipPosition:null,showEdit:!1,showView:!1,planSaving:!1,viewer:null,_fla:!1,flag:0,InfoRules:{},currentEdit:{},currentModuleInfo:{},currentGraphInfo:null,scale:1,itemRefreshTimer:null,showModuleId:[],chartLoading:!1,chartOptions:{},historyData:[]}},computed:{tipStyle:function(){return this.tipPosition?{display:"block",left:this.tipPosition[0]+"px",top:this.tipPosition[1]+"px"}:{display:"none"}},graphStyle:function(){return this.currentGraphInfo?{width:"auto !important",background:"black"}:{width:"auto !important"}}},watch:{showModuleId:function(e){e&&e.length&&this.loadModuleInfo(e[e.length-1])},moduleId:function(e){this.showModuleId=[],this.loadModuleInfo(e)}},methods:{showTip:function(e,t){this.tipPosition=[e+10,t]},hideTip:function(){this.tipPosition=null},initViewer:function(){var e=this;return new c.a(function(t,i){mxUtils.get("./static/vendor/mxgraph/default.xml",function(i){var a=new Object;a[Graph.prototype.defaultThemeName]=i.getDocumentElement();var n=e.viewer=new Graph(e.$refs.graph,void 0,void 0,void 0,a);function s(e,t){try{if(t.getStyle().includes("shape=flowLine")){var i=e.view.getState(t).shape.node;i.getElementsByTagName("path")[0].removeAttribute("visibility"),i.getElementsByTagName("path")[0].setAttribute("stroke-width","6"),i.getElementsByTagName("path")[0].setAttribute("stroke","white"),i.getElementsByTagName("path")[1].setAttribute("class","flow")}}catch(e){}}if(n.resizeContainer=!0,n.setEnabled(!1),n.addListener(mxEvent.REFRESH,function(e,t){e.view.states.visit(function(t,i){e.model.isEdge(i.cell)&&s(e,i.cell)})}),n.addListener(mxEvent.SIZE,function(e,t){e.view.states.visit(function(t,i){e.model.isEdge(i.cell)&&s(e,i.cell)})}),n.addListener(mxEvent.CELLS_ADDED,function(e,t){var i=t.properties.cells[0];i&&i.isEdge()&&s(e,i)}),e.zoomEnable&&e.$refs.graph.addEventListener("mousewheel",function(e){if(e.preventDefault(),e.stopPropagation(),e.wheelDelta>100){n.zoom(1.1)}else if(e.wheelDelta<-100){n.zoom(.9)}},{passive:!1}),e.panEnable){var r=!1,o=void 0;e.$refs.graph.addEventListener("mousedown",function(e){r=!0,o=e}),e.$refs.graph.addEventListener("mousemove",function(e){if(r)if(o){var t=e.clientX-o.clientX,i=e.clientY-o.clientY;n.panGraph(t,i)}else;}),e.$refs.graph.addEventListener("mouseup",function(e){r=!1,o=null}),e.$refs.graph.addEventListener("mouseleave",function(e){r=!1,o=null})}t(n)},function(){i()})})},onPlanSave:function(){this.editCmd(this.currentEdit),this.showEdit=!1},updateGraphInfo:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=mxUtils.parseXml(t),a=/pageWidth="(\d+)".*pageHeight="(\d+)"/.exec(t)||[],n=void 0;a[1]&&a[2]&&(n={pageWidth:1*a[1],pageHeight:1*a[2]});var s=new mxCodec(i);this.currentGraphInfo=s.decode(i.documentElement,this.viewer.getModel()),this.refreshScale(n).then(function(){e.showView=!!n})},loadModuleInfo:function(e){var t=this;e||(e=this.showModuleId.length?this.showModuleId[this.showModuleId.length-1]:this.moduleId),e&&(this.showView=!1,Object(v.d)({id:e}).then(function(e){t.currentModuleInfo=e.data||{},t.updateGraphInfo(t.currentModuleInfo.xmlstring||""),1===t.currentModuleInfo.type?t.startGraphRefresh():t.stopGraphRefresh(),t.LoadComplete=!0},function(e){t.$Message.error(t.$t_p("get_fail"))}))},refreshScale:function(e){var t=this;return new c.a(function(i,a){clearTimeout(t.refreshTimer),t.refreshTimer=setTimeout(function(){e||(e=t.currentGraphInfo);var n=t.$refs&&t.$refs.viewer;if(e&&e.pageWidth&&e.pageHeight&&n){var s=n.clientWidth,r=n.clientHeight,o=Math.abs(t.currentGraphInfo._pageWidth||t.viewer.view.graphBounds.width+2*t.viewer.view.graphBounds.x),c=Math.abs(t.currentGraphInfo._pageHeight||t.viewer.view.graphBounds.height+2*t.viewer.view.graphBounds.y),l=1;l=s/r>o/c?r/c:s/o,t.currentGraphInfo._pageWidth=o,t.currentGraphInfo._pageHeight=c,t.viewer.zoomTo(l,!1),t.scale=l,i()}else a&&a()},10)}).catch(function(e){})},startGraphRefresh:function(){var e=this;if(this.stopGraphRefresh(),this.refreshGraphDataView(),this.currentModuleInfo.refreshInterval){var t=localStorage.getItem("freshTime")?1e3*Number(localStorage.getItem("freshTime")):5e3;this.itemRefreshTimer=setInterval(function(){e.refreshGraphDataView()},t)}},stopGraphRefresh:function(){clearInterval(this.itemRefreshTimer)},getItemId:function(e){var t=e.detail.itemName;if(t){var i=t.split("(");if(i){var a=i[1].split(")");if(a)return a[0]}}return 0},refreshGraphDataView:function(){var e=this.viewer,t=e.getModel(),i=[],a={};for(var n in t.cells){var s=Object(f.b)(t.cells[n],{graph:e});if("1"===s.detail.type){var o=s.detail.deviceId+"-"+s.detail.item;if(a[o])a[o].push(t.cells[n]);else{var c=this.getItemId(s);a[o]=[t.cells[n]],i.push({itemId:c,deviceId:s.detail.deviceId})}}}i.length&&Object(v.b)({items:i}).then(function(t){(t.data||[]).forEach(function(t){var i=t.deviceId+"-"+t.itemId;a[i]&&a[i].forEach(function(i){var a=Object(f.b)(i,{graph:e}),n=["true","1"].includes(a.detail.bindText+"");if(i.setAttribute("xl-bind-itemVal",t.val),n){var s=null==t.val?"":t.val+"";if(s){s=Number(s);var o=a.detail||{},c=o.bindTextOp,l=void 0===c?"*":c,d=o.bindTextOpValue,u=Number(void 0===d?1:d);switch(l){case"*":s*=u;break;case"/":s/=u;break;case"+":s+=u;break;case"-":s-=u}a.valueFixed&&(s=s.toFixed(a.valueFixed))}i.setAttribute("label",s)}if(a.detail.mapping&&a.detail.mapping.length){var h=a.detail.mapping.map(function(e){return r()({},e,{x1:e.x1?e.x1:0===e.x1?e.x1:1})});Object(f.i)(i,h,t)}})}),e.refresh()})},reload:function(){this.loadModuleInfo()},reset:function(){var e=[].concat(this.showModuleId);e.pop(),this.showModuleId=e,0===e.length&&this.loadModuleInfo(this.moduleId)},editCmd:function(e){var t=this;Object(v.a)(e).then(function(e){t.$Message.success(e.data)},function(e){1e3==e.code?t.$Message.error(e.msg):t.$Message.error(t.$t_p("order_issue_fail"))})},getChartSeries:function(e,t){return{name:t,type:"line",showSymbol:!1,lineStyle:{normal:{color:"#00c1de"}},itemStyle:{show:!1,normal:{color:"#00c1de"}},areaStyle:{normal:{color:new u.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f8fafa"},{offset:1,color:"#ecf7f8"}])}},data:e}},getChartGrid:function(e){var t=0;return e.forEach(function(e){t=Math.max(t,Math.abs(e.value[1]))}),{left:t=12*t.toFixed(0).length+30,right:"5%",top:30,bottom:80}},loadDeviceItemsHistoryData:function(e,t,i){var a=this;this.chartLoading=!0;var n=this.timeRange[0],s=this.timeRange[1];n&&(n=p()(n).format("YYYY-MM-DD HH:mm:ss")),s&&(s=p()(s).format("YYYY-MM-DD HH:mm:ss"));var o={deviceId:e,itemId:t,sDate:n,eDate:s};Object(m.v)(r()({},o)).then(function(e){a.historyData=(e.data.result||[]).map(function(e){return r()({},e,{dateTime:e.dateTime||e.dataTime})}),a.chartLoading=!1,a.refreshChart(i)})},refreshChart:function(e){var t=[];[].concat(this.historyData).reverse().forEach(function(e){var i=p()(e.dateTime);t.push({name:i.toDate(),value:[i.toDate(),Number(e.val||0)]})}),this.chartOptions={calculable:!1,animation:!1,tooltip:{trigger:"axis",position:function(e){return[e[0],"10%"]}},title:{left:"center",text:""},grid:this.getChartGrid(t),xAxis:{type:"time",axisTick:{show:!1,lineStyle:{color:"#00c1de"}},axisLine:{lineStyle:{color:"#878787"}},splitLine:{show:!1}},yAxis:{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#878787"}},splitLine:{show:!1}},series:[this.getChartSeries(t,e)]}}},mounted:function(){var e=this;this.initViewer().then(function(t){new mxCellTracker(t).mouseMove=function(e,i){var a=i.sourceState&&i.sourceState.cell;if(a){var n=Object(f.c)(a),s=Object(f.b)(a,{graph:t});if(2==n&&i.getState().setCursor("pointer"),s.detail&&4==s.detail.cmdType){var r=s.detail.infoName?s.detail.infoName:"";-1!=r.indexOf("group")&&i.getState().setCursor("pointer"),-1!=r.indexOf("item")&&i.getState().setCursor("pointer")}}},t.getTooltipForCell=function(t){var i=Object(f.c)(t),a=Object(f.b)(t,{graph:e.viewer});if(2==i)return"点击跳转到组态 "+a.detail.moduleName;if(a.detail&&4==a.detail.cmdType){var n=a.detail.infoName?a.detail.infoName:"";if(-1!=n.indexOf("group"))return"点击跳转到设备组详情";if(-1!=n.indexOf("item"))return"点击获取测点数据"}},t.click=function(i){if(e.$hasAccess("dev.edit")){var a=i.sourceState&&i.sourceState.cell;if(a){var s=Object(f.b)(a,{graph:t});if(s.detail&&0==s.detail.cmdType||1==s.detail.cmdType){var o={};o.args=s.detail.cmdType,o.devices=s.detail.devices,o.bindTime=s.detail.bindTime||10,e.currentEdit=r()({},o),e.editCmd(e.currentEdit)}if(s.detail&&2==s.detail.cmdType){var c={};c.devices=s.detail.devices,c.bindTime=s.detail.bindTime||10,e.currentEdit=r()({},c),e.showEdit=!0}if(s.detail&&3==s.detail.cmdType){var l={args:""};l.devices=s.detail.devices,l.bindTime=s.detail.bindTime||10,e.currentEdit=r()({},l),e.editCmd(e.currentEdit)}if(s.detail&&4==s.detail.cmdType){var d=s.detail.infoName?s.detail.infoName:"";if(-1!=d.indexOf("item")){var u=s.detail||{},h={deviceId:u.deviceId,id:u.device,itemVal:u.itemVal,itemId:u.item,itemName:u.itemName};e.$eventHub.$emit("deviceInfo",n()(h))}if(-1!=d.indexOf("alarm")){var v=s.detail||{},m={deviceId:v.deviceId,id:v.device,itemVal:v.itemVal,itemId:v.item,itemName:v.itemName};e.$eventHub.$emit("alarmInfo",n()(m))}if(-1!=d.indexOf("video")){var g=+d.substring(5);e.$eventHub.$emit("videoId",g)}if(-1!=d.indexOf("group")){var p=+d.substring(5);e.$eventHub.$emit("groupId",p)}}if(s.detail&&1==s.detail.infoType){var b={};b.infoDevice=s.detail.infoDevice,b.infoDeviceId=s.detail.infoDeviceId,b.infoDeviceName=s.detail.infoDeviceName,b.infoItem=s.detail.infoItem,b.infoItemName=s.detail.infoItemName,b.infoName=s.detail.infoName,e.$emit("on-info",b)}s.detail&&2==s.detail.type&&e.showModuleId.push(s.detail.module)}}}}),this.loadModuleInfo(),this.$eventHub.$on("sl-main-size-change",function(){e.refreshScale()})},destroyed:function(){this.stopGraphRefresh()}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"viewer",staticClass:"graph-viewer",style:{background:e.graphStyle.background}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showView,expression:"showView"}],ref:"graph",staticClass:"graph",style:e.graphStyle}),e._v(" "),i("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showModuleId.length>0,expression:"showModuleId.length>0"}],staticClass:"btn-reset",attrs:{type:"md-backspace",size:"26"},on:{click:function(t){e.reset()}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.showView&&!e.LoadComplete,expression:"!showView && !LoadComplete"}],staticClass:"graph-cover"},[i("Icon",{staticStyle:{animation:"ani-demo-spin 1s linear infinite"},attrs:{type:"ios-loading"}})],1),e._v(" "),i("Modal",{staticClass:"plan-modal",attrs:{title:e.$t_p("issue_order"),"footer-hide":"","mask-closable":!1,"class-name":"vertical-center-modal",width:e.$flexible(400)},model:{value:e.showEdit,callback:function(t){e.showEdit=t},expression:"showEdit"}},[e.showEdit?i("div",{staticClass:"plan-edit"},[i("Form",{ref:"formBase",staticClass:"edit-form",attrs:{rules:e.InfoRules,model:e.currentEdit,"label-width":e.$flexible(110)}},[i("FormItem",{staticClass:"form-item",attrs:{label:e.$t_p("issue_param")+"：",prop:"ruleName"}},[i("Input",{attrs:{placeholder:e.$t_p("issue_param_placeholder")},model:{value:e.currentEdit.args,callback:function(t){e.$set(e.currentEdit,"args",t)},expression:"currentEdit.args"}})],1),e._v(" "),i("div",{staticClass:"form-ops ",staticStyle:{"text-align":"right","padding-bottom":"0"}},[i("Button",{staticClass:"btn btn-cancel",attrs:{disabled:e.planSaving},on:{click:function(t){e.showEdit=!1}}},[e._v(e._s(e.$t_p("cancel")))]),e._v(" "),i("Button",{staticClass:"btn",attrs:{type:"primary",loading:e.planSaving},on:{click:e.onPlanSave}},[e._v(e._s(e.$t_p("issue")))])],1)],1)],1):e._e()]),e._v(" "),i("Modal",{staticClass:"plan-modal",attrs:{title:e.$t_p("history_data"),"footer-hide":"","mask-closable":!1,"class-name":"vertical-center-modal",width:e.$flexible(500)},model:{value:e.showInfo,callback:function(t){e.showInfo=t},expression:"showInfo"}},[e.showInfo?i("div",{staticClass:"plan-edit"},[i("DatePicker",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{width:"350px"},attrs:{format:"yyyy-MM-dd HH:mm:ss",type:"datetimerange",placement:"bottom-end",placeholder:e.$t_p("range_time_placeholder")},model:{value:e.timeRange,callback:function(t){e.timeRange=t},expression:"timeRange"}}),e._v(" "),i("div",{staticClass:"chart",staticStyle:{width:"100%",height:"400px"}},[i("Spin",{directives:[{name:"show",rawName:"v-show",value:e.chartLoading,expression:"chartLoading"}],staticStyle:{width:"100%",height:"100%"},attrs:{fix:""}},[i("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"ios-loading",size:"18"}}),e._v(" "),i("div",[e._v("Loading")])],1),e._v(" "),i("ChartBase",{ref:"chart",staticClass:"chart-ele",staticStyle:{width:"100%",height:"100%"},attrs:{options:e.chartOptions}})],1)],1):e._e()])],1)},staticRenderFns:[]};var y=i("VU/8")(b,_,!1,function(e){i("aAh+"),i("c42R")},"data-v-2458d452",null).exports;t.a=y}});
//# sourceMappingURL=7.43586dd507017093c778.js.map