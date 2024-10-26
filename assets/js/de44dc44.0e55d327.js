"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[8745],{52699:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>P,contentTitle:()=>_,default:()=>E,frontMatter:()=>y,metadata:()=>N,toc:()=>q});var t=a(74848),i=a(28453),r=a(91366),l=a.n(r),n=(a(6050),a(57742)),d=a.n(n),c=(a(67792),a(27362)),o=a.n(c),p=a(36683),m=a.n(p),h=a(81124),u=a.n(h),x=a(60674),f=a.n(x),j=a(23397),b=a.n(j),g=a(51107),v=(a(77675),a(19365));const y={id:"fetch-product",title:"Fetch Product",description:"The response will include the following details of the product.",sidebar_label:"Fetch Product",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1vo0YQ/itoPlStxJkXY8fHp0ZNrk17l4sSn1rVsqwFBrNX2OV2ByeRxX+vFrCDTeJE136ytTsvz848zwxbILbWEC7gRsmkiknD0oYEdax4SVwKCGGeoaVQl1JotO55nltcxHmVoEUZWqnMc3nPxdpKkBjPtSXT5qJsA47AhpIpViChMpm2IFiBEAJPwAZuMpSMMrBBxxkWDMIt0GNpLDQpLtZQ26DwW8UVJhCSqrBempMWkTb2vuuan0Pcn/8AG2IpCAWZW1aWOY+ZuXW+amOyHaZkSrFHg4uw0L1zGX3FmMxblCxREW8Td49cxTLBIXAb8IEVZW6OPH98FkzMWw5QnnK55jEaB2IPb0gw/yuYvDfmO0xrJavytM9HVpIsjVPMCNdSPb5ij0JupLFHQZweVzw57XB5PfddP/Bcd+IFvuv7afB+Fk3PzpibxEGSNKkVMsJkFb0UTlR5ziITzzS/F95c1DZUZfLfAuwqxogUjypC/f2M2MdYtTQ/VZ1fZC6VKcGT04bl1Stef2ac8NCrEpxWMl0VyHSlXvG/ds6hPtDU4hj1ENGpbEsbiFMTu5si5ztbqI8zHSjmUAw9ph+zuEfQPveOyXPMhWdbO4TbiOzwSPdLtjWzKoSb24s9mSdjN/D9qRuls4mXelEQ4LiXrpUreP4UBuMUNe3y9rXdXFhPN0cyht9++NQvQwi/IxP6oBxv0NtAbvDl7rZzCbzZeBrMJtNoPBtHqRednQUYDYr6JpddFkYQgjF+57nv3Mncc0PXDQN/NAu8v3uhX7N7TqKLZV03/ArcYDj+ryVZH2QlktGuqNY9p8yijJF1V2LMUx5bVxeW2Bt+x77YT4EeWVApqZ6oZD0hgQ7w5Ll9dSUIlWC5dYdqw3Lr0oQZNVItkDJpKr/GhhpmX4bg6JjlTBF7cLryaGfLk9qsUlSb3bqtVA4hZESlDh2HlXzUYR3FsnA23oChHW4uhdXGgdruhwkdZ7uNmMZVpfK6dgYBPsqY5XvfpdnyqWyK1onsrgE+Zw8v5dbW+c2VdSHjqkBBrBsP5kmtmTdyR27XLhY37eq+KozfXVWWUplKHYDuP1u3Jk3nCsaNVXf0c8+sGQyoCv05NU0x+/jZaI2N0yxfqalgogfoA1Kc9XR9tP73hPsfvrM6ThI+kFPmjAuDqCnBtuPMAvaceRKVGSIhT8xgzKQmY9X294tprzn+VqEZOYulDRumeLtLF1tIuDb/EwhTlms88bgfb7sd8JP1EtDdvhVmxnd7EMCGf/Cx/Vqsl7UNGbIEVZO9vTiPYyyp5zLQrWHgXkG/Xs6hrv8FVUazKA==",sidebar_class_name:"get api-method",info_path:"reference/api-reference/Endpoints/Products/scalartax",custom_edit_url:null},_=void 0,N={id:"Endpoints/products/fetch-product",title:"Fetch Product",description:"The response will include the following details of the product.",source:"@site/docs/Endpoints/products/fetch-product.api.mdx",sourceDirName:"Endpoints/products",slug:"/Endpoints/products/fetch-product",permalink:"/docs/reference/Endpoints/products/fetch-product",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"fetch-product",title:"Fetch Product",description:"The response will include the following details of the product.",sidebar_label:"Fetch Product",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1vo0YQ/itoPlStxJkXY8fHp0ZNrk17l4sSn1rVsqwFBrNX2OV2ByeRxX+vFrCDTeJE136ytTsvz848zwxbILbWEC7gRsmkiknD0oYEdax4SVwKCGGeoaVQl1JotO55nltcxHmVoEUZWqnMc3nPxdpKkBjPtSXT5qJsA47AhpIpViChMpm2IFiBEAJPwAZuMpSMMrBBxxkWDMIt0GNpLDQpLtZQ26DwW8UVJhCSqrBempMWkTb2vuuan0Pcn/8AG2IpCAWZW1aWOY+ZuXW+amOyHaZkSrFHg4uw0L1zGX3FmMxblCxREW8Td49cxTLBIXAb8IEVZW6OPH98FkzMWw5QnnK55jEaB2IPb0gw/yuYvDfmO0xrJavytM9HVpIsjVPMCNdSPb5ij0JupLFHQZweVzw57XB5PfddP/Bcd+IFvuv7afB+Fk3PzpibxEGSNKkVMsJkFb0UTlR5ziITzzS/F95c1DZUZfLfAuwqxogUjypC/f2M2MdYtTQ/VZ1fZC6VKcGT04bl1Stef2ac8NCrEpxWMl0VyHSlXvG/ds6hPtDU4hj1ENGpbEsbiFMTu5si5ztbqI8zHSjmUAw9ph+zuEfQPveOyXPMhWdbO4TbiOzwSPdLtjWzKoSb24s9mSdjN/D9qRuls4mXelEQ4LiXrpUreP4UBuMUNe3y9rXdXFhPN0cyht9++NQvQwi/IxP6oBxv0NtAbvDl7rZzCbzZeBrMJtNoPBtHqRednQUYDYr6JpddFkYQgjF+57nv3Mncc0PXDQN/NAu8v3uhX7N7TqKLZV03/ArcYDj+ryVZH2QlktGuqNY9p8yijJF1V2LMUx5bVxeW2Bt+x77YT4EeWVApqZ6oZD0hgQ7w5Ll9dSUIlWC5dYdqw3Lr0oQZNVItkDJpKr/GhhpmX4bg6JjlTBF7cLryaGfLk9qsUlSb3bqtVA4hZESlDh2HlXzUYR3FsnA23oChHW4uhdXGgdruhwkdZ7uNmMZVpfK6dgYBPsqY5XvfpdnyqWyK1onsrgE+Zw8v5dbW+c2VdSHjqkBBrBsP5kmtmTdyR27XLhY37eq+KozfXVWWUplKHYDuP1u3Jk3nCsaNVXf0c8+sGQyoCv05NU0x+/jZaI2N0yxfqalgogfoA1Kc9XR9tP73hPsfvrM6ThI+kFPmjAuDqCnBtuPMAvaceRKVGSIhT8xgzKQmY9X294tprzn+VqEZOYulDRumeLtLF1tIuDb/EwhTlms88bgfb7sd8JP1EtDdvhVmxnd7EMCGf/Cx/Vqsl7UNGbIEVZO9vTiPYyyp5zLQrWHgXkG/Xs6hrv8FVUazKA==",sidebar_class_name:"get api-method",info_path:"reference/api-reference/Endpoints/Products/scalartax",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List Products",permalink:"/docs/reference/Endpoints/products/list-products"},next:{title:"Update Product",permalink:"/docs/reference/Endpoints/products/update-product"}},P={},q=[];function V(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Fetch Product"}),"\n",(0,t.jsx)(d(),{method:"get",path:"/scalartax/products/{id}",context:"endpoint"}),"\n",(0,t.jsx)(s.p,{children:"The response will include the following details of the product."}),"\n",(0,t.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,enumDescriptions:[]}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(l(),{label:void 0,id:void 0,children:[(0,t.jsxs)(v.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"Array ["})})}),(0,t.jsx)(f(),{collapsible:!1,name:"product_code",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"123745"}}),(0,t.jsx)(f(),{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Nice"}}),(0,t.jsx)(f(),{collapsible:!1,name:"tax_code",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"TX459"}}),(0,t.jsx)(f(),{collapsible:!1,name:"product_group",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Laptop"}}),(0,t.jsx)(f(),{collapsible:!1,name:"category",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Lenovo"}}),(0,t.jsx)(f(),{collapsible:!1,name:"entity_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ENT20241005142022f498b677a0dc4dd"}}),(0,t.jsx)(f(),{collapsible:!1,name:"created_by_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:null}}),(0,t.jsx)(f(),{collapsible:!1,name:"updated_by_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:null}}),(0,t.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"product_attributes"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object[]"})}),(0,t.jsx)("span",{className:"openapi-schema__divider"}),(0,t.jsx)("span",{className:"openapi-schema__required",children:(0,t.jsx)(s.p,{children:"required"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"Array ["})})}),(0,t.jsx)(f(),{collapsible:!1,name:"attribute_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Color"}}),(0,t.jsx)(f(),{collapsible:!1,name:"attribute_value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"White"}}),(0,t.jsx)(f(),{collapsible:!1,name:"attribute_unit_of_measure",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"N/A"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(s.p,{children:"]"})})})]})]})}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(s.p,{children:"]"})})})]})]})}),(0,t.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "id": "PRD20241005153042260bf851f1b44e3",\n  "product_code": "126",\n  "description": "TestProduct",\n  "tax_code": "Test Product",\n  "product_group": "H&M",\n  "category": "Jeans",\n  "entity_id": "ENT20241005142022f498b677a0dc4dd",\n  "created_by_id": "USR2024100418364856b383bf1b774eb",\n  "updated_by_id": "USR2024100418364856b383bf1b774eb",\n  "created_at": "2024-10-05T10:00:42.841Z",\n  "updated_at": "2024-10-05T10:00:42.841Z",\n  "product_attributes": []\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(v.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Not Found. Product with that Specific ID not Found."})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"object"})})})]})}),(0,t.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "error": "Product Not Found."\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(v.default,{label:"500",value:"500",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Internal Serval Error."})}),(0,t.jsx)("div",{})]})]})})})]})}function E(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(V,{...e})}):V(e)}}}]);