(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new-employee"],{"6bd2":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"new-employee"}},[o("h3",[e._v("New Employee")]),o("div",{staticClass:"row"},[o("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.id,expression:"employee.id"}],attrs:{type:"text",required:""},domProps:{value:e.employee.id},on:{input:function(t){t.target.composing||e.$set(e.employee,"id",t.target.value)}}}),o("label",[e._v("Employee ID")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],attrs:{type:"text",required:""},domProps:{value:e.employee.name},on:{input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),o("label",[e._v("name")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],attrs:{type:"text",required:""},domProps:{value:e.employee.email},on:{input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),o("label",[e._v("Email")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.department,expression:"employee.department"}],attrs:{type:"text",required:""},domProps:{value:e.employee.department},on:{input:function(t){t.target.composing||e.$set(e.employee,"department",t.target.value)}}}),o("label",[e._v("Department")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.position,expression:"employee.position"}],attrs:{type:"text",required:""},domProps:{value:e.employee.position},on:{input:function(t){t.target.composing||e.$set(e.employee,"position",t.target.value)}}}),o("label",[e._v("Position")])])]),o("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),o("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},i=[],l=o("a9b7"),s={name:"new-employee",data:function(){return{employee:{id:"",email:"",position:"",name:"",department:""}}},methods:{saveEmployee:function(){var e=this;l["a"].collection("employees").add(this.employee).then((function(t){return e.$router.push("/")})).catch((function(e){return console.log(e)}))}}},n=s,m=o("2877"),p=Object(m["a"])(n,a,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=new-employee.532728db.js.map