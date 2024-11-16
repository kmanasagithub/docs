"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[2577],{84185:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>x,contentTitle:()=>y,default:()=>b,frontMatter:()=>f,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"Endpoints/customers/create-customer","title":"Create Customer","description":"This endpoint allows you to add a new customer to the scalartax.","source":"@site/docs/Endpoints/customers/create-customer.api.mdx","sourceDirName":"Endpoints/customers","slug":"/Endpoints/customers/create-customer","permalink":"/docs/reference/Endpoints/customers/create-customer","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-customer","title":"Create Customer","description":"This endpoint allows you to add a new customer to the scalartax.","sidebar_label":"Create Customer","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"reference//Endpoints/Customers/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Customers","permalink":"/docs/reference/Endpoints/customers/"},"next":{"title":"List Customers","permalink":"/docs/reference/Endpoints/customers/list-customers"}}');var r=i(74848),a=i(28453),n=i(57742),o=i.n(n),d=i(78178),c=i.n(d),p=i(19624),m=i.n(p),u=i(96226),l=i.n(u),h=(i(77675),i(19365),i(51107));const f={id:"create-customer",title:"Create Customer",description:"This endpoint allows you to add a new customer to the scalartax.",sidebar_label:"Create Customer",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"reference//Endpoints/Customers/scalartax",custom_edit_url:null},y=void 0,x={},g=[];function _(t){const e={p:"p",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Create Customer"}),"\n",(0,r.jsx)(o(),{method:"post",path:"/scalartax/customers",context:"endpoint"}),"\n",(0,r.jsx)(e.p,{children:"This endpoint allows you to add a new customer to the scalartax."}),"\n",(0,r.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:void 0}),"\n",(0,r.jsx)(m(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the customer"},customer_name:{type:"string",description:"The name of the customer"},external_customer_id:{type:"string",description:"External identifier for the customer"},contact_id:{type:"string",description:"Unique identifier for the contact"},address_id:{type:"string",description:"Unique identifier for the address"},tax_exemption_status:{type:"boolean",description:"Indicates if the customer has a tax exemption"},customer_code:{type:"string",description:"Internal code for the customer"},alternate_id:{type:"string",description:"Alternate identifier for the customer"},taxpayer_id:{type:"string",description:"Taxpayer identifier"},last_transaction:{type:"string",format:"date-time",description:"Date and time of the last transaction"},customer_labels:{type:"string",description:"Labels associated with the customer"},exposure_zones:{type:"string",description:"Exposure zone of the customer"},created_by_id:{type:"string",description:"ID of the user who created the customer"},updated_by_id:{type:"string",description:"ID of the user who last updated the customer"},created_at:{type:"string",format:"date-time",description:"Timestamp when the customer was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the customer was last updated"},external_address:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the address"},address_line1:{type:"string",description:"First line of the address"},address_line2:{type:"string",description:"Second line of the address (optional)"},city:{type:"string",description:"City of the address"},address_string:{type:"string",description:"Full address string"},state:{type:"string",description:"State of the address"},zip_code:{type:"string",description:"ZIP code of the address"},country:{type:"string",description:"Country of the address"},created_at:{type:"string",format:"date-time",description:"Timestamp when the address was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the address was last updated"}}},contact:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the contact"},name:{type:"string",description:"Name of the contact"},address_id:{type:"string",description:"Address ID of the contact (can be null)"},email:{type:"string",format:"email",description:"Email address of the contact"},phone:{type:"string",description:"Phone number of the contact"},fax_number:{type:"string",description:"Fax number of the contact"},contact_type:{type:"string",description:"Type of contact (e.g., Individual, Business)"},created_at:{type:"string",format:"date-time",description:"Timestamp when the contact was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the contact was last updated"}}},tax_exemption:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the tax exemption"},customer_id:{type:"string",description:"ID of the customer associated with the tax exemption"},effective_date:{type:"string",format:"date-time",description:"Effective date of the tax exemption"},exemption_reason:{type:"string",description:"Reason for the tax exemption"},created_at:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was last updated"}}}},required:["id","customer_name","external_customer_id","contact_id","address_id","tax_exemption_status","customer_code","alternate_id","taxpayer_id","last_transaction","customer_labels","exposure_zones","created_by_id","updated_by_id","created_at","updated_at","external_address","contact","tax_exemption"]}}},description:"Customer object",required:!0}}),"\n",(0,r.jsx)(l(),{id:void 0,label:void 0,responses:{201:{description:"Customer Created successfully",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the customer"},customer_name:{type:"string",description:"The name of the customer"},external_customer_id:{type:"string",description:"External identifier for the customer"},contact_id:{type:"string",description:"Unique identifier for the contact"},address_id:{type:"string",description:"Unique identifier for the address"},tax_exemption_status:{type:"boolean",description:"Indicates if the customer has a tax exemption"},customer_code:{type:"string",description:"Internal code for the customer"},alternate_id:{type:"string",description:"Alternate identifier for the customer"},taxpayer_id:{type:"string",description:"Taxpayer identifier"},last_transaction:{type:"string",format:"date-time",description:"Date and time of the last transaction"},customer_labels:{type:"string",description:"Labels associated with the customer"},exposure_zones:{type:"string",description:"Exposure zone of the customer"},created_by_id:{type:"string",description:"ID of the user who created the customer"},updated_by_id:{type:"string",description:"ID of the user who last updated the customer"},created_at:{type:"string",format:"date-time",description:"Timestamp when the customer was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the customer was last updated"},external_address:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the address"},address_line1:{type:"string",description:"First line of the address"},address_line2:{type:"string",description:"Second line of the address (optional)"},city:{type:"string",description:"City of the address"},address_string:{type:"string",description:"Full address string"},state:{type:"string",description:"State of the address"},zip_code:{type:"string",description:"ZIP code of the address"},country:{type:"string",description:"Country of the address"},created_at:{type:"string",format:"date-time",description:"Timestamp when the address was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the address was last updated"}}},contact:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the contact"},name:{type:"string",description:"Name of the contact"},address_id:{type:"string",description:"Address ID of the contact (can be null)"},email:{type:"string",format:"email",description:"Email address of the contact"},phone:{type:"string",description:"Phone number of the contact"},fax_number:{type:"string",description:"Fax number of the contact"},contact_type:{type:"string",description:"Type of contact (e.g., Individual, Business)"},created_at:{type:"string",format:"date-time",description:"Timestamp when the contact was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the contact was last updated"}}},tax_exemption:{type:"object",properties:{id:{type:"string",description:"Unique identifier for the tax exemption"},customer_id:{type:"string",description:"ID of the customer associated with the tax exemption"},effective_date:{type:"string",format:"date-time",description:"Effective date of the tax exemption"},exemption_reason:{type:"string",description:"Reason for the tax exemption"},created_at:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was last updated"}}}},required:["id","customer_name","external_customer_id","contact_id","address_id","tax_exemption_status","customer_code","alternate_id","taxpayer_id","last_transaction","customer_labels","exposure_zones","created_by_id","updated_by_id","created_at","updated_at","external_address","contact","tax_exemption"],example:{id:"string",customer_name:"string",external_customer_id:"string",contact_id:"string",address_id:"string",tax_exemption_status:"boolean",customer_code:"string",alternate_id:"string",taxpayer_id:"string",last_transaction:"datetime",customer_labels:"string",exposure_zones:"string",created_by_id:"string",updated_by_id:"string",created_at:"datetime",updated_at:"datetime",external_address:{id:"string",address_line1:"string",address_line2:"string",city:"string",address_string:"string",state:"string",zip_code:"string",country:"string",created_at:"datetime",updated_at:"datetime"},contact:{id:"string",name:"string",address_id:"null or string",email:"string",phone:"string",fax_number:"string",contact_type:"string",created_at:"datetime",updated_at:"datetime"},tax_exemption:{id:"string",customer_id:"string",effective_date:"datetime",exemption_reason:"string",created_at:"datetime",updated_at:"datetime"}}}}}},400:{description:"Bad Request"},422:{description:"Unprocessable Entity. Validation errors occurred during the creation.",content:{"application/json":{schema:{type:"object",example:{errors:["Customer name can't be blank","Taxpayer ID must be unique"]}}}}},500:{description:"Internal Server Error"}}})]})}function b(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(_,{...t})}):_(t)}}}]);