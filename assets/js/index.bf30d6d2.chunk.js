(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";var i=n(2),a=n.n(i),s=n(6),r=n.n(s),o=n(7),l=n.n(o),d=n(8),u=n(9);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e,t){return c(e)===t},h={name:"JsonCSV",props:{data:{type:Array,required:!0},fields:{required:!1},name:{type:String,default:"data.csv"},delimiter:{type:String,default:",",required:!1},separatorExcel:{type:Boolean,default:!1},encoding:{type:String,default:"utf-8"},advancedOptions:{type:Object,default:function(){}},labels:{required:!1},testing:{required:!1,default:!1}},computed:{idName:function(){return"export_"+(new Date).getTime()},exportableData:function(){var e=this.cleaningData();return e.length?e:null}},methods:{labelsFunctionGenerator:function(){var e=this;if(!f(this.labels,"undefined")&&!f(this.labels,"function")&&!f(this.labels,"object"))throw new Error("Labels needs to be a function(value,key) or object.");return f(this.labels,"function")?function(t){return a()(t,e.labels)}:f(this.labels,"object")?function(t){return a()(t,(function(t,n){return e.labels[n]||n}))}:function(e){return e}},fieldsFunctionGenerator:function(){var e=this;if(!f(this.fields,"undefined")&&!f(this.fields,"function")&&!f(this.fields,"object")&&!Array.isArray(this.fields))throw new Error("Fields needs to be a function(value,key) or array.");return f(this.fields,"function")||f(this.fields,"object")&&!Array.isArray(this.fields)?function(t){return r()(t,e.fields)}:Array.isArray(this.fields)?function(t){return l()(t,e.fields)}:function(e){return e}},cleaningData:function(){if(f(this.fields,"undefined")&&f(this.labels,"undefined"))return this.data;var e=this.labelsFunctionGenerator(),t=this.fieldsFunctionGenerator();return this.data.map((function(n){return e(t(n))}))},generate:function(){this.$emit("export-started");var e=this.exportableData;if(e){var t=Object(u.unparse)(e,Object.assign({delimiter:this.delimiter,encoding:this.encoding},this.advancedOptions));if(this.separatorExcel&&(t="SEP="+this.delimiter+"\r\n"+t),"utf-8"===this.encoding&&(t="\ufeff"+t),this.$emit("export-finished"),!this.testing){var n=new Blob([t],{type:"application/csvcharset="+this.encoding});Object(d.saveAs)(n,this.name)}}else console.error("No data to export")}}},m=(n(14),n(1)),p={name:"App",components:{"download-csv":Object(m.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.idName},on:{click:this.generate}},[this._t("default",[this._v("Download "+this._s(this.name))])],2)}),[],!1,null,"38979de7",null).exports},computed:{readableJson:function(){return JSON.stringify(this.jsonData,null,2)}},data:function(){return{jsonData:[{id:1,fname:"Jesse",lname:"Simmons",date:"2016-10-15 13:43:27",gender:"Male"},{id:2,fname:"John",lname:"Jacobs",date:"2016-12-15 06:00:53",gender:"Male"},{id:3,fname:"Tina",lname:"Gilbert",date:"2016-04-26 06:26:28",gender:"Female"},{id:4,fname:"Clarence",lname:"Flores",date:"2016-04-10 10:28:46",gender:"Male"},{id:5,fname:"Anne",lname:"Lee",date:"2016-12-06 14:38:38",gender:"Female"},{id:6,fname:"\u4f5f\u535a",lname:"\u80fd\u5a1c",date:"2016-12-06 14:38:38",gender:"Male"},{id:7,fname:"\u0160ir\u016f\u010dkov\xe1",lname:"Tereza",date:"2019-12-06 14:38:38",gender:"Female"}],dataFile:"my_export.csv",labels:{fname:"First Name",lname:"Last Name"},fields:["id","fname","lname","date"],isExported:!1}},methods:{exported:function(e){var t=this;console.log(e),this.isExported=!0,setTimeout((function(){t.isExported=!1}),3e3)}}},b=Object(m.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container is-widescreen"},[n("h1",{staticClass:"title"},[e._v("\n    JSON to CSV\n  ")]),e._v(" "),n("b-notification",{attrs:{active:e.isExported},on:{"update:active":function(t){e.isExported=t}}},[e._v("\n    File Exported\n  ")]),e._v(" "),n("div",{staticClass:"notification has-text-centered"},[n("p",{staticClass:"subtitle"},[e._v("Click on the button to download the following JSON in CSV.")]),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("The fname and lname will be replaced by First Name and Last Name in the CSV.")]),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("By default the file will be encoded in UTF8.")]),e._v(" "),n("div",[n("download-csv",{attrs:{data:e.jsonData,name:e.dataFile,labels:e.labels,fields:e.fields},on:{"export-finished":e.exported}},[n("button",{staticClass:"button"},[e._v("Download")])])],1)]),e._v(" "),n("div",[n("pre",[e._v(e._s(e.readableJson))])])],1)}),[],!1,null,"004865fc",null);t.a=b.exports},function(e,t,n){e.exports=n(13)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(3),i=n(11),a=n(10);n(15);t.a.use(a.a),e.vue=new t.a({el:"#app",render:function(e){return e(i.a)}})}.call(this,n(0))},function(e,t,n){"use strict";n(5)}],[[12,2,0]]]);