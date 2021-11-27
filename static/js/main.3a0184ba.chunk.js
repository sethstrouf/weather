(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s.n(c),a=s(16),n=s.n(a),l=(s(21),s(7)),o=s(0),d=function(e){var t=e.handleChange,s=e.handleSubmit;return Object(o.jsxs)("form",{onSubmit:s,className:"py-4",children:[Object(o.jsx)("p",{id:"error",className:"text-red-700 font-bold pb-2",children:"\xa0"}),Object(o.jsx)("label",{htmlFor:"zip",value:"Zip Code",className:"hidden",children:"Enter a 5-digit Zip Code"}),Object(o.jsx)("input",{type:"text",id:"zip",placeholder:"Enter Zip Code",onChange:t,title:"Must be 5 numbers",className:"text-center border-b border-rose-500 bg-transparent focus:bg-transparent focus:border-transparent w-11/12 focus:outline-none focus:ring focus:ring-rose-500 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"})]})},i=s(3),x=s.n(i),b=function(e){var t=e.location,s=e.current;return Object(o.jsxs)("div",{className:"pb-2 bg-rose-50 border-2 border-rose-500 rounded md:w-10/12 xl:w-8/12 2xl:w-6/12 mx-auto",children:[Object(o.jsx)("h1",{className:"hidden",children:"Current"}),Object(o.jsx)("p",{className:"serif font-bold pb-1 bg-rose-600 text-gray-50 text-xl lg:text-2xl xl:text-3xl",children:t.name}),Object(o.jsxs)("p",{children:[s.condition.text,", ",s.temp_f,"\xb0"]}),Object(o.jsx)("p",{className:"text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:x()(t.localtime,"Y-M-D H:m:s").format("LT")}),Object(o.jsx)("div",{className:"h-10 md:h-14",children:Object(o.jsx)("img",{src:s.condition.icon,alt:s.condition.text,className:"mx-auto h-12 md:h-16"})}),Object(o.jsxs)("div",{className:"pt-2 flex justify-center items-center",children:[Object(o.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Wind"}),Object(o.jsxs)("p",{children:[s.wind_mph," mph (",s.wind_dir,")"]})]}),Object(o.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Precipitation"}),Object(o.jsxs)("p",{children:[s.precip_in,'"']})]}),Object(o.jsxs)("div",{className:"flex-1",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Humidity"}),Object(o.jsxs)("p",{children:[s.humidity,"%"]})]})]})]})},j=function(e){var t=e.forecast,s=x()().format("Y-M-D");return Object(o.jsxs)("div",{className:"pb-2 bg-rose-50 border-2 border-rose-500 rounded md:flex-1",children:[Object(o.jsx)("h1",{className:"serif font-bold pb-1 bg-rose-600 text-gray-50 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",children:x()(s).isSame(t.date)?"Today":"Tomorrow"}),Object(o.jsxs)("div",{className:"py-2 flex justify-center align-bottom  bg-rose-200",children:[Object(o.jsxs)("div",{className:"flex-1 border-r border-gray-500",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Sunrise"}),Object(o.jsx)("p",{children:t.astro.sunrise})]}),Object(o.jsxs)("div",{className:"flex-1",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Sunset"}),Object(o.jsx)("p",{children:t.astro.sunset})]})]}),Object(o.jsxs)("p",{className:"pt-4 font-bold text-red-600",children:[t.day.maxtemp_f,"\xb0",Object(o.jsx)("span",{className:"text-gray-500 font-bold",children:" | "}),Object(o.jsxs)("span",{className:"pb-4 font-bold text-blue-600",children:[t.day.mintemp_f,"\xb0"]})]}),Object(o.jsxs)("div",{className:"pt-2 flex justify-center items-center",children:[Object(o.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Max Wind"}),Object(o.jsxs)("p",{children:[t.day.maxwind_mph," mph"]})]}),Object(o.jsxs)("div",{className:"flex-1 border-r border-rose-500",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Total Precipitation"}),Object(o.jsxs)("p",{children:[t.day.totalprecip_in,'"']})]}),Object(o.jsxs)("div",{className:"flex-1",children:[Object(o.jsx)("h2",{className:"font-bold",children:"Rain/Snow"}),Object(o.jsxs)("p",{children:[t.day.daily_chance_of_rain,"%/",t.day.daily_chance_of_snow,"%"]})]})]})]})},m=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"pb-12 space-y-4 xl:space-y-8 2xl:space-y-12",children:[Object(o.jsx)(b,{location:t.location,current:t.current}),Object(o.jsxs)("div",{className:"space-y-4 pb-12 md:space-y-0 md:flex justify-center  items-center gap-4 xl:gap-8 2xl:gap-12",children:[Object(o.jsx)(j,{forecast:t.forecast.forecastday[0]}),Object(o.jsx)(j,{forecast:t.forecast.forecastday[1]})]})]})},h=function(){return Object(o.jsx)("footer",{className:"py-1 absolute inset-x-0 bottom-0 bg-rose-700 text-gray-100 border-t-4 border-rose-400",children:Object(o.jsx)("p",{children:"\xa92021 Seth Strouf"})})};var p=function(){var e=s(24),t=/^[0-9]{5}$/,c=r.a.useState(""),a=Object(l.a)(c,2),n=a[0],i=a[1],x=r.a.useState(null),b=Object(l.a)(x,2),j=b[0],p=b[1];return Object(o.jsx)("div",{className:"text-center typography text-gray-800 bg-gray-50 sm:text-lg lg:text-xl 2xl:text-2xl",children:Object(o.jsxs)("div",{className:"min-h-screen relative mx-auto  px-4 sm:px-8 lg:px-12 xl:px-24 2xl:px-48\n",children:[Object(o.jsx)("h1",{className:"serif font-bold pt-4 text-rose-700 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",children:"Weather App"}),Object(o.jsx)(d,{handleChange:function(e){i(e.target.value)},handleSubmit:function(s){s.preventDefault();var c=document.getElementById("error");""!==n?t.test(n)?e("https://api.weatherapi.com/v1/forecast.json?key=".concat("704a519b616d41f7a8c10053211411","&q=").concat(n,"&days=2&aqi=no&alerts=no")).then((function(e){p(e.data),c.innerText="\xa0",document.getElementById("zip").value=""})).catch((function(e){c.textContent=e.response.data.error.message,console.log(e)})):c.textContent="Must be 5 numbers":c.textContent="Cannot be blank"}}),null===j?null:Object(o.jsx)(m,{data:j}),Object(o.jsx)(h,{})]})})};n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3a0184ba.chunk.js.map