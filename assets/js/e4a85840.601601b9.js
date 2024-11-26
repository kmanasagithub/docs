"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[3628],{77606:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>q,frontMatter:()=>_,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"Endpoints/locations/update-location","title":"Update Location","description":"Update Location","source":"@site/docs/Endpoints/locations/update-location.api.mdx","sourceDirName":"Endpoints/locations","slug":"/Endpoints/locations/update-location","permalink":"/docs/reference/Endpoints/locations/update-location","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-location","title":"Update Location","description":"Update Location","sidebar_label":"Update Location","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"put api-method","info_path":"reference//Endpoints/Locations/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Fetch Location","permalink":"/docs/reference/Endpoints/locations/fetch-location"},"next":{"title":"Delete Location","permalink":"/docs/reference/Endpoints/locations/delete-location"}}');var o=i(74848),a=i(28453),n=i(57742),d=i.n(n),s=i(78178),c=i.n(s),p=i(19624),u=i.n(p),l=i(96226),y=i.n(l),h=(i(77675),i(19365),i(51107));const _={id:"update-location",title:"Update Location",description:"Update Location",sidebar_label:"Update Location",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"put api-method",info_path:"reference//Endpoints/Locations/scalartax",custom_edit_url:null},g=void 0,f={},b=[];function m(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Update Location"}),"\n",(0,o.jsx)(d(),{method:"put",path:"/scalartax/locations/{id}",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"Update Location"}),"\n",(0,o.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(c(),{parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0}]}),"\n",(0,o.jsx)(u(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{locations:{type:"array",items:{type:"object",properties:{location_code:{type:"string",description:"Unique code for the location",required:!0},entity_id:{type:"string",description:"Unique identifier for the entity associated with the location",required:!0},friendly_name:{type:"string",description:"Friendly name for display purposes",required:!0},description:{type:"string",description:"Description of the location",required:!1},address_type_id:{type:"integer",description:"Identifier for the type of address",required:!0},address_category_id:{type:"integer",description:"Identifier for the category of the address",required:!0},is_marketplace_outside_usa:{type:"boolean",description:"Indicates if the location is a marketplace outside the USA",required:!1},line1:{type:"string",description:"First line of the address",required:!0},line2:{type:"string",description:"Second line of the address (optional)",required:!1},line3:{type:"string",description:"Third line of the address (optional)",nullable:!0,required:!1},city:{type:"string",description:"City of the location",required:!0},county:{type:"string",description:"County of the location",required:!1},region:{type:"string",description:"State or region of the location",required:!0},postal_code:{type:"string",description:"Postal code of the location",required:!0},country:{type:"string",description:"Country of the location",required:!0},is_default:{type:"boolean",description:"Indicates if this is the default location",required:!1},is_registered:{type:"boolean",description:"Indicates if the location is registered",required:!1},dba_name:{type:"string",description:"Doing business as name",required:!1},outlet_name:{type:"string",description:"Name of the outlet",required:!1},start_date:{type:"string",format:"date",description:"Date when the location becomes effective",required:!0},end_date:{type:"string",format:"date",description:"Date when the location is no longer effective (optional)",nullable:!0,required:!1},is_marketplace_remit_tax:{type:"boolean",description:"Indicates if the marketplace is responsible for remitting tax",required:!1},created_by_id:{type:"string",description:"ID of the user who created the location record",required:!1},updated_by_id:{type:"string",description:"ID of the user who last updated the location record",required:!1},location_attributes:{type:"array",items:{type:"object",properties:{attribute_name:{type:"string",description:"Name of the location attribute",required:!0},attribute_value:{type:"string",description:"Value of the location attribute",required:!0},attribute_unit_of_measure:{type:"string",description:"Unit of measure for the attribute value",required:!1},created_by_id:{type:"string",description:"ID of the user who created the attribute record",required:!1},updated_by_id:{type:"string",description:"ID of the user who last updated the attribute record",required:!1}},required:["attribute_name","attribute_value","attribute_unit_of_measure","updated_by_id","created_by_id"]}}},required:["location_code","entity_id","friendly_name","description","address_type_id","address_category_id","is_marketplace_outside_usa","line1","line2","line3","city","county","region","postal_code","country","is_registered","is_default","dba_name","outlet_name","start_date","end_date","is_marketplace_remit_tax","updated_by_id","created_by_id"]}}},required:["locations"],title:"Location"}}},required:!0}}),"\n",(0,o.jsx)(y(),{id:void 0,label:void 0,responses:{200:{description:"OK. Location Updated Successfully.",content:{"application/json":{schema:{type:"object",properties:{locations:{type:"array",items:{type:"object",properties:{location_code:{type:"string",description:"Unique code for the location",required:!0},entity_id:{type:"string",description:"Unique identifier for the entity associated with the location",required:!0},friendly_name:{type:"string",description:"Friendly name for display purposes",required:!0},description:{type:"string",description:"Description of the location",required:!1},address_type_id:{type:"integer",description:"Identifier for the type of address",required:!0},address_category_id:{type:"integer",description:"Identifier for the category of the address",required:!0},is_marketplace_outside_usa:{type:"boolean",description:"Indicates if the location is a marketplace outside the USA",required:!1},line1:{type:"string",description:"First line of the address",required:!0},line2:{type:"string",description:"Second line of the address (optional)",required:!1},line3:{type:"string",description:"Third line of the address (optional)",nullable:!0,required:!1},city:{type:"string",description:"City of the location",required:!0},county:{type:"string",description:"County of the location",required:!1},region:{type:"string",description:"State or region of the location",required:!0},postal_code:{type:"string",description:"Postal code of the location",required:!0},country:{type:"string",description:"Country of the location",required:!0},is_default:{type:"boolean",description:"Indicates if this is the default location",required:!1},is_registered:{type:"boolean",description:"Indicates if the location is registered",required:!1},dba_name:{type:"string",description:"Doing business as name",required:!1},outlet_name:{type:"string",description:"Name of the outlet",required:!1},start_date:{type:"string",format:"date",description:"Date when the location becomes effective",required:!0},end_date:{type:"string",format:"date",description:"Date when the location is no longer effective (optional)",nullable:!0,required:!1},is_marketplace_remit_tax:{type:"boolean",description:"Indicates if the marketplace is responsible for remitting tax",required:!1},created_by_id:{type:"string",description:"ID of the user who created the location record",required:!1},updated_by_id:{type:"string",description:"ID of the user who last updated the location record",required:!1},location_attributes:{type:"array",items:{type:"object",properties:{attribute_name:{type:"string",description:"Name of the location attribute",required:!0},attribute_value:{type:"string",description:"Value of the location attribute",required:!0},attribute_unit_of_measure:{type:"string",description:"Unit of measure for the attribute value",required:!1},created_by_id:{type:"string",description:"ID of the user who created the attribute record",required:!1},updated_by_id:{type:"string",description:"ID of the user who last updated the attribute record",required:!1}},required:["attribute_name","attribute_value","attribute_unit_of_measure","updated_by_id","created_by_id"]}}},required:["location_code","entity_id","friendly_name","description","address_type_id","address_category_id","is_marketplace_outside_usa","line1","line2","line3","city","county","region","postal_code","country","is_registered","is_default","dba_name","outlet_name","start_date","end_date","is_marketplace_remit_tax","updated_by_id","created_by_id"]}}},required:["locations"],title:"Location",example:{message:"Location Updated Successfully.",location:{updated_by_id:"string",location_code:"string",entity_id:"string",friendly_name:"string",description:"string",address_type_id:"string",address_category_id:"string",is_marketplace_outside_usa:"boolean",line1:"string",line2:"string",line3:"null or string",city:"string",county:"string",region:"string",postal_code:"string",country:"string",is_default:"boolean",is_registered:"boolean",dba_name:"string",outlet_name:"string",start_date:"date",end_date:"null or date",created_by_id:"string",id:"string",is_marketplace_remit_tax:"null or boolean",created_at:"datetime",updated_at:"datetime",location_attributes:[{id:"string",location_id:"string",attribute_name:"string",attribute_value:"string",attribute_unit_of_measure:"string",updated_by_id:"string",created_by_id:"string",created_at:"datetime",updated_at:"datetime"},{id:"string",location_id:"string",attribute_name:"string",attribute_value:"string",attribute_unit_of_measure:"string",updated_by_id:"string",created_by_id:"string",created_at:"datetime",updated_at:"datetime"}]}}}}}},400:{description:"Bad Request"},404:{description:"Not Found. Location with that Specific ID not Found.",content:{"application/json":{schema:{type:"object",example:{error:"Location Not Found."}}}}},422:{description:"Unprocessable Entity. Validation errors occurred during the update.",content:{"application/json":{schema:{type:"object",example:{errors:"Failed to update location"}}}}},500:{description:"Internal Serval Error"}}})]})}function q(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);