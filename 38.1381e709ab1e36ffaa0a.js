(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"3DPM":function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      modelOptions: {\n        debounce: {\n          default: 2000,\n        },\n      },\n      templateOptions: {\n        label: 'Debounce',\n      },\n    },\n    {\n      key: 'updateOnBlur',\n      type: 'input',\n      modelOptions: {\n        updateOn: 'blur',\n      },\n      templateOptions: {\n        label: '`updateOn` on Blur',\n        required: true,\n      },\n    },\n    {\n      key: 'updateOnSubmit',\n      type: 'input',\n      modelOptions: {\n        updateOn: 'submit',\n      },\n      templateOptions: {\n        label: '`updateOn` on Submit',\n        required: true,\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},JjtM:function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"input",modelOptions:{debounce:{default:2e3}},templateOptions:{label:"Debounce"}},{key:"updateOnBlur",type:"input",modelOptions:{updateOn:"blur"},templateOptions:{label:"`updateOn` on Blur",required:!0}},{key:"updateOnSubmit",type:"input",modelOptions:{updateOn:"submit"},templateOptions:{label:"`updateOn` on Submit",required:!0}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"modelOptions",description:"",component:o,files:[{file:"app.component.html",content:s("Jpa9"),filecontent:s("yMvs")},{file:"app.component.ts",content:s("qrc3"),filecontent:s("3DPM")},{file:"app.module.ts",content:s("YMX9"),filecontent:s("sJ2G")}]}]},u=function(){},l=s("NcP4"),c=s("goW2"),i=s("MT1c"),r=s("1Q/V"),m=s("9+aI"),k=s("haId"),d=s("LJsP"),f=s("yR2A"),g=s("Bbog"),b=s("fFVA"),y=s("Nntq"),F=s("L0Z1"),O=s("grA4"),v=s("pMnS"),w=s("4o01"),C=s("Dl9q"),M=s("9Glx"),h=s("UcnZ"),x=s("wdLZ"),_=s("DAbo"),q=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,C.b,C.a)),t["\u0275did"](6,966656,null,0,M.a,[h.a,x.a,_.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,M.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var R=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,q)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),N=s("Ip0R"),A=s("M2Lx"),G=s("eDkP"),D=s("Fzqc"),B=s("v9Dh"),L=s("6LlJ"),J=s("F6kA"),I=s("dWZg"),P=s("lLAP"),T=s("4c35"),U=s("qAlS"),V=s("Wf4p"),Y=s("La40"),z=s("SMsm"),Z=s("UodH"),Q=s("5QwG"),W=s("Nsh5"),j=s("8mMr"),E=s("LC5p"),X=s("0/Q6"),H=s("mqvi"),$=s("lYui"),K=s("XR12"),nn=s("1ey0");function an(n,a){return'"This required field was validated after '+a.formControl.updateOn+'"'}s("HkYz");var sn=function(){},tn=s("ZYCi"),pn=s("AMrk"),on=s("me7w"),en=s("N3PW"),un=s("l4pn"),ln=s("Fv2i"),cn=s("wBYW"),rn=s("IE48"),mn=s("Ltwa"),kn=s("4Mh+"),dn=s("b7gF"),fn=s("DJQk"),gn=s("zn1Q"),bn=s("CgTb"),yn=s("+oK5"),Fn=s("zdmU"),On=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return vn});var vn=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[l.a,c.a,i.a,r.a,m.a,k.a,d.a,f.a,g.a,b.a,y.a,F.a,O.a,v.a,w.a,R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[t.LOCALE_ID,[2,N["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,A.c,A.c,[]),t["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,t.ComponentFactoryResolver,G.h,G.f,t.Injector,t.NgZone,N.DOCUMENT,D.b]),t["\u0275mpd"](5120,G.j,G.k,[G.c]),t["\u0275mpd"](5120,B.b,B.c,[G.c]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,_.b,_.b,[_.a]),t["\u0275mpd"](4608,x.a,x.a,[]),t["\u0275mpd"](4608,h.a,h.a,[_.b,x.a]),t["\u0275mpd"](1073742336,N.CommonModule,N.CommonModule,[]),t["\u0275mpd"](1073742336,I.b,I.b,[]),t["\u0275mpd"](1073742336,A.d,A.d,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,T.g,T.g,[]),t["\u0275mpd"](1073742336,U.b,U.b,[]),t["\u0275mpd"](1073742336,G.g,G.g,[]),t["\u0275mpd"](1073742336,V.l,V.l,[[2,V.d]]),t["\u0275mpd"](1073742336,B.e,B.e,[]),t["\u0275mpd"](1073742336,V.w,V.w,[]),t["\u0275mpd"](1073742336,Y.i,Y.i,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,W.h,W.h,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,V.m,V.m,[]),t["\u0275mpd"](1073742336,V.u,V.u,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,X.c,X.c,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,nn.a,nn.a,[]),t["\u0275mpd"](1073742336,sn,sn,[]),t["\u0275mpd"](1073742336,tn.r,tn.r,[[2,tn.x],[2,tn.o]]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,_.a,function(){return[{types:[{name:"formly-group",component:pn.a}]},{types:[{name:"input",component:on.a,wrappers:["fieldset","label"]},{name:"checkbox",component:en.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:un.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:ln.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:mn.a},{name:"description",component:kn.a},{name:"validation-message",component:dn.a},{name:"fieldset",component:fn.a},{name:"addons",component:gn.a}],manipulators:[{class:bn.a,method:"run"},{class:yn.a,method:"run"},{class:Fn.a,method:"run"}]},{types:[{name:"formly-group",component:pn.a}]},{validationMessages:[{name:"required",message:an}]}]},[]),t["\u0275mpd"](1024,tn.m,function(){return[[{path:"",component:On.a,data:e}]]},[])])})},Jpa9:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},YMX9:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >RequiredValidatorMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> `<span class="token string" >"This required field was validated after ${field.formControl.updateOn}"</span>`<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span>\n          message<span class="token punctuation" >:</span> RequiredValidatorMessage<span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},qrc3:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      modelOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        debounce<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >default</span><span class="token punctuation" >:</span> <span class="token number" >2000</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Debounce\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'updateOnBlur\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      modelOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        updateOn<span class="token punctuation" >:</span> <span class="token string" >\'blur\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'`updateOn` on Blur\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'updateOnSubmit\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      modelOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        updateOn<span class="token punctuation" >:</span> <span class="token string" >\'submit\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'`updateOn` on Submit\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},sJ2G:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n\nexport function RequiredValidatorMessage(err, field: FormlyFieldConfig) {\n  return `\"This required field was validated after ${field.formControl.updateOn}\"`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        {\n          name: 'required',\n          message: RequiredValidatorMessage,\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},yMvs:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'}}]);