"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[4143],{12870:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>x,contentTitle:()=>f,default:()=>J,frontMatter:()=>U,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"Endpoints/users/update-user","title":"Update User","description":"This endpoint allows the client to update the details of a specific user.","source":"@site/docs/Endpoints/users/update-user.api.mdx","sourceDirName":"Endpoints/users","slug":"/Endpoints/users/update-user","permalink":"/docs/reference/Endpoints/users/update-user","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-user","title":"Update User","description":"This endpoint allows the client to update the details of a specific user.","sidebar_label":"Update User","hide_title":true,"hide_table_of_contents":true,"api":"eJzVVE1v2zAM/SsCz17cj5tPS7cdBgxYsaSnICgYmamVypIqUWkyI/99oJy1yTr0tMt0sU0/UY+PTxyA8SFBs4C7RDHBsoKWko4msPEOGph3JilybfDGsUJr/XNS3JHS1pBjxV7l0CJTCbbEaGxSfq1QpUDarI1WOVGcQAWRnjIlvvHtHpoBtHdMjuUVQ7BGo5xZb5IcPEDSHfUob7wPBA341YY0QwW0wz5Ykl9rExPfO+wFMBJplZSiLq+uyxJ8j8ZCA0yJc9psukeKH49JJtr3UIHF1zStJ6hA+z6g20MD0x5/eicxbNtIKUEDGq1Z++gMqmdKQgq19tnxvWmhgevXBGPgUsr3lsYvOMgSQVLwLlGSUq4uLuRxLv8sa00prbNVv8El9XvKjbl74s7LYSELvYDcQQN10mgxMu5q6UqqB9MeoIJEcSv9bxYD5ChidcwhNXWNwUxOtKq3Uso5ydvo26zlQ4154FCdpmnqehhWmOg+R3s41G8SfPMa7cvepdDRORreFz43hJHiNEsBi6X8lkJ/vJrpy//vhwqMW/tidsNSCsxKo+a4e6NWualqevtVffY69+S4tB8qkBaOmMvJxeTi6BTUxSnHamTfLIfgo7A8a9Jpm9MI4RO5jqEzpQ4VMMU+fV/PKG6Npr9nK5ha0MEn7tGdELobx4dU9WepJzPinw6i40Bh2nEdLBonzIoUw/GiLODloohKZTZW0JhWJmTnEwtkNPWdeFrCT5miOHZZwRajwZX0cbE8VNARthSLmR9JLPRpLOvDXIgI3GYh9OYyyz0ad0y1psDvYpcnl/72bg4VrI6TtvetbIn4LLbDZ7FcBb6oXGZPiQ1g0T1kfBDsmFLWL/UTG2s=","sidebar_class_name":"put api-method","info_path":"reference//Endpoints/Users/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Fetch User","permalink":"/docs/reference/Endpoints/users/fetch-user"},"next":{"title":"Delete User","permalink":"/docs/reference/Endpoints/users/delete-user"}}');var n=t(74848),i=t(28453),r=t(57742),o=t.n(r),d=t(78178),p=t.n(d),l=t(19624),c=t.n(l),u=t(96226),h=t.n(u),m=(t(77675),t(19365),t(51107));const U={id:"update-user",title:"Update User",description:"This endpoint allows the client to update the details of a specific user.",sidebar_label:"Update User",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVE1v2zAM/SsCz17cj5tPS7cdBgxYsaSnICgYmamVypIqUWkyI/99oJy1yTr0tMt0sU0/UY+PTxyA8SFBs4C7RDHBsoKWko4msPEOGph3JilybfDGsUJr/XNS3JHS1pBjxV7l0CJTCbbEaGxSfq1QpUDarI1WOVGcQAWRnjIlvvHtHpoBtHdMjuUVQ7BGo5xZb5IcPEDSHfUob7wPBA341YY0QwW0wz5Ykl9rExPfO+wFMBJplZSiLq+uyxJ8j8ZCA0yJc9psukeKH49JJtr3UIHF1zStJ6hA+z6g20MD0x5/eicxbNtIKUEDGq1Z++gMqmdKQgq19tnxvWmhgevXBGPgUsr3lsYvOMgSQVLwLlGSUq4uLuRxLv8sa00prbNVv8El9XvKjbl74s7LYSELvYDcQQN10mgxMu5q6UqqB9MeoIJEcSv9bxYD5ChidcwhNXWNwUxOtKq3Uso5ydvo26zlQ4154FCdpmnqehhWmOg+R3s41G8SfPMa7cvepdDRORreFz43hJHiNEsBi6X8lkJ/vJrpy//vhwqMW/tidsNSCsxKo+a4e6NWualqevtVffY69+S4tB8qkBaOmMvJxeTi6BTUxSnHamTfLIfgo7A8a9Jpm9MI4RO5jqEzpQ4VMMU+fV/PKG6Npr9nK5ha0MEn7tGdELobx4dU9WepJzPinw6i40Bh2nEdLBonzIoUw/GiLODloohKZTZW0JhWJmTnEwtkNPWdeFrCT5miOHZZwRajwZX0cbE8VNARthSLmR9JLPRpLOvDXIgI3GYh9OYyyz0ad0y1psDvYpcnl/72bg4VrI6TtvetbIn4LLbDZ7FcBb6oXGZPiQ1g0T1kfBDsmFLWL/UTG2s=",sidebar_class_name:"put api-method",info_path:"reference//Endpoints/Users/scalartax",custom_edit_url:null},f=void 0,x={},b=[];function v(e){const s={p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Update User"}),"\n",(0,n.jsx)(o(),{method:"put",path:"/scalartax/users/{id}",context:"endpoint"}),"\n",(0,n.jsx)(s.p,{children:"This endpoint allows the client to update the details of a specific user."}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:void 0}),"\n",(0,n.jsx)(c(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",example:{first_name:"updated User 12333333",email:"testusjjhker@example.com",last_name:"doe",company:"Amazone",address:"california west",account_id:"3",company_id:"1",role_id:""}}}}}}),"\n",(0,n.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"Successful response",content:{"application/json":{}}}}})]})}function J(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}}}]);