(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"6bd2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.id,expression:"employee.id"}],attrs:{type:"text",required:""},domProps:{value:e.employee.id},on:{input:function(t){t.target.composing||e.$set(e.employee,"id",t.target.value)}}}),a("label",[e._v("Employee ID")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],attrs:{type:"text",required:""},domProps:{value:e.employee.name},on:{input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),a("label",[e._v("name")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],attrs:{type:"text",required:""},domProps:{value:e.employee.email},on:{input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),a("label",[e._v("Email")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.department,expression:"employee.department"}],attrs:{type:"text",required:""},domProps:{value:e.employee.department},on:{input:function(t){t.target.composing||e.$set(e.employee,"department",t.target.value)}}}),a("label",[e._v("Department")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.position,expression:"employee.position"}],attrs:{type:"text",required:""},domProps:{value:e.employee.position},on:{input:function(t){t.target.composing||e.$set(e.employee,"position",t.target.value)}}}),a("label",[e._v("Position")])])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},o=[],n=a("ddda"),s={name:"new-employee",data:function(){return{employee:{id:"",email:"",position:"",name:"",department:""}}},methods:{saveEmployee:function(){var e=this;n["a"].collection("employees").add(this.employee).then((function(t){return e.$router.push("/")})).catch((function(e){return console.log(e)}))}}},l=s,r=a("2877"),m=Object(r["a"])(l,i,o,!1,null,null,null);t["default"]=m.exports},7277:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employees,(function(t,i){return a("li",{key:i,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.department))]),e._v(e._s(t.employee_id)+": "+e._s(t.name)+" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)}))],2),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"collection-header"},[a("h4",[e._v("Employees")])])}],n=(a("4160"),a("b0c0"),a("159b"),a("ddda")),s={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;n["a"].collection("employees").orderBy("department").get().then((function(t){t.forEach((function(t){var a={id:t.id,employee_id:t.data().id,department:t.data().department,name:t.data().name,email:t.data().email,position:t.data().position};e.employees.push(a)}))}))}},l=s,r=a("2877"),m=Object(r["a"])(l,i,o,!1,null,null,null);t["default"]=m.exports},b0c0:function(e,t,a){var i=a("83ab"),o=a("9bf2").f,n=Function.prototype,s=n.toString,l=/^\s*function ([^ (]*)/,r="name";i&&!(r in n)&&o(n,r,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=about.f8482552.js.map