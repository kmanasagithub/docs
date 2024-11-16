"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[6307],{60214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>x,default:()=>A,frontMatter:()=>f,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"Endpoints/accounts/create-account","title":"Create Account","description":"This endpoint allows you to create a new ScalarTax Account.","source":"@site/docs/Endpoints/accounts/create-account.api.mdx","sourceDirName":"Endpoints/accounts","slug":"/Endpoints/accounts/create-account","permalink":"/docs/reference/Endpoints/accounts/create-account","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-account","title":"Create Account","description":"This endpoint allows you to create a new ScalarTax Account.","sidebar_label":"Create Account","hide_title":true,"hide_table_of_contents":true,"api":"eJztV01v2zgQ/SvEXHYX0FpO0L3otE6bBbJYoEGd7h4CIxhTY5stRar8SGx4/d+LISVLjoOiRU8FmksE6vFxPt4b0XsIuPZQ3cNMShtN8LAooCYvnWqDsgYquNsoL8jUrVUmCNTaPnmxs1EEK6QjDCRQGHoSc4ka3R1uRUc2gQIcfYrkw5Wtd1DtQVoTyAR+xLbVSiKfUn7wfNQevNxQg/wUdi1BBXb5gWSAAlpnW3JBkc80TYtm92CwoRHaB6fMGs4zIMFIYVcibEh0u+FQAOZIH3zAEP3XUWVsT9YxiF9psp4UYiaDeqRC3BhMT7/xKdGT+/pQe7RYWTc+gplWyvnwDWkn/EnyzM5MGr+JiOEv8lCDSr/EsbKuwQBVh3iJNL0RWNeOvD8lPmTpKEc1y/Ok4WdtG1X4pETjLPtIFwVsmxRwTr5XPucSVNAnSxzGadivk+LrXuLiKNAh2uAipfB9a43Pgr2cXvC/U66eo+ecRynJ+1XUesfe+WmWn2b5ccxSAG2xaXWqkaqhAmUCrclB0e8+puvjcpzeAMwflHq5e0gMJmot/hfHfbGtv/S62/2QKsnIoFIy3bZn64dD8ver6fTcmldYi3f508W5vrq8PMe8N62zbFhcahLXJqiwm4h/Uas6GVWQc9Z5YaWMzlEt6shxZldxpMqa77L5qN75KG7+69z8LD+J5pcgliSWGs1HKI4jp7Pls/eLriR/vFSSGxNYNlrMyT2SE9d8ZNJeQ2FjuR+t9Wn8YNhABaVPF4KA27KToC+592k7x7qH6DRUsAmh9VVZYqsmXU4TaZvy8eLMCLfO1lGm6mYeOBRjmqos9/slenqITh8O5RnBP1aiPu5dcDgyOhV2KZ4rQkduFjn++8X49Zy7kOfpGHRsCh/OySUYVLBMICi6h796f//9312qGXf33XA3uh5aeTquB888n77Dm2FijgbKaPYNq6M5Nix2QynR/DmqPwtfmZVNWXZmP97xzgrbXyDF7PZGvLEyNmRCUjIUwA3PsIvJdDLtRI8yjEfL7Y2Yx7a1jjV00tKxKPwR0sfdrTwPPZBr/NsVq1VJepksYUpGs3QbNKN48ldZDOPtJN/RVfY7b8idgAJtQ9lqVCZ9BF2autlJ93B00qADHuQ8nzfsueoesuzfs+p5+VMkx5peFPCITvGISpIuYENYk0ty/0g7TjQn8vsdB8JwHTmgs1nETss7ZlJSG76IXYzGwu3b+R07ofsN0Nia9zh84msTPkEFUIBNhU0GS2t70GjWEdeMzZz89xmXuWkv","sidebar_class_name":"post api-method","info_path":"reference//Endpoints/Accounts/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Accounts","permalink":"/docs/reference/Endpoints/accounts/"},"next":{"title":"List Accounts","permalink":"/docs/reference/Endpoints/accounts/list-accounts"}}');var a=n(74848),c=n(28453),i=n(57742),o=n.n(i),r=n(78178),u=n.n(r),p=n(19624),d=n.n(p),l=n(96226),m=n.n(l),h=(n(77675),n(19365),n(51107));const f={id:"create-account",title:"Create Account",description:"This endpoint allows you to create a new ScalarTax Account.",sidebar_label:"Create Account",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v2zgQ/SvEXHYX0FpO0L3otE6bBbJYoEGd7h4CIxhTY5stRar8SGx4/d+LISVLjoOiRU8FmksE6vFxPt4b0XsIuPZQ3cNMShtN8LAooCYvnWqDsgYquNsoL8jUrVUmCNTaPnmxs1EEK6QjDCRQGHoSc4ka3R1uRUc2gQIcfYrkw5Wtd1DtQVoTyAR+xLbVSiKfUn7wfNQevNxQg/wUdi1BBXb5gWSAAlpnW3JBkc80TYtm92CwoRHaB6fMGs4zIMFIYVcibEh0u+FQAOZIH3zAEP3XUWVsT9YxiF9psp4UYiaDeqRC3BhMT7/xKdGT+/pQe7RYWTc+gplWyvnwDWkn/EnyzM5MGr+JiOEv8lCDSr/EsbKuwQBVh3iJNL0RWNeOvD8lPmTpKEc1y/Ok4WdtG1X4pETjLPtIFwVsmxRwTr5XPucSVNAnSxzGadivk+LrXuLiKNAh2uAipfB9a43Pgr2cXvC/U66eo+ecRynJ+1XUesfe+WmWn2b5ccxSAG2xaXWqkaqhAmUCrclB0e8+puvjcpzeAMwflHq5e0gMJmot/hfHfbGtv/S62/2QKsnIoFIy3bZn64dD8ver6fTcmldYi3f508W5vrq8PMe8N62zbFhcahLXJqiwm4h/Uas6GVWQc9Z5YaWMzlEt6shxZldxpMqa77L5qN75KG7+69z8LD+J5pcgliSWGs1HKI4jp7Pls/eLriR/vFSSGxNYNlrMyT2SE9d8ZNJeQ2FjuR+t9Wn8YNhABaVPF4KA27KToC+592k7x7qH6DRUsAmh9VVZYqsmXU4TaZvy8eLMCLfO1lGm6mYeOBRjmqos9/slenqITh8O5RnBP1aiPu5dcDgyOhV2KZ4rQkduFjn++8X49Zy7kOfpGHRsCh/OySUYVLBMICi6h796f//9312qGXf33XA3uh5aeTquB888n77Dm2FijgbKaPYNq6M5Nix2QynR/DmqPwtfmZVNWXZmP97xzgrbXyDF7PZGvLEyNmRCUjIUwA3PsIvJdDLtRI8yjEfL7Y2Yx7a1jjV00tKxKPwR0sfdrTwPPZBr/NsVq1VJepksYUpGs3QbNKN48ldZDOPtJN/RVfY7b8idgAJtQ9lqVCZ9BF2autlJ93B00qADHuQ8nzfsueoesuzfs+p5+VMkx5peFPCITvGISpIuYENYk0ty/0g7TjQn8vsdB8JwHTmgs1nETss7ZlJSG76IXYzGwu3b+R07ofsN0Nia9zh84msTPkEFUIBNhU0GS2t70GjWEdeMzZz89xmXuWkv",sidebar_class_name:"post api-method",info_path:"reference//Endpoints/Accounts/scalartax",custom_edit_url:null},x=void 0,T={},y=[];function b(e){const t={p:"p",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Create Account"}),"\n",(0,a.jsx)(o(),{method:"post",path:"/scalartax/accounts/",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"This endpoint allows you to create a new ScalarTax Account."}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(u(),{parameters:void 0}),"\n",(0,a.jsx)(d(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{company_name:{type:"string",description:"The name of the company"},account_status:{type:"string",description:"The status of the account (e.g., Active, Inactive)"},username:{type:"string",description:"The username for the account"},first_name:{type:"string",description:"The first name of the user"},last_name:{type:"string",description:"The last name of the user"},email:{type:"string",format:"email",description:"The email address of the user"}},required:["company_name","account_status","username","first_name","last_name","email"],xml:{name:"Account"},title:"Account"}}},description:"Created Account object",required:!0}}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{201:{description:"Account Created Successfully.",content:{"application/json":{schema:{type:"object",properties:{company_name:{type:"string",description:"The name of the company"},account_status:{type:"string",description:"The status of the account (e.g., Active, Inactive)"},username:{type:"string",description:"The username for the account"},first_name:{type:"string",description:"The first name of the user"},last_name:{type:"string",description:"The last name of the user"},email:{type:"string",format:"email",description:"The email address of the user"}},required:["company_name","account_status","username","first_name","last_name","email"],xml:{name:"Account"},title:"Account",example:{id:"integer",name:"string",subscription:"integer",createdby_id:"null | string",updatedby_id:"null | string",created_at:"datetime",updated_at:"datetime"}}}}},400:{description:"Bad Request"},422:{description:"Unprocessable Entity. Validation errors occurred during the creation.",content:{"application/json":{schema:{type:"object",example:{errors:["Company name can't be blank","Account status can't be blank"]}}}}},500:{description:"Internal Server Error"}}})]})}function A(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);