(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(15),o=n.n(c),s=(n(21),n(6)),i=n(0),l=function(e){var t=e.handleChange,n=e.handleSubmit;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsx)("p",{id:"error",className:"text-red-600 font-bold"}),Object(i.jsx)("label",{htmlFor:"zip",value:"Zip Code",className:"hidden",children:"Enter a 5-digit Zip Code"}),Object(i.jsx)("input",{type:"text",id:"zip",placeholder:"Enter Zip Code",onChange:t,title:"Must be 5 numbers",className:"text-center border-b border-rose-600 focus:bg-transparent focus:border-transparent focus:outline-none focus:ring focus:ring-rose-600"})]})},d=n(16),u=n.n(d),b=function(e){var t=e.location;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["City: ",t.name]}),Object(i.jsxs)("p",{children:["Current Time: ",u()(t.localtime).format("LT")]})]})},j=function(e){var t=e.data;return Object(i.jsx)("div",{children:Object(i.jsx)(b,{location:t.location})})},h=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("p",{children:"\xa92021 Seth Strouf"})})};var p=function(){var e=n(24),t=/^[0-9]{5}$/,r=a.a.useState(""),c=Object(s.a)(r,2),o=c[0],d=c[1],u=a.a.useState(null),b=Object(s.a)(u,2),p=b[0],f=b[1];return Object(i.jsxs)("div",{className:"min-h-screen mx-auto text-center typography",children:[Object(i.jsx)("h1",{className:"serif font-bold",children:"Weather App"}),Object(i.jsx)(l,{handleChange:function(e){d(e.target.value)},handleSubmit:function(n){n.preventDefault();var r=document.getElementById("error");""!==o?t.test(o)?e("https://api.weatherapi.com/v1/forecast.json?key=".concat("704a519b616d41f7a8c10053211411","&q=").concat(o,"&days=7&aqi=no&alerts=no")).then((function(e){f(e.data)})).catch((function(e){r.textContent=e.response.data.error.message})):r.textContent="Must be 5 numbers":r.textContent="Cannot be blank"}}),null===p?null:Object(i.jsx)(j,{data:p}),Object(i.jsx)(h,{})]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.dac301bf.chunk.js.map