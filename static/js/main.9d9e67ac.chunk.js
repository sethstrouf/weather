(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s.n(c),a=s(16),n=s.n(a),l=(s(21),s(7)),d=s(0),o=function(e){var t=e.handleChange,s=e.handleSubmit;return Object(d.jsxs)("form",{onSubmit:s,className:"py-4",children:[Object(d.jsx)("p",{id:"error",className:"text-red-700 font-bold pb-2",children:"\xa0"}),Object(d.jsx)("label",{htmlFor:"zip",value:"Zip Code",className:"hidden",children:"Enter a 5-digit Zip Code"}),Object(d.jsx)("input",{type:"text",id:"zip",placeholder:"Enter Zip Code",onChange:t,title:"Must be 5 numbers",className:"text-center border-b border-rose-500 bg-transparent focus:bg-transparent focus:border-transparent w-11/12 focus:outline-none focus:ring focus:ring-rose-500 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"})]})},i=s(3),x=s.n(i),b=function(e){var t=e.location,s=e.current;return Object(d.jsxs)("div",{className:"pb-2 bg-rose-50 border border-rose-600 rounded md:w-10/12 xl:w-8/12 2xl:w-6/12 mx-auto",children:[Object(d.jsx)("h1",{className:"hidden",children:"Current"}),Object(d.jsx)("p",{className:"serif font-bold pb-1 bg-rose-700 text-gray-50 text-xl lg:text-2xl xl:text-3xl",children:t.name}),Object(d.jsxs)("p",{children:[s.condition.text,", ",s.temp_f,"\xb0"]}),Object(d.jsx)("p",{className:"text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:x()(t.localtime,"Y-M-D H:m:s").format("LT")}),Object(d.jsx)("div",{className:"h-10 md:h-14",children:Object(d.jsx)("img",{src:s.condition.icon,alt:s.condition.text,className:"mx-auto h-12 md:h-16"})}),Object(d.jsxs)("div",{className:"pt-2 flex justify-center items-center",children:[Object(d.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Wind"}),Object(d.jsxs)("p",{children:[s.wind_mph," mph (",s.wind_dir,")"]})]}),Object(d.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Precipitation"}),Object(d.jsxs)("p",{children:[s.precip_in,'"']})]}),Object(d.jsxs)("div",{className:"flex-1",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Humidity"}),Object(d.jsxs)("p",{children:[s.humidity,"%"]})]})]})]})},j=function(e){var t=e.forecast,s=x()().format("Y-M-D");return Object(d.jsxs)("div",{className:"pb-2 bg-rose-50 border border-rose-600 rounded md:flex-1",children:[Object(d.jsx)("h1",{className:"serif font-bold pb-1 bg-rose-700 text-gray-50 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",children:x()(s).isSame(t.date)?"Today":"Tomorrow"}),Object(d.jsxs)("div",{className:"py-2 flex justify-center align-bottom  bg-rose-200",children:[Object(d.jsxs)("div",{className:"flex-1  border-rose-500",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Sunrise"}),Object(d.jsx)("p",{children:t.astro.sunrise})]}),Object(d.jsxs)("div",{className:"flex-1",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Sunset"}),Object(d.jsx)("p",{children:t.astro.sunset})]})]}),Object(d.jsxs)("p",{className:"p-8 xl:p-12 font-bold text-red-600",children:[t.day.maxtemp_f,"\xb0",Object(d.jsx)("span",{className:"text-gray-500 font-bold",children:" | "}),Object(d.jsxs)("span",{className:"font-bold text-blue-600",children:[t.day.mintemp_f,"\xb0"]})]}),Object(d.jsxs)("div",{className:"flex justify-center items-center",children:[Object(d.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Max Wind"}),Object(d.jsxs)("p",{children:[t.day.maxwind_mph," mph"]})]}),Object(d.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Total Precipitation"}),Object(d.jsxs)("p",{children:[t.day.totalprecip_in,'"']})]}),Object(d.jsxs)("div",{className:"flex-1",children:[Object(d.jsx)("h2",{className:"font-bold",children:"Rain/Snow"}),Object(d.jsxs)("p",{children:[t.day.daily_chance_of_rain,"%/",t.day.daily_chance_of_snow,"%"]})]})]})]})},m=function(e){var t=e.data;return Object(d.jsxs)("main",{className:"py-4 md:py-8 xl:py-12 space-y-4 xl:space-y-8 2xl:space-y-12",children:[Object(d.jsx)(b,{location:t.location,current:t.current}),Object(d.jsxs)("div",{className:"space-y-4 pb-12 md:space-y-0 md:flex justify-center  items-center gap-4 xl:gap-8 2xl:gap-12",children:[Object(d.jsx)(j,{forecast:t.forecast.forecastday[0]}),Object(d.jsx)(j,{forecast:t.forecast.forecastday[1]})]})]})},h=function(){return Object(d.jsx)("footer",{className:"py-1 absolute inset-x-0 bottom-0 bg-rose-700 text-gray-100 border-t-4 border-rose-400",children:Object(d.jsx)("p",{children:"\xa92021 Seth Strouf"})})};var p=function(){var e=s(24),t=/^[0-9]{5}$/,c=r.a.useState(""),a=Object(l.a)(c,2),n=a[0],i=a[1],x=r.a.useState(null),b=Object(l.a)(x,2),j=b[0],p=b[1];return Object(d.jsx)("div",{className:"text-center typography text-gray-800 bg-gray-50 sm:text-lg lg:text-xl 2xl:text-2xl",children:Object(d.jsxs)("div",{className:"pt-4 sm:pt-8 lg:pt-12 min-h-screen relative mx-auto  px-4 sm:px-8 lg:px-12 xl:px-24 2xl:px-48\n",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{className:"serif font-bold pt-4 text-rose-700 text-2xl  sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",children:"Weather App"}),Object(d.jsx)(o,{handleChange:function(e){i(e.target.value)},handleSubmit:function(s){s.preventDefault();var c=document.getElementById("error");""!==n?t.test(n)?e("https://api.weatherapi.com/v1/forecast.json?key=".concat("704a519b616d41f7a8c10053211411","&q=").concat(n,"&days=2&aqi=no&alerts=no")).then((function(e){p(e.data),c.innerText="\xa0",document.getElementById("zip").value=""})).catch((function(e){c.textContent=e.response.data.error.message})):c.textContent="Must be 5 numbers":c.textContent="Cannot be blank"}})]}),null===j?null:Object(d.jsx)(m,{data:j}),Object(d.jsx)(h,{})]})})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9d9e67ac.chunk.js.map