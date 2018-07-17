(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1jJZ":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investments',\n      type: 'repeat',\n      fieldArray: {\n        fieldGroupClassName: 'row',\n        templateOptions: {\n          btnText: 'Add another investment',\n        },\n        fieldGroup: [\n          {\n            className: 'col-sm-4',\n            type: 'input',\n            key: 'investmentName',\n            templateOptions: {\n              label: 'Name of Investment:',\n              required: true,\n            },\n          },\n          {\n            type: 'input',\n            key: 'investmentDate',\n            className: 'col-sm-3',\n            templateOptions: {\n              type: 'date',\n              label: 'Date of Investment:',\n            },\n          },\n          {\n            type: 'input',\n            key: 'stockIdentifier',\n            className: 'col-sm-3',\n            templateOptions: {\n              label: 'Stock Identifier:',\n              addonRight: {\n                class: 'fa fa-code',\n                onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},"6T7I":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={investments:[{}]},this.options={},this.fields=[{key:"investments",type:"repeat",fieldArray:{fieldGroupClassName:"row",templateOptions:{btnText:"Add another investment"},fieldGroup:[{className:"col-sm-4",type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}},{type:"input",key:"investmentDate",className:"col-sm-3",templateOptions:{type:"date",label:"Date of Investment:"}},{type:"input",key:"stockIdentifier",className:"col-sm-3",templateOptions:{label:"Stock Identifier:",addonRight:{class:"fa fa-code",onClick:function(n,s,a){return console.log(n,s,a)}}}}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Repeating Section",description:"\n              This demonstrates using\n              <code>formly-form</code> inside of a custom type in order to accomplish repeating fields.\n            ",component:o,files:[{file:"app.component.html",content:a("AYeb"),filecontent:a("C+lc")},{file:"app.component.ts",content:a("KmgH"),filecontent:a("1jJZ")},{file:"app.module.ts",content:a("djYa"),filecontent:a("uc/C")},{file:"repeat-section.type.ts",content:a("NB/M"),filecontent:a("ML5V")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),g=a("Bbog"),y=a("fFVA"),b=a("Nntq"),v=a("L0Z1"),C=a("grA4"),F=a("AMrk"),w=a("Ip0R"),x=a("mrSG"),M=function(n){function s(s){return n.call(this,s)||this}return Object(x.__extends)(s,n),s}(a("HkYz").a),N=a("UcnZ"),h=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"formly-group",[],null,null,null,u.c,u.b)),t["\u0275did"](2,16760832,null,0,F.a,[],{form:[0,"form"],field:[1,"field"],model:[2,"model"],options:[3,"options"]},null),(n()(),t["\u0275eld"](3,0,null,0,2,"div",[["class","col-sm-2 d-flex align-items-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.remove(n.context.index)&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Remove"]))],function(n,s){var a=s.component;n(s,2,0,a.formControl,s.context.$implicit,a.model[s.context.index],a.options)},null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](1,802816,null,0,w.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](2,0,null,null,2,"div",[["style","margin:30px 0;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.add()&&t),t},null,null)),(n()(),t["\u0275ted"](4,null,["",""]))],function(n,s){n(s,1,0,s.component.field.fieldGroup)},function(n,s){n(s,4,0,s.component.field.fieldArray.templateOptions.btnText)})}var A=t["\u0275ccf"]("formly-repeat-section",M,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,R,h)),t["\u0275did"](1,16760832,null,0,M,[N.a],null,null)],function(n,s){n(s,1,0)},null)},{form:"form",field:"field",model:"model",options:"options"},{},[]),T=a("pMnS"),_=a("4o01"),G=a("Dl9q"),I=a("9Glx"),S=a("wdLZ"),D=a("DAbo"),L=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function B(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,G.b,G.a)),t["\u0275did"](6,966656,null,0,I.a,[N.a,S.a,D.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,I.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending),n(s,7,0,!a.form.valid)})}var J=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,B,L)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),Y=a("M2Lx"),q=a("eDkP"),Z=a("Fzqc"),j=a("v9Dh"),P=a("6LlJ"),U=a("F6kA"),z=a("dWZg"),V=a("lLAP"),Q=a("4c35"),W=a("qAlS"),$=a("Wf4p"),H=a("La40"),E=a("SMsm"),K=a("UodH"),X=a("5QwG"),nn=a("Nsh5"),sn=a("8mMr"),an=a("LC5p"),tn=a("0/Q6"),pn=a("mqvi"),on=a("lYui"),en=a("XR12"),ln=a("1ey0"),cn=function(){},un=a("ZYCi"),rn=a("me7w"),kn=a("N3PW"),mn=a("l4pn"),dn=a("Fv2i"),fn=a("wBYW"),gn=a("IE48"),yn=a("Ltwa"),bn=a("4Mh+"),vn=a("b7gF"),Cn=a("DJQk"),Fn=a("zn1Q"),wn=a("CgTb"),xn=a("+oK5"),Mn=a("zdmU"),Nn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return hn});var hn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,y.a,b.a,v.a,C.a,A,T.a,_.a,J]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[t.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,Y.c,Y.c,[]),t["\u0275mpd"](4608,q.c,q.c,[q.i,q.e,t.ComponentFactoryResolver,q.h,q.f,t.Injector,t.NgZone,w.DOCUMENT,Z.b]),t["\u0275mpd"](5120,q.j,q.k,[q.c]),t["\u0275mpd"](5120,j.b,j.c,[q.c]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,D.b,D.b,[D.a]),t["\u0275mpd"](4608,S.a,S.a,[]),t["\u0275mpd"](4608,N.a,N.a,[D.b,S.a]),t["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,Y.d,Y.d,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,Q.g,Q.g,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,q.g,q.g,[]),t["\u0275mpd"](1073742336,$.l,$.l,[[2,$.d]]),t["\u0275mpd"](1073742336,j.e,j.e,[]),t["\u0275mpd"](1073742336,$.w,$.w,[]),t["\u0275mpd"](1073742336,H.i,H.i,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,K.c,K.c,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,nn.h,nn.h,[]),t["\u0275mpd"](1073742336,sn.b,sn.b,[]),t["\u0275mpd"](1073742336,$.m,$.m,[]),t["\u0275mpd"](1073742336,$.u,$.u,[]),t["\u0275mpd"](1073742336,an.b,an.b,[]),t["\u0275mpd"](1073742336,tn.c,tn.c,[]),t["\u0275mpd"](1073742336,pn.a,pn.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,on.a,on.a,[]),t["\u0275mpd"](1073742336,en.a,en.a,[]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,cn,cn,[]),t["\u0275mpd"](1073742336,un.r,un.r,[[2,un.x],[2,un.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,D.a,function(){return[{types:[{name:"formly-group",component:F.a}]},{types:[{name:"input",component:rn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:kn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:dn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:fn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:gn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:yn.a},{name:"description",component:bn.a},{name:"validation-message",component:vn.a},{name:"fieldset",component:Cn.a},{name:"addons",component:Fn.a}],manipulators:[{class:wn.a,method:"run"},{class:xn.a,method:"run"},{class:Mn.a,method:"run"}]},{types:[{name:"formly-group",component:F.a}]},{types:[{name:"repeat",component:M}]}]},[]),t["\u0275mpd"](1024,un.m,function(){return[[{path:"",component:Nn.a,data:e}]]},[])])})},AYeb:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},"C+lc":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},KmgH:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    investments<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'investments\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'repeat\'</span><span class="token punctuation" >,</span>\n      fieldArray<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n        templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          btnText<span class="token punctuation" >:</span> <span class="token string" >\'Add another investment\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-4\'</span><span class="token punctuation" >,</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'investmentName\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Name of Investment:\'</span><span class="token punctuation" >,</span>\n              required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'investmentDate\'</span><span class="token punctuation" >,</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-3\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              type<span class="token punctuation" >:</span> <span class="token string" >\'date\'</span><span class="token punctuation" >,</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Date of Investment:\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'stockIdentifier\'</span><span class="token punctuation" >,</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-3\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Stock Identifier:\'</span><span class="token punctuation" >,</span>\n              addonRight<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n                <span class="token keyword" >class</span><span class="token punctuation" >:</span> <span class="token string" >\'fa fa-code\'</span><span class="token punctuation" >,</span>\n                onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>to<span class="token punctuation" >,</span> fieldType<span class="token punctuation" >,</span> $event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>to<span class="token punctuation" >,</span> fieldType<span class="token punctuation" >,</span> $event<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n              <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},ML5V:function(n,s){n.exports='import { Component } from \'@angular/core\';\nimport { FieldArrayType, FormlyFormBuilder } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-repeat-section\',\n  template: `\n    <div *ngFor="let field of field.fieldGroup; let i = index;">\n      <formly-group\n        [model]="model[i]"\n        [field]="field"\n        [options]="options"\n        [form]="formControl">\n        <div class="col-sm-2 d-flex align-items-center">\n          <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>\n        </div>\n      </formly-group>\n    </div>\n    <div style="margin:30px 0;">\n      <button class="btn btn-primary" type="button" (click)="add()">{{ field.fieldArray.templateOptions.btnText }}</button>\n    </div>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {\n  constructor(builder: FormlyFormBuilder) {\n    super(builder);\n  }\n}\n'},"NB/M":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldArrayType<span class="token punctuation" >,</span> FormlyFormBuilder <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-repeat-section\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token operator" >*</span>ngFor<span class="token operator" >=</span><span class="token string" >"let field of field.fieldGroup; let i = index;"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>formly<span class="token operator" >-</span>group\n        <span class="token punctuation" >[</span>model<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"model[i]"</span>\n        <span class="token punctuation" >[</span>field<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"field"</span>\n        <span class="token punctuation" >[</span>options<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"options"</span>\n        <span class="token punctuation" >[</span>form<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"formControl"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-2 d-flex align-items-center"</span><span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>button <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"btn btn-danger"</span> type<span class="token operator" >=</span><span class="token string" >"button"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"remove(i)"</span><span class="token operator" >></span>Remove<span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n        <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>formly<span class="token operator" >-</span>group<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span>div style<span class="token operator" >=</span><span class="token string" >"margin:30px 0;"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>button <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"btn btn-primary"</span> type<span class="token operator" >=</span><span class="token string" >"button"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"add()"</span><span class="token operator" >></span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> field<span class="token punctuation" >.</span>fieldArray<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>btnText <span class="token punctuation" >}</span><span class="token punctuation" >}</span><span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >RepeatTypeComponent</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldArrayType</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span>builder<span class="token punctuation" >:</span> FormlyFormBuilder<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >super</span><span class="token punctuation" >(</span>builder<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},djYa:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> RepeatTypeComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./repeat-section.type\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'repeat\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> RepeatTypeComponent <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    RepeatTypeComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"uc/C":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);