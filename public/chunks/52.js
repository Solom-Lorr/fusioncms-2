(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{cS6j:function(s,t,e){"use strict";e.r(t);e("wd/R");var a={data:function(){return{user:null,id:Number(this.$route.params.user)||null,roles:null,errors:{},name:"",email:"",role:null,password:"",passwordConfirmation:"",status:"1"}},computed:{roleOptions:function(){var s=_.filter(this.roles,function(s){return"guest"!==s.handle});return s=_.map(s,function(s){return{label:s.name,value:s.slug}})}},methods:{hasError:function(s){return void 0!==this.errors[s]},getError:function(s){return this.hasError(s)?this.errors[s][0]:""},submit:function(){var s=this;axios.patch("/api/users/"+this.id,{name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation,role:this.role,status:this.status}).then(function(t){toast("User successfully updated","success"),s.$router.push("/users")}).catch(function(t){toast(t.response.data.message,"failed"),s.errors=t.response.data.errors})}},beforeRouteEnter:function(s,t,e){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+s.params.user)]).then(axios.spread(function(s,t){e(function(e){e.roles=s.data.data,e.user=t.data.data,e.name=e.user.name,e.email=e.user.email,e.role=e.user.roles[0].slug,e.status=e.user.status?"1":"0"})}))}},r=e("KHd+"),i=Object(r.a)(a,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"user-alt"}},[s._v("Edit User")])],1),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"content-container"},[e("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[e("p-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[e("div",{staticClass:"xl:mr-10"},[e("h3",[s._v("Personal")]),s._v(" "),e("p",{staticClass:"text-sm"},[s._v("Information to identify the user both within the CMS and by means of login.")])])]),s._v(" "),e("div",{staticClass:"col w-full xl:w-2/3"},[e("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off","has-error":s.hasError("name"),"error-message":s.getError("name"),autofocus:"",required:""},model:{value:s.name,callback:function(t){s.name=t},expression:"name"}}),s._v(" "),e("p-input",{attrs:{type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":s.hasError("email"),"error-message":s.getError("email"),required:""},model:{value:s.email,callback:function(t){s.email=t},expression:"email"}})],1)]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[e("div",{staticClass:"xl:mr-10"},[e("h3",[s._v("Security")]),s._v(" "),e("p",{staticClass:"text-sm"},[s._v("Secure the account by specifying the role and setting a strong password.")])])]),s._v(" "),e("div",{staticClass:"col w-full xl:w-2/3"},[e("p-select",{attrs:{name:"role",label:"Role",options:s.roleOptions,autocomplete:"off",value:"user","has-error":s.hasError("role"),"error-message":s.getError("role"),required:""},model:{value:s.role,callback:function(t){s.role=t},expression:"role"}}),s._v(" "),e("p-input",{attrs:{type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":s.hasError("password"),"error-message":s.getError("password"),required:""},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),e("p-input",{attrs:{type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":s.hasError("password_confirmation"),"error-message":s.getError("password_confirmation"),required:""},model:{value:s.passwordConfirmation,callback:function(t){s.passwordConfirmation=t},expression:"passwordConfirmation"}})],1)])])],1)]),s._v(" "),e("div",{staticClass:"side-container"},[e("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[e("p-card",{staticClass:"mb-6"},[e("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:s.status,callback:function(t){s.status=t},expression:"status"}}),s._v(" "),e("portal",{attrs:{to:"actions"}},[e("router-link",{staticClass:"button mr-3",attrs:{to:{name:"users"}}},[s._v("Cancel")]),s._v(" "),e("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),s.submit(t)}}},[s._v("Save User")])],1)],1)],1),s._v(" "),e("p-card",{staticClass:"text-center mb-6"},[e("img",{attrs:{src:"/img/avatar.png",alt:"Avatar"}})]),s._v(" "),s.user?e("p-card",{staticClass:"text-sm"},[e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Status")]),s._v(" "),s.user.status?e("p",[s._v("Enabled "),e("fa-icon",{staticClass:"text-success-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1):e("p",[s._v("Disabled "),e("fa-icon",{staticClass:"text-danger-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1)]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Verified")]),s._v(" "),s.user.verified?e("p",[s._v("Yes "),e("fa-icon",{staticClass:"text-success-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1):e("p",[s._v("No "),e("fa-icon",{staticClass:"text-danger-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1)]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Registered")]),s._v(" "),e("p",[s._v(s._s(s.moment(s.user.created_at.date).format("L")))])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Last Login")]),s._v(" "),s.user.logged_in_at?e("p",[s._v(s._s(s.moment(s.user.logged_in_at.date).format("L")))]):e("p",[s._v("Never")])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Last Invalid Login")]),s._v(" "),s.user.invalidly_logged_in_at?e("p",[s._v(s._s(s.moment(s.user.invalidly_logged_in_at.date).format("L")))]):e("p",[s._v("Never")])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Last Password Change")]),s._v(" "),s.user.password_changed_at?e("p",[s._v(s._s(s.moment(s.user.password_changed_at.date).format("L")))]):e("p",[s._v("Never")])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Invalid Login Count")]),s._v(" "),e("p",[s._v(s._s(s.user.invalid_logins))])])]):s._e()],1)])],1)},[],!1,null,null,null);t.default=i.exports}}]);