import{j as u}from"./app-144c7569.js";function l({type:r="button",label:t="submit",disabled:o=!1,action:e,onClick:n,capitalize:i=!0,...a}){function s(){if(e==="confirm")return"from-primary-700 to-primary ";if(e==="cancel")return"bg-gray-700";if(e==="delete")return"from-rose-700 to-rose-500";if(e==="save")return"from-green-500 to-green-800";if(e==="sky")return"from-blue-500 to-blue-800"}return u.jsx("button",{type:r,className:`capitalize inline-block text-sm px-6 py-2 font-bold bg-gradient-to-b active:translate-y-1 rounded-md shadow-md hover:bg-gradient-to-b text-white 
      ${i&&"capitalize"} 
      ${s()} 
      disabled:bg-gray-300`,disabled:o,onClick:n,...a,children:t})}export{l as A};
