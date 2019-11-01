(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ke3Z:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,r,a;return t=e,(r=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&n(t.prototype,r),a&&n(t,a),e}();function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"a",(function(){return i}));var i=function(){function e(t){for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new a,this.originalData=t,t)this[r]=t[r]}var t,r,n;return t=e,(r=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var r=this;return new Promise((function(n,a){axios[e](t,r.data()).then((function(e){r.onSuccess(e.data),n(e.data)})).catch((function(e){r.onFailure(e.response.data),a(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}}])&&s(t.prototype,r),n&&s(t,n),e}()},pMm7:function(e,t,r){"use strict";r.r(t);var n=r("ke3Z"),a={data:function(){return{sections:[],form:new n.a({name:"",handle:""})}},methods:{submit:function(){var e=this;this.form.post("/api/fieldsets").then((function(t){var r={};r.sections=e.sections,axios.post("/api/fieldsets/".concat(t.data.id,"/sections"),r).then((function(t){toast("Fieldset successfully created","success"),e.$router.push("/fieldsets")}))})).catch((function(e){toast(e.message,"failed")}))}}},s=r("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"ballot"}},[e._v("Create Fieldset")])],1),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3 xxxl:w-1/4"},[r("div",{staticClass:"xxl:mr-10"},[r("h3",[e._v("General")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("What will this fieldset be called?")])])]),e._v(" "),r("div",{staticClass:"col w-full xxl:w-2/3"},[r("p-input",{attrs:{name:"name",label:"Name",help:"What this fieldset will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the fieldset's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)])]),e._v(" "),r("section-builder",{staticClass:"mt-6",model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"fieldsets"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Fieldset")])],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);