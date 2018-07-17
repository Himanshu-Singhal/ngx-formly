(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"82yA":function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'name',\n      type: 'input',\n      templateOptions: {\n        label: 'Name (required)',\n        required: true,\n      },\n    },\n    {\n      key: 'age',\n      type: 'input',\n      templateOptions: {\n        label: 'Age (min= 18, max= 40)',\n        type: 'number',\n        min: 18,\n        max: 40,\n        required: true,\n      },\n    },\n    {\n      key: 'password',\n      type: 'input',\n      templateOptions: {\n        label: 'Password (minLength = 6)',\n        type: 'password',\n        required: true,\n        minLength: 6,\n      },\n    },\n    {\n      key: 'comment',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Comment (maxLength = 100)',\n        required: true,\n        maxLength: 100,\n        rows: 5,\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)',\n        pattern: /(\\d{1,3}\\.){3}\\d{1,3}/,\n        required: true,\n      },\n      validation: {\n        messages: {\n          pattern: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},"9G9D":function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Name (required)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Age (min= 18, max= 40)\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'number\'</span><span class="token punctuation" >,</span>\n        min<span class="token punctuation" >:</span> <span class="token number" >18</span><span class="token punctuation" >,</span>\n        max<span class="token punctuation" >:</span> <span class="token number" >40</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Password (minLength = 6)\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        minLength<span class="token punctuation" >:</span> <span class="token number" >6</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'comment\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'textarea\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Comment (maxLength = 100)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        maxLength<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span>\n        rows<span class="token punctuation" >:</span> <span class="token number" >5</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)\'</span><span class="token punctuation" >,</span>\n        pattern<span class="token punctuation" >:</span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validation<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        messages<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          pattern<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>error<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},aNq4:function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"name",type:"input",templateOptions:{label:"Name (required)",required:!0}},{key:"age",type:"input",templateOptions:{label:"Age (min= 18, max= 40)",type:"number",min:18,max:40,required:!0}},{key:"password",type:"input",templateOptions:{label:"Password (minLength = 6)",type:"password",required:!0,minLength:6}},{key:"comment",type:"textarea",templateOptions:{label:"Comment (maxLength = 100)",required:!0,maxLength:100,rows:5}},{key:"ip",type:"input",templateOptions:{label:"IP Address (pattern = /(d{1,3}.){3}d{1,3}/)",pattern:/(\d{1,3}\.){3}\d{1,3}/,required:!0},validation:{messages:{pattern:function(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"List of default / built-in validations",component:o,files:[{file:"app.component.html",content:s("x6Fb"),filecontent:s("frue")},{file:"app.component.ts",content:s("9G9D"),filecontent:s("82yA")},{file:"app.module.ts",content:s("avhO"),filecontent:s("ymx1")}]}]},l=function(){},u=s("NcP4"),c=s("goW2"),i=s("MT1c"),r=s("1Q/V"),k=s("9+aI"),m=s("haId"),d=s("LJsP"),g=s("yR2A"),f=s("Bbog"),y=s("fFVA"),b=s("Nntq"),h=s("L0Z1"),v=s("grA4"),x=s("pMnS"),w=s("4o01"),F=s("Dl9q"),M=s("9Glx"),C=s("UcnZ"),O=s("wdLZ"),L=s("DAbo"),q=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,F.b,F.a)),t["\u0275did"](6,966656,null,0,M.a,[C.a,O.a,L.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,M.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var _=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,A,q)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),N=s("Ip0R"),S=s("M2Lx"),V=s("eDkP"),G=s("Fzqc"),R=s("v9Dh"),P=s("6LlJ"),T=s("F6kA"),I=s("dWZg"),D=s("lLAP"),$=s("4c35"),B=s("qAlS"),J=s("Wf4p"),U=s("La40"),Z=s("SMsm"),z=s("UodH"),Q=s("5QwG"),W=s("Nsh5"),Y=s("8mMr"),E=s("LC5p"),j=s("0/Q6"),H=s("mqvi"),K=s("lYui"),X=s("XR12"),nn=s("1ey0");function an(n,a){return"Should have atleast "+a.templateOptions.minLength+" characters"}function sn(n,a){return"This value should be less than "+a.templateOptions.maxLength+" characters"}function tn(n,a){return"This value should be more than "+a.templateOptions.min}function pn(n,a){return"This value should be less than "+a.templateOptions.max}var on=function(){},en=s("ZYCi"),ln=s("AMrk"),un=s("me7w"),cn=s("N3PW"),rn=s("l4pn"),kn=s("Fv2i"),mn=s("wBYW"),dn=s("IE48"),gn=s("Ltwa"),fn=s("4Mh+"),yn=s("b7gF"),bn=s("DJQk"),hn=s("zn1Q"),vn=s("CgTb"),xn=s("+oK5"),wn=s("zdmU"),Fn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return Mn});var Mn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,c.a,i.a,r.a,k.a,m.a,d.a,g.a,f.a,y.a,b.a,h.a,v.a,x.a,w.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[t.LOCALE_ID,[2,N["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,S.c,S.c,[]),t["\u0275mpd"](4608,V.c,V.c,[V.i,V.e,t.ComponentFactoryResolver,V.h,V.f,t.Injector,t.NgZone,N.DOCUMENT,G.b]),t["\u0275mpd"](5120,V.j,V.k,[V.c]),t["\u0275mpd"](5120,R.b,R.c,[V.c]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](4608,T.a,T.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,L.b,L.b,[L.a]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,C.a,C.a,[L.b,O.a]),t["\u0275mpd"](1073742336,N.CommonModule,N.CommonModule,[]),t["\u0275mpd"](1073742336,I.b,I.b,[]),t["\u0275mpd"](1073742336,S.d,S.d,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,$.g,$.g,[]),t["\u0275mpd"](1073742336,B.b,B.b,[]),t["\u0275mpd"](1073742336,V.g,V.g,[]),t["\u0275mpd"](1073742336,J.l,J.l,[[2,J.d]]),t["\u0275mpd"](1073742336,R.e,R.e,[]),t["\u0275mpd"](1073742336,J.w,J.w,[]),t["\u0275mpd"](1073742336,U.i,U.i,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,W.h,W.h,[]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,J.m,J.m,[]),t["\u0275mpd"](1073742336,J.u,J.u,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,j.c,j.c,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,nn.a,nn.a,[]),t["\u0275mpd"](1073742336,on,on,[]),t["\u0275mpd"](1073742336,en.r,en.r,[[2,en.x],[2,en.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,L.a,function(){return[{types:[{name:"formly-group",component:ln.a}]},{types:[{name:"input",component:un.a,wrappers:["fieldset","label"]},{name:"checkbox",component:cn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:dn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:gn.a},{name:"description",component:fn.a},{name:"validation-message",component:yn.a},{name:"fieldset",component:bn.a},{name:"addons",component:hn.a}],manipulators:[{class:vn.a,method:"run"},{class:xn.a,method:"run"},{class:wn.a,method:"run"}]},{types:[{name:"formly-group",component:ln.a}]},{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:an},{name:"maxlength",message:sn},{name:"min",message:tn},{name:"max",message:pn}]}]},[]),t["\u0275mpd"](1024,en.m,function(){return[[{path:"",component:Fn.a,data:e}]]},[])])})},avhO:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >minlengthValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`Should have atleast </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>minLength<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > characters`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >maxlengthValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`This value should be less than </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>maxLength<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > characters`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >minValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`This value should be more than </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>min<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >maxValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`This value should be less than </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>max<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'minlength\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> minlengthValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'maxlength\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> maxlengthValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'min\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> minValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'max\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> maxValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},frue:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},x6Fb:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},ymx1:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\nexport function minlengthValidationMessage(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nexport function maxlengthValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.maxLength} characters`;\n}\n\nexport function minValidationMessage(err, field) {\n  return `This value should be more than ${field.templateOptions.min}`;\n}\n\nexport function maxValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.max}`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessage },\n        { name: 'maxlength', message: maxlengthValidationMessage },\n        { name: 'min', message: minValidationMessage },\n        { name: 'max', message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);