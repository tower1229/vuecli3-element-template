(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3af13646"],{"2a4e":function(t,e,a){"use strict";var s=a("b024"),i=a.n(s);i.a},"86b7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tree",{ref:"tree",staticClass:"custom-tree",attrs:{data:t.list,props:t.defaultProps,"node-key":"id","default-expand-all":"","show-checkbox":t.picker,"check-strictly":t.picker},on:{"check-change":t.handleCheckChange},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var s=e.data;return a("div",{staticClass:"custom-tree-item"},[a("div",{staticClass:"flex-1 extendLable"},[2===s.type?a("span",{staticStyle:{color:"#67c23a"}},[a("i",{staticClass:"el-icon-medal"})]):t._e(),a("span",{class:{source:2===s.type},staticStyle:{"margin-right":"20px"}},[t._v(t._s(s.name))]),2===s.type?a("el-tag",{attrs:{size:"mini",type:t.typeColor[s.method]}},[a("i",{staticClass:"el-icon-position"}),t._v(" "+t._s(s.method.toUpperCase()))]):t._e(),a("el-tag",{attrs:{size:"mini",type:"info"}},[a("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(s.url))])],1),t.picker?t._e():a("span",{staticClass:"extendGroup"},[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return e.stopPropagation(),t.$emit("edit",s)}}},[t._v("编辑")]),1===s.type?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return e.stopPropagation(),t.$emit("append",s)}}},[t._v("添加子菜单")]):t._e(),1===s.type?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return e.stopPropagation(),t.$emit("addResource",s)}}},[t._v("添加资源")]):t._e(),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return e.stopPropagation(),t.$emit("remove",s)}}},[t._v("删除")])],1)])}}])})},i=[],n=a("df73"),r=a("bcc0"),c={props:{picker:{type:Boolean,required:!1,default:!1},checked:{type:Array,required:!1},listdata:{type:Array,required:!1}},data:function(){return{list:[],defaultProps:{children:"children",label:"name"},typeColor:{get:"success",post:"primary",put:"warning",delete:"danger"}}},watch:{listdata:function(t){Array.isArray(t)&&(this.list=t)},checked:function(t){Array.isArray(t)&&this.$refs.tree.setCheckedKeys(t)}},methods:{handleCheckChange:function(t,e,a){this.$emit("checked",this.$refs.tree.getCheckedKeys())},fetchData:function(){var t=this;r["list"].r().then(function(e){t.list=n["a"](e.data.data),Array.isArray(t.checked)&&t.$nextTick(function(){t.$refs.tree.setCheckedKeys(t.checked)})})}},created:function(){this.listdata||this.fetchData()}},o=c,l=(a("2a4e"),a("2877")),p=Object(l["a"])(o,s,i,!1,null,"5e55437f",null);e["default"]=p.exports},b024:function(t,e,a){}}]);