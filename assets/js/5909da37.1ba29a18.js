"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[5803],{90841:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Dry run requests","title":"Dry Run Requests","description":"The ScalarTax API provides a dry run feature that allows you to test API requests without making any changes to the system. This feature is handy for validating the structure and correctness of a request before executing it in a production environment. It simulates the processing of a request and returns the expected response while ensuring no modifications are made to the system\'s data.","source":"@site/docs/Dry run requests.md","sourceDirName":".","slug":"/Dry run requests","permalink":"/docs/reference/Dry run requests","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"Dry run requests"},"sidebar":"tutorialSidebar","previous":{"title":"Cached Usage Responses","permalink":"/docs/reference/Cached usage responses"},"next":{"title":"Errors","permalink":"/docs/reference/Error response format"}}');var t=s(74848),a=s(28453);const i={sidebar_position:5,id:"Dry run requests"},o="Dry Run Requests",d={},c=[{value:"<strong>How Dry Run Works</strong>",id:"how-dry-run-works",level:3},{value:"<strong>Header Semantics</strong>",id:"header-semantics",level:3},{value:"Response Headers",id:"response-headers",level:3},{value:"<strong>Unsupported Endpoints</strong>",id:"unsupported-endpoints",level:3}];function h(e){const r={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"dry-run-requests",children:"Dry Run Requests"})}),"\n",(0,t.jsxs)(r.p,{children:["The ScalarTax API provides a ",(0,t.jsx)(r.strong,{children:"dry run"})," feature that allows you to test API requests without making any changes to the system. This feature is handy for validating the structure and correctness of a request before executing it in a production environment. It simulates the processing of a request and returns the expected response while ensuring no modifications are made to the system's data."]}),"\n",(0,t.jsx)(r.p,{children:"By performing a dry run, the API simulates the processing of the request and returns an expected result. However, no actual operations will be performed, such as data creation, updates, or deletions. This allows developers to confirm that their requests are structured correctly and will yield the expected responses before executing the actual actions."}),"\n",(0,t.jsx)(r.h3,{id:"how-dry-run-works",children:(0,t.jsx)(r.strong,{children:"How Dry Run Works"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Simulation"}),": A dry run processes the request as if it were real but does not persist any changes to the database or system state."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Validation"}),": It lets you preview the potential response, enabling you to identify errors or issues with your request before executing the real action."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"No Data Modification"}),": No updates, creations, or deletions will occur during a dry run request."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"For example, if you create a new transaction or calculate taxes, the response will indicate the results as if the transaction were completed. However, the underlying data will remain unchanged, providing a safe way to test API behavior without impacting the system."}),"\n",(0,t.jsx)(r.h3,{id:"header-semantics",children:(0,t.jsx)(r.strong,{children:"Header Semantics"})}),"\n",(0,t.jsx)(r.p,{children:"To perform a dry run request, include the following header in your API request:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Header \xa0 \xa0 \xa0"}),(0,t.jsx)(r.th,{children:"Value \xa0"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Dry-Run"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"True"})})]})})]}),"\n",(0,t.jsx)(r.p,{children:"This header indicates to the ScalarTax API that the request should be simulated and that no changes will be made to the system."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Example Request"}),": Creating a Transaction with Dry Run"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl --request POST \'https://api.scalartax.ai/v1/transactions\' \\\r\n--header \'Dry-Run: True\' \\\r\n--header \'Accept: application/json\' \\\r\n--header \'Authorization: Bearer <your_token>\' \\\r\n--header \'Content-Type: application/json\' \\\r\n--data-raw \'{\r\n "transaction_id": "txn_12345",\r\n "amount": 1500.00,\r\n "currency": "USD",\r\n "tax_code": "TX001",\r\n "customer_id": "cust_7890"\r\n}\'\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Response (Dry Run)"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n  "transaction_id": "txn_12345",\r\n  "amount": 1500.00,\r\n  "currency": "USD",\r\n  "tax_code": "TX001",\r\n  "customer_id": "cust_7890",\r\n  "status": "simulated",\r\n  "tax_amount": 120.00,\r\n  "total_amount": 1620.00\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["This response confirms that the transaction was processed as a dry run. The status is marked as ",(0,t.jsx)(r.code,{children:"simulated"}),", and no changes persisted in the system."]}),"\n",(0,t.jsx)(r.h3,{id:"response-headers",children:"Response Headers"}),"\n",(0,t.jsx)(r.p,{children:"When the server processes a request as a dry run, it includes the following header and value in the response:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Key \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,t.jsx)(r.th,{children:"Value \xa0"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Scalar-Dry-Run"}),(0,t.jsx)(r.td,{children:"true"})]})})]}),"\n",(0,t.jsx)(r.p,{children:"This response header confirms that the request was processed as a dry run and that no changes were made to the data."}),"\n",(0,t.jsxs)(r.p,{children:["However, if the ",(0,t.jsx)(r.code,{children:"Dry-Run"})," header is included in the request but the request was not processed as a dry run (e.g., if sent to an unsupported endpoint), the ",(0,t.jsx)(r.code,{children:"Scalar-Dry-Run"})," header will not be present in the response. This absence indicates that the request was executed normally rather than as a dry run."]}),"\n",(0,t.jsx)(r.h3,{id:"unsupported-endpoints",children:(0,t.jsx)(r.strong,{children:"Unsupported Endpoints"})}),"\n",(0,t.jsxs)(r.p,{children:["Not all endpoints support the dry run feature. When a request is sent to an unsupported endpoint with the ",(0,t.jsx)(r.code,{children:"Dry-Run"})," header, the API typically ignores the header and processes the request as usual. In such cases, the request will be executed like a standard operation, resulting in actual changes to the data."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Example of Unsupported Dry Run Request"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl --request PUT 'https://api.scalartax.ai/v1/unsupported-endpoint' \\\r\n--header 'Dry-Run: True' \\\r\n--header 'Authorization: Bearer <your_token>' \\\r\n--data-raw '{\"data\": \"test\"}'\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Response"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n  "error": "Endpoint not supported for dry run requests"\r\n}\n'})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);