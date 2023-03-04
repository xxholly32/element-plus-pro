import{_ as a,o as s,c as l,a as d,w as r,e as i,b as t,d as o,r as n}from"./app.8cd10991.js";const S=JSON.parse('{"title":"TimeSelect","description":"","frontmatter":{"title":"TimeSelect","lang":"en-US"},"headers":[{"level":2,"title":"Fixed time picker","slug":"fixed-time-picker","link":"#fixed-time-picker","children":[]},{"level":2,"title":"Time Formats","slug":"time-formats","link":"#time-formats","children":[]},{"level":2,"title":"Fixed time range","slug":"fixed-time-range","link":"#fixed-time-range","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[]}],"relativePath":"custom/time-select.md","lastUpdated":1677313924000}'),m={name:"custom/time-select.md"},c=i('<h1 id="timeselect" tabindex="-1">TimeSelect <a class="header-anchor" href="#timeselect" aria-hidden="true">#</a></h1><p>Use Time Select for time input.</p><p>The available time range is 00:00 to 23:59</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component requires the <code>&lt;client-only&gt;&lt;/client-only&gt;</code> wrap when used in SSR (eg: <a href="https://nuxt.com/v3" target="_blank" rel="noreferrer">Nuxt</a>) and SSG (eg: <a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">VitePress</a>).</p></div><h2 id="fixed-time-picker" tabindex="-1">Fixed time picker <a class="header-anchor" href="#fixed-time-picker" aria-hidden="true">#</a></h2><p>Provide a list of fixed time for users to choose.</p>',6),A=t("p",null,"time-select/basic",-1),h=i('<h2 id="time-formats" tabindex="-1">Time Formats <a class="header-anchor" href="#time-formats" aria-hidden="true">#</a></h2><p>Use <code>format</code> to control format of time(hours and minutes).</p><p>Check the list <a href="https://day.js.org/docs/en/display/format#list-of-all-available-formats" target="_blank" rel="noreferrer">here</a> of all available formats of Day.js.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Pay attention to capitalization</p></div>',4),p=t("p",null,"time-select/time-formats",-1),u=t("h2",{id:"fixed-time-range",tabindex:"-1"},[o("Fixed time range "),t("a",{class:"header-anchor",href:"#fixed-time-range","aria-hidden":"true"},"#")],-1),f=t("p",null,"If start( end ) time is picked at first, then the status of end( start ) time's options will change accordingly.",-1),D=t("p",null,"time-select/time-range",-1),_=i('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether TimeSelect is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>whether the input is editable</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>whether to show clear button</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>size of Input</td><td>string</td><td>large / default / small</td><td>default</td></tr><tr><td>placeholder</td><td>placeholder in non-range mode</td><td>string</td><td>—</td><td>—</td></tr><tr><td>name</td><td>same as <code>name</code> in native input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>effect</td><td>Tooltip theme, built-in theme: <code>dark</code> / <code>light</code></td><td>string</td><td>string</td><td>light</td></tr><tr><td>prefix-icon</td><td>Custom prefix icon component</td><td><code>string | Component</code></td><td>—</td><td>Clock</td></tr><tr><td>clear-icon</td><td>Custom clear icon component</td><td><code>string | Component</code></td><td>—</td><td>CircleClose</td></tr><tr><td>start</td><td>start time</td><td>string</td><td>—</td><td>09:00</td></tr><tr><td>end</td><td>end time</td><td>string</td><td>—</td><td>18:00</td></tr><tr><td>step</td><td>time step</td><td>string</td><td>—</td><td>00:30</td></tr><tr><td>min-time</td><td>minimum time, any time before this time will be disabled</td><td>string</td><td>—</td><td>00:00</td></tr><tr><td>max-time</td><td>maximum time, any time after this time will be disabled</td><td>string</td><td>—</td><td>—</td></tr><tr><td>format</td><td>set format of time</td><td>string</td><td>see <a href="https://day.js.org/docs/en/display/format#list-of-all-available-formats" target="_blank" rel="noreferrer">formats</a></td><td>HH:mm</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when user confirms the value</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: FocusEvent)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: FocusEvent)</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>focus the Input component</td><td>—</td></tr><tr><td>blur</td><td>blur the Input component</td><td>—</td></tr></tbody></table>',6);function g(C,v,b,E,T,F){const e=n("Demo");return s(),l("div",null,[c,d(e,{source:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Ch-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20placeholder%3D%22Select%20time%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A",path:"time-select/basic","raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Ch-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20placeholder%3D%22Select%20time%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3EUse%20%3Ccode%3Eel-time-select%3C%2Fcode%3E%20label%2C%20then%20assign%20start%20time%2C%20end%20time%20and%20time%20step%20with%20%3Ccode%3Estart%3C%2Fcode%3E%2C%20%3Ccode%3Eend%3C%2Fcode%3E%20and%20%3Ccode%3Estep%3C%2Fcode%3E.%3C%2Fp%3E%0A"},{default:r(()=>[A]),_:1}),h,d(e,{source:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cel-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20start%3D%2200%3A00%22%0A%20%20%20%20step%3D%2200%3A30%22%0A%20%20%20%20end%3D%2223%3A59%22%0A%20%20%20%20placeholder%3D%22Select%20time%22%0A%20%20%20%20format%3D%22hh%3Amm%20A%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A",path:"time-select/time-formats","raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cel-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20start%3D%2200%3A00%22%0A%20%20%20%20step%3D%2200%3A30%22%0A%20%20%20%20end%3D%2223%3A59%22%0A%20%20%20%20placeholder%3D%22Select%20time%22%0A%20%20%20%20format%3D%22hh%3Amm%20A%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:r(()=>[p]),_:1}),u,f,d(e,{source:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20startTime%20%3D%20ref('')%0Aconst%20endTime%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo-time-range%22%3E%0A%20%20%20%20%3Cel-time-select%0A%20%20%20%20%20%20v-model%3D%22startTime%22%0A%20%20%20%20%20%20%3Amax-time%3D%22endTime%22%0A%20%20%20%20%20%20class%3D%22mr-4%22%0A%20%20%20%20%20%20placeholder%3D%22Start%20time%22%0A%20%20%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cel-time-select%0A%20%20%20%20%20%20v-model%3D%22endTime%22%0A%20%20%20%20%20%20%3Amin-time%3D%22startTime%22%0A%20%20%20%20%20%20placeholder%3D%22End%20time%22%0A%20%20%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",path:"time-select/time-range","raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20startTime%20%3D%20ref('')%0Aconst%20endTime%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo-time-range%22%3E%0A%20%20%20%20%3Cel-time-select%0A%20%20%20%20%20%20v-model%3D%22startTime%22%0A%20%20%20%20%20%20%3Amax-time%3D%22endTime%22%0A%20%20%20%20%20%20class%3D%22mr-4%22%0A%20%20%20%20%20%20placeholder%3D%22Start%20time%22%0A%20%20%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cel-time-select%0A%20%20%20%20%20%20v-model%3D%22endTime%22%0A%20%20%20%20%20%20%3Amin-time%3D%22startTime%22%0A%20%20%20%20%20%20placeholder%3D%22End%20time%22%0A%20%20%20%20%20%20start%3D%2208%3A30%22%0A%20%20%20%20%20%20step%3D%2200%3A15%22%0A%20%20%20%20%20%20end%3D%2218%3A30%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:r(()=>[D]),_:1}),_])}const k=a(m,[["render",g]]);export{S as __pageData,k as default};