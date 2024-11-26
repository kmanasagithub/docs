"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[6307],{60214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>g,frontMatter:()=>j,metadata:()=>c,toc:()=>x});const c=JSON.parse('{"id":"Endpoints/accounts/create-account","title":"Create Account","description":"This endpoint allows you to create a new ScalarTax Account.","source":"@site/docs/Endpoints/accounts/create-account.api.mdx","sourceDirName":"Endpoints/accounts","slug":"/Endpoints/accounts/create-account","permalink":"/docs/reference/Endpoints/accounts/create-account","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-account","title":"Create Account","description":"This endpoint allows you to create a new ScalarTax Account.","sidebar_label":"Create Account","hide_title":true,"hide_table_of_contents":true,"api":"eJztV02P2zYQ/SvEXNoCquVdpBed6k22wBYFsoid9mAYBk2NbSYUqfBj14Lr/x4MKVnS2ggS5BQge1mBenycj/dG9BE83zkoljATwgTtHawyKNEJK2svjYYCFnvpGOqyNlJ7xpUyz441JjBvmLDIPTLOND6zueCK2wU/sJZsAhnskZdooViuMrD4KaDzd6ZsoDiCMNqj9vTI61pJwenE/IOjY4/gxB4rTk++qREKMJsPKDxkUFtTo/USXaKpaq6bteYVDtDOW6l3cJkNMkIys2V+j6zdDacMeIp67Tz3wX0dVcJ2ZC0D+xUnu0nGZsLLJ8zYg+bx6Tc6JTi0Xx9qh2ZbY4dHENNWWue/Ie2IHyVP7MSk+DcREfwqD1ZcqmscW2Mr7qFoEddI4xvGy9Kic2PiU5KOtFiSVEcNv2jboMKjEg2z7CJdZXCoYsAp+c4FlIuXXo2WKIxx2K+j+stO7uws0D5abwPG8F1ttEuCvZ3e0L8xV8fRcc6DEOjcNijVkI9+muWnWX4cs2SAB17VKtZIllCA1B53aCHrdp/TdWEzTK8Hpo9LuWnWkUEHpdj/7Lwv1OWXXre717GShPQyJtNue7F+OkV/v5pOL615x0v2Ln26KNdXt7eXmPe6toYMyzcK2b320jcT9i9XsoxGZWitsY4ZIYK1WLIyUJzJVRSpNPq7bD6odzqKmv86NT/JT3D9i2cbZBvF9UfIziOnteWL96u2JH9cK8mD9iQbxeZon9Cyezoyaq9CvzfUj9q4OH6430MBuYuXA88PeStBl1Pv43aK9QjBKihg733tijzntZy0OU2EqfKnmwsjPFpTBhGrm3jglA1pijw/Hjfc4TpYdTrlFwT/GMHVee+KwhHBSt/EeO6QW7SzQPEvV8PXc+pCmqdD0LkpdDglF2FQwCaCIGsf/ur8/fd/i1gz6u67/m5037dyPK57z7ycvv2bfmIOBspg9vWrgznWL7ZDKdL8Oag/CV/qrYlZtmY/3/cuCttdJtns8YG9MSJUqH1UMmRADU+wm8l0Mm1Fz4UfjpbHBzYPdW0saWjU0qEo3BnSxd2uvAzdo63c2y2pVQq8ThYxOaFJuhXXg3jSV5n1422U7+Aq+5235VZAHg8+rxWXOn4EbZy6yUlLODup1wENcprPe/JcsYQk+/ekelr+FNA26Qr+xK2kERUlPbidH+EjNpRoSuT3BQVCcBUooItZRE5LO2ZCYO2/iF0NxsLj2/mCnND+BqhMSXssf6ZrE3+GAiADEwsbDRbXjqC43gW+I2zipL/PBVps+g==","sidebar_class_name":"post api-method","info_path":"reference//Endpoints/Accounts/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Accounts","permalink":"/docs/reference/Endpoints/accounts/"},"next":{"title":"List Accounts","permalink":"/docs/reference/Endpoints/accounts/list-accounts"}}');var s=n(74848),a=n(28453),o=n(57742),i=n.n(o),r=n(78178),d=n.n(r),p=n(19624),u=n.n(p),l=n(96226),m=n.n(l),h=(n(77675),n(19365),n(51107));const j={id:"create-account",title:"Create Account",description:"This endpoint allows you to create a new ScalarTax Account.",sidebar_label:"Create Account",hide_title:!0,hide_table_of_contents:!0,api:"eJztV02P2zYQ/SvEXNoCquVdpBed6k22wBYFsoid9mAYBk2NbSYUqfBj14Lr/x4MKVnS2ggS5BQge1mBenycj/dG9BE83zkoljATwgTtHawyKNEJK2svjYYCFnvpGOqyNlJ7xpUyz441JjBvmLDIPTLOND6zueCK2wU/sJZsAhnskZdooViuMrD4KaDzd6ZsoDiCMNqj9vTI61pJwenE/IOjY4/gxB4rTk++qREKMJsPKDxkUFtTo/USXaKpaq6bteYVDtDOW6l3cJkNMkIys2V+j6zdDacMeIp67Tz3wX0dVcJ2ZC0D+xUnu0nGZsLLJ8zYg+bx6Tc6JTi0Xx9qh2ZbY4dHENNWWue/Ie2IHyVP7MSk+DcREfwqD1ZcqmscW2Mr7qFoEddI4xvGy9Kic2PiU5KOtFiSVEcNv2jboMKjEg2z7CJdZXCoYsAp+c4FlIuXXo2WKIxx2K+j+stO7uws0D5abwPG8F1ttEuCvZ3e0L8xV8fRcc6DEOjcNijVkI9+muWnWX4cs2SAB17VKtZIllCA1B53aCHrdp/TdWEzTK8Hpo9LuWnWkUEHpdj/7Lwv1OWXXre717GShPQyJtNue7F+OkV/v5pOL615x0v2Ln26KNdXt7eXmPe6toYMyzcK2b320jcT9i9XsoxGZWitsY4ZIYK1WLIyUJzJVRSpNPq7bD6odzqKmv86NT/JT3D9i2cbZBvF9UfIziOnteWL96u2JH9cK8mD9iQbxeZon9Cyezoyaq9CvzfUj9q4OH6430MBuYuXA88PeStBl1Pv43aK9QjBKihg733tijzntZy0OU2EqfKnmwsjPFpTBhGrm3jglA1pijw/Hjfc4TpYdTrlFwT/GMHVee+KwhHBSt/EeO6QW7SzQPEvV8PXc+pCmqdD0LkpdDglF2FQwCaCIGsf/ur8/fd/i1gz6u67/m5037dyPK57z7ycvv2bfmIOBspg9vWrgznWL7ZDKdL8Oag/CV/qrYlZtmY/3/cuCttdJtns8YG9MSJUqH1UMmRADU+wm8l0Mm1Fz4UfjpbHBzYPdW0saWjU0qEo3BnSxd2uvAzdo63c2y2pVQq8ThYxOaFJuhXXg3jSV5n1422U7+Aq+5235VZAHg8+rxWXOn4EbZy6yUlLODup1wENcprPe/JcsYQk+/ekelr+FNA26Qr+xK2kERUlPbidH+EjNpRoSuT3BQVCcBUooItZRE5LO2ZCYO2/iF0NxsLj2/mCnND+BqhMSXssf6ZrE3+GAiADEwsbDRbXjqC43gW+I2zipL/PBVps+g==",sidebar_class_name:"post api-method",info_path:"reference//Endpoints/Accounts/scalartax",custom_edit_url:null},y=void 0,f={},x=[];function b(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Create Account"}),"\n",(0,s.jsx)(i(),{method:"post",path:"/scalartax/accounts/",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint allows you to create a new ScalarTax Account."}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(d(),{parameters:void 0}),"\n",(0,s.jsx)(u(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{company_name:{type:"string",description:"The name of the company"},account_status:{type:"string",description:"The status of the account (e.g., Active, Inactive)"},username:{type:"string",description:"The username for the account"},first_name:{type:"string",description:"The first name of the user"},last_name:{type:"string",description:"The last name of the user"},email:{type:"string",format:"email",description:"The email address of the user"}},required:["company_name","account_status","username","first_name","last_name","email"],xml:{name:"Account"},title:"Account"}}},description:"Created Account object",required:!0}}),"\n",(0,s.jsx)(m(),{id:void 0,label:void 0,responses:{201:{description:"Account Created Successfully.",content:{"application/json":{schema:{type:"object",properties:{company_name:{type:"string",description:"The name of the company"},account_status:{type:"string",description:"The status of the account (e.g., Active, Inactive)"},username:{type:"string",description:"The username for the account"},first_name:{type:"string",description:"The first name of the user"},last_name:{type:"string",description:"The last name of the user"},email:{type:"string",format:"email",description:"The email address of the user"}},required:["company_name","account_status","username","first_name","last_name","email"],xml:{name:"Account"},title:"Account",example:{id:"integer",name:"string",subscription:"integer",createdby_id:"null | string",updatedby_id:"null | string",created_at:"datetime",updated_at:"datetime"}}}}},400:{description:"Bad Request"},422:{description:"Unprocessable Entity. Validation errors occurred during the creation.",content:{"application/json":{schema:{type:"object",example:{errors:["Company name can't be blank","Account status can't be blank"]}}}}},500:{description:"Internal Server Error"}}})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}}}]);