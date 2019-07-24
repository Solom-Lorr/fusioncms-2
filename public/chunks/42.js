(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{zbda:function(e,t,o){"use strict";o.r(t);var r=o("LvDl"),n=o.n(r),a={data:function(){return{endpoint:"/datatable/roles"}},methods:{isProtected:function(e){return n.a.includes(["admin","user","guest"],e)},destroy:function(e){axios.delete("/api/roles/"+e).then(function(e){toast("Role successfully deleted.","success"),proton().$emit("refresh-datatable-roles")})}}},s=o("KHd+"),l=Object(s.a)(a,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("portal",{attrs:{to:"title"}},[o("app-title",{attrs:{icon:"users-crown"}},[e._v("Roles")])],1),e._v(" "),o("portal",{attrs:{to:"actions"}},[o("router-link",{staticClass:"button",attrs:{to:{name:"roles.create"}}},[e._v("Create Role")])],1),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"content-container"},[o("p-datatable",{attrs:{endpoint:e.endpoint,name:"roles","sort-by":"name","per-page":10},scopedSlots:e._u([{key:"slug",fn:function(t){return[o("code",[e._v(e._s(t.record.slug))])]}},{key:"description",fn:function(t){return[o("span",{staticClass:"text-grey-darker text-sm"},[e._v(e._s(t.record.description))])]}},{key:"actions",fn:function(t){return[o("p-dropdown",{attrs:{right:""}},[o("fa-icon",{attrs:{icon:"bars"}}),e._v(" "),o("template",{slot:"options"},[o("p-dropdown-item",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),e.isProtected(t.record.slug)?e._e():o("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-role",value:t.record,expression:"table.record",arg:"delete-role"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                Delete\n                            ")])],1)],2)]}}])})],1)]),e._v(" "),o("portal",{attrs:{to:"modals"}},[o("p-modal",{attrs:{name:"delete-role",title:"Delete Role"},scopedSlots:e._u([{key:"footer",fn:function(t){return[o("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(o){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),o("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}]},[e._v("Cancel")])]}}])},[o("p",[e._v("Are you sure you want to permenantly delete this role?")])])],1)],1)},[],!1,null,null,null);t.default=l.exports}}]);