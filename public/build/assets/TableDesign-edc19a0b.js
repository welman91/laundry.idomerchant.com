import{j as e,q as F,r as o,f as w,h as v}from"./app-144c7569.js";import{T as C}from"./ThemeLayout-5df96acf.js";import{M as c}from"./index.esm-b6d3ac2b.js";import{P as D}from"./StandardFormModalTemplate-156ebbc9.js";import M from"./ModelFilter-fe2d0e68.js";import N from"./ModelDataTable-b4ba7fdb.js";import{M as k}from"./ModelForm-32e1afd3.js";import"./index.esm-f0dcaf01.js";import"./iconBase-a32b9c6a.js";import"./index.esm-0ff8ed9e.js";import"./bonvivo_logo-12897ae9.js";import"./ThemeToggler-ce0d72b5.js";import"./ActionButton-65ac1286.js";import"./ModelActions-c1b7e06e.js";import"./CustomerMasterForm-77f7e4dd.js";import"./CustomerMasterColumns-5fd1dc20.js";import"./CustomerMasterFormData-26781783.js";function E({title:s,children:t}){return e.jsxs("div",{className:"rounded-md shadow-lg overflow-hidden",children:[e.jsx("div",{className:"px-4 py-2 bg-white dark:bg-[#162231]",children:e.jsx("p",{className:"font-bold text-xl text-gray-700 dark:text-white",children:s})}),t&&e.jsx("div",{className:"p-4 bg-[#F9FAFD] dark:bg-[#121E2D]",children:t})]})}function Q(){const{page:s,collection:t}=F().props,{title:n,module:S,slug:d,routes:p,styles:a}=s,[m,r]=o.useState(!1),[u,f]=o.useState(null),[x,i]=o.useState(!1);function h(){r(!0);const b=route(p.create,d);w.get(b).then(l=>{f(l.data),r(!1),i(!0)}).catch(l=>v(l,r(!1)))}function g(){return e.jsx(M,{})}function j(){return e.jsx(k,{action:"create",loadData:u,closeForm:()=>i(!1)})}return e.jsxs(C,{title:n,children:[e.jsx(E,{title:n,children:g()}),e.jsx(N,{collection:t,onClickNew:h}),e.jsxs(o.Fragment,{children:[e.jsx(c,{visible:m,setVisible:r,children:e.jsx(D,{visible:m})}),e.jsx(c,{visible:x,setVisible:i,noescape:!0,width:(a==null?void 0:a.form_modal_classname)??"w-full lg:w-fit",children:j()})]})]})}export{Q as default};
